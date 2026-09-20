import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 24
export const EXTRA_BAI_24: LessonExtra = {
  tf: [
    {
        "id": "b24-tf1",
        "context": "Ứng dụng IoT và Cảm biến trong trồng trọt thông minh:",
        "statements": [
            {
                "text": "Internet vạn vật (IoT) giúp kết nối mạng lưới các cảm biến độ ẩm, nhiệt độ và tự động kích hoạt tưới tiêu.",
                "answer": true,
                "explain": "Đúng. Tự động hóa quá trình cung cấp nước và dinh dưỡng cho cây."
            },
            {
                "text": "Cảm biến độ ẩm đất cắm trong bầu rễ giúp kiểm soát chính xác lượng nước tưới, tránh ngập úng hoặc khô hạn.",
                "answer": true,
                "explain": "Đúng. Cung cấp số liệu chính xác theo thời gian thực 24/7."
            },
            {
                "text": "Người nông dân bắt buộc phải có mặt trực tiếp tại trang trại 24/24 giờ mới có thể bật tắt được van nước thông minh.",
                "answer": false,
                "explain": "Sai. Có thể điều khiển van tưới từ xa qua smartphone bất kỳ đâu có kết nối Internet."
            },
            {
                "text": "Hệ thống bẫy đèn thông minh ứng dụng AI có thể tự động nhận dạng và đếm số lượng rầy nâu báo về máy chủ.",
                "answer": true,
                "explain": "Đúng. Cảnh báo sớm nguy cơ bùng phát dịch hại bảo vệ mùa màng."
            }
        ]
    },
    {
        "id": "b24-tf2",
        "context": "Ứng dụng Trí tuệ nhân tạo (AI), Drone và Viễn thám:",
        "statements": [
            {
                "text": "Trí tuệ nhân tạo (AI) có khả năng chẩn đoán bệnh cây trồng qua hình ảnh chụp phiến lá bằng điện thoại.",
                "answer": true,
                "explain": "Đúng. Thuật toán nhận diện ảnh giúp nông dân phát hiện bệnh sớm chính xác."
            },
            {
                "text": "Drone nông nghiệp phun thuốc bảo vệ thực vật giúp tiết kiệm tới 90% lượng nước và bảo vệ an toàn cho người phun.",
                "answer": true,
                "explain": "Đúng. Phun sương mịn định hướng luồng gió và cách ly con người khỏi hóa chất."
            },
            {
                "text": "Chỉ số thực vật NDVI từ ảnh vệ tinh viễn thám phản ánh hàm lượng diệp lục và mật độ sinh khối xanh của thảm cây.",
                "answer": true,
                "explain": "Đúng. Giúp đánh giá sức khỏe cây trồng trên quy mô hàng nghìn hecta."
            },
            {
                "text": "Robot nông nghiệp hiện nay hoàn toàn không thể hái quả chín vì bàn tay robot luôn làm nát vụn tất cả quả quả.",
                "answer": false,
                "explain": "Sai. Cánh tay robot mềm (soft robotics) mô phỏng ngón tay người hái quả rất khéo léo và nhẹ nhàng."
            }
        ]
    },
    {
        "id": "b24-tf3",
        "context": "Nông nghiệp chính xác và Công nghệ Blockchain:",
        "statements": [
            {
                "text": "Nông nghiệp chính xác hướng tới mục tiêu cung cấp phân bón, nước tưới đúng vị trí, đúng liều lượng và đúng thời điểm.",
                "answer": true,
                "explain": "Đúng. Tối ưu chi phí và bảo vệ môi trường sinh thái."
            },
            {
                "text": "Hệ thống bón phân biến thiên (VRA) tự động tăng lượng phân ở chỗ đất xấu và giảm ở chỗ đất tốt trên cùng thửa ruộng.",
                "answer": true,
                "explain": "Đúng. Cân đối độ phì nhiêu dựa vào bản đồ thổ nhưỡng GPS."
            },
            {
                "text": "Mã QR Code gắn trên bao bì nông sản không có tác dụng gì đối với việc truy xuất nguồn gốc xuất xứ.",
                "answer": false,
                "explain": "Sai. Giúp người tiêu dùng quét mã xem toàn bộ nhật ký chăm sóc, nguồn gốc trang trại minh bạch."
            },
            {
                "text": "Công nghệ Blockchain giúp lưu trữ dữ liệu chuỗi cung ứng nông sản minh bạch, không thể bị tẩy xóa gian lận.",
                "answer": true,
                "explain": "Đúng. Bảo vệ thương hiệu nông sản sạch và niềm tin người tiêu dùng."
            }
        ]
    },
    {
        "id": "b24-tf4",
        "context": "Ứng dụng thực tế công nghệ cao tại trường học và địa phương:",
        "statements": [
            {
                "text": "Đèn LED quang phổ chuyên dụng (kết hợp ánh sáng đỏ và xanh) giúp cây quang hợp tối ưu trong nhà máy thực vật.",
                "answer": true,
                "explain": "Đúng. Dải sóng 450nm và 660nm kích hoạt tối đa hoạt tính diệp lục."
            },
            {
                "text": "Học sinh THPT Phục Hòa hoàn toàn có thể tự chế tạo mô hình tưới cây thông minh bằng vi điều khiển Arduino.",
                "answer": true,
                "explain": "Đúng. Dự án giáo dục STEM bổ ích gắn liền kiến thức tin học và công nghệ."
            },
            {
                "text": "Chiếu sáng bằng đèn sợi đốt tỏa nhiệt nóng 100 độ C là công nghệ chiếu sáng tốt nhất cho nhà máy trồng rau sạch.",
                "answer": false,
                "explain": "Sai. Đèn sợi đốt tỏa nhiệt thiêu cháy lá và tiêu tốn điện năng lãng phí."
            },
            {
                "text": "Trạm quan trắc thời tiết thông minh cung cấp dữ liệu mưa nắng tại chỗ giúp tính toán nhu cầu tưới chính xác.",
                "answer": true,
                "explain": "Đúng. Tối ưu hóa việc lên lịch trình tưới tiêu khoa học."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b24-sa1",
        "q": "Tên viết tắt của công nghệ 'Internet vạn vật' kết nối cảm biến và thiết bị trong nông nghiệp thông minh là gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "IoT",
            "iot",
            "Công nghệ IoT",
            "công nghệ IoT"
        ],
        "explain": "IoT (Internet of Things) là nền tảng cốt lõi của nông nghiệp số 4.0."
    },
    {
        "id": "b24-sa2",
        "q": "Tên viết tắt của Trí tuệ nhân tạo - công nghệ máy học phân tích hình ảnh nhận diện tự động sâu bệnh hại cây trồng là gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "AI",
            "ai",
            "Trí tuệ nhân tạo",
            "trí tuệ nhân tạo"
        ],
        "explain": "AI (Artificial Intelligence) chẩn đoán bệnh học thực vật nhanh chóng và chuẩn xác."
    },
    {
        "id": "b24-sa3",
        "q": "Tên viết tắt của chỉ số thực vật đo mật độ sinh khối xanh và sức khỏe thảm thực vật từ ảnh vệ tinh/drone là chỉ số gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "NDVI",
            "ndvi",
            "Chỉ số NDVI"
        ],
        "explain": "NDVI (Normalized Difference Vegetation Index) đo lường độ tươi tốt của tán cây."
    },
    {
        "id": "b24-sa4",
        "q": "Mã vạch phản hồi nhanh hai chiều hình vuông in trên bao bì nông sản để quét điện thoại kiểm tra nhật ký sản xuất được gọi là mã gì?",
        "unit": "Tên mã",
        "correctAnswers": [
            "QR",
            "qr",
            "Mã QR",
            "mã QR",
            "QR code",
            "qr code"
        ],
        "explain": "Mã QR (Quick Response) cho phép truy xuất nguồn gốc xuất xứ tức thì."
    }
  ],
  essay: [
    {
        "id": "bai-24-essay1",
        "q": "Trình bày nguyên lý hoạt động của một hệ thống tưới nước tự động ứng dụng công nghệ Internet vạn vật (IoT) trong nhà kính.",
        "answer": "1. Các thành phần cấu tạo chính:\n- Cảm biến thu thập dữ liệu (Sensor node): Cảm biến đo độ ẩm đất cắm trong bầu giá thể vùng rễ, cảm biến nhiệt độ - độ ẩm không khí (DHT22), cảm biến cường độ ánh sáng.\n- Bộ xử lý trung tâm (Gateway/Controller): Bo mạch vi điều khiển (như Arduino, ESP32 hoặc Raspberry Pi) kết nối module truyền thông không dây (Wi-Fi, Zigbee, LoRa).\n- Thiết bị chấp hành (Actuators): Rơ-le đóng cắt điện, máy bơm nước áp lực, van điện từ (Solenoid valve) điều khiển từng luống cây.\n- Hệ thống lưu trữ đám mây và ứng dụng người dùng (Cloud & App): Máy chủ lưu trữ dữ liệu thời gian thực và ứng dụng trên điện thoại thông minh (smartphone) hoặc máy tính.\n2. Nguyên lý hoạt động theo vòng điều khiển khép kín:\n- Cảm biến liên tục đo độ ẩm đất định kỳ (ví dụ 10 giây/lần) và gửi tín hiệu về bộ xử lý vi điều khiển.\n- Bộ xử lý so sánh giá trị độ ẩm đo được với ngưỡng cài đặt tối ưu (ví dụ: ngưỡng bật bơm là ẩm độ < 60%, ngưỡng ngắt bơm là ẩm độ >= 80%).\n- Khi đất khô (ẩm độ < 60%), bộ xử lý kích hoạt rơ-le mở van điện từ và bật máy bơm nước tưới nhỏ giọt cấp nước cho cây trồng; đồng thời gửi thông báo trạng thái 'Đang tưới' về smartphone cho người quản lý.\n- Khi nước ngấm đủ làm ẩm độ đất đạt 80%, cảm biến truyền tín hiệu đạt chuẩn, bộ xử lý lập tức ngắt rơ-le, tắt máy bơm đóng van tưới.\n- Toàn bộ lịch sử tưới và đồ thị ẩm độ được ghi nhận tự động lên Cloud phục vụ quản lý truy xuất khoa học."
    },
    {
        "id": "bai-24-essay2",
        "q": "Nêu 4 ưu điểm vượt trội của việc sử dụng thiết bị bay không người lái (Drone) trong bảo vệ thực vật so với phương pháp phun thuốc thủ công truyền thống.",
        "answer": "1. Bảo vệ an toàn tuyệt đối cho sức khỏe con người: Người vận hành đứng điều khiển từ xa cách xa hàng trăm mét hoặc lập trình lộ trình tự động qua GPS, không phải trực tiếp tiếp xúc, hít phải hơi thuốc độc hại hay mang vác bình thuốc nặng 20-30kg lội ruộng lầy.\n2. Năng suất lao động và tốc độ dập dịch siêu nhanh: Một chiếc Drone nông nghiệp có thể phun từ 30 đến 50 hecta/ngày, gấp từ 30-50 lần so với một lao động phun tay, giúp dập tắt kịp thời các ổ dịch sâu rầy bùng phát trong thời gian ngắn.\n3. Tiết kiệm tài nguyên nước và thuốc BVTV: Nhờ công nghệ đầu phun ly tâm tạo giọt sương siêu mịn (kích thước micron) kết hợp với luồng gió cánh quạt đẩy xuống xoáy sâu, thuốc bám dính đều cả 2 mặt lá, tiết kiệm từ 80-90% lượng nước pha thuốc và giảm 20-30% lượng thuốc thất thoát rơi xuống đất.\n4. Giảm thiểu tổn thất dẫm đạp cây trồng: Phun từ trên không hoàn toàn không làm giẫm đạp gãy đổ lúa, rách lá rau màu, bảo toàn nguyên vẹn 100% mật độ cây trên đồng ruộng."
    }
  ]
};

export default EXTRA_BAI_24;
