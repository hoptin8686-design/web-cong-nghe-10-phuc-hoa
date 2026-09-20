import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 10. Thực hành: Nhận biết một số loại phân bón hoá học
export const EXTRA_BAI_10: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 10. Thực hành: Nhận biết một số loại phân bón hoá học:",
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
        "id": "b10-sa1",
        "q": "Khi đốt hoặc đun nóng phân đạm Urê trên ngọn lửa, sẽ sinh ra chất khí có mùi khai đặc trưng là khí gì?",
        "unit": "Tên khí",
        "correctAnswers": [
            "Khí amoniac",
            "amoniac",
            "NH3",
            "Amoniac",
            "khí NH3"
        ],
        "explain": "Nhiệt phân Urê tạo ra khí amoniac (NH3) có mùi khai nồng đặc trưng, dùng để nhận biết phân đạm."
    },
    {
        "id": "b10-sa2",
        "q": "Phân Kali Clorua thương phẩm phổ biến ở Việt Nam thường có màu sắc đặc trưng nào?",
        "unit": "Màu sắc",
        "correctAnswers": [
            "Màu đỏ",
            "màu đỏ gạch",
            "Đỏ",
            "Màu hồng đỏ",
            "Đỏ gạch"
        ],
        "explain": "Phân kali clorua (KCl) thường có dạng muối hạt màu đỏ gạch hoặc màu hồng do lẫn khoáng oxit sắt tự nhiên."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 10. Thực hành: Nhận biết một số loại phân bón hoá học.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-10-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 10. Thực hành: Nhận biết một số loại phân bón hoá học.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-10-essay2"
    }
]
};

export default EXTRA_BAI_10;
