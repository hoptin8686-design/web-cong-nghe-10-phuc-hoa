import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 6. Thực hành: Xác định độ chua và độ mặn của đất
export const EXTRA_BAI_06: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 6. Thực hành: Xác định độ chua và độ mặn của đất:",
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
        "id": "b06-sa1",
        "q": "Chỉ số EC trong dung dịch đất đo lường đại lượng vật lý nào để phản ánh nồng độ muối khoáng hòa tan?",
        "unit": "Đại lượng",
        "correctAnswers": [
            "Độ dẫn điện",
            "độ dẫn điện",
            "Độ dẫn điện của dung dịch",
            "Dẫn điện"
        ],
        "explain": "EC (Electrical Conductivity) là độ dẫn điện của dung dịch, tỷ lệ thuận với tổng lượng ion muối hòa tan trong đất."
    },
    {
        "id": "b06-sa2",
        "q": "Khoảng giá trị pH tối ưu của đất phù hợp cho đa số các loài cây trồng nông nghiệp sinh trưởng tốt là bao nhiêu?",
        "unit": "Khoảng pH",
        "correctAnswers": [
            "5.5 - 6.5",
            "5.5-6.5",
            "5,5 - 6,5",
            "5.5 đến 6.5",
            "6.0 - 7.0",
            "5.5 - 7.0"
        ],
        "explain": "Khoảng pH từ 5.5 đến 6.5 là khoảng trung tính lý tưởng giúp hầu hết các chất khoáng hòa tan ở dạng rễ dễ hấp thu nhất."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 6. Thực hành: Xác định độ chua và độ mặn của đất.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-06-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 6. Thực hành: Xác định độ chua và độ mặn của đất.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-06-essay2"
    }
]
};

export default EXTRA_BAI_06;
