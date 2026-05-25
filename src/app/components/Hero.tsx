"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";
import PhoneReserveButton from "./PhoneReserveButton";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Hero() {
  const { lang } = useLang();
  const h = translations.hero;

  return (
    <section id="top" className="relative bg-white overflow-hidden">

      {/* 背景ウォーターマーク — /public/images/hero-bg.svg を実写真に差し替え可能 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/hero-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />

      {/* ヘッダー直下から開始、画面高さは確保しつつ上詰め */}
      <div
        className="relative z-10"
        style={{ paddingTop: "calc(5rem + 2.5rem)", paddingBottom: "2.5rem", minHeight: "100svh" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <p className="sec-eyebrow mb-5">長後農村かふぇ</p>

              {/* ハレルヤ: サイズを抑えてキャッチコピーとの比率を縮める */}
              <h1
                className="font-serif font-bold leading-none mb-5"
                style={{ fontSize: "clamp(3.2rem, 6.5vw, 5rem)", color: "#1a1a1a" }}
              >
                ハレルヤ
              </h1>

              {/* キャッチコピー: 大きめにしてハレルヤとの差を縮める */}
              <p
                className="font-serif leading-relaxed mb-10"
                style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)", color: "#1a3a2a" }}
              >
                {t(h.tagline, lang)}
              </p>

              <div className="flex flex-wrap gap-4">
                <PhoneReserveButton label={t(h.reserve, lang)} className="btn-sun" />
                <Link href="/menu" className="btn-ghost">
                  {t(h.viewMenu, lang)}
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            >
              <div
                className="w-full aspect-[4/3] flex items-center justify-center"
                style={{ background: "rgba(245,245,245,0.85)", border: "1px solid #e5e5e5" }}
              >
                <span style={{ color: "#cccccc", fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase" }}>
                  Photo
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
