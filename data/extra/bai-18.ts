import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 18. Ứng dụng công nghệ vi sinh trong phòng trừ sâu, bệnh hại
export const EXTRA_BAI_18: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 18. Ứng dụng công nghệ vi sinh trong phòng trừ sâu, bệnh hại:",
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
        "id": "b18-sa1",
        "q": "Viết tắt tên loài vi khuẩn sinh học sinh độc tố tinh thể delta-endotoxin diệt sâu non bộ Cánh vảy là gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "Bt",
            "vi khuẩn Bt",
            "Bacillus thuringiensis"
        ],
        "explain": "Chế phẩm Bt (Bacillus thuringiensis) an toàn tuyệt đối cho người và động vật máu nóng, chỉ gây độc cho sâu non trong ruột kiềm."
    },
    {
        "id": "b18-sa2",
        "q": "Chi nấm đối kháng sinh học nào thường được người nông dân tưới vào đất để kiểm soát nấm bệnh thối rễ, lở cổ rễ cây trồng?",
        "unit": "Tên nấm",
        "correctAnswers": [
            "Trichoderma",
            "trichoderma",
            "Nấm Trichoderma"
        ],
        "explain": "Nấm Trichoderma ký sinh và tiết enzym phân hủy sợi nấm bệnh (Fusarium, Rhizoctonia), kích thích bộ rễ phát triển khỏe mạnh."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 18. Ứng dụng công nghệ vi sinh trong phòng trừ sâu, bệnh hại.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-18-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 18. Ứng dụng công nghệ vi sinh trong phòng trừ sâu, bệnh hại.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-18-essay2"
    }
]
};

export default EXTRA_BAI_18;
