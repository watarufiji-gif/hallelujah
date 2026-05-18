"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sprout, Wheat, Heart } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const FEATURES = [
  {
    Icon: Sprout,
    eyebrow: "農家直営",
    title: "毎朝届く、\n長後の恵み",
    body: "姉妹農園「ふるうつらんど井上」から毎朝仕入れたばかり。農家が自分で作って、自分で出す。産地直送だからできる鮮度と旨みを、そのままお皿に。",
    note: "店頭でも直売中",
  },
  {
    Icon: Wheat,
    eyebrow: "農家直接仕入れ",
    title: "新鮮で旨いのに、\nなぜ安いのか。",
    body: "農家から直接仕入れるから、仲介コストがかからない。だから新鮮で高品質なものを、驚きの価格でお出しできる。農家直営だけが実現できる、シンプルな理由です。",
    note: "農家直接仕入れ・品質そのまま",
  },
  {
    Icon: Heart,
    eyebrow: "温かい空間",
    title: "誰でも、\nひとりでも、おいで",
    body: "カウンターでひとり昼飲みも、ベビーカーOKの小上がり席でのファミリーランチも、みんなウェルカム。3回来店でお子様に地物フルーツをプレゼント。",
    note: "ベビーカーOK・キッズ特典あり",
  },
];

const NUMBERS = ["一", "二", "三"];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32" style={{ background: "#FAF6F0" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-8">

        {/* ヘッダー */}
        <motion.div
          className="mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="sec-eyebrow mb-5">WHY HALLELUJAH</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight" style={{ color: "#1e1a14" }}>
            ハレルヤが<br />
            <span style={{ color: "#2d5a3d" }}>愛される理由</span>
          </h2>
        </motion.div>

        {/* 縦並び エディトリアルリスト */}
        <div>
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-6 sm:gap-14 py-12 sm:py-16 border-t last:border-b"
              style={{ borderColor: "rgba(161,120,60,0.18)" }}
            >
              {/* 漢数字 */}
              <div
                className="font-serif text-5xl sm:text-7xl font-bold leading-none select-none pt-1"
                style={{ color: "rgba(161,120,60,0.2)" }}
              >
                {NUMBERS[i]}
              </div>

              {/* コンテンツ */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <f.Icon size={16} strokeWidth={1} style={{ color: "#8b6f47" }} />
                  <p className="text-[10px] tracking-[0.32em] uppercase font-bold" style={{ color: "#8b6f47" }}>
                    {f.eyebrow}
                  </p>
                </div>

                <h3
                  className="font-serif text-2xl sm:text-3xl font-bold mb-5 whitespace-pre-line"
                  style={{ color: "#2c1810", lineHeight: 1.5 }}
                >
                  {f.title}
                </h3>

                <p className="text-sm leading-[2] mb-7" style={{ color: "#6b5040", maxWidth: "34rem" }}>
                  {f.body}
                </p>

                <span className="text-xs tracking-[0.06em]" style={{ color: "#a89070" }}>
                  — {f.note}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 姉妹農園バナー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-20 sm:mt-28"
        >
          <div
            className="p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-8"
            style={{ background: "linear-gradient(135deg, #1b2e22, #22392b)" }}
          >
            <div className="text-5xl shrink-0 select-none">🏡</div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.32em] uppercase mb-2" style={{ color: "#a8d5b0" }}>
                Sister Farm
              </p>
              <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: "#f0ece0" }}>
                ふるうつらんど 井上
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(240,236,224,0.55)" }}>
                長後の土地で、野菜もフルーツも一粒ずつ丁寧に育てています。農家直営だからこそできる「本物の鮮度」を、ハレルヤの食卓でご体験ください。
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="/menu" className="btn-forest">🍜 メニューをみる</Link>
          <Link href="/sake" className="btn-ghost">🍶 日本酒飲み放題</Link>
        </motion.div>

      </div>
    </section>
  );
}
