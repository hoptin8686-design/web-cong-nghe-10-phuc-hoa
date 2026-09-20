import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 14. Thực hành: Nhân giống cây ăn quả bằng phương pháp ghép
export const EXTRA_BAI_14: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 14. Thực hành: Nhân giống cây ăn quả bằng phương pháp ghép:",
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
        "id": "b14-sa1",
        "q": "Khi ghép cành (ghép nêm hoặc ghép mắt), lớp tế bào nào giữa cành ghép và gốc ghép bắt buộc phải áp sát vào nhau để mô liền sẹo?",
        "unit": "Thuật ngữ",
        "correctAnswers": [
            "Tầng sinh mô",
            "tầng sinh mô",
            "Tượng tầng",
            "tượng tầng",
            "Cambium",
            "cambium"
        ],
        "explain": "Tầng sinh mô (cambium) là vùng phân chia tế bào; áp khít tầng sinh mô giúp nối liền mạch gỗ và mạch rây nuôi cành."
    },
    {
        "id": "b14-sa2",
        "q": "Sau khi ghép cây ăn quả, người ta thường dùng vật liệu gì để quấn chặt vết ghép nhằm giữ ẩm và chống nước mưa xâm nhập gây thối?",
        "unit": "Vật liệu",
        "correctAnswers": [
            "Dây nilon",
            "băng keo nilon",
            "Nilon tự hủy",
            "màng nilon",
            "Dây quấn ghép"
        ],
        "explain": "Dây nilon chuyên dụng có độ đàn hồi tốt, quấn chặt kín vết ghép giúp cành không bị khô nước và ngăn ngừa vi khuẩn."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 14. Thực hành: Nhân giống cây ăn quả bằng phương pháp ghép.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-14-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 14. Thực hành: Nhân giống cây ăn quả bằng phương pháp ghép.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-14-essay2"
    }
]
};

export default EXTRA_BAI_14;
