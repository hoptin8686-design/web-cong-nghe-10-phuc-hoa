import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 16
export const EXTRA_BAI_16: LessonExtra = {
  tf: [
    {
        "id": "b16-tf1",
        "context": "Đặc điểm gây hại của sâu cuốn lá nhỏ và sâu đục thân hai chấm trên lúa:",
        "statements": [
            {
                "text": "Sâu cuốn lá nhỏ nhả tơ gấp mép lá thành bao tổ, nằm bên trong gặm ăn chất xanh để lại màng trắng.",
                "answer": true,
                "explain": "Đúng. Đây là triệu chứng gây hại điển hình của sâu cuốn lá."
            },
            {
                "text": "Sâu đục thân hai chấm ở giai đoạn đẻ nhánh làm dảnh lúa bị chết héo (hiện tượng dảnh héo).",
                "answer": true,
                "explain": "Đúng. Sâu non cắn đứt mạch dẫn nõn non làm dảnh lúa héo khô."
            },
            {
                "text": "Ở giai đoạn trổ bông, sâu đục thân cắn cuống bông tạo nên hiện tượng bông bạc trắng lép hạt.",
                "answer": true,
                "explain": "Đúng. Bông bạc đứng thẳng không hạt là dấu hiệu sâu đục thân cắn cuống."
            },
            {
                "text": "Nên phun thuốc trừ sâu đục thân khi sâu đã hóa thành nhộng nằm sâu trong gốc rạ.",
                "answer": false,
                "explain": "Sai. Giai đoạn nhộng vỏ dày không ăn uống thuốc không ngấm được, phải phun lúc sâu non mới nở."
            }
        ]
    },
    {
        "id": "b16-tf2",
        "context": "Đặc điểm gây hại của Rầy nâu và Sâu tơ:",
        "statements": [
            {
                "text": "Rầy nâu chích hút nhựa ở phần gốc thân bẹ lúa và là vector truyền bệnh virus vàng lùn, lùn xoắn lá.",
                "answer": true,
                "explain": "Đúng. Rầy nâu vừa gây hại trực tiếp vừa truyền bệnh dịch nguy hiểm."
            },
            {
                "text": "Hiện tượng 'cháy rầy' xảy ra khi mật độ rầy nâu quá cao làm vạt lúa bị khô héo loang rộng.",
                "answer": true,
                "explain": "Đúng. Hút kiệt nhựa làm mô lúa chết khô như bị lửa táp."
            },
            {
                "text": "Sâu tơ là loài sâu hại có chu kỳ sống rất dài, 2 năm mới đẻ một lứa trứng.",
                "answer": false,
                "explain": "Sai. Sâu tơ có vòng đời rất ngắn (15-20 ngày), đẻ hàng chục lứa mỗi năm."
            },
            {
                "text": "Sâu tơ cắn thủng phiến lá rau bắp cải thành nhiều lỗ chỗ như màng lưới rách.",
                "answer": true,
                "explain": "Đúng. Sâu tơ phá hoại màng biểu bì để lại lỗ thủng li ti trên lá bắp cải."
            }
        ]
    },
    {
        "id": "b16-tf3",
        "context": "Kỹ thuật phòng trừ dịch hại tổng hợp đối với sâu hại lúa và màu:",
        "statements": [
            {
                "text": "Gieo cấy lúa đồng loạt tập trung né rầy là biện pháp canh tác khống chế rầy nâu rất hiệu quả.",
                "answer": true,
                "explain": "Đúng. Tránh lây lan rầy gối vụ giữa các trà lúa khác nhau."
            },
            {
                "text": "Bón thừa nhiều phân đạm làm cây lúa cứng cáp giúp kháng sâu cuốn lá và rầy nâu tốt hơn.",
                "answer": false,
                "explain": "Sai. Thừa đạm làm lá rậm rạp mềm yếu, tạo điều kiện lý tưởng cho sâu cuốn lá và rầy nâu bùng phát."
            },
            {
                "text": "Chế phẩm vi khuẩn Bt diệt trừ rất tốt sâu tơ, sâu keo mùa thu mà không gây hại cho người và thiên địch.",
                "answer": true,
                "explain": "Đúng. Tinh thể độc tố protein Bt chỉ tác động lên ruột sâu non cánh vảy."
            },
            {
                "text": "Bẫy bả Pheromone giới tính giúp thu hút và tiêu diệt bướm đực, làm giảm khả năng sinh sản của sâu hại.",
                "answer": true,
                "explain": "Đúng. Biện pháp vật lý sinh học an toàn không độc hại."
            }
        ]
    },
    {
        "id": "b16-tf4",
        "context": "Thực tế kiểm soát sâu keo mùa thu và bọ trĩ tại Cao Bằng:",
        "statements": [
            {
                "text": "Sâu keo mùa thu cắn phá rất dữ dội vào đọt nõn ngô non, để lại nhiều phân sâu như mùn cưa.",
                "answer": true,
                "explain": "Đúng. Phân sâu đùn ra đầy nõn là dấu hiệu nhận biết sâu keo mùa thu."
            },
            {
                "text": "Bọ trĩ thường phát sinh phát triển mạnh trong điều kiện thời tiết mưa dầm ngập úng liên tục nhiều tuần.",
                "answer": false,
                "explain": "Sai. Mưa to làm trôi bọ trĩ; bọ trĩ chỉ bùng phát khi trời khô hạn, nắng nóng đầu vụ."
            },
            {
                "text": "Luân phiên đổi các nhóm thuốc trừ sâu khác nhau giúp hạn chế hiện tượng sâu tơ hình thành tính kháng thuốc.",
                "answer": true,
                "explain": "Đúng. Cắt đứt cơ chế thích nghi kháng thuốc của quần thể sâu."
            },
            {
                "text": "Thả đàn vịt vào ruộng lúa sục bùn bắt rầy nâu và ốc bươu vàng là mô hình nông nghiệp sinh thái bền vững.",
                "answer": true,
                "explain": "Đúng. Vịt diệt rầy tự nhiên và phân vịt làm giàu dinh dưỡng hữu cơ cho ruộng."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b16-sa1",
        "q": "Hiện tượng cả vạt lúa bị rầy nâu chích hút kiệt nhựa khô héo vàng xơ xác loang nhanh khắp ruộng thường được bà con nông dân gọi là hiện tượng gì?",
        "unit": "Tên hiện tượng",
        "correctAnswers": [
            "Cháy rầy",
            "cháy rầy",
            "Hiện tượng cháy rầy"
        ],
        "explain": "Cháy rầy xảy ra khi mật độ rầy nâu bùng phát hàng vạn con/m2 hút cạn dịch nhựa nuôi cây."
    },
    {
        "id": "b16-sa2",
        "q": "Triệu chứng bông lúa trổ thẳng đứng, màu trắng bạc, hạt lép lửng hoàn toàn do sâu đục thân hai chấm cắn đứt cuống bông được gọi là hiện tượng gì?",
        "unit": "Tên hiện tượng",
        "correctAnswers": [
            "Bông bạc",
            "bông bạc",
            "Hiện tượng bông bạc"
        ],
        "explain": "Bông bạc lúa là triệu chứng thiệt hại năng suất nặng nề nhất do sâu đục thân gây ra."
    },
    {
        "id": "b16-sa3",
        "q": "Tên loài sâu hại nguy hiểm cắn thủng lá các loại rau họ Thập tự (như bắp cải, su hào, súp lơ) có khả năng kháng thuốc trừ sâu hóa học cực nhanh là sâu gì?",
        "unit": "Tên loài sâu",
        "correctAnswers": [
            "Sâu tơ",
            "sâu tơ"
        ],
        "explain": "Sâu tơ (Plutella xylostella) là đối tượng dịch hại nguy hiểm số 1 trên rau họ Cải."
    },
    {
        "id": "b16-sa4",
        "q": "Tên loài sâu hại ngoại lai phàm ăn, chuyên cắn phá dữ dội nõn ngô non và bắp ngô xuất hiện ở Việt Nam vài năm gần đây có tên gọi là sâu keo gì?",
        "unit": "Tên loài sâu",
        "correctAnswers": [
            "Sâu keo mùa thu",
            "sâu keo mùa thu"
        ],
        "explain": "Sâu keo mùa thu (Spodoptera frugiperda) là loài sâu hại nguy hiểm mới xâm thực vào các vùng ngô Việt Nam."
    }
  ],
  essay: [
    {
        "id": "bai-16-essay1",
        "q": "Mô tả đặc điểm gây hại và đề xuất 4 biện pháp phòng trừ hiệu quả sâu cuốn lá nhỏ hại lúa.",
        "answer": "1. Đặc điểm gây hại:\n- Sâu non nhả tơ cuốn gập mép lá lúa theo chiều dọc thành một bao tổ hình ống tròn.\n- Sâu nằm ẩn nấp bên trong bao lá cạp ăn lớp biểu bì chất diệp lục màu xanh, để lại lớp màng biểu bì màu trắng mỏng.\n- Khi bị hại nặng, cả ruộng lúa xơ xác bạc trắng, giảm khả năng quang hợp nghiêm trọng làm lúa trổ nghẹn, hạt lép lửng, sụt giảm năng suất mạnh.\n2. Biện pháp phòng trừ:\n- Vệ sinh đồng ruộng, dọn sạch cỏ bờ mương là nơi trú ngụ của sâu bướm.\n- Bón phân cân đối N-P-K, tuyệt đối không bón thừa phân đạm làm lá lúa rậm rạp mềm yếu.\n- Bảo vệ các loài thiên địch trên ruộng lúa (ong mắt đỏ ký sinh trứng, bọ rùa, nhện bắt mồi).\n- Kiểm tra thăm đồng thường xuyên; khi mật độ sâu non tuổi 1-2 vượt ngưỡng gây hại (> 20 con/m2 ở giai đoạn làm đòng), tiến hành phun các loại thuốc sinh học (Bt, nấm xanh) hoặc thuốc đặc trị an toàn."
    },
    {
        "id": "bai-16-essay2",
        "q": "Giải thích vì sao rầy nâu hại lúa lại được coi là đối tượng dịch hại nguy hiểm hàng đầu và biện pháp quản lý rầy nâu bền vững.",
        "answer": "1. Vì sao rầy nâu nguy hiểm hàng đầu:\n- Gây hại trực tiếp: Cả rầy non và rầy trưởng thành tập trung dày đặc ở gốc bẹ lúa chích hút dịch nhựa sống. Khi mật độ cao gây hiện tượng 'cháy rầy' làm lúa khô héo từng chòm rồi lan ra toàn ruộng gây mất trắng.\n- Truyền bệnh virus nguy hiểm: Rầy nâu là vector môi giới truyền hai bệnh virus nan y trên lúa là bệnh vàng lùn và lùn xoắn lá, bệnh này không có thuốc hóa học chữa trị.\n- Khả năng di cư xa: Rầy trưởng thành cánh dài có thể nương theo gió bay xa hàng trăm kilomet truyền dịch giữa các vùng.\n2. Biện pháp quản lý bền vững:\n- Sử dụng giống lúa kháng rầy nâu hoặc giống chống chịu tốt.\n- Gieo cấy đồng loạt, tập trung né rầy theo thông báo hướng dẫn của cơ quan bảo vệ thực vật địa phương.\n- Cấy mật độ vừa phải, giữ mực nước hợp lý, bón phân cân đối N-P-K (tăng cường kali và lân).\n- Nuôi dưỡng và bảo vệ thiên địch (nhện lycosa, bọ xít mù xanh, bọ rùa, cá, vịt).\n- Chỉ phun thuốc trừ rầy khi mật độ rầy cám nở rộ vượt ngưỡng (từ 3 con/dảnh trở lên) bằng các loại thuốc ức chế sinh trưởng hoặc thuốc nội hấp đặc hiệu, phun sát xuống phần gốc lúa."
    }
  ]
};

export default EXTRA_BAI_16;
