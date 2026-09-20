import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 1
export const EXTRA_BAI_01: LessonExtra = {
  tf: [
    {
        "id": "b1-tf1",
        "context": "Khi tìm hiểu về vai trò và đặc điểm của ngành trồng trọt tại Việt Nam:",
        "statements": [
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
                "explain": "Sai. Nông sản từ trồng trọt là nguồn nguyên liệu khổng lồ cho công nghiệp chế biến."
            },
            {
                "text": "Ứng dụng khoa học công nghệ vào trồng trọt giúp giảm chi phí lao động thủ công và nâng cao giá trị nông sản.",
                "answer": true,
                "explain": "Đúng. Cơ giới hoá và tự động hoá giúp giải phóng sức lao động và tối ưu hoá chất lượng."
            }
        ]
    },
    {
        "id": "b1-tf2",
        "context": "Khi phân loại cây trồng theo các tiêu chí khoa học trong nông nghiệp:",
        "statements": [
            {
                "text": "Cây lúa nước, ngô, khoai lang và sắn đều được xếp chung vào nhóm cây lương thực.",
                "answer": true,
                "explain": "Đúng. Đây là các loại cây cung cấp tinh bột chính cho con người và động vật."
            },
            {
                "text": "Cây cà phê, cao su và chè là những cây công nghiệp hàng năm có vòng đời dưới một năm.",
                "answer": false,
                "explain": "Sai. Cà phê, cao su, chè là cây công nghiệp lâu năm, sinh trưởng và cho thu hoạch nhiều năm."
            },
            {
                "text": "Cây dược liệu được trồng với mục đích chính là chiết xuất các hợp chất sinh học làm thuốc chữa bệnh.",
                "answer": true,
                "explain": "Đúng. Các cây như sâm, tam thất, đinh lăng cung cấp hoạt chất dược liệu quý."
            },
            {
                "text": "Rau ăn lá, rau ăn quả và rau ăn củ có kỹ thuật chăm sóc và thu hoạch hoàn toàn giống hệt nhau.",
                "answer": false,
                "explain": "Sai. Mỗi nhóm rau có yêu cầu kỹ thuật phân bón và thời điểm thu hoạch rất khác nhau."
            }
        ]
    },
    {
        "id": "b1-tf3",
        "context": "Thảo luận về xu thế phát triển của ngành trồng trọt trong thời kỳ hội nhập quốc tế:",
        "statements": [
            {
                "text": "Phát triển nông nghiệp hữu cơ và nông nghiệp tuần hoàn là xu hướng tất yếu bảo vệ môi trường.",
                "answer": true,
                "explain": "Đúng. Giúp giảm hóa chất độc hại, tái tạo độ phì cho đất và thích ứng biến đổi khí hậu."
            },
            {
                "text": "Nông nghiệp công nghệ cao đòi hỏi vốn đầu tư lớn và yêu cầu nguồn nhân lực có trình độ khoa học kỹ thuật.",
                "answer": true,
                "explain": "Đúng. Cần công nghệ nhà màng, tự động hóa IoT và cán bộ kỹ thuật am hiểu vận hành."
            },
            {
                "text": "Mục tiêu duy nhất của trồng trọt hiện đại là tăng sản lượng tối đa bằng mọi giá, bất chấp ô nhiễm môi trường.",
                "answer": false,
                "explain": "Sai. Trồng trọt hiện đại đề cao tính bền vững, bảo vệ hệ sinh thái và sức khỏe người tiêu dùng."
            },
            {
                "text": "Áp dụng tiêu chuẩn VietGAP giúp nâng cao uy tín và khả năng cạnh tranh của nông sản Việt Nam trên thị trường quốc tế.",
                "answer": true,
                "explain": "Đúng. VietGAP đảm bảo minh bạch nguồn gốc và chất lượng an toàn vệ sinh thực phẩm."
            }
        ]
    },
    {
        "id": "b1-tf4",
        "context": "Liên hệ thực tiễn phát triển ngành trồng trọt tại tỉnh Cao Bằng:",
        "statements": [
            {
                "text": "Cao Bằng có khí hậu á nhiệt đới vùng núi, thích hợp phát triển các cây đặc sản như hạt dẻ, lê, mận máu.",
                "answer": true,
                "explain": "Đúng. Điều kiện tự nhiên vùng núi cao tạo nên hương vị đặc trưng cho các loại quả đặc sản này."
            },
            {
                "text": "Tại vùng đồi núi dốc, việc độc canh cây ngô liên tục không bảo vệ đất sẽ gây xói mòn và bạc màu đất nghiêm trọng.",
                "answer": true,
                "explain": "Đúng. Mưa bão dễ cuốn trôi đất mặt nếu không có biện pháp nông lâm kết hợp hoặc làm bậc thang."
            },
            {
                "text": "Cây mía đường nguyên liệu tại huyện Quảng Hòa không có đóng góp gì cho ngành công nghiệp chế biến địa phương.",
                "answer": false,
                "explain": "Sai. Mía đường là cây công nghiệp chủ lực cung cấp nguyên liệu cho nhà máy đường Phục Hòa."
            },
            {
                "text": "Thanh niên, học sinh địa phương có thể khởi nghiệp nông nghiệp sạch từ việc khai thác các giống cây trồng bản địa.",
                "answer": true,
                "explain": "Đúng. Nông sản bản địa có giá trị kinh tế cao nếu được ứng dụng công nghệ chế biến và xây dựng thương hiệu."
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
    },
    {
        "id": "b01-sa3",
        "q": "Viết tắt tên tiêu chuẩn 'Thực hành sản xuất nông nghiệp tốt ở Việt Nam' là gì?",
        "unit": "Viết tắt",
        "correctAnswers": [
            "VietGAP",
            "vietgap",
            "VIETGAP"
        ],
        "explain": "VietGAP là bộ tiêu chuẩn kiểm soát chất lượng an toàn từ khâu chọn giống, đất, nước đến thu hoạch."
    },
    {
        "id": "b01-sa4",
        "q": "Tại huyện Trùng Khánh (tỉnh Cao Bằng), loại cây ăn quả thân gỗ nào nổi tiếng khắp cả nước với quả có gai nhọn bao bọc hạt thơm ngọt bùi?",
        "unit": "Tên cây",
        "correctAnswers": [
            "Cây hạt dẻ",
            "hạt dẻ",
            "Hạt dẻ Trùng Khánh",
            "cây dẻ",
            "Hạt dẻ"
        ],
        "explain": "Hạt dẻ Trùng Khánh là thương hiệu nông sản đặc sản nổi tiếng hàng đầu của vùng đất Cao Bằng."
    }
  ],
  essay: [
    {
        "id": "bai-01-essay1",
        "q": "Hãy phân tích vai trò của ngành trồng trọt đối với sự phát triển kinh tế và an ninh lương thực của Việt Nam.",
        "answer": "1. Đảm bảo nguồn lương thực, thực phẩm cho hơn 100 triệu dân, giữ vững an ninh lương thực quốc gia.\n2. Cung cấp nguyên liệu dồi dào cho các ngành công nghiệp chế biến nông sản, dệt may, dược phẩm.\n3. Tạo nguồn hàng xuất khẩu có giá trị kinh tế lớn (gạo, cà phê, hạt điều, thanh long, sầu riêng).\n4. Tạo việc làm, thu nhập và cải thiện đời sống cho hàng triệu lao động nông thôn."
    },
    {
        "id": "bai-01-essay2",
        "q": "Theo em, học sinh trường THPT Phục Hòa có thể đóng góp gì cho sự phát triển nông nghiệp sạch tại địa phương?",
        "answer": "- Nắm vững kiến thức khoa học kỹ thuật về trồng trọt, sinh học và công nghệ cao.\n- Tuyên truyền cho gia đình và cộng đồng hạn chế lạm dụng phân bón, thuốc bảo vệ thực vật hoá học.\n- Tham gia các dự án trồng rau sạch, cây ăn quả đặc sản, hoa cây cảnh ứng dụng phân bón hữu cơ vi sinh tại địa phương."
    }
  ]
};

export default EXTRA_BAI_01;
