import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 28
export const EXTRA_BAI_28: LessonExtra = {
  tf: [
    {
        "id": "b28-tf1",
        "context": "Chuẩn bị nguyên liệu và quy trình ủ rơm rạ:",
        "statements": [
            {
                "text": "Rơm rạ trồng nấm rơm cần khô ráo, vàng óng, không bị ẩm mốc đen và không dính thuốc trừ sâu.",
                "answer": true,
                "explain": "Đúng. Nguyên liệu sạch bệnh quyết định tỷ lệ phát triển của tơ nấm."
            },
            {
                "text": "Ngâm rơm trong nước vôi 1% giúp sát trùng nấm dại, tẩy phèn và làm mềm cấu trúc sợi rơm.",
                "answer": true,
                "explain": "Đúng. Môi trường kiềm nhẹ hỗ trợ phá vỡ một phần liên kết lignin bao bọc cellulose."
            },
            {
                "text": "Chỉ cần ngâm rơm trong nước lạnh 5 phút là có thể đem ra cấy meo giống nấm ngay lập tức.",
                "answer": false,
                "explain": "Sai. Bắt buộc phải ủ đống từ 6-8 ngày cho rơm chín mềm và đồng nhất độ ẩm."
            },
            {
                "text": "Độ ẩm rơm sau khi ủ đạt chuẩn là 65-70% (vắt rơm nước rịn qua kẽ ngón tay nhỏ vài giọt).",
                "answer": true,
                "explain": "Đúng. Độ ẩm bão hòa lý tưởng cho sợi tơ nấm hô hấp và phát triển."
            }
        ]
    },
    {
        "id": "b28-tf2",
        "context": "Kỹ thuật đóng mô và cấy meo giống nấm rơm:",
        "statements": [
            {
                "text": "Meo giống nấm rơm đạt chuẩn có sợi tơ nấm màu trắng tinh phát triển đều khắp bịch meo, thơm mùi nấm.",
                "answer": true,
                "explain": "Đúng. Không có đốm nấm mốc xanh đen hay dịch chua thối."
            },
            {
                "text": "Mô nấm rơm tiêu chuẩn thường được xếp thành 3 lớp rơm và cấy 2-3 lớp meo giống cách mép mô 4-5 cm.",
                "answer": true,
                "explain": "Đúng. Cấy cách mép mô giúp meo giống giữ ẩm và đón oxy phát triển ra bề mặt."
            },
            {
                "text": "Phủ lớp rơm áo dày 5-10 cm lên trên mô nấm giúp giữ ấm, giữ ẩm và che bớt ánh sáng trực tiếp.",
                "answer": true,
                "explain": "Đúng. Bảo vệ mô nấm khỏi bốc hơi nước và sốc nhiệt độ môi trường."
            },
            {
                "text": "Càng nện đất đá đè thật nặng lên mô nấm càng giúp nấm mọc nhanh và to hơn.",
                "answer": false,
                "explain": "Sai. Nén quá chặt làm mô nấm bị thiếu oxy, tơ nấm nghẹt thở và không thể hình thành quả thể."
            }
        ]
    },
    {
        "id": "b28-tf3",
        "context": "Chăm sóc và thu hái nấm rơm:",
        "statements": [
            {
                "text": "Nhiệt độ bên trong mô nấm duy trì trong khoảng 30-35 độ C là tối ưu cho tơ nấm rơm phát triển.",
                "answer": true,
                "explain": "Đúng. Nấm rơm là loài nấm ưa nhiệt nhiệt đới."
            },
            {
                "text": "Khi nấm xuất hiện các nụ nhỏ bằng hạt đậu xanh, cần dùng vòi rồng xịt nước thật mạnh vào nụ nấm.",
                "answer": false,
                "explain": "Sai. Phải tưới phun sương nhẹ nhàng, tia nước mạnh sẽ làm dập thối nụ nấm non."
            },
            {
                "text": "Thu hái nấm rơm ở giai đoạn nấm búp (quả thể tròn chắc như quả trứng) cho giá trị kinh tế và dinh dưỡng cao nhất.",
                "answer": true,
                "explain": "Đúng. Nấm búp giòn ngọt, giàu đạm và được thị trường thu mua giá cao nhất."
            },
            {
                "text": "Khi hái nấm, xoay nhẹ dứt khoát nhặt cả chân nấm, tránh để mẩu chân nấm thối làm hỏng các nụ non bên cạnh.",
                "answer": true,
                "explain": "Đúng. Giữ vệ sinh mô nấm cho các đợt nấm tiếp theo phát triển."
            }
        ]
    },
    {
        "id": "b28-tf4",
        "context": "Ý nghĩa thực tiễn của mô hình trồng nấm rơm tại huyện Quảng Hòa, Cao Bằng:",
        "statements": [
            {
                "text": "Tận dụng rơm rạ sau vụ gặt lúa giúp chấm dứt nạn đốt rơm rạ gây khói bụi ô nhiễm môi trường.",
                "answer": true,
                "explain": "Đúng. Biến phụ phẩm nông nghiệp thành nguồn thu nhập kinh tế thiết thực."
            },
            {
                "text": "Bã rơm mục sau khi thu hoạch hết nấm rơm có thể dùng làm phân bón hữu cơ sinh học tuyệt hảo cho cây trồng.",
                "answer": true,
                "explain": "Đúng. Mô hình kinh tế tuần hoàn khép kín không rác thải."
            },
            {
                "text": "Nấm rơm là thực phẩm giàu đạm thực vật, axit amin thiết yếu và không chứa cholesterol, rất tốt cho sức khỏe.",
                "answer": true,
                "explain": "Đúng. Nguồn thực phẩm sạch bổ dưỡng cho bữa ăn gia đình."
            },
            {
                "text": "Dự án thực hành trồng nấm rơm không rèn luyện được kỹ năng nghề nghiệp hay tư duy tài chính cho học sinh.",
                "answer": false,
                "explain": "Sai. Dự án rèn luyện kỹ năng thực hành sinh học, tính toán chi phí, doanh thu và tinh thần khởi nghiệp nông nghiệp."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b28-sa1",
        "q": "Dung dịch nước vôi tôi (Ca(OH)2) dùng để ngâm khử trùng và làm mềm rơm rạ trước khi ủ nấm rơm thường được pha ở nồng độ khoảng bao nhiêu phần trăm?",
        "unit": "Phần trăm (%)",
        "correctAnswers": [
            "1%",
            "1",
            "1 %",
            "khoảng 1%"
        ],
        "explain": "Nước vôi nồng độ 1% (khoảng 1 kg vôi hòa 100 lít nước) là nồng độ chuẩn sát khuẩn rơm rạ."
    },
    {
        "id": "b28-sa2",
        "q": "Túi cơ chất nhân giống chứa hệ sợi tơ nấm rơm sinh trưởng khỏe mạnh dùng để cấy vào mô rơm rạ được bà con nông dân gọi là gì?",
        "unit": "Thuật ngữ",
        "correctAnswers": [
            "Meo giống",
            "meo giống",
            "Meo nấm",
            "meo nấm",
            "Giống nấm"
        ],
        "explain": "Meo giống nấm rơm (meo cấy) là nguồn giống khởi đầu cấy vào các lớp mô rơm."
    },
    {
        "id": "b28-sa3",
        "q": "Giai đoạn hình thái của quả thể nấm rơm (tròn trịa chắc thịt hình quả trứng, bao gốc chưa nứt rách) cho chất lượng dinh dưỡng ngon nhất được gọi là giai đoạn nấm gì?",
        "unit": "Giai đoạn",
        "correctAnswers": [
            "Nấm búp",
            "nấm búp",
            "Búp",
            "búp"
        ],
        "explain": "Nấm búp tròn chắc thịt, không bị nhũn, hương vị ngọt đậm đà và có giá bán cao nhất."
    },
    {
        "id": "b28-sa4",
        "q": "Khoảng nhiệt độ tối ưu bên trong mô nấm rơm (từ bao nhiêu đến bao nhiêu độ C) giúp sợi tơ nấm rơm phát triển nhanh và khỏe mạnh nhất?",
        "unit": "Độ C",
        "correctAnswers": [
            "30-35",
            "30-35°C",
            "30 - 35",
            "30 đến 35",
            "30 - 35°C"
        ],
        "explain": "Nhiệt độ 30-35°C kích thích tơ nấm rơm phân nhánh lan tỏa khắp mô rơm rạ."
    }
  ],
  essay: [
    {
        "id": "bai-28-essay1",
        "q": "Trình bày quy trình 5 bước kỹ thuật trồng nấm rơm bằng rơm rạ (từ khâu xử lý rơm đến khâu thu hoạch).",
        "answer": "1. Bước 1: Xử lý và ngâm rơm rạ:\n- Chọn rơm rạ khô ráo, không mốc đen. Hòa nước vôi nồng độ 1% (1kg vôi tôi / 100 lít nước); ngâm ngập rơm rạ trong nước vôi từ 15-30 phút để tẩy phèn sát khuẩn rồi vớt ra để ráo.\n2. Bước 2: Ủ đống rơm rạ:\n- Chất rơm thành đống ủ cao 1.2 - 1.5m trên nền cao ráo; sau 3-4 ngày tiến hành đảo rơm (đưa rơm ngoài vào trong, rơm trong ra ngoài) và chỉnh độ ẩm đạt 65-70%; tiếp tục ủ thêm 3-4 ngày cho rơm chín mềm thơm mùi vôi.\n3. Bước 3: Đóng mô và cấy meo giống:\n- Chọn bãi đất sạch râm mát hoặc nhà trồng nấm; dùng khuôn định hình đóng mô hình thang cân (đáy 35-40cm, cao 30-35cm).\n- Trải một lớp rơm dày 10-12cm nén nhẹ, rải một lớp meo giống cách mép mô 4-5cm; tiếp tục làm lớp thứ 2 và thứ 3 tương tự; trên cùng phủ lớp rơm mỏng không cấy meo; phủ lớp rơm áo dày 5-10cm che kín mô nấm.\n4. Bước 4: Chăm sóc và tưới ẩm:\n- Sau 4-5 ngày kiểm tra tơ nấm ăn trắng đều mô rơm; duy trì nhiệt độ mô 30-35°C. Khi nấm kết nụ hạt đậu (ngày 8-10), tưới phun sương nhẹ nhàng hạt nước mịn giữ ẩm mát.\n5. Bước 5: Thu hoạch nấm rơm:\n- Sau 10-14 ngày, thu hái nấm ở giai đoạn nấm búp (quả trứng tròn chắc) vào sáng sớm; xoay nhẹ nhấc cả gốc nấm; dọn vệ sinh chân nấm thối để chăm sóc đón lứa nấm đợt 2."
    },
    {
        "id": "bai-28-essay2",
        "q": "Phân tích ý nghĩa kinh tế, xã hội và bảo vệ môi trường của mô hình tận dụng rơm rạ trồng nấm rơm tại các vùng nông thôn như huyện Phục Hòa (Cao Bằng).",
        "answer": "1. Ý nghĩa kinh tế:\n- Tận dụng nguồn phế phụ phẩm rơm rạ dồi dào sau vụ gặt lúa hoàn toàn miễn phí hoặc giá rất rẻ.\n- Chu kỳ thu hoạch cực nhanh (chỉ từ 12-15 ngày là có sản phẩm), tạo nguồn thu nhập bổ sung đáng kể cho nông dân trong mùa nông nhàn (bán nấm rơm tươi từ 70.000 - 100.000 đ/kg).\n- Bã rơm mục sau khi hái nấm tiếp tục được tận dụng làm nguồn phân bón hữu cơ vi sinh tuyệt hảo bón lót cải tạo đất, tiết kiệm chi phí mua phân hóa học.\n2. Ý nghĩa bảo vệ môi trường:\n- Chấm dứt triệt để nạn đốt rơm rạ lộ thiên trên đồng ruộng, loại bỏ nguồn phát thải bụi mịn PM2.5 và khí CO2 gây hiệu ứng nhà kính và ô nhiễm không khí nông thôn.\n- Không vứt rơm rạ xuống mương máng gây tắc nghẽn dòng chảy và ngập úng mùa mưa bão.\n3. Ý nghĩa xã hội:\n- Cung cấp nguồn thực phẩm sạch, an toàn, giàu protein thực vật, axit amin thiết yếu và không cholesterol cho bữa ăn gia đình và phục vụ nhu cầu ẩm thực của địa phương.\n- Tạo thêm công ăn việc làm tại chỗ cho người già, phụ nữ và thanh thiếu niên nông thôn; rèn luyện tư duy kinh tế tuần hoàn và kỹ năng khởi nghiệp nông nghiệp sinh thái."
    }
  ]
};

export default EXTRA_BAI_28;
