import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "พิมพ์ไรเนี่ย? | เว็บแก้พิมพ์ผิดแป้นไทยอังกฤษ",
  description:
    "เว็บแก้พิมพ์ผิดแป้นไทยอังกฤษ แปลงข้อความที่พิมพ์ผิดแป้นจากไทยเป็นอังกฤษ หรืออังกฤษเป็นไทยได้ทันที ฟรี ไม่ต้องติดตั้ง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}