import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย | พิมพ์ไรเนี่ย?",
  description:
    "คำถามที่พบบ่อยเกี่ยวกับเว็บแก้พิมพ์ผิดแป้นไทยอังกฤษ การใช้งาน ความเป็นส่วนตัว และการรองรับอุปกรณ์",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "เว็บพิมพ์ไรเนี่ย? ใช้ทำอะไร?",
    answer:
      "ใช้แปลงข้อความที่พิมพ์ผิดแป้นระหว่างภาษาไทยและภาษาอังกฤษ เช่น ตั้งใจพิมพ์ภาษาไทยแต่คีย์บอร์ดอยู่ภาษาอังกฤษ หรือกลับกัน",
  },
  {
    question: "ต้องสมัครสมาชิกหรือไม่?",
    answer:
      "ไม่ต้องสมัครสมาชิก สามารถใช้งานได้ฟรีทันทีผ่านเว็บเบราว์เซอร์",
  },
  {
    question: "ข้อความที่พิมพ์จะถูกเก็บไว้หรือไม่?",
    answer:
      "ข้อความจะถูกประมวลผลภายในเบราว์เซอร์ของผู้ใช้งาน และเว็บไซต์ไม่ได้จัดเก็บข้อความที่พิมพ์",
  },
  {
    question: "รองรับตัวพิมพ์ใหญ่และปุ่ม Shift หรือไม่?",
    answer:
      "รองรับตัวพิมพ์ใหญ่และสัญลักษณ์จากปุ่ม Shift ตามผังแป้นพิมพ์ไทยและอังกฤษ",
  },
  {
    question: "สามารถใช้บนโทรศัพท์มือถือได้หรือไม่?",
    answer:
      "สามารถใช้งานได้ทั้งคอมพิวเตอร์ แท็บเล็ต และโทรศัพท์มือถือ",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#C1EBE9] px-6 py-12 text-[#4F252E]">
      <section className="mx-auto max-w-2xl rounded-3xl border-2 border-[#F4AE52] bg-[#FFF7C5] p-6 shadow-xl">
        <h1 className="mb-6 text-3xl font-bold">
          คำถามที่พบบ่อย
        </h1>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-[#F4AE52] bg-white p-4"
            >
              <h2 className="mb-2 text-lg font-semibold">
                {faq.question}
              </h2>

              <p className="leading-relaxed text-[#4F252E]/80">
                {faq.answer}
              </p>
            </article>
          ))}
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