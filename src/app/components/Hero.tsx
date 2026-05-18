"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const rise = (d = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease: EASE },
});

/* SVG ノイズフィルター（黒板のザラつき）*/
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E")`;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pb-20 md:pb-0"
      style={{
        backgroundColor: "#1b2e22",
        backgroundImage: `${NOISE_SVG}, radial-gradient(ellipse 80% 60% at 30% 40%, #22392b 0%, #1b2e22 60%, #141f18 100%)`,
      }}
    >
      {/* チョーク書き風ライン装飾 */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        aria-hidden
      >
        <line x1="0" y1="38%" x2="100%" y2="38%" stroke="#e8e8d8" strokeWidth="1" strokeDasharray="6 14" />
        <line x1="0" y1="62%" x2="100%" y2="62%" stroke="#e8e8d8" strokeWidth="1" strokeDasharray="4 18" />
        <line x1="22%" y1="0" x2="22%" y2="100%" stroke="#e8e8d8" strokeWidth="1" strokeDasharray="5 20" />
      </svg>

      {/* 野菜フローティング（チョーク落書き風・薄め） */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <span className="absolute top-24  right-[13%] text-5xl opacity-[0.10] rotate-12">🥬</span>
        <span className="absolute bottom-28 left-[9%]  text-4xl opacity-[0.08] -rotate-8">🍅</span>
        <span className="absolute top-2/3  right-[7%]  text-3xl opacity-[0.07]  rotate-5">🌽</span>
        <span className="absolute top-1/4  left-[16%] text-3xl opacity-[0.09] -rotate-10">🥕</span>
        <span className="absolute top-1/2  left-[5%]  text-2xl opacity-[0.06]  rotate-20">🌾</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-20 pb-12 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[calc(100vh-5rem)]">

          {/* ─── 左：コピー ─── */}
          <div className="space-y-7">

            {/* バッジ */}
            <motion.span
              {...rise(0.1)}
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(232,200,140,0.14)",
                border: "1px solid rgba(232,200,140,0.32)",
                color: "#e8c88c",
              }}
            >
              🌿 農家直営・長後駅 東口 徒歩3分・チャージ0円
            </motion.span>

            {/* ストア名（Kiwi Maru / 黒板に書いたような）*/}
            <motion.div {...rise(0.18)}>
              <span
                className="block font-kiwi text-sm tracking-[0.4em] mb-1"
                style={{ color: "rgba(168,213,176,0.7)" }}
              >
                農村かふぇ
              </span>
              <span
                className="block font-kiwi text-5xl sm:text-6xl md:text-5xl lg:text-6xl leading-none"
                style={{
                  color: "#f0ece0",
                  textShadow: "0 0 40px rgba(240,236,224,0.12), 2px 2px 0 rgba(0,0,0,0.4)",
                }}
              >
                ハレルヤ
              </span>
            </motion.div>

            {/* キャッチコピー（Noto Serif JP / 明朝体の品格）*/}
            <motion.h1 {...rise(0.28)} className="leading-snug">
              <span
                className="block font-serif text-2xl sm:text-3xl font-bold"
                style={{ color: "#e8e8d8" }}
              >
                農家直営だから、美味い。
              </span>
              <span
                className="block font-serif text-xl sm:text-2xl mt-1"
                style={{ color: "rgba(232,232,216,0.65)" }}
              >
                新鮮野菜の力強さと、驚きのコスパ。
              </span>
            </motion.h1>

            {/* サブコピー */}
            <motion.p
              {...rise(0.37)}
              className="text-sm sm:text-base leading-relaxed max-w-md"
              style={{ color: "rgba(232,232,216,0.55)" }}
            >
              毎朝仕入れる地物野菜をふんだんに。ラーメンから馬刺し、日本酒まで。いつ誰と来ても大満足できる
              <em className="not-italic font-serif" style={{ color: "rgba(232,232,216,0.8)" }}>「まちの台所」</em>。
            </motion.p>

            {/* CTA */}
            <motion.div {...rise(0.46)} className="flex flex-wrap gap-4">
              <a
                href="https://www.hotpepper.jp/strJ001342063/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sun"
              >
                <CalendarCheck size={16} />
                ネット予約
              </a>
              <Link
                href="/menu"
                className="btn-ghost"
                style={{ borderColor: "rgba(232,232,216,0.35)", color: "#e8e8d8" }}
              >
                メニューを見る
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* クイック数字（チョーク書き風）*/}
            <motion.div
              {...rise(0.55)}
              className="flex gap-6 pt-1"
            >
              {[
                { val: "550円〜", sub: "ランチ" },
                { val: "280円",   sub: "大ジョッキサワー" },
                { val: "無料",    sub: "駐車場" },
              ].map(s => (
                <div key={s.sub}>
                  <div className="font-kiwi text-2xl" style={{ color: "#d4a96a" }}>{s.val}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(232,232,216,0.35)" }}>{s.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── 右：ビジュアル ─── */}
          <motion.div
            initial={{ opacity: 0, x: 44, rotate: 1.8 }}
            animate={{ opacity: 1, x: 0, rotate: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
            className="hidden md:block relative"
          >
            {/* メイン枠（黒板の額縁風）*/}
            <div
              className="aspect-[4/3] rounded-2xl flex items-center justify-center shadow-2xl rotate-1 relative overflow-hidden"
              style={{
                background: "#22392b",
                border: "3px solid rgba(232,200,140,0.2)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 0 60px rgba(0,0,0,0.3)",
              }}
            >
              <div className="text-center" style={{ color: "rgba(232,232,216,0.3)" }}>
                <div className="text-7xl mb-3 opacity-50">🍜</div>
                <p className="font-kiwi text-sm">メインビジュアル写真</p>
                <p className="text-xs mt-1 opacity-50">（写真差し替え予定）</p>
              </div>
            </div>

            {/* 馬刺しメモ風カード */}
            <div
              className="absolute -bottom-5 -left-7 rounded-xl shadow-xl p-4 -rotate-2"
              style={{ background: "#FAF6F0", border: "1px solid #EDE0CC" }}
            >
              <div className="text-xl mb-0.5">🐴</div>
              <div className="font-kiwi text-xs font-medium text-[#2c1810]">熊本直送 馬刺し</div>
              <div className="text-[#e8720c] text-xs font-bold mt-0.5">880円〜</div>
            </div>

            {/* 日本酒メモ風カード */}
            <div
              className="absolute -top-4 -right-3 rounded-xl shadow-xl p-4 rotate-2"
              style={{ background: "#22392b", border: "1px solid rgba(212,169,106,0.4)" }}
            >
              <div className="text-xl mb-0.5">🍶</div>
              <div className="font-kiwi text-xs" style={{ color: "#e8c88c" }}>日本酒 飲み放題</div>
              <div className="text-xs font-bold mt-0.5" style={{ color: "rgba(232,200,140,0.7)" }}>解禁！1,980円〜</div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* スクロール誘導 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center hidden md:block"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.4 }}
        style={{ color: "rgba(232,232,216,0.25)" }}
      >
        <div className="font-kiwi text-[10px] tracking-[0.35em] mb-1">scroll</div>
        <div className="text-sm">↓</div>
      </motion.div>
    </section>
  );
}
