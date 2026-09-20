import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 11. Khái niệm và vai trò của giống cây trồng
export const EXTRA_BAI_11: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 11. Khái niệm và vai trò của giống cây trồng:",
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
        "id": "b11-sa1",
        "q": "Khảo nghiệm VCU của một giống cây trồng mới là khảo nghiệm để đánh giá hai yếu tố: Giá trị canh tác và Giá trị gì của giống?",
        "unit": "Yếu tố",
        "correctAnswers": [
            "Giá trị sử dụng",
            "giá trị sử dụng",
            "Sử dụng"
        ],
        "explain": "VCU (Value of Cultivation and Use) là khảo nghiệm bắt buộc nhằm xác định giá trị canh tác và giá trị sử dụng trước khi lưu hành."
    },
    {
        "id": "b11-sa2",
        "q": "Một giống cây trồng tốt cần đáp ứng tính chất nào để các thế hệ cây con sau khi gieo trồng vẫn giữ nguyên đặc tính vốn có?",
        "unit": "Tính chất",
        "correctAnswers": [
            "Tính ổn định",
            "tính ổn định di truyền",
            "Ổn định",
            "Tính đồng nhất và ổn định"
        ],
        "explain": "Tính ổn định di truyền đảm bảo các đặc tính vượt trội không bị phân ly hay thoái hóa qua các chu kỳ gieo trồng tiếp theo."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 11. Khái niệm và vai trò của giống cây trồng.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-11-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 11. Khái niệm và vai trò của giống cây trồng.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-11-essay2"
    }
]
};

export default EXTRA_BAI_11;
