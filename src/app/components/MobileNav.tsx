"use client";

import { Phone, MapPin, CalendarCheck } from "lucide-react";

const GOOGLE_MAPS_NAV =
  "https://www.google.com/maps/dir/?api=1&destination=農村かふぇ+ハレルヤ+藤沢市長後&travelmode=driving";

export default function MobileNav() {
  return (
    <>
      {/* スマホ専用 ─ 画面最下部 固定 CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 flex border-t border-[#EDE0CC] shadow-[0_-6px_24px_rgba(0,0,0,0.15)]">

        {/* 1. 電話 */}
        <a
          href="tel:0466-45-8866"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 active:opacity-80 transition-opacity"
          style={{ background: "#1b2e22", color: "#a8d5b0" }}
        >
          <Phone size={19} />
          <span className="text-[10px] font-bold tracking-wide">今すぐ電話</span>
        </a>

        {/* 2. Google マップ（現在地ナビ）*/}
        <a
          href={GOOGLE_MAPS_NAV}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 active:opacity-80 transition-opacity"
          style={{ background: "#4285F4", color: "white" }}
        >
          <MapPin size={19} />
          <span className="text-[10px] font-bold tracking-wide">Googleマップ</span>
        </a>

        {/* 3. ホットペッパー予約 */}
        <a
          href="https://www.hotpepper.jp/strJ001342063/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 active:opacity-80 transition-opacity"
          style={{ background: "#e8720c", color: "white" }}
        >
          <CalendarCheck size={19} />
          <span className="text-[10px] font-bold tracking-wide">ネット予約</span>
        </a>

      </div>

      {/* スマホ余白（固定バー分） */}
      <div className="md:hidden h-16" aria-hidden />
    </>
  );
}
