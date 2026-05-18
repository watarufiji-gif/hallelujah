"use client";

import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-20 sm:py-32" style={{ background: "#F0E9DC" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-10"
        >
          <div>
            <p className="sec-eyebrow mb-5">Instagram</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-5" style={{ color: "#1e1a14" }}>
              最新情報は<br />Instagramで発信中
            </h2>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#8b7b6a" }}>
              毎日のお弁当・馬刺し入荷・旬野菜の直売情報など、<br className="hidden sm:block" />
              リアルタイムの「今日のハレルヤ」をお届けしています。
            </p>
          </div>

          <a
            href="https://www.instagram.com/chogo_hareruya/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 shrink-0 group"
          >
            <span
              className="flex items-center justify-center w-12 h-12"
              style={{ background: "#1e1a14" }}
            >
              <Camera size={20} strokeWidth={1} className="text-white" />
            </span>
            <div>
              <div className="text-xs tracking-[0.1em] uppercase font-bold mb-0.5" style={{ color: "#8b7b6a" }}>
                Follow us
              </div>
              <div className="flex items-center gap-1.5 font-bold text-sm group-hover:opacity-70 transition-opacity" style={{ color: "#1e1a14" }}>
                @chogo_hareruya
                <ArrowRight size={13} strokeWidth={1.5} />
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mt-12 pt-12 border-t"
          style={{ borderColor: "rgba(161,120,60,0.18)" }}
        >
          <p className="text-xs" style={{ color: "#b09070", letterSpacing: "0.05em" }}>
            お弁当・馬刺し入荷・野菜直売など、当日の情報はInstagramで確認いただくのが一番確実です。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
