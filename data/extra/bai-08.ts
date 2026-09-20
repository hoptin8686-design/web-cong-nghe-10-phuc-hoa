import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 8
export const EXTRA_BAI_08: LessonExtra = {
  tf: [
    {
        "id": "b8-tf1",
        "context": "Về nguyên tắc 4 đúng trong sử dụng phân bón cây trồng:",
        "statements": [
            {
                "text": "Nguyên tắc 4 đúng gồm: Đúng loại, đúng liều lượng, đúng thời điểm, đúng phương pháp.",
                "answer": true,
                "explain": "Đúng. Đây là quy tắc cốt lõi giúp tối ưu hiệu quả phân bón."
            },
            {
                "text": "Càng bón phân với liều lượng cực lớn thì năng suất cây trồng càng tăng vô hạn.",
                "answer": false,
                "explain": "Sai. Bón thừa phân gây cháy lá, ngộ độc rễ và ô nhiễm môi trường."
            },
            {
                "text": "Bón đúng thời điểm là bón đúng vào những giai đoạn cây cần nhiều dinh dưỡng nhất.",
                "answer": true,
                "explain": "Đúng. Đúng chu kỳ sinh trưởng giúp phân phát huy hiệu lực cao nhất."
            },
            {
                "text": "Có thể bón bất kỳ loại phân bón nào lên lá thay thế hoàn toàn việc bón vào đất.",
                "answer": false,
                "explain": "Sai. Phân bón lá chỉ đóng vai trò bổ sung vi lượng, không thể thay thế phân bón gốc đa lượng."
            }
        ]
    },
    {
        "id": "b8-tf2",
        "context": "Về kỹ thuật bón lót và bón thúc trong nông nghiệp:",
        "statements": [
            {
                "text": "Bón lót là bón trước khi gieo trồng nhằm tạo lớp đệm dinh dưỡng cho rễ non phát triển.",
                "answer": true,
                "explain": "Đúng. Bón lót cải tạo đất và nuôi cây giai đoạn đầu."
            },
            {
                "text": "Phân đạm urê là loại phân thích hợp nhất để dùng bón lót toàn bộ 100% trước khi trồng.",
                "answer": false,
                "explain": "Sai. Đạm tan nhanh dễ bị rửa trôi, chỉ bón lót một lượng nhỏ hoặc dùng phân hữu cơ, lân."
            },
            {
                "text": "Bón thúc thường dùng các loại phân dễ tan như đạm, kali, NPK chuyên dùng.",
                "answer": true,
                "explain": "Đúng. Cây cần hấp thu nhanh để nuôi cành nhánh, mầm hoa, nuôi trái."
            },
            {
                "text": "Đối với cây ăn quả, phân bón nên được bón theo hình chiếu tán lá cây.",
                "answer": true,
                "explain": "Đúng. Đầu rễ tơ hút dinh dưỡng tập trung nhiều nhất ở mép tán."
            }
        ]
    },
    {
        "id": "b8-tf3",
        "context": "Quy trình bảo quản phân bón an toàn và hiệu quả:",
        "statements": [
            {
                "text": "Phân đạm urê rất dễ hút ẩm và chảy rữa nên cần được đựng trong bao kín, kê cao trên kệ.",
                "answer": true,
                "explain": "Đúng. Tránh tiếp xúc không khí ẩm và nền đất ẩm ướt."
            },
            {
                "text": "Có thể trộn lẫn phân đạm urê với vôi bột rồi cất giữ trong kho nhiều tháng.",
                "answer": false,
                "explain": "Sai. Vôi phản ứng với đạm giải phóng khí amoniac làm mất đạm hoàn toàn."
            },
            {
                "text": "Phân vi sinh vật cần được bảo quản nơi râm mát, tránh ánh nắng trực tiếp chiếu vào.",
                "answer": true,
                "explain": "Đúng. Ánh nắng và nhiệt độ cao làm chết các chủng vi sinh vật có ích."
            },
            {
                "text": "Phân đạm amoni nitrat cần để xa các nguồn nhiệt và tia lửa điện để phòng tránh cháy nổ.",
                "answer": true,
                "explain": "Đúng. Hóa chất này có đặc tính oxy hóa mạnh, nguy cơ cháy nổ cao."
            }
        ]
    },
    {
        "id": "b8-tf4",
        "context": "Liên hệ thực hành sử dụng phân bón an toàn tại địa phương:",
        "statements": [
            {
                "text": "Cần tuân thủ thời gian cách ly phân bón từ 7-10 ngày trước khi thu hái rau ăn lá.",
                "answer": true,
                "explain": "Đúng. Giảm thiểu dư lượng nitrat bảo vệ sức khỏe người tiêu dùng."
            },
            {
                "text": "Bón phân vào buổi trưa nắng to giúp cây hấp thu phân nhanh gấp đôi buổi sáng sớm.",
                "answer": false,
                "explain": "Sai. Nắng to làm bay hơi đạm, cháy lá và gây stress nhiệt cho rễ."
            },
            {
                "text": "Ở đất dốc đồi núi, bón phân cần kết hợp xới rãnh lấp đất để chống xói mòn trôi phân khi mưa.",
                "answer": true,
                "explain": "Đúng. Hạn chế tối đa thất thoát phân bón theo dòng nước dốc."
            },
            {
                "text": "Ủ phân hữu cơ hiếu khí đạt nhiệt độ 60°C có tác dụng tiêu diệt mầm sâu bệnh và cỏ dại.",
                "answer": true,
                "explain": "Đúng. Nhiệt sinh học thanh trùng tự nhiên nguồn phân chuồng rác."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b08-sa1",
        "q": "Nguyên tắc sử dụng phân bón an toàn, hiệu quả và bảo vệ môi trường gồm 4 tiêu chí cốt lõi thường được gọi ngắn gọn là nguyên tắc gì?",
        "unit": "Tên nguyên tắc",
        "correctAnswers": [
            "4 đúng",
            "Bốn đúng",
            "bốn đúng",
            "Nguyên tắc 4 đúng",
            "nguyên tắc 4 đúng"
        ],
        "explain": "Nguyên tắc 4 đúng bao gồm: Đúng loại, đúng liều lượng, đúng thời điểm, đúng phương pháp."
    },
    {
        "id": "b08-sa2",
        "q": "Hình thức bón phân vào đất trước khi tiến hành gieo hạt hoặc cấy cây giống nhằm cung cấp dưỡng chất ban đầu được gọi là bón gì?",
        "unit": "Hình thức bón",
        "correctAnswers": [
            "Bón lót",
            "bón lót"
        ],
        "explain": "Bón lót cung cấp dinh dưỡng nền tảng và cải tạo cấu trúc tầng đất mặt cho cây con."
    },
    {
        "id": "b08-sa3",
        "q": "Thời gian tối thiểu ngừng bón phân hóa học trước khi thu hoạch nông sản để đảm bảo an toàn thực phẩm được gọi là thời gian gì?",
        "unit": "Thuật ngữ",
        "correctAnswers": [
            "Thời gian cách ly",
            "thời gian cách ly"
        ],
        "explain": "Thời gian cách ly (PHI) giúp cây chuyển hóa hết nitrat và chất hóa học tồn dư."
    },
    {
        "id": "b08-sa4",
        "q": "Hiện tượng vật lý bất lợi nào xảy ra với phân đạm urê khi để hở bao bì trong điều kiện không khí ẩm ướt lâu ngày?",
        "unit": "Hiện tượng",
        "correctAnswers": [
            "Hút ẩm",
            "hút ẩm",
            "Chảy rữa",
            "chảy rữa",
            "Vón cục",
            "chảy nước"
        ],
        "explain": "Phân đạm có tính háo nước cao, khi tiếp xúc không khí ẩm sẽ hút nước, chảy rữa và vón cục."
    }
  ],
  essay: [
    {
        "id": "bai-08-essay1",
        "q": "Trình bày nội dung và ý nghĩa của nguyên tắc '4 đúng' trong việc bón phân cho cây trồng.",
        "answer": "1. Đúng loại: Chọn phân phù hợp nhu cầu của loài cây, giai đoạn sinh trưởng và tính chất đất.\n2. Đúng liều lượng: Bón đủ theo nhu cầu dinh dưỡng cây cần, không bón thiếu làm giảm năng suất, không bón thừa gây độc hại lãng phí.\n3. Đúng thời điểm: Bón vào các giai đoạn cây cần nhiều dinh dưỡng (bén rễ, đẻ nhánh, trổ hoa, nuôi quả) và bón vào lúc thời tiết mát mẻ.\n4. Đúng phương pháp: Bón đúng vị trí rễ hút (vành tán), vùi lấp phân tránh bốc hơi, hòa tưới hoặc phun qua lá thích hợp.\n-> Ý nghĩa: Tối ưu năng suất cây trồng, tiết kiệm chi phí sản xuất, ngăn ngừa ô nhiễm đất, nguồn nước và bảo đảm nông sản an toàn."
    },
    {
        "id": "bai-08-essay2",
        "q": "Tại sao không được trộn chung phân đạm có gốc amoni với vôi bột hoặc tro bếp trong bảo quản và sử dụng?",
        "answer": "Vì vôi bột (Ca(OH)2) và tro bếp (chứa K2CO3) có tính kiềm mạnh. Khi tiếp xúc với phân đạm amoni (chứa ion NH4+), phản ứng hóa học xảy ra giải phóng khí amoniac (NH3) bay hơi vào không khí:\nNH4+ + OH- -> NH3 (khí bay hơi) + H2O\nKết quả làm mất sạch toàn bộ lượng đạm dinh dưỡng trong phân bón, gây lãng phí kinh tế trầm trọng."
    }
  ]
};

export default EXTRA_BAI_08;
