import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 17
export const EXTRA_BAI_17: LessonExtra = {
  tf: [
    {
        "id": "b17-tf1",
        "context": "Đặc điểm bệnh Đạo ôn lúa (Pyricularia oryzae):",
        "statements": [
            {
                "text": "Bệnh đạo ôn do nấm Pyricularia oryzae gây ra trên lá, cổ bông và hạt lúa.",
                "answer": true,
                "explain": "Đúng. Nấm tấn công nhiều bộ phận trên mặt đất của cây lúa."
            },
            {
                "text": "Vết bệnh đạo ôn điển hình trên phiến lá lúa có hình thoi, tâm xám tro viền nâu đậm.",
                "answer": true,
                "explain": "Đúng. Đây là dấu hiệu nhận diện kinh điển của đạo ôn lá."
            },
            {
                "text": "Thời tiết mưa phùn dầm dề, sương mù nhiều, trời se lạnh ẩm ướt là điều kiện thuận lợi cho nấm đạo ôn phát triển.",
                "answer": true,
                "explain": "Đúng. Ẩm độ cao giúp bào tử nảy mầm và xâm nhập qua màng tế bào."
            },
            {
                "text": "Khi ruộng lúa bị đạo ôn lá nặng, cần bón thúc thêm nhiều đạm urê để lúa nhanh ra lá mới lấn át bệnh.",
                "answer": false,
                "explain": "Sai. Tuyệt đối ngừng bón đạm vì bón thêm đạm sẽ làm bệnh bùng phát hủy diệt toàn bộ ruộng lúa."
            }
        ]
    },
    {
        "id": "b17-tf2",
        "context": "Đặc điểm bệnh Bạc lá vi khuẩn và bệnh Khô vằn:",
        "statements": [
            {
                "text": "Bệnh bạc lá lúa do vi khuẩn Xanthomonas oryzae gây ra, làm khô trắng từ mép lá lúa theo hình lượn sóng.",
                "answer": true,
                "explain": "Đúng. Vi khuẩn gây tắc mạch dẫn làm cháy khô mép lá như màu vôi."
            },
            {
                "text": "Bệnh bạc lá phát triển mạnh trong điều kiện mưa bão to làm cọ xát rách phiến lá.",
                "answer": true,
                "explain": "Đúng. Vết thương cơ giới do gió bão là cửa ngõ cho vi khuẩn tràn vào."
            },
            {
                "text": "Bệnh khô vằn do nấm Rhizoctonia solani tạo vết đốm loang lổ hình da hổ trên bẹ và phiến lá.",
                "answer": true,
                "explain": "Đúng. Vết vằn da hổ lan dần từ gốc bẹ sát nước lên lá đòng."
            },
            {
                "text": "Bệnh khô vằn chỉ phát sinh trên cây lúa, hoàn toàn không thể lây sang cây ngô (bắp).",
                "answer": false,
                "explain": "Sai. Nấm Rhizoctonia solani có phổ ký chủ rất rộng, hại nặng cả trên ngô, đậu tương."
            }
        ]
    },
    {
        "id": "b17-tf3",
        "context": "Đặc điểm bệnh Sương mai và bệnh Gỉ sắt:",
        "statements": [
            {
                "text": "Bệnh sương mai hại khoai tây, cà chua do nấm Phytophthora infestans gây ra.",
                "answer": true,
                "explain": "Đúng. Bệnh gây úng nước đen lá và lớp mốc trắng mặt dưới lá."
            },
            {
                "text": "Bệnh gỉ sắt tạo ra các ổ nổi li ti chứa đầy bột màu nâu đỏ như gỉ sắt ở mặt dưới lá ngô, cà phê.",
                "answer": true,
                "explain": "Đúng. Các ổ bào tử hạ vỡ tung giải phóng bụi phấn gỉ sắt."
            },
            {
                "text": "Bệnh sương mai chỉ phát triển ở nhiệt độ rất cao trên 45 độ C vào trưa hè gay gắt.",
                "answer": false,
                "explain": "Sai. Nấm sương mai ưa thời tiết mát ẩm, nhiều sương đêm ở vụ đông xuân."
            },
            {
                "text": "Sử dụng giống kháng bệnh là biện pháp phòng trừ bệnh gỉ sắt và đạo ôn kinh tế và bền vững nhất.",
                "answer": true,
                "explain": "Đúng. Giúp tiết kiệm chi phí thuốc BVTV và an toàn môi trường."
            }
        ]
    },
    {
        "id": "b17-tf4",
        "context": "Phòng trừ bệnh virus xoăn lá và bệnh thối nhũn vi khuẩn tại Cao Bằng:",
        "statements": [
            {
                "text": "Bệnh xoăn lá cà chua do virus gây ra không thể chữa khỏi bằng thuốc trừ nấm hóa học thông thường.",
                "answer": true,
                "explain": "Đúng. Thuốc trừ nấm không có tác dụng với các hạt virus nội bào."
            },
            {
                "text": "Phun thuốc diệt trừ bọ phấn trắng và rệp muỗi giúp ngăn ngừa sự lây lan của bệnh virus xoăn lá.",
                "answer": true,
                "explain": "Đúng. Cắt đứt vector môi giới truyền bệnh bảo vệ cây non."
            },
            {
                "text": "Lên luống cao và làm rãnh thoát nước tốt giúp hạn chế bệnh thối nhũn vi khuẩn trên rau vụ đông.",
                "answer": true,
                "explain": "Đúng. Tránh ngập úng gây thối rễ và dập nát mô rau bắp cải."
            },
            {
                "text": "Tưới nước phân chuồng tươi trực tiếp lên các vết thương của cây giúp cây mau lành bệnh thối nhũn.",
                "answer": false,
                "explain": "Sai. Phân tươi chứa hàng tỷ vi khuẩn hoại sinh sẽ làm vết thương thối rữa nhanh hơn."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b17-sa1",
        "q": "Hình dạng vết bệnh điển hình do nấm đạo ôn (Pyricularia oryzae) gây ra trên phiền lá lúa có dạng hình học gì đặc trưng?",
        "unit": "Hình dạng",
        "correctAnswers": [
            "Hình thoi",
            "hình thoi",
            "Hình mắt én",
            "hình mắt én"
        ],
        "explain": "Vết bệnh đạo ôn lá điển hình có hình thoi hai đầu nhọn, tâm xám tro viền nâu đỏ."
    },
    {
        "id": "b17-sa2",
        "q": "Chất dinh dưỡng khoáng đa lượng nào nếu bón thừa quá mức sẽ làm cho lá lúa rậm rạp mềm yếu, kích thích nấm đạo ôn bùng phát thành đại dịch?",
        "unit": "Tên chất khoáng",
        "correctAnswers": [
            "Đạm",
            "đạm",
            "Nitơ",
            "nitơ",
            "N"
        ],
        "explain": "Bón thừa đạm làm mô tế bào tích nước, màng mỏng tạo điều kiện cho nấm đạo ôn xâm nhập bùng nổ."
    },
    {
        "id": "b17-sa3",
        "q": "Tên loài vi khuẩn nguy hiểm gây bệnh cháy mép lá lúa từ chóp lan xuống hình gợn sóng màu trắng bạc như quét vôi là vi khuẩn gì?",
        "unit": "Tên vi khuẩn",
        "correctAnswers": [
            "Xanthomonas",
            "Xanthomonas oryzae",
            "xanthomonas",
            "Bạc lá lúa",
            "vi khuẩn bạc lá"
        ],
        "explain": "Bệnh bạc lá lúa do vi khuẩn Xanthomonas oryzae gây ra làm cháy khô mép lá lúa."
    },
    {
        "id": "b17-sa4",
        "q": "Đối tượng côn trùng nhỏ bé màu trắng nào đóng vai trò là vật trung gian (vector) chủ yếu truyền bệnh virus xoăn vàng lá nguy hiểm trên cây cà chua và ớt?",
        "unit": "Tên loài côn trùng",
        "correctAnswers": [
            "Bọ phấn trắng",
            "bọ phấn trắng",
            "Bọ phấn",
            "bọ phấn"
        ],
        "explain": "Bọ phấn trắng (Bemisia tabaci) là vector chính truyền Begomovirus gây bệnh xoăn lá cà chua."
    }
  ],
  essay: [
    {
        "id": "bai-17-essay1",
        "q": "Trình bày triệu chứng nhận biết bệnh đạo ôn hại lúa (trên lá và cổ bông). Khi phát hiện ruộng lúa bị bệnh đạo ôn lá, nông dân cần xử lý như thế nào?",
        "answer": "1. Triệu chứng nhận biết:\n- Trên lá: Ban đầu là các chấm kim nhỏ màu nâu xám, sau đó lớn dần thành vết bệnh hình thoi (mắt én), ở giữa màu xám tro, viền ngoài màu nâu đậm hoặc nâu đỏ. Khi bị nặng nhiều vết bệnh liên kết làm cháy khô toàn bộ phiến lá.\n- Trên cổ bông: Vết bệnh màu nâu xám bao quanh cổ bông làm teo thắt mạch dẫn; cổ bông bị gãy gục, bông lúa bị lép lửng hoàn toàn (hiện tượng bông bạc, gãy cổ bông).\n2. Biện pháp xử lý ngay khi phát hiện bệnh trên lá:\n- Cắt đạm lập tức: Tuyệt đối ngừng bón mọi loại phân đạm hóa học, phân bón lá và các chất kích thích sinh trưởng.\n- Giữ nước trong ruộng: Duy trì mực nước nông 3-5 cm trong ruộng, không để ruộng bị khô hạn nứt nẻ.\n- Phun thuốc đặc trị: Sử dụng các loại thuốc bảo vệ thực vật đặc trị nấm đạo ôn (như Tricyclazole, Isoprothiolane, Fenoxanil...), phun ướt đều tán lá vào lúc trời tạnh ráo mát mẻ; nếu bệnh nặng phun lại lần 2 sau 5-7 ngày."
    },
    {
        "id": "bai-17-essay2",
        "q": "So sánh sự khác nhau cơ bản giữa bệnh hại do nấm và bệnh hại do virus ở cây trồng về: Tác nhân, triệu chứng điển hình và nguyên tắc phòng trừ.",
        "answer": "1. Tác nhân gây bệnh:\n- Bệnh do nấm: Do các loài nấm sợi ký sinh (sinh vật nhân thực) xâm nhiễm qua lỗ khí khổng hoặc trực tiếp đâm xuyên qua lớp cutin biểu bì.\n- Bệnh do virus: Do các hạt virus siêu hiển vi (chỉ gồm vỏ protein và lõi acid nucleic) xâm nhập bắt buộc qua vết thương cơ giới hoặc qua vector côn trùng chích hút.\n2. Triệu chứng điển hình:\n- Nấm: Xuất hiện các vết đốm hoại tử mô (hình thoi, hình tròn, vằn vện), trên bề mặt vết bệnh thường phủ lớp phấn bào tử hoặc mốc nhung (mốc trắng, xám, đen, vàng gỉ sắt).\n- Virus: Gây rối loạn di truyền và phân bào; triệu chứng là lá khảm loang lổ xanh vàng, xoăn tít đọt, cây còi cọc chùn ngọn, hoa quả dị hình méo mó; hoàn toàn không có lớp nấm mốc bên ngoài.\n3. Nguyên tắc phòng trừ:\n- Nấm: Có thể dùng các loại thuốc trừ nấm hóa học tiếp xúc hoặc nội hấp để tiêu diệt sợi nấm và ngăn bào tử nảy mầm.\n- Virus: Không có thuốc hóa học nào chữa được virus trong tế bào cây; nguyên tắc cốt lõi là phòng ngừa: Chọn giống kháng bệnh, nhổ bỏ tiêu hủy cây bệnh sớm và phun thuốc tiêu diệt côn trùng vector truyền bệnh (rầy, bọ phấn)."
    }
  ]
};

export default EXTRA_BAI_17;
