import type { Question } from "@/lib/types";

// Ngân hàng câu hỏi Trắc nghiệm 4 lựa chọn: Bài 2. Cây trồng và các yếu tố chính trong trồng trọt
export const QUESTIONS_BAI_02: Question[] = [
  {
    "q": "Nguyên tố dinh dưỡng khoáng nào sau đây thuộc nhóm nguyên tố đa lượng?",
    "options": [
      "Đạm (N), Lân (P), Kali (K)",
      "Sắt (Fe), Kẽm (Zn), Đồng (Cu)",
      "Mangan (Mn), Bo (B), Molipden (Mo)",
      "Clo (Cl), Niken (Ni), Coban (Co)"
    ],
    "answer": 0,
    "explain": "N, P, K là 3 nguyên tố khoáng đa lượng cây trồng cần với số lượng lớn nhất để phát triển thân lá, rễ củ và hoa quả.",
    "id": "bai-02-q1"
  },
  {
    "q": "Cây trồng nào sau đây thuộc nhóm cây ưa bóng, có thể trồng xen dưới tán cây khác?",
    "options": [
      "Ngô (bắp)",
      "Cây gừng, nghệ, phong lan",
      "Mía đường",
      "Cây lúa nước"
    ],
    "answer": 1,
    "explain": "Gừng, nghệ, lan là các cây ưa bóng, có điểm bù ánh sáng thấp, thích hợp trồng dưới tán cây cao.",
    "id": "bai-02-q2"
  },
  {
    "q": "Thời kỳ nào cây trồng thường có nhu cầu nước cao nhất?",
    "options": [
      "Thời kỳ hạt ngủ nghỉ",
      "Thời kỳ đâm chồi, phân cành và làm đòng / ra hoa kết quả",
      "Thời kỳ quả chín hoàn toàn chuẩn bị thu hoạch",
      "Sau khi cây đã hoàn thành chu kỳ sinh trưởng"
    ],
    "answer": 1,
    "explain": "Thời kỳ sinh trưởng sinh dưỡng mạnh (đâm chồi, phân cành) và ra hoa, nuôi quả cây cần nhiều nước nhất để vận chuyển dinh dưỡng.",
    "id": "bai-02-q3"
  },
  {
    "q": "Thiếu đạm (N) biểu hiện rõ nhất trên cây trồng là:",
    "options": [
      "Lá non có màu xanh đậm bất thường",
      "Lá già chuyển sang màu vàng úa, cây còi cọc, sinh trưởng kém",
      "Rễ cây phình to bất thường",
      "Hoa nở sớm và quả chín rộ"
    ],
    "answer": 1,
    "explain": "Đạm tham gia cấu tạo protein, diệp lục. Khi thiếu đạm, diệp lục không hình thành đầy đủ, lá già bị rút đạm nuôi lá non nên vàng úa trước.",
    "id": "bai-02-q4"
  }
];

export default QUESTIONS_BAI_02;
