import type { Metadata } from "next";
import "./globals.css";
import Header    from "./components/Header";
import MobileNav from "./components/MobileNav";

export const metadata: Metadata = {
  title: "農村かふぇ ハレルヤ｜長後駅3分・農家直営・日本酒飲み放題",
  description:
    "藤沢市・長後駅徒歩3分。農家直営「ふるうつらんど井上」の新鮮野菜×馬刺し×日本酒飲み放題。子連れ・おひとり様歓迎。駐車場無料。",
  keywords: ["長後駅","居酒屋","ランチ","農家直営","ハレルヤ","藤沢市","日本酒","飲み放題","馬刺し","カフェ","野菜","ラーメン","昼飲み","子連れ"],
  openGraph: {
    title: "農村かふぇ ハレルヤ｜長後駅3分・農家直営・日本酒飲み放題",
    description: "農家直営ならではの新鮮野菜と圧倒的コスパ。日本酒飲み放題も解禁！",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500&family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Serif+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-paper antialiased">
        <Header />
        <main>{children}</main>
        <MobileNav />
      </body>
    </html>
  );
}
