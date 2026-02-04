import type { Metadata } from "next";
import { Noto_Sans_KR, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const nanumMyeongjo = Nanum_Myeongjo({
  variable: "--font-nanum-myeongjo",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "노인단체 종합복지센터",
    template: "%s | 노인단체 종합복지센터",
  },
  description: "어르신을 위한 복지서비스, 교육 프로그램, 일자리 지원을 제공하는 종합복지센터입니다.",
  keywords: ["노인복지", "노인일자리", "요양보호사", "노인교육", "실버케어", "돌봄서비스"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "노인단체 종합복지센터",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="font-size-medium">
      <body className={`${notoSansKR.variable} ${nanumMyeongjo.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
