"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* 和紙テクスチャ（SVGノイズ） */
const WASHI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`;

const CARDS = [
  {
    icon: "🌾",
    eyebrow: "農家直営",
    title: "毎朝届く、\n長後の恵み",
    body: "姉妹農園「ふるうつらんど井上」から毎朝仕入れたばかり。農家が自分で作って、自分で出す。産地直送だからできる鮮度と旨みを、そのままお皿に。",
    badge: "店頭でも直売中！",
    tilt: -1.6,
    delay: 0.08,
    offsetClass: "",
  },
  {
    icon: "🍺",
    eyebrow: "圧倒的コスパ",
    title: "チャージ0円。\nサワー280円。",
    body: "ラーメン550円〜、大ジョッキサワー280円、席料・チャージは一切いただきません。「なんでこんなに旨くて安いのか」——農家直営がその答えです。",
    badge: "チャージ・席料なし",
    tilt: 1.3,
    delay: 0.18,
    offsetClass: "md:mt-8",
  },
  {
    icon: "👶",
    eyebrow: "温かい空間",
    title: "誰でも、\nひとりでも、おいで",
    body: "カウンターでひとり昼飲みも、ベビーカーOKの小上がり席でのファミリーランチも、みんなウェルカム。3回来店でお子様に地物フルーツをプレゼント🎁",
    badge: "ベビーカーOK・キッズ特典",
    tilt: -1.0,
    delay: 0.28,
    offsetClass: "md:mt-4",
  },
] as const;

function Card({ card, index }: { card: typeof CARDS[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: card.tilt * 2.2 }}
      whileInView={{ opacity: 1, y: 0, rotate: card.tilt }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.72, delay: card.delay, ease: EASE }}
      whileHover={{
        rotate: 0,
        y: -10,
        scale: 1.02,
        transition: { duration: 0.24, ease: "easeOut" },
      }}
      className={`relative rounded-3xl overflow-hidden cursor-default shadow-lg ${card.offsetClass}`}
      style={{
        background: "#FAF6F0",
        backgroundImage: WASHI,
        borderLeft: "3px solid rgba(161,120,60,0.18)",
        borderTop: "1px solid rgba(161,120,60,0.12)",
        transform: `rotate(${card.tilt}deg)`,
      }}
    >
      {/* ピン留め風ドット */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-md z-10"
        style={{
          background: index === 0 ? "#d97706" : index === 1 ? "#e8720c" : "#2d5a3d",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }}
      />

      <div className="p-7 pt-8">
        {/* アイコン（和紙に馴染む薄め） */}
        <div
          className="text-5xl mb-4 select-none"
          style={{ filter: "saturate(0.75) brightness(0.92)" }}
        >
          {card.icon}
        </div>

        {/* 眉テキスト */}
        <p
          className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2"
          style={{ color: "#8b6f47" }}
        >
          {card.eyebrow}
        </p>

        {/* タイトル（Noto Serif JP 明朝体）*/}
        <h3
          className="font-serif text-xl font-bold leading-snug mb-4 whitespace-pre-line"
          style={{ color: "#2c1810" }}
        >
          {card.title}
        </h3>

        {/* 本文 */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b5040" }}>
          {card.body}
        </p>

        {/* バッジ（手書きスタンプ風）*/}
        <span
          className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(45,90,61,0.1)",
            color: "#2d5a3d",
            border: "1px solid rgba(45,90,61,0.2)",
          }}
        >
          ✓ {card.badge}
        </span>
      </div>

      {/* 右下：うっすら繊維テクスチャ風オーバーレイ */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl"
        style={{
          background:
            "repeating-linear-gradient(95deg, transparent, transparent 18px, rgba(161,120,60,0.018) 18px, rgba(161,120,60,0.018) 19px)",
        }}
      />
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28" style={{ background: "#F4EFE6" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ヘッダー */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <p className="sec-eyebrow mb-3">WHY HALLELUJAH</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: "#1e1a14" }}>
            ハレルヤが愛される<br />
            <span style={{ color: "#2d5a3d" }}>3つの理由</span>
          </h2>
          <div className="mt-4 text-2xl space-x-2 select-none">
            <span>🌾</span><span>🍜</span><span>🐴</span>
          </div>
        </motion.div>

        {/* カード群（ピン留め風・ずらし配置）*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 pb-8">
          {CARDS.map((card, i) => (
            <Card key={card.eyebrow} card={card} index={i} />
          ))}
        </div>

        {/* ふるうつらんど 紹介バナー */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
          className="mt-16 rounded-3xl overflow-hidden"
        >
          <div
            className="p-7 sm:p-10 flex flex-col sm:flex-row items-center gap-6"
            style={{ background: "linear-gradient(135deg, #1b2e22, #22392b)" }}
          >
            <div className="text-6xl shrink-0 select-none">🏡</div>
            <div className="text-center sm:text-left">
              <p
                className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1"
                style={{ color: "#a8d5b0" }}
              >
                Sister Farm
              </p>
              <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: "#f0ece0" }}>
                ふるうつらんど 井上
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(240,236,224,0.6)" }}>
                長後の土地で、野菜もフルーツも一粒ずつ丁寧に育てています。農家直営だからこそできる「本物の鮮度」を、ハレルヤの食卓でご体験ください。
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <Link href="/menu" className="btn-forest">🍜 メニューをみる</Link>
          <Link href="/sake" className="btn-ghost">🍶 日本酒飲み放題</Link>
        </motion.div>

      </div>
    </section>
  );
}
