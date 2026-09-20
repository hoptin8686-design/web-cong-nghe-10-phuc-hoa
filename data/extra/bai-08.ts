import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 8. Sử dụng và bảo quản phân bón
export const EXTRA_BAI_08: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 8. Sử dụng và bảo quản phân bón:",
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
        "id": "b08-sa1",
        "q": "Nguyên tắc khoa học trong sử dụng phân bón cho cây trồng gồm 4 chữ 'đúng': Đúng loại, Đúng liều lượng, Đúng phương pháp và Đúng yếu tố nào nữa?",
        "unit": "Yếu tố",
        "correctAnswers": [
            "Đúng thời điểm",
            "đúng thời điểm",
            "Thời điểm",
            "Đúng lúc"
        ],
        "explain": "Nguyên tắc 4 đúng: Đúng loại phân - Đúng liều lượng - Đúng thời điểm cây cần - Đúng phương pháp bón."
    },
    {
        "id": "b08-sa2",
        "q": "Khi bón lót vào đất trước khi gieo hạt hoặc đặt cây con, người ta ưu tiên sử dụng phân chuồng hoai mục và loại phân vô cơ nào chậm tan?",
        "unit": "Loại phân",
        "correctAnswers": [
            "Phân lân",
            "phân lân",
            "Lân",
            "Phân hữu cơ và lân"
        ],
        "explain": "Phân lân tan chậm trong đất, cần thời gian tiếp xúc với keo đất và axit hữu cơ để hòa tan nên rất thích hợp bón lót."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 8. Sử dụng và bảo quản phân bón.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-08-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 8. Sử dụng và bảo quản phân bón.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-08-essay2"
    }
]
};

export default EXTRA_BAI_08;
