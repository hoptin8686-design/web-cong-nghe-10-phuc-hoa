import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 2. Cây trồng và các yếu tố chính trong trồng trọt
export const EXTRA_BAI_02: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét về ảnh hưởng của các yếu tố ngoại cảnh đối với cây trồng:",
      statements: [
        {
                "text": "Cường độ ánh sáng quá mạnh vượt quá điểm no ánh sáng có thể làm cháy lá và ức chế quang hợp.",
                "answer": true,
                "explain": "Đúng. Ánh sáng quá gắt làm tăng nhiệt độ lá, phân huỷ diệp lục."
        },
        {
                "text": "Cây trồng chỉ hấp thụ nước qua bộ rễ, không thể hấp thụ qua các bộ phận khác như lá.",
                "answer": false,
                "explain": "Sai. Cây còn có khả năng hấp thụ hơi nước và chất dinh dưỡng qua khí khổng ở lá (nhờ đó mới có phương pháp bón phân qua lá)."
        },
        {
                "text": "Nhiệt độ thích hợp giúp các phản ứng enzym sinh hoá trong cây diễn ra thuận lợi nhất.",
                "answer": true,
                "explain": "Đúng. Hoạt tính enzym phụ thuộc chặt chẽ vào khoảng nhiệt độ tối ưu của loài cây."
        },
        {
                "text": "Vi lượng là các nguyên tố cây cần với lượng rất ít nên nếu thiếu hoàn toàn cây vẫn phát triển bình thường.",
                "answer": false,
                "explain": "Sai. Dù cần lượng rất nhỏ (ppm), thiếu vi lượng cây sẽ bị rối loạn trao đổi chất nghiêm trọng, vàng lá, rụng hoa."
        }
]
    }
  ],
  essay: [
    {
        "q": "Tại sao trong sản xuất nông nghiệp người ta thường trồng xen canh cây ưa sáng với cây ưa bóng?",
        "answer": "- Tận dụng tối đa không gian dinh dưỡng và diện tích đất canh tác.\n- Tối ưu hóa hiệu suất hấp thụ năng lượng ánh sáng mặt trời ở các tầng tán khác nhau.\n- Giúp giữ ẩm cho đất, hạn chế xói mòn và cỏ dại phát triển.\n- Đa dạng hoá sản phẩm thu hoạch, tăng hiệu quả kinh tế trên một đơn vị diện tích.",
        "id": "bai-02-essay1"
    },
    {
        "q": "Nêu vai trò chính của 3 nguyên tố đa lượng N, P, K đối với cây trồng.",
        "answer": "1. Đạm (N): Thúc đẩy sinh trưởng thân, cành, lá; tham gia cấu tạo protein, axit nucleic, diệp lục.\n2. Lân (P): Kích thích ra rễ, phân hoá mầm hoa, tăng khả năng đậu quả và giúp cây chống rét, chống hạn.\n3. Kali (K): Tăng cường vận chuyển đường bột, cứng cây chống đổ ngã, tăng chất lượng nông sản (độ ngọt, màu sắc) và nâng cao sức đề kháng sâu bệnh.",
        "id": "bai-02-essay2"
    }
]
};

export default EXTRA_BAI_02;
