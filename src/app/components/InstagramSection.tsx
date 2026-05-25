"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function InstagramSection() {
  const { lang } = useLang();
  const ig = translations.instagram;

  return (
    <section id="instagram" className="py-40 sm:py-56" style={{ background: "#f0f5f2" }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-12"
        >
          <div>
            <p className="sec-eyebrow mb-6">Instagram</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
              {t(ig.h2line1, lang)}<br />
              {t(ig.h2line2, lang)}
            </h2>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#555555" }}>
              {t(ig.body, lang)}
            </p>
          </div>

          <a
            href="https://www.instagram.com/chogo_hareruya/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 shrink-0 group"
          >
            <div>
              <div className="text-xs tracking-[0.1em] uppercase font-bold mb-1" style={{ color: "#999999" }}>
                {t(ig.followUs, lang)}
              </div>
              <div className="flex items-center gap-2 font-bold text-sm group-hover:opacity-60 transition-opacity" style={{ color: "#1a3a2a" }}>
                @chogo_hareruya
                <ArrowRight size={13} strokeWidth={1.5} />
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
