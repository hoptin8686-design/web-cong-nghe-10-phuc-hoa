"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import type { ShortAnswerQuestion } from "@/lib/types";
import { Check, X, RotateCcw, ArrowRight, Award, HelpCircle } from "lucide-react";

export default function ShortAnswerClient({
  lessonTitle,
  questions,
  onBack,
  onGoNext,
}: {
  lessonTitle: string;
  questions: ShortAnswerQuestion[];
  onBack: () => void;
  onGoNext?: () => void;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-star-soft">Chưa có câu hỏi trả lời ngắn cho bài học này.</p>
        <button
          onClick={onBack}
          className="mt-4 rounded-xl border border-star/20 bg-void-card px-4 py-2 font-display text-sm text-star hover:border-leaf/40"
        >
          ← Quay lại
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIdx];
  const userVal = inputs[currentIdx] || "";
  const isChecked = checked[currentIdx] || false;

  const checkCorrect = (val: string, correctList: string[]) => {
    if (!val || !val.trim()) return false;
    const cleanVal = val.trim().toLowerCase().replace(/\s+/g, " ");
    return correctList.some((ans) => {
      const cleanAns = ans.trim().toLowerCase().replace(/\s+/g, " ");
      return cleanVal === cleanAns || cleanVal.includes(cleanAns) || cleanAns.includes(cleanVal);
    });
  };

  const isCurrentCorrect = checkCorrect(userVal, currentQ.correctAnswers);

  const handleCheck = () => {
    if (!userVal.trim()) return;
    setChecked((prev) => ({ ...prev, [currentIdx]: true }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      // Confetti nếu điểm cao
      let correctCount = 0;
      questions.forEach((q, idx) => {
        if (checkCorrect(inputs[idx] || "", q.correctAnswers)) correctCount++;
      });
      if (correctCount >= Math.ceil(questions.length * 0.8)) {
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#0E9F6E", "#0D7C86", "#10B981", "#EFA31D"],
          });
        } catch {}
      }
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setInputs({});
    setChecked({});
    setIsCompleted(false);
  };

  // Màn hình kết quả tổng kết
  if (isCompleted) {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (checkCorrect(inputs[idx] || "", q.correctAnswers)) correctCount++;
    });
    const percent = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="animate-pop-in rounded-3xl border-2 border-leaf/40 bg-void-card p-6 sm:p-8 text-center shadow-card">
          <span className="text-5xl">{percent >= 80 ? "🎉🏆⭐" : percent >= 60 ? "🌱👍" : "💪📖"}</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-star">
            Kết quả Trả lời ngắn: {correctCount} / {questions.length} câu đúng ({percent}%)
          </h2>
          <p className="mt-1 text-sm text-star-soft">
            {percent >= 80
              ? "Xuất sắc! Em đã nắm rất chuẩn các con số và thuật ngữ chuyên ngành!"
              : "Rất tốt! Hãy xem lại chi tiết đáp án đối chiếu từng câu bên dưới:"}
          </p>

          <div className="mt-6 space-y-4 text-left">
            {questions.map((q, idx) => {
              const uVal = inputs[idx] || "(Bỏ trống)";
              const isRight = checkCorrect(uVal, q.correctAnswers);

              return (
                <div
                  key={q.id || idx}
                  className={`rounded-2xl border p-4 text-xs sm:text-sm ${
                    isRight ? "border-leaf/30 bg-leaf/5" : "border-berry/30 bg-berry/5"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono font-bold mb-1">
                    <span className={isRight ? "text-leaf-deep" : "text-berry"}>
                      Câu {idx + 1}: {isRight ? "✓ Đúng" : "✕ Chưa đúng"}
                    </span>
                    {q.unit && <span className="text-star-soft">Đơn vị: {q.unit}</span>}
                  </div>
                  <p className="font-display font-semibold text-star mb-2">{q.q}</p>
                  <p className="text-star-soft">
                    • Em đã trả lời: <strong className={isRight ? "text-leaf-deep" : "text-berry"}>{uVal}</strong>
                  </p>
                  <p className="text-star-soft">
                    • Đáp án chấp nhận: <strong className="text-star">{q.correctAnswers.join(" / ")}</strong>
                  </p>
                  <p className="mt-1.5 pt-1.5 border-t border-star/10 text-star-soft leading-relaxed">
                    💡 <strong>Giải thích:</strong> {q.explain}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleReset}
              className="rounded-full bg-leaf px-6 py-2.5 font-display text-xs sm:text-sm font-extrabold text-void hover:opacity-90 transition cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Luyện tập lại</span>
            </button>
            <button
              onClick={onBack}
              className="rounded-full border border-star/20 bg-void px-6 py-2.5 font-display text-xs sm:text-sm text-star hover:border-leaf/40 transition cursor-pointer"
            >
              Quay lại bài học
            </button>
            {onGoNext && (
              <button
                onClick={onGoNext}
                className="rounded-full bg-gradient-to-r from-leaf to-sea px-6 py-2.5 font-display text-xs sm:text-sm font-extrabold text-void shadow-card hover:opacity-95 transition cursor-pointer flex items-center gap-1.5"
              >
                <span>Chuyển phần tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Màn hình trả lời từng câu hỏi
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      {/* Header thanh điều hướng */}
      <div className="flex items-center justify-between border-b border-star/15 pb-4">
        <button
          onClick={onBack}
          className="font-mono text-xs text-star-soft hover:text-star transition cursor-pointer"
        >
          ← Menu bài học
        </button>
        <span className="rounded-full bg-coral/15 px-3 py-1 font-mono text-xs font-bold text-coral-deep">
          ✍️ Trả lời ngắn: Câu {currentIdx + 1} / {questions.length}
        </span>
      </div>

      {/* Thẻ câu hỏi */}
      <div className="mt-6 rounded-3xl border border-star/15 bg-void-card p-6 sm:p-8 shadow-card">
        <div className="flex items-center justify-between text-xs text-star-soft">
          <span className="font-mono font-bold text-coral-deep">
            Câu {currentIdx + 1}
          </span>
          {currentQ.unit && (
            <span className="rounded-full bg-void px-3 py-1 font-mono text-xs text-star-soft border border-star/15">
              Đơn vị: <strong>{currentQ.unit}</strong>
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display text-base sm:text-lg font-bold text-star leading-relaxed">
          {currentQ.q}
        </h3>

        {/* Khung nhập đáp án */}
        <div className="mt-6">
          <label className="block font-mono text-xs text-star-soft mb-2">
            Nhập câu trả lời ngắn / con số / thuật ngữ của em:
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              type="text"
              value={userVal}
              onChange={(e) => setInputs((prev) => ({ ...prev, [currentIdx]: e.target.value }))}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !isChecked && userVal.trim()) {
                  handleCheck();
                }
              }}
              disabled={isChecked}
              placeholder={currentQ.unit ? `Ví dụ: nhập số hoặc từ (${currentQ.unit})...` : "Nhập câu trả lời..."}
              className={`flex-1 rounded-2xl border p-4 font-mono text-base text-star placeholder-star-soft/40 focus:outline-none transition ${
                isChecked
                  ? isCurrentCorrect
                    ? "border-leaf bg-leaf/10 text-leaf-deep font-bold"
                    : "border-berry bg-berry/10 text-berry font-bold"
                  : "border-star/20 bg-void/50 focus:border-coral"
              }`}
            />

            {!isChecked ? (
              <button
                onClick={handleCheck}
                disabled={!userVal.trim()}
                className={`rounded-2xl px-6 py-4 font-display text-sm font-bold text-void transition ${
                  userVal.trim()
                    ? "bg-coral text-void shadow-card hover:opacity-95 cursor-pointer font-extrabold"
                    : "bg-void-card border border-star/20 text-star-soft/50 cursor-not-allowed"
                }`}
              >
                Kiểm tra đáp án
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="rounded-2xl bg-gradient-to-r from-leaf to-sea px-6 py-4 font-display text-sm font-extrabold text-void shadow-card hover:opacity-95 transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>{currentIdx < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Lời giải thích khi đã bấm kiểm tra */}
        {isChecked && (
          <div
            className={`mt-6 animate-pop-in rounded-2xl border p-5 text-xs sm:text-sm leading-relaxed ${
              isCurrentCorrect ? "border-leaf/30 bg-leaf/10" : "border-berry/30 bg-berry/10"
            }`}
          >
            <div className="flex items-center gap-2 font-mono font-bold mb-1.5">
              {isCurrentCorrect ? (
                <>
                  <Check className="w-4 h-4 text-leaf-deep" />
                  <span className="text-leaf-deep">Chính xác tuyệt đối!</span>
                </>
              ) : (
                <>
                  <X className="w-4 h-4 text-berry" />
                  <span className="text-berry">Chưa chính xác!</span>
                </>
              )}
            </div>

            <p className="text-star-soft">
              🎯 <strong>Đáp án được chấp nhận:</strong>{" "}
              <span className="text-star font-bold underline">{currentQ.correctAnswers.join(" / ")}</span>
            </p>
            <p className="text-star-soft mt-2">
              💡 <strong>Giải thích chi tiết:</strong> {currentQ.explain}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
