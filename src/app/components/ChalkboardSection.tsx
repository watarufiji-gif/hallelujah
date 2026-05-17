"use client";

import { motion } from "framer-motion";
import boardData from "@/data/board.json";

export default function ChalkboardSection() {
  const { date, message, veggie, author } = boardData;

  return (
    <section className="py-10 sm:py-14 bg-[#FAF6F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32, rotate: -0.8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="bg-chalkboard rounded-3xl overflow-hidden shadow-2xl -rotate-[0.5deg]"
        >
          {/* チョークボード本体 */}
          <div className="relative px-6 sm:px-10 py-8 sm:py-10">

            {/* 上部：チョーク風タイトル */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                {/* 黒板消し風アイコン */}
                <span className="text-3xl select-none">🪣</span>
                <div>
                  <p className="chalk-text-dim text-[10px] tracking-[0.35em] uppercase font-bold">Today&apos;s Board</p>
                  <h2 className="font-kiwi text-xl sm:text-2xl chalk-text">今日の黒板 🌾</h2>
                </div>
              </div>
              <span className="chalk-text-dim text-xs sm:text-sm font-kiwi self-start sm:self-auto">
                {date}
              </span>
            </div>

            {/* メッセージ本体 */}
            <div className="relative">
              {/* チョークのラフなアンダーライン風装飾 */}
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
                    🥬 本日の主役野菜：<strong className="chalk-text">{veggie}</strong>
                  </span>
                  <span className="chalk-text-dim text-xs">{author}</span>
                </footer>
              </blockquote>
            </div>

            {/* 右下：フローティングポイント */}
            <div className="mt-6 flex flex-wrap gap-2 justify-end">
              {["毎朝仕入れ", "農家直送", "今が旬"].map(tag => (
                <span key={tag} className="chalk-text-dim text-[10px] border border-white/15 rounded-full px-2.5 py-0.5 font-kiwi">
                  ✓ {tag}
                </span>
              ))}
            </div>

            {/* 四隅のチョーク汚れ風 */}
            <div className="absolute top-3 left-3  w-8 h-8 rounded-full bg-white/3 blur-sm" />
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/3 blur-sm" />
            <div className="absolute bottom-3 left-3  w-5 h-5 rounded-full bg-white/3 blur-sm" />
            <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/3 blur-sm" />
          </div>

          {/* 底部：ライブ感バー */}
          <div className="bg-[#142318] px-6 sm:px-10 py-3 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8d5b0] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3d7a52]" />
            </span>
            <span className="chalk-text-dim text-xs">
              現在営業中 — 今日も元気に開いてます！
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
