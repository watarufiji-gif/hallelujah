"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const rise = (d = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay: d, ease: EASE },
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, #1a3a2a 0%, #2d5a3d 45%, #1e3d2a 100%)",
      }}
    >
      {/* 有機的な背景装飾 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#3d7a52]/20 blob-a blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#e8720c]/12 blob-b blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2d5a3d]/30 blob-c blur-2xl" />
        {/* 浮遊する野菜 */}
        <span className="absolute top-20  right-[12%]  text-5xl opacity-15 rotate-12 select-none">🥬</span>
        <span className="absolute bottom-32 left-[8%]  text-4xl opacity-12 -rotate-8 select-none">🍅</span>
        <span className="absolute top-2/3 right-[6%]  text-3xl opacity-10  rotate-6 select-none">🌽</span>
        <span className="absolute top-1/4 left-[14%]  text-3xl opacity-12 -rotate-12 select-none">🥕</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-20 pb-12 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[calc(100vh-5rem)]">

          {/* ─── 左：コピー ─── */}
          <div className="space-y-6">
            <motion.span
              {...rise(0.1)}
              className="inline-flex items-center gap-2 bg-[#e8720c]/20 border border-[#e8720c]/35 text-[#f59339] text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-sm"
            >
              🌿 農家直営・長後駅徒歩3分・チャージ0円
            </motion.span>

            <motion.h1 {...rise(0.2)} className="text-white leading-[1.25]">
              <span className="block font-kiwi text-base sm:text-lg text-[#a8d5b0] mb-1 tracking-wide">
                農家直営だから、美味い。
              </span>
              <span className="block font-serif text-[clamp(2rem,5.5vw,3.4rem)] font-bold">
                新鮮野菜の
                <br className="md:hidden" />
                <span className="text-[#f59339]">力強さ</span>と、
              </span>
              <span className="block font-serif text-[clamp(2rem,5.5vw,3.4rem)] font-bold">
                驚きのコスパ。
              </span>
            </motion.h1>

            <motion.p {...rise(0.32)} className="text-white/65 text-base sm:text-lg leading-relaxed max-w-md">
              毎朝仕入れる地物野菜をふんだんに。ラーメンから馬刺し、日本酒まで。
              いつ誰と来ても大満足できる<strong className="text-white/85">「まちの台所」</strong>。
            </motion.p>

            <motion.div {...rise(0.44)} className="flex flex-wrap gap-4">
              <a
                href="https://www.hotpepper.jp/strJ001342063/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sun"
              >
                <CalendarCheck size={17} />
                ネット予約
              </a>
              <Link href="/menu" className="btn-ghost !border-white/40 !text-white hover:!bg-white/10 hover:!text-white">
                メニューを見る
                <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* クイック数字 */}
            <motion.div {...rise(0.54)} className="flex gap-6 pt-2">
              {[
                { val: "550円〜", sub: "ランチ" },
                { val: "280円",   sub: "大ジョッキサワー" },
                { val: "無料",    sub: "駐車場" },
              ].map(s => (
                <div key={s.sub}>
                  <div className="font-kiwi text-2xl text-[#f59339]">{s.val}</div>
                  <div className="text-white/40 text-xs mt-0.5">{s.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── 右：ビジュアル ─── */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 1.5 }}
            animate={{ opacity: 1, x: 0, rotate: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="hidden md:block relative"
          >
            {/* メイン枠（写真プレースホルダー） */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-gradient-to-br from-[#2d5a3d]/60 to-[#1a3a2a]/80 rotate-1">
              <div className="text-center text-white/50">
                <div className="text-8xl mb-3">🍜</div>
                <p className="text-sm">メインビジュアル写真</p>
                <p className="text-xs opacity-50 mt-1">（差し替え予定）</p>
              </div>
            </div>
            {/* フローティング馬刺しカード */}
            <div className="absolute -bottom-6 -left-8 bg-[#FAF6F0] rounded-2xl shadow-xl p-4 -rotate-2">
              <div className="text-2xl mb-1">🐴</div>
              <div className="text-xs font-bold text-[#1e1a14]">熊本直送 馬刺し</div>
              <div className="text-[#e8720c] text-xs font-bold mt-0.5">880円〜</div>
            </div>
            {/* フローティング日本酒カード */}
            <div className="absolute -top-5 -right-4 bg-[#e8720c] rounded-2xl shadow-xl p-4 rotate-2">
              <div className="text-2xl mb-1">🍶</div>
              <div className="text-xs font-bold text-white">日本酒飲み放題</div>
              <div className="text-white/80 text-xs font-bold mt-0.5">解禁！1,980円〜</div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* スクロール誘導 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/35 text-center hidden md:block"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      >
        <div className="text-[10px] tracking-[0.3em] uppercase mb-1">Scroll</div>
        <div className="text-sm">↓</div>
      </motion.div>
    </section>
  );
}
