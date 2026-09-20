import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 3. Giới thiệu về đất trồng
export const EXTRA_BAI_03: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 3. Giới thiệu về đất trồng:",
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
        "id": "b03-sa1",
        "q": "Thành phần cơ giới của đất được phân loại dựa trên tỷ lệ phần trăm khối lượng của 3 cấp hạt nào? (Kể tên 3 cấp hạt)",
        "unit": "3 cấp hạt",
        "correctAnswers": [
            "Cát, limon, sét",
            "cát, limon, sét",
            "Cát, bụi, sét",
            "cát, bụi, sét",
            "Cát, limon và sét"
        ],
        "explain": "Thành phần cơ giới chia theo tỷ lệ hạt cát (2 - 0.05 mm), limon/bụi (0.05 - 0.002 mm) và sét (< 0.002 mm)."
    },
    {
        "id": "b03-sa2",
        "q": "Một mẫu đất canh tác có độ pH đo được là 5.0. Mẫu đất này thuộc loại đất chua, đất trung tính hay đất kiềm?",
        "unit": "Tính chất đất",
        "correctAnswers": [
            "Đất chua",
            "chua",
            "Chua"
        ],
        "explain": "Độ pH < 6.5 là đất chua; pH = 5.0 là đất chua nhiều do chứa nhiều ion H+ và Al3+ tự do."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 3. Giới thiệu về đất trồng.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-03-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 3. Giới thiệu về đất trồng.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-03-essay2"
    }
]
};

export default EXTRA_BAI_03;
