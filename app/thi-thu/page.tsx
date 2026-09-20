import { Metadata } from "next";
import OnTapClient from "@/components/OnTapClient";

export const metadata: Metadata = {
  title: "Thi Thử Tốt Nghiệp & Kiểm Tra Định Kì — Công nghệ Trồng trọt 10 | THPT Phục Hòa",
  description:
    "Phòng thi thử trực tuyến chuẩn cấu trúc GDPT 2018 môn Công nghệ 10 Trồng trọt: 24 câu trắc nghiệm nhiều lựa chọn, 4 câu đúng sai, 4 câu trả lời ngắn, bấm giờ 45 phút và chấm điểm tự động.",
};

export default function ThiThuPage() {
  return <OnTapClient />;
}
