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
    <section id="top" className="min-h-screen flex items-center bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full py-32 sm:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="sec-eyebrow mb-8">農村かふぇ</p>
            <h1
              className="font-serif font-bold leading-none mb-8"
              style={{ fontSize: "clamp(4rem, 10vw, 7rem)", color: "#1a1a1a" }}
            >
              ハレルヤ
            </h1>
            <p
              className="font-serif text-xl sm:text-2xl mb-14 leading-relaxed"
              style={{ color: "#1a3a2a" }}
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
              style={{ background: "#f5f5f5", border: "1px solid #e5e5e5" }}
            >
              <span style={{ color: "#cccccc", fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase" }}>
                Photo
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
