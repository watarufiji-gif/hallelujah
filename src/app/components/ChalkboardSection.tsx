"use client";

import { motion } from "framer-motion";
import { PenLine, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import fallback from "@/data/board.json";
import { useLang } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

type BoardData = {
  date: string; message: string; veggie: string; author: string;
  lunch_start: string; lunch_end: string;
  dinner_start: string; dinner_end: string;
  closed_days: string;
};

type StatusKind =
  | { kind: "open" }
  | { kind: "holiday" }
  | { kind: "before_today"; time: string }  // 0:00〜ランチ前 → 「本日の営業は HH:MMから」
  | { kind: "between"; time: string }       // ランチ後〜ディナー前 → 「次の営業は HH:MMから」
  | { kind: "after_close" };               // ディナー後〜23:59 → 「本日の営業は終了しました」

function getStatus(board: BoardData): StatusKind {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    hour: "numeric", minute: "numeric", second: "numeric",
    hour12: false, weekday: "short",
    year: "numeric", month: "numeric", day: "numeric",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find(p => p.type === t)?.value ?? "";
  const jstHour = Number(get("hour") === "24" ? "0" : get("hour"));
  const jstMin  = Number(get("minute"));
  const now = jstHour * 60 + jstMin;

  const dayMap: Record<string, string> = { Sun:"日", Mon:"月", Tue:"火", Wed:"水", Thu:"木", Fri:"金", Sat:"土" };
  const today = dayMap[get("weekday")] ?? "";

  if (board.closed_days?.includes(today)) return { kind: "holiday" };

  const toMin = (s: string) => {
    if (!s) return -1;
    const [h, m = "0"] = s.split(":");
    return Number(h) * 60 + Number(m);
  };
  const ls = toMin(board.lunch_start);
  const le = toMin(board.lunch_end);
  const ds = toMin(board.dinner_start);
  const de = toMin(board.dinner_end);

  // 営業中（ランチ or ディナー）
  if (ls >= 0 && le >= 0 && now >= ls && now < le) return { kind: "open" };
  if (ds >= 0 && de >= 0 && now >= ds && now < de) return { kind: "open" };

  // 0:00〜ランチ開始前：「本日の営業は HH:MMから」
  if (ls >= 0 && now < ls) return { kind: "before_today", time: board.lunch_start };

  // ランチ終了〜ディナー開始前：「次の営業は HH:MMから」
  if (ds >= 0 && le >= 0 && now >= le && now < ds) return { kind: "between", time: board.dinner_start };

  // ディナー終了後〜23:59：「本日の営業は終了しました」
  return { kind: "after_close" };
}

type CalendarEntry = { status: string; memo: string };

export default function ChalkboardSection() {
  const { lang } = useLang();
  const c = translations.chalk;
  const [board, setBoard] = useState<BoardData>(fallback);
  const [status, setStatus] = useState<StatusKind>(() => getStatus(fallback));
  const [calendar, setCalendar] = useState<CalendarEntry | null>(null);

  useEffect(() => {
    fetch("/api/board")
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data && data.date) {
          setBoard({
            ...fallback,
            ...data,
            lunch_start:  data.lunch_start  || fallback.lunch_start,
            lunch_end:    data.lunch_end    || fallback.lunch_end,
            dinner_start: data.dinner_start || fallback.dinner_start,
            dinner_end:   data.dinner_end   || fallback.dinner_end,
            closed_days:  data.closed_days  || fallback.closed_days,
          });
        }
      })
      .catch(() => {});
    fetch("/api/calendar")
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data) setCalendar(data); })
      .catch(() => {});
  }, []);

  // board 更新時 + 毎分 JST 時刻で再計算
  useEffect(() => {
    const compute = () => setStatus(getStatus(board));
    compute();
    const id = setInterval(compute, 60_000);
    return () => clearInterval(id);
  }, [board]);

  const isTempClosed = calendar?.status === "休業";
  const isShortHours = calendar?.status === "短縮";

  const statusLabel = (): string => {
    if (isTempClosed) {
      const base = t(c.statusTempClosed, lang);
      return calendar?.memo ? `${base}：${calendar.memo}` : base;
    }
    let label: string;
    if (status.kind === "open")         label = t(c.statusOpen, lang);
    else if (status.kind === "holiday") label = t(c.statusHoliday, lang);
    else if (status.kind === "after_close") label = t(c.statusClosed, lang);
    else if (status.kind === "between") label = `${t(c.statusNext, lang)} ${status.time}${t(c.statusFrom, lang)}`;
    else label = `${t(c.statusToday, lang)} ${status.time}${t(c.statusFrom, lang)}`;
    if (isShortHours && calendar?.memo) label += `（${calendar.memo}）`;
    return label;
  };

  const { date, message, veggie, author } = board;

  return (
    <section className="pt-6 pb-16 sm:pt-8 sm:pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32, rotate: -0.8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="bg-chalkboard rounded-3xl overflow-hidden shadow-2xl -rotate-[0.5deg]"
        >
          <div className="relative px-6 sm:px-10 py-8 sm:py-10">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <PenLine size={28} strokeWidth={1} className="text-white/60 shrink-0" />
                <div>
                  <p className="chalk-text-dim text-[10px] tracking-[0.35em] uppercase font-bold">{t(c.boardLabel, lang)}</p>
                  <h2 className="font-kiwi text-xl sm:text-2xl chalk-text flex items-center gap-2">
                    {t(c.boardH2, lang)} <Leaf size={16} strokeWidth={1} />
                  </h2>
                </div>
              </div>
              <span className="chalk-text-dim text-xs sm:text-sm font-kiwi self-start sm:self-auto">
                {date}
              </span>
            </div>

            <div className="relative">
              <div
                className="absolute -left-1 top-0 bottom-0 w-0.5 rounded-full opacity-20"
                style={{ background: "repeating-linear-gradient(to bottom, #e8e8d8 0px, #e8e8d8 6px, transparent 6px, transparent 10px)" }}
              />
              <blockquote className="pl-5 sm:pl-6">
                <p className="font-kiwi text-xl sm:text-2xl md:text-3xl chalk-text leading-relaxed">
                  「{message}」
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 text-xs chalk-text-dim px-3 py-1 rounded-full">
                    <Leaf size={11} strokeWidth={1} /> {t(c.vegLabel, lang)}<strong className="chalk-text">{veggie}</strong>
                  </span>
                  <span className="chalk-text-dim text-xs">{author}</span>
                </footer>
              </blockquote>
            </div>

          </div>

          <div
            className="px-6 sm:px-10 py-3 flex items-center gap-2"
            style={{ background: isTempClosed ? "#3a0e0e" : status.kind === "open" ? "#142318" : "#0e1a10" }}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              {!isTempClosed && status.kind === "open" ? (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8d5b0] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3d7a52]" />
                </>
              ) : (
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white/20" />
              )}
            </span>
            <span className="chalk-text-dim text-xs">{statusLabel()}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
