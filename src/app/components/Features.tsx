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
    { Icon: Sprout, eyebrow: t(f.i1eyebrow, lang), title: t(f.i1title, lang), body: t(f.i1body, lang) },
    { Icon: Wheat,  eyebrow: t(f.i2eyebrow, lang), title: t(f.i2title, lang), body: t(f.i2body, lang) },
    { Icon: Heart,  eyebrow: t(f.i3eyebrow, lang), title: t(f.i3title, lang), body: t(f.i3body, lang) },
  ];

  return (
    <section id="features" className="py-16 sm:py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10">

        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="sec-eyebrow mb-6">{t(f.eyebrow, lang)}</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight" style={{ color: "#1a1a1a" }}>
            {t(f.h2main, lang)}
            <br />
            <span style={{ color: "#1a3a2a" }}>{t(f.h2span, lang)}</span>
          </h2>
        </motion.div>

        <div>
          {FEATURES.map((item, i) => (
            <motion.div
              key={item.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
              className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-6 sm:gap-14 py-10 sm:py-14 border-t last:border-b"
              style={{ borderColor: "#e5e5e5" }}
            >
              <div
                className="font-serif text-5xl sm:text-7xl font-bold leading-none select-none pt-1"
                style={{ color: "rgba(26,58,42,0.15)" }}
              >
                {NUMBERS[i]}
              </div>

              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <item.Icon size={15} strokeWidth={1} style={{ color: "#2d5a3d" }} />
                  <p className="text-[10px] tracking-[0.32em] uppercase font-bold" style={{ color: "#2d5a3d" }}>
                    {item.eyebrow}
                  </p>
                </div>

                <h3
                  className="font-serif text-2xl sm:text-3xl font-bold mb-6 whitespace-pre-line"
                  style={{ color: "#1a1a1a", lineHeight: 1.5 }}
                >
                  {item.title}
                </h3>

                <p className="text-sm leading-[2]" style={{ color: "#555555", maxWidth: "34rem" }}>
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 姉妹農園 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-12 sm:mt-16"
        >
          <div
            className="p-10 sm:p-14"
            style={{ background: "#1a3a2a" }}
          >
            <p className="text-[10px] font-bold tracking-[0.32em] uppercase mb-3" style={{ color: "rgba(168,213,176,0.8)" }}>
              {t(f.farmLabel, lang)}
            </p>
            <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "#f0ece0" }}>
              {t(f.farmName, lang)}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(240,236,224,0.55)" }}>
              {t(f.farmBody, lang)}
            </p>
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
