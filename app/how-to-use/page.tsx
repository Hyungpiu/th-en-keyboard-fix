import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "วิธีใช้งาน | พิมพ์ไรเนี่ย?",
  description:
    "วิธีใช้เว็บพิมพ์ไรเนี่ย? เพื่อแปลงข้อความที่พิมพ์ผิดแป้นไทยอังกฤษอย่างรวดเร็ว",
  alternates: {
    canonical: "/how-to-use",
  },
};

export default function HowToUsePage() {
  return (
    <main className="min-h-screen bg-[#C1EBE9] px-6 py-12 text-[#4F252E]">
      <section className="mx-auto max-w-2xl rounded-3xl border-2 border-[#F4AE52] bg-[#FFF7C5] p-6 shadow-xl">
        <h1 className="mb-6 text-3xl font-bold">
          วิธีใช้งานพิมพ์ไรเนี่ย?
        </h1>

        <div className="space-y-5">
          <article className="rounded-2xl border border-[#F4AE52] bg-white p-4">
            <h2 className="mb-2 text-lg font-semibold">
              1. วางข้อความที่พิมพ์ผิด
            </h2>
            <p className="leading-relaxed text-[#4F252E]/80">
              พิมพ์หรือวางข้อความที่พิมพ์ผิดแป้นลงในช่องด้านบนของหน้าแรก
            </p>
          </article>

          <article className="rounded-2xl border border-[#F4AE52] bg-white p-4">
            <h2 className="mb-2 text-lg font-semibold">
              2. ระบบตรวจจับภาษาอัตโนมัติ
            </h2>
            <p className="leading-relaxed text-[#4F252E]/80">
              ระบบจะตรวจสอบว่าข้อความควรแปลงจากอังกฤษเป็นไทย
              หรือจากไทยเป็นอังกฤษ
            </p>
          </article>

          <article className="rounded-2xl border border-[#F4AE52] bg-white p-4">
            <h2 className="mb-2 text-lg font-semibold">
              3. ตรวจสอบผลลัพธ์
            </h2>
            <p className="leading-relaxed text-[#4F252E]/80">
              ผลลัพธ์จะแสดงทันทีในช่องด้านล่าง
              โดยไม่ต้องกดปุ่มแปลง
            </p>
          </article>

          <article className="rounded-2xl border border-[#F4AE52] bg-white p-4">
            <h2 className="mb-2 text-lg font-semibold">
              4. คัดลอกข้อความ
            </h2>
            <p className="leading-relaxed text-[#4F252E]/80">
              กดปุ่ม Copy Result เพื่อนำข้อความที่แปลงแล้วไปใช้งานต่อ
            </p>
          </article>
        </div>

        <a
          href="/"
          className="mt-6 inline-block font-semibold underline"
        >
          กลับหน้าแรก
        </a>
      </section>
    </main>
  );
}