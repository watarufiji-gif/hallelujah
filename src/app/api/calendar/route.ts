import { NextResponse } from "next/server";
import { parseCSV } from "@/lib/parseCSV";

export const revalidate = 300;

function jstDateString(): string {
  const now = new Date();
  const jst = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  // ja-JP format: "2026/05/29" → "2026-05-29"
  return jst.format(now).replace(/\//g, "-");
}

export async function GET() {
  const sheetId = process.env.SHEET_ID;
  if (!sheetId) return NextResponse.json({ status: "通常", memo: "" });

  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&sheet=calendar`;

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return NextResponse.json({ status: "通常", memo: "" });

    const rows = parseCSV(await res.text());
    const today = jstDateString();

    // rows[0] = header; find row matching today's date
    const match = rows.slice(1).find(row => row[0]?.trim() === today);
    if (!match) return NextResponse.json({ status: "通常", memo: "" });

    const [, status = "通常", memo = ""] = match;
    return NextResponse.json({ status: status.trim(), memo: memo.trim() });
  } catch {
    return NextResponse.json({ status: "通常", memo: "" });
  }
}
