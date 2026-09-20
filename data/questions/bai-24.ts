import type { Question } from "@/lib/types";

// Ngân hàng câu hỏi Trắc nghiệm 4 lựa chọn: Bài 24 (Đủ 24 câu chuẩn GDPT 2018)
export const QUESTIONS_BAI_24: Question[] = [
  {
      "id": "b24-q01",
      "q": "Công nghệ nào sau đây là 'bộ não' giúp kết nối các cảm biến đo độ ẩm đất, nhiệt độ và tự động kích hoạt máy bơm tưới trong nông nghiệp thông minh?",
      "options": [
          "Internet vạn vật (IoT - Internet of Things)",
          "Chiếc đồng hồ báo thức cơ học",
          "Chiếc nhiệt kế thủy ngân cổ điển",
          "Ống nghe y tế"
      ],
      "answer": 0,
      "explain": "IoT kết nối mạng lưới cảm biến và thiết bị chấp hành, tự động điều khiển canh tác qua Internet."
  },
  {
      "id": "b24-q02",
      "q": "Ứng dụng của Trí tuệ nhân tạo (AI) trong bảo vệ thực vật là:",
      "options": [
          "Nhận diện tự động sâu bệnh hại qua hình ảnh lá chụp từ điện thoại thông minh và đưa ra phác đồ điều trị chính xác",
          "Tự động chế tạo ra bom nguyên tử",
          "Thay thế hoàn toàn thức ăn của con người",
          "Làm cho cây trồng tự đi lại ngoài đồng"
      ],
      "answer": 0,
      "explain": "AI học máy (Machine Learning) phân tích hình ảnh lá cây để chẩn đoán bệnh chính xác trong vài giây."
  },
  {
      "id": "b24-q03",
      "q": "Hệ thống định vị toàn cầu (GPS) và Hệ thống thông tin địa lý (GIS) ứng dụng trong nông nghiệp chính xác để làm gì?",
      "options": [
          "Lập bản đồ độ phì nhiêu của đất, dẫn đường tự động cho máy bay không người lái và máy cày tự lái",
          "Dùng để nghe nhạc giải trí",
          "Chơi game trực tuyến",
          "Đo nhiệt độ sôi của nước"
      ],
      "answer": 0,
      "explain": "GPS/GIS định vị tọa độ từng thửa đất, hướng dẫn máy bay phun thuốc và rải phân biến thiên theo nhu cầu."
  },
  {
      "id": "b24-q04",
      "q": "Robot nông nghiệp hiện đại đã có thể thực hiện thành thạo khâu công việc nào sau đây?",
      "options": [
          "Tự động nhận diện quả chín và nhẹ nhàng hái quả (như hái dâu tây, cà chua, táo) mà không làm dập nát",
          "Tự động nấu cơm cho gia đình",
          "Tự sửa chữa tàu vũ trụ",
          "Tự động biến đất thành vàng"
      ],
      "answer": 0,
      "explain": "Robot thị giác máy tính nhận diện màu sắc độ chín và cánh tay mềm nhẹ nhàng thu hái quả."
  },
  {
      "id": "b24-q05",
      "q": "Công nghệ viễn thám (Remote Sensing) sử dụng ảnh chụp từ vệ tinh hoặc Drone nhằm mục đích:",
      "options": [
          "Theo dõi sức khỏe mùa màng trên diện tích rộng lớn thông qua chỉ số sinh khối xanh (NDVI), dự báo năng suất và hạn hán",
          "Chụp ảnh lưu niệm cho nông dân",
          "Theo dõi lịch biểu chiếu phim ngoài rạp",
          "Đo chiều cao của các tòa nhà"
      ],
      "answer": 0,
      "explain": "Ảnh viễn thám phân tích phản xạ quang phổ lá cây để đánh giá tình trạng thiếu dinh dưỡng hoặc dịch hại."
  },
  {
      "id": "b24-q06",
      "q": "Chỉ số thực vật NDVI (Normalized Difference Vegetation Index) đo lường đặc tính gì của cây trồng?",
      "options": [
          "Hàm lượng diệp lục và mật độ sinh khối xanh khỏe mạnh của thảm thực vật",
          "Độ ngọt của quả chín",
          "Độ cay của quả ớt",
          "Nồng độ muối trong rễ cây"
      ],
      "answer": 0,
      "explain": "NDVI dựa trên tỷ lệ phản xạ ánh sáng đỏ và cận hồng ngoại phản ánh độ xanh tốt của cây."
  },
  {
      "id": "b24-q07",
      "q": "Nhà kính thông minh (Smart Greenhouse) khác nhà kính truyền thống ở điểm nào?",
      "options": [
          "Được tích hợp hệ thống cảm biến IoT, máy tính trung tâm và thiết bị tự động điều chỉnh môi trường theo thời gian thực",
          "Có kích thước to bằng sân bóng đá",
          "Được xây dựng bằng gạch nung đỏ",
          "Không có cửa sổ thông gió"
      ],
      "answer": 0,
      "explain": "Nhà kính thông minh tự động hóa hoàn toàn điều hòa nhiệt ẩm, ánh sáng theo thuật toán vi khí hậu."
  },
  {
      "id": "b24-q08",
      "q": "Công nghệ chiếu sáng nhân tạo bằng đèn LED chuyên dụng cho cây trồng có ưu điểm:",
      "options": [
          "Cung cấp dải quang phổ tối ưu cho quang hợp (chủ yếu là ánh sáng xanh dương và đỏ), tiết kiệm điện và ít tỏa nhiệt",
          "Làm cho cây bị mù mắt",
          "Tỏa nhiệt độ 500 độ C thiêu cháy cây",
          "Chỉ phát ra ánh sáng trắng thông thường"
      ],
      "answer": 0,
      "explain": "Đèn LED quang phổ đỏ (660nm) và xanh (450nm) kích thích diệp lục hấp thu tối đa, tiết kiệm 70% điện."
  },
  {
      "id": "b24-q09",
      "q": "Nông nghiệp chính xác (Precision Agriculture) là gì?",
      "options": [
          "Chiến lược quản lý đồng ruộng bằng cách áp dụng công nghệ cao để cung cấp đúng lượng nước, phân bón, thuốc BVTV đúng vị trí và đúng thời điểm",
          "Bắt buộc mọi hạt thóc phải có kích thước bằng nhau",
          "Bón một lượng phân cố định giống hệt nhau cho mọi loại đất",
          "Chỉ làm việc vào đúng 8 giờ sáng mỗi ngày"
      ],
      "answer": 0,
      "explain": "'Đúng lúc, đúng chỗ, đúng liều lượng' dựa trên bản đồ dữ liệu vi biến thiên của thửa ruộng."
  },
  {
      "id": "b24-q10",
      "q": "Drone nông nghiệp trang bị camera đa phổ (Multispectral camera) có khả năng:",
      "options": [
          "Phát hiện sớm vùng cây trồng bị thiếu đạm, thiếu nước hoặc bị sâu bệnh tấn công trước khi mắt thường nhìn thấy",
          "Dùng để phát trực tiếp bóng đá",
          "Chụp ảnh X-quang xương người",
          "Tìm kiếm kho báu dưới lòng đất"
      ],
      "answer": 0,
      "explain": "Phổ cận hồng ngoại phản xạ sớm các biểu hiện stress sinh lý tế bào lá trước khi biểu hiện vàng héo."
  },
  {
      "id": "b24-q11",
      "q": "Hệ thống bón phân biến thiên (VRA - Variable Rate Application) trên máy cày thông minh hoạt động dựa trên cơ sở nào?",
      "options": [
          "Bản đồ dinh dưỡng đất của thửa ruộng, tự động tăng lượng phân ở chỗ đất nghèo và giảm ở chỗ đất giàu",
          "Tâm trạng vui buồn của người lái máy",
          "Đồng hồ bấm giờ",
          "Tốc độ gió ngoài trời"
      ],
      "answer": 0,
      "explain": "VRA bón phân theo nhu cầu thực tế từng mét vuông đất, tối ưu hóa chi phí và chống ô nhiễm."
  },
  {
      "id": "b24-q12",
      "q": "Công nghệ mã số vùng trồng và mã QR Code gắn trên nông sản công nghệ cao nhằm mục đích:",
      "options": [
          "Truy xuất nguồn gốc xuất xứ rõ ràng từ trang trại đến bàn ăn, nâng cao uy tín thương hiệu và phục vụ xuất khẩu",
          "Để làm đồ trang trí cho đẹp mắt",
          "Để tính tiền gửi xe",
          "Chặn người tiêu dùng xem thông tin"
      ],
      "answer": 0,
      "explain": "Quét mã QR cho biết toàn bộ nhật ký phân bón, phun thuốc, ngày thu hoạch minh bạch."
  },
  {
      "id": "b24-q13",
      "q": "Công nghệ Blockchain (Chuỗi khối) được ứng dụng trong chuỗi giá trị nông sản giúp đảm bảo tính chất nào?",
      "options": [
          "Tính minh bạch, bất biến, không thể làm giả hay sửa đổi dữ liệu truy xuất nguồn gốc nông sản",
          "Làm cho quả ngọt hơn",
          "Tăng trọng lượng củ khoai tây",
          "Làm cho cây lớn nhanh gấp đôi"
      ],
      "answer": 0,
      "explain": "Blockchain lưu trữ dữ liệu phân tán chống gian lận thương mại và giả mạo nhãn mác chất lượng."
  },
  {
      "id": "b24-q14",
      "q": "Công nghệ bẫy đèn thông minh tự động (Smart Light Trap) trong quản lý sâu rầy có tính năng nào?",
      "options": [
          "Tự động dẫn dụ côn trùng, chụp ảnh, dùng AI đếm số lượng, phân loại loài sâu và báo cáo mật độ về điện thoại",
          "Dùng điện cao thế đốt cháy toàn bộ cánh đồng",
          "Phát ra âm thanh đuổi chim",
          "Chỉ bật sáng khi có người đi qua"
      ],
      "answer": 0,
      "explain": "Bẫy đèn thông minh giám sát mật độ rầy nâu, sâu đục thân 24/24, cảnh báo sớm nguy cơ bùng phát dịch."
  },
  {
      "id": "b24-q15",
      "q": "Cảm biến đo độ ẩm đất thông minh (Soil Moisture Sensor) cắm trong vùng rễ hoạt động theo nguyên lý nào?",
      "options": [
          "Đo hằng số điện môi hoặc điện trở của đất để xác định chính xác phần trăm thể tích nước trong đất",
          "Đo nhiệt độ sôi của đất",
          "Đo độ cứng của đá sỏi",
          "Đếm số hạt cát"
      ],
      "answer": 0,
      "explain": "Cảm biến điện dung hoặc trở kháng gửi số liệu ẩm độ đất theo thời gian thực về tủ điều khiển tưới."
  },
  {
      "id": "b24-q16",
      "q": "Khi cảm biến độ ẩm đất báo độ ẩm tụt xuống dưới 60%, bộ điều khiển tự động sẽ thực hiện hành động gì?",
      "options": [
          "Tự động kích hoạt rơ-le bật máy bơm tưới nhỏ giọt cho đến khi độ ẩm đạt ngưỡng tối ưu (75-80%) thì tự ngắt",
          "Tự động tắt nguồn điện toàn trang trại",
          "Bật còi báo động cứu hỏa",
          "Đổ thêm cát vào chậu cây"
      ],
      "answer": 0,
      "explain": "Vòng điều khiển kín (Closed-loop control) tự động cấp nước khi đất khô và dừng khi đủ ẩm."
  },
  {
      "id": "b24-q17",
      "q": "Cột quan trắc thời tiết thông minh (Weather Station) lắp đặt ngoài đồng ruộng đo đạc những thông số nào?",
      "options": [
          "Nhiệt độ, độ ẩm không khí, lượng mưa, tốc độ và hướng gió, bức xạ mặt trời, áp suất khí quyển",
          "Đo lượng xăng trong xe máy",
          "Đo độ sâu của giếng khoan",
          "Đo số bước chân người đi bộ"
      ],
      "answer": 0,
      "explain": "Dữ liệu thời tiết tại chỗ giúp tính toán lượng bốc thoát hơi nước (ET0) và dự báo sâu bệnh hại."
  },
  {
      "id": "b24-q18",
      "q": "Ứng dụng máy kéo tự lái định vị GPS độ chính xác cao (RTK) trên cánh đồng lớn giúp:",
      "options": [
          "Đường cày thẳng tắp sai số dưới 2 cm, không bị đè luống, giảm thiểu chồng lấn phân bón và tiết kiệm nhiên liệu",
          "Máy kéo tự bay lên trời",
          "Người lái xe có thể ngủ quên nhiều ngày",
          "Máy kéo biến thành ô tô đua"
      ],
      "answer": 0,
      "explain": "Định vị RTK chính xác đến từng centimet giúp máy móc chạy tự động cả ngày lẫn đêm."
  },
  {
      "id": "b24-q19",
      "q": "Lợi ích lớn nhất của việc ứng dụng Drone phun thuốc bảo vệ thực vật so với bình phun đeo vai truyền thống là:",
      "options": [
          "Hiệu suất làm việc gấp 30-50 lần, tiết kiệm 90% nước, thuốc bám đều 2 mặt lá và nông dân không phải tiếp xúc hóa chất độc hại",
          "Làm cho thuốc có mùi thơm",
          "Làm nước phun biến thành nước ngọt",
          "Không tốn pin hoạt động"
      ],
      "answer": 0,
      "explain": "Phun sương siêu mịn bằng luồng gió cánh quạt ép xuống giúp thuốc phủ đều tán lá, dập dịch thần tốc."
  },
  {
      "id": "b24-q20",
      "q": "Hạn chế khi áp dụng Drone phun thuốc tại các khu vực đồi núi hiểm trở ở miền núi phía Bắc là:",
      "options": [
          "Nhiều chướng ngại vật (cột điện, cây to), địa hình mấp mô làm mất tín hiệu sóng và thời lượng pin còn ngắn",
          "Ở miền núi không có gió",
          "Cây trồng miền núi không bị sâu bệnh",
          "Drone không thể bay ở độ cao trên 10 mét"
      ],
      "answer": 0,
      "explain": "Địa hình chia cắt phức tạp đòi hỏi cảm biến radar chống va chạm cao cấp và tay lái điều khiển thành thạo."
  },
  {
      "id": "b24-q21",
      "q": "Công nghệ dữ liệu lớn (Big Data) trong trồng trọt được dùng để:",
      "options": [
          "Thu thập, tổng hợp và phân tích hàng triệu dữ liệu về thời tiết, sâu bệnh, giá cả thị trường để tối ưu hóa quyết định sản xuất",
          "Xóa sạch toàn bộ máy tính nông dân",
          "Làm tăng cân nặng của hạt thóc",
          "Tạo ra các bộ phim giải trí"
      ],
      "answer": 0,
      "explain": "Big Data giúp các nhà quản lý dự báo mùa vụ, sản lượng và định hướng thị trường tiêu thụ chính xác."
  },
  {
      "id": "b24-q22",
      "q": "Ứng dụng công nghệ sấy năng lượng mặt trời có trợ lực quạt thông minh trong chế biến nông sản giúp:",
      "options": [
          "Tận dụng năng lượng mặt trời sạch, giảm 70% chi phí điện năng, sấy nhanh và không phụ thuộc bụi bẩn côn trùng ngoài trời",
          "Làm cho sản phẩm bị nhiễm khói độc",
          "Làm hỏng hoàn toàn nông sản",
          "Đốt cháy cả buồng sấy"
      ],
      "answer": 0,
      "explain": "Hiệu ứng nhà kính thu nhiệt mặt trời sạch sẽ, vệ sinh an toàn thực phẩm vượt trội so với phơi đường."
  },
  {
      "id": "b24-q23",
      "q": "Xu thế 'Nông nghiệp số' (Digital Agriculture) đang chuyển đổi phương thức sản xuất từ:",
      "options": [
          "Sản xuất dựa vào kinh nghiệm cảm tính sang sản xuất chính xác dựa trên dữ liệu khoa học số hóa thời gian thực",
          "Từ dùng máy quay về dùng cày cuốc thô sơ",
          "Chấm dứt hoàn toàn hoạt động trồng trọt",
          "Chỉ làm việc qua màn hình máy tính mà không có ruộng đồng"
      ],
      "answer": 0,
      "explain": "Số hóa đồng ruộng giúp ra quyết định tối ưu dựa trên số liệu thực tế chứ không phán đoán mò mẫm."
  },
  {
      "id": "b24-q24",
      "q": "Trường THPT Phục Hòa có thể ứng dụng công nghệ nào để xây dựng mô hình trải nghiệm nông nghiệp thông minh mini cho học sinh?",
      "options": [
          "Hệ thống tưới tự động kết nối vi điều khiển Arduino/ESP32 có cảm biến độ ẩm đất và điều khiển qua app điện thoại",
          "Mua chiếc máy bay chiến đấu phản lực",
          "Mua máy cày khổng lồ 500 mã lực",
          "Xây dựng nhà máy nhiệt điện than"
      ],
      "answer": 0,
      "explain": "Mô hình STEM vi điều khiển Arduino/ESP32 giá thành rẻ, trực quan, phù hợp hoàn hảo dạy học trải nghiệm."
  }
];

export default QUESTIONS_BAI_24;
