import type { Question } from "@/lib/types";

// Ngân hàng câu hỏi Trắc nghiệm 4 lựa chọn: Bài 18 (Đủ 24 câu chuẩn GDPT 2018)
export const QUESTIONS_BAI_18: Question[] = [
  {
      "id": "b18-q01",
      "q": "Chế phẩm vi sinh phòng trừ sâu, bệnh hại cây trồng là gì?",
      "options": [
          "Sản phẩm sinh học chứa các vi sinh vật sống có ích (hoặc độc tố, enzyme của chúng) có khả năng ức chế, tiêu diệt dịch hại",
          "Hóa chất tổng hợp cực độc từ dầu mỏ",
          "Thuốc trừ sâu dạng khí nén dễ cháy nổ",
          "Phân đạm hóa học hòa tan"
      ],
      "answer": 0,
      "explain": "Chế phẩm vi sinh sử dụng nấm, vi khuẩn, virus hoặc xạ khuẩn có ích khống chế sâu bệnh."
  },
  {
      "id": "b18-q02",
      "q": "Vi khuẩn Bacillus thuringiensis (Bt) tiêu diệt sâu hại bằng cơ chế sinh học nào?",
      "options": [
          "Sinh ra tinh thể protein độc tố (Cry) gây thủng ruột sâu non khi sâu ăn phải lá cây có dính vi khuẩn",
          "Tiết ra chất dính giữ chặt chân sâu",
          "Đốt nóng thân sâu làm sâu bốc cháy",
          "Hút sạch máu của sâu từ xa"
      ],
      "answer": 0,
      "explain": "Độc tố tinh thể Bt hòa tan trong dịch ruột kiềm tính của sâu non, gắn thụ thể gây thủng ruột làm sâu ngừng ăn và chết."
  },
  {
      "id": "b18-q03",
      "q": "Đặc tính ưu việt của chế phẩm vi khuẩn Bt đối với hệ sinh thái là gì?",
      "options": [
          "Tính chọn lọc rất cao, chỉ diệt sâu hại bộ Cánh vảy, hoàn toàn an toàn cho người, gia súc và thiên địch",
          "Tiêu diệt tất cả mọi loài sinh vật sống trong khu vườn",
          "Làm cho đất bị chai cứng như bê tông",
          "Làm nước suối biến thành màu đen"
      ],
      "answer": 0,
      "explain": "Độc tố Bt chỉ tác động lên ruột sâu non, an toàn tuyệt đối cho người, ong mật và động vật máu nóng."
  },
  {
      "id": "b18-q04",
      "q": "Chế phẩm nấm trắng (Beauveria bassiana) và nấm xanh (Metarhizium anisopliae) chuyên dùng để phòng trừ nhóm dịch hại nào?",
      "options": [
          "Các loài sâu hại, rầy nâu, bọ xít, châu chấu, sâu tơ, bọ hà khoai lang",
          "Các loài vi khuẩn gây thối nhũn",
          "Cỏ dại trong ruộng nước",
          "Các loài nấm mốc trên bánh mì"
      ],
      "answer": 0,
      "explain": "Beauveria và Metarhizium là các loài nấm ký sinh côn trùng qua lớp vỏ cutin chitin."
  },
  {
      "id": "b18-q05",
      "q": "Cơ chế ký sinh tiêu diệt sâu hại của nấm ký sinh côn trùng (Beauveria, Metarhizium) là:",
      "options": [
          "Bào tử nấm bám vào biểu bì sâu, nảy mầm đâm xuyên qua vỏ chitin, phát triển sợi nấm hút kiệt dinh dưỡng làm sâu chết khô cứng",
          "Làm cho sâu bị chóng mặt",
          "Biến sâu thành thức ăn cho cá",
          "Làm cho sâu mọc thêm cánh bay đi"
      ],
      "answer": 0,
      "explain": "Sợi nấm xuyên thủng lớp biểu bì, tiết độc tố làm côn trùng tê liệt chết cứng, mọc lớp nấm mốc trắng/xanh bao phủ xác sâu."
  },
  {
      "id": "b18-q06",
      "q": "Xác côn trùng bị nấm trắng Beauveria bassiana giết chết thường có đặc điểm hình thái nào?",
      "options": [
          "Xác sâu khô cứng lại và được bao bọc bởi một lớp màng phấn nấm màu trắng như vôi bột",
          "Xác sâu tan chảy thành nước bùn",
          "Xác sâu biến thành màu vàng óng",
          "Xác sâu bay lơ lửng trong gió"
      ],
      "answer": 0,
      "explain": "Sâu chết cứng như hóa thạch (bệnh nấm cứng trắng hay bệnh vôi sâu)."
  },
  {
      "id": "b18-q07",
      "q": "Xác côn trùng bị nấm xanh Metarhizium anisopliae tiêu diệt có đặc điểm gì?",
      "options": [
          "Xác sâu chết cứng và phủ một lớp bột bào tử màu xanh xỉn hoặc xanh ôliu",
          "Xác sâu đổi sang màu đỏ máu",
          "Xác sâu phát ra âm thanh",
          "Xác sâu tự động bốc cháy"
      ],
      "answer": 0,
      "explain": "Xác côn trùng chết cứng được phủ kín bởi lớp nấm màu xanh cỏ úa đặc trưng."
  },
  {
      "id": "b18-q08",
      "q": "Chế phẩm virus NPV (Nuclear Polyhedrosis Virus) chuyên dùng để phòng trừ loài sâu nào sau đây?",
      "options": [
          "Sâu xanh da láng, sâu cắn gié lúa, sâu khoang hại rau màu",
          "Rệp sáp hại rễ cà phê",
          "Tuyến trùng hại hồ tiêu",
          "Chuột đồng cắn phá lúa"
      ],
      "answer": 0,
      "explain": "Virus đa diện nhân NPV ký sinh đặc hiệu làm nhũn tế bào sâu xanh da láng và sâu khoang."
  },
  {
      "id": "b18-q09",
      "q": "Đặc điểm của sâu non bị nhiễm virus NPV trước khi chết là:",
      "options": [
          "Sâu bò lên ngọn cây cao, thân mềm nhũn, ruột thối rữa và treo chúc ngược đầu xuống dưới rồi chết",
          "Sâu chui sâu xuống lòng đất 5 mét",
          "Sâu mọc thêm sừng nhọn trên đầu",
          "Sâu đổi sang màu trắng tinh"
      ],
      "answer": 0,
      "explain": "Hiện tượng treo chúc ngược ngọn cây giúp dịch cơ thể chứa virus rơi vãi lây lan ra toàn ruộng."
  },
  {
      "id": "b18-q10",
      "q": "Nấm đối kháng Trichoderma là khắc tinh của nhóm tác nhân gây bệnh nào cho cây trồng?",
      "options": [
          "Các loài nấm đất gây bệnh thối rễ, lở cổ rễ, chết yểu (Rhizoctonia, Fusarium, Pythium, Phytophthora)",
          "Các loài sâu đục thân lúa",
          "Các loài bướm ăn đêm",
          "Cỏ lồng vực ngoài đồng"
      ],
      "answer": 0,
      "explain": "Trichoderma là vũ khí sinh học hàng đầu tiêu diệt các loài nấm gây thối rễ trong lòng đất."
  },
  {
      "id": "b18-q11",
      "q": "Cơ chế đối kháng của nấm Trichoderma đối với các nấm bệnh trong đất bao gồm:",
      "options": [
          "Cạnh tranh dinh dưỡng và không gian sống, ký sinh trực tiếp trên sợi nấm bệnh và tiết kháng sinh, enzyme phân giải vách nấm bệnh",
          "Tự sinh ra khí oxy nguyên chất",
          "Làm đất biến thành kim loại sắt",
          "Hút sạch nước trong đất"
      ],
      "answer": 0,
      "explain": "Tiết chitinase, glucanase phá vỡ vách sợi nấm bệnh và quấn chặt tiêu diệt nấm hại."
  },
  {
      "id": "b18-q12",
      "q": "Ưu điểm vượt trội của chế phẩm vi sinh so với thuốc bảo vệ thực vật hóa học là gì?",
      "options": [
          "An toàn cho người, không để lại dư lượng độc hại trong nông sản, thân thiện với môi trường và không gây kháng thuốc",
          "Diệt sâu bệnh chết ngay lập tức sau 1 giây",
          "Có thể dùng thay thế nước uống",
          "Giá thành đắt gấp 1000 lần"
      ],
      "answer": 0,
      "explain": "Bảo vệ sức khỏe người sản xuất, tạo nông sản sạch hữu cơ đạt chuẩn xuất khẩu."
  },
  {
      "id": "b18-q13",
      "q": "Hạn chế của các chế phẩm vi sinh phòng trừ sâu bệnh là gì?",
      "options": [
          "Tác dụng diệt trừ chậm hơn thuốc hóa học (mất 3-5 ngày), thời gian bảo quản ngắn và mẫn cảm với nắng gắt",
          "Gây ô nhiễm nguồn nước sinh hoạt",
          "Làm chết toàn bộ gia súc gia cầm",
          "Làm đất bị chua phèn nặng"
      ],
      "answer": 0,
      "explain": "Vi sinh vật cần thời gian ủ bệnh, nhân sinh khối và đòi hỏi bảo quản mát, tránh nắng gắt."
  },
  {
      "id": "b18-q14",
      "q": "Thời điểm phun chế phẩm vi sinh (Bt, nấm xanh, nấm trắng) thích hợp nhất trong ngày là:",
      "options": [
          "Vào chiều mát hoặc ngày trời râm mát, độ ẩm không khí cao",
          "Vào đúng 12 giờ trưa nắng gắt 40 độ C",
          "Khi có mưa rào to tầm tã",
          "Vào ban đêm khi trời có sương muối buốt giá"
      ],
      "answer": 0,
      "explain": "Tia tử ngoại (UV) mặt trời tiêu diệt bào tử vi sinh vật; chiều mát giúp bào tử duy trì ẩm độ nảy mầm."
  },
  {
      "id": "b18-q15",
      "q": "Tại sao tuyệt đối KHÔNG ĐƯỢC pha chung chế phẩm nấm đối kháng Trichoderma với thuốc trừ nấm hóa học?",
      "options": [
          "Thuốc trừ nấm hóa học sẽ tiêu diệt luôn nấm đối kháng Trichoderma, làm mất hoàn toàn hiệu lực sinh học",
          "Vì hỗn hợp sẽ phát nổ dữ dội",
          "Vì làm cây mọc hoa màu đen",
          "Vì làm đất biến thành thạch cao"
      ],
      "answer": 0,
      "explain": "Thuốc diệt nấm hóa học không phân biệt được nấm có ích hay nấm hại, sẽ giết chết Trichoderma ngay lập tức."
  },
  {
      "id": "b18-q16",
      "q": "Chế phẩm nấm Trichoderma thường được sử dụng bằng phương pháp nào hiệu quả nhất?",
      "options": [
          "Ủ cùng phân chuồng, phân hữu cơ rồi bón lót hoặc tưới vào vùng rễ cây trồng",
          "Phun lên ngọn cây ăn quả cao vút",
          "Đốt xông khói vào vườn",
          "Bôi lên vỏ quả chín sắp hái"
      ],
      "answer": 0,
      "explain": "Ủ cùng phân chuồng tạo hệ đệm dinh dưỡng nhân sinh khối nấm trước khi đưa vào đất bảo vệ rễ."
  },
  {
      "id": "b18-q17",
      "q": "Kháng sinh nông nghiệp (Validamycin, Kasugamycin) có nguồn gốc sản xuất từ nhóm vi sinh vật nào?",
      "options": [
          "Xạ khuẩn (Streptomyces) qua quá trình lên men sinh học",
          "Từ các loài cá biển sâu",
          "Từ nấm độc tán trắng",
          "Từ virus dại"
      ],
      "answer": 0,
      "explain": "Xạ khuẩn tiết các hợp chất kháng sinh sinh học đặc hiệu diệt nấm và vi khuẩn hại cây trồng."
  },
  {
      "id": "b18-q18",
      "q": "Để tăng độ bám dính và hiệu lực của chế phẩm nấm ký sinh côn trùng khi phun, người ta thường pha thêm:",
      "options": [
          "Chất bám dính sinh học hoặc một vài giọt dầu ăn/nước rửa chén pha cực loãng",
          "Axit sunfuric đậm đặc",
          "Nước cất đun sôi 100 độ C",
          "Bột vôi sống tỏa nhiệt"
      ],
      "answer": 0,
      "explain": "Chất bám dính giúp bào tử bám chặt vào lớp sáp trên vỏ côn trùng mà không bị rửa trôi."
  },
  {
      "id": "b18-q19",
      "q": "Khi phun chế phẩm vi khuẩn Bt diệt sâu tơ, giai đoạn sâu nào nhạy cảm và dễ bị tiêu diệt nhất?",
      "options": [
          "Sâu non tuổi 1 và tuổi 2 mới nở",
          "Giai đoạn trứng sâu",
          "Giai đoạn nhộng nằm trong kén tơ",
          "Giai đoạn bướm trưởng thành bay ngoài ruộng"
      ],
      "answer": 0,
      "explain": "Sâu non tuổi 1-2 vỏ ruột mỏng, mẫn cảm cao nhất với độc tố tinh thể Cry của Bt."
  },
  {
      "id": "b18-q20",
      "q": "Hiện tượng 'lây nhiễm chéo' trong quần thể sâu hại khi sử dụng nấm ký sinh côn trùng có ý nghĩa gì?",
      "options": [
          "Côn trùng bị nhiễm nấm sẽ cọ xát lây lan bào tử nấm sang các cá thể sâu khỏe mạnh khác trong bầy, kéo dài hiệu lực diệt sâu",
          "Làm cho sâu sinh sôi nhanh gấp đôi",
          "Làm cho cây trồng bị chết theo",
          "Làm đất bị cằn cỗi"
      ],
      "answer": 0,
      "explain": "Bào tử nấm trên xác sâu phát tán theo gió và va chạm, tạo nên đợt dịch bệnh thứ cấp diệt sạch sâu hại."
  },
  {
      "id": "b18-q21",
      "q": "Mô hình sản xuất cam sành hoặc quýt trà lanh hữu cơ tại Cao Bằng ưu tiên sử dụng chế phẩm nào để trừ rệp sáp và bọ trĩ?",
      "options": [
          "Chế phẩm nấm xanh Metarhizium kết hợp dầu khoáng sinh học",
          "Thuốc trừ sâu hóa học photpho hữu cơ cực độc",
          "Phun nước muối đặc",
          "Đốt lửa hun khói dưới tán cây"
      ],
      "answer": 0,
      "explain": "Nấm xanh và dầu khoáng sinh học an toàn cho quả cam sành đặc sản, không tồn dư hóa chất độc."
  },
  {
      "id": "b18-q22",
      "q": "Bảo quản chế phẩm vi sinh nông nghiệp cần tuân thủ điều kiện nào?",
      "options": [
          "Nơi khô ráo, thoáng mát, nhiệt độ phòng (dưới 30 độ C), tránh ánh sáng mặt trời chiếu trực tiếp",
          "Để ngoài sân phơi nắng hè 45 độ C",
          "Để cạnh lò nướng bánh mì",
          "Để ngâm dưới đáy giếng nước"
      ],
      "answer": 0,
      "explain": "Bảo quản mát giúp tế bào vi sinh vật sống duy trì mật độ cao trong suốt hạn dùng."
  },
  {
      "id": "b18-q23",
      "q": "Tại sao sử dụng chế phẩm vi sinh lại góp phần xây dựng nền nông nghiệp tuần hoàn và bền vững?",
      "options": [
          "Giảm thiểu hóa chất độc hại, bảo vệ đa dạng sinh thái, tái tạo độ phì sinh học của đất và tạo nông sản sạch giá trị cao",
          "Vì chế phẩm vi sinh làm cho cây không cần nước",
          "Vì nông dân không cần chăm sóc mùa màng",
          "Vì đất tự động biến thành phân bón"
      ],
      "answer": 0,
      "explain": "Cân bằng sinh thái tự nhiên là nền tảng cốt lõi của nông nghiệp tuần hoàn phát thải thấp."
  },
  {
      "id": "b18-q24",
      "q": "Xu hướng nghiên cứu và phát triển chế phẩm vi sinh phòng trừ sâu bệnh hiện nay là:",
      "options": [
          "Phát triển các chế phẩm đa chức năng kết hợp nhiều chủng vi sinh vật (vừa kháng nấm, vừa trừ sâu, vừa kích thích rễ)",
          "Tập trung sản xuất hóa chất độc hại cực mạnh",
          "Ngừng ứng dụng công nghệ sinh học",
          "Nhập khẩu chất thải nguy hại"
      ],
      "answer": 0,
      "explain": "Công nghệ vi sinh tích hợp đa chủng (multi-strain consortia) mang lại hiệu quả bảo vệ cây trồng toàn diện."
  }
];

export default QUESTIONS_BAI_18;
