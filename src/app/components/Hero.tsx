"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";
import PhoneReserveButton from "./PhoneReserveButton";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const rise = (d = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease: EASE },
});

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E")`;

export default function Hero() {
  const { lang } = useLang();
  const h = translations.hero;

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20 md:pb-0"
      style={{
        backgroundColor: "#1b2e22",
        backgroundImage: `${NOISE_SVG}, radial-gradient(ellipse 80% 60% at 50% 45%, #22392b 0%, #1b2e22 60%, #141f18 100%)`,
      }}
    >
      {/* チョーク書き風ライン装飾 */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" aria-hidden>
        <line x1="0" y1="38%" x2="100%" y2="38%" stroke="#e8e8d8" strokeWidth="1" strokeDasharray="6 14" />
        <line x1="0" y1="62%" x2="100%" y2="62%" stroke="#e8e8d8" strokeWidth="1" strokeDasharray="4 18" />
      </svg>

      {/* 細線円装飾 */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]" aria-hidden>
        <circle cx="50%" cy="50%" r="38%" stroke="#e8e8d8" strokeWidth="0.5" fill="none" />
        <circle cx="50%" cy="50%" r="48%" stroke="#e8e8d8" strokeWidth="0.5" fill="none" />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 w-full pt-20 text-center">

        {/* バッジ */}
        <motion.span
          {...rise(0.1)}
          className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 mb-10"
          style={{
            background: "rgba(232,200,140,0.1)",
            border: "1px solid rgba(232,200,140,0.28)",
            color: "#e8c88c",
          }}
        >
          <Leaf size={11} strokeWidth={1.5} /> {t(h.badge, lang)}
        </motion.span>

        {/* ストア名 */}
        <motion.div {...rise(0.18)} className="mb-8">
          <span
            className="block font-kiwi text-sm tracking-[0.5em] mb-3"
            style={{ color: "rgba(168,213,176,0.6)" }}
          >
            農村かふぇ
          </span>
          <span
            className="block font-kiwi text-7xl sm:text-8xl md:text-9xl leading-none"
            style={{
              color: "#f0ece0",
              textShadow: "0 0 60px rgba(240,236,224,0.1), 2px 2px 0 rgba(0,0,0,0.4)",
            }}
          >
            ハレルヤ
          </span>
        </motion.div>

        {/* キャッチコピー */}
        <motion.h1 {...rise(0.28)} className="mb-5">
          <span
            className="block font-serif text-2xl sm:text-3xl font-bold"
            style={{ color: "#e8e8d8" }}
          >
            {t(h.tagline, lang)}
          </span>
          <span
            className="block font-serif text-lg sm:text-xl mt-2"
            style={{ color: "rgba(232,232,216,0.55)" }}
          >
            {t(h.sub, lang)}
          </span>
        </motion.h1>

        {/* サブコピー */}
        <motion.p
          {...rise(0.37)}
          className="text-sm leading-relaxed mb-10 mx-auto max-w-sm"
          style={{ color: "rgba(232,232,216,0.45)" }}
        >
          {t(h.body, lang)}
          <em className="not-italic font-serif" style={{ color: "rgba(232,232,216,0.7)" }}>
            {t(h.kitchen, lang)}
          </em>。
        </motion.p>

        {/* CTA */}
        <motion.div {...rise(0.46)} className="flex flex-wrap gap-4 justify-center">
          <PhoneReserveButton label={t(h.reserve, lang)} className="btn-sun" />
          <Link
            href="/menu"
            className="btn-ghost"
            style={{ borderColor: "rgba(232,232,216,0.3)", color: "#e8e8d8" }}
          >
            {t(h.viewMenu, lang)}
            <ArrowRight size={13} />
          </Link>
        </motion.div>

      </div>

      {/* スクロール誘導 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.4 }}
        style={{ color: "rgba(232,232,216,0.2)" }}
      >
        <div className="font-kiwi text-[10px] tracking-[0.35em] mb-1">scroll</div>
        <div className="text-sm">↓</div>
      </motion.div>
    </section>
  );
}
