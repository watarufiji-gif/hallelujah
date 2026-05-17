"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const CARDS = [
  {
    icon: "🌾",
    label: "農家直営",
    title: "毎朝届く、\n長後の恵み",
    body: "姉妹農園「ふるうつらんど井上」から毎朝仕入れたばかり。産地直送だからできる鮮度と旨みを、そのままお皿に。農家が作る飯だから、正直に美味しい。",
    badge: "店頭でも直売中！",
    bg: "#edf7ef",
    accent: "#2d5a3d",
    tilt: -1.2,
  },
  {
    icon: "🍺",
    label: "圧倒的コスパ",
    title: "チャージ0円。\nサワー280円。",
    body: "ラーメン550円〜、大ジョッキサワー280円、席料・チャージ一切なし。「こんなに安くて旨いのか」という感動をお届けするのが、農家直営の使命です。",
    badge: "チャージ・席料なし",
    bg: "#fef4e6",
    accent: "#c85f0a",
    tilt: 1.1,
  },
  {
    icon: "👶",
    label: "温かい空間",
    title: "誰でも、\nひとりでも、おいで",
    body: "カウンターでひとり昼飲みも、ベビーカーOKの小上がり席でのファミリーランチも、みんなウェルカム。3回来店でお子様に地物フルーツをプレゼント🎁",
    badge: "ベビーカーOK・キッズ特典",
    bg: "#eef5ff",
    accent: "#2563a8",
    tilt: -0.8,
  },
] as const;

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ヘッダー */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="sec-eyebrow mb-3">WHY HALLELUJAH</p>
          <h2 className="sec-title-serif">
            ハレルヤが愛される<br />
            <span className="text-[#2d5a3d]">3つの理由</span>
            <span className="ml-2 text-2xl not-italic">🌾🍜🐴</span>
          </h2>
        </motion.div>

        {/* カード群（意図的にずらした配置） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 48, rotate: c.tilt * 1.8 }}
              whileInView={{ opacity: 1, y: 0, rotate: c.tilt }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: 0.1 * i, ease: EASE }}
              whileHover={{ rotate: 0, y: -8, transition: { duration: 0.22 } }}
              className={`relative rounded-3xl overflow-hidden shadow-md cursor-default ${i === 1 ? "md:mt-10" : i === 2 ? "md:-mt-4" : ""}`}
              style={{ background: c.bg }}
            >
              {/* 右上ブロブ装飾 */}
              <div
                className="absolute -top-8 -right-8 w-28 h-28 blob-a opacity-25"
                style={{ background: c.accent }}
              />
              <div className="relative p-7">
                <div className="text-4xl mb-3">{c.icon}</div>
                <span
                  className="text-[10px] font-bold tracking-widest uppercase mb-2 block"
                  style={{ color: c.accent }}
                >
                  {c.label}
                </span>
                <h3
                  className="font-serif text-xl font-bold leading-snug mb-3 whitespace-pre-line"
                  style={{ color: c.accent }}
                >
                  {c.title}
                </h3>
                <p className="text-[#4a3f32] text-sm leading-relaxed mb-5">{c.body}</p>
                <span
                  className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-sm"
                  style={{ background: c.accent }}
                >
                  ✓ {c.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ふるうつらんど 紹介バナー */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          className="mt-16 rounded-3xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#1a3a2a] to-[#2d5a3d] p-7 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
            <div className="text-6xl shrink-0">🏡</div>
            <div className="text-center sm:text-left">
              <p className="text-[#a8d5b0] text-[10px] font-bold tracking-widest uppercase mb-1">Sister Farm</p>
              <h3 className="font-serif text-2xl text-white font-bold mb-2">ふるうつらんど 井上</h3>
              <p className="text-white/65 text-sm leading-relaxed">
                長後の土地で、野菜もフルーツも一粒ずつ丁寧に育てています。農家直営だからこそできる「本物の鮮度」を、ハレルヤの食卓でご体験ください。
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTAバナー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          className="mt-10 text-center flex flex-wrap gap-4 justify-center"
        >
          <Link href="/menu" className="btn-forest">
            🍜 メニューをみる
          </Link>
          <Link href="/sake" className="btn-ghost">
            🍶 日本酒飲み放題
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
