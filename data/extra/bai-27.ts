import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 27
export const EXTRA_BAI_27: LessonExtra = {
  tf: [
    {
        "id": "b27-tf1",
        "context": "Quy trình công nghệ ủ phân hữu cơ compost:",
        "statements": [
            {
                "text": "Ủ phân compost là quá trình sử dụng vi sinh vật phân giải các phế phụ phẩm hữu cơ thành mùn dinh dưỡng.",
                "answer": true,
                "explain": "Đúng. Biến rác thải nông nghiệp thành nguồn phân bón hữu cơ giá trị cao."
            },
            {
                "text": "Bổ sung chế phẩm nấm đối kháng Trichoderma giúp rút ngắn thời gian ủ và tiêu diệt mầm nấm bệnh trong phân.",
                "answer": true,
                "explain": "Đúng. Enzyme cellulase phân giải nhanh và ức chế nấm gây hại rễ."
            },
            {
                "text": "Độ ẩm tối ưu của đống ủ phân compost cần duy trì trong khoảng từ 50% đến 60%.",
                "answer": true,
                "explain": "Đúng. Đảm bảo độ ẩm cho vi sinh vật hoạt động mà không bị yếm khí ngập sũng."
            },
            {
                "text": "Trong suốt quá trình ủ, tuyệt đối không được đảo trộn đống ủ để giữ cho đống ủ hoàn toàn yên tĩnh.",
                "answer": false,
                "explain": "Sai. Bắt buộc phải đảo trộn định kỳ để cung cấp oxy cho vi sinh vật hiếu khí hoạt động."
            }
        ]
    },
    {
        "id": "b27-tf2",
        "context": "Ứng dụng chế phẩm EM và xử lý mùi hôi chuồng trại:",
        "statements": [
            {
                "text": "Chế phẩm EM chứa tập hợp nhiều chủng vi sinh vật có ích sống cộng sinh (vi khuẩn lactic, nấm men, vi khuẩn quang dưỡng).",
                "answer": true,
                "explain": "Đúng. Tác động đa chức năng xử lý môi trường hiệu quả cao."
            },
            {
                "text": "Phun dung dịch EM thứ cấp (EM2) vào chuồng trại giúp khử sạch mùi hôi thối do khí H2S và NH3 sinh ra.",
                "answer": true,
                "explain": "Đúng. Đồng thời ức chế ruồi muỗi và vi khuẩn gây bệnh phát triển."
            },
            {
                "text": "Chế phẩm vi sinh xử lý rơm rạ trực tiếp trên ruộng lúa giúp ngăn ngừa hiện tượng nghẹt rễ ngộ độc hữu cơ.",
                "answer": true,
                "explain": "Đúng. Phân giải rơm rạ nhanh chóng trước khi cấy lúa con vụ mới."
            },
            {
                "text": "Hầm Biogas tạo ra khí Methane chỉ để xả bỏ tự do ra ngoài không khí cho mát mẻ.",
                "answer": false,
                "explain": "Sai. Khí Methane được thu gom làm nhiên liệu khí đốt đun nấu sạch sẽ cho gia đình."
            }
        ]
    },
    {
        "id": "b27-tf3",
        "context": "Đặc điểm nhận biết phân compost hoai mục và tỷ lệ C/N:",
        "statements": [
            {
                "text": "Nhiệt độ đống ủ hiếu khí có thể đạt 55-65 độ C giúp tiêu diệt hạt cỏ dại và mầm sâu bệnh.",
                "answer": true,
                "explain": "Đúng. Quá trình sinh nhiệt sinh học thanh trùng tự nhiên nguồn phân."
            },
            {
                "text": "Phân compost hoai mục hoàn toàn có màu nâu đen, tơi xốp vụn mịn và có mùi đất ẩm dễ chịu.",
                "answer": true,
                "explain": "Đúng. Không còn mùi hôi thối khó chịu của chất thải ban đầu."
            },
            {
                "text": "Tỷ lệ C/N lý tưởng cho vi sinh vật phân giải đống ủ compost là khoảng 25:1 đến 30:1.",
                "answer": true,
                "explain": "Đúng. Cân đối nguồn năng lượng và vật liệu sinh khối."
            },
            {
                "text": "Đệm lót sinh học trong chăn nuôi lợn gà làm tăng lượng nước thải và mùi hôi thối gấp nhiều lần.",
                "answer": false,
                "explain": "Sai. Đệm lót sinh học hấp thụ và tiêu phân hoàn toàn không cần rửa chuồng, khử sạch mùi hôi."
            }
        ]
    },
    {
        "id": "b27-tf4",
        "context": "Vận dụng công nghệ vi sinh xử lý chất thải tại Cao Bằng:",
        "statements": [
            {
                "text": "Tận dụng bã dong riềng tại Nguyên Bình để ủ phân compost giúp giảm ô nhiễm khe suối và cải tạo đất nương rẫy.",
                "answer": true,
                "explain": "Đúng. Giải quyết bài toán môi trường làng nghề chế biến miến dong."
            },
            {
                "text": "Công nghệ xử lý sinh học (Bioremediation) sử dụng vi sinh vật khoáng hóa dư lượng thuốc BVTV trong đất.",
                "answer": true,
                "explain": "Đúng. Tái tạo môi trường đất sạch an toàn sinh học."
            },
            {
                "text": "Nước thải sau hầm Biogas hoàn toàn không chứa chất dinh dưỡng gì và bắt buộc phải đổ bỏ ra sông suối.",
                "answer": false,
                "explain": "Sai. Dịch thải Biogas là nguồn phân bón hữu cơ dạng lỏng rất giàu dưỡng chất tưới cây ăn quả."
            },
            {
                "text": "Tự làm enzyme rác nhà bếp (Eco-enzyme) từ vỏ rau củ quả giúp giảm rác thải sinh hoạt gia đình.",
                "answer": true,
                "explain": "Đúng. Mô hình lối sống xanh dễ thực hiện tại các hộ gia đình."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b27-sa1",
        "q": "Phương pháp ủ các phụ phẩm nông nghiệp (rơm rạ, thân ngô, phân chuồng) bằng vi sinh vật để tạo thành phân hữu cơ tơi xốp được gọi là phương pháp ủ phân gì?",
        "unit": "Tên phương pháp",
        "correctAnswers": [
            "Compost",
            "compost",
            "Ủ compost",
            "ủ compost",
            "Phân compost"
        ],
        "explain": "Ủ phân Compost là quy trình tái chế sinh học phế phẩm nông nghiệp chuẩn quốc tế."
    },
    {
        "id": "b27-sa2",
        "q": "Tên viết tắt của tập hợp các vi sinh vật hữu hiệu có ích (gồm vi khuẩn lactic, nấm men, vi khuẩn quang dưỡng) do Nhật Bản sáng chế là chế phẩm gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "EM",
            "em",
            "Chế phẩm EM",
            "chế phẩm EM"
        ],
        "explain": "Chế phẩm EM (Effective Microorganisms) ứng dụng rộng rãi trong xử lý rác và chuồng trại."
    },
    {
        "id": "b27-sa3",
        "q": "Khí sinh học tạo ra từ quá trình lên men yếm khí chất thải chăn nuôi trong hầm kín dùng để đun nấu thắp sáng có tên gọi là khí gì?",
        "unit": "Tên khí",
        "correctAnswers": [
            "Biogas",
            "biogas",
            "Khí biogas",
            "khí biogas",
            "Khí sinh học"
        ],
        "explain": "Hầm Biogas phân giải chất thải gia súc thành khí đốt sinh học bảo vệ môi trường."
    },
    {
        "id": "b27-sa4",
        "q": "Nhiệt độ tối đa (khoảng bao nhiêu độ C) sinh ra bên trong đống ủ compost hiếu khí có tác dụng tiêu diệt hạt cỏ dại và mầm nấm bệnh gây hại?",
        "unit": "Độ C",
        "correctAnswers": [
            "55-65",
            "55-65°C",
            "55 - 65",
            "60",
            "60°C",
            "55 - 65°C"
        ],
        "explain": "Nhiệt sinh học 55-65°C thanh trùng tự nhiên đống ủ phân compost."
    }
  ],
  essay: [
    {
        "id": "bai-27-essay1",
        "q": "Trình bày quy trình 4 bước ủ phân hữu cơ compost từ phế phụ phẩm rơm rạ, thân ngô kết hợp phân chuồng bằng chế phẩm vi sinh Trichoderma.",
        "answer": "1. Bước 1: Chuẩn bị nguyên liệu và mặt bằng:\n- Nguyên liệu: Rơm rạ, thân ngô băm ngắn 5-10 cm; phân chuồng hoai mục (tỷ lệ 3 phần xác thực vật : 1 phần phân chuồng); chế phẩm vi sinh Trichoderma, cám gạo và nước sạch.\n- Mặt bằng: Nền đất nện hoặc xi măng cao ráo, thoát nước tốt, có mái che mưa nắng.\n2. Bước 2: Phối trộn và tạo ẩm:\n- Rải một lớp rơm rạ thân ngô dày 20-30 cm, rải tiếp lớp phân chuồng lên trên; tưới đều dung dịch chế phẩm Trichoderma hòa nước cám gạo.\n- Tiếp tục xếp từng lớp xen kẽ cho đến khi đống ủ cao khoảng 1.2 - 1.5 mét, đường kính đáy 1.5 - 2 mét.\n- Kiểm tra độ ẩm đống ủ đạt 50-60% (nắm chặt nắm phân nước rịn qua kẽ ngón tay không nhỏ giọt).\n3. Bước 3: Che phủ và ủ nhiệt:\n- Dùng bạt che phủ đống ủ nhưng chừa chân đống ủ để thông khí; sau 3-5 ngày nhiệt độ đống ủ tăng lên 55-65°C tiêu diệt hạt cỏ dại và mầm bệnh.\n4. Bước 4: Đảo trộn và hoàn thiện sản phẩm:\n- Sau 15-20 ngày tiến hành đảo trộn đống ủ từ ngoài vào trong và bổ sung thêm nước nếu bị khô.\n- Sau 35-45 ngày, nhiệt độ đống ủ hạ về nhiệt độ môi trường, phân chuyển màu nâu đen tơi xốp, mùi đất ẩm thơm dịu là hoàn thành, đem bón lót cải tạo đất."
    },
    {
        "id": "bai-27-essay2",
        "q": "Giải thích cơ chế khử mùi hôi chuồng trại chăn nuôi của chế phẩm vi sinh vật hữu hiệu EM (Effective Microorganisms).",
        "answer": "1. Nguồn gốc mùi hôi chuồng trại: Mùi hôi thối phát sinh từ phân và nước tiểu gia súc bị các vi khuẩn hoại sinh phân giải yếm khí tạo ra các khí độc có hại như Amoniac (NH3 mùi khai), Hydro sunfua (H2S mùi trứng thối), Indol, Skatol và các amin bay hơi.\n2. Cơ chế khử mùi của chế phẩm EM:\n- Vi khuẩn Lactic (Lactobacillus): Tiết ra axit lactic làm hạ nhanh độ pH môi trường chuồng trại (pH < 4.0), tạo môi trường axit ức chế mạnh mẽ và tiêu diệt các vi khuẩn gây thối rữa và mầm bệnh (Salmonella, E.coli).\n- Vi khuẩn quang dưỡng (Rhodopseudomonas): Hấp thụ trực tiếp khí độc Hydro sunfua (H2S) và các hợp chất chứa lưu huỳnh để làm nguồn năng lượng quang hợp khử mùi thối rữa.\n- Nấm men (Saccharomyces): Lên men chuyển hóa các chất hữu cơ hòa tan thành vitamin, axit amin và cạnh tranh môi trường sống làm vi khuẩn sinh khí thối không thể phát triển.\n- Xạ khuẩn (Streptomyces): Tiết các chất kháng sinh tự nhiên ức chế vi khuẩn hoại sinh và thúc đẩy phân giải nhanh chất xơ.\n-> Kết quả: Giảm 80-90% mùi hôi chuồng trại, cải thiện môi trường không khí nông thôn và ức chế ruồi muỗi truyền dịch bệnh."
    }
  ]
};

export default EXTRA_BAI_27;
