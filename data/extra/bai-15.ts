import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 15
export const EXTRA_BAI_15: LessonExtra = {
  tf: [
    {
        "id": "b15-tf1",
        "context": "Khái niệm và đặc điểm vòng đời sâu hại cây trồng:",
        "statements": [
            {
                "text": "Sâu hại cây trồng chủ yếu thuộc lớp Côn trùng (Insecta), cắn phá lá, thân hoặc chích hút nhựa.",
                "answer": true,
                "explain": "Đúng. Đây là nhóm động vật phá hoại mùa màng phổ biến nhất."
            },
            {
                "text": "Vòng đời biến thái hoàn toàn trải qua 4 giai đoạn: Trứng -> Sâu non -> Nhộng -> Sâu trưởng thành.",
                "answer": true,
                "explain": "Đúng. Biến thái hoàn toàn có giai đoạn biến đổi sâu sắc qua pha nhộng."
            },
            {
                "text": "Ở côn trùng biến thái hoàn toàn, giai đoạn sâu trưởng thành (bướm) là giai đoạn cắn phá lá mạnh mẽ nhất.",
                "answer": false,
                "explain": "Sai. Giai đoạn sâu non (ấu trùng) mới là giai đoạn gặm nhai tàn phá cây cối mạnh nhất."
            },
            {
                "text": "Côn trùng biến thái không hoàn toàn (như rầy nâu) không trải qua giai đoạn nhộng.",
                "answer": true,
                "explain": "Đúng. Trứng nở trực tiếp thành rầy non có hình dạng giống con trưởng thành."
            }
        ]
    },
    {
        "id": "b15-tf2",
        "context": "Các tác nhân sinh học gây bệnh hại cây trồng:",
        "statements": [
            {
                "text": "Nấm là tác nhân gây ra đa số các bệnh hại phổ biến trên cây trồng nông nghiệp.",
                "answer": true,
                "explain": "Đúng. Khoảng 70-80% bệnh hại cây trồng do nấm gây ra."
            },
            {
                "text": "Bệnh do vi khuẩn thường gây triệu chứng thối nhũn kèm theo dịch nhầy và mùi hôi thối khó chịu.",
                "answer": true,
                "explain": "Đúng. Vi khuẩn phân hủy pectin vách tế bào làm nhũn mô thối khắm."
            },
            {
                "text": "Virus thực vật có thể tự bơi qua lớp sáp cutin nguyên vẹn mà không cần bất kỳ vết thương hay côn trùng truyền bệnh.",
                "answer": false,
                "explain": "Sai. Virus bắt buộc phải xâm nhập qua vết trầy xước cơ giới hoặc do côn trùng chích hút truyền vào."
            },
            {
                "text": "Tuyến trùng là loài giun tròn ký sinh gây các nốt sần u bướu phá hoại rễ cây trồng.",
                "answer": true,
                "explain": "Đúng. Tuyến trùng làm tắc nghẽn mạch dẫn rễ, tạo đường cho nấm xâm nhập thối rễ."
            }
        ]
    },
    {
        "id": "b15-tf3",
        "context": "Nguyên lý Quản lý dịch hại tổng hợp (IPM):",
        "statements": [
            {
                "text": "Mục tiêu của IPM là tiêu diệt triệt để 100% tất cả các loài sâu bọ trên đồng ruộng.",
                "answer": false,
                "explain": "Sai. Mục tiêu của IPM là khống chế dịch hại dưới ngưỡng gây hại kinh tế, duy trì cân bằng sinh thái."
            },
            {
                "text": "IPM ưu tiên kết hợp các biện pháp sinh học, biện pháp canh tác và giống chống chịu.",
                "answer": true,
                "explain": "Đúng. Tận dụng tối đa các yếu tố tự nhiên và biện pháp thân thiện môi trường."
            },
            {
                "text": "Chỉ sử dụng thuốc bảo vệ thực vật hóa học khi mật độ sâu vượt quá ngưỡng gây hại kinh tế.",
                "answer": true,
                "explain": "Đúng. Sử dụng thuốc hóa học như biện pháp cuối cùng khi nguy cơ thất thoát kinh tế xuất hiện."
            },
            {
                "text": "Bảo vệ các loài thiên địch (bọ rùa, nhện bắt mồi, ong ký sinh) là một nguyên tắc sống còn của IPM.",
                "answer": true,
                "explain": "Đúng. Thiên địch giúp kìm hãm sự bùng phát của sâu hại tự nhiên."
            }
        ]
    },
    {
        "id": "b15-tf4",
        "context": "Thực hành phòng trừ sâu bệnh tại các nông hộ Cao Bằng:",
        "statements": [
            {
                "text": "Vệ sinh đồng ruộng và dọn sạch tàn dư rơm rạ sau vụ mùa giúp tiêu diệt nơi trú ẩn của sâu bệnh.",
                "answer": true,
                "explain": "Đúng. Cắt đứt nguồn lây nhiễm cho vụ gieo trồng tiếp theo."
            },
            {
                "text": "Phun thuốc hóa học định kỳ theo tuần giúp tăng độ phì nhiêu của đất trồng trọt.",
                "answer": false,
                "explain": "Sai. Lạm dụng thuốc hóa học hủy hoại vi sinh vật có ích và làm chai cứng đất."
            },
            {
                "text": "Sử dụng bẫy bả chua ngọt hoặc bẫy đèn bắt bướm sâu đục thân là biện pháp vật lý - cơ giới an toàn.",
                "answer": true,
                "explain": "Đúng. Bẫy bả diệt bướm trưởng thành trước khi chúng kịp đẻ trứng."
            },
            {
                "text": "Biện pháp kiểm dịch thực vật tại cửa khẩu Tà Lùng giúp ngăn chặn các loài dịch hại nguy hiểm xâm lấn.",
                "answer": true,
                "explain": "Đúng. Bảo vệ nền nông nghiệp trong nước khỏi dịch hại ngoại lai."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b15-sa1",
        "q": "Giai đoạn nào trong vòng đời biến thái hoàn toàn của côn trùng (như sâu đục thân, sâu tơ) có sức ăn khỏe nhất và trực tiếp cắn phá gây hại nghiêm trọng cho cây trồng?",
        "unit": "Tên giai đoạn",
        "correctAnswers": [
            "Sâu non",
            "sâu non",
            "Ấu trùng",
            "ấu trùng"
        ],
        "explain": "Sâu non có cơ quan miệng gặm nhai phát triển, ăn liên tục để tích lũy dinh dưỡng hóa nhộng."
    },
    {
        "id": "b15-sa2",
        "q": "Tên viết tắt tiếng Anh của hệ thống quản lý dịch hại cây trồng tổng hợp tiên tiến được áp dụng trên toàn thế giới là gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "IPM",
            "ipm",
            "Hệ thống IPM",
            "hệ thống IPM"
        ],
        "explain": "IPM là viết tắt của Integrated Pest Management (Quản lý dịch hại tổng hợp)."
    },
    {
        "id": "b15-sa3",
        "q": "Mật độ sâu hại hoặc mức độ bệnh mà tại đó nếu không tiến hành phòng trừ thì giá trị thiệt hại nông sản sẽ vượt quá chi phí phun thuốc được gọi là ngưỡng gì?",
        "unit": "Thuật ngữ",
        "correctAnswers": [
            "Ngưỡng gây hại kinh tế",
            "ngưỡng gây hại kinh tế",
            "Ngưỡng kinh tế",
            "ngưỡng kinh tế"
        ],
        "explain": "Ngưỡng gây hại kinh tế (ET) là chỉ số khoa học quyết định thời điểm can thiệp biện pháp hóa học."
    },
    {
        "id": "b15-sa4",
        "q": "Nhóm sinh vật có ích trong tự nhiên (như ong mắt đỏ, bọ rùa, bọ ngựa, nhện bắt mồi) chuyên săn bắt hoặc ký sinh tiêu diệt sâu hại được gọi chung là gì?",
        "unit": "Thuật ngữ",
        "correctAnswers": [
            "Thiên địch",
            "thiên địch",
            "Loài thiên địch"
        ],
        "explain": "Thiên địch là các loài sinh vật đối kháng tự nhiên của sâu hại, là đồng minh tin cậy của nông dân."
    }
  ],
  essay: [
    {
        "id": "bai-15-essay1",
        "q": "Phân biệt sự khác nhau giữa vòng đời biến thái hoàn toàn và biến thái không hoàn toàn ở sâu hại cây trồng. Giai đoạn nào gây hại chủ yếu ở mỗi nhóm?",
        "answer": "1. Biến thái hoàn toàn (ví dụ: bướm sâu đục thân, sâu tơ, bọ hung):\n- Vòng đời trải qua 4 giai đoạn rõ rệt: Trứng -> Sâu non (ấu trùng) -> Nhộng -> Sâu trưởng thành.\n- Sâu non có hình thái và cấu tạo miệng khác hoàn toàn con trưởng thành.\n- Giai đoạn gây hại chủ yếu: Giai đoạn sâu non (ấu trùng) với sức ăn gặm nhai phàm ăn tàn phá thân lá cây.\n2. Biến thái không hoàn toàn (ví dụ: rầy nâu, rầy xanh, châu chấu, bọ trĩ):\n- Vòng đời chỉ trải qua 3 giai đoạn: Trứng -> Sâu non (ấu trùng/rầy non) -> Sâu trưởng thành (không có pha nhộng).\n- Sâu non có hình thái gần giống sâu trưởng thành nhưng kích thước nhỏ hơn và chưa hoàn thiện cánh, cơ quan sinh sản.\n- Giai đoạn gây hại chủ yếu: Cả sâu non và sâu trưởng thành đều có cùng kiểu miệng chích hút/gặm nhai và đều tham gia gây hại liên tục suốt vòng đời."
    },
    {
        "id": "bai-15-essay2",
        "q": "Trình bày 4 nguyên tắc cơ bản trong Quản lý dịch hại tổng hợp (IPM) trên cây trồng.",
        "answer": "1. Trồng cây khỏe: Chọn giống tốt chống chịu sâu bệnh, làm đất kỹ, bón phân cân đối hợp lý, tưới tiêu khoa học giúp cây sinh trưởng mạnh, chống chịu tốt với sự tấn công của dịch hại.\n2. Bảo tồn và phát huy vai trò của thiên địch: Hạn chế tối đa sử dụng thuốc hóa học phổ rộng, tạo môi trường thuận lợi (trồng hoa bờ ruộng) để nuôi dưỡng các loài thiên địch (ong ký sinh, bọ rùa, nhện bắt mồi) khống chế sâu hại tự nhiên.\n3. Thường xuyên thăm đồng: Quan sát phát hiện sớm diễn biến sâu bệnh, thiên địch, tình trạng sinh trưởng cây trồng và thời tiết để có quyết định xử lý kịp thời.\n4. Nông dân trở thành chuyên gia: Người nông dân nắm vững kiến thức sinh thái đồng ruộng, kỹ năng nhận diện dịch hại và ngưỡng gây hại kinh tế để tự đưa ra các quyết định quản lý cây trồng khoa học, an toàn và hiệu quả kinh tế cao nhất."
    }
  ]
};

export default EXTRA_BAI_15;
