import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 13
export const EXTRA_BAI_13: LessonExtra = {
  tf: [
    {
        "id": "b13-tf1",
        "context": "So sánh nhân giống hữu tính bằng hạt và nhân giống vô tính:",
        "statements": [
            {
                "text": "Nhân giống bằng hạt có hệ số nhân giống cao, kỹ thuật gieo trồng đơn giản và bảo quản vận chuyển dễ dàng.",
                "answer": true,
                "explain": "Đúng. Đây là những ưu điểm vượt trội của nhân giống hữu tính."
            },
            {
                "text": "Cây ăn quả nhân giống bằng hạt luôn giữ được 100% hương vị ngon ngọt của cây mẹ.",
                "answer": false,
                "explain": "Sai. Thụ phấn chéo làm phân ly tính trạng khiến cây con hay bị thoái hóa chất lượng."
            },
            {
                "text": "Nhân giống vô tính (giâm, chiết, ghép) giúp cây con duy trì nguyên vẹn đặc tính di truyền quý của cây mẹ.",
                "answer": true,
                "explain": "Đúng. Dựa trên cơ chế nguyên phân sao chép chính xác hệ gen."
            },
            {
                "text": "Cây giống nhân vô tính thường bước vào giai đoạn ra hoa kết quả sớm hơn cây gieo từ hạt.",
                "answer": true,
                "explain": "Đúng. Cành giống đã mang tuổi sinh học thành thục của cây mẹ."
            }
        ]
    },
    {
        "id": "b13-tf2",
        "context": "Kỹ thuật giâm cành và chiết cành cây ăn quả:",
        "statements": [
            {
                "text": "Cành chọn làm cành giâm tốt nhất là cành bánh tẻ, không quá non và không quá già.",
                "answer": true,
                "explain": "Đúng. Cành bánh tẻ có sức bật rễ mạnh và dự trữ đủ dinh dưỡng."
            },
            {
                "text": "Các chất điều hòa sinh trưởng nhóm Auxin (IBA, NAA) có tác dụng kích thích cành nhanh ra rễ.",
                "answer": true,
                "explain": "Đúng. Auxin kích hoạt sự hình thành các mô phân sinh rễ bất định."
            },
            {
                "text": "Khi khoanh vỏ chiết cành, không cần cạo lớp tượng tầng nhầy sát gỗ cành vẫn ra rễ bình thường.",
                "answer": false,
                "explain": "Sai. Bắt buộc phải cạo sạch màng nhầy tượng tầng để vỏ không liền sẹo mà bắt buộc phải bung rễ."
            },
            {
                "text": "Chiết cành thích hợp cho các cây thân gỗ khó ra rễ bằng phương pháp giâm cành như cam, bưởi, nhãn.",
                "answer": true,
                "explain": "Đúng. Chiết cành được nuôi dưỡng liên tục từ cây mẹ đến khi rễ nhú trong bầu đất."
            }
        ]
    },
    {
        "id": "b13-tf3",
        "context": "Kỹ thuật ghép cây ăn quả trong sản xuất nông nghiệp:",
        "statements": [
            {
                "text": "Ghép cây là phương pháp gắn mắt ghép hoặc cành ghép vào gốc ghép để chúng cùng phát triển.",
                "answer": true,
                "explain": "Đúng. Kết hợp thế mạnh của hai bộ phận cây."
            },
            {
                "text": "Yếu tố quyết định thành công của mối ghép là tầng sinh mô của cành ghép và gốc ghép phải áp khít vào nhau.",
                "answer": true,
                "explain": "Đúng. Đảm bảo mô sẹo liền lạc và nhựa nguyên lưu thông."
            },
            {
                "text": "Sau khi ghép xong, cần để hở vết ghép dưới trời mưa to để nước mưa ngấm vào làm mát chồi ghép.",
                "answer": false,
                "explain": "Sai. Nước mưa mang nấm khuẩn làm thối rữa mối ghép, bắt buộc phải bọc kín nilon."
            },
            {
                "text": "Gốc ghép cần chọn những cây cùng họ, sinh trưởng khỏe, rễ ăn sâu và kháng bệnh hại đất tốt.",
                "answer": true,
                "explain": "Đúng. Gốc ghép khỏe giúp nuôi toàn bộ tán cây ghép bền vững."
            }
        ]
    },
    {
        "id": "b13-tf4",
        "context": "Công nghệ nuôi cấy mô tế bào thực vật (Micropropagation):",
        "statements": [
            {
                "text": "Cơ sở sinh học của nuôi cấy mô là tính toàn năng của tế bào thực vật.",
                "answer": true,
                "explain": "Đúng. Mỗi tế bào đều chứa đủ thông tin di truyền để tái sinh thành cá thể hoàn chỉnh."
            },
            {
                "text": "Nuôi cấy mô đỉnh sinh trưởng tạo ra cây giống hoàn toàn sạch virus và đồng đều chất lượng.",
                "answer": true,
                "explain": "Đúng. Mô phân sinh đỉnh ngọn không chứa mạch dẫn nên virus không thể lây nhiễm."
            },
            {
                "text": "Phòng nuôi cấy mô không cần khử trùng vô trùng, có thể mở cửa sổ thông gió tự do.",
                "answer": false,
                "explain": "Sai. Môi trường giàu dinh dưỡng rất dễ nhiễm nấm khuẩn nếu không đảm bảo vô trùng tuyệt đối."
            },
            {
                "text": "Cây chuối tiêu hồng và hoa lan hồ điệp hiện nay được nhân giống thương phẩm quy mô lớn bằng nuôi cấy mô.",
                "answer": true,
                "explain": "Đúng. Cung cấp hàng triệu cây giống đồng đều cho các vùng chuyên canh."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b13-sa1",
        "q": "Cơ sở sinh học nền tảng cho phép một tế bào hoặc mẩu mô thực vật có thể phát triển thành một cơ thể cây hoàn chỉnh trong ống nghiệm được gọi là tính gì của tế bào?",
        "unit": "Thuật ngữ sinh học",
        "correctAnswers": [
            "Tính toàn năng",
            "tính toàn năng",
            "Toàn năng"
        ],
        "explain": "Tính toàn năng của tế bào (Totipotency) là nguyên lý cốt lõi của công nghệ nuôi cấy mô tế bào thực vật."
    },
    {
        "id": "b13-sa2",
        "q": "Nhóm hormone thực vật (chất điều hòa sinh trưởng) nào thường được sử dụng phổ biến nhất để kích thích cành giâm và cành chiết nhanh mọc rễ bất định?",
        "unit": "Tên nhóm hormone",
        "correctAnswers": [
            "Auxin",
            "auxin",
            "IBA",
            "NAA"
        ],
        "explain": "Auxin (đặc biệt là IBA, NAA) kích thích sự phân chia tế bào hình thành mô sẹo và rễ con."
    },
    {
        "id": "b13-sa3",
        "q": "Lớp mô phân sinh màu xanh lục nhầy nằm giữa lớp vỏ và lớp gỗ của cành cây cần áp khít vào nhau khi ghép được gọi là tầng gì?",
        "unit": "Tên tầng mô",
        "correctAnswers": [
            "Tượng tầng",
            "tượng tầng",
            "Tầng sinh mô",
            "tầng sinh mô"
        ],
        "explain": "Tượng tầng (Cambium) là mô phân sinh sinh vỏ và sinh gỗ, quyết định sự liền sẹo của mối ghép."
    },
    {
        "id": "b13-sa4",
        "q": "Tên viết tắt của môi trường dinh dưỡng khoáng nhân tạo phổ biến nhất được sử dụng trong nuôi cấy mô tế bào thực vật trên toàn thế giới là môi trường gì?",
        "unit": "Tên môi trường",
        "correctAnswers": [
            "MS",
            "ms",
            "Môi trường MS",
            "môi trường MS"
        ],
        "explain": "Môi trường MS do hai nhà khoa học Murashige và Skoog sáng lập năm 1962."
    }
  ],
  essay: [
    {
        "id": "bai-13-essay1",
        "q": "So sánh ưu điểm và nhược điểm của phương pháp nhân giống bằng hạt (hữu tính) và nhân giống sinh dưỡng (vô tính).",
        "answer": "1. Nhân giống bằng hạt:\n- Ưu điểm: Hệ số nhân giống rất cao, tạo số lượng cây con cực lớn; kỹ thuật đơn giản; hạt giống khô dễ bảo quản, cất giữ và vận chuyển đi xa; bộ rễ cọc phát triển ăn sâu chống gió bão tốt.\n- Nhược điểm: Dễ bị phân ly tính trạng (đặc biệt ở cây thụ phấn chéo) làm giảm phẩm chất ngon của giống mẹ; cây con lâu ra hoa kết quả.\n2. Nhân giống vô tính:\n- Ưu điểm: Giữ nguyên vẹn 100% đặc tính di truyền và phẩm chất ngon ngọt của cây mẹ; cây sớm ra hoa tạo quả (rút ngắn thời kỳ kiến thiết cơ bản); duy trì được các giống không có hạt (như dưa hấu 3n, chuối).\n- Nhược điểm: Hệ số nhân giống thấp hơn gieo hạt; kỹ thuật đòi hỏi tay nghề khéo léo; bộ rễ chùm/rễ phụ ăn nông hơn (dễ bị bật gốc nếu gió bão mạnh); dễ lây truyền bệnh virus qua các thế hệ cành ghép nếu cây mẹ bị nhiễm."
    },
    {
        "id": "bai-13-essay2",
        "q": "Trình bày quy trình 4 bước cơ bản của phương pháp chiết cành cây ăn quả.",
        "answer": "1. Bước 1: Chọn cành chiết: Chọn cành bánh tẻ ở giữa tầng tán, hướng ra ánh sáng, cành mập mạp, đường kính 1-1.5 cm, sạch sâu bệnh hại.\n2. Bước 2: Khoanh vỏ: Dùng dao chiết sắc khoanh 2 vòng tròn cách nhau một đoạn bằng 1.5 - 2 lần đường kính cành, rạch dọc và bóc sạch khoanh vỏ. Dùng sống dao cạo thật sạch lớp tượng tầng nhầy trơn trên bề mặt gỗ, để khô vết khoanh 1-2 ngày.\n3. Bước 3: Bó bầu đất: Dùng hỗn hợp đất màu tơi xốp trộn rơm rác mục hoặc mụn dừa ẩm (độ ẩm 70%) đắp kín quanh vết khoanh thành hình quả trứng hoặc bầu dục. Bọc ngoài bằng màng nilon trong suốt, buộc chặt dây ở hai đầu bầu chiết.\n4. Bước 4: Cắt và đem giâm/trồng: Sau 1.5 - 3 tháng, khi thấy rễ non mọc tua tủa ra mép bầu chuyển từ màu trắng sang màu vàng nâu thì dùng cưa cắt cành chiết hạ xuống, tháo bỏ túi nilon và trồng vào bầu ươm chăm sóc."
    }
  ]
};

export default EXTRA_BAI_13;
