"use client";

import { Phone, MapPin, ExternalLink, Share2 } from "lucide-react";
import { useState, useEffect } from "react";

const GOOGLE_MAPS_NAV =
  "https://www.google.com/maps/dir/?api=1&destination=長後農村かふぇ+ハレルヤ+藤沢市長後&travelmode=driving";

export default function MobileNav() {
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare("share" in navigator);
  }, []);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "農村かふぇ ハレルヤ",
        text: "長後駅東口徒歩3分・農家直営の新鮮野菜と日本酒飲み放題",
        url: window.location.href,
      });
    } catch {
      // キャンセルまたはエラーは無視
    }
  };

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

        {/* 3. Instagram */}
        <a
          href="https://www.instagram.com/chogo_hareruya/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 active:opacity-80 transition-opacity"
          style={{ background: "#1a3a2a", color: "#a8d5b0" }}
        >
          <ExternalLink size={19} />
          <span className="text-[10px] font-bold tracking-wide">Instagram</span>
        </a>

        {/* 4. 送る（Web Share API 対応ブラウザのみ表示）*/}
        {canShare && (
          <button
            type="button"
            onClick={handleShare}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 active:opacity-80 transition-opacity"
            style={{ background: "#2a2a2a", color: "#e8e8d8" }}
          >
            <Share2 size={19} />
            <span className="text-[10px] font-bold tracking-wide">送る</span>
          </button>
        )}

      </div>

      {/* スマホ余白（固定バー分） */}
      <div className="md:hidden h-16" aria-hidden />
    </>
  );
}
