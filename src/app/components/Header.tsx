"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useLang, type Lang } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

const LANG_LABELS: Record<Lang, string> = { ja: "JP", en: "EN", ko: "KO", zh: "ZH" };
const LANG_FULL:   Record<Lang, string> = { ja: "日本語", en: "English", ko: "한국어", zh: "中文" };

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
        className="flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 transition-colors hover:text-[#1a3a2a]"
        style={{ color: "#555555", letterSpacing: "0.08em" }}
      >
        {LANG_LABELS[lang]}
        <ChevronDown size={11} strokeWidth={2} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className="absolute right-0 top-full mt-1 w-28 py-1 z-50 shadow-md"
          style={{ background: "#ffffff", border: "1px solid #e5e5e5" }}
        >
          {(Object.keys(LANG_LABELS) as Lang[]).map(l => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className="w-full text-left px-4 py-2 text-xs hover:bg-[#f0f5f2] transition-colors flex items-center justify-between"
              style={{ color: l === lang ? "#1a3a2a" : "#555555", fontWeight: l === lang ? 700 : 400 }}
            >
              {LANG_FULL[l]}
              {l === lang && <span style={{ color: "#1a3a2a" }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname              = usePathname();
  const { lang, setLang }     = useLang();

  const NAV = [
    { href: "/",       label: t(translations.nav.home,   lang) },
    { href: "/menu",   label: t(translations.nav.menu,   lang) },
    { href: "/sake",   label: t(translations.nav.sake,   lang) },
    { href: "/access", label: t(translations.nav.access, lang) },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-shadow duration-300"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16 md:h-20">

        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-kiwi text-[9px] tracking-widest" style={{ color: "#2d5a3d" }}>農村かふぇ</span>
          <span className="font-serif text-lg font-bold" style={{ color: "#1a3a2a" }}>ハレルヤ</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold transition-colors hover:text-[#1a3a2a]"
              style={{ color: pathname === l.href ? "#1a3a2a" : "#555555" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:0466-45-8866"
            className="flex items-center gap-1.5 text-sm font-bold transition-colors hover:text-[#1a3a2a]"
            style={{ color: "#555555" }}
          >
            <Phone size={13} strokeWidth={1.5} />
            0466-45-8866
          </a>
          <span className="w-px h-4" style={{ background: "#e5e5e5" }} />
          <LangSelector />
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          aria-label="メニューを開く"
          className="md:hidden p-2 transition-colors"
          style={{ color: "#1a1a1a" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        style={{ background: "#ffffff", borderBottom: "1px solid #e5e5e5" }}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {NAV.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="font-semibold py-3 border-b transition-colors hover:text-[#1a3a2a]"
              style={{ color: pathname === l.href ? "#1a3a2a" : "#1a1a1a", borderColor: "#e5e5e5" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:0466-45-8866"
            className="flex items-center gap-2 py-3 border-b font-bold transition-colors hover:text-[#1a3a2a]"
            style={{ color: "#1a1a1a", borderColor: "#e5e5e5" }}
          >
            <Phone size={14} strokeWidth={1.5} />
            0466-45-8866
          </a>
          <div className="pt-3 flex gap-2 flex-wrap">
            {(Object.keys(LANG_LABELS) as Lang[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="text-xs font-bold px-3 py-1.5 border transition-colors"
                style={{
                  borderColor: l === lang ? "#1a3a2a" : "#e5e5e5",
                  color: l === lang ? "#1a3a2a" : "#999999",
                  background: "transparent",
                }}
              >
                {LANG_FULL[l]}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
