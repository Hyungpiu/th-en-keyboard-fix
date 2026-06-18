export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#C1EBE9] px-6 py-12 text-[#4F252E]">
      <section className="mx-auto max-w-2xl rounded-3xl border-2 border-[#F4AE52] bg-[#FFF7C5] p-6 shadow-xl">
        <h1 className="mb-4 text-3xl font-bold">Contact</h1>

        <p className="mb-4 leading-relaxed">
          หากพบปัญหาในการใช้งาน หรือต้องการเสนอแนะเพิ่มเติม
          สามารถติดต่อผู้พัฒนาได้ทางอีเมลด้านล่าง
        </p>

        <p className="font-semibold">
          Email:{" "}
          <a
            href="mailto:tanya.wiang@gmail.com"
            className="underline hover:text-[#F4AE52]"
          >
            tanya.wiang@gmail.com
          </a>
        </p>

        <a
          href="/"
          className="mt-6 inline-block font-semibold underline hover:text-[#F4AE52]"
        >
          กลับหน้าแรก
        </a>
      </section>
    </main>
  );
}