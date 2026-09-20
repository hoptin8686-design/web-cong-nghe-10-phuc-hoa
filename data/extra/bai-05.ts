import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 5
export const EXTRA_BAI_05: LessonExtra = {
  tf: [
    {
        "id": "b5-tf1",
        "context": "Khi phân loại và đánh giá các loại giá thể trồng cây nông nghiệp:",
        "statements": [
            {
                "text": "Giá thể có thể thay thế đất tự nhiên giữ rễ và cung cấp nước, dinh dưỡng cho cây.",
                "answer": true,
                "explain": "Đúng. Đây là vai trò cơ bản của mọi loại giá thể trồng cây."
            },
            {
                "text": "Mụn xơ dừa và than bùn thuộc nhóm giá thể vô cơ trơ nhân tạo.",
                "answer": false,
                "explain": "Sai. Mụn dừa và than bùn là giá thể hữu cơ có nguồn gốc từ thực vật tự nhiên."
            },
            {
                "text": "Đá trân châu (Perlite) là giá thể trơ nhân tạo có khả năng làm tăng độ tơi xốp, thoáng khí.",
                "answer": true,
                "explain": "Đúng. Hạt perlite xốp nhẹ, giữ ẩm và chống nén chặt giá thể rất tốt."
            },
            {
                "text": "Mọi loại rác thải công nghiệp đều có thể trực tiếp làm giá thể trồng rau sạch.",
                "answer": false,
                "explain": "Sai. Rác công nghiệp chứa nhiều kim loại nặng và độc tố cực kỳ nguy hiểm."
            }
        ]
    },
    {
        "id": "b5-tf2",
        "context": "Về quy trình xử lý mụn xơ dừa thô trước khi đưa vào sản xuất:",
        "statements": [
            {
                "text": "Mụn dừa thô tự nhiên chứa nhiều muối (EC cao) và chất chát tannin, lignin gây hại rễ non.",
                "answer": true,
                "explain": "Đúng. Tannin và muối biển trong vỏ dừa ức chế sự hút nước và khoáng của rễ."
            },
            {
                "text": "Chỉ cần xả nước lạnh 5 phút là có thể loại bỏ hoàn toàn 100% tannin và lignin trong mụn dừa.",
                "answer": false,
                "explain": "Sai. Bắt buộc phải dùng nước vôi loãng ngâm xả nhiều ngày để bẻ gãy liên kết chát."
            },
            {
                "text": "Sau khi xử lý đúng quy trình, chỉ số EC của mụn dừa đạt chuẩn cần nhỏ hơn 0.5 mS/cm.",
                "answer": true,
                "explain": "Đúng. EC < 0.5 mS/cm chứng tỏ độ mặn đã ở ngưỡng an toàn tuyệt đối cho rễ."
            },
            {
                "text": "Mụn dừa đã xử lý có thể phối trộn với phân trùn quế và đá perlite để trồng dưa lưới.",
                "answer": true,
                "explain": "Đúng. Đây là công thức phối trộn giá thể tối ưu trong nhà màng công nghệ cao."
            }
        ]
    },
    {
        "id": "b5-tf3",
        "context": "Tìm hiểu về kỹ thuật sử dụng giá thể trồng cây trong nhà màng:",
        "statements": [
            {
                "text": "Bông khoáng (Rockwool) có khả năng giữ nước và cung cấp oxy cho rễ rất vượt trội.",
                "answer": true,
                "explain": "Đúng. Cấu trúc sợi đá bazan giữ dung dịch và kẽ khí tối ưu cho rễ thở."
            },
            {
                "text": "Giá thể sau mỗi vụ thu hoạch phải vứt bỏ hoàn toàn ra bãi rác, không thể tái sử dụng.",
                "answer": false,
                "explain": "Sai. Có thể tái sử dụng nếu được nhổ sạch rễ cũ, khử trùng nhiệt và bổ sung hữu cơ."
            },
            {
                "text": "Trấu hun cung cấp nguyên tố Silic và Kali giúp thân cây cứng cáp, kháng sâu bệnh.",
                "answer": true,
                "explain": "Đúng. Vỏ trấu hun bán yếm khí là nguồn dinh dưỡng khoáng Silic tự nhiên dồi dào."
            },
            {
                "text": "Đá sỏi nhẹ Keramsit thường được lót ở đáy chậu để chống ngập úng thối rễ.",
                "answer": true,
                "explain": "Đúng. Keramsit tạo tầng thoát nước thông thoáng ở đáy bầu giá thể."
            }
        ]
    },
    {
        "id": "b5-tf4",
        "context": "Liên hệ thực tiễn sản xuất rau hoa cây cảnh tại Cao Bằng:",
        "statements": [
            {
                "text": "Sử dụng mùn cưa gỗ thông tươi chưa ủ hoai sẽ làm cây bị vàng lá do cạnh tranh đạm.",
                "answer": true,
                "explain": "Đúng. Tỉ lệ C/N quá cao làm vi sinh vật hút hết đạm trong đất để phân giải mùn."
            },
            {
                "text": "Trồng dâu tây và hoa lan trong chậu sử dụng giá thể vỏ thông giúp rễ thoáng khí không bị úng.",
                "answer": true,
                "explain": "Đúng. Vỏ thông chứa nhựa tự nhiên chống thối và giữ ẩm rất thích hợp cho rễ lan."
            },
            {
                "text": "Giá thể than bùn có độ pH tự nhiên rất cao (pH > 8.0) nên không cần kiểm tra pH.",
                "answer": false,
                "explain": "Sai. Than bùn tự nhiên có tính axit chua (pH 3.5 - 4.5), cần bổ sung vôi để trung hòa."
            },
            {
                "text": "Mô hình nông nghiệp đô thị ứng dụng giá thể giúp tiết kiệm không gian và sạch sẽ vệ sinh.",
                "answer": true,
                "explain": "Đúng. Giá thể nhẹ, không chứa bùn đất bẩn, phù hợp cho sân thượng và ban công."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b05-sa1",
        "q": "Mụn xơ dừa tự nhiên trước khi được sử dụng làm giá thể gieo trồng cây bắt buộc phải trải qua quá trình ngâm rửa để loại bỏ chất chát nào?",
        "unit": "Chất hóa học",
        "correctAnswers": [
            "Tannin",
            "tannin",
            "Tanin",
            "tanin",
            "Tannin và lignin"
        ],
        "explain": "Chất chát tannin và lignin trong mụn dừa thô gây ức chế hô hấp của rễ non, cần ngâm xả nước vôi sạch trước khi trồng."
    },
    {
        "id": "b05-sa2",
        "q": "Tên loại đá núi lửa nhân tạo siêu nhẹ, màu trắng xốp, thường được phối trộn vào giá thể để tăng độ thoáng khí cho rễ cây là đá gì?",
        "unit": "Tên đá",
        "correctAnswers": [
            "Perlite",
            "perlite",
            "Đá perlite",
            "Đá trân châu",
            "đá trân châu"
        ],
        "explain": "Đá trân châu (Perlite) được nung nở ở nhiệt độ cao, có cấu trúc xốp nhẹ, giữ ẩm và làm tơi xốp giá thể tối ưu."
    },
    {
        "id": "b05-sa3",
        "q": "Tên loại giá thể nhân tạo chế tạo từ đá bazan nung chảy ở nhiệt độ trên 1600°C rồi kéo thành sợi khoáng có tên tiếng Anh là gì?",
        "unit": "Tên tiếng Anh",
        "correctAnswers": [
            "Rockwool",
            "rockwool",
            "Bông khoáng",
            "bông khoáng"
        ],
        "explain": "Bông khoáng Rockwool là giá thể trơ nhân tạo lý tưởng trong công nghệ trồng cây không dùng đất."
    },
    {
        "id": "b05-sa4",
        "q": "Ngưỡng chỉ số độ dẫn điện EC tối đa cho phép của mụn xơ dừa sau khi rửa mặn đạt chuẩn an toàn cho cây trồng là bao nhiêu mS/cm?",
        "unit": "mS/cm",
        "correctAnswers": [
            "0.5",
            "0,5",
            "0.5 mS/cm",
            "0,5 mS/cm",
            "< 0.5"
        ],
        "explain": "Chỉ số EC < 0.5 mS/cm chứng tỏ lượng muối hòa tan tồn dư đã được rửa sạch hoàn toàn."
    }
  ],
  essay: [
    {
        "id": "bai-05-essay1",
        "q": "Trình bày quy trình 3 bước xử lý mụn xơ dừa thô thành giá thể đạt chuẩn trồng dưa lưới.",
        "answer": "1. Bước 1: Ngâm và xả mặn bằng nước sạch nhiều lần để hòa tan và loại bỏ muối khoáng tự do.\n2. Bước 2: Ngâm khử chất chát (tannin và lignin) bằng dung dịch nước vôi tôi (Ca(OH)2) nồng độ 1-2% trong 24-48 giờ để ion Ca2+ bẻ gãy liên kết tanin.\n3. Bước 3: Rửa sạch lại bằng nước sạch nhiều lần, đo kiểm tra độ dẫn điện EC < 0.5 mS/cm và pH từ 5.8 - 6.5 trước khi phối trộn sử dụng."
    },
    {
        "id": "bai-05-essay2",
        "q": "So sánh ưu nhược điểm của giá thể hữu cơ (mụn dừa) và giá thể vô cơ trơ (đá perlite).",
        "answer": "- Mụn xơ dừa: Ưu điểm là giá thành rẻ, nguồn nguyên liệu tự nhiên dồi dào, khả năng giữ ẩm cao; nhược điểm là chứa chất chát phải xử lý kỹ và dễ bị mục nát xẹp lún sau 1-2 vụ.\n- Đá perlite: Ưu điểm là vô trùng 100%, không bị phân hủy sinh học, cực kỳ xốp nhẹ thoáng khí; nhược điểm là giá thành cao hơn và khả năng giữ nước kém hơn mụn dừa.\n-> Do đó người ta thường phối trộn 70% mụn dừa + 30% perlite để phát huy tối đa ưu điểm của cả hai."
    }
  ]
};

export default EXTRA_BAI_05;
