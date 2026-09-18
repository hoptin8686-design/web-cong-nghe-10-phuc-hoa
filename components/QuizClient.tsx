"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import type { Question } from "@/lib/types";
import { saveLessonProgress, recordQuestionAnswer } from "@/lib/progress";

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

type PreparedQuestion = {
  originalId: string;
  q: string;
  code?: string;
  options: string[];
  correctIndex: number;
  explain: string;
};

export default function QuizClient({
  lessonId,
  lessonTitle,
  questions,
  onBack,
  onGoNext,
}: {
  lessonId: string;
  lessonTitle: string;
  questions: Question[];
  onBack: () => void;
  onGoNext?: () => void;
}) {
  const [deck, setDeck] = useState<PreparedQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [started, setStarted] = useState(false);

  // Chuẩn bị và xáo trộn câu hỏi khi nạp
  const initQuiz = () => {
    if (questions.length === 0) return;
    const prepared: PreparedQuestion[] = questions.map((q) => {
      const originalOptions = q.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === q.answer,
      }));
      const shuffled = shuffleArray(originalOptions);
      const correctIndex = shuffled.findIndex((o) => o.isCorrect);

      return {
        originalId: q.id,
        q: q.q,
        code: q.code,
        options: shuffled.map((o) => o.text),
        correctIndex,
        explain: q.explain,
      };
    });

    setDeck(shuffleArray(prepared));
    setCurrentIndex(0);
    setPicked(null);
    setCorrectCount(0);
    setIsDone(false);
    setStarted(true);
  };

  useEffect(() => {
    initQuiz();
  }, [questions]);

  if (deck.length === 0) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="text-star-soft">Chưa có câu hỏi trắc nghiệm cho bài này.</p>
        <button
          onClick={onBack}
          className="mt-4 rounded-full bg-void-card px-4 py-2 text-sm text-star border border-star/20"
        >
          ← Quay lại
        </button>
      </div>
    );
  }

  const currentQ = deck[currentIndex];
  const total = deck.length;
  const progressPercent = Math.round(((currentIndex + (isDone ? 1 : 0)) / total) * 100);

  const handleSelectOption = (index: number) => {
    if (picked !== null || isDone) return;
    setPicked(index);

    const isCorrect = index === currentQ.correctIndex;
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }
    recordQuestionAnswer(lessonId, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setPicked(null);
    } else {
      setIsDone(true);
      const finalScore = Math.round(((correctCount + (picked === currentQ.correctIndex ? 0 : 0)) / total) * 100);
      saveLessonProgress(lessonId, finalScore);
      if (finalScore >= 80) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    }
  };

  const percentScore = Math.round((correctCount / total) * 100);

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      {/* Header thanh tiến trình */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-medium text-star-soft transition hover:text-sea-deep"
        >
          <span>← Quay lại</span>
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-leaf">
            Câu {currentIndex + 1}/{total}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-void-light">
        <div
          className="h-full bg-gradient-to-r from-leaf to-sea-deep transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {!isDone ? (
        <div className="rounded-2xl border border-void-light bg-void-card p-6 shadow-card">
          {/* Đề câu hỏi */}
          <h2 className="text-lg font-bold leading-relaxed text-star">
            {currentQ.q}
          </h2>

          {/* Khối mã code nếu có */}
          {currentQ.code && (
            <pre className="my-4 overflow-x-auto rounded-xl bg-void p-4 font-mono text-sm text-star-soft border border-void-light">
              <code>{currentQ.code}</code>
            </pre>
          )}

          {/* Các lựa chọn đáp án */}
          <div className="mt-6 space-y-3">
            {currentQ.options.map((opt, idx) => {
              const letter = ["A", "B", "C", "D"][idx];
              const isSelected = picked === idx;
              const isCorrectAnswer = idx === currentQ.correctIndex;
              const hasAnswered = picked !== null;

              let btnStyle = "border-void-light bg-void/50 text-star hover:border-leaf/50";
              let badgeStyle = "bg-void-light text-star-soft";

              if (hasAnswered) {
                if (isCorrectAnswer) {
                  btnStyle = "border-leaf bg-leaf/10 text-leaf-deep font-medium";
                  badgeStyle = "bg-leaf text-void font-bold";
                } else if (isSelected) {
                  btnStyle = "border-berry bg-berry/10 text-berry font-medium";
                  badgeStyle = "bg-berry text-star font-bold";
                } else {
                  btnStyle = "border-void-light/40 opacity-50 text-star-soft";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`flex w-full items-center gap-3.5 rounded-xl border p-4 text-left text-sm transition-all duration-150 ${btnStyle}`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs ${badgeStyle}`}
                  >
                    {letter}
                  </span>
                  <span className="flex-1 leading-relaxed">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Khối Giải thích sau khi chọn */}
          {picked !== null && (
            <div className="mt-6 animate-pop-in rounded-xl border border-void-light bg-void/70 p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-base">
                  {picked === currentQ.correctIndex ? "🎉 Chính xác!" : "💡 Giải thích chi tiết:"}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-star-soft">{currentQ.explain}</p>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleNext}
                  className="rounded-xl bg-leaf px-5 py-2.5 text-sm font-semibold text-void shadow-glow-leaf transition hover:opacity-95"
                >
                  {currentIndex < total - 1 ? "Câu tiếp theo →" : "Xem kết quả bài làm →"}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Màn hình tổng kết kết quả */
        <div className="animate-pop-in rounded-2xl border border-void-light bg-void-card p-8 text-center shadow-card">
          <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-leaf/10 border border-leaf/30 text-4xl">
            {percentScore >= 80 ? "🏆" : percentScore >= 50 ? "🌱" : "💪"}
          </div>
          <h2 className="text-2xl font-bold text-star">Hoàn thành bài trắc nghiệm!</h2>
          <p className="mt-1 text-sm text-star-soft">{lessonTitle}</p>

          <div className="my-6 inline-block rounded-2xl bg-void p-5 border border-void-light">
            <div className="text-4xl font-black text-leaf-deep">{percentScore}%</div>
            <p className="mt-1 text-xs text-star-soft">
              Đúng {correctCount}/{total} câu hỏi
            </p>
          </div>

          <p className="mx-auto max-w-sm text-xs text-star-soft">
            {percentScore === 100
              ? "Xuất sắc! Bạn đã nắm vững toàn bộ kiến thức chuyên sâu của bài học."
              : percentScore >= 70
              ? "Làm rất tốt! Bạn đã nắm chắc hầu hết các nội dung kỹ thuật quan trọng."
              : "Hãy xem lại tóm tắt lý thuyết để cải thiện điểm số ở lần làm sau nhé!"}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={initQuiz}
              className="w-full sm:w-auto rounded-xl border border-void-light bg-void-light/50 px-5 py-2.5 text-sm font-semibold text-star transition hover:bg-void-light"
            >
              🔄 Làm lại lần nữa
            </button>
            {onGoNext && (
              <button
                onClick={onGoNext}
                className="w-full sm:w-auto rounded-xl bg-leaf px-6 py-2.5 text-sm font-semibold text-void shadow-glow-leaf transition hover:opacity-95"
              >
                Bài học tiếp theo →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
