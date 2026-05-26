"use client";

import { useEffect } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INSTAGRAM_POSTS } from "@/data/instagram-posts";

declare global {
  interface Window {
    instgrm?: { Embeds: { process(): void } };
  }
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function InstagramEmbedSection() {
  useEffect(() => {
    // embed.js がすでにロード済みの場合（ページ再訪時など）再処理
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section id="instagram" className="py-16 sm:py-24" style={{ background: "#f0f5f2" }}>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10 sm:mb-14"
        >
          <div>
            <p className="sec-eyebrow mb-4">Instagram</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold" style={{ color: "#1a1a1a" }}>
              ハレルヤの日常
            </h2>
          </div>
          <a
            href="https://www.instagram.com/chogo_hareruya/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-sm shrink-0 group hover:opacity-60 transition-opacity"
            style={{ color: "#1a3a2a" }}
          >
            @chogo_hareruya をフォロー
            <ArrowRight size={13} strokeWidth={1.5} />
          </a>
        </motion.div>

        {/* 投稿グリッド — モバイルは横スクロール、sm以上はグリッド */}
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible">
          {INSTAGRAM_POSTS.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              className="min-w-[280px] sm:min-w-0 flex-shrink-0 sm:flex-shrink"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={`${url}?utm_source=ig_embed`}
                data-instgrm-version="14"
                style={{
                  margin: "0",
                  maxWidth: "100%",
                  minWidth: "0",
                  width: "100% !important",
                  border: "1px solid #e5e5e5",
                  borderRadius: "0",
                }}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1a3a2a", fontSize: "0.75rem" }}
                >
                  Instagramで見る
                </a>
              </blockquote>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
