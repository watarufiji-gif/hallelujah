"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const f = translations.footer;
  const n = translations.nav;

  const NAV = [
    { href: "/",       label: t(n.home,   lang) },
    { href: "/menu",   label: t(n.menu,   lang) },
    { href: "/sake",   label: t(f.sakeFull,   lang) },
    { href: "/access", label: t(f.accessFull, lang) },
  ];

  return (
    <footer className="bg-[#1a3a2a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          {/* ブランド */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🌿</span>
              <div>
                <div className="font-kiwi text-[10px] text-white/40 tracking-widest">農村かふぇ</div>
                <div className="font-serif text-xl text-[#f59339] font-bold">ハレルヤ</div>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              {t(f.tagline, lang)}
            </p>
          </div>

          {/* ナビ */}
          <div>
            <h4 className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-4">{t(f.pages, lang)}</h4>
            <ul className="space-y-2">
              {NAV.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 text-sm hover:text-[#f59339] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* コンタクト */}
          <div>
            <h4 className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-4">{t(f.contact, lang)}</h4>
            <div className="space-y-2 text-sm">
              <a href="tel:0466-45-8866" className="flex items-center gap-2 text-white/50 hover:text-[#f59339] transition-colors">
                <Phone size={14} /> 0466-45-8866
              </a>
              <a href="tel:0466-45-8866" className="flex items-center gap-2 text-white/50 hover:text-[#f59339] transition-colors">
                <Phone size={14} /> 0466-45-8866
              </a>
              <a href="https://www.instagram.com/chogo_hareruya/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-[#f59339] transition-colors">
                📸 {t(f.instagramLabel, lang)}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/20 text-xs">{t(f.copyright, lang)}</p>
        </div>
      </div>
    </footer>
  );
}
