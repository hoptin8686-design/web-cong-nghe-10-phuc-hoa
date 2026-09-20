import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 28. Thực hành: Sử dụng rơm, rạ để trồng nấm rơm
export const EXTRA_BAI_28: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 28. Thực hành: Sử dụng rơm, rạ để trồng nấm rơm:",
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
        "id": "b28-sa1",
        "q": "Nguồn phế phẩm nông nghiệp sau vụ thu hoạch lúa nước thường được tận dụng làm cơ chất chủ yếu để trồng nấm rơm là gì?",
        "unit": "Tên nguyên liệu",
        "correctAnswers": [
            "Rơm rạ",
            "rơm rạ",
            "Rơm",
            "Rơm lúa"
        ],
        "explain": "Rơm rạ sau khi gặt lúa chứa nhiều xenlulozo là nguồn cơ chất tự nhiên lý tưởng, rẻ tiền để nuôi trồng nấm rơm."
    },
    {
        "id": "b28-sa2",
        "q": "Khi xử lý rơm rạ trước khi ủ mô trồng nấm rơm, người ta thường ngâm rơm vào nước có pha thêm chất gì với nồng độ khoảng 1%?",
        "unit": "Tên chất",
        "correctAnswers": [
            "Vôi bột",
            "vôi",
            "Nước vôi",
            "Ca(OH)2",
            "Vôi"
        ],
        "explain": "Nước vôi khử chua, diệt tạp nấm và làm mềm sợi rơm giúp hệ sợi nấm rơm dễ dàng đâm sâu hấp thụ dinh dưỡng."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 28. Thực hành: Sử dụng rơm, rạ để trồng nấm rơm.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-28-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 28. Thực hành: Sử dụng rơm, rạ để trồng nấm rơm.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-28-essay2"
    }
]
};

export default EXTRA_BAI_28;
