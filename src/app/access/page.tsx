"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Train, ParkingCircle, Navigation } from "lucide-react";
import Footer from "../components/Footer";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const HOURS = [
  { day: "月・火・木・金", time: "11:30〜14:30 / 17:00〜22:00", closed: false },
  { day: "水曜日",         time: "定休日",                        closed: true  },
  { day: "土曜日",         time: "11:30〜22:00（通し営業）",      closed: false },
  { day: "日・祝日",       time: "11:30〜21:00",                  closed: false },
];

/* Google Maps 埋め込み URL（店名検索）*/
const MAP_EMBED =
  "https://maps.google.com/maps?q=農村かふぇ+ハレルヤ+神奈川県藤沢市長後&t=&z=17&ie=UTF8&iwloc=&output=embed";

/* Google Maps ナビ起動 URL */
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
            Access &amp; Hours
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="font-serif text-3xl sm:text-4xl font-bold"
            style={{ color: "#f0ece0" }}
          >
            アクセス・<span style={{ color: "#d4a96a" }}>営業情報</span>
          </motion.h1>
        </div>
      </div>

      {/* ─── メインコンテンツ ─── */}
      <section className="py-16 sm:py-24" style={{ background: "#F4EFE6" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">

          {/* ━━━ 駐車場アラート（最重要・一番目立たせる）━━━ */}
          <FadeUp>
            <motion.div
              whileHover={{ scale: 1.01, rotate: 0 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ transform: "rotate(-0.3deg)" }}
            >
              {/* 警告ヘッダーバー */}
              <div
                className="px-5 sm:px-8 py-3 flex items-center gap-3"
                style={{ background: "#e8720c" }}
              >
                <ParkingCircle size={20} className="text-white shrink-0" />
                <span className="text-white font-black text-sm tracking-wide">
                  🚗 お車でお越しの方へ ─ 駐車場のご案内
                </span>
              </div>
              {/* 本体 */}
              <div
                className="px-6 sm:px-10 py-7 border-2 border-t-0 rounded-b-3xl"
                style={{
                  background: "#FFF8F0",
                  borderColor: "rgba(232,114,12,0.25)",
                }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-md"
                    style={{ background: "#e8720c" }}
                  >
                    <ParkingCircle size={32} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold mb-2" style={{ color: "#1e1a14" }}>
                      パチンコ店「ドキわくランド 長後駅前店」の<br className="sm:hidden" />
                      駐車場が
                      <span className="text-4xl font-black text-[#e8720c] ml-1">無料</span>！
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4a3f32" }}>
                      お店隣接の広々とした駐車場をご利用いただけます。
                      <strong style={{ color: "#1e1a14" }}>お帰りの際に駐車券をスタッフへご提示ください。</strong>
                      <br />
                      駐車場は無料でご利用いただけます。安心してお食事をお楽しみください。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeUp>

          {/* ━━━ 地図 ＆ 店舗情報（2カラム）━━━ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Google Maps 埋め込み */}
            <FadeUp className="flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ border: "1px solid rgba(161,120,60,0.15)" }}>
                <iframe
                  src={MAP_EMBED}
                  width="100%"
                  height="320"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="農村かふぇ ハレルヤ の地図"
                />
              </div>
              {/* ナビ起動ボタン */}
              <a
                href={MAP_NAV}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "#4285F4", color: "white" }}
              >
                <Navigation size={16} />
                Googleマップアプリでルートを開く（ナビ起動）
              </a>
            </FadeUp>

            {/* 右：店舗情報 */}
            <div className="space-y-5">

              {/* 基本情報 */}
              <FadeUp delay={0.1}>
                <div
                  className="rounded-3xl p-6 shadow-md"
                  style={{ background: "#FAF6F0", border: "1px solid rgba(161,120,60,0.12)" }}
                >
                  <h3 className="font-serif text-lg font-bold flex items-center gap-2 mb-4" style={{ color: "#1e1a14" }}>
                    <MapPin size={17} className="text-[#3d7a52]" /> 店舗情報
                  </h3>
                  <dl className="space-y-3 text-sm">
                    {[
                      { dt: "店名", dd: "農村かふぇ ハレルヤ" },
                      { dt: "住所", dd: "神奈川県藤沢市長後4丁目（長後駅東口 徒歩3分）" },
                    ].map(({ dt, dd }) => (
                      <div key={dt} className="flex gap-3">
                        <dt className="font-semibold w-10 shrink-0" style={{ color: "#8b7b6a" }}>{dt}</dt>
                        <dd style={{ color: "#1e1a14" }}>{dd}</dd>
                      </div>
                    ))}
                    <div className="flex gap-3 items-center">
                      <dt className="font-semibold w-10 shrink-0" style={{ color: "#8b7b6a" }}>電話</dt>
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
                    <div className="flex gap-3">
                      <dt className="font-semibold w-10 shrink-0" style={{ color: "#8b7b6a" }}>席</dt>
                      <dd style={{ color: "#1e1a14" }}>カウンター席・小上がり席（ベビーカーOK）</dd>
                    </div>
                  </dl>
                </div>
              </FadeUp>

              {/* 営業時間 */}
              <FadeUp delay={0.14}>
                <div
                  className="rounded-3xl p-6 shadow-md"
                  style={{ background: "#FAF6F0", border: "1px solid rgba(161,120,60,0.12)" }}
                >
                  <h3 className="font-serif text-lg font-bold flex items-center gap-2 mb-4" style={{ color: "#1e1a14" }}>
                    <Clock size={17} className="text-[#3d7a52]" /> 営業時間
                  </h3>
                  <div className="space-y-2">
                    {HOURS.map(h => (
                      <div
                        key={h.day}
                        className={`flex justify-between items-center py-2 border-b last:border-0 ${h.closed ? "opacity-40" : ""}`}
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
          </div>

          {/* ━━━ アクセス方法カード ━━━ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FadeUp delay={0.1}>
              <div
                className="rounded-3xl p-6 shadow-md flex gap-4 items-start"
                style={{ background: "#FAF6F0", border: "1px solid rgba(161,120,60,0.12)" }}
              >
                <Train size={24} className="text-[#2d5a3d] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold mb-1" style={{ color: "#1e1a14" }}>電車でお越しの方</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a3f32" }}>
                    小田急江ノ島線 <strong>長後駅 東口</strong>より<strong>徒歩約3分</strong>。改札を出て右手方向へお進みください。
                  </p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.14}>
              <div
                className="rounded-3xl p-6 shadow-md flex gap-4 items-start"
                style={{ background: "#FFF8F0", border: "2px solid rgba(232,114,12,0.25)" }}
              >
                <ParkingCircle size={24} className="text-[#e8720c] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold mb-1" style={{ color: "#1e1a14" }}>お車でお越しの方</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a3f32" }}>
                    お隣「ドキわくランド 長後駅前店」の駐車場が
                    <strong className="text-[#e8720c]">無料</strong>。駐車券をスタッフへ。
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ━━━ 予約 CTA ━━━ */}
          <FadeUp className="text-center py-4">
            <p className="text-sm mb-5" style={{ color: "#8b7b6a" }}>
              ご来店の前に、お席のご予約もお気軽に。
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.hotpepper.jp/strJ001342063/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sun"
              >
                🍽️ ネット予約（ホットペッパー）
              </a>
              <a href="tel:0466-45-8866" className="btn-ghost">
                <Phone size={14} /> 0466-45-8866
              </a>
            </div>
          </FadeUp>

        </div>
      </section>

      <Footer />
    </>
  );
}
