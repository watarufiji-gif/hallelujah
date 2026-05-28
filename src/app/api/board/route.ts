import { NextResponse } from "next/server";

export const revalidate = 300;

function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') { cell += '"'; i++; }
      else inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      row.push(cell); cell = "";
    } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell); cell = "";
      if (row.some(c => c !== "")) rows.push(row);
      row = [];
    } else {
      cell += ch;
    }
  }
  if (cell || row.length) { row.push(cell); if (row.some(c => c !== "")) rows.push(row); }
  return rows;
}

export async function GET() {
  const sheetId = process.env.SHEET_ID;
  if (!sheetId) {
    return NextResponse.json({ error: "SHEET_ID not set" }, { status: 500 });
  }

  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`;

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);

    const text = await res.text();
    const rows = parseCSV(text);

    // rows[0] = header row, last row = latest entry
    const last = rows[rows.length - 1];
    const [
      date = "", message = "", veggie = "", author = "",
      instagram_url = "", calendar_instagram_url = "",
      lunch_start = "", lunch_end = "", dinner_start = "", dinner_end = "", closed_days = "",
    ] = last;

    return NextResponse.json({ date, message, veggie, author, instagram_url, calendar_instagram_url, lunch_start, lunch_end, dinner_start, dinner_end, closed_days });
  } catch (e) {
    console.error("Board API error:", e);
    return NextResponse.json({ error: "Failed to load board" }, { status: 500 });
  }
}
