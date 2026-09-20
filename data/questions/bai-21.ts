import type { Question } from "@/lib/types";

// Ngân hàng câu hỏi Trắc nghiệm 4 lựa chọn: Bài 21 (Đủ 24 câu chuẩn GDPT 2018)
export const QUESTIONS_BAI_21: Question[] = [
  {
      "id": "b21-q01",
      "q": "Mục đích quan trọng hàng đầu của việc chế biến sản phẩm trồng trọt là gì?",
      "options": [
          "Đa dạng hóa sản phẩm, nâng cao giá trị gia tăng, kéo dài thời hạn sử dụng và giải quyết áp lực tiêu thụ nông sản mùa rộ",
          "Làm cho sản phẩm bị mất hết chất dinh dưỡng",
          "Tăng chi phí vận chuyển lên gấp 10 lần",
          "Làm cho nông sản không thể ăn được"
      ],
      "answer": 0,
      "explain": "Chế biến biến nông sản thô thành hàng hóa giá trị cao, bảo quản dài lâu và mở rộng thị trường."
  },
  {
      "id": "b21-q02",
      "q": "Phương pháp chế biến nào sau đây dựa trên nguyên lý làm giảm hàm lượng nước tự do trong sản phẩm xuống mức vi sinh vật không thể phát triển?",
      "options": [
          "Phương pháp sấy khô",
          "Phương pháp đóng hộp",
          "Phương pháp muối chua lên men",
          "Phương pháp ép nước quả tươi"
      ],
      "answer": 0,
      "explain": "Hạ độ ẩm làm vi sinh vật bị hạn sinh lý, ngừng hoạt động và bảo quản được lâu."
  },
  {
      "id": "b21-q03",
      "q": "Phương pháp sấy thăng hoa (Freeze Drying) là công nghệ sấy hiện đại hoạt động theo nguyên lý nào?",
      "options": [
          "Làm lạnh đông sản phẩm ở nhiệt độ âm sâu, sau đó hút chân không để nước đá thăng hoa trực tiếp từ thể rắn thành thể hơi",
          "Đun sản phẩm trong chảo dầu sôi 200 độ C",
          "Phơi nắng trên mái tôn rực lửa",
          "Hun khói bằng củi ướt"
      ],
      "answer": 0,
      "explain": "Nước ở thể rắn (đá) thăng hoa trực tiếp thành thể hơi trong môi trường chân không, giữ nguyên hình dạng và dinh dưỡng."
  },
  {
      "id": "b21-q04",
      "q": "Ưu điểm vượt trội của nông sản sấy thăng hoa so với sấy nhiệt thông thường là:",
      "options": [
          "Giữ nguyên vẹn 100% hình dạng, màu sắc, hương thơm, vitamin và dễ dàng hoàn nguyên cấu trúc xốp khi ngâm nước",
          "Làm sản phẩm bị cháy đen",
          "Làm sản phẩm teo nhỏ quắt lại",
          "Làm sản phẩm cứng như đá"
      ],
      "answer": 0,
      "explain": "Sấy thăng hoa giữ trọn vẹn màu sắc, dưỡng chất và cấu trúc xốp giòn tự nhiên."
  },
  {
      "id": "b21-q05",
      "q": "Phương pháp sấy nhiệt đối lưu (sấy nhiệt gió nóng) thường dùng luồng khí nóng ở nhiệt độ bao nhiêu?",
      "options": [
          "Khoảng 50°C đến 75°C",
          "Nhiệt độ 500°C làm cháy khét",
          "Nhiệt độ âm 20°C",
          "Nhiệt độ 0°C đóng băng"
      ],
      "answer": 0,
      "explain": "Gió nóng 50-75°C bốc hơi ẩm từ từ, chi phí vận hành hợp lý cho sấy hoa quả, thảo mộc."
  },
  {
      "id": "b21-q06",
      "q": "Quy trình chế biến đồ hộp rau quả (đóng hộp thanh trùng) bắt buộc phải có công đoạn then chốt nào để diệt trừ bào tử vi khuẩn kỵ khí nguy hiểm?",
      "options": [
          "Thanh trùng / tiệt trùng nhiệt độ cao trong nồi áp suất và ghép mí kín nắp hộp",
          "Ngâm nước đá lạnh",
          "Phơi nắng ngoài trời gió bụi",
          "Thêm phẩm màu công nghiệp"
      ],
      "answer": 0,
      "explain": "Thanh trùng áp suất cao (nhiệt độ > 100-121°C) tiêu diệt triệt để Clostridium botulinum."
  },
  {
      "id": "b21-q07",
      "q": "Phương pháp chế biến bằng lên men Lactic (muối chua rau cải, dưa chua, cà muối) dựa vào hoạt động của nhóm vi sinh vật nào?",
      "options": [
          "Vi khuẩn Lactic (Lactobacillus)",
          "Nấm mốc đen",
          "Vi khuẩn lao",
          "Virus khảm lá"
      ],
      "answer": 0,
      "explain": "Vi khuẩn Lactic chuyển hóa đường thành axit lactic, tạo vị chua thanh và ức chế vi khuẩn thối rữa."
  },
  {
      "id": "b21-q08",
      "q": "Tại sao nồng độ axit lactic tăng cao trong quá trình muối dưa lại giúp bảo quản rau củ lâu bị hỏng?",
      "options": [
          "Môi trường axit (pH hạ thấp dưới 4.0) làm ức chế và tiêu diệt các vi khuẩn gây thối rữa và nấm mốc có hại",
          "Làm cho dưa bị đóng băng",
          "Làm cho vi khuẩn biến thành chất đạm",
          "Tự sinh ra khí oxy"
      ],
      "answer": 0,
      "explain": "Độ chua pH < 4.0 là rào cản sinh học tiêu diệt các vi khuẩn hoại sinh gây thối hỏng thực phẩm."
  },
  {
      "id": "b21-q09",
      "q": "Sản phẩm chế biến nổi tiếng của cây dong riềng tại huyện Nguyên Bình (Cao Bằng) là sản phẩm nào?",
      "options": [
          "Miến dong Phia Đén",
          "Kẹo mạch nha",
          "Rượu vang nho",
          "Nước ép cam đóng hộp"
      ],
      "answer": 0,
      "explain": "Miến dong Phia Đén làm từ 100% tinh bột dong riềng nguyên chất, dai ngon nức tiếng."
  },
  {
      "id": "b21-q10",
      "q": "Quy trình sản xuất tinh bột sắn hoặc tinh bột dong riềng gồm các khâu cơ bản nào?",
      "options": [
          "Rửa sạch củ -> Nghiền nát -> Lọc tách bã xơ -> Lắng bột -> Rửa bột -> Làm khô (sấy hoặc phơi)",
          "Nướng chín củ rồi xay bột",
          "Nấu củ thành chè rồi đóng chai",
          "Ủ củ thối rồi ép lấy nước"
      ],
      "answer": 0,
      "explain": "Quy trình khai thác tinh bột: Nghiền mài -> Lọc tách bã -> Lắng tinh bột sạch -> Sấy khô."
  },
  {
      "id": "b21-q11",
      "q": "Chế biến nước quả ép (như nước cam, nước dứa, nước chanh leo) thường trải qua công đoạn nào để nước quả trong và mịn màng?",
      "options": [
          "Lắng lọc và xử lý bằng enzyme Pectinase để phân giải chất keo pectin gây đục",
          "Đổ thêm phẩm màu xanh",
          "Đun sôi đến khi cạn khô",
          "Cho thêm cát sạch"
      ],
      "answer": 0,
      "explain": "Enzyme pectinase thủy phân pectin keo làm nước quả trong suốt và không bị tách lớp."
  },
  {
      "id": "b21-q12",
      "q": "Phương pháp chế biến mứt quả (mứt gừng, mứt sen, mứt bí) dựa trên cơ chế bảo quản nào?",
      "options": [
          "Tạo nồng độ đường cực cao (áp suất thẩm thấu cao) làm co nguyên sinh và ức chế sự phát triển của vi sinh vật",
          "Dùng chất độc hóa học diệt khuẩn",
          "Đóng băng ở nhiệt độ cực lạnh",
          "Hút sạch không khí trong mứt"
      ],
      "answer": 0,
      "explain": "Nồng độ đường > 60-65% tạo áp suất thẩm thấu lớn, rút nước tế bào vi sinh vật làm chúng tê liệt."
  },
  {
      "id": "b21-q13",
      "q": "Chế biến chè (trà) xanh búp gồm khâu kỹ thuật quan trọng nào để ngăn chặn quá trình oxy hóa giữ màu nước xanh?",
      "options": [
          "Diệt men (sao hoặc hấp nhiệt độ cao làm bất hoạt enzyme polyphenol oxidase)",
          "Ủ lên men chua trong chum vại",
          "Ngâm lá chè vào nước đá lạnh",
          "Rắc muối hột lên búp chè"
      ],
      "answer": 0,
      "explain": "Diệt men ở nhiệt độ 250-300°C phá hủy enzyme oxy hóa, giữ diệp lục và polyphenol cho nước trà xanh trong."
  },
  {
      "id": "b21-q14",
      "q": "Chế biến chè đen (Black tea) khác chè xanh ở điểm cốt lõi nào?",
      "options": [
          "Có quá trình lên men oxy hóa hoàn toàn để polyphenol chuyển thành theaflavin và thearubigin tạo màu nước đỏ nâu và vị đậm đà",
          "Được nhuộm bằng phẩm màu đen",
          "Làm từ lá cây thông",
          "Chỉ làm từ rễ cây chè"
      ],
      "answer": 0,
      "explain": "Chè đen lên men oxy hóa tạo hương thơm hoa quả và màu nước hồng ngọc đặc trưng."
  },
  {
      "id": "b21-q15",
      "q": "Công nghệ chế biến bột hạt dẻ Trùng Khánh (Cao Bằng) thành bánh hạt dẻ, ngũ cốc dinh dưỡng giúp:",
      "options": [
          "Nâng tầm giá trị hạt dẻ đặc sản, mở rộng thời hạn bảo quản và thuận tiện vận chuyển làm quà biếu du lịch",
          "Làm cho hạt dẻ bị đắng ngắt",
          "Làm hạt dẻ mọc thêm gai nhọn",
          "Giảm giá trị thương mại của hạt dẻ"
      ],
      "answer": 0,
      "explain": "Bánh hạt dẻ và bột hạt dẻ là đặc sản OCOP quà tặng nổi bật của du lịch Trùng Khánh, Cao Bằng."
  },
  {
      "id": "b21-q16",
      "q": "Lên men vang quả (như vang nho, vang dâu tằm) sử dụng tác nhân vi sinh vật nào?",
      "options": [
          "Nấm men Saccharomyces cerevisiae",
          "Vi khuẩn tả",
          "Nấm mốc đen Rhizopus",
          "Vi khuẩn lactic"
      ],
      "answer": 0,
      "explain": "Nấm men chuyển hóa đường glucozo/fructozo thành ethanol rượu và khí CO2 tạo hương vị rượu vang nồng nàn."
  },
  {
      "id": "b21-q17",
      "q": "Công nghệ chế biến sâu (Deep Processing) trong ngành nông nghiệp hướng tới:",
      "options": [
          "Chiết xuất các hoạt chất sinh học, tinh dầu, dược liệu quý và sản xuất thực phẩm chức năng giá trị cao từ nông sản",
          "Chỉ đào sâu nông sản xuống lòng đất",
          "Đốt nông sản thành tro than xỉ",
          "Chỉ bán nông sản tươi thô chưa sơ chế"
      ],
      "answer": 0,
      "explain": "Chế biến sâu tạo các sản phẩm tinh chất, tinh dầu, curcumin, collagen giá trị gia tăng gấp hàng chục lần."
  },
  {
      "id": "b21-q18",
      "q": "Tinh dầu hồi (sản phẩm thế mạnh của Cao Bằng và Lạng Sơn) được chế biến chủ yếu bằng phương pháp nào?",
      "options": [
          "Chưng cất lôi cuốn hơi nước",
          "Ép nguội bằng máy ép mía",
          "Đun sôi với đường mía",
          "Ngâm trong nước muối"
      ],
      "answer": 0,
      "explain": "Hơi nước cuốn theo tinh dầu Anethole bay lên, ngưng tụ và tách tinh dầu nguyên chất."
  },
  {
      "id": "b21-q19",
      "q": "Yêu cầu an toàn vệ sinh thực phẩm trong nhà máy chế biến nông sản theo chuẩn HACCP là:",
      "options": [
          "Kiểm soát nghiêm ngặt các mối nguy (vật lý, hóa học, sinh học) tại từng công đoạn chế biến trọng yếu",
          "Không cần vệ sinh máy móc thiết bị",
          "Cho phép công nhân không đeo găng tay khẩu trang",
          "Sử dụng nước thải chưa qua xử lý"
      ],
      "answer": 0,
      "explain": "HACCP là hệ thống quản lý an toàn thực phẩm toàn cầu kiểm soát các điểm giới hạn tới hạn CCP."
  },
  {
      "id": "b21-q20",
      "q": "Sản phẩm rau củ sấy giòn (chuối sấy, mít sấy giòn) chế biến bằng công nghệ chiên chân không ở nhiệt độ thấp có ưu điểm gì?",
      "options": [
          "Giữ được độ giòn xốp tự nhiên, không bị cháy khét và hàm lượng dầu lưu giữ trong sản phẩm rất thấp",
          "Sản phẩm sũng nước dầu mỡ khét lẹt",
          "Sản phẩm biến thành màu đen kịt",
          "Sản phẩm bị nát vụn thành bột mịn"
      ],
      "answer": 0,
      "explain": "Chiên chân không ở 80-90°C giúp dầu không bị biến chất, sản phẩm giòn rụm và ít ngấm dầu."
  },
  {
      "id": "b21-q21",
      "q": "Bao bì nhôm hút chân không dùng đựng chè búp sau chế biến có tác dụng quan trọng gì?",
      "options": [
          "Ngăn cản ánh sáng, oxy và hơi ẩm xâm nhập làm oxy hóa và mất hương thơm tinh dầu của chè",
          "Làm cho chè nặng thêm 5 kg",
          "Để hộp chè tự phát sáng trong đêm",
          "Để tạo tiếng kêu vui tai"
      ],
      "answer": 0,
      "explain": "Túi nhôm cản sáng và hút chân không giữ hương thơm và độ khô giòn của cánh chè nhiều năm."
  },
  {
      "id": "b21-q22",
      "q": "Phương pháp thanh trùng Pasteur trong chế biến nước quả đóng chai thường gia nhiệt ở mức nào?",
      "options": [
          "Nhiệt độ 72°C đến 85°C trong khoảng 15 - 30 giây rồi làm lạnh nhanh",
          "Nhiệt độ 1000°C làm cháy thành than",
          "Nhiệt độ 0°C",
          "Nhiệt độ phòng 25°C"
      ],
      "answer": 0,
      "explain": "Thanh trùng Pasteur tiêu diệt vi khuẩn gây bệnh nhưng bảo tồn được vitamin và hương vị tươi ngon của nước quả."
  },
  {
      "id": "b21-q23",
      "q": "Tận dụng phụ phẩm bã vỏ quả sau chế biến nước ép để làm gì theo mô hình nông nghiệp tuần hoàn?",
      "options": [
          "Ủ làm phân bón hữu cơ compost hoặc thức ăn bổ sung giàu chất xơ cho gia súc",
          "Vứt xả thẳng xuống sông suối gây ô nhiễm",
          "Đem chôn lấp lẫn với rác thải nhựa",
          "Đốt cháy khói bụi mù mịt"
      ],
      "answer": 0,
      "explain": "Vỏ bã quả giàu pectin và khoáng chất, ủ làm phân compost hoặc thức ăn gia súc khép kín tuần hoàn."
  },
  {
      "id": "b21-q24",
      "q": "Mối liên kết '4 nhà' (Nhà nước - Nhà khoa học - Nhà doanh nghiệp - Nhà nông) trong chế biến nông sản nhằm mục tiêu:",
      "options": [
          "Xây dựng chuỗi giá trị nông nghiệp bền vững từ vùng nguyên liệu đến chế biến tinh sâu và tiêu thụ xuất khẩu",
          "Làm tăng số lượng cuộc họp hành chính",
          "Giải thể các hợp tác xã nông nghiệp",
          "Ngừng áp dụng khoa học kỹ thuật"
      ],
      "answer": 0,
      "explain": "Liên kết 4 nhà bảo đảm đầu ra bao tiêu nông sản cho nông dân và nguồn nguyên liệu ổn định cho nhà máy."
  }
];

export default QUESTIONS_BAI_21;
