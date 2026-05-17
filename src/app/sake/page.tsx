"use client";

import { motion } from "framer-motion";
import { Clock, Users, Wine } from "lucide-react";
import menuData from "@/data/menu.json";
import Footer from "../components/Footer";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const { plan, list } = menuData.sake;

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
      className="rounded-2xl p-5 cursor-default border"
      style={{
        background: "rgba(255,255,255,0.05)",
        borderColor: "rgba(201,134,42,0.25)",
        transform: `rotate(${rot}deg)`,
      }}
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl shrink-0">{sake.emoji}</span>
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
        {/* 提灯光 */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#c9862a]/12 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#c9862a]/08 blur-3xl" />
          <span className="absolute top-28 left-[7%] text-6xl opacity-[0.07] rotate-12 select-none">🍶</span>
          <span className="absolute bottom-20 right-[7%] text-5xl opacity-[0.07] -rotate-6 select-none">🍶</span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#c9862a]/20 border border-[#c9862a]/40 text-[#e8c55a] text-xs font-bold px-4 py-1.5 rounded-full mb-5"
          >
            🎉 ついに解禁！
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight mb-4"
          >
            農家直営の肴と合わせたい、<br />
            <span className="text-[#e8c55a]">全国の日本酒 飲み放題。</span>
            <span className="ml-2 not-italic">🍶</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {plan.desc}
          </motion.p>
        </div>
      </section>

      {/* ─── プランカード ─── */}
      <section className="bg-night py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 36, rotate: -0.6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="rounded-3xl p-7 sm:p-10 mb-16 border shadow-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(201,134,42,0.12), rgba(15,28,20,0.9))",
              borderColor: "rgba(201,134,42,0.3)",
              transform: "rotate(-0.4deg)",
            }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="text-6xl shrink-0">🍶</div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl text-[#e8c55a] font-bold mb-2">{plan.name}</h2>
                <div className="flex flex-wrap gap-4 mb-3">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Clock size={15} className="text-[#c9862a]" /> {plan.duration}
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Users size={15} className="text-[#c9862a]" /> お一人様からOK
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Wine size={15} className="text-[#c9862a]" /> 全{list.length}種類以上
                  </div>
                </div>
                <p className="text-white/40 text-xs">{plan.notice}</p>
              </div>
              <div className="shrink-0 text-right">
                <div className="font-serif text-5xl text-white font-bold">{plan.price}</div>
                <div className="text-[#c9862a] text-sm font-bold">円（税込）</div>
                <div className="text-white/30 text-xs mt-1">{plan.duration}飲み放題</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[#e8c55a]/80 text-sm">
                🐴 熊本直送の馬刺しと日本酒の組み合わせ、一度体験したら忘れられません。
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
          </motion.div>

          {/* ─── 日本酒リスト ─── */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="font-serif text-2xl text-white font-bold text-center mb-10"
          >
            現在の日本酒ラインナップ
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((sake, i) => (
              <SakeCard key={sake.id} sake={sake} idx={i} />
            ))}
          </div>

          <p className="text-center text-white/25 text-xs mt-8">
            ※ラインナップは仕入れ状況により変更になる場合があります
          </p>
        </div>
      </section>

      {/* ─── 馬刺し×日本酒 コラボCTA ─── */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg,#0f1c14,#1a2e22)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="text-5xl mb-5">🐴 × 🍶</div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold mb-4">
              熊本直送 全9種の馬刺しと<br />全国厳選日本酒の組み合わせ
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg mx-auto">
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
