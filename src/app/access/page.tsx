"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import { MapPin, Phone, Clock, Train, ParkingCircle, Navigation, CalendarDays } from "lucide-react";
import Footer from "../components/Footer";
import PhoneReserveButton from "../components/PhoneReserveButton";
import { useLang } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

declare global {
  interface Window {
    instgrm?: { Embeds: { process(): void } };
  }
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const MAP_EMBED =
  "https://maps.google.com/maps?q=長後農村かふぇ+ハレルヤ+神奈川県藤沢市長後&t=&z=17&ie=UTF8&iwloc=&output=embed";

const MAP_NAV =
  "https://www.google.com/maps/dir/?api=1&destination=長後農村かふぇ+ハレルヤ+藤沢市長後&travelmode=driving";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.62, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AccessPage() {
  const { lang } = useLang();
  const a = translations.access;

  const [calendarUrl, setCalendarUrl] = useState("");

  useEffect(() => {
    fetch("/api/board")
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data?.calendar_instagram_url) setCalendarUrl(data.calendar_instagram_url); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (calendarUrl && window.instgrm) window.instgrm.Embeds.process();
  }, [calendarUrl]);

  const HOURS = [
    { day: t(a.hr1day, lang), time: t(a.hr1time, lang), closed: true  },
    { day: t(a.hr2day, lang), time: t(a.hr2time, lang), closed: false },
    { day: t(a.hr3day, lang), time: t(a.hr3time, lang), closed: false },
    { day: t(a.hr4day, lang), time: t(a.hr4time, lang), closed: false },
  ].filter(h => h.day);

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />

      {/* ─── ページヒーロー ─── */}
      <div className="pt-20 md:pt-24" style={{ background: "#ffffff", borderBottom: "1px solid #e5e5e5" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="sec-eyebrow mb-5"
          >
            {t(a.eyebrow, lang)}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="font-serif text-4xl sm:text-5xl font-bold"
            style={{ color: "#1a1a1a" }}
          >
            {t(a.h1main, lang)}<span style={{ color: "#1a3a2a" }}>{t(a.h1span, lang)}</span>
          </motion.h1>
        </div>
      </div>

      <section className="py-20 sm:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">

          {/* ━━━ 店舗情報（最上部）━━━ */}
          <FadeUp>
            <div
              className="p-6 sm:p-8 shadow-md"
              style={{ background: "#ffffff", border: "1px solid #e5e5e5" }}
            >
              <h3 className="font-serif text-lg font-bold flex items-center gap-2 mb-5" style={{ color: "#1a1a1a" }}>
                <MapPin size={17} className="text-[#2d5a3d]" /> {t(a.storeInfo, lang)}
              </h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="font-semibold w-10 shrink-0" style={{ color: "#999999" }}>{t(a.storeName, lang)}</dt>
                  <dd style={{ color: "#1a1a1a" }}>{t(a.storeNameVal, lang)}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold w-10 shrink-0" style={{ color: "#999999" }}>{t(a.phoneLabel, lang)}</dt>
                  <dd>
                    <a
                      href="tel:0466-45-8866"
                      className="flex items-center gap-1.5 font-bold hover:underline"
                      style={{ color: "#1a3a2a" }}
                    >
                      <Phone size={13} /> 0466-45-8866
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3 sm:col-span-2">
                  <dt className="font-semibold w-10 shrink-0" style={{ color: "#999999" }}>{t(a.addrLabel, lang)}</dt>
                  <dd style={{ color: "#1a1a1a" }}>
                    {t(a.addrVal, lang)}
                    <span className="ml-2 text-xs font-semibold px-2 py-0.5" style={{ background: "rgba(61,122,82,0.1)", color: "#2d5a3d" }}>
                      {t(a.addrBadge, lang)}
                    </span>
                    <span className="block mt-1 text-xs" style={{ color: "#999999" }}>
                      {t(a.addrNote, lang)}
                    </span>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold w-10 shrink-0" style={{ color: "#999999" }}>{t(a.seatsLabel, lang)}</dt>
                  <dd style={{ color: "#1a1a1a" }}>{t(a.seatsVal, lang)}</dd>
                </div>
              </dl>
            </div>
          </FadeUp>

          {/* ━━━ 営業時間 ━━━ */}
          <FadeUp>
            <div className="p-6 shadow-md" style={{ background: "#ffffff", border: "1px solid #e5e5e5" }}>
              <h3 className="font-serif text-lg font-bold flex items-center gap-2 mb-4" style={{ color: "#1a1a1a" }}>
                <Clock size={17} className="text-[#2d5a3d]" /> {t(a.hoursTitle, lang)}
              </h3>
              <div className="space-y-1">
                {HOURS.map(h => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center py-2 border-b last:border-0 ${h.closed ? "opacity-40" : ""}`}
                    style={{ borderColor: "rgba(161,120,60,0.12)" }}
                  >
                    <span className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>{h.day}</span>
                    <span className="text-sm font-bold" style={{ color: h.closed ? "#ef4444" : "#2d5a3d" }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* ━━━ 今月の営業カレンダー ━━━ */}
          {calendarUrl && (
            <FadeUp>
              <div className="shadow-md overflow-hidden" style={{ background: "#ffffff", border: "1px solid #e5e5e5" }}>
                <div className="px-6 py-4 flex items-center gap-2" style={{ borderBottom: "1px solid #e5e5e5" }}>
                  <CalendarDays size={17} className="text-[#2d5a3d]" />
                  <p className="font-serif text-lg font-bold" style={{ color: "#1a1a1a" }}>今月の営業カレンダー</p>
                </div>
                <div style={{ maxHeight: "600px", overflowY: "auto" }}>
                  <blockquote
                    key={calendarUrl}
                    className="instagram-media"
                    data-instgrm-permalink={`${calendarUrl}?utm_source=ig_embed`}
                    data-instgrm-version="14"
                    style={{ margin: "0", maxWidth: "100%", minWidth: "0", width: "100%" }}
                  >
                    <a href={calendarUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#1a3a2a", fontSize: "0.75rem" }}>
                      Instagramで見る
                    </a>
                  </blockquote>
                </div>
              </div>
            </FadeUp>
          )}

          {/* ━━━ 地図 ━━━ */}
          <FadeUp>
            <div className="flex flex-col overflow-hidden shadow-xl" style={{ border: "1px solid #e5e5e5" }}>
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="360"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="長後農村かふぇ ハレルヤ の地図"
              />
              <a
                href={MAP_NAV}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ background: "#4285F4", color: "white" }}
              >
                <Navigation size={16} />
                {t(a.navBtn, lang)}
              </a>
            </div>
          </FadeUp>

          {/* ━━━ 駐車場アラート（上下真ん中・最重要）━━━ */}
          <FadeUp>
            <div
              className="overflow-hidden shadow-xl"
              style={{ border: "2px solid rgba(232,114,12,0.35)" }}
            >
              <div
                className="px-5 sm:px-8 py-3 flex items-center gap-3"
                style={{ background: "#1a3a2a" }}
              >
                <ParkingCircle size={18} strokeWidth={1.5} className="text-white shrink-0" />
                <span className="text-white font-black text-sm tracking-wide">
                  {t(a.parkHeader, lang)}
                </span>
              </div>
              <div
                className="px-6 sm:px-10 py-8"
                style={{ background: "#FFF8F0" }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div
                    className="w-16 h-16 flex items-center justify-center shrink-0"
                    style={{ background: "#1a3a2a" }}
                  >
                    <ParkingCircle size={30} strokeWidth={1} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold mb-2" style={{ color: "#1a1a1a" }}>
                      {t(a.parkH2pre, lang)}
                      <span className="text-4xl font-black text-[#1a3a2a] ml-1">{t(a.parkFree, lang)}</span>！
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4a3f32" }}>
                      {t(a.parkBody, lang)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* ━━━ アクセス方法カード（変わらず）━━━ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FadeUp delay={0.1}>
              <div
                className="p-6 shadow-md flex gap-4 items-start"
                style={{ background: "#ffffff", border: "1px solid #e5e5e5" }}
              >
                <Train size={24} strokeWidth={1} className="text-[#2d5a3d] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold mb-1" style={{ color: "#1a1a1a" }}>{t(a.trainTitle, lang)}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a3f32" }}>
                    {t(a.trainBody, lang)}
                  </p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.14}>
              <div
                className="p-6 shadow-md flex gap-4 items-start"
                style={{ background: "#FFF8F0", border: "2px solid rgba(232,114,12,0.25)" }}
              >
                <ParkingCircle size={24} strokeWidth={1} className="text-[#1a3a2a] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold mb-1" style={{ color: "#1a1a1a" }}>{t(a.carTitle, lang)}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a3f32" }}>
                    {t(a.carBody, lang)}
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ━━━ 予約 CTA ━━━ */}
          <FadeUp className="text-center py-4">
            <p className="text-sm mb-5" style={{ color: "#999999" }}>
              {t(a.reserveCta, lang)}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PhoneReserveButton label={t(a.reserveBtn, lang)} className="btn-sun" />
            </div>
          </FadeUp>

        </div>
      </section>

      <Footer />
    </>
  );
}
