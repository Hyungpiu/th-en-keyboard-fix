"use client";

import { useState } from "react";
import { autoConvert, detectMode } from "@/lib/keyboardMap";

export default function Home() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const result = autoConvert(text);
  const detectedMode = detectMode(text);

  const copyResult = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const modeLabel =
    detectedMode === "en-th"
      ? "EN → TH"
      : detectedMode === "th-en"
      ? "TH → EN"
      : "Auto Detect";

  return (
    <main className="min-h-screen bg-[#C1EBE9] px-4 py-10 text-[#4F252E]">
      <section className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold text-[#F4AE52]">
            TH/EN Keyboard Fix
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#4F252E]">
            แก้พิมพ์ผิดแป้นไทย/อังกฤษ (Correct typos on Thai/English keyboard.)
          </h1>

          <p className="mt-4 text-[#4F252E]/80">
            วางข้อความที่พิมพ์ผิดแป้น แล้วให้เว็บแปลงให้อัตโนมัติ
          </p>
        </div>

        <div className="rounded-3xl border-2 border-[#F4AE52] bg-[#FFF7C5] p-5 shadow-2xl">
          <label className="mb-2 block text-sm font-medium text-[#4F252E]">
            ข้อความที่พิมพ์ผิด
          </label>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="เช่น l;ylfu8iy["
            rows={5}
            className="w-full resize-none rounded-2xl border-2 border-[#F4AE52] bg-white p-4 text-lg text-[#4F252E] outline-none placeholder:text-[#4F252E]/40 focus:border-[#4F252E]"
          />

          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="rounded-full bg-[#F4AE52] px-4 py-2 text-sm font-semibold text-[#4F252E]">
              Mode: {modeLabel}
            </span>

            <button
              onClick={() => setText("")}
              className="rounded-full border-2 border-[#F4AE52] bg-white px-4 py-2 text-sm font-semibold text-[#4F252E] transition hover:bg-[#FFF7C5]"
            >
              Clear
            </button>
          </div>

          <div className="my-5 h-px bg-[#F4AE52]" />

          <label className="mb-2 block text-sm font-medium text-[#4F252E]">
            ผลลัพธ์
          </label>

          <div className="min-h-24 rounded-2xl border-2 border-[#F4AE52] bg-white p-4 text-xl leading-relaxed text-[#4F252E]">
            {result || (
              <span className="text-[#4F252E]/40">ผลลัพธ์จะแสดงตรงนี้</span>
            )}
          </div>

          <button
            onClick={copyResult}
            className="mt-4 w-full rounded-2xl bg-[#4F252E] px-4 py-3 font-semibold text-[#FFF7C5] transition hover:bg-[#F4AE52] hover:text-[#4F252E]"
          >
            {copied ? "Copied!" : "Copy Result"}
          </button>
        </div>
      </section>
    </main>
  );
}