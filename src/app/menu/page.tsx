"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "@/data/menu.json";
import Footer from "../components/Footer";
import PhoneReserveButton from "../components/PhoneReserveButton";
import { useLang } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

type Tab = "lunch" | "dinner";
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
type MenuItem = typeof menuData.lunch[0];

function MenuCard({ item, idx, popularLabel }: { item: MenuItem; idx: number; popularLabel: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, delay: 0.04 * idx, ease: EASE }}
      className="relative border"
      style={{ background: "#ffffff", borderColor: "#e5e5e5" }}
    >
      {item.popular && (
        <span
          className="absolute top-4 right-4 z-10 text-white text-[10px] font-bold px-2 py-0.5"
          style={{ background: "#1a3a2a" }}
        >
          {popularLabel}
        </span>
      )}
      {item.tag && !item.popular && (
        <span
          className="absolute top-4 left-4 z-10 text-white text-[10px] font-bold px-2 py-0.5"
          style={{ background: "#2d5a3d" }}
        >
          {item.tag}
        </span>
      )}

      <div className="h-32" style={{ background: "#f5f5f5" }} />

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-base font-bold leading-snug flex-1" style={{ color: "#1a1a1a" }}>
            {item.name}
          </h3>
          <span className="price-stamp shrink-0">¥{item.price}</span>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: "#999999" }}>{item.desc}</p>
      </div>
    </motion.article>
  );
}

export default function MenuPage() {
  const [tab, setTab] = useState<Tab>("lunch");
  const { lang } = useLang();
  const m = translations.menu;
  const items = tab === "lunch" ? menuData.lunch : menuData.dinner;

  return (
    <>
      <div className="pt-20 md:pt-24" style={{ background: "#ffffff", borderBottom: "1px solid #e5e5e5" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="sec-eyebrow mb-5"
          >
            {t(m.eyebrow, lang)}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="font-serif text-4xl sm:text-5xl font-bold leading-tight"
            style={{ color: "#1a1a1a" }}
          >
            {t(m.h1main, lang)}<span style={{ color: "#1a3a2a" }}>{t(m.h1span, lang)}</span>
          </motion.h1>
        </div>
      </div>

      <div
        className="sticky top-16 md:top-20 z-30 border-b"
        style={{ background: "#ffffff", borderColor: "#e5e5e5" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex gap-0 py-0">
            {([
              { key: "lunch"  as Tab, label: t(m.lunchTab,  lang), sub: t(m.lunchSub,  lang) },
              { key: "dinner" as Tab, label: t(m.dinnerTab, lang), sub: t(m.dinnerSub, lang) },
            ]).map(tb => (
              <button
                key={tb.key}
                onClick={() => setTab(tb.key)}
                className="flex items-baseline gap-2 px-6 py-4 font-semibold text-sm transition-all border-b-2"
                style={{
                  color: tab === tb.key ? "#1a3a2a" : "#999999",
                  borderBottomColor: tab === tb.key ? "#1a3a2a" : "transparent",
                }}
              >
                {tb.label}
                <span className="text-[10px] opacity-60">{tb.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 sm:py-32" style={{ background: "#ffffff", minHeight: "50vh" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold" style={{ color: "#1a1a1a" }}>
              {tab === "lunch" ? t(m.lunchH2, lang) : t(m.dinnerH2, lang)}
            </h2>
            <p className="text-xs mt-1" style={{ color: "#999999" }}>{t(m.subtitle, lang)}</p>
          </div>

          <AnimatePresence mode="wait">
            <div key={tab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, i) => (
                <MenuCard key={item.id} item={item} idx={i} popularLabel={t(m.popular, lang)} />
              ))}
            </div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <PhoneReserveButton label={t(m.ctaAll, lang)} className="btn-sun" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
