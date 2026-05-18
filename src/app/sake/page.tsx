"use client";

import { motion } from "framer-motion";
import { Wine, Users } from "lucide-react";
import menuData from "@/data/menu.json";
import Footer from "../components/Footer";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const { desc, notice, plans, list } = menuData.sake;

type SakeItem = typeof list[0];

function SakeCard({ sake, idx }: { sake: SakeItem; idx: number }) {
  const rot = idx % 2 === 0 ? 0.7 : -0.8;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: rot * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: rot }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.06 * idx, ease: EASE }}
      whileHover={{ rotate: 0, y: -6, transition: { duration: 0.2 } }}
      className="p-5 cursor-default border"
      style={{
        background: "rgba(255,255,255,0.04)",
        borderColor: "rgba(201,134,42,0.2)",
        transform: `rotate(${rot}deg)`,
      }}
    >
      <div className="flex items-start gap-3">
        <Wine size={18} strokeWidth={1} className="text-[#c9862a] shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap mb-0.5">
            <h3 className="font-serif text-lg font-bold text-white">{sake.name}</h3>
            <span className="text-[#c9862a] text-sm">{sake.grade}</span>
          </div>
          <p className="text-[#e8c55a]/70 text-xs font-semibold mb-1.5">
            {sake.region} ／ {sake.type}
          </p>
          <p className="text-white/50 text-xs leading-relaxed">{sake.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SakePage() {
  return (
    <>
      {/* ─── ヒーロー ─── */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-night pt-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#c9862a]/12 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#c9862a]/08 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.35em] uppercase font-bold mb-5"
            style={{ color: "#c9862a" }}
          >
            Sake All-You-Can-Drink
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight mb-4"
          >
            農家直営の肴と合わせたい、<br />
            <span className="text-[#e8c55a]">全国の日本酒 飲み放題。</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {desc}
          </motion.p>
        </div>
      </section>

      {/* ─── 4プランテーブル ─── */}
      <section className="bg-night py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-6 mb-3">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Users size={14} strokeWidth={1} className="text-[#c9862a]" />
                お一人様からOK
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Wine size={14} strokeWidth={1} className="text-[#c9862a]" />
                全{list.length}種類以上
              </div>
            </div>
            <p className="text-white/30 text-xs">{notice}</p>
          </motion.div>

          {/* プランカード 4枚 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
            {plans.map((p, i) => (
              <motion.div
                key={p.duration}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
                className="border p-6 sm:p-8 flex flex-col gap-3"
                style={{
                  borderColor: i === 3
                    ? "rgba(201,134,42,0.6)"
                    : "rgba(201,134,42,0.2)",
                  background: i === 3
                    ? "rgba(201,134,42,0.1)"
                    : "rgba(255,255,255,0.03)",
                }}
              >
                <div className="text-xs tracking-[0.15em] uppercase font-bold" style={{ color: "#c9862a" }}>
                  {p.duration}
                </div>
                <div>
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-white">
                    {p.price}
                  </span>
                  <span className="text-white/40 text-xs ml-1">円</span>
                </div>
                {i === 3 && (
                  <span className="text-[10px] tracking-[0.1em] uppercase" style={{ color: "#e8c55a" }}>
                    — Best Value
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-10 mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-white/50 text-sm leading-relaxed">
              熊本直送の馬刺しと日本酒の組み合わせ、<br className="hidden sm:block" />
              一度体験したら忘れられません。
            </p>
            <a
              href="https://www.hotpepper.jp/strJ001342063/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sun shrink-0"
            >
              今すぐ予約
            </a>
          </div>

          {/* ─── 日本酒リスト ─── */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="font-serif text-2xl text-white font-bold mb-10"
          >
            現在の日本酒ラインナップ
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((sake, i) => (
              <SakeCard key={sake.id} sake={sake} idx={i} />
            ))}
          </div>

          <p className="text-white/25 text-xs mt-8">
            ※ラインナップは仕入れ状況により変更になる場合があります
          </p>
        </div>
      </section>

      {/* ─── 馬刺し×日本酒 CTA ─── */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg,#0f1c14,#1a2e22)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-6" style={{ color: "#c9862a" }}>
              Pairing
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold mb-4 leading-snug">
              熊本直送 全9種の馬刺しと<br />全国厳選日本酒の組み合わせ
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg">
              農家直営だからできる新鮮な肴に、全国から選び抜いた日本酒を合わせる。これがハレルヤ流、大人の楽しみ方です。
            </p>
            <a
              href="https://www.hotpepper.jp/strJ001342063/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sun"
            >
              今夜の席を予約する
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
