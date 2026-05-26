"use client";

import { useEffect } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INSTAGRAM_POST } from "@/data/instagram-posts";

declare global {
  interface Window {
    instgrm?: { Embeds: { process(): void } };
  }
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function InstagramEmbedSection() {
  useEffect(() => {
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

      <div className="max-w-2xl mx-auto px-6 sm:px-10">

        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10"
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
            className="inline-flex items-center gap-2 font-bold text-sm shrink-0 hover:opacity-60 transition-opacity"
            style={{ color: "#1a3a2a" }}
          >
            @chogo_hareruya をフォロー
            <ArrowRight size={13} strokeWidth={1.5} />
          </a>
        </motion.div>

        {/* 1投稿・中央寄せ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={`${INSTAGRAM_POST}?utm_source=ig_embed`}
            data-instgrm-version="14"
            style={{ margin: "0 auto", maxWidth: "540px", minWidth: "326px", width: "100%" }}
          >
            <a
              href={INSTAGRAM_POST}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1a3a2a", fontSize: "0.75rem" }}
            >
              Instagramで見る
            </a>
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}
