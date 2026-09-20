import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai và Tự luận: Bài 1. Giới thiệu về trồng trọt
export const EXTRA_BAI_01: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Khi tìm hiểu về vai trò và đặc điểm của ngành trồng trọt tại Việt Nam:",
      statements: [
        {
                "text": "Trồng trọt là một ngành kinh tế trọng điểm trong nông nghiệp, đảm bảo an ninh lương thực quốc gia.",
                "answer": true,
                "explain": "Đúng. Trồng trọt giữ vai trò cốt lõi trong đảm bảo an ninh lương thực và ổn định xã hội."
        },
        {
                "text": "Việt Nam hiện là một trong những quốc gia xuất khẩu gạo và cà phê hàng đầu thế giới.",
                "answer": true,
                "explain": "Đúng. Việt Nam là nước xuất khẩu gạo và cà phê Robusta top đầu thế giới."
        },
        {
                "text": "Trồng trọt chỉ nhằm phục vụ nhu cầu ăn uống tại chỗ, không liên quan đến ngành công nghiệp chế biến.",
                "answer": false,
                "explain": "Sai. Nông sản từ trồng trọt là nguồn nguyên liệu khổng lồ cho công nghiệp chế biến (nước giải khát, đường, dầu ăn, bánh kẹo...)."
        },
        {
                "text": "Ứng dụng khoa học công nghệ vào trồng trọt giúp giảm chi phí lao động thủ công và nâng cao giá trị nông sản.",
                "answer": true,
                "explain": "Đúng. Cơ giới hoá và tự động hoá giúp giải phóng sức lao động và tối ưu hoá chất lượng."
        }
]
    }
  ],
    shortAnswer: [
    {
        "id": "b01-sa1",
        "q": "Ngành trồng trọt cung cấp nguồn tinh bột và dưỡng chất thiết yếu hàng ngày cho con người, giữ vai trò quyết định trong việc đảm bảo điều gì cho quốc gia?",
        "unit": "Thuật ngữ",
        "correctAnswers": [
            "An ninh lương thực",
            "an ninh lương thực",
            "An ninh lương thực quốc gia"
        ],
        "explain": "Trồng trọt là nền tảng cốt lõi đảm bảo an ninh lương thực quốc gia và ổn định trật tự xã hội."
    },
    {
        "id": "b01-sa2",
        "q": "Cây lúa nước, ngô, khoai lang và sắn được xếp chung vào nhóm cây trồng nào theo mục đích sử dụng?",
        "unit": "Nhóm cây",
        "correctAnswers": [
            "Cây lương thực",
            "cây lương thực",
            "Lương thực"
        ],
        "explain": "Các cây trồng cung cấp nguồn tinh bột chính cho con người và vật nuôi thuộc nhóm cây lương thực."
    }
],
  essay: [
    {
        "q": "Hãy phân tích vai trò của ngành trồng trọt đối với sự phát triển kinh tế và an ninh lương thực của Việt Nam.",
        "answer": "1. Đảm bảo nguồn lương thực, thực phẩm cho hơn 100 triệu dân, giữ vững an ninh lương thực quốc gia.\n2. Cung cấp nguyên liệu dồi dào cho các ngành công nghiệp chế biến nông sản, dệt may, dược phẩm.\n3. Tạo nguồn hàng xuất khẩu có giá trị kinh tế lớn (gạo, cà phê, hạt điều, thanh long, sầu riêng).\n4. Tạo việc làm, thu nhập và cải thiện đời sống cho hàng triệu lao động nông thôn.",
        "id": "bai-01-essay1"
    },
    {
        "q": "Theo em, học sinh trường THPT Phục Hòa có thể đóng góp gì cho sự phát triển nông nghiệp sạch tại địa phương?",
        "answer": "- Nắm vững kiến thức khoa học kỹ thuật về trồng trọt, sinh học và công nghệ cao.\n- Tuyên truyền cho gia đình và cộng đồng hạn chế lạm dụng phân bón, thuốc bảo vệ thực vật hoá học.\n- Tham gia các dự án trồng rau sạch, cây ăn quả đặc sản, hoa cây cảnh ứng dụng phân bón hữu cơ vi sinh tại địa phương.",
        "id": "bai-01-essay2"
    }
]
};

export default EXTRA_BAI_01;
