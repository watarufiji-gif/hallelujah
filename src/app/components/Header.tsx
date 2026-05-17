"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/",       label: "トップ" },
  { href: "/menu",   label: "🍜 メニュー" },
  { href: "/sake",   label: "🍶 日本酒" },
  { href: "/access", label: "📍 アクセス" },
];

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* ページ遷移でドロワーを閉じる */
  useEffect(() => setOpen(false), [pathname]);

  const glassy = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        glassy
          ? "bg-[#FAF6F0]/92 backdrop-blur-md shadow-sm border-b border-[#EDE0CC]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">

        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <span className="text-xl select-none">🌿</span>
          <div className="leading-tight">
            <div className={`font-kiwi text-[10px] tracking-widest transition-colors ${glassy ? "text-[#3d7a52]" : "text-white/70 drop-shadow"}`}>
              農村かふぇ
            </div>
            <div className={`font-serif text-lg font-bold transition-colors ${glassy ? "text-[#e8720c]" : "text-white drop-shadow-md"}`}>
              ハレルヤ
            </div>
          </div>
        </Link>

        {/* PC ナビ */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {NAV.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors hover:text-[#e8720c] ${
                pathname === l.href
                  ? "text-[#e8720c]"
                  : glassy ? "text-[#1e1a14]" : "text-white/90 drop-shadow"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.hotpepper.jp/strJ001342063/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sun text-sm"
          >
            ネット予約
          </a>
        </nav>

        {/* ハンバーガー */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="メニューを開く"
          className={`md:hidden p-2 rounded-lg transition-colors ${glassy ? "text-[#1e1a14]" : "text-white"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* モバイルドロワー */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#FAF6F0]/96 backdrop-blur-md border-b border-[#EDE0CC]`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {NAV.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-semibold py-3 border-b border-[#EDE0CC] hover:text-[#e8720c] transition-colors ${
                pathname === l.href ? "text-[#e8720c]" : "text-[#1e1a14]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.hotpepper.jp/strJ001342063/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sun justify-center mt-4"
          >
            🍽️ ネット予約（ホットペッパー）
          </a>
        </nav>
      </div>
    </header>
  );
}
