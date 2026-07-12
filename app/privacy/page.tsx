import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว | พิมพ์ไรเนี่ย?",
  description:
    "นโยบายความเป็นส่วนตัวของเว็บพิมพ์ไรเนี่ย? และข้อมูลเกี่ยวกับการประมวลผลข้อความในเบราว์เซอร์",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">
        Privacy Policy
      </h1>

      <p>
        เว็บไซต์นี้ไม่เก็บข้อมูลส่วนบุคคลของผู้ใช้งาน
        ข้อความที่คุณพิมพ์จะถูกประมวลผลภายในเบราว์เซอร์ของคุณเท่านั้น
      </p>
    </main>
  );
}