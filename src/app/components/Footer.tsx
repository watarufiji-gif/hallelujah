import Link from "next/link";
import { Phone } from "lucide-react";

const NAV = [
  { href: "/",       label: "トップ" },
  { href: "/menu",   label: "メニュー" },
  { href: "/sake",   label: "日本酒飲み放題" },
  { href: "/access", label: "アクセス・営業時間" },
];

export default function Footer() {
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
              農家直営ならではの新鮮野菜と圧倒的コスパ。長後の「まちの台所」として地域に愛されるお店を目指しています。
            </p>
          </div>

          {/* ナビ */}
          <div>
            <h4 className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-4">Pages</h4>
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
            <h4 className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <a href="tel:0466-45-8866" className="flex items-center gap-2 text-white/50 hover:text-[#f59339] transition-colors">
                <Phone size={14} /> 0466-45-8866
              </a>
              <a href="https://www.hotpepper.jp/strJ001342063/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-[#f59339] transition-colors">
                🍽️ ホットペッパーで予約
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-[#f59339] transition-colors">
                📸 Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/20 text-xs">© 2026 農村かふぇ ハレルヤ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
