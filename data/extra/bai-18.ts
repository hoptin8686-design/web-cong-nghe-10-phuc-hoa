import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 18
export const EXTRA_BAI_18: LessonExtra = {
  tf: [
    {
        "id": "b18-tf1",
        "context": "Cơ chế tác động của vi khuẩn Bt (Bacillus thuringiensis):",
        "statements": [
            {
                "text": "Vi khuẩn Bt sinh ra tinh thể protein độc tố (Cry) gây thủng ruột sâu non cánh vảy khi sâu ăn phải.",
                "answer": true,
                "explain": "Đúng. Tinh thể độc tố chỉ hòa tan trong ruột kiềm tính của sâu non."
            },
            {
                "text": "Chế phẩm Bt có tính chọn lọc cao, an toàn cho người, động vật máu nóng và thiên địch.",
                "answer": true,
                "explain": "Đúng. Không gây hại cho con người, ong mật và chim thú."
            },
            {
                "text": "Chế phẩm Bt có tác dụng diệt trừ sâu tức thì chỉ sau 1 giây tương tự xung điện.",
                "answer": false,
                "explain": "Sai. Cần 2-4 ngày để độc tố phá hủy màng ruột làm sâu ngưng ăn rồi chết đói."
            },
            {
                "text": "Nên phun thuốc sinh học Bt vào lúc chiều mát khi sâu non tuổi 1-2 đang ăn mạnh.",
                "answer": true,
                "explain": "Đúng. Tránh ánh nắng làm hỏng protein độc tố và sâu non tuổi nhỏ rất mẫn cảm."
            }
        ]
    },
    {
        "id": "b18-tf2",
        "context": "Đặc điểm của nấm ký sinh côn trùng (Beauveria và Metarhizium):",
        "statements": [
            {
                "text": "Nấm trắng Beauveria bassiana và nấm xanh Metarhizium anisopliae xâm nhiễm qua lớp biểu bì vỏ sâu.",
                "answer": true,
                "explain": "Đúng. Bào tử nảy mầm đâm xuyên qua lớp vỏ chitin của côn trùng."
            },
            {
                "text": "Xác sâu chết do nấm trắng bị bao phủ một lớp bột nấm màu trắng như vôi bột.",
                "answer": true,
                "explain": "Đúng. Bệnh nấm vôi cứng làm xác sâu trắng xóa."
            },
            {
                "text": "Nấm xanh Metarhizium có thể tiêu diệt hiệu quả rầy nâu, bọ xít, bọ hà khoai lang.",
                "answer": true,
                "explain": "Đúng. Đây là đối tượng ký chủ ưa thích của nấm xanh."
            },
            {
                "text": "Có thể trộn lẫn nấm xanh với thuốc trừ nấm hóa học nồng độ cao để phun một lần cho tiện.",
                "answer": false,
                "explain": "Sai. Thuốc diệt nấm hóa học sẽ tiêu diệt toàn bộ bào tử nấm xanh có ích."
            }
        ]
    },
    {
        "id": "b18-tf3",
        "context": "Vai trò của nấm đối kháng Trichoderma và virus NPV:",
        "statements": [
            {
                "text": "Trichoderma là nấm đối kháng chuyên tiêu diệt các loài nấm đất gây bệnh thối rễ, lở cổ rễ.",
                "answer": true,
                "explain": "Đúng. Bảo vệ bộ rễ cây trồng khỏi nấm Fusarium, Phytophthora."
            },
            {
                "text": "Trichoderma tiết enzyme cellulase và chitinase phân giải vách tế bào nấm bệnh.",
                "answer": true,
                "explain": "Đúng. Cơ chế ký sinh và phân giải trực tiếp màng nấm gây hại."
            },
            {
                "text": "Sâu non bị nhiễm virus NPV trước khi chết thường treo dốc ngược đầu xuống dưới tán cây.",
                "answer": true,
                "explain": "Đúng. Triệu chứng đặc trưng giúp dịch virus phát tán lây nhiễm chéo bầy đàn."
            },
            {
                "text": "Nấm Trichoderma chỉ sống được trong môi trường hóa chất độc hại, không sống được trong phân chuồng hoai mục.",
                "answer": false,
                "explain": "Sai. Trichoderma phát triển cực mạnh trong phân chuồng hoai mục giàu chất hữu cơ."
            }
        ]
    },
    {
        "id": "b18-tf4",
        "context": "Ứng dụng chế phẩm vi sinh trong canh tác nông nghiệp sạch tại Cao Bằng:",
        "statements": [
            {
                "text": "Sử dụng chế phẩm vi sinh giúp sản xuất nông sản sạch đạt tiêu chuẩn VietGAP và Organic.",
                "answer": true,
                "explain": "Đúng. Không để lại tồn dư độc hại, đáp ứng tiêu chuẩn an toàn thực phẩm."
            },
            {
                "text": "Chế phẩm vi sinh cần được bảo quản nơi râm mát, tránh nhiệt độ cao và ánh nắng trực tiếp.",
                "answer": true,
                "explain": "Đúng. Giữ gìn mật độ sống của các bào tử nấm và vi khuẩn có ích."
            },
            {
                "text": "Phun chế phẩm vi sinh vào giữa trưa hè 40 độ C nắng gắt giúp vi sinh vật phát huy hiệu lực mạnh nhất.",
                "answer": false,
                "explain": "Sai. Tia cực tím mặt trời và nhiệt độ cao sẽ giết chết các bào tử vi sinh vật."
            },
            {
                "text": "Ủ nấm Trichoderma với phân chuồng bón cho vườn hồi, quế, cây ăn quả giúp phòng trừ thối rễ bền vững.",
                "answer": true,
                "explain": "Đúng. Cung cấp hệ vi sinh vật đối kháng bảo vệ đất đồi dốc."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b18-sa1",
        "q": "Tên viết tắt của loài vi khuẩn đất sinh tinh thể độc tố protein Cry chuyên dùng để diệt trừ sâu non bộ Cánh vảy (sâu tơ, sâu keo) là vi khuẩn gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "Bt",
            "bt",
            "Bacillus thuringiensis",
            "Vi khuẩn Bt"
        ],
        "explain": "Vi khuẩn Bt (Bacillus thuringiensis) là chế phẩm trừ sâu sinh học phổ biến nhất thế giới."
    },
    {
        "id": "b18-sa2",
        "q": "Tên loài nấm ký sinh côn trùng khi giết chết sâu hại sẽ bao phủ xác sâu bằng một lớp phấn bào tử màu trắng như vôi bột thường được gọi là nấm gì?",
        "unit": "Tên loài nấm",
        "correctAnswers": [
            "Nấm trắng",
            "nấm trắng",
            "Beauveria",
            "Beauveria bassiana"
        ],
        "explain": "Nấm trắng Beauveria bassiana gây bệnh nấm vôi tiêu diệt rầy, sâu bọ cánh cứng."
    },
    {
        "id": "b18-sa3",
        "q": "Chi nấm vi sinh đối kháng sống trong đất chuyên săn lùng, quấn chặt và tiết enzyme tiêu diệt các loài nấm gây bệnh thối rễ cây trồng có tên là gì?",
        "unit": "Tên chi nấm",
        "correctAnswers": [
            "Trichoderma",
            "trichoderma",
            "Nấm Trichoderma",
            "nấm trichoderma"
        ],
        "explain": "Trichoderma là 'vệ sĩ của rễ', khắc tinh của các loài nấm gây thối lở cổ rễ trong đất."
    },
    {
        "id": "b18-sa4",
        "q": "Tên viết tắt của nhóm virus đa diện nhân chuyên gây bệnh mềm nhũn ruột làm chết sâu khoang và sâu xanh da láng hại rau màu là virus gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "NPV",
            "npv",
            "Virus NPV",
            "virus NPV"
        ],
        "explain": "Virus NPV (Nuclear Polyhedrosis Virus) là chế phẩm virus trừ sâu sinh học hiệu quả cao."
    }
  ],
  essay: [
    {
        "id": "bai-18-essay1",
        "q": "Trình bày cơ chế diệt sâu của vi khuẩn Bacillus thuringiensis (Bt) và giải thích vì sao chế phẩm Bt lại an toàn cho con người và vật nuôi.",
        "answer": "1. Cơ chế diệt sâu của vi khuẩn Bt:\n- Khi vi khuẩn Bt hình thành bào tử, chúng đồng thời tạo ra một tinh thể protein độc tố (độc tố Cry hay delta-endotoxin) ở dạng tiền độc tố bất hoạt.\n- Khi sâu non ăn phải lá cây có dính chế phẩm Bt, tinh thể độc tố đi vào đường tiêu hóa của sâu.\n- Trong môi trường kiềm tính đặc trưng của dịch ruột giữa sâu non (pH > 9.0), tinh thể độc tố tan ra và bị enzyme protease của sâu cắt thành dạng độc tố hoạt tính.\n- Độc tố này gắn đặc hiệu vào các thụ thể trên màng tế bào biểu mô ruột giữa, tạo ra các lỗ thủng màng làm rò rỉ ion, mất cân bằng áp suất thẩm thấu, tế bào trương phình và vỡ tung.\n- Sâu non bị liệt ruột ngừng ăn sau vài giờ, thành ruột bị hoại tử và sâu chết khô sau 2-4 ngày.\n2. Vì sao an toàn cho con người và động vật máu nóng:\n- Dạ dày của con người và động vật có tính axit mạnh (pH < 3.0), không phải môi trường kiềm, do đó tinh thể độc tố Bt không thể tan được mà bị phân hủy như một loại protein thực phẩm thông thường.\n- Trên bề mặt tế bào ruột người và động vật hoàn toàn không có các thụ thể đặc hiệu (receptors) để độc tố Bt gắn vào.\n-> Vì vậy, chế phẩm Bt an toàn tuyệt đối cho người sản xuất, người tiêu dùng, vật nuôi và các loài thiên địch có ích."
    },
    {
        "id": "bai-18-essay2",
        "q": "So sánh ưu điểm và nhược điểm của chế phẩm vi sinh bảo vệ thực vật so với thuốc bảo vệ thực vật hóa học tổng hợp.",
        "answer": "1. Chế phẩm vi sinh bảo vệ thực vật:\n- Ưu điểm: Độ an toàn sinh học cao, không gây độc cho người, gia súc và thiên địch; không để lại dư lượng độc hại trong nông sản; thân thiện với môi trường, không làm thoái hóa đất và nguồn nước; sâu bệnh hầu như không hình thành tính kháng thuốc; phù hợp sản xuất nông sản hữu cơ.\n- Nhược điểm: Tác động diệt dịch hại chậm hơn (cần thời gian ủ bệnh 2-5 ngày); hiệu lực dễ bị suy giảm bởi điều kiện thời tiết khắc nghiệt (nắng to, tia UV, mưa rửa trôi); thời hạn sử dụng và bảo quản ngắn hơn (yêu cầu bảo quản mát); chi phí một số loại chế phẩm còn cao.\n2. Thuốc BVTV hóa học tổng hợp:\n- Ưu điểm: Tác dụng nhanh, hiệu lực dập dịch tức thì; phổ diệt trừ rộng; dễ bảo quản và thời hạn sử dụng lâu dài; dễ sử dụng đại trà.\n- Nhược điểm: Độc hại cho sức khỏe con người và vật nuôi; gây ô nhiễm môi trường đất, nước và không khí; tiêu diệt cả thiên địch có ích làm mất cân bằng sinh thái; để lại dư lượng độc hại trên nông sản; sâu bệnh nhanh quen thuốc (kháng thuốc) dẫn đến bùng phát dịch thứ cấp."
    }
  ]
};

export default EXTRA_BAI_18;
