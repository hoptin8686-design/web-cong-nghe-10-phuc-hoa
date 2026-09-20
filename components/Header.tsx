"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sprout, Award, CheckCircle2, Home } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-void-card/90 border-b border-star/15 shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo & School Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-leaf to-sea flex items-center justify-center text-void font-bold shadow-md shadow-leaf/20 group-hover:scale-105 transition-transform">
            <Sprout className="w-5 h-5 text-void" />
          </div>
          <div>
            <div className="font-extrabold text-star tracking-tight flex items-center gap-2">
              <span className="font-display">Công nghệ 10</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-leaf/20 text-leaf-deep">
                Trồng trọt
              </span>
            </div>
            <p className="text-xs text-star-soft font-medium">
              Trường THPT Phục Hòa
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              pathname === "/"
                ? "bg-leaf/20 text-leaf-deep"
                : "text-star-soft hover:text-star hover:bg-white/5"
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Trang chủ</span>
          </Link>

          <Link
            href="/thi-thu"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              pathname === "/thi-thu" || pathname === "/on-tap"
                ? "bg-coral/20 text-coral-deep"
                : "text-star-soft hover:text-star hover:bg-white/5"
            }`}
          >
            <Award className="w-4 h-4 text-coral-deep" />
            <span>Thi thử TN (24+4+4)</span>
          </Link>

          <div className="h-4 w-px bg-star/20 mx-1 hidden sm:block" />

          <div className="hidden md:flex items-center gap-1 text-xs text-leaf-deep font-semibold bg-leaf/10 px-2.5 py-1 rounded-full border border-leaf/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>GDPT 2018</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
