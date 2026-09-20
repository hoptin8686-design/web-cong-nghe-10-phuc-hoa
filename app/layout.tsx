import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const body = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chinh phục Công nghệ 10 — Trồng trọt | THPT Phục Hòa",
  description:
    "Hệ thống tự học và ôn tập trực tuyến môn Công nghệ 10 — Công nghệ Trồng trọt (Bộ sách Kết nối tri thức với cuộc sống) - Trường THPT Phục Hòa, Tỉnh Cao Bằng. Lý thuyết tương tác, trắc nghiệm tự chấm, tư duy Đúng/Sai và bài tập vận dụng thực tiễn.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${body.variable} ${mono.variable} font-body text-star antialiased selection:bg-leaf selection:text-void playground min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
