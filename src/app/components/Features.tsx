"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sprout, Wheat, Heart } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const NUMBERS = ["一", "二", "三"];

export default function Features() {
  const { lang } = useLang();
  const f = translations.features;

  const FEATURES = [
    {
      Icon: Sprout,
      eyebrow: t(f.i1eyebrow, lang),
      title:   t(f.i1title,   lang),
      body:    t(f.i1body,    lang),
      note:    t(f.i1note,    lang),
    },
    {
      Icon: Wheat,
      eyebrow: t(f.i2eyebrow, lang),
      title:   t(f.i2title,   lang),
      body:    t(f.i2body,    lang),
      note:    t(f.i2note,    lang),
    },
    {
      Icon: Heart,
      eyebrow: t(f.i3eyebrow, lang),
      title:   t(f.i3title,   lang),
      body:    t(f.i3body,    lang),
      note:    t(f.i3note,    lang),
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32" style={{ background: "#FAF6F0" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-8">

        <motion.div
          className="mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="sec-eyebrow mb-5">{t(f.eyebrow, lang)}</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight" style={{ color: "#1e1a14" }}>
            {t(f.h2main, lang)}
            <br />
            <span style={{ color: "#2d5a3d" }}>{t(f.h2span, lang)}</span>
          </h2>
        </motion.div>

        <div>
          {FEATURES.map((item, i) => (
            <motion.div
              key={item.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-6 sm:gap-14 py-12 sm:py-16 border-t last:border-b"
              style={{ borderColor: "rgba(161,120,60,0.18)" }}
            >
              <div
                className="font-serif text-5xl sm:text-7xl font-bold leading-none select-none pt-1"
                style={{ color: "rgba(161,120,60,0.2)" }}
              >
                {NUMBERS[i]}
              </div>

              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <item.Icon size={16} strokeWidth={1} style={{ color: "#8b6f47" }} />
                  <p className="text-[10px] tracking-[0.32em] uppercase font-bold" style={{ color: "#8b6f47" }}>
                    {item.eyebrow}
                  </p>
                </div>

                <h3
                  className="font-serif text-2xl sm:text-3xl font-bold mb-5 whitespace-pre-line"
                  style={{ color: "#2c1810", lineHeight: 1.5 }}
                >
                  {item.title}
                </h3>

                <p className="text-sm leading-[2] mb-7" style={{ color: "#6b5040", maxWidth: "34rem" }}>
                  {item.body}
                </p>

                <span className="text-xs tracking-[0.06em]" style={{ color: "#a89070" }}>
                  — {item.note}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 姉妹農園バナー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-20 sm:mt-28"
        >
          <div
            className="p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-8"
            style={{ background: "linear-gradient(135deg, #1b2e22, #22392b)" }}
          >
            <div className="text-5xl shrink-0 select-none">🏡</div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.32em] uppercase mb-2" style={{ color: "#a8d5b0" }}>
                {t(f.farmLabel, lang)}
              </p>
              <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: "#f0ece0" }}>
                {t(f.farmName, lang)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(240,236,224,0.55)" }}>
                {t(f.farmBody, lang)}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="/menu" className="btn-forest">{t(f.ctaMenu, lang)}</Link>
          <Link href="/sake" className="btn-ghost">{t(f.ctaSake, lang)}</Link>
        </motion.div>

      </div>
    </section>
  );
}
