"use client";

import { motion } from "framer-motion";
import { PenLine, Leaf } from "lucide-react";
import boardData from "@/data/board.json";
import { useLang } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function ChalkboardSection() {
  const { lang } = useLang();
  const c = translations.chalk;
  const { date, message, veggie, author } = boardData;

  return (
    <section className="py-10 sm:py-14 bg-[#FAF6F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32, rotate: -0.8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="bg-chalkboard rounded-3xl overflow-hidden shadow-2xl -rotate-[0.5deg]"
        >
          <div className="relative px-6 sm:px-10 py-8 sm:py-10">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <PenLine size={28} strokeWidth={1} className="text-white/60 shrink-0" />
                <div>
                  <p className="chalk-text-dim text-[10px] tracking-[0.35em] uppercase font-bold">{t(c.boardLabel, lang)}</p>
                  <h2 className="font-kiwi text-xl sm:text-2xl chalk-text flex items-center gap-2">
                    {t(c.boardH2, lang)} <Leaf size={16} strokeWidth={1} />
                  </h2>
                </div>
              </div>
              <span className="chalk-text-dim text-xs sm:text-sm font-kiwi self-start sm:self-auto">
                {date}
              </span>
            </div>

            <div className="relative">
              <div
                className="absolute -left-1 top-0 bottom-0 w-0.5 rounded-full opacity-20"
                style={{ background: "repeating-linear-gradient(to bottom, #e8e8d8 0px, #e8e8d8 6px, transparent 6px, transparent 10px)" }}
              />
              <blockquote className="pl-5 sm:pl-6">
                <p className="font-kiwi text-xl sm:text-2xl md:text-3xl chalk-text leading-relaxed">
                  「{message}」
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 text-xs chalk-text-dim px-3 py-1 rounded-full">
                    <Leaf size={11} strokeWidth={1} /> {t(c.vegLabel, lang)}<strong className="chalk-text">{veggie}</strong>
                  </span>
                  <span className="chalk-text-dim text-xs">{author}</span>
                </footer>
              </blockquote>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 justify-end">
              {[t(c.tag1, lang), t(c.tag2, lang), t(c.tag3, lang)].map(tag => (
                <span key={tag} className="chalk-text-dim text-[10px] border border-white/15 rounded-full px-2.5 py-0.5 font-kiwi">
                  ✓ {tag}
                </span>
              ))}
            </div>

            <div className="absolute top-3 left-3  w-8 h-8 rounded-full bg-white/3 blur-sm" />
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/3 blur-sm" />
            <div className="absolute bottom-3 left-3  w-5 h-5 rounded-full bg-white/3 blur-sm" />
            <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/3 blur-sm" />
          </div>

          <div className="bg-[#142318] px-6 sm:px-10 py-3 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8d5b0] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3d7a52]" />
            </span>
            <span className="chalk-text-dim text-xs">
              {t(c.live, lang)}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
