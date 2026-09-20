"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { MOCK_EXAMS, type MockExam } from "@/data/mockExams";

export default function OnTapClient() {
  const [selectedExam, setSelectedExam] = useState<MockExam | null>(null);
  
  // Trạng thái câu trả lời của thí sinh
  const [answers, setAnswers] = useState<Record<number, number>>({}); // Phần I: index -> optionIndex
  const [tfAnswers, setTfAnswers] = useState<Record<string, boolean>>({}); // Phần II: `${qIdx}-${sIdx}` -> boolean
  const [essayInputs, setEssayInputs] = useState<Record<number, string>>({}); // Phần III: index -> text
  const [showEssayAnswers, setShowEssayAnswers] = useState<Record<number, boolean>>({}); // Toggle xem đáp án
  
  const [activeTab, setActiveTab] = useState<"all" | "part1" | "part2" | "part3">("all");
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(45 * 60);

  // Đếm ngược thời gian khi đang làm bài
  useEffect(() => {
    if (!selectedExam || submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedExam, submitted]);

  const handleStartExam = (exam: MockExam) => {
    setSelectedExam(exam);
    setAnswers({});
    setTfAnswers({});
    setEssayInputs({});
    setShowEssayAnswers({});
    setSubmitted(false);
    setActiveTab("all");
    setTimeLeft(exam.durationMinutes * 60);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectMCQ = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSelectTF = (qIdx: number, sIdx: number, val: boolean) => {
    if (submitted) return;
    const key = `${qIdx}-${sIdx}`;
    setTfAnswers((prev) => ({ ...prev, [key]: val }));
  };

  const handleEssayChange = (qIdx: number, val: string) => {
    setEssayInputs((prev) => ({ ...prev, [qIdx]: val }));
  };

  const toggleEssayAnswer = (qIdx: number) => {
    setShowEssayAnswers((prev) => ({ ...prev, [qIdx]: !prev[qIdx] }));
  };

  // Tính điểm theo đúng chuẩn ma trận Bộ GD&ĐT
  const calculateScores = () => {
    if (!selectedExam) return { scoreP1: 0, scoreP2: 0, totalScore: 0, p1Correct: 0, p2Details: [] };

    // Phần I: 24 câu trắc nghiệm nhiều lựa chọn × 0.25 điểm = 6.0 điểm
    let p1Correct = 0;
    selectedExam.questions.forEach((q, i) => {
      if (answers[i] === q.answer) p1Correct++;
    });
    const scoreP1 = Number((p1Correct * 0.25).toFixed(2));

    // Phần II: 4 câu đúng / sai (chuẩn Bộ: 1 ý = 0.1đ; 2 ý = 0.25đ; 3 ý = 0.5đ; 4 ý = 1.0đ)
    const TF_POINTS_SCALE = [0, 0.1, 0.25, 0.5, 1.0];
    let scoreP2 = 0;
    const p2Details: { correctCount: number; points: number }[] = [];

    (selectedExam.tfQuestions || []).forEach((q, qIdx) => {
      let count = 0;
      q.statements.forEach((st, sIdx) => {
        const key = `${qIdx}-${sIdx}`;
        if (tfAnswers[key] === st.answer) {
          count++;
        }
      });
      const pts = TF_POINTS_SCALE[count] || 0;
      scoreP2 += pts;
      p2Details.push({ correctCount: count, points: pts });
    });

    scoreP2 = Number(scoreP2.toFixed(2));
    const totalScore = Number((scoreP1 + scoreP2).toFixed(2));

    return { scoreP1, scoreP2, totalScore, p1Correct, p2Details };
  };

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const { totalScore } = calculateScores();
    if (totalScore >= 8.0) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#0E9F6E", "#0D7C86", "#10B981", "#EFA31D"],
        });
      } catch {}
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // MÀN HÌNH 1: DANH SÁCH CHỌN ĐỀ ÔN TẬP
  if (!selectedExam) {
    return (
      <main className="min-h-screen px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-star/20 bg-void-card px-4 py-1.5 font-mono text-xs text-star hover:border-leaf/40 transition"
            >
              ← Quay lại trang chủ
            </Link>
            
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-leaf/15 px-4 py-1 font-mono text-xs font-bold text-leaf-deep">
              <span>🌾</span> Cấu trúc mới nhất GDPT 2018
            </div>

            <h1 className="mt-3 font-display text-2xl sm:text-4xl font-extrabold text-star">
              🎯 Ôn tập & Kiểm tra Định kì — Công nghệ Trồng trọt 10
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-star-soft leading-relaxed">
              Bộ đề kiểm tra chuẩn cấu trúc Bộ GD&ĐT gồm <strong>24 câu Trắc nghiệm nhiều lựa chọn</strong> (Phần I), <strong>4 câu Lựa chọn Đúng/Sai</strong> (Phần II) và <strong>4 câu Vận dụng thực tiễn</strong> (Phần III).
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {MOCK_EXAMS.map((exam) => {
              const mcqCount = exam.questions.length;
              const tfCount = exam.tfQuestions?.length || 0;
              const essayCount = exam.essayQuestions?.length || 0;

              return (
                <div
                  key={exam.id}
                  className="flex flex-col gap-6 rounded-3xl border-2 border-star/15 bg-void-card p-6 sm:p-8 shadow-card transition hover:border-leaf/60"
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full bg-leaf/20 px-3 py-1 font-mono text-xs font-bold text-leaf-deep">
                      {exam.badge || "Đề chuẩn Bộ GD&ĐT"}
                    </span>
                    <span className="rounded-full bg-sea/15 px-3 py-1 font-mono text-xs font-bold text-sea-deep">
                      ⏱️ {exam.durationMinutes} phút làm bài
                    </span>
                    <span className="rounded-full bg-coral/15 px-3 py-1 font-mono text-xs font-bold text-coral-deep">
                      💯 Thang điểm 10 chuẩn
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-star">
                      {exam.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-star-soft leading-relaxed">
                      {exam.subtitle}
                    </p>
                  </div>

                  {/* Thống kê 3 phần */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-star/10 bg-void/60 p-3.5 text-center">
                      <span className="text-xl">📝</span>
                      <p className="mt-1 font-display text-sm font-bold text-star">Phần I: Nhiều lựa chọn</p>
                      <p className="font-mono text-xs text-leaf-deep font-semibold">{mcqCount} câu (6,0 điểm)</p>
                    </div>
                    <div className="rounded-2xl border border-star/10 bg-void/60 p-3.5 text-center">
                      <span className="text-xl">⚖️</span>
                      <p className="mt-1 font-display text-sm font-bold text-star">Phần II: Đúng / Sai</p>
                      <p className="font-mono text-xs text-sea-deep font-semibold">{tfCount} câu · 16 ý (4,0 điểm)</p>
                    </div>
                    <div className="rounded-2xl border border-star/10 bg-void/60 p-3.5 text-center">
                      <span className="text-xl">💡</span>
                      <p className="mt-1 font-display text-sm font-bold text-star">Phần III: Vận dụng thực tế</p>
                      <p className="font-mono text-xs text-coral-deep font-semibold">{essayCount} bài toán tình huống</p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => handleStartExam(exam)}
                      className="w-full sm:w-auto rounded-full bg-gradient-to-r from-leaf via-sea to-coral px-8 py-3.5 font-display text-base font-extrabold text-white shadow-card hover:shadow-glow-leaf transition hover:-translate-y-0.5 cursor-pointer"
                    >
                      Bắt đầu làm bài ngay →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  // MÀN HÌNH 2: ĐANG LÀM BÀI HOẶC ĐÃ NỘP BÀI
  const { scoreP1, scoreP2, totalScore, p1Correct, p2Details } = calculateScores();
  const mcqQuestions = selectedExam.questions;
  const tfQuestions = selectedExam.tfQuestions || [];
  const essayQuestions = selectedExam.essayQuestions || [];

  // Đếm số câu đã làm
  const mcqDone = Object.keys(answers).length;
  let tfDone = 0;
  tfQuestions.forEach((q, qIdx) => {
    let qDone = true;
    q.statements.forEach((_, sIdx) => {
      if (tfAnswers[`${qIdx}-${sIdx}`] === undefined) qDone = false;
    });
    if (qDone) tfDone++;
  });
  const essayDone = Object.values(essayInputs).filter((t) => t.trim().length > 0).length;

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* THANH TRẠNG THÁI CỐ ĐỊNH PHÒNG THI */}
        <div className="sticky top-3 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-star/20 bg-void-card/95 p-4 backdrop-blur shadow-card">
          <div>
            <button
              onClick={() => setSelectedExam(null)}
              className="font-mono text-xs text-star-soft hover:text-star transition cursor-pointer"
            >
              ← Thoát & Chọn đề khác
            </button>
            <p className="mt-0.5 font-display text-sm sm:text-base font-bold text-star truncate max-w-[240px] sm:max-w-md">
              {selectedExam.title}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {!submitted ? (
              <span className="flex items-center gap-1.5 rounded-full border border-coral/40 bg-coral/10 px-4 py-1.5 font-mono text-sm sm:text-base font-bold text-coral">
                ⏱️ {formatTime(timeLeft)}
              </span>
            ) : (
              <span className="rounded-full bg-leaf/20 px-4 py-1.5 font-mono text-base font-extrabold text-leaf-deep">
                ⭐ {totalScore} / 10 điểm
              </span>
            )}

            {!submitted && (
              <button
                onClick={handleSubmit}
                className="rounded-full bg-gradient-to-r from-leaf to-sea px-5 py-2 font-display text-xs sm:text-sm font-extrabold text-void shadow-card hover:opacity-95 transition cursor-pointer"
              >
                Nộp bài →
              </button>
            )}
          </div>
        </div>

        {/* TỔNG KẾT ĐIỂM SỐ KHI ĐÃ NỘP BÀI */}
        {submitted && (
          <div className="mt-6 animate-pop-in rounded-3xl border-2 border-leaf/40 bg-void-card p-6 sm:p-8 text-center shadow-card">
            <span className="text-5xl">{totalScore >= 8.0 ? "🎉🏆⭐" : totalScore >= 6.5 ? "🌱👍" : "💪📖"}</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-star">
              Kết quả thi: {totalScore} / 10 điểm
            </h2>
            <p className="mt-1 font-mono text-sm text-leaf-deep font-semibold">
              {totalScore >= 9.0
                ? "Xuất sắc! Nắm rất vững kiến thức Công nghệ Trồng trọt 10!"
                : totalScore >= 8.0
                ? "Giỏi! Khả năng vận dụng kiến thức nông nghiệp rất tốt!"
                : totalScore >= 6.5
                ? "Khá! Cần củng cố thêm một số nội dung đất & phân bón."
                : "Cố gắng lên! Hãy xem lại chi tiết lời giải thích từng câu bên dưới."}
            </p>

            <div className="mx-auto mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-star/10 bg-void/50 p-4">
                <p className="text-xs text-star-soft">Phần I (Nhiều lựa chọn)</p>
                <p className="mt-1 font-display text-xl font-bold text-leaf-deep">{scoreP1} / 6.0 đ</p>
                <p className="text-[11px] text-star-soft">Đúng {p1Correct} / {mcqQuestions.length} câu</p>
              </div>
              <div className="rounded-2xl border border-star/10 bg-void/50 p-4">
                <p className="text-xs text-star-soft">Phần II (Đúng / Sai)</p>
                <p className="mt-1 font-display text-xl font-bold text-sea-deep">{scoreP2} / 4.0 đ</p>
                <p className="text-[11px] text-star-soft">Chuẩn điểm QĐ 764 Bộ GD</p>
              </div>
              <div className="rounded-2xl border border-star/10 bg-void/50 p-4">
                <p className="text-xs text-star-soft">Phần III (Vận dụng)</p>
                <p className="mt-1 font-display text-xl font-bold text-coral-deep">4 Tình huống</p>
                <p className="text-[11px] text-star-soft">Đối chiếu theo Rubric chấm</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => handleStartExam(selectedExam)}
                className="rounded-full bg-leaf px-6 py-2.5 font-display text-xs sm:text-sm font-extrabold text-void hover:opacity-90 transition cursor-pointer"
              >
                🔄 Làm lại đề này
              </button>
              <button
                onClick={() => setSelectedExam(null)}
                className="rounded-full border border-star/20 bg-void px-6 py-2.5 font-display text-xs sm:text-sm text-star hover:border-leaf/40 transition cursor-pointer"
              >
                Quay lại danh sách đề
              </button>
            </div>
          </div>
        )}

        {/* BẢNG ĐIỀU HƯỚNG CÁC PHẦN THI (TABS) */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-star/15 pb-4">
          <button
            onClick={() => setActiveTab("all")}
            className={`rounded-xl px-4 py-2 font-display text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === "all"
                ? "bg-leaf text-void shadow-card"
                : "border border-star/15 bg-void-card text-star hover:border-leaf/40"
            }`}
          >
            Tất cả các phần
          </button>
          <button
            onClick={() => setActiveTab("part1")}
            className={`rounded-xl px-4 py-2 font-display text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === "part1"
                ? "bg-leaf text-void shadow-card"
                : "border border-star/15 bg-void-card text-star hover:border-leaf/40"
            }`}
          >
            Phần I: Nhiều lựa chọn ({mcqDone}/{mcqQuestions.length})
          </button>
          <button
            onClick={() => setActiveTab("part2")}
            className={`rounded-xl px-4 py-2 font-display text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === "part2"
                ? "bg-leaf text-void shadow-card"
                : "border border-star/15 bg-void-card text-star hover:border-leaf/40"
            }`}
          >
            Phần II: Đúng / Sai ({tfDone}/{tfQuestions.length})
          </button>
          <button
            onClick={() => setActiveTab("part3")}
            className={`rounded-xl px-4 py-2 font-display text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === "part3"
                ? "bg-leaf text-void shadow-card"
                : "border border-star/15 bg-void-card text-star hover:border-leaf/40"
            }`}
          >
            Phần III: Vận dụng ({essayDone}/{essayQuestions.length})
          </button>
        </div>

        {/* ======================================================== */}
        {/* PHẦN I: 24 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN */}
        {/* ======================================================== */}
        {(activeTab === "all" || activeTab === "part1") && (
          <section className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-leaf/30 pb-3">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-leaf-deep">
                  Phần I: Câu hỏi trắc nghiệm nhiều lựa chọn
                </span>
                <h2 className="font-display text-lg sm:text-xl font-bold text-star">
                  Gồm 24 câu hỏi (Mỗi câu chọn đúng được 0,25 điểm · Tối đa 6,0 điểm)
                </h2>
              </div>
              <span className="rounded-full bg-leaf/15 px-3 py-1 font-mono text-xs text-leaf-deep font-semibold">
                Đã trả lời: {mcqDone} / {mcqQuestions.length}
              </span>
            </div>

            <div className="mt-6 space-y-6">
              {mcqQuestions.map((q, qIdx) => {
                const chosen = answers[qIdx];
                const isRight = chosen === q.answer;

                return (
                  <div
                    key={q.id || qIdx}
                    id={`mcq-${qIdx + 1}`}
                    className="rounded-3xl border border-star/15 bg-void-card p-5 sm:p-7 shadow-card transition"
                  >
                    <div className="flex items-center justify-between text-xs text-star-soft">
                      <span className="font-mono font-bold text-leaf-deep">
                        Câu {qIdx + 1} / 24
                      </span>
                      {submitted && (
                        <span
                          className={`font-mono font-bold px-2.5 py-0.5 rounded-full ${
                            isRight
                              ? "bg-leaf/20 text-leaf-deep"
                              : "bg-berry/20 text-berry"
                          }`}
                        >
                          {isRight ? "✓ Đúng (+0,25đ)" : "✕ Chưa đúng (0đ)"}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 font-display text-base sm:text-lg font-bold text-star leading-snug">
                      {q.q}
                    </p>

                    <div className="mt-4 space-y-2.5">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = chosen === oIdx;
                        let style =
                          "border-star/15 bg-void/50 text-star hover:border-leaf/40";

                        if (submitted) {
                          if (oIdx === q.answer) {
                            style = "border-leaf bg-leaf/20 text-leaf-deep font-semibold ring-1 ring-leaf";
                          } else if (isSelected) {
                            style = "border-berry bg-berry/20 text-berry";
                          } else {
                            style = "border-star/5 bg-void/20 text-star-soft/60";
                          }
                        } else if (isSelected) {
                          style = "border-leaf bg-leaf/20 text-leaf-deep font-semibold ring-1 ring-leaf";
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectMCQ(qIdx, oIdx)}
                            disabled={submitted}
                            className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left text-sm transition ${style} ${
                              !submitted ? "cursor-pointer" : "cursor-default"
                            }`}
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 font-mono text-xs font-bold">
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span className="flex-1 pt-0.5 leading-relaxed">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {submitted && (
                      <div className="mt-4 rounded-2xl border border-leaf/20 bg-leaf/5 p-4 text-xs sm:text-sm leading-relaxed text-star-soft">
                        <span className="font-bold text-leaf-deep">💡 Lời giải thích khoa học:</span> {q.explain}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* PHẦN II: 4 CÂU TRẮC NGHIỆM ĐÚNG / SAI (16 MỆNH ĐỀ) */}
        {/* ======================================================== */}
        {(activeTab === "all" || activeTab === "part2") && (
          <section className="mt-12">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sea/30 pb-3">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-sea-deep">
                  Phần II: Câu hỏi trắc nghiệm Đúng / Sai
                </span>
                <h2 className="font-display text-lg sm:text-xl font-bold text-star">
                  Gồm 4 câu hỏi (Mỗi câu có 4 ý a, b, c, d · Điểm chuẩn Bộ: 1 ý=0.1đ; 2 ý=0.25đ; 3 ý=0.5đ; 4 ý=1.0đ · Tối đa 4,0 điểm)
                </h2>
              </div>
              <span className="rounded-full bg-sea/15 px-3 py-1 font-mono text-xs text-sea-deep font-semibold">
                Đã hoàn thành: {tfDone} / {tfQuestions.length} câu
              </span>
            </div>

            <div className="mt-6 space-y-8">
              {tfQuestions.map((q, qIdx) => {
                const detail = p2Details[qIdx];

                return (
                  <div
                    key={q.id || qIdx}
                    id={`tf-${qIdx + 1}`}
                    className="rounded-3xl border border-star/15 bg-void-card p-5 sm:p-7 shadow-card"
                  >
                    <div className="flex items-center justify-between text-xs text-star-soft">
                      <span className="font-mono font-bold text-sea-deep">
                        Câu {qIdx + 1} / 4 (Đúng / Sai)
                      </span>
                      {submitted && detail && (
                        <span className="font-mono font-bold text-sea-deep bg-sea/15 px-3 py-1 rounded-full">
                          Đúng {detail.correctCount}/4 ý (+{detail.points} điểm)
                        </span>
                      )}
                    </div>

                    {/* Ngữ cảnh thực tiễn của câu hỏi */}
                    <div className="mt-3 rounded-2xl border border-sea/25 bg-sea/5 p-4 text-sm sm:text-base leading-relaxed text-star font-medium">
                      <strong className="text-sea-deep">Ngữ cảnh:</strong> {q.context}
                    </div>

                    {/* Danh sách 4 mệnh đề */}
                    <div className="mt-5 space-y-4">
                      {q.statements.map((st, sIdx) => {
                        const key = `${qIdx}-${sIdx}`;
                        const userVal = tfAnswers[key];
                        const isCorrect = userVal === st.answer;
                        const charLabel = ["a", "b", "c", "d"][sIdx];

                        return (
                          <div
                            key={sIdx}
                            className="rounded-2xl border border-star/10 bg-void/40 p-4 transition"
                          >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <div className="flex items-start gap-2.5 flex-1">
                                <span className="font-mono font-bold text-sea-deep text-sm">
                                  {charLabel})
                                </span>
                                <p className="text-sm leading-relaxed text-star">
                                  {st.text}
                                </p>
                              </div>

                              {/* 2 nút chọn Đúng / Sai */}
                              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                                <button
                                  onClick={() => handleSelectTF(qIdx, sIdx, true)}
                                  disabled={submitted}
                                  className={`rounded-xl px-4 py-1.5 font-mono text-xs font-bold transition ${
                                    userVal === true
                                      ? "bg-leaf text-void ring-2 ring-leaf"
                                      : "border border-star/20 bg-void/50 text-star hover:border-leaf/40"
                                  } ${!submitted ? "cursor-pointer" : "cursor-default"}`}
                                >
                                  Đúng
                                </button>
                                <button
                                  onClick={() => handleSelectTF(qIdx, sIdx, false)}
                                  disabled={submitted}
                                  className={`rounded-xl px-4 py-1.5 font-mono text-xs font-bold transition ${
                                    userVal === false
                                      ? "bg-berry text-white ring-2 ring-berry"
                                      : "border border-star/20 bg-void/50 text-star hover:border-berry/40"
                                  } ${!submitted ? "cursor-pointer" : "cursor-default"}`}
                                >
                                  Sai
                                </button>
                              </div>
                            </div>

                            {/* Giải thích sau khi nộp */}
                            {submitted && (
                              <div className="mt-3 pt-3 border-t border-star/10 flex flex-col gap-1 text-xs">
                                <div className="flex items-center gap-2 font-mono font-bold">
                                  <span className={isCorrect ? "text-leaf-deep" : "text-berry"}>
                                    {isCorrect ? "✓ Chính xác" : "✕ Chưa đúng"}
                                  </span>
                                  <span className="text-star-soft">
                                    · Đáp án chuẩn:{" "}
                                    <strong className="text-star">
                                      {st.answer ? "ĐÚNG" : "SAI"}
                                    </strong>
                                  </span>
                                </div>
                                <p className="text-star-soft leading-relaxed">
                                  {st.explain}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* PHẦN III: 4 CÂU HỎI VẬN DỤNG THỰC TIỄN */}
        {/* ======================================================== */}
        {(activeTab === "all" || activeTab === "part3") && (
          <section className="mt-12">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-coral/30 pb-3">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-coral-deep">
                  Phần III: Câu hỏi Vận dụng & Tình huống thực tiễn
                </span>
                <h2 className="font-display text-lg sm:text-xl font-bold text-star">
                  Gồm 4 bài toán tình huống thực hành kỹ thuật nông nghiệp địa phương
                </h2>
              </div>
              <span className="rounded-full bg-coral/15 px-3 py-1 font-mono text-xs text-coral-deep font-semibold">
                Đã ghi câu trả lời: {essayDone} / {essayQuestions.length}
              </span>
            </div>

            <div className="mt-6 space-y-8">
              {essayQuestions.map((q, qIdx) => {
                const isOpen = showEssayAnswers[qIdx] || submitted;
                const userInput = essayInputs[qIdx] || "";

                return (
                  <div
                    key={q.id || qIdx}
                    id={`essay-${qIdx + 1}`}
                    className="rounded-3xl border border-star/15 bg-void-card p-5 sm:p-7 shadow-card"
                  >
                    <div className="flex items-center justify-between text-xs text-star-soft">
                      <span className="font-mono font-bold text-coral-deep">
                        Tình huống Vận dụng {qIdx + 1} / 4
                      </span>
                      <button
                        onClick={() => toggleEssayAnswer(qIdx)}
                        className="font-mono text-xs font-semibold text-leaf-deep hover:underline cursor-pointer"
                      >
                        {isOpen ? "Ẩn đáp án & Rubric ▲" : "Xem đáp án & Rubric ▼"}
                      </button>
                    </div>

                    <p className="mt-3 font-display text-base sm:text-lg font-bold text-star leading-relaxed whitespace-pre-line">
                      {q.q}
                    </p>

                    {/* Khung để học sinh tự nhập câu trả lời */}
                    <div className="mt-4">
                      <label className="block font-mono text-xs text-star-soft mb-1.5">
                        ✍️ Câu trả lời / Phương án xử lý của em:
                      </label>
                      <textarea
                        value={userInput}
                        onChange={(e) => handleEssayChange(qIdx, e.target.value)}
                        placeholder="Nhập phương án kỹ thuật, các bước thực hiện và cơ sở lý luận khoa học..."
                        rows={4}
                        className="w-full rounded-2xl border border-star/15 bg-void/50 p-4 font-sans text-sm text-star placeholder-star-soft/40 focus:border-coral focus:outline-none transition leading-relaxed"
                      />
                    </div>

                    {/* Hướng dẫn giải / Đáp án đối chiếu */}
                    {isOpen && (
                      <div className="mt-4 rounded-2xl border border-coral/30 bg-coral/5 p-4 sm:p-5 text-sm leading-relaxed text-star">
                        <div className="flex items-center gap-2 font-display font-bold text-coral-deep mb-2">
                          <span>📋</span>
                          <span>Hướng dẫn chấm & Đáp án chuẩn:</span>
                        </div>
                        <div className="whitespace-pre-line text-xs sm:text-sm text-star-soft leading-relaxed font-sans bg-void/40 p-4 rounded-xl border border-star/10">
                          {q.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* NÚT NỘP BÀI CUỐI TRANG KHI ĐANG LÀM */}
        {!submitted && (
          <div className="mt-12 flex flex-col items-center justify-center gap-3 pb-16">
            <button
              onClick={handleSubmit}
              className="rounded-full bg-gradient-to-r from-leaf via-sea to-coral px-10 py-4 font-display text-base sm:text-lg font-extrabold text-white shadow-card hover:shadow-glow-leaf transition hover:-translate-y-1 cursor-pointer"
            >
              Hoàn thành bài thi & Xem kết quả chấm điểm →
            </button>
            <p className="font-mono text-xs text-star-soft">
              Đã làm {mcqDone}/24 câu Phần I · {tfDone}/4 câu Phần II · {essayDone}/4 câu Phần III
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
