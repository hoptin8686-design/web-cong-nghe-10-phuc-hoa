import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 23
export const EXTRA_BAI_23: LessonExtra = {
  tf: [
    {
        "id": "b23-tf1",
        "context": "Khái niệm và đặc trưng của trồng trọt công nghệ cao:",
        "statements": [
            {
                "text": "Trồng trọt công nghệ cao là nền nông nghiệp ứng dụng tích hợp các thành tựu khoa học kỹ thuật hiện đại.",
                "answer": true,
                "explain": "Đúng. Kết hợp tự động hóa, công nghệ sinh học và vật liệu tiên tiến."
            },
            {
                "text": "Nông sản sản xuất công nghệ cao hoàn toàn phụ thuộc vào điều kiện thời tiết nắng mưa ngoài trời.",
                "answer": false,
                "explain": "Sai. Chủ động kiểm soát môi trường trong nhà màng, không phụ thuộc thiên nhiên."
            },
            {
                "text": "Mô hình nhà màng giúp ngăn chặn côn trùng và giảm thiểu tối đa lượng thuốc trừ sâu hóa học cần sử dụng.",
                "answer": true,
                "explain": "Đúng. Hàng rào lưới ngăn côn trùng bảo vệ cây trồng sạch bệnh."
            },
            {
                "text": "Trồng trọt công nghệ cao cho năng suất vượt trội, chất lượng đồng đều và cho phép sản xuất trái vụ quanh năm.",
                "answer": true,
                "explain": "Đúng. Tối ưu hóa chu kỳ sinh trưởng mang lại hiệu quả kinh tế cao."
            }
        ]
    },
    {
        "id": "b23-tf2",
        "context": "Hệ thống tưới nhỏ giọt kết hợp bón phân tự động (Fertigation):",
        "statements": [
            {
                "text": "Hệ thống Fertigation hòa tan phân bón tinh khiết vào nước và cấp chính xác đến từng gốc rễ cây.",
                "answer": true,
                "explain": "Đúng. Cung cấp đúng nồng độ dinh dưỡng cây cần theo từng ngày tuổi."
            },
            {
                "text": "Chỉ số EC trong dung dịch tưới biểu thị tổng nồng độ muối khoáng dinh dưỡng hòa tan.",
                "answer": true,
                "explain": "Đúng. Đo nồng độ dinh dưỡng đa vi lượng cung cấp cho rễ."
            },
            {
                "text": "Càng pha nồng độ EC thật cao (trên 10 mS/cm) thì cây trồng càng lớn nhanh và không bao giờ bị xót rễ.",
                "answer": false,
                "explain": "Sai. EC quá cao làm áp suất thẩm thấu tăng gây hạn sinh lý và cháy chết rễ."
            },
            {
                "text": "Đầu tưới nhỏ giọt bù áp đảm bảo lưu lượng nước đồng đều ở tất cả các vị trí trong vườn.",
                "answer": true,
                "explain": "Đúng. Giúp cây ở đầu luống và cuối luống sinh trưởng đồng nhất 100%."
            }
        ]
    },
    {
        "id": "b23-tf3",
        "context": "Điều khiển vi khí hậu trong nhà màng hiện đại:",
        "statements": [
            {
                "text": "Hệ thống cảm biến tự động theo dõi nhiệt độ, độ ẩm và cường độ ánh sáng trong nhà màng.",
                "answer": true,
                "explain": "Đúng. Dữ liệu cảm biến điều khiển quạt gió, bơm tưới và lưới cắt nắng."
            },
            {
                "text": "Lưới đen cắt nắng giúp hạ nhiệt độ nhà màng vào những giờ trưa nắng gay gắt mùa hè.",
                "answer": true,
                "explain": "Đúng. Tránh hiện tượng sốc nhiệt và cháy mép lá cây dưa, hoa."
            },
            {
                "text": "Trong nhà màng hiện đại, không cần hệ thống thông gió vì không khí bên trong luôn tự mát mẻ.",
                "answer": false,
                "explain": "Sai. Không có quạt thông gió nhà màng sẽ bị quá nhiệt hiệu ứng nhà kính làm chết cây."
            },
            {
                "text": "Màng lợp PE chuyên dụng có phủ lớp chống đọng sương nhỏ giọt (Anti-drip) để hạn chế nấm lá.",
                "answer": true,
                "explain": "Đúng. Giọt nước đọng trôi theo mái nghiêng không rơi xuống lá cây."
            }
        ]
    },
    {
        "id": "b23-tf4",
        "context": "Triển vọng phát triển trồng trọt công nghệ cao tại Cao Bằng:",
        "statements": [
            {
                "text": "Ứng dụng nhà màng trồng dâu tây, hoa lan hồ điệp giúp tạo ra nông sản cao cấp phục vụ du khách.",
                "answer": true,
                "explain": "Đúng. Kết hợp nông nghiệp công nghệ cao với du lịch trải nghiệm sinh thái."
            },
            {
                "text": "Nông nghiệp công nghệ cao là giải pháp hữu hiệu giúp đối phó với sương muối, rét hại vùng núi cao.",
                "answer": true,
                "explain": "Đúng. Nhà màng giữ ấm và che chắn sương muối bảo vệ cây an toàn."
            },
            {
                "text": "Bất kỳ ai không cần học hỏi kiến thức kỹ thuật cũng có thể vận hành tốt nhà màng công nghệ cao trị giá hàng tỷ đồng.",
                "answer": false,
                "explain": "Sai. Đòi hỏi kỹ sư nắm vững quy trình dinh dưỡng, cảm biến và phòng ngừa dịch hại."
            },
            {
                "text": "Cần tính toán kỹ bài toán đầu ra thị trường tiêu thụ trước khi quyết định đầu tư nhà màng quy mô lớn.",
                "answer": true,
                "explain": "Đúng. Đảm bảo thu hồi vốn đầu tư và hiệu quả kinh tế bền vững."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b23-sa1",
        "q": "Phương thức cung cấp phân bón hòa tan dinh dưỡng đi kèm trực tiếp với dòng nước tưới nhỏ giọt tự động có tên tiếng Anh chuyên ngành là gì?",
        "unit": "Tên tiếng Anh",
        "correctAnswers": [
            "Fertigation",
            "fertigation"
        ],
        "explain": "Fertigation là sự kết hợp của Fertilizer (Phân bón) và Irrigation (Tưới tiêu)."
    },
    {
        "id": "b23-sa2",
        "q": "Chỉ số đại diện cho tổng nồng độ muối khoáng dinh dưỡng hòa tan trong dung dịch tưới nhỏ giọt được viết tắt là gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "EC",
            "ec",
            "Chỉ số EC",
            "chỉ số EC"
        ],
        "explain": "EC (Electrical Conductivity) là độ dẫn điện đo nồng độ ion khoáng dinh dưỡng."
    },
    {
        "id": "b23-sa3",
        "q": "Khoảng giá trị pH lý tưởng của dung dịch dinh dưỡng tưới cho đa số cây trồng trong nhà màng công nghệ cao là từ bao nhiêu đến bao nhiêu?",
        "unit": "Khoảng pH",
        "correctAnswers": [
            "5.8 - 6.5",
            "5.8-6.5",
            "5,8 - 6,5",
            "5.5 - 6.5"
        ],
        "explain": "pH 5.8 - 6.5 là khoảng hòa tan tối ưu của mọi nguyên tố khoáng đa, trung, vi lượng."
    },
    {
        "id": "b23-sa4",
        "q": "Quốc gia Trung Đông nổi tiếng toàn cầu về các phát minh công nghệ tưới nhỏ giọt và nông nghiệp công nghệ cao trên sa mạc là nước nào?",
        "unit": "Tên quốc gia",
        "correctAnswers": [
            "Israel",
            "israel",
            "I-xra-en",
            "Ixraen"
        ],
        "explain": "Israel là cái nôi sáng chế công nghệ tưới nhỏ giọt và nông nghiệp công nghệ cao thế giới."
    }
  ],
  essay: [
    {
        "id": "bai-23-essay1",
        "q": "Trình bày 4 đặc trưng cơ bản của trồng trọt công nghệ cao và phân tích ưu điểm của phương thức này so với trồng trọt truyền thống.",
        "answer": "1. 4 đặc trưng cơ bản:\n- Ứng dụng công nghệ tự động hóa và cơ giới hóa đồng bộ: Sử dụng máy móc, cảm biến, hệ thống tưới nhỏ giọt tự động thay thế sức người.\n- Sản xuất trong điều kiện có kiểm soát vi khí hậu: Cây trồng được bảo vệ trong nhà màng, nhà kính, kiểm soát nhiệt độ, độ ẩm, ánh sáng và nồng độ CO2.\n- Ứng dụng công nghệ sinh học hiện đại: Sử dụng giống nuôi cấy mô sạch bệnh năng suất cao, chế phẩm sinh học vi sinh bảo vệ cây trồng.\n- Chuẩn hóa quy trình và truy xuất nguồn gốc: Quản lý dinh dưỡng chính xác qua Fertigation, đạt tiêu chuẩn an toàn thực phẩm VietGAP, GlobalGAP.\n2. Ưu điểm so với trồng trọt truyền thống:\n- Năng suất vượt bậc: Năng suất cây trồng có thể cao gấp 3 đến 5 lần so với ngoài đồng tự nhiên.\n- Chất lượng đồng đều, mẫu mã đẹp và an toàn thực phẩm tuyệt đối do giảm 80-90% việc dùng hóa chất trừ sâu.\n- Sản xuất chủ động quanh năm không phụ thuộc mùa vụ, né tránh hoàn toàn thiên tai (mưa đá, hạn hán, sương muối rét hại).\n- Tiết kiệm tài nguyên nước và phân bón (từ 30-50%) nhờ công nghệ tưới nhỏ giọt chính xác."
    },
    {
        "id": "bai-23-essay2",
        "q": "Phân tích những thuận lợi và khó khăn khi phát triển mô hình trồng dâu tây và rau hoa công nghệ cao tại tỉnh Cao Bằng.",
        "answer": "1. Thuận lợi:\n- Khí hậu ôn hòa, mát mẻ quanh năm ở các vùng núi cao (như Nguyên Bình, Trùng Khánh) rất thích hợp cho cây ôn đới (dâu tây, hoa lan, rau củ cao cấp).\n- Thị trường du lịch đang phát triển mạnh mẽ (khu di tích Pác Bó, thác Bản Giốc, công viên địa chất toàn cầu UNESCO Non nước Cao Bằng) tạo nhu cầu lớn về nông sản sạch trải nghiệm du lịch nông nghiệp.\n- Chính sách khuyến khích hỗ trợ phát triển nông nghiệp công nghệ cao của nhà nước và địa phương.\n2. Khó khăn:\n- Vốn đầu tư xây dựng nhà màng ban đầu rất lớn đối với kinh tế nông hộ miền núi.\n- Thiếu hụt đội ngũ nhân lực kỹ thuật am hiểu sâu về tự động hóa, pha chế dinh dưỡng và vận hành cảm biến IoT.\n- Mùa hè nhiệt độ vùng thấp vẫn có những đợt nắng nóng gay gắt, đòi hỏi hệ thống làm mát tốn kém điện năng.\n- Hệ thống logistics, chuỗi lạnh bảo quản vận chuyển hàng hóa còn hạn chế."
    }
  ]
};

export default EXTRA_BAI_23;
