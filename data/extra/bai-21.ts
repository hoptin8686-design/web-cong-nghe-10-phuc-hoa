import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 21
export const EXTRA_BAI_21: LessonExtra = {
  tf: [
    {
        "id": "b21-tf1",
        "context": "Các phương pháp sấy khô chế biến nông sản:",
        "statements": [
            {
                "text": "Nguyên lý của sấy khô là làm giảm hàm lượng nước tự do trong nông sản xuống mức vi sinh vật không thể phát triển.",
                "answer": true,
                "explain": "Đúng. Cắt đứt môi trường dung môi sống của vi khuẩn và nấm mốc."
            },
            {
                "text": "Sấy thăng hoa (Freeze Drying) làm nước đá thăng hoa trực tiếp thành hơi trong môi trường chân không nhiệt độ âm.",
                "answer": true,
                "explain": "Đúng. Giữ nguyên hình dạng, màu sắc và vitamin của nông sản."
            },
            {
                "text": "Sấy thăng hoa làm cho quả bị teo tóp quắt lại và biến đổi thành màu đen kịt như than.",
                "answer": false,
                "explain": "Sai. Cấu trúc xốp nguyên vẹn, giữ 100% màu sắc và hương thơm ban đầu."
            },
            {
                "text": "Sấy nhiệt đối lưu sử dụng luồng không khí nóng từ 50-75 độ C để làm bay hơi nước nông sản từ từ.",
                "answer": true,
                "explain": "Đúng. Phương pháp sấy nhiệt phổ biến và kinh tế nhất hiện nay."
            }
        ]
    },
    {
        "id": "b21-tf2",
        "context": "Công nghệ đồ hộp và lên men vi sinh:",
        "statements": [
            {
                "text": "Đóng hộp thanh trùng nhiệt độ cao giúp tiêu diệt vi khuẩn kỵ khí sinh nha bào nguy hiểm Clostridium botulinum.",
                "answer": true,
                "explain": "Đúng. Đảm bảo an toàn tuyệt đối chống ngộ độc đồ hộp."
            },
            {
                "text": "Lên men muối chua rau cải (muối dưa) diễn ra nhờ sự hoạt động của vi khuẩn Lactic.",
                "answer": true,
                "explain": "Đúng. Vi khuẩn Lactic chuyển hóa đường thành axit lactic thơm ngon."
            },
            {
                "text": "Axit lactic làm tăng độ pH của dưa chua lên mức kiềm tính pH > 9.0.",
                "answer": false,
                "explain": "Sai. Axit lactic làm hạ độ pH xuống môi trường axit (pH < 4.0) ức chế vi khuẩn thối rữa."
            },
            {
                "text": "Nồng độ đường cao trong mứt quả tạo áp suất thẩm thấu lớn ức chế sự sinh trưởng của vi sinh vật.",
                "answer": true,
                "explain": "Đúng. Đường hút nước làm teo nguyên sinh chất của tế bào nấm mốc."
            }
        ]
    },
    {
        "id": "b21-tf3",
        "context": "Chế biến chè và chiết xuất tinh dầu:",
        "statements": [
            {
                "text": "Công đoạn 'diệt men' bằng nhiệt độ cao trong chế biến chè xanh giúp giữ nguyên màu nước xanh trong.",
                "answer": true,
                "explain": "Đúng. Khóa enzyme polyphenol oxidase ngăn chè bị oxy hóa chuyển màu nâu đỏ."
            },
            {
                "text": "Chè đen (Black tea) trải qua quá trình lên men oxy hóa hoàn toàn tạo hương thơm nồng và màu nước đỏ nâu.",
                "answer": true,
                "explain": "Đúng. Quá trình lên men sinh học tạo chất theaflavin và thearubigin."
            },
            {
                "text": "Chưng cất lôi cuốn hơi nước là phương pháp phổ biến để chiết xuất tinh dầu hoa hồi nguyên chất.",
                "answer": true,
                "explain": "Đúng. Hơi nước cuốn tinh dầu nhẹ bay lên rồi ngưng tụ tách lớp."
            },
            {
                "text": "Chế biến sâu chỉ tạo ra các sản phẩm phụ phẩm bỏ đi, không mang lại giá trị gia tăng kinh tế.",
                "answer": false,
                "explain": "Sai. Chế biến sâu tạo tinh dầu, dược liệu, thực phẩm chức năng có giá trị kinh tế cao gấp hàng chục lần nông sản thô."
            }
        ]
    },
    {
        "id": "b21-tf4",
        "context": "Chế biến nông sản đặc sản tại tỉnh Cao Bằng:",
        "statements": [
            {
                "text": "Miến dong Phia Đén (Nguyên Bình) được chế biến từ 100% tinh bột củ dong riềng đỏ nguyên chất.",
                "answer": true,
                "explain": "Đúng. Sợi miến dai giòn tự nhiên không dùng hóa chất tẩy trắng."
            },
            {
                "text": "Chế biến hạt dẻ Trùng Khánh thành bánh hạt dẻ, ngũ cốc đóng gói giúp phát triển du lịch địa phương.",
                "answer": true,
                "explain": "Đúng. Sản phẩm OCOP quà tặng lưu niệm giá trị cao."
            },
            {
                "text": "Bao bì túi nhôm hút chân không giúp bảo vệ chè búp khỏi ánh sáng và hơi ẩm không khí.",
                "answer": true,
                "explain": "Đúng. Duy trì hương vị chè Shan tuyết thơm ngon suốt cả năm."
            },
            {
                "text": "Nhà máy chế biến nông sản không cần áp dụng tiêu chuẩn an toàn thực phẩm HACCP hay ISO.",
                "answer": false,
                "explain": "Sai. Bắt buộc phải áp dụng quy chuẩn an toàn thực phẩm để bảo vệ sức khỏe người dùng và xuất khẩu."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b21-sa1",
        "q": "Công nghệ sấy hiện đại làm lạnh đông sản phẩm ở nhiệt độ âm sâu rồi hút chân không để nước đá thăng hoa trực tiếp thành hơi được gọi là công nghệ sấy gì?",
        "unit": "Tên công nghệ",
        "correctAnswers": [
            "Sấy thăng hoa",
            "sấy thăng hoa",
            "Freeze drying",
            "freeze drying"
        ],
        "explain": "Sấy thăng hoa (Freeze Drying) là công nghệ sấy đỉnh cao giữ nguyên vẹn 100% hình thái và dưỡng chất."
    },
    {
        "id": "b21-sa2",
        "q": "Tên loài vi khuẩn có ích chuyển hóa đường thành axit hữu cơ tạo nên vị chua thanh và ức chế vi khuẩn thối rữa trong muối dưa cà là vi khuẩn gì?",
        "unit": "Tên vi khuẩn",
        "correctAnswers": [
            "Lactic",
            "lactic",
            "Vi khuẩn lactic",
            "vi khuẩn lactic",
            "Lactobacillus"
        ],
        "explain": "Vi khuẩn Lactic lên men đường thành axit lactic bảo quản dưa cà muối truyền thống."
    },
    {
        "id": "b21-sa3",
        "q": "Công đoạn kỹ thuật quan trọng hàng đầu trong chế biến chè xanh (sử dụng nhiệt độ cao làm bất hoạt enzyme oxy hóa) được gọi là công đoạn gì?",
        "unit": "Tên công đoạn",
        "correctAnswers": [
            "Diệt men",
            "diệt men",
            "Sao diệt men",
            "sao diệt men"
        ],
        "explain": "Diệt men phá hủy enzyme polyphenol oxidase, giữ sắc xanh và hương thơm tự nhiên của búp trà."
    },
    {
        "id": "b21-sa4",
        "q": "Tên sản phẩm miến sợi đặc sản nức tiếng cả nước làm từ củ dong riềng tại vùng núi Phia Đén huyện Nguyên Bình tỉnh Cao Bằng là miến gì?",
        "unit": "Tên sản phẩm",
        "correctAnswers": [
            "Miến dong",
            "miến dong",
            "Miến dong Phia Đén",
            "miến dong phia đén"
        ],
        "explain": "Miến dong Phia Đén là sản phẩm OCOP tự hào mang thương hiệu chỉ dẫn địa lý Cao Bằng."
    }
  ],
  essay: [
    {
        "id": "bai-21-essay1",
        "q": "Trình bày nguyên lý, ưu điểm và phạm vi ứng dụng của công nghệ sấy thăng hoa (Freeze Drying) trong chế biến sản phẩm trồng trọt.",
        "answer": "1. Nguyên lý hoạt động:\n- Giai đoạn 1 (Làm lạnh đông): Nông sản tươi được làm lạnh đông nhanh chóng ở nhiệt độ âm sâu (từ -40°C đến -50°C) để toàn bộ lượng nước tự do trong tế bào đóng băng thành các tinh thể đá siêu mịn.\n- Giai đoạn 2 (Sấy thăng hoa): Buồng sấy được hút chân không tuyệt đối (áp suất < 0.1 mbar) và gia nhiệt nhẹ. Dưới điều kiện áp suất chân không thấp hơn điểm ba trạng thái của nước, các tinh thể đá thăng hoa trực tiếp từ thể rắn chuyển thành thể hơi mà không qua trạng thái lỏng.\n- Giai đoạn 3 (Sấy giải hấp): Hút ẩm sâu để hạ thủy phần còn lại xuống dưới 2-4%.\n2. Ưu điểm nổi bật:\n- Giữ nguyên vẹn 100% cấu trúc hình thái, màu sắc, hương vị tự nhiên và hàm lượng vitamin, hoạt chất sinh học quý giá nhạy cảm với nhiệt độ.\n- Sản phẩm có cấu trúc tổ ong xốp giòn, khi ngâm nước sẽ hoàn nguyên lại trạng thái tươi ngon như ban đầu trong vài phút.\n- Thời hạn bảo quản siêu dài (từ 5 đến 25 năm) trong bao bì kín ở nhiệt độ phòng bình thường mà không cần chất bảo quản hóa học.\n3. Phạm vi ứng dụng: Dùng chế biến các nông sản cao cấp: Đông trùng hạ thảo, nấm linh chi, sâm ngọc linh, hoa quả cao cấp (sầu riêng, dâu tây, xoài), cà phê hòa tan đặc biệt và thực phẩm cho phi hành gia vũ trụ."
    },
    {
        "id": "bai-21-essay2",
        "q": "Phân tích ý nghĩa kinh tế - xã hội của việc đẩy mạnh công nghiệp chế biến nông sản tại các vùng nông thôn miền núi như tỉnh Cao Bằng.",
        "answer": "1. Nâng cao giá trị gia tăng của nông sản: Chế biến tinh sâu (như miến dong Phia Đén, bánh hạt dẻ Trùng Khánh, tinh dầu hồi) biến nông sản thô giá rẻ thành sản phẩm hàng hóa có giá trị cao gấp 3-5 lần.\n2. Giải quyết tình trạng 'được mùa mất giá': Nông sản rộ mùa nếu không chế biến sẽ bị hư hỏng dập nát và tư thương ép giá. Nhà máy chế biến giúp thu mua bao tiêu toàn bộ sản lượng dôi dư của nông dân.\n3. Kéo dài thời hạn tiêu thụ và mở rộng thị trường: Nông sản tươi chỉ để được vài ngày, nhưng sản phẩm chế biến có thể lưu kho cả năm, vận chuyển đi khắp các tỉnh thành cả nước và xuất khẩu ra thế giới.\n4. Tạo việc làm và chuyển dịch cơ cấu kinh tế nông thôn: Phát triển các cơ sở chế biến tạo công ăn việc làm tại chỗ cho thanh niên nông thôn, tăng thu nhập, thúc đẩy hình thành các chuỗi liên kết OCOP và hợp tác xã nông nghiệp kiểu mới, góp phần xóa đói giảm nghèo bền vững."
    }
  ]
};

export default EXTRA_BAI_21;
