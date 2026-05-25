"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

const PHONE = "0466-45-8866";

interface Props {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function PhoneReserveButton({ label, className, style }: Props) {
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    return (
      <a href={`tel:${PHONE}`} className={className} style={style}>
        <Phone size={15} strokeWidth={1.5} />
        {PHONE}
      </a>
    );
  }

  return (
    <button type="button" onClick={() => setRevealed(true)} className={className} style={style}>
      <Phone size={15} strokeWidth={1.5} />
      {label}
    </button>
  );
}
