"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useLang, type Lang } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

const LANG_LABELS: Record<Lang, string> = {
  ja: "JP",
  en: "EN",
  ko: "KO",
  zh: "ZH",
};

const LANG_FULL: Record<Lang, string> = {
  ja: "日本語",
  en: "English",
  ko: "한국어",
  zh: "中文",
};

function LangSelector() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 transition-colors"
        style={{ letterSpacing: "0.08em" }}
      >
        {LANG_LABELS[lang]}
        <ChevronDown size={11} strokeWidth={2} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-1 w-28 py-1 z-50 shadow-lg"
          style={{ background: "#FAF6F0", border: "1px solid #EDE0CC" }}
        >
          {(Object.keys(LANG_LABELS) as Lang[]).map(l => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className="w-full text-left px-4 py-2 text-xs hover:bg-[#EDE0CC] transition-colors flex items-center justify-between"
              style={{ color: l === lang ? "#e8720c" : "#1e1a14", fontWeight: l === lang ? 700 : 400 }}
            >
              {LANG_FULL[l]}
              {l === lang && <span style={{ color: "#e8720c" }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileLangButtons() {
  const { lang, setLang } = useLang();
  return (
    <div className="pt-3 flex gap-2 flex-wrap">
      {(Object.keys(LANG_LABELS) as Lang[]).map(l => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="text-xs font-bold px-3 py-1.5 border transition-colors"
          style={{
            borderColor: l === lang ? "#e8720c" : "#EDE0CC",
            color: l === lang ? "#e8720c" : "#8b7b6a",
            background: "transparent",
          }}
        >
          {LANG_FULL[l]}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();
  const { lang }                = useLang();

  const NAV = [
    { href: "/",       label: t(translations.nav.home,   lang) },
    { href: "/menu",   label: t(translations.nav.menu,   lang) },
    { href: "/sake",   label: t(translations.nav.sake,   lang) },
    { href: "/access", label: t(translations.nav.access, lang) },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

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
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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
        </nav>

        {/* 右：電話 ＋ 言語 */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:0466-45-8866"
            className={`flex items-center gap-1.5 text-sm font-bold transition-colors hover:text-[#e8720c] ${
              glassy ? "text-[#1e1a14]" : "text-white drop-shadow"
            }`}
          >
            <Phone size={13} strokeWidth={1.5} />
            0466-45-8866
          </a>
          <span className={`w-px h-4 ${glassy ? "bg-[#EDE0CC]" : "bg-white/20"}`} />
          <div className={glassy ? "text-[#1e1a14]" : "text-white drop-shadow"}>
            <LangSelector />
          </div>
        </div>

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
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
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
            href="tel:0466-45-8866"
            className="flex items-center gap-2 py-3 border-b border-[#EDE0CC] font-bold text-[#1e1a14] hover:text-[#e8720c] transition-colors"
          >
            <Phone size={14} strokeWidth={1.5} />
            0466-45-8866
          </a>
          {/* モバイル言語選択 */}
          <MobileLangButtons />
        </nav>
      </div>
    </header>
  );
}
