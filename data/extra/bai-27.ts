import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 27. Ứng dụng công nghệ vi sinh trong bảo vệ môi trường và xử lí chất thải
export const EXTRA_BAI_27: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 27. Ứng dụng công nghệ vi sinh trong bảo vệ môi trường và xử lí chất thải:",
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
        "id": "b27-sa1",
        "q": "Tên viết tắt của tập hợp các vi sinh vật hữu hiệu thường dùng để ủ phân compost và khử mùi hôi chuồng trại nông nghiệp là gì?",
        "unit": "Tên chế phẩm",
        "correctAnswers": [
            "EM",
            "em",
            "Chế phẩm EM"
        ],
        "explain": "Chế phẩm EM (Effective Microorganisms) chứa nấm men, vi khuẩn quang dưỡng và vi khuẩn lactic phân hủy nhanh rác hữu cơ."
    },
    {
        "id": "b27-sa2",
        "q": "Quá trình ủ phân hữu cơ vi sinh từ phế phụ phẩm nông nghiệp tạo ra loại phân mùn giàu dinh dưỡng gọi là phân gì?",
        "unit": "Tên phân",
        "correctAnswers": [
            "Phân compost",
            "compost",
            "Phân ủ compost",
            "Phân vi sinh compost"
        ],
        "explain": "Phân compost là sản phẩm hoai mục sạch mầm bệnh, giàu mùn và vi sinh vật có ích bồi đắp độ phì cho đất."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 27. Ứng dụng công nghệ vi sinh trong bảo vệ môi trường và xử lí chất thải.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-27-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 27. Ứng dụng công nghệ vi sinh trong bảo vệ môi trường và xử lí chất thải.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-27-essay2"
    }
]
};

export default EXTRA_BAI_27;
