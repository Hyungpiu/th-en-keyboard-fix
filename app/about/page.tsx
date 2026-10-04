import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | พิมพ์ไรเนี่ย?",
  description:
    "รู้จักพิมพ์ไรเนี่ย? เว็บแก้พิมพ์ผิดแป้นไทยอังกฤษฟรี ช่วยแปลงข้อความที่พิมพ์สลับภาษา TH/EN ได้ทันทีโดยไม่ต้องติดตั้ง",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#C1EBE9] px-6 py-12 text-[#4F252E]">
      <section className="mx-auto max-w-2xl rounded-3xl border-2 border-[#F4AE52] bg-[#FFF7C5] p-6 shadow-xl">
        <h1 className="mb-4 text-3xl font-bold">
          About พิมพ์ไรเนี่ย?
        </h1>

        <Image
          src="/logo.png"
          alt="พิมพ์ไรเนี่ย? เว็บแก้พิมพ์ผิดแป้นไทยอังกฤษ"
          width={420}
          height={140}
          className="mx-auto my-8"
          priority
        />

        <p className="mb-4 leading-relaxed">
          <strong>พิมพ์ไรเนี่ย?</strong> คือเครื่องมือออนไลน์สำหรับช่วยแก้ข้อความ
          ที่พิมพ์ผิดแป้นระหว่างภาษาไทยและภาษาอังกฤษ
          เหมาะสำหรับเวลาที่พิมพ์ข้อความไปแล้วเพิ่งรู้ว่าลืมเปลี่ยนภาษา
          บนคีย์บอร์ด
        </p>

        <p className="mb-6 leading-relaxed">
          แทนที่จะต้องลบข้อความแล้วพิมพ์ใหม่ทั้งหมด
          คุณสามารถนำข้อความมาใส่ในเว็บไซต์
          แล้วให้เครื่องมือช่วยแปลงตัวอักษรกลับเป็นภาษาที่ต้องการได้ทันที
        </p>

        <h2 className="mb-3 text-xl font-bold">
          ใช้ทำอะไรได้บ้าง?
        </h2>

        <ul className="mb-6 list-disc space-y-2 pl-6 leading-relaxed">
          <li>แก้ข้อความที่พิมพ์ภาษาอังกฤษด้วยแป้นภาษาไทย</li>
          <li>แก้ข้อความที่พิมพ์ภาษาไทยด้วยแป้นภาษาอังกฤษ</li>
          <li>ตรวจจับทิศทางการแปลงข้อความอัตโนมัติ</li>
          <li>คัดลอกข้อความที่แปลงแล้วไปใช้งานต่อได้ทันที</li>
        </ul>

        <h2 className="mb-3 text-xl font-bold">
          ทำไมถึงมีเว็บนี้?
        </h2>

        <p className="mb-6 leading-relaxed">
          การลืมเปลี่ยนภาษาแป้นพิมพ์เป็นเรื่องเล็ก ๆ
          ที่เกิดขึ้นได้บ่อย โดยเฉพาะกับคนที่ต้องสลับใช้ภาษาไทยและภาษาอังกฤษ
          ระหว่างทำงาน เรียน หรือพูดคุยออนไลน์
          พิมพ์ไรเนี่ย? จึงถูกสร้างขึ้นเพื่อช่วยลดเวลาที่ต้องกลับไปพิมพ์ใหม่
          และทำให้การแก้ข้อความเป็นเรื่องง่ายขึ้น
        </p>

        <h2 className="mb-3 text-xl font-bold">
          ฟรีและไม่ต้องติดตั้ง
        </h2>

        <p className="mb-6 leading-relaxed">
          เครื่องมือนี้สามารถใช้งานผ่านเว็บเบราว์เซอร์ได้ฟรี
          ไม่จำเป็นต้องดาวน์โหลดหรือติดตั้งโปรแกรมเพิ่มเติม
          และข้อความที่นำมาแปลงจะถูกประมวลผลภายในเบราว์เซอร์ของผู้ใช้งาน
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/"
            className="rounded-xl bg-[#F4AE52] px-5 py-3 font-semibold no-underline transition hover:opacity-90"
          >
            ลองแปลงข้อความ
          </a>

          <a
            href="/privacy"
            className="px-2 py-3 font-semibold underline"
          >
            นโยบายความเป็นส่วนตัว
          </a>
        </div>
      </section>
    </main>
  );
}