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
    { href: "/",       label: t(n.home,        lang) },
    { href: "/menu",   label: t(n.menu,        lang) },
    { href: "/sake",   label: t(f.sakeFull,    lang) },
    { href: "/access", label: t(f.accessFull,  lang) },
  ];

  return (
    <footer style={{ background: "#1a3a2a", color: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">

          <div>
            <div className="mb-4">
              <div className="font-kiwi text-[10px] tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>長後農村かふぇ</div>
              <div className="font-serif text-xl font-bold" style={{ color: "#a8d5b0" }}>ハレルヤ</div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              {t(f.tagline, lang)}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
              {t(f.pages, lang)}
            </h4>
            <ul className="space-y-3">
              {NAV.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
              {t(f.contact, lang)}
            </h4>
            <div className="space-y-3 text-sm">
              <a href="tel:0466-45-8866" className="flex items-center gap-2 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                <Phone size={13} /> 0466-45-8866
              </a>
              <a href="https://www.instagram.com/chogo_hareruya/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                Instagram @chogo_hareruya
              </a>
              <a href="https://www.facebook.com/profile.php?id=100064256194563" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                Facebook 長後農村かふぇハレルヤ
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>{t(f.copyright, lang)}</p>
        </div>
      </div>
    </footer>
  );
}
