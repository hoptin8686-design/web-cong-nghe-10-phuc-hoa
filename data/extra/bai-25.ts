import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 25
export const EXTRA_BAI_25: LessonExtra = {
  tf: [
    {
        "id": "b25-tf1",
        "context": "Khái niệm và phân loại công nghệ trồng cây không dùng đất:",
        "statements": [
            {
                "text": "Trồng cây không dùng đất là kỹ thuật cung cấp đầy đủ nước và dinh dưỡng khoáng trực tiếp qua rễ.",
                "answer": true,
                "explain": "Đúng. Cây sinh trưởng tốt trên dung dịch hoặc giá thể trơ nhân tạo."
            },
            {
                "text": "Thủy canh tĩnh bắt buộc phải dùng đất bùn ruộng lúa lót dưới đáy bể dung dịch.",
                "answer": false,
                "explain": "Sai. Hoàn toàn không sử dụng đất tự nhiên; rễ nhúng trực tiếp trong nước dinh dưỡng."
            },
            {
                "text": "Thủy canh màng dinh dưỡng NFT cho dung dịch chảy thành lớp màng rất mỏng qua đáy rễ cây.",
                "answer": true,
                "explain": "Đúng. Tạo điều kiện cho phần rễ phía trên tiếp xúc trực tiếp với không khí lấy oxy."
            },
            {
                "text": "Khí canh (Aeroponics) là công nghệ phun sương dinh dưỡng trực tiếp vào bộ rễ treo lơ lửng trong khoang kín.",
                "answer": true,
                "explain": "Đúng. Rễ hấp thụ nước dinh dưỡng dạng sương mù siêu mịn."
            }
        ]
    },
    {
        "id": "b25-tf2",
        "context": "Quản lý dung dịch dinh dưỡng thủy canh (EC, pH, nhiệt độ):",
        "statements": [
            {
                "text": "Dung dịch dinh dưỡng mẹ đậm đặc phải chia thành 2 bình (Bình A và Bình B) để chống kết tủa CaSO4.",
                "answer": true,
                "explain": "Đúng. Cách ly ion Ca2+ khỏi ion SO4(2-) và PO4(3-) ở nồng độ cao."
            },
            {
                "text": "Chỉ số EC đo lường tổng nồng độ ion muối khoáng hòa tan trong dung dịch dinh dưỡng.",
                "answer": true,
                "explain": "Đúng. EC tỷ lệ thuận với lượng muối khoáng N-P-K-Ca-Mg."
            },
            {
                "text": "Độ pH của dung dịch dinh dưỡng thủy canh càng cao (pH > 9.0) thì rễ cây càng hút lân và vi lượng dễ dàng.",
                "answer": false,
                "explain": "Sai. pH cao gây kết tủa sắt, lân và vi lượng làm cây bị vàng lá còi cọc."
            },
            {
                "text": "Khi nhiệt độ dung dịch vượt quá 32 độ C vào mùa hè, nồng độ oxy hòa tan sẽ giảm mạnh làm rễ dễ bị thối đen.",
                "answer": true,
                "explain": "Đúng. Nước ấm giữ oxy kém tạo điều kiện cho nấm thủy sinh tấn công rễ."
            }
        ]
    },
    {
        "id": "b25-tf3",
        "context": "Ưu nhược điểm của các hệ thống Thủy canh và Khí canh:",
        "statements": [
            {
                "text": "Khí canh giúp rễ cây tiếp cận nguồn oxy dồi dào, kích thích cây sinh trưởng nhanh hơn thủy canh.",
                "answer": true,
                "explain": "Đúng. Rễ bão hòa oxy tối đa thúc đẩy phân chia tế bào cực mạnh."
            },
            {
                "text": "Nếu hệ thống khí canh bị mất điện liên tục trong 4-6 giờ giữa trưa nắng, bộ rễ có thể bị chết khô hoàn toàn.",
                "answer": true,
                "explain": "Đúng. Rễ treo trong không khí không có chất đệm giữ ẩm nên khô héo rất nhanh."
            },
            {
                "text": "Trồng dưa lưới trong túi giá thể mụn dừa tưới nhỏ giọt thích hợp cho cây thân leo có khối lượng quả nặng.",
                "answer": true,
                "explain": "Đúng. Giá thể giữ rễ bám chắc chắn nâng đỡ cây dưa trĩu quả."
            },
            {
                "text": "Ống máng thủy canh nên làm bằng vật liệu trong suốt để nhìn thấy bộ rễ cho đẹp mắt.",
                "answer": false,
                "explain": "Sai. Trong suốt sẽ để lọt ánh sáng làm bùng phát rêu tảo cạnh tranh dinh dưỡng và hại rễ."
            }
        ]
    },
    {
        "id": "b25-tf4",
        "context": "Ứng dụng thực tiễn công nghệ không dùng đất tại Cao Bằng và đô thị:",
        "statements": [
            {
                "text": "Sản xuất củ giống khoai tây siêu sạch bằng khí canh giúp tăng hệ số nhân giống lên gấp hàng chục lần.",
                "answer": true,
                "explain": "Đúng. Thu hái nhiều đợt củ bi sạch bệnh cung cấp cho nông dân trồng đại trà."
            },
            {
                "text": "Mô hình thủy canh hồi lưu trồng rau xà lách sạch cách ly hoàn toàn giun sán và kim loại nặng trong đất.",
                "answer": true,
                "explain": "Đúng. Tạo nguồn rau ăn sống siêu sạch, an toàn cho sức khỏe người tiêu dùng."
            },
            {
                "text": "Trước khi thu hoạch rau thủy canh 2-3 ngày, chỉ cần chạy nước sạch để giảm hàm lượng nitrat trong lá.",
                "answer": true,
                "explain": "Đúng. Đảm bảo tiêu chuẩn rau an toàn xuất khẩu và siêu thị."
            },
            {
                "text": "Mô hình Aquaponics kết hợp nuôi cá và trồng rau tuần hoàn là một ví dụ điển hình của nông nghiệp sinh thái.",
                "answer": true,
                "explain": "Đúng. Tận dụng phân cá nuôi cây và cây làm sạch nước cho cá."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b25-sa1",
        "q": "Hệ thống thủy canh tuần hoàn mà ở đó dung dịch dinh dưỡng được bơm chảy thành một lớp màng rất mỏng qua đáy bộ rễ cây được viết tắt là gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "NFT",
            "nft",
            "Hệ thống NFT",
            "hệ thống NFT"
        ],
        "explain": "NFT là chữ viết tắt của Nutrient Film Technique (Kỹ thuật màng dinh dưỡng)."
    },
    {
        "id": "b25-sa2",
        "q": "Công nghệ trồng cây hiện đại mà ở đó toàn bộ rễ cây được treo lơ lửng trong khoang kín và được phun sương dinh dưỡng định kỳ có tên là gì?",
        "unit": "Tên công nghệ",
        "correctAnswers": [
            "Khí canh",
            "khí canh",
            "Aeroponics",
            "aeroponics"
        ],
        "explain": "Khí canh (Aeroponics) là công nghệ đỉnh cao cung cấp oxy và dưỡng chất tối đa cho rễ."
    },
    {
        "id": "b25-sa3",
        "q": "Để tránh hiện tượng hai ion Ca2+ và SO4(2-) phản ứng tạo kết tủa trắng CaSO4 không tan, dung dịch dinh dưỡng mẹ đậm đặc bắt buộc phải chia thành mấy bình riêng biệt?",
        "unit": "Số bình",
        "correctAnswers": [
            "2",
            "2 bình",
            "Hai",
            "hai",
            "Hai bình"
        ],
        "explain": "Dung dịch mẹ luôn chia thành 2 bình A và B (Bình A chứa Canxi, Bình B chứa Sunfat và Photphat)."
    },
    {
        "id": "b25-sa4",
        "q": "Mô hình sinh thái tuần hoàn khép kín kết hợp giữa nuôi trồng thủy sản (nuôi cá) và trồng rau thủy canh được gọi là mô hình gì?",
        "unit": "Tên mô hình",
        "correctAnswers": [
            "Aquaponics",
            "aquaponics"
        ],
        "explain": "Aquaponics là sự kết hợp cộng sinh giữa Aquaculture (Thủy sản) và Hydroponics (Thủy canh)."
    }
  ],
  essay: [
    {
        "id": "bai-25-essay1",
        "q": "So sánh ưu điểm và nhược điểm của công nghệ Thủy canh hồi lưu (NFT) và công nghệ Khí canh (Aeroponics).",
        "answer": "1. Công nghệ Thủy canh hồi lưu (NFT):\n- Ưu điểm: Lớp màng dinh dưỡng chảy mỏng giúp rễ vừa hút nước vừa thở oxy; hệ thống vận hành bền bỉ, ổn định; nếu xảy ra cúp điện ngắn hạn rễ vẫn giữ được độ ẩm dưới đáy máng vài giờ; kỹ thuật dễ làm chủ hơn khí canh.\n- Nhược điểm: Lưu lượng dòng chảy đòi hỏi độ dốc máng chuẩn xác; dễ lây lan nấm bệnh (Pythium) từ cây bệnh sang toàn bộ hệ thống theo dòng nước tuần hoàn; nhiệt độ nước dễ tăng cao vào mùa hè.\n2. Công nghệ Khí canh (Aeroponics):\n- Ưu điểm: Bộ rễ lơ lửng bão hòa oxy 100% giúp cây tăng trưởng nhanh nhất trong mọi phương pháp; tiết kiệm nước và phân bón tối đa (tiết kiệm đến 95% nước); cách ly rễ hoàn hảo ngăn chặn bệnh truyền nhiễm lây chéo; rất thích hợp nhân giống củ khoai tây bi.\n- Nhược điểm: Chi phí đầu tư béc phun sương áp lực cao đắt tiền; đầu béc dễ bị bít tắc bởi cặn khoáng; cực kỳ rủi ro khi mất điện (chỉ cần mất điện 2-4 giờ vào ngày nắng là rễ bị khô héo chết cây toàn bộ)."
    },
    {
        "id": "bai-25-essay2",
        "q": "Trình bày các bước quản lý chất lượng dung dịch dinh dưỡng thủy canh (kiểm soát nồng độ EC, độ pH và thời gian cách ly trước thu hoạch).",
        "answer": "1. Quản lý nồng độ dinh dưỡng (EC):\n- Sử dụng bút đo EC điện tử kiểm tra hàng ngày. Nồng độ EC được điều chỉnh tăng dần theo giai đoạn tuổi cây (ví dụ xà lách cây con EC = 0.8 - 1.0 mS/cm, giai đoạn phát triển rộ EC = 1.4 - 1.8 mS/cm).\n- Nếu EC giảm dưới mức chuẩn -> Châm thêm dung dịch cốt A và B theo tỷ lệ 1:1. Nếu EC tăng cao do nước bốc hơi vào ngày nắng gắt -> Châm thêm nước sạch để hạ nồng độ tránh xót rễ.\n2. Quản lý độ chua (pH):\n- Đo pH hàng ngày bằng bút đo pH; duy trì khoảng tối hảo từ 5.8 đến 6.5 để tất cả các khoáng chất hòa tan hoàn toàn.\n- Nếu pH > 6.5 (kiềm hóa) -> Dùng dung dịch acid phosphoric loãng (pH Down) để hạ pH. Nếu pH < 5.5 (chua hóa) -> Dùng dung dịch KOH loãng (pH Up) để nâng pH nhẹ nhàng.\n3. Thời gian cách ly trước thu hoạch:\n- Trước khi thu hoạch 2 - 3 ngày, tiến hành rút bớt dung dịch dinh dưỡng và bơm nước sạch tinh khiết vào bể tuần hoàn.\n- Giúp cây chuyển hóa và tiêu thụ hết lượng đạm nitrat (NO3-) tự do còn tích tụ trong mô phiến lá, bảo đảm hàm lượng nitrat dưới ngưỡng cho phép theo tiêu chuẩn an toàn thực phẩm quốc tế."
    }
  ]
};

export default EXTRA_BAI_25;
