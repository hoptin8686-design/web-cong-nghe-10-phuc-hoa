import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 16. Một số sâu hại cây trồng thường gặp và biện pháp phòng trừ
export const EXTRA_BAI_16: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 16. Một số sâu hại cây trồng thường gặp và biện pháp phòng trừ:",
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
        "id": "b16-sa1",
        "q": "Loài sâu hại nguy hiểm bậc nhất trên cây bắp cải và rau họ Thập tự, có khả năng kháng thuốc bảo vệ thực vật hóa học rất nhanh là sâu gì?",
        "unit": "Tên loài sâu",
        "correctAnswers": [
            "Sâu tơ",
            "sâu tơ",
            "Sâu tơ hại bắp cải"
        ],
        "explain": "Sâu tơ (Plutella xylostella) đẻ trứng nhiều, vòng đời ngắn và rất nhanh hình thành tính kháng thuốc hoá học."
    },
    {
        "id": "b16-sa2",
        "q": "Côn trùng chích hút nào là môi giới truyền bệnh virus vàng lùn, lùn xoắn lá gây thiệt hại nặng nề cho cây lúa nước?",
        "unit": "Tên côn trùng",
        "correctAnswers": [
            "Rầy nâu",
            "rầy nâu",
            "Con rầy nâu"
        ],
        "explain": "Rầy nâu (Nilaparvata lugens) vừa chích hút nhựa gây cháy rầy vừa là môi giới truyền virus vàng lùn nguy hiểm trên lúa."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 16. Một số sâu hại cây trồng thường gặp và biện pháp phòng trừ.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-16-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 16. Một số sâu hại cây trồng thường gặp và biện pháp phòng trừ.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-16-essay2"
    }
]
};

export default EXTRA_BAI_16;
