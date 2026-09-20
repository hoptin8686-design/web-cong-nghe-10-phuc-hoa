import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 4. Sử dụng, cải tạo và bảo vệ đất trồng
export const EXTRA_BAI_04: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi nghiên cứu và thực hành kiến thức của Bài 4. Sử dụng, cải tạo và bảo vệ đất trồng:",
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
        "id": "b04-sa1",
        "q": "Để khử chua cho đất đồi dốc và trung hòa các ion H⁺, Al³⁺ tự do, người nông dân thường sử dụng loại vật liệu hoá học thông dụng và rẻ tiền nào?",
        "unit": "Tên chất",
        "correctAnswers": [
            "Vôi bột",
            "vôi",
            "Vôi",
            "CaCO3",
            "CaO",
            "Vôi nông nghiệp"
        ],
        "explain": "Vôi bột (CaO hoặc CaCO3) cung cấp ion Ca2+ đẩy ion H+ và Al3+ ra khỏi keo đất để trung hòa độ chua."
    },
    {
        "id": "b04-sa2",
        "q": "Để ngăn chặn hiện tượng xói mòn và rửa trôi đất màu trên các sườn đồi dốc ở vùng núi phía Bắc, người ta thường làm ruộng có hình dạng gì?",
        "unit": "Dạng ruộng",
        "correctAnswers": [
            "Ruộng bậc thang",
            "ruộng bậc thang",
            "Bậc thang"
        ],
        "explain": "Ruộng bậc thang cắt ngang dòng chảy mặt, giữ nước và đất màu phì nhiêu không bị cuốn trôi xuôi dốc."
    }
],
  essay: [
    {
        "q": "Hãy nêu tóm tắt ý nghĩa và các bước chính cần lưu ý khi thực hiện nội dung trong Bài 4. Sử dụng, cải tạo và bảo vệ đất trồng.",
        "answer": "- Ý nghĩa: Giúp người sản xuất nắm vững cơ sở khoa học, hạn chế rủi ro thiên tai dịch bệnh, gia tăng năng suất và giá trị kinh tế.\n- Các bước chính: 1. Khảo sát chuẩn bị kỹ lưỡng; 2. Tuân thủ nghiêm ngặt quy trình kỹ thuật; 3. Theo dõi, ghi chép và xử lý kịp thời các bất thường; 4. Thu hoạch và bảo quản đúng tiêu chuẩn an toàn.",
        "id": "bai-04-essay1"
    },
    {
        "q": "Liên hệ thực tế địa phương tại Cao Bằng đối với việc ứng dụng kiến thức của Bài 4. Sử dụng, cải tạo và bảo vệ đất trồng.",
        "answer": "Cao Bằng có điều kiện khí hậu mát mẻ và thổ nhưỡng phù hợp với nhiều cây ăn quả đặc sản, chè, cây dược liệu và rau màu. Việc áp dụng đúng kỹ thuật sẽ giúp nâng cao thương hiệu nông sản địa phương, tạo việc làm và làm giàu bền vững cho bà con nông dân.",
        "id": "bai-04-essay2"
    }
]
};

export default EXTRA_BAI_04;
