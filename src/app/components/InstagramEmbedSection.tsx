"use client";

import { useEffect, useState, useRef } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INSTAGRAM_POST } from "@/data/instagram-posts";

declare global {
  interface Window {
    instgrm?: { Embeds: { process(): void } };
    FB?: { XFBML: { parse(node?: Element | Document): void } };
  }
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const FB_PAGE = "https://www.facebook.com/profile.php?id=100064256194563";

export default function InstagramEmbedSection() {
  const [postUrl, setPostUrl] = useState(INSTAGRAM_POST);
  const igColRef = useRef<HTMLDivElement>(null);
  const [igHeight, setIgHeight] = useState(600);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    fetch("/api/board")
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.instagram_url) setPostUrl(data.instagram_url);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (window.instgrm) window.instgrm.Embeds.process();
  }, [postUrl]);

  useEffect(() => {
    if (window.FB) window.FB.XFBML.parse();
  }, []);

  // Instagram列の高さをリアルタイムで監視
  useEffect(() => {
    const el = igColRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      if (el.offsetHeight > 0) setIgHeight(el.offsetHeight);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // 2カラムになるブレークポイント (md = 768px) を監視
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => setIsMd(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section id="instagram" className="py-16 sm:py-24" style={{ background: "#f0f5f2" }}>
      <div id="fb-root" />
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
      <Script
        src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v21.0"
        strategy="lazyOnload"
        onLoad={() => window.FB?.XFBML?.parse()}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-10">

        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10"
        >
          <div>
            <p className="sec-eyebrow mb-4">Instagram / Facebook</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold" style={{ color: "#1a1a1a" }}>
              ハレルヤの日常
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://www.instagram.com/chogo_hareruya/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-sm hover:opacity-60 transition-opacity"
              style={{ color: "#1a3a2a" }}
            >
              @chogo_hareruya をフォロー
              <ArrowRight size={13} strokeWidth={1.5} />
            </a>
            <a
              href={FB_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-sm hover:opacity-60 transition-opacity"
              style={{ color: "#1a3a2a" }}
            >
              Facebookもフォロー
              <ArrowRight size={13} strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>

        {/* 2カラム: 左=Instagram / 右=Facebook */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
        >
          {/* 左: Instagram（高さの基準） */}
          <div ref={igColRef} className="flex justify-center">
            <blockquote
              key={postUrl}
              className="instagram-media"
              data-instgrm-permalink={`${postUrl}?utm_source=ig_embed`}
              data-instgrm-version="14"
              style={{ margin: "0", maxWidth: "540px", minWidth: "326px", width: "100%" }}
            >
              <a
                href={postUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1a3a2a", fontSize: "0.75rem" }}
              >
                Instagramで見る
              </a>
            </blockquote>
          </div>

          {/* 右: Facebook（デスクトップではInstagramの高さに揃えてはみ出しを非表示）*/}
          <div
            className="flex justify-center overflow-hidden"
            style={isMd ? { maxHeight: igHeight } : undefined}
          >
            <div
              className="fb-page"
              data-href={FB_PAGE}
              data-tabs="timeline"
              data-width="500"
              data-height="800"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
