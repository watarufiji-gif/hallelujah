"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Train, ParkingCircle, Navigation } from "lucide-react";
import Footer from "../components/Footer";
import PhoneReserveButton from "../components/PhoneReserveButton";
import { useLang } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const MAP_EMBED =
  "https://maps.google.com/maps?q=農村かふぇ+ハレルヤ+神奈川県藤沢市長後&t=&z=17&ie=UTF8&iwloc=&output=embed";

const MAP_NAV =
  "https://www.google.com/maps/dir/?api=1&destination=農村かふぇ+ハレルヤ+藤沢市長後&travelmode=driving";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.62, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AccessPage() {
  const { lang } = useLang();
  const a = translations.access;

  const HOURS = [
    { day: t(a.hr1day, lang), time: t(a.hr1time, lang), closed: false },
    { day: t(a.hr2day, lang), time: t(a.hr2time, lang), closed: true  },
    { day: t(a.hr3day, lang), time: t(a.hr3time, lang), closed: false },
    { day: t(a.hr4day, lang), time: t(a.hr4time, lang), closed: false },
  ];

  return (
    <>
      {/* ─── ページヒーロー ─── */}
      <div
        className="pt-20 md:pt-24"
        style={{ background: "linear-gradient(170deg, #1b2e22 0%, #22392b 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
            style={{ color: "#a8d5b0" }}
          >
            {t(a.eyebrow, lang)}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="font-serif text-3xl sm:text-4xl font-bold"
            style={{ color: "#f0ece0" }}
          >
            {t(a.h1main, lang)}<span style={{ color: "#d4a96a" }}>{t(a.h1span, lang)}</span>
          </motion.h1>
        </div>
      </div>

      {/* ─── メインコンテンツ ─── */}
      <section className="py-16 sm:py-24" style={{ background: "#F4EFE6" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">

          {/* ━━━ 店舗情報（最上部）━━━ */}
          <FadeUp>
            <div
              className="p-6 sm:p-8 shadow-md"
              style={{ background: "#FAF6F0", border: "1px solid rgba(161,120,60,0.18)" }}
            >
              <h3 className="font-serif text-lg font-bold flex items-center gap-2 mb-5" style={{ color: "#1e1a14" }}>
                <MapPin size={17} className="text-[#3d7a52]" /> {t(a.storeInfo, lang)}
              </h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="font-semibold w-10 shrink-0" style={{ color: "#8b7b6a" }}>{t(a.storeName, lang)}</dt>
                  <dd style={{ color: "#1e1a14" }}>{t(a.storeNameVal, lang)}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold w-10 shrink-0" style={{ color: "#8b7b6a" }}>{t(a.phoneLabel, lang)}</dt>
                  <dd>
                    <a
                      href="tel:0466-45-8866"
                      className="flex items-center gap-1.5 font-bold hover:underline"
                      style={{ color: "#e8720c" }}
                    >
                      <Phone size={13} /> 0466-45-8866
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3 sm:col-span-2">
                  <dt className="font-semibold w-10 shrink-0" style={{ color: "#8b7b6a" }}>{t(a.addrLabel, lang)}</dt>
                  <dd style={{ color: "#1e1a14" }}>
                    {t(a.addrVal, lang)}
                    <span className="ml-2 text-xs font-semibold px-2 py-0.5" style={{ background: "rgba(61,122,82,0.1)", color: "#3d7a52" }}>
                      {t(a.addrBadge, lang)}
                    </span>
                    <span className="block mt-1 text-xs" style={{ color: "#8b7b6a" }}>
                      {t(a.addrNote, lang)}
                    </span>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold w-10 shrink-0" style={{ color: "#8b7b6a" }}>{t(a.seatsLabel, lang)}</dt>
                  <dd style={{ color: "#1e1a14" }}>{t(a.seatsVal, lang)}</dd>
                </div>
              </dl>
            </div>
          </FadeUp>

          {/* ━━━ 地図 ＆ 営業時間（横並び）━━━ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <FadeUp className="flex flex-col gap-4">
              <div className="overflow-hidden shadow-xl" style={{ border: "1px solid rgba(161,120,60,0.15)" }}>
                <iframe
                  src={MAP_EMBED}
                  width="100%"
                  height="340"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="農村かふぇ ハレルヤ の地図"
                />
              </div>
              <a
                href={MAP_NAV}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 font-bold text-sm transition-colors hover:opacity-90"
                style={{ background: "#4285F4", color: "white" }}
              >
                <Navigation size={16} />
                {t(a.navBtn, lang)}
              </a>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div
                className="p-6 shadow-md h-full"
                style={{ background: "#FAF6F0", border: "1px solid rgba(161,120,60,0.12)" }}
              >
                <h3 className="font-serif text-lg font-bold flex items-center gap-2 mb-5" style={{ color: "#1e1a14" }}>
                  <Clock size={17} className="text-[#3d7a52]" /> {t(a.hoursTitle, lang)}
                </h3>
                <div className="space-y-2">
                  {HOURS.map(h => (
                    <div
                      key={h.day}
                      className={`flex justify-between items-center py-2.5 border-b last:border-0 ${h.closed ? "opacity-40" : ""}`}
                      style={{ borderColor: "rgba(161,120,60,0.12)" }}
                    >
                      <span className="text-sm font-semibold" style={{ color: "#1e1a14" }}>{h.day}</span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: h.closed ? "#ef4444" : "#2d5a3d" }}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ━━━ 駐車場アラート（上下真ん中・最重要）━━━ */}
          <FadeUp>
            <div
              className="overflow-hidden shadow-xl"
              style={{ border: "2px solid rgba(232,114,12,0.35)" }}
            >
              <div
                className="px-5 sm:px-8 py-3 flex items-center gap-3"
                style={{ background: "#e8720c" }}
              >
                <ParkingCircle size={18} strokeWidth={1.5} className="text-white shrink-0" />
                <span className="text-white font-black text-sm tracking-wide">
                  {t(a.parkHeader, lang)}
                </span>
              </div>
              <div
                className="px-6 sm:px-10 py-8"
                style={{ background: "#FFF8F0" }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div
                    className="w-16 h-16 flex items-center justify-center shrink-0"
                    style={{ background: "#e8720c" }}
                  >
                    <ParkingCircle size={30} strokeWidth={1} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold mb-2" style={{ color: "#1e1a14" }}>
                      {t(a.parkH2pre, lang)}
                      <span className="text-4xl font-black text-[#e8720c] ml-1">{t(a.parkFree, lang)}</span>！
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4a3f32" }}>
                      {t(a.parkBody, lang)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* ━━━ アクセス方法カード（変わらず）━━━ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FadeUp delay={0.1}>
              <div
                className="p-6 shadow-md flex gap-4 items-start"
                style={{ background: "#FAF6F0", border: "1px solid rgba(161,120,60,0.12)" }}
              >
                <Train size={24} strokeWidth={1} className="text-[#2d5a3d] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold mb-1" style={{ color: "#1e1a14" }}>{t(a.trainTitle, lang)}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a3f32" }}>
                    {t(a.trainBody, lang)}
                  </p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.14}>
              <div
                className="p-6 shadow-md flex gap-4 items-start"
                style={{ background: "#FFF8F0", border: "2px solid rgba(232,114,12,0.25)" }}
              >
                <ParkingCircle size={24} strokeWidth={1} className="text-[#e8720c] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold mb-1" style={{ color: "#1e1a14" }}>{t(a.carTitle, lang)}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a3f32" }}>
                    {t(a.carBody, lang)}
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ━━━ 予約 CTA ━━━ */}
          <FadeUp className="text-center py-4">
            <p className="text-sm mb-5" style={{ color: "#8b7b6a" }}>
              {t(a.reserveCta, lang)}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PhoneReserveButton label={t(a.reserveBtn, lang)} className="btn-sun" />
            </div>
          </FadeUp>

        </div>
      </section>

      <Footer />
    </>
  );
}
