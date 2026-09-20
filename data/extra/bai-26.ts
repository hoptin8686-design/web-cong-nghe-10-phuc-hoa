import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 26. Sự cần thiết phải bảo vệ môi trường trong trồng trọt
export const EXTRA_BAI_26: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 26. Sự cần thiết phải bảo vệ môi trường trong trồng trọt:",
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
        "id": "b26-sa1",
        "q": "Sau khi phun thuốc trừ sâu bệnh hoá học, người nông dân cần thu gom bao bì, chai lọ rỗng bỏ vào đâu để bảo vệ môi trường?",
        "unit": "Nơi chứa",
        "correctAnswers": [
            "Bể chứa bao bì",
            "bể chứa rác nguy hại",
            "Hố rác chuyên dụng",
            "Thùng rác",
            "Bể thu gom"
        ],
        "explain": "Vỏ bao thuốc BVTV là chất thải độc hại nguy hiểm, phải bỏ vào bể chứa xi măng có nắp đậy để tiêu hủy theo quy định."
    },
    {
        "id": "b26-sa2",
        "q": "Bón thừa quá mức loại phân hoá học nào sẽ dẫn đến sự tích lũy chất nitrat (NO₃⁻) độc hại trong mô lá rau xanh?",
        "unit": "Loại phân",
        "correctAnswers": [
            "Phân đạm",
            "phân đạm",
            "Đạm",
            "Phân urê",
            "Phân đạm hoá học"
        ],
        "explain": "Dư thừa đạm làm cây tích lũy nitrat không chuyển hóa hết, gây hại trực tiếp đến sức khỏe người tiêu dùng khi ăn phải."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 26. Sự cần thiết phải bảo vệ môi trường trong trồng trọt.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-26-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 26. Sự cần thiết phải bảo vệ môi trường trong trồng trọt.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-26-essay2"
    }
]
};

export default EXTRA_BAI_26;
