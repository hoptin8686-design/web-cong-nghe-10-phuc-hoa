import HomeClient from "@/components/HomeClient";
import { CURRICULUM } from "@/data/curriculum";
import { getQuestions } from "@/lib/questions";
import { getExtra } from "@/lib/extras";
import { hasTheory } from "@/lib/theory";
import type { LessonCounts } from "@/lib/types";

export const metadata = {
  title: "Chinh phục Công nghệ 10 — Trồng trọt | THPT Phục Hòa",
  description:
    "Hệ thống tự học và ôn luyện trực tuyến môn Công nghệ 10 Trồng trọt bộ Kết nối tri thức - THPT Phục Hòa, Tỉnh Cao Bằng.",
};

export default function HomePage() {
  const counts: Record<string, LessonCounts> = {};

  for (const topic of CURRICULUM) {
    for (const lesson of topic.lessons) {
      const extra = getExtra(lesson.id);
      counts[lesson.id] = {
        mcq: getQuestions(lesson.id).length,
        tf: extra?.tf?.length ?? 0,
        shortAnswer: extra?.shortAnswer?.length ?? 0,
        essay: extra?.essay?.length ?? 0,
        theory: hasTheory(lesson.id),
      };
    }
  }

  return <HomeClient counts={counts} />;
}
