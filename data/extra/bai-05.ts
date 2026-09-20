import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 5. Giá thể trồng cây
export const EXTRA_BAI_05: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 5. Giá thể trồng cây:",
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
        "id": "b05-sa1",
        "q": "Mụn xơ dừa tự nhiên trước khi được sử dụng làm giá thể gieo trồng cây bắt buộc phải trải qua quá trình ngâm rửa để loại bỏ chất chát nào?",
        "unit": "Chất hóa học",
        "correctAnswers": [
            "Tannin",
            "tannin",
            "Tanin",
            "tanin",
            "Tannin và lignin"
        ],
        "explain": "Chất chát tannin và lignin trong mụn dừa thô gây ức chế hô hấp của rễ non, cần ngâm xả nước vôi sạch trước khi trồng."
    },
    {
        "id": "b05-sa2",
        "q": "Tên loại đá núi lửa nhân tạo siêu nhẹ, màu trắng xốp, thường được phối trộn vào giá thể để tăng độ thoáng khí cho rễ cây là đá gì?",
        "unit": "Tên đá",
        "correctAnswers": [
            "Perlite",
            "perlite",
            "Đá perlite",
            "Đá trân châu",
            "đá trân châu"
        ],
        "explain": "Đá trân châu (Perlite) được nung nở ở nhiệt độ cao, có cấu trúc xốp nhẹ, giữ ẩm và làm tơi xốp giá thể tối ưu."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 5. Giá thể trồng cây.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-05-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 5. Giá thể trồng cây.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-05-essay2"
    }
]
};

export default EXTRA_BAI_05;
