import type { Question } from "@/lib/types";

// Ngân hàng câu hỏi Trắc nghiệm 4 lựa chọn: Bài 3 (Đủ 24 câu chuẩn GDPT 2018)
export const QUESTIONS_BAI_03: Question[] = [
  {
      "id": "bai-03-q1",
      "q": "Đất trồng là gì theo định nghĩa khoa học nông nghiệp?",
      "options": [
          "Là lớp bề mặt tơi xốp của vỏ Trái Đất mà trên đó cây trồng có thể sinh sống và sản xuất ra sinh khối nông sản",
          "Là lớp cát sỏi trơ trụi dưới lòng đại dương sâu",
          "Là khối đá hoa cương nguyên khối không thấm nước",
          "Là lớp dung dịch dinh dưỡng nhân tạo trong phòng thí nghiệm"
      ],
      "answer": 0,
      "explain": "Đất là tư liệu sản xuất đặc biệt của trồng trọt, có độ phì nhiêu cung cấp nước và dinh dưỡng cho cây."
  },
  {
      "id": "bai-03-q2",
      "q": "Bốn thành phần cấu tạo cơ bản của đất tự nhiên bao gồm:",
      "options": [
          "Phần rắn (khoáng và hữu cơ), phần lỏng (nước), phần khí và sinh vật đất",
          "Chỉ gồm hạt cát thạch anh và không khí",
          "Chỉ gồm nước mưa và rễ cây khô",
          "Chỉ gồm mùn than bùn nguyên chất"
      ],
      "answer": 0,
      "explain": "Hệ đất gồm 4 pha: rắn (vô cơ + mùn), lỏng (dung dịch đất), khí (O2, CO2) và quần xã sinh vật đất."
  },
  {
      "id": "bai-03-q3",
      "q": "Thành phần cơ giới của đất được quyết định bởi tỷ lệ phần trăm của các cấp hạt nào?",
      "options": [
          "Hạt cát (2 - 0.05 mm), hạt limon (0.05 - 0.002 mm) và hạt sét (< 0.002 mm)",
          "Hạt sỏi cuội, hạt đá vôi và hạt kim loại",
          "Hạt phân đạm, hạt phân lân và phân kali",
          "Hạt mùn hữu cơ, xác giun đất và bào tử nấm"
      ],
      "answer": 0,
      "explain": "Thành phần cơ giới chia theo đường kính cấp hạt khoáng: cát > limon (bụi) > sét."
  },
  {
      "id": "bai-03-q4",
      "q": "Đất cát có đặc điểm vật lý nào nổi bật nhất?",
      "options": [
          "Thoát nước rất nhanh, thoáng khí nhưng khả năng giữ nước và phân bón kém, dễ bị khô hạn",
          "Giữ nước cực kỳ tốt, dễ bị ngập úng dẻo quánh khi gặp mưa",
          "Chứa hàm lượng hạt sét mịn trên 80%",
          "Không bao giờ bị nung nóng dưới ánh nắng mặt trời"
      ],
      "answer": 0,
      "explain": "Đất cát hạt to, nhiều kẽ hở lớn nên thấm nước nhanh nhưng giữ phân bón và nước rất kém."
  },
  {
      "id": "bai-03-q5",
      "q": "Đất sét có đặc tính nông học nào sau đây?",
      "options": [
          "Khả năng giữ nước và chất dinh dưỡng cao, nhưng khi ướt thì dẻo dính, khi khô thì nứt nẻ đóng váng",
          "Rất tơi xốp, cày bừa cực kỳ nhẹ nhàng trong mọi điều kiện",
          "Hạt đất to thô ráp, không thể giữ lại bất kỳ ion khoáng nào",
          "Không chứa các hạt khoáng kích thước dưới 0.002 mm"
      ],
      "answer": 0,
      "explain": "Đất sét chứa nhiều hạt sét mịn giàu keo đất giữ phân tốt, nhưng thoát nước kém và bí khí khi úng."
  },
  {
      "id": "bai-03-q6",
      "q": "Loại đất nào có thành phần cơ giới trung gian lý tưởng, thích hợp cho hầu hết các loại cây trồng?",
      "options": [
          "Đất thịt (đất thịt nhẹ, đất thịt trung bình)",
          "Đất cát sỏi thô trơ sỏi đá",
          "Đất sét nặng ngập úng triền miên",
          "Đất bùn ao chứa nhiều khí H2S độc hại"
      ],
      "answer": 0,
      "explain": "Đất thịt có tỷ lệ cân đối giữa cát, limon và sét, vừa thoáng khí vừa giữ nước và dinh dưỡng tốt."
  },
  {
      "id": "bai-03-q7",
      "q": "Keo đất là những hạt đất có kích thước nhỏ hơn bao nhiêu micromet?",
      "options": [
          "Nhỏ hơn 1 micromet (μm) hoặc nhỏ hơn 0.002 mm",
          "Lớn hơn 5 cm",
          "Từ 10 mm đến 20 mm",
          "Lớn hơn kích thước hạt sỏi đường kính 1 cm"
      ],
      "answer": 0,
      "explain": "Keo đất là các hạt khoáng và mùn siêu mịn có kích thước hiển vi (< 1 μm), lơ lửng trong dung dịch đất."
  },
  {
      "id": "bai-03-q8",
      "q": "Cấu tạo một hạt keo đất gồm các lớp theo thứ tự từ trong ra ngoài là:",
      "options": [
          "Nhân keo -> Lớp ion quyết định điện tích -> Lớp ion bất động -> Lớp ion khuếch tán",
          "Lớp vỏ bọc kim loại -> Lớp không khí -> Hạt cát",
          "Tế bào sống -> Màng tế bào -> Không bào",
          "Hạt sỏi -> Tầng mùn -> Tầng nước ngầm"
      ],
      "answer": 0,
      "explain": "Cấu tạo hạt keo: Nhân keo ở giữa, lớp ion quyết định điện tích, lớp ion bù gồm lớp bất động và khuếch tán."
  },
  {
      "id": "bai-03-q9",
      "q": "Hầu hết các hạt keo đất trong đất canh tác ở Việt Nam mang điện tích gì ở lớp ion quyết định điện?",
      "options": [
          "Điện tích âm (-)",
          "Điện tích dương (+)",
          "Hoàn toàn trung hòa không mang điện",
          "Liên tục đổi từ điện dương sang kim loại đặc"
      ],
      "answer": 0,
      "explain": "Đại đa số keo đất ở nước ta là keo âm, do đó lớp ion bù ngoài cùng hấp phụ các cation dương (Ca2+, Mg2+, K+, NH4+)."
  },
  {
      "id": "bai-03-q10",
      "q": "Nhờ mang điện tích âm mà keo đất có khả năng giữ lại các chất dinh dưỡng khoáng nào?",
      "options": [
          "Các cation mang điện tích dương như Ca²⁺, Mg²⁺, K⁺, NH₄⁺",
          "Các anion NO3-, H2PO4- đẩy ra dung dịch",
          "Chỉ các phân tử khí oxy tự do",
          "Các hạt cát kích thước lớn hơn 2 mm"
      ],
      "answer": 0,
      "explain": "Keo âm hấp phụ tĩnh điện các cation dinh dưỡng, chống hiện tượng rửa trôi phân bón do nước mưa."
  },
  {
      "id": "bai-03-q11",
      "q": "Phản ứng của dung dịch đất được biểu thị thông qua chỉ số nào?",
      "options": [
          "Độ pH của đất",
          "Chỉ số IQ của sinh vật đất",
          "Khối lượng riêng của hạt cát",
          "Tốc độ bốc hơi nước của lá"
      ],
      "answer": 0,
      "explain": "Độ pH biểu thị nồng độ ion H+ trong dung dịch đất, phản ánh đất chua, trung tính hay kiềm."
  },
  {
      "id": "bai-03-q12",
      "q": "Đất được gọi là đất chua khi độ pH có giá trị:",
      "options": [
          "pH < 6.5",
          "pH = 7.0",
          "pH > 7.5",
          "pH > 10.0"
      ],
      "answer": 0,
      "explain": "Theo phân loại nông học: pH < 6.5 là đất chua; 6.5 - 7.5 là đất trung tính; > 7.5 là đất kiềm."
  },
  {
      "id": "bai-03-q13",
      "q": "Nguyên nhân chính gây nên độ chua hiện tại của đất là do nồng độ ion nào tự do trong dung dịch đất?",
      "options": [
          "Ion H⁺ tự do trong dung dịch đất",
          "Ion Ca2+ hòa tan",
          "Ion OH- kiềm tính",
          "Ion K+ trao đổi"
      ],
      "answer": 0,
      "explain": "Độ chua hiện tại sinh ra do ion H+ tự do trong dung dịch đất, đo trực tiếp bằng máy đo pH."
  },
  {
      "id": "bai-03-q14",
      "q": "Độ chua tiềm tàng của đất được tạo nên bởi các ion nào bị hấp phụ trên bề mặt hạt keo đất?",
      "options": [
          "Ion H⁺ và ion Al³⁺ trao đổi trên bề mặt keo đất",
          "Ion Na+ và Cl- của muối ăn",
          "Ion SO4(2-) và NO3-",
          "Ion Fe2+ và Mn2+"
      ],
      "answer": 0,
      "explain": "Độ chua tiềm tàng gồm độ chua trao đổi và thủy phân do H+ và Al3+ bám trên keo đất gây ra."
  },
  {
      "id": "bai-03-q15",
      "q": "Độ phì nhiêu của đất là gì?",
      "options": [
          "Khả năng của đất cung cấp đồng thời và liên tục nước, nhiệt, không khí và dinh dưỡng cho cây sinh trưởng đạt năng suất cao",
          "Độ dày của tầng đất chứa nhiều sỏi đá lớn",
          "Tỷ lệ cát thạch anh có trong đất",
          "Màu sắc đen tuyền do chứa nhiều than đá chưa phân hủy"
      ],
      "answer": 0,
      "explain": "Độ phì nhiêu là tổng hợp các tính chất lý, hóa, sinh học giúp cây hấp thu đủ nước, khí và dưỡng chất."
  },
  {
      "id": "bai-03-q16",
      "q": "Độ phì nhiêu tự nhiên của đất được hình thành do yếu tố nào sau đây?",
      "options": [
          "Quá trình phong hóa đá mẹ, khí hậu, sinh vật và thời gian kiến tạo địa chất",
          "Hoạt động bón phân hóa học của con người hàng ngày",
          "Việc cày bừa đất bằng máy bay không người lái",
          "Chất thải công nghiệp từ các nhà máy nhiệt điện"
      ],
      "answer": 0,
      "explain": "Độ phì tự nhiên hình thành qua hàng ngàn năm dưới tác động tổng hợp của đá mẹ, khí hậu, địa hình và thảm thực vật."
  },
  {
      "id": "bai-03-q17",
      "q": "Độ phì nhiêu nhân tạo của đất được hình thành thông qua:",
      "options": [
          "Hoạt động canh tác, bón phân, tưới tiêu và cải tạo đất khoa học của con người",
          "Sự dịch chuyển của các mảng kiến tạo địa chất dưới lòng đất",
          "Các trận núi lửa phun trào nham thạch",
          "Các vụ va chạm thiên thạch thời tiền sử"
      ],
      "answer": 0,
      "explain": "Độ phì nhân tạo là kết quả của sự tác động tích cực của con người (luân canh, bón phân hữu cơ, thau chua rửa mặn)."
  },
  {
      "id": "bai-03-q18",
      "q": "Chất mùn hữu cơ trong đất có vai trò quan trọng nào sau đây?",
      "options": [
          "Gắn kết các hạt đất tạo cấu trúc viên hạt xốp, tăng khả năng giữ nước, giữ phân bón và kích thích sinh vật đất",
          "Làm đất bị chua hóa cực mạnh và tiêu diệt rễ cây",
          "Làm đông cứng mặt đất thành đá tảng",
          "Làm đất bốc mùi hôi thối và thu hút sâu hại"
      ],
      "answer": 0,
      "explain": "Mùn là 'trái tim' của đất, làm tăng khả năng hấp phụ cation, điều hòa nhiệt ẩm và nuôi dưỡng vi sinh vật đất."
  },
  {
      "id": "bai-03-q19",
      "q": "Sinh vật đất (giun đất, vi khuẩn, nấm, côn trùng nhỏ) có tác dụng gì đối với đất trồng?",
      "options": [
          "Đào xới đất tạo độ thông thoáng khí, phân giải xác hữu cơ thành mùn và chất khoáng dễ tiêu",
          "Cắn nát toàn bộ hệ thống rễ cây của mọi loài cây trồng",
          "Tiêu thụ hết toàn bộ oxy khiến cây bị ngạt thở",
          "Làm đất bị nhiễm độc thủy ngân và chì"
      ],
      "answer": 0,
      "explain": "Giun và vi sinh vật đất là 'kỹ sư' cải tạo đất tự nhiên, làm đất tơi xốp và tuần hoàn dinh dưỡng."
  },
  {
      "id": "bai-03-q20",
      "q": "Dung dịch đất là gì?",
      "options": [
          "Phần nước trong đất cùng với các chất khoáng và chất hữu cơ hòa tan trong đó",
          "Nước cất tinh khiết 100% không chứa bất kỳ ion nào",
          "Dầu thô ngấm từ lòng đất lên tầng mặt",
          "Axit nitric đặc chảy tràn trên mặt ruộng"
      ],
      "answer": 0,
      "explain": "Dung dịch đất là pha lỏng chứa các chất hòa tan; lông hút của rễ hấp thụ dinh dưỡng trực tiếp từ dung dịch này."
  },
  {
      "id": "bai-03-q21",
      "q": "Không khí trong đất khác với không khí ngoài khí quyển ở điểm nào?",
      "options": [
          "Hàm lượng khí CO₂ cao hơn và hàm lượng khí O₂ thường thấp hơn do rễ cây và vi sinh vật hô hấp",
          "Chứa 100% khí metan độc hại",
          "Hoàn toàn không chứa khí nitơ (N2)",
          "Có nhiệt độ cố định luôn ở mức 0°C"
      ],
      "answer": 0,
      "explain": "Hô hấp của rễ và phân giải chất hữu cơ tiêu thụ O2 và giải phóng CO2 khiến CO2 trong đất cao hơn ngoài khí quyển."
  },
  {
      "id": "bai-03-q22",
      "q": "Đất kiềm là đất có giá trị độ pH:",
      "options": [
          "pH > 7.5",
          "pH < 4.5",
          "pH = 5.0",
          "pH từ 6.0 đến 6.5"
      ],
      "answer": 0,
      "explain": "Đất kiềm có pH > 7.5, thường gặp ở đất mặn ven biển hoặc đất giàu ion Na+, Ca2+, Mg2+ kiềm tính."
  },
  {
      "id": "bai-03-q23",
      "q": "Đặc tính 'đệm' của đất (khả năng đệm) là khả năng:",
      "options": [
          "Chống lại sự thay đổi đột ngột độ pH của dung dịch đất khi có một lượng nhỏ axit hoặc bazơ xâm nhập",
          "Tự làm biến mất các hạt cát lớn",
          "Tự động sinh ra nước ngầm khi trời nắng hạn",
          "Đẩy toàn bộ sỏi đá lên mặt luống"
      ],
      "answer": 0,
      "explain": "Khả năng đệm nhờ hệ thống keo đất hấp phụ hoặc nhả H+, OH- giúp giữ ổn định pH cho rễ cây phát triển."
  },
  {
      "id": "bai-03-q24",
      "q": "Hiện tượng thoái hóa đất phổ biến ở vùng đồi núi Cao Bằng nếu canh tác không hợp lý là:",
      "options": [
          "Xói mòn, rửa trôi mất lớp đất mặt, đất bị chua hóa và nghèo kiệt chất mùn",
          "Đất bị biến thành đá granite nguyên khối",
          "Đất bị nhiễm mặn nghiêm trọng do nước biển dâng cao tràn vào",
          "Đất biến thành mỏ dầu khí tự nhiên"
      ],
      "answer": 0,
      "explain": "Đất đồi dốc mưa lớn dễ bị dòng chảy mặt bào mòn tầng đất phì nhiêu, trơ sỏi đá nếu không bảo vệ."
  }
];

export default QUESTIONS_BAI_03;
