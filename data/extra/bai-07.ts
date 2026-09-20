import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 7. Giới thiệu về phân bón
export const EXTRA_BAI_07: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 7. Giới thiệu về phân bón:",
      statements: [
        {
                "text": "Nội dung của bài học bám sát chương trình GDPT 2018 môn Công nghệ 10 - Trồng trọt.",
                "answer": true,
                "explain": "Đúng. Kiến thức được biên soạn theo chuẩn chương trình mới."
        },
        {
                "text": "Ứng dụng khoa học kỹ thuật giúp gia tăng hiệu quả kinh tế và độ an toàn của sản phẩm.",
                "answer": true,
                "explain": "Đúng. Kỹ thuật tiến bộ là chìa khóa nâng cao năng suất và chất lượng."
        },
        {
                "text": "Có thể tùy tiện bỏ qua các bước quy trình kỹ thuật mà vẫn đảm bảo năng suất tối đa.",
                "answer": false,
                "explain": "Sai. Quy trình kỹ thuật nông nghiệp đòi hỏi sự tuân thủ nghiêm ngặt từng giai đoạn sinh trưởng."
        },
        {
                "text": "Việc kết hợp bảo vệ môi trường là yêu cầu bắt buộc trong nông nghiệp hiện đại.",
                "answer": true,
                "explain": "Đúng. Nông nghiệp bền vững luôn song hành cùng bảo vệ tài nguyên đất, nước và không khí."
        }
]
    }
  ],
    shortAnswer: [
    {
        "id": "b07-sa1",
        "q": "Phân đạm Urê cung cấp nguyên tố dinh dưỡng đa lượng nào cho cây trồng?",
        "unit": "Tên nguyên tố",
        "correctAnswers": [
            "Nitơ",
            "nitơ",
            "Đạm",
            "đạm",
            "N"
        ],
        "explain": "Phân Urê (CO(NH2)2) cung cấp nguyên tố đạm (Nitơ) thúc đẩy sinh trưởng thân, cành và phát triển lá."
    },
    {
        "id": "b07-sa2",
        "q": "Phân lân có vai trò nổi bật nhất trong việc kích thích sự phát triển của bộ phận nào của cây con?",
        "unit": "Bộ phận cây",
        "correctAnswers": [
            "Bộ rễ",
            "rễ",
            "Bộ rễ của cây",
            "Rễ cây"
        ],
        "explain": "Lân (P) kích thích rễ cây phân nhánh và đâm sâu, đồng thời xúc tiến quá trình phân hóa mầm hoa và đậu quả."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 7. Giới thiệu về phân bón.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-07-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 7. Giới thiệu về phân bón.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-07-essay2"
    }
]
};

export default EXTRA_BAI_07;
