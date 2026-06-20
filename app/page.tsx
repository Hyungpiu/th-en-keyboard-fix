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
    <main className="min-h-screen bg-[#FFF] px-4 py-10 text-[#4F252E]">
      <section className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold text-[#F4AE52]">
            TH/EN Keyboard Fix
          </p>

        <h1 className="text-3xl md:text-4xl font-bold text-center">
            พิมพ์ไรเนี่ย?
        </h1>

<div className="mb-6 text-center text-sm text-[#4F252E]/70">
  <p>
    เว็บแก้พิมพ์ผิดแป้นไทยอังกฤษ สำหรับคนที่พิมพ์ผิดภาษา
    เช่น พิมพ์ภาษาไทยแต่แป้นเป็นอังกฤษ หรือพิมพ์อังกฤษแต่แป้นเป็นไทย
  </p>

  <p className="mt-2">
    ลืมเปลี่ยนภาษา !  รองรับการแปลงข้อความไทย ↔ อังกฤษ อัตโนมัติ
    แปลอักษร หรือแปลภาษาเมื่อเราลืมเปลี่ยนภาษา ใช้งานฟรี ไม่ต้องสมัครสมาชิก และไม่ต้องติดตั้งโปรแกรม
  </p>

  <p className="mt-3">
                คำค้นหาที่ผู้ใช้นิยมค้นหา เช่น
                พิมพ์ผิดแป้นไทยอังกฤษ,
                แปลงไทยเป็นอังกฤษ,
                แปลงอังกฤษเป็นไทย,
                เว็บแก้พิมพ์ผิดภาษา,
                ลืมเปลี่ยนภาษา,
                Thai English Keyboard Converter,
                และโปรแกรมแปลงคีย์บอร์ดไทยอังกฤษ
   </p>

</div>
        </div>

        <div className="rounded-3xl border-2 border-[#F4AE52] bg-[#FFF7C5] p-5 shadow-2xl">
          <label className="mb-2 block text-sm font-medium text-[#4F252E]">
            ข้อความที่พิมพ์ผิด
          </label>

          <textarea
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="เช่น l;ylfu8iy["
            rows={5}
            className="w-full resize-none rounded-2xl border-2 border-[#F4AE52] bg-white p-4 text-lg text-[#4F252E] outline-none placeholder:text-[#4F252E]/40 focus:border-[#4F252E]"
          />

          <p className="mt-2 text-sm text-[#4F252E]/60">
  ตัวอย่าง: l;ylfu8iy[ → สวัสดีครับ
</p>

 <div className="mt-4 flex items-center justify-between gap-3">
  <span className="rounded-full bg-[#F4AE52] px-4 py-2 text-sm font-semibold text-[#4F252E]">
    Mode: {modeLabel}
  </span>

  <div className="flex gap-2">
    <button
      onClick={async () => {
        const clipboard = await navigator.clipboard.readText();
        setText(clipboard);
      }}
      className="rounded-full border-2 border-[#F4AE52] bg-white px-4 py-2 text-sm font-semibold text-[#4F252E] transition hover:bg-[#FFF7C5]"
    >
      Paste
    </button>

    <button
      onClick={() => setText("")}
      className="rounded-full border-2 border-[#F4AE52] bg-white px-4 py-2 text-sm font-semibold text-[#4F252E] transition hover:bg-[#FFF7C5]"
    >
      Clear
    </button>

    
  </div>
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

          <footer className="mt-8 border-t border-[#F4AE52] pt-4 text-center text-sm text-[#4F252E]/60">
  <p className="mb-2">
    © 2026 พิมพ์ไรเนี่ย? เว็บแก้พิมพ์ผิดแป้นไทยอังกฤษ
  </p>

  <nav className="flex justify-center gap-4">
    <a href="/" className="underline hover:text-[#4F252E]">
      Home
    </a>
    <a href="/about" className="underline hover:text-[#4F252E]">
      About
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
    หรืออังกฤษเป็นไทยโดยอัตโนมัติ ช่วยประหยัดเวลา
    ไม่ต้องลบและพิมพ์ใหม่ทั้งหมด
      </p>

        <p className="mt-3">
    เหมาะสำหรับนักเรียน นักศึกษา พนักงานออฟฟิศ
    โปรแกรมเมอร์ และผู้ใช้งานทั่วไปที่ลืมเปลี่ยนภาษาอยู่บ่อยครั้ง
        </p>
  </section>
</main>
  );
}