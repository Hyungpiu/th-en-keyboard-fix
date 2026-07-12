import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#C1EBE9] px-6 py-12 text-[#4F252E]">
      <section className="mx-auto max-w-2xl rounded-3xl border-2 border-[#F4AE52] bg-[#FFF7C5] p-6 shadow-xl">
        <h1 className="mb-4 text-3xl font-bold">
          About พิมพ์ไรเนี่ย?
        </h1>

        <Image
          src="/logo.png"
          alt="TH EN Keyboard Fix"
          width={420}
          height={140}
          className="mx-auto my-8"
          priority
        />

        <p className="mb-4 leading-relaxed">
          พิมพ์ไรเนี่ย? คือเว็บสำหรับแก้ข้อความที่พิมพ์ผิดแป้นไทยอังกฤษ
          เช่น เผลอพิมพ์ภาษาอังกฤษตอนตั้งใจพิมพ์ภาษาไทย
          หรือพิมพ์ภาษาไทยตอนตั้งใจพิมพ์ภาษาอังกฤษ
        </p>

        <p className="mb-4 leading-relaxed">
          เว็บนี้ช่วยแปลงข้อความไทย ↔ อังกฤษ ได้ทันที ใช้งานฟรี
          ไม่ต้องติดตั้งโปรแกรม และประมวลผลในเบราว์เซอร์ของผู้ใช้งาน
        </p>

        <a href="/" className="font-semibold underline">
          กลับหน้าแรก
        </a>
      </section>
    </main>
  );
}