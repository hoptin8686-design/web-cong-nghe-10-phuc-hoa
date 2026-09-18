"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CURRICULUM } from "@/data/curriculum";
import { getProgress, getErrorStats } from "@/lib/progress";
import { chuDeCanOnLai, type ChuDeCanOnLai } from "@/lib/onLai";
import type { LessonCounts, ProgressMap } from "@/lib/types";

function ScoreBadge({ best }: { best: number }) {
  if (best >= 80) {
    return (
      <span className="rounded-full bg-leaf/20 px-2.5 py-0.5 font-mono text-xs font-bold text-leaf-deep">
        ⭐ {best}%
      </span>
    );
  }
  if (best >= 50) {
    return (
      <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-xs font-bold text-gold-deep">
        {best}%
      </span>
    );
  }
  return (
    <span className="rounded-full bg-berry/20 px-2.5 py-0.5 font-mono text-xs font-bold text-berry">
      {best}%
    </span>
  );
}

export default function HomeClient({
  counts,
}: {
  counts: Record<string, LessonCounts>;
}) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [canOnLai, setCanOnLai] = useState<ChuDeCanOnLai[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProgress(getProgress());
    setCanOnLai(chuDeCanOnLai(getErrorStats()));
    setLoaded(true);
  }, []);

  const allLessons = CURRICULUM.flatMap((t) => t.lessons);
  const starCount = allLessons.filter((l) => (progress[l.id]?.best ?? 0) >= 80).length;

  // Lọc bài học theo tìm kiếm
  const filteredCurriculum = CURRICULUM.map((topic) => ({
    ...topic,
    lessons: topic.lessons.filter((l) =>
      searchTerm.trim() === ""
        ? true
        : l.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (l.highlight && l.highlight.toLowerCase().includes(searchTerm.toLowerCase()))
    ),
  })).filter((topic) => topic.lessons.length > 0);

  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        {/* HEADER THƯƠNG HIỆU PHỤC HÒA CHUẨN */}
        <header className="text-center">
          <div className="inline-flex flex-col items-center">
            {/* Huy hiệu trường */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-leaf via-sea to-coral px-5 py-2 font-display text-sm sm:text-base font-bold text-white shadow-card">
              <span>🏫</span>
              <span>Trường THPT Phục Hòa - Tỉnh Cao Bằng</span>
            </div>
            {/* Dòng chữ phụ đề tổ chuyên môn */}
            <p className="mt-2 font-mono text-xs sm:text-sm font-semibold text-leaf-deep tracking-wide">
              Tổ Khoa học Tự nhiên & Công nghệ — Năm học 2026-2027
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-4xl sm:text-5xl">
            <span>🌱</span>
            <span>🌾</span>
            <span>🚜</span>
            <span>🛰️</span>
          </div>

          <h1 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star">
            Chinh phục{" "}
            <span className="bg-gradient-to-r from-leaf via-sea-deep to-coral bg-clip-text text-transparent">
              Công nghệ 10 — Trồng trọt
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-star-soft leading-relaxed">
            Hệ thống học tập và ôn luyện trực tuyến môn <strong>Công nghệ Trồng trọt 10</strong> theo bộ sách <strong>Kết nối tri thức với cuộc sống</strong>.
            Đầy đủ Lý thuyết tương tác, Trắc nghiệm 4 lựa chọn, Câu hỏi Đúng/Sai phản biện và Bài tập thực hành nông nghiệp thực tiễn. Đạt từ <strong>80%</strong> trở lên để nhận sao vàng ⭐ danh dự!
          </p>

          {/* Thanh chỉ số thành tích */}
          {loaded && (
            <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-leaf/30 bg-void-card px-4 py-1.5 font-mono text-xs sm:text-sm text-leaf-deep shadow-card">
                🏆 Đã mở khóa: <strong>{starCount}</strong> / {allLessons.length} sao vàng
              </span>
              <span className="rounded-full border border-coral/30 bg-void-card px-4 py-1.5 font-mono text-xs sm:text-sm text-coral-deep shadow-card">
                📖 Toàn bộ 8 Chương & 28 Bài học chuẩn
              </span>
            </div>
          )}
        </header>

        {/* BANNER ÔN TẬP KIỂM TRA ĐỊNH KỲ */}
        <Link
          href="/on-tap"
          className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border-2 border-leaf/40 bg-gradient-to-r from-leaf/[0.15] via-void-card to-sea/[0.15] p-5 sm:p-6 shadow-card transition hover:-translate-y-1 hover:border-leaf hover:shadow-card-hover sm:flex-row sm:items-center cursor-pointer"
        >
          <div>
            <span className="rounded-full bg-leaf/20 px-3 py-1 font-mono text-xs font-bold text-leaf-deep">
              ⚡ Dành riêng cho học sinh lớp 10
            </span>
            <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-star">
              🎯 Ôn tập Kiểm tra Định kì — Giữa kì & Cuối kì
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-star-soft">
              Bộ đề thi trắc nghiệm bấm giờ 45 phút, bao quát trọn vẹn kiến thức và chấm điểm tự động kèm lời giải chi tiết.
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-gradient-to-r from-leaf to-sea px-5 py-2.5 font-display text-sm font-bold text-void shadow-card hover:shadow-glow-leaf transition font-extrabold">
            Luyện đề ngay →
          </span>
        </Link>

        {/* GỢI Ý ÔN LẠI DỰA TRÊN CÂU SAI CỦA HỌC SINH */}
        {loaded && canOnLai.length > 0 && (
          <section className="mt-8 animate-pop-in rounded-2xl border-2 border-gold/40 bg-gold/[0.08] p-5 shadow-card sm:p-6">
            <h3 className="font-display text-lg font-bold text-gold-deep flex items-center gap-2">
              <span>🎯</span>
              <span>Chỗ em cần ôn lại (AI Phân tích kết quả)</span>
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-star-soft">
              Dựa trên kết quả làm bài của em, dưới đây là những bài em còn làm sai nhiều. Hãy đọc lại lý thuyết và làm lại để cải thiện điểm số nhé!
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {canOnLai.map((cd) =>
                cd.bai.map((b) => (
                  <Link
                    key={b.id}
                    href={`/luyen/${b.id}`}
                    className="flex items-center gap-1.5 rounded-xl border border-gold/30 bg-void-card px-3 py-1.5 font-display text-xs text-star hover:border-gold transition"
                  >
                    <span>{b.title}</span>
                    <span className="font-mono text-coral font-bold">({b.tyLeSai}% sai)</span>
                  </Link>
                ))
              )}
            </div>
          </section>
        )}

        {/* Ô TÌM KIẾM BÀI HỌC */}
        <div className="mt-10 flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="🔍 Tìm kiếm bài học (ví dụ: Đất trồng, Phân bón, Ghép cành, Thuỷ canh, Sâu bệnh...)"
              className="w-full rounded-2xl border border-star/15 bg-void-card px-4 py-3 pl-11 text-sm text-star placeholder:text-star-soft/40 focus:border-leaf focus:outline-none"
            />
            <span className="absolute left-4 top-3.5 text-star-soft">🔍</span>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-3.5 text-xs text-star-soft hover:text-star"
              >
                ✕ Xóa
              </button>
            )}
          </div>
        </div>

        {/* DANH MỤC 8 CHƯƠNG & 28 BÀI HỌC SGK */}
        <div className="mt-8 space-y-8">
          {filteredCurriculum.map((topic) => (
            <section
              key={topic.id}
              className="rounded-3xl border border-star/10 bg-void-card/60 p-5 sm:p-7 shadow-card"
            >
              {/* Tiêu đề chương */}
              <div className="flex items-center gap-3 border-b border-star/10 pb-3">
                <span className="text-2xl sm:text-3xl">{topic.emoji}</span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-star">
                    {topic.name}
                  </h3>
                  <span className="font-mono text-xs text-star-soft">
                    {topic.lessons.length} bài học
                  </span>
                </div>
              </div>

              {/* Danh sách bài học trong chương */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {topic.lessons.map((lesson) => {
                  const lessonScore = progress[lesson.id]?.best;
                  const lessonCount = counts[lesson.id];

                  return (
                    <Link
                      key={lesson.id}
                      href={`/luyen/${lesson.id}`}
                      className="group flex flex-col justify-between rounded-2xl border border-leaf/30 bg-gradient-to-br from-leaf/[0.08] to-void-card p-4 transition-all hover:-translate-y-0.5 hover:border-leaf shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-xs text-star-soft">
                            {lesson.bookPages}
                          </span>
                          {lessonScore !== undefined && (
                            <ScoreBadge best={lessonScore} />
                          )}
                          <span className="rounded-full bg-leaf/20 px-2 py-0.5 font-mono text-[10px] font-bold text-leaf-deep uppercase tracking-wider">
                            Đầy đủ 4 phân hệ
                          </span>
                        </div>

                        <h4 className="mt-2 font-display text-base font-bold text-star group-hover:text-leaf-deep transition">
                          {lesson.title}
                        </h4>

                        {lesson.highlight && (
                          <p className="mt-1 text-xs text-leaf-deep/90 line-clamp-2">
                            ✨ {lesson.highlight}
                          </p>
                        )}
                      </div>

                      <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2.5 text-xs text-star-soft">
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          🌱 Lý thuyết · 🎯 Trắc nghiệm · ⚖️ Đúng/Sai · 📝 Tự luận
                        </span>
                        <span className="font-display font-semibold text-leaf-deep group-hover:translate-x-0.5 transition">
                          Học bài →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* FOOTER BẢN QUYỀN TRƯỜNG THPT PHỤC HÒA */}
        <footer className="mt-16 border-t border-star/10 pt-8 text-center text-xs text-star-soft">
          <p className="font-display font-bold text-sm text-star">
            Hệ thống Học tập & Ôn luyện Công nghệ Trồng trọt 10 — Trường THPT Phục Hòa
          </p>
          <p className="mt-1 font-mono">
            Huyện Quảng Hòa, Tỉnh Cao Bằng · Biên soạn bởi Tổ KHTN & Công nghệ · Năm học 2026-2027
          </p>
          <p className="mt-2 text-[11px] text-star-soft/60">
            Nền tảng học tập trực tuyến bám sát chương trình GDPT 2018 Bộ sách Kết nối tri thức với cuộc sống.
          </p>
        </footer>
      </div>
    </main>
  );
}
