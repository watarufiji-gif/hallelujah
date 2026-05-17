"use client";

import { Phone, CalendarCheck, MessageCircle } from "lucide-react";

export default function MobileNav() {
  return (
    <>
      {/* スマホ専用 ─ 画面下部固定CTA（3ボタン）*/}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 flex border-t border-[#EDE0CC] shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
        <a
          href="tel:0466-45-8866"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-[#2d5a3d] text-white py-3 active:bg-[#1a3a2a] transition-colors"
        >
          <Phone size={18} />
          <span className="text-[10px] font-bold">電話する</span>
        </a>
        <a
          href="https://www.hotpepper.jp/strJ001342063/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-[#e8720c] text-white py-3 active:bg-[#c85f0a] transition-colors"
        >
          <CalendarCheck size={18} />
          <span className="text-[10px] font-bold">ネット予約</span>
        </a>
        <a
          href="https://line.me/ti/p/~@hallelujah_nagogo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-[#06C755] text-white py-3 active:bg-[#05a848] transition-colors"
        >
          <MessageCircle size={18} />
          <span className="text-[10px] font-bold">LINE</span>
        </a>
      </div>

      {/* スマホのフッター余白（固定バー分） */}
      <div className="md:hidden h-16" aria-hidden />
    </>
  );
}
