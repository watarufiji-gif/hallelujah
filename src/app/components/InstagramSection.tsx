"use client";

import { motion } from "framer-motion";
import igData from "@/data/instagram.json";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const CORK_BG = `
  radial-gradient(ellipse 80% 60% at 40% 50%, #c8974a 0%, #b07d38 50%, #9a6a2a 100%)
`;

/* コルクボード穴（ピン）*/
function Pin({ color = "#c0392b" }: { color?: string }) {
  return (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
      <div
        className="w-5 h-5 rounded-full shadow-lg"
        style={{
          background: `radial-gradient(circle at 35% 30%, ${color}dd, ${color}88)`,
          boxShadow: "0 3px 8px rgba(0,0,0,0.35)",
        }}
      />
    </div>
  );
}

const PIN_COLORS = ["#c0392b", "#2980b9", "#27ae60", "#e67e22", "#8e44ad", "#16a085"];

type IgPost = typeof igData[0];

function PostCard({ post, idx }: { post: IgPost; idx: number }) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 44, rotate: post.rotate * 1.8 }}
      whileInView={{ opacity: 1, y: 0, rotate: post.rotate }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.07 * idx, ease: EASE }}
      whileHover={{
        rotate: 0,
        y: -10,
        scale: 1.04,
        zIndex: 20,
        transition: { duration: 0.2 },
      }}
      className="relative block cursor-pointer"
      style={{ transform: `rotate(${post.rotate}deg)` }}
    >
      <Pin color={PIN_COLORS[idx % PIN_COLORS.length]} />

      {/* カード本体（手書きの紙風）*/}
      <div
        className="rounded-xl overflow-hidden pt-4"
        style={{
          background: "#FAF6F0",
          boxShadow: "0 4px 24px rgba(0,0,0,0.22), 0 1px 3px rgba(0,0,0,0.12)",
          border: "1px solid rgba(161,120,60,0.15)",
        }}
      >
        {/* 写真エリア（プレースホルダー）*/}
        <div
          className="aspect-square flex flex-col items-center justify-center gap-2 mx-3"
          style={{
            background: post.bgColor,
            borderRadius: "8px",
          }}
        >
          <span className="text-5xl select-none" style={{ filter: "saturate(0.9)" }}>
            {post.emoji}
          </span>
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: "rgba(0,0,0,0.08)", color: "#5a4030" }}
          >
            {post.label}
          </span>
        </div>

        {/* キャプション */}
        <div className="px-3.5 py-3">
          <p
            className="font-kiwi text-xs leading-relaxed whitespace-pre-line"
            style={{ color: "#2c1810" }}
          >
            {post.caption}
          </p>
          <p className="text-[10px] mt-1.5" style={{ color: "#b09070" }}>
            @chogo_hareruya · {post.date}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

export default function InstagramSection() {
  return (
    <section
      id="instagram"
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{ background: CORK_BG }}
    >
      {/* コルクの木目風テクスチャ */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(88deg, transparent, transparent 22px, rgba(0,0,0,0.06) 22px, rgba(0,0,0,0.06) 23px), repeating-linear-gradient(178deg, transparent, transparent 34px, rgba(0,0,0,0.04) 34px, rgba(0,0,0,0.04) 35px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* ヘッダー */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {/* コルクボードタイトル（木に打ち付けた感）*/}
          <div
            className="inline-block px-6 py-2 rounded-lg mb-4 shadow-md"
            style={{
              background: "rgba(0,0,0,0.22)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p
              className="font-kiwi text-sm tracking-widest"
              style={{ color: "rgba(240,236,224,0.9)" }}
            >
              📌 ハレルヤの「いま」
            </p>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: "#FAF6F0" }}>
            インスタでの<br />
            <span style={{ color: "#fde68a" }}>日々の様子</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: "rgba(250,246,240,0.65)" }}>
            毎日のお弁当・馬刺し入荷・直売野菜など、最新情報を発信中
          </p>
        </motion.div>

        {/* コルクボード投稿グリッド */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6 mb-14 px-4 sm:px-0">
          {igData.map((post, i) => (
            <PostCard key={post.id} post={post} idx={i} />
          ))}
        </div>

        {/* Instagram フォロー CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/chogo_hareruya/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #833ab4, #fd1d1d 50%, #fcb045)",
              color: "white",
              boxShadow: "0 6px 28px rgba(131,58,180,0.4)",
            }}
          >
            <span className="text-xl">📸</span>
            <span>
              <span className="block text-xs font-normal opacity-80 leading-none mb-0.5">
                もっと今日のハレルヤをのぞく
              </span>
              <span>@chogo_hareruya をフォロー</span>
            </span>
          </a>

          <p className="mt-4 text-xs" style={{ color: "rgba(250,246,240,0.45)" }}>
            ※投稿画像はInstagramと連動しています。クリックで公式アカウントへ
          </p>
        </motion.div>
      </div>
    </section>
  );
}
