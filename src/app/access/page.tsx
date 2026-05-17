"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, AlertTriangle, Train, ParkingCircle } from "lucide-react";
import Footer from "../components/Footer";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const HOURS = [
  { day: "月・火・木・金", time: "11:30〜14:30 / 17:00〜22:00", closed: false },
  { day: "水曜日",         time: "定休日",                        closed: true  },
  { day: "土曜日",         time: "11:30〜22:00（通し営業）",      closed: false },
  { day: "日・祝日",       time: "11:30〜21:00",                  closed: false },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AccessPage() {
  return (
    <>
      {/* ヒーロー */}
      <div className="pt-20 md:pt-24 bg-gradient-to-b from-[#1a3a2a] to-[#2d5a3d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#a8d5b0] text-[10px] tracking-[0.3em] uppercase font-bold mb-3"
          >
            Access &amp; Hours
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="font-serif text-3xl sm:text-4xl text-white font-bold"
          >
            アクセス・<span className="text-[#f59339]">営業情報</span>
          </motion.h1>
        </div>
      </div>

      {/* メインコンテンツ */}
      <section className="py-16 sm:py-24 bg-paper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">

          {/* ━━━ 駐車場アラート（最重要）━━━ */}
          <FadeUp>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              {/* 警告ヘッダー */}
              <div className="bg-[#e8720c] px-6 py-3 flex items-center gap-3">
                <AlertTriangle size={20} className="text-white shrink-0" />
                <span className="text-white font-black text-sm tracking-wide">
                  お車でお越しの方へ — 駐車場のご案内
                </span>
              </div>
              {/* 本体 */}
              <div className="bg-[#fff8f0] border-2 border-[#e8720c]/30 rounded-b-3xl px-6 sm:px-8 py-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <ParkingCircle size={44} className="text-[#e8720c] shrink-0" />
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1e1a14] mb-2">
                      <span className="text-[#e8720c] text-3xl">無料</span>で駐車できます！
                    </h2>
                    <p className="text-[#4a3f32] text-sm sm:text-base leading-relaxed">
                      お隣のパチンコ店
                      <strong className="text-[#1e1a14]">「ドキわくランド 長後駅前店」</strong>
                      の駐車場をご利用いただけます。<br />
                      駐車後、<strong>駐車券をスタッフまでご提示ください</strong>。お気軽に車でお越しください🚗
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeUp>

          {/* ━━━ 地図 + 店舗情報 ━━━ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* 地図プレースホルダー */}
            <FadeUp>
              <motion.div
                whileHover={{ rotate: 0, y: -4 }}
                className="rounded-3xl overflow-hidden shadow-lg min-h-64 flex flex-col items-center justify-center gap-4 p-8 text-center"
                style={{
                  background: "linear-gradient(135deg,#edf7ef,#dff0e3)",
                  transform: "rotate(-0.5deg)",
                }}
              >
                <MapPin size={40} className="text-[#2d5a3d]" />
                <div>
                  <p className="font-serif text-lg font-bold text-[#1a3a2a] mb-1">Google マップで確認</p>
                  <p className="text-[#4a6a52] text-sm">神奈川県藤沢市長後<br />（長後駅東口 徒歩3分）</p>
                </div>
                <a
                  href="https://maps.google.com/?q=農村かふぇ+ハレルヤ+藤沢市+長後"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-forest text-sm"
                >
                  <MapPin size={14} />
                  Google マップで開く
                </a>
                <p className="text-[#3d7a52]/40 text-[10px]">※実際の地図に差し替え予定</p>
              </motion.div>
            </FadeUp>

            {/* 店舗情報カード */}
            <div className="space-y-5">

              {/* 基本情報 */}
              <FadeUp delay={0.1}>
                <div className="bg-white rounded-3xl p-6 shadow-md">
                  <h3 className="font-serif text-lg font-bold text-[#1e1a14] flex items-center gap-2 mb-4">
                    <MapPin size={17} className="text-[#3d7a52]" /> 店舗情報
                  </h3>
                  <dl className="space-y-3 text-sm">
                    {[
                      { dt: "店名", dd: "農村かふぇ ハレルヤ" },
                      { dt: "住所", dd: "神奈川県藤沢市長後4丁目（長後駅東口 徒歩3分）" },
                    ].map(({ dt, dd }) => (
                      <div key={dt} className="flex gap-3">
                        <dt className="text-[#8b7b6a] font-semibold w-10 shrink-0">{dt}</dt>
                        <dd className="text-[#1e1a14]">{dd}</dd>
                      </div>
                    ))}
                    <div className="flex gap-3 items-center">
                      <dt className="text-[#8b7b6a] font-semibold w-10 shrink-0">電話</dt>
                      <dd>
                        <a href="tel:0466-45-8866" className="flex items-center gap-1.5 text-[#e8720c] font-bold hover:underline">
                          <Phone size={13} /> 0466-45-8866
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="text-[#8b7b6a] font-semibold w-10 shrink-0">席</dt>
                      <dd className="text-[#1e1a14]">カウンター席・小上がり席（ベビーカーOK）</dd>
                    </div>
                  </dl>
                </div>
              </FadeUp>

              {/* 営業時間 */}
              <FadeUp delay={0.15}>
                <div className="bg-white rounded-3xl p-6 shadow-md">
                  <h3 className="font-serif text-lg font-bold text-[#1e1a14] flex items-center gap-2 mb-4">
                    <Clock size={17} className="text-[#3d7a52]" /> 営業時間
                  </h3>
                  <div className="space-y-2">
                    {HOURS.map(h => (
                      <div
                        key={h.day}
                        className={`flex justify-between items-center py-2 border-b border-[#EDE0CC] last:border-0 ${h.closed ? "opacity-40" : ""}`}
                      >
                        <span className="text-sm font-semibold text-[#1e1a14]">{h.day}</span>
                        <span className={`text-sm font-bold ${h.closed ? "text-red-400" : "text-[#2d5a3d]"}`}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

            </div>
          </div>

          {/* ━━━ アクセス方法 ━━━ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-3xl p-6 shadow-md flex gap-4 items-start">
                <Train size={24} className="text-[#2d5a3d] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold text-[#1e1a14] mb-1">電車でお越しの方</h3>
                  <p className="text-[#4a3f32] text-sm leading-relaxed">
                    小田急江ノ島線 <strong>長後駅 東口</strong>より徒歩約3分。改札を出て右手方向へお進みください。
                  </p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="bg-white rounded-3xl p-6 shadow-md flex gap-4 items-start">
                <ParkingCircle size={24} className="text-[#e8720c] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold text-[#1e1a14] mb-1">お車でお越しの方</h3>
                  <p className="text-[#4a3f32] text-sm leading-relaxed">
                    お隣「ドキわくランド 長後駅前店」の駐車場を<strong className="text-[#e8720c]">無料</strong>でご利用いただけます。駐車券をスタッフへ。
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ━━━ 予約CTA ━━━ */}
          <FadeUp>
            <div className="text-center py-6">
              <p className="text-[#8b7b6a] text-sm mb-5">ご来店の前に、お席のご予約もお気軽に。</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://www.hotpepper.jp/strJ001342063/" target="_blank" rel="noopener noreferrer" className="btn-sun">
                  🍽️ ネット予約（ホットペッパー）
                </a>
                <a href="tel:0466-45-8866" className="btn-ghost">
                  <Phone size={15} /> 0466-45-8866
                </a>
              </div>
            </div>
          </FadeUp>

        </div>
      </section>

      <Footer />
    </>
  );
}
