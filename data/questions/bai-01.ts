import type { Question } from "@/lib/types";

// Ngân hàng câu hỏi Trắc nghiệm 4 lựa chọn: Bài 1. Giới thiệu về trồng trọt
export const QUESTIONS_BAI_01: Question[] = [
  {
    "q": "Vai trò nào sau đây KHÔNG phải là vai trò trực tiếp của ngành trồng trọt?",
    "options": [
      "Cung cấp lương thực, thực phẩm cho con người",
      "Cung cấp nguyên liệu cho ngành công nghiệp dệt, may, chế biến",
      "Cung cấp năng lượng điện hạt nhân cho quốc gia",
      "Cung cấp thức ăn cho ngành chăn nuôi"
    ],
    "answer": 2,
    "explain": "Trồng trọt cung cấp lương thực, thực phẩm, nguyên liệu công nghiệp và thức ăn chăn nuôi. Năng lượng điện hạt nhân thuộc lĩnh vực công nghiệp nặng/vật lý hạt nhân.",
    "id": "bai-01-q1"
  },
  {
    "q": "Nhóm cây trồng nào sau đây thuộc nhóm cây lương thực chính ở Việt Nam?",
    "options": [
      "Lúa, ngô (bắp), khoai lang, sắn",
      "Cà phê, cao su, hồ tiêu, điều",
      "Cam, bưởi, chuối, xoài",
      "Rau muống, bắp cải, cà chua"
    ],
    "answer": 0,
    "explain": "Lúa, ngô, khoai, sắn là các loại cây cung cấp tinh bột chủ yếu, thuộc nhóm cây lương thực.",
    "id": "bai-01-q2"
  },
  {
    "q": "Xu hướng phát triển của ngành trồng trọt hiện nay ở nước ta và thế giới là gì?",
    "options": [
      "Tăng cường sử dụng tối đa hoá chất bảo vệ thực vật hoá học",
      "Phát triển nông nghiệp công nghệ cao, nông nghiệp hữu cơ và sinh thái bền vững",
      "Chỉ tập trung mở rộng diện tích đất rừng tự nhiên để trồng cây",
      "Dừng áp dụng cơ giới hoá để giảm chi phí đầu tư máy móc"
    ],
    "answer": 1,
    "explain": "Xu hướng hiện đại là ứng dụng công nghệ cao, nông nghiệp thông minh, nông nghiệp hữu cơ nhằm tăng năng suất, bảo vệ môi trường và sức khoẻ con người.",
    "id": "bai-01-q3"
  },
  {
    "q": "Cây chè (trà), cà phê, cao su, mía thuộc nhóm cây trồng nào sau đây?",
    "options": [
      "Cây lương thực",
      "Cây ăn quả",
      "Cây công nghiệp",
      "Cây dược liệu"
    ],
    "answer": 2,
    "explain": "Chè, cà phê, cao su, mía cung cấp nguyên liệu chế biến công nghiệp nên được xếp vào nhóm cây công nghiệp.",
    "id": "bai-01-q4"
  }
];

export default QUESTIONS_BAI_01;
