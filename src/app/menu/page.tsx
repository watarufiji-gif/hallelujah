"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "@/data/menu.json";
import Footer from "../components/Footer";

type Tab = "lunch" | "dinner";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const ROTATIONS = [1.1, -0.9, 1.4, -0.7, 0.8, -1.2, 0.6, -1.0, 1.3];

type MenuItem = typeof menuData.lunch[0];

function MenuCard({ item, idx }: { item: MenuItem; idx: number }) {
  const rot = ROTATIONS[idx % ROTATIONS.length];
  return (
    <motion.article
      initial={{ opacity: 0, y: 36, rotate: rot * 1.6 }}
      animate={{ opacity: 1, y: 0, rotate: rot }}
      exit={{ opacity: 0, y: -20, rotate: rot * -0.5 }}
      transition={{ duration: 0.5, delay: 0.05 * idx, ease: EASE }}
      whileHover={{ rotate: 0, y: -7, transition: { duration: 0.2 } }}
      className="relative rounded-3xl overflow-hidden shadow-sm cursor-default"
      style={{
        background: "white",
        transform: `rotate(${rot}deg)`,
      }}
    >
      {/* 人気 / タグバッジ */}
      {item.popular && (
        <span className="absolute -top-2 -right-2 z-10 bg-[#e8720c] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md">
          人気
        </span>
      )}
      {item.tag && !item.popular && (
        <span className="absolute -top-2 -left-2 z-10 bg-[#2d5a3d] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md">
          {item.tag}
        </span>
      )}

      {/* 写真プレースホルダー */}
      <div
        className="h-36 flex items-center justify-center text-5xl"
        style={{ background: "linear-gradient(135deg,#edf7ef,#f5f0e8)" }}
      >
        {item.emoji}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-serif text-base font-bold text-[#1e1a14] leading-snug flex-1">
            {item.name}
          </h3>
          <span className="price-stamp shrink-0">¥{item.price}</span>
        </div>
        <p className="text-[#8b7b6a] text-xs leading-relaxed">{item.desc}</p>
      </div>
    </motion.article>
  );
}

export default function MenuPage() {
  const [tab, setTab] = useState<Tab>("lunch");

  const items = tab === "lunch" ? menuData.lunch : menuData.dinner;

  return (
    <>
      {/* ページヒーロー */}
      <div className="pt-20 md:pt-24 bg-gradient-to-b from-[#1a3a2a] to-[#2d5a3d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#a8d5b0] text-[10px] tracking-[0.3em] uppercase font-bold mb-3"
          >
            Our Menu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight"
          >
            農家直営の<span className="text-[#f59339]">こだわりメニュー</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-white/50 text-sm mt-4"
          >
            仕入れにより変更になる場合があります。
          </motion.p>
        </div>
      </div>

      {/* タブ切り替え */}
      <div className="sticky top-16 md:top-20 z-30 bg-[#FAF6F0]/92 backdrop-blur-md border-b border-[#EDE0CC] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 py-2">
            {([
              { key: "lunch",  label: "☀️ ランチ",   sub: "11:30〜14:30" },
              { key: "dinner", label: "🌙 ディナー",  sub: "17:00〜22:00" },
            ] as const).map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex-1 sm:flex-none flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-2 px-4 sm:px-8 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  tab === t.key
                    ? "bg-[#1a3a2a] text-white shadow-md"
                    : "text-[#8b7b6a] hover:bg-[#EDE0CC]/60"
                }`}
              >
                <span>{t.label}</span>
                <span className="text-[10px] opacity-60">{t.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* メニューグリッド */}
      <section className="py-14 sm:py-20 bg-paper min-h-[50vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {tab === "lunch" && (
            <div className="mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2d5a3d] flex items-center justify-center text-white text-base shadow">☀️</div>
              <div>
                <p className="text-[10px] font-bold text-[#3d7a52] tracking-widest uppercase">Lunch 11:30〜14:30</p>
                <h2 className="font-serif text-xl font-bold text-[#1e1a14]">ランチメニュー</h2>
              </div>
            </div>
          )}
          {tab === "dinner" && (
            <div className="mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e8720c] flex items-center justify-center text-white text-base shadow">🌙</div>
              <div>
                <p className="text-[10px] font-bold text-[#e8720c] tracking-widest uppercase">Dinner &amp; Bar 17:00〜22:00</p>
                <h2 className="font-serif text-xl font-bold text-[#1e1a14]">居酒屋メニュー</h2>
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            <div key={tab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {items.map((item, i) => (
                <MenuCard key={item.id} item={item} idx={i} />
              ))}
            </div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a
              href="https://www.hotpepper.jp/strJ001342063/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sun"
            >
              🍽️ ホットペッパーで全メニューを見る・予約
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
