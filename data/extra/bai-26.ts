import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 26
export const EXTRA_BAI_26: LessonExtra = {
  tf: [
    {
        "id": "b26-tf1",
        "context": "Tác động tiêu cực của hóa chất nông nghiệp đến môi trường:",
        "statements": [
            {
                "text": "Lạm dụng phân bón hóa học liên tục làm đất chai cứng, chua hóa và suy giảm hệ vi sinh vật có ích.",
                "answer": true,
                "explain": "Đúng. Phá vỡ kết cấu viên đất và tiêu diệt trùn đất, vi sinh vật đất."
            },
            {
                "text": "Hiện tượng phú dưỡng ao hồ do dư lượng đạm lân bị rửa trôi kích thích tảo độc bùng phát làm chết cá.",
                "answer": true,
                "explain": "Đúng. Tảo nở hoa làm cạn kiệt nguồn oxy hòa tan trong nước."
            },
            {
                "text": "Thuốc bảo vệ thực vật hóa học chỉ tiêu diệt duy nhất sâu hại, hoàn toàn không làm chết các loài thiên địch.",
                "answer": false,
                "explain": "Sai. Thuốc hóa học phổ rộng tiêu diệt sạch cả ong ký sinh, bọ rùa và nhện bắt mồi."
            },
            {
                "text": "Bao bì thuốc BVTV vứt bừa bãi sau sử dụng gây ô nhiễm nghiêm trọng nguồn nước và môi trường sống.",
                "answer": true,
                "explain": "Đúng. Rác thải độc hại nguy hiểm đe dọa trực tiếp sức khỏe cộng đồng."
            }
        ]
    },
    {
        "id": "b26-tf2",
        "context": "Ô nhiễm do đốt rơm rạ và phát thải khí nhà kính:",
        "statements": [
            {
                "text": "Đốt rơm rạ lộ thiên trên đồng sinh ra lượng lớn bụi mịn PM2.5 và CO2 gây ô nhiễm không khí nặng nề.",
                "answer": true,
                "explain": "Đúng. Làm suy giảm chất lượng không khí và tăng hiệu ứng nhà kính."
            },
            {
                "text": "Ruộng lúa ngập nước yếm khí liên tục phát thải lượng lớn khí Methane (CH4) gây biến đổi khí hậu.",
                "answer": true,
                "explain": "Đúng. Methane có tiềm năng gây nóng lên toàn cầu cao gấp 28 lần CO2."
            },
            {
                "text": "Kỹ thuật 'Tưới ngập khô xen kẽ' (AWD) giúp giảm phát thải khí nhà kính từ 30-50% trên ruộng lúa.",
                "answer": true,
                "explain": "Đúng. Phơi ruộng xen kẽ đưa oxy ức chế vi khuẩn sinh methane."
            },
            {
                "text": "Đốt rơm rạ trực tiếp trên đồng ruộng là giải pháp tốt nhất giúp đất màu mỡ và giữ ẩm đất hoàn hảo.",
                "answer": false,
                "explain": "Sai. Nhiệt độ lửa thiêu đốt chết sạch hệ vi sinh vật tầng mặt và làm chai cứng đất."
            }
        ]
    },
    {
        "id": "b26-tf3",
        "context": "Bảo vệ đất đồi dốc và nông nghiệp tuần hoàn:",
        "statements": [
            {
                "text": "Canh tác xuôi sườn đồi dốc mà không có biện pháp che phủ làm đất bị xói mòn rửa trôi nghiêm trọng.",
                "answer": true,
                "explain": "Đúng. Mưa lũ cuốn trôi sạch tầng đất mặt màu mỡ."
            },
            {
                "text": "Trồng băng cỏ Vetiver theo đường đồng mức giúp giữ đất, chống xói mòn sạt lở đồi dốc rất hiệu quả.",
                "answer": true,
                "explain": "Đúng. Bộ rễ sâu dày đặc của cỏ Vetiver đóng vai trò như đê sinh học."
            },
            {
                "text": "Nông nghiệp tuần hoàn coi phế phụ phẩm của trồng trọt là rác thải vô giá trị bắt buộc phải vứt bỏ.",
                "answer": false,
                "explain": "Sai. Nông nghiệp tuần hoàn coi phế phụ phẩm là nguồn tài nguyên tái chế hữu ích."
            },
            {
                "text": "Ủ rơm rạ, thân ngô làm phân hữu cơ compost là giải pháp tuần hoàn dinh dưỡng bảo vệ đất bền vững.",
                "answer": true,
                "explain": "Đúng. Trả lại chất hữu cơ cho đất và chấm dứt nạn đốt rơm rạ khói bụi."
            }
        ]
    },
    {
        "id": "b26-tf4",
        "context": "Hành động bảo vệ môi trường nông thôn tại Cao Bằng:",
        "statements": [
            {
                "text": "Thu gom vỏ bao bì thuốc bảo vệ thực vật vào các bể chứa chuyên dụng giúp bảo vệ nguồn nước đầu nguồn.",
                "answer": true,
                "explain": "Đúng. Tránh rò rỉ hóa chất độc hại vào sông suối vùng cao."
            },
            {
                "text": "Trồng cây phân xanh họ Đậu giúp cố định đạm tự nhiên và che phủ cải tạo đất đồi dốc cằn cỗi.",
                "answer": true,
                "explain": "Đúng. Cung cấp đạm sinh học và chống rửa trôi đất hiệu quả."
            },
            {
                "text": "Nên dùng nước thải sinh hoạt chưa qua xử lý để tưới trực tiếp cho các luống rau ăn sống để tiết kiệm nước.",
                "answer": false,
                "explain": "Sai. Nước thải bẩn chứa nhiều vi khuẩn gây bệnh đường ruột và ký sinh trùng nguy hiểm."
            },
            {
                "text": "Học sinh THPT Phục Hòa có thể tích cực tham gia phong trào 'Nói không với túi nilon và rác thải nhựa nông nghiệp'.",
                "answer": true,
                "explain": "Đúng. Lan tỏa lối sống xanh và ý thức trách nhiệm cộng đồng."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b26-sa1",
        "q": "Hiện tượng ao hồ kênh mương bị ô nhiễm nghiêm trọng do dư lượng đạm và lân từ phân bón chảy xuống làm bùng phát tảo độc chết cá được gọi là hiện tượng gì?",
        "unit": "Tên hiện tượng",
        "correctAnswers": [
            "Phú dưỡng",
            "phú dưỡng",
            "Hiện tượng phú dưỡng"
        ],
        "explain": "Phú dưỡng (Eutrophication) là hậu quả của sự dư thừa dưỡng chất khoáng trong môi trường nước."
    },
    {
        "id": "b26-sa2",
        "q": "Loại khí nhà kính nguy hại phát thải chủ yếu từ quá trình phân hủy yếm khí rơm rạ trên ruộng lúa ngập nước liên tục có công thức hóa học là gì?",
        "unit": "Công thức khí",
        "correctAnswers": [
            "CH4",
            "ch4",
            "Methane",
            "methane",
            "Metan",
            "metan"
        ],
        "explain": "Khí Methane (CH4) phát sinh mạnh mẽ trong điều kiện yếm khí ruộng lúa nước."
    },
    {
        "id": "b26-sa3",
        "q": "Tên loài cỏ có bộ rễ đồ sộ ăn sâu hàng mét được trồng thành các băng chắn theo đường đồng mức để chống xói mòn sạt lở đất đồi dốc là cỏ gì?",
        "unit": "Tên loài cỏ",
        "correctAnswers": [
            "Vetiver",
            "vetiver",
            "Cỏ Vetiver",
            "cỏ vetiver"
        ],
        "explain": "Cỏ Vetiver là giải pháp công nghệ sinh học hàng đầu thế giới trong gia cố đất dốc."
    },
    {
        "id": "b26-sa4",
        "q": "Mô hình sản xuất nông nghiệp khép kín, trong đó phế phụ phẩm của quy trình này được tái chế làm nguyên liệu đầu vào cho quy trình khác được gọi là nông nghiệp gì?",
        "unit": "Mô hình nông nghiệp",
        "correctAnswers": [
            "Tuần hoàn",
            "tuần hoàn",
            "Nông nghiệp tuần hoàn",
            "nông nghiệp tuần hoàn"
        ],
        "explain": "Nông nghiệp tuần hoàn (Circular Agriculture) tái chế 100% phế phẩm, hướng tới không rác thải."
    }
  ],
  essay: [
    {
        "id": "bai-26-essay1",
        "q": "Phân tích 3 tác hại tiêu cực điển hình của việc lạm dụng phân bón hóa học và thuốc bảo vệ thực vật đối với môi trường sinh thái nông nghiệp.",
        "answer": "1. Làm suy thoái và ô nhiễm đất trồng trọt:\n- Lạm dụng phân bón hóa học vô cơ (nhất là phân đạm và sunfat) làm đất bị chua hóa mạnh mẽ, đất bị chai cứng, phá hủy kết cấu viên đất tơi xốp, làm nghẹt rễ cây trồng.\n- Tiêu diệt các vi sinh vật có ích và trùn đất, làm mất cân bằng sinh học đất; phân bón dư thừa làm tích tụ các kim loại nặng độc hại (chì, cadimi, asen) từ quặng phân bón.\n2. Gây ô nhiễm nguồn nước mặt và nước ngầm (hiện tượng phú dưỡng):\n- Lượng phân đạm (N) và lân (P) dư thừa không được cây hấp thụ sẽ bị nước mưa rửa trôi xuống sông ngòi ao hồ, gây ra hiện tượng phú dưỡng (Eutrophication).\n- Tảo độc bùng phát nở hoa làm cạn kiệt oxy hòa tan, cá tôm và sinh vật thủy sinh chết ngạt hàng loạt; ion nitrat ngấm xuống tầng nước ngầm đe dọa trực tiếp nguồn nước giếng sinh hoạt của người dân.\n3. Tiêu diệt thiên địch, bùng phát dịch hại kháng thuốc và ô nhiễm thực phẩm:\n- Thuốc trừ sâu hóa học phổ rộng tiêu diệt sạch các loài thiên địch có ích (ong ký sinh, bọ rùa, nhện bắt mồi), phá vỡ cân bằng sinh thái tự nhiên khiến sâu hại nhanh chóng bùng phát thành đại dịch thứ cấp.\n- Tạo áp lực chọn lọc khiến các loài sâu hại nhanh chóng hình thành tính kháng thuốc; tồn dư thuốc BVTV độc hại trên nông sản gây ngộ độc mãn tính cho người tiêu dùng."
    },
    {
        "id": "bai-26-essay2",
        "q": "Đề xuất 4 giải pháp thiết thực để xây dựng nền nông nghiệp tuần hoàn, bảo vệ môi trường và giảm phát thải khí nhà kính tại tỉnh Cao Bằng.",
        "answer": "1. Quản lý và tái chế phụ phẩm cây trồng:\n- Tuyệt đối không đốt rơm rạ, thân ngô ngoài đồng; tận dụng rơm rạ để trồng nấm rơm, làm đệm lót sinh học chăn nuôi và ủ cùng phân chuồng bằng nấm đối kháng Trichoderma tạo phân hữu cơ vi sinh bón lại cho đất.\n2. Bảo vệ đất đồi dốc chống xói mòn rửa trôi:\n- Quy hoạch canh tác theo đường đồng mức, xây dựng hệ thống bậc thang; trồng xen các băng cây cỏ Vetiver, cây họ Đậu che phủ đất giữ ẩm và chống rửa trôi dinh dưỡng trong mùa mưa lũ.\n3. Áp dụng kỹ thuật canh tác lúa giảm phát thải:\n- Triển khai kỹ thuật tưới ngập khô xen kẽ (AWD) trên các cánh đồng lúa nước để cắt đứt chu trình sinh khí Methane (CH4), vừa tiết kiệm nước vừa giảm phát thải khí nhà kính.\n4. Thu gom xử lý bao bì thuốc BVTV và nhân rộng mô hình sinh thái:\n- Xây dựng các bể xi măng có nắp đậy thu gom bao bì thuốc BVTV trên các cánh đồng, chuyển cơ quan chuyên môn tiêu hủy theo chuẩn chất thải nguy hại.\n- Nhân rộng mô hình IPM 'Ruộng lúa bờ hoa', ưu tiên dùng thuốc sinh học (Bt, nấm xanh, nấm trắng) bảo vệ sức khỏe cộng đồng và thiên nhiên vùng cao."
    }
  ]
};

export default EXTRA_BAI_26;
