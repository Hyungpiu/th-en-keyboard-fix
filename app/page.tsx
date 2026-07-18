"use client";

import { useEffect, useState } from "react";
import { autoConvert, detectMode } from "@/lib/keyboardMap";

type HistoryItem = {
  input: string;
  output: string;
  createdAt: number;
};

const HISTORY_KEY = "keyboard-fix-history";
const MAX_HISTORY_ITEMS = 10;

export default function Home() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const result = autoConvert(text);
  const detectedMode = detectMode(text);

  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem(HISTORY_KEY);

      if (savedHistory) {
        const parsedHistory = JSON.parse(savedHistory) as HistoryItem[];
        setHistory(parsedHistory);
      }
    } catch (error) {
      console.error("Unable to load conversion history:", error);
    }
  }, []);

  const saveHistory = (input: string, output: string) => {
    if (!input.trim() || !output.trim()) return;

    const newItem: HistoryItem = {
      input,
      output,
      createdAt: Date.now(),
    };

    const updatedHistory = [
      newItem,
      ...history.filter(
        (item) => item.input !== input || item.output !== output
      ),
    ].slice(0, MAX_HISTORY_ITEMS);

    setHistory(updatedHistory);

    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
      console.error("Unable to save conversion history:", error);
    }
  };

  const copyResult = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
      saveHistory(text, result);

      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (error) {
      console.error("Unable to copy result:", error);
    }
  };

  const reuseHistoryItem = (item: HistoryItem) => {
    setText(item.input);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  };

  const modeLabel =
    detectedMode === "en-th"
      ? "EN → TH"
      : detectedMode === "th-en"
        ? "TH → EN"
        : "Auto Detect";

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-[#4F252E]">
      <section className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold text-[#F4AE52]">
            TH/EN Keyboard Fix
          </p>

          <h1 className="text-center text-3xl font-bold md:text-4xl">
            พิมพ์ไรเนี่ย?
          </h1>

          <div className="mb-6 mt-4 text-center text-sm text-[#4F252E]/70">
            <p>
              เว็บแก้พิมพ์ผิดแป้นไทยอังกฤษ สำหรับคนที่พิมพ์ผิดภาษา เช่น
              พิมพ์ภาษาไทยแต่แป้นเป็นอังกฤษ
              หรือพิมพ์อังกฤษแต่แป้นเป็นไทย
            </p>

            <p className="mt-2">
              ลืมเปลี่ยนภาษา! รองรับการแปลงข้อความไทย ↔ อังกฤษอัตโนมัติ
              ใช้งานฟรี ไม่ต้องสมัครสมาชิก และไม่ต้องติดตั้งโปรแกรม
            </p>

            <p className="mt-3">
              คำค้นหาที่ผู้ใช้นิยมค้นหา เช่น พิมพ์ผิดแป้นไทยอังกฤษ,
              แปลงไทยเป็นอังกฤษ, แปลงอังกฤษเป็นไทย, เว็บแก้พิมพ์ผิดภาษา,
              ลืมเปลี่ยนภาษา และ Thai English Keyboard Converter
            </p>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-[#F4AE52] bg-[#FFF7C5] p-5 shadow-2xl">
          <label
            htmlFor="incorrect-text"
            className="mb-2 block text-sm font-medium"
          >
            ข้อความที่พิมพ์ผิด
          </label>

          <textarea
            id="incorrect-text"
            autoFocus
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="เช่น l;ylfu8iy["
            rows={5}
            className="w-full resize-none rounded-2xl border-2 border-[#F4AE52] bg-white p-4 text-lg outline-none placeholder:text-[#4F252E]/40 focus:border-[#4F252E]"
          />

          <p className="mt-2 text-sm text-[#4F252E]/60">
            ตัวอย่าง: l;ylfu8iy[ → สวัสดีครับ</p>

               <p className="shrink-0">
                  {text.length.toLocaleString()} ตัวอักษร
              </p>

          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="rounded-full bg-[#F4AE52] px-4 py-2 text-sm font-semibold">
              Mode: {modeLabel}
            </span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={async () => {
                  try {
                    const clipboard = await navigator.clipboard.readText();
                    setText(clipboard);
                  } catch (error) {
                    console.error("Unable to read clipboard:", error);
                  }
                }}
                className="rounded-full border-2 border-[#F4AE52] bg-white px-4 py-2 text-sm font-semibold transition hover:bg-[#FFF7C5]"
              >
                Paste
              </button>

              <button
                type="button"
                onClick={() => setText("")}
                className="rounded-full border-2 border-[#F4AE52] bg-white px-4 py-2 text-sm font-semibold transition hover:bg-[#FFF7C5]"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="my-5 h-px bg-[#F4AE52]" />

          <div className="mb-2 flex items-center justify-between gap-3">
          <label className="mb-2 block text-sm font-medium">ผลลัพธ์</label>

           <p className="text-sm text-[#4F252E]/60">
              {result.length.toLocaleString()} ตัวอักษร
           </p>
          </div>

          <div className="min-h-24 whitespace-pre-wrap break-words rounded-2xl border-2 border-[#F4AE52] bg-white p-4 text-xl leading-relaxed">
            {result || (
              <span className="text-[#4F252E]/40">
                ผลลัพธ์จะแสดงตรงนี้
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={copyResult}
            disabled={!result}
            className="mt-4 w-full rounded-2xl bg-[#4F252E] px-4 py-3 font-semibold text-[#FFF7C5] transition hover:bg-[#F4AE52] hover:text-[#4F252E] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {copied ? "Copied!" : "Copy Result"}
          </button>

          {history.length > 0 && (
            <section className="mt-8 border-t border-[#F4AE52] pt-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold">ประวัติการแปลงล่าสุด</h2>

                <button
                  type="button"
                  onClick={clearHistory}
                  className="text-sm font-semibold underline hover:text-[#F4AE52]"
                >
                  ล้างประวัติ
                </button>
              </div>

              <div className="space-y-3">
                {history.map((item) => (
                  <article
                    key={`${item.createdAt}-${item.input}`}
                    className="rounded-2xl border border-[#F4AE52] bg-white p-4"
                  >
                    <p className="text-xs font-semibold text-[#4F252E]/50">
                      ข้อความเดิม
                    </p>

                    <p className="mt-1 break-words text-sm text-[#4F252E]/70">
                      {item.input}
                    </p>

                    <p className="mt-3 text-xs font-semibold text-[#4F252E]/50">
                      ผลลัพธ์
                    </p>

                    <p className="mt-1 break-words font-medium">
                      {item.output}
                    </p>

                    <button
                      type="button"
                      onClick={() => reuseHistoryItem(item)}
                      className="mt-3 rounded-full bg-[#F4AE52] px-4 py-2 text-sm font-semibold transition hover:bg-[#4F252E] hover:text-[#FFF7C5]"
                    >
                      ใช้ข้อความนี้อีกครั้ง
                    </button>
                  </article>
                ))}
              </div>
            </section>
          )}

          <footer className="mt-8 border-t border-[#F4AE52] pt-4 text-center text-sm text-[#4F252E]/60">
            <p className="mb-2">
              © 2026 พิมพ์ไรเนี่ย? เว็บแก้พิมพ์ผิดแป้นไทยอังกฤษ
            </p>

            <nav className="flex flex-wrap justify-center gap-4">
              <a href="/" className="underline hover:text-[#4F252E]">
                Home
              </a>
              <a href="/about" className="underline hover:text-[#4F252E]">
                About
              </a>
              <a
                href="/how-to-use"
                className="underline hover:text-[#4F252E]"
              >
                How to Use
              </a>
              <a href="/faq" className="underline hover:text-[#4F252E]">
                FAQ
              </a>
              <a href="/contact" className="underline hover:text-[#4F252E]">
                Contact
              </a>
              <a href="/privacy" className="underline hover:text-[#4F252E]">
                Privacy
              </a>
            </nav>
          </footer>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white/50 p-6 text-sm leading-7 text-[#4F252E]">
        <h2 className="mb-3 text-xl font-bold">
          เว็บแก้พิมพ์ผิดแป้นไทยอังกฤษ คืออะไร?
        </h2>

        <p>
          พิมพ์ไรเนี่ย? เป็นเครื่องมือแปลงข้อความสำหรับผู้ที่พิมพ์ผิดภาษา
          เช่น ตั้งใจพิมพ์ภาษาไทยแต่คีย์บอร์ดอยู่ภาษาอังกฤษ
          หรือพิมพ์ภาษาอังกฤษแต่คีย์บอร์ดอยู่ภาษาไทย
        </p>

        <p className="mt-3">
          ระบบจะตรวจจับและแปลงข้อความไทยเป็นอังกฤษ
          หรืออังกฤษเป็นไทยโดยอัตโนมัติ
          ช่วยประหยัดเวลาโดยไม่ต้องลบและพิมพ์ใหม่ทั้งหมด
        </p>

        <p className="mt-3">
          เหมาะสำหรับนักเรียน นักศึกษา พนักงานออฟฟิศ โปรแกรมเมอร์
          และผู้ใช้งานทั่วไปที่ลืมเปลี่ยนภาษาอยู่บ่อยครั้ง
        </p>
      </section>
    </main>
  );
}