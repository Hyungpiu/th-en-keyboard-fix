import type { Metadata } from "next";
import Script from "next/script";
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
  verification: {
    google: "-wO1rBICNwcxYOS6MpKowlwgrJyq5oWQDhSnuwCpTZY",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "พิมพ์ไรเนี่ย?",
  alternateName: "TH/EN Keyboard Fix",
  url: "https://th-en-keyboard-fix.vercel.app",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  description:
    "เว็บแก้พิมพ์ผิดแป้นไทยอังกฤษ แปลงข้อความไทยเป็นอังกฤษ หรืออังกฤษเป็นไทยได้ทันที ฟรี",
  inLanguage: ["th", "en"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "THB",
  },
  creator: {
    "@type": "Person",
    name: "Hyungpiu",
  },
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
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7FWNZZ1S36"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7FWNZZ1S36');
          `}
        </Script>
      </body>
    </html>
  );
}