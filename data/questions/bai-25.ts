import type { Question } from "@/lib/types";

// Ngân hàng câu hỏi Trắc nghiệm 4 lựa chọn: Bài 25 (Đủ 24 câu chuẩn GDPT 2018)
export const QUESTIONS_BAI_25: Question[] = [
  {
      "id": "b25-q01",
      "q": "Công nghệ trồng cây không dùng đất (Soilless Culture) là gì?",
      "options": [
          "Kỹ thuật trồng cây trong môi trường dung dịch dinh dưỡng hoặc trên các giá thể trơ nhân tạo thay thế đất tự nhiên",
          "Trồng cây trên mặt đường nhựa bê tông không cần nước",
          "Treo cây lơ lửng trong không khí không chăm sóc",
          "Trồng cây dưới đáy lòng biển sâu"
      ],
      "answer": 0,
      "explain": "Cung cấp đầy đủ nước và dinh dưỡng khoáng trực tiếp qua rễ mà không dùng đất tự nhiên."
  },
  {
      "id": "b25-q02",
      "q": "Các hệ thống trồng cây không dùng đất phổ biến nhất hiện nay bao gồm:",
      "options": [
          "Thủy canh (Hydroponics), Khí canh (Aeroponics) và Trồng trên giá thể tưới nhỏ giọt",
          "Trồng trên bãi cát ven biển",
          "Chôn cây trong hầm than đá",
          "Đóng băng cây trong tuyết lạnh"
      ],
      "answer": 0,
      "explain": "3 nhánh chính gồm thủy canh (ngập dung dịch), khí canh (phun sương rễ) và giá thể trơ."
  },
  {
      "id": "b25-q03",
      "q": "Hệ thống Thủy canh tĩnh (Deep Water Culture - DWC) hoạt động theo nguyên lý nào?",
      "options": [
          "Cây được cố định trên tấm xốp nổi, bộ rễ nhúng chìm một phần hoặc toàn bộ trong dung dịch dinh dưỡng đứng yên có sục khí oxy",
          "Nước chảy cuồn cuộn như thác đổ",
          "Rễ cây hoàn toàn không chạm vào nước",
          "Dung dịch được đun sôi sùng sục"
      ],
      "answer": 0,
      "explain": "Rễ ngâm trong khay dung dịch cố định, thường dùng máy sục khí bể cá để cung cấp oxy cho rễ thở."
  },
  {
      "id": "b25-q04",
      "q": "Nhược điểm lớn nhất của hệ thống thủy canh tĩnh nếu không có máy sục khí bổ sung oxy là gì?",
      "options": [
          "Nồng độ oxy hòa tan (DO) trong dung dịch suy giảm nhanh chóng làm rễ bị ngạt thở và thối nhũn rễ",
          "Làm cho cây bị đóng băng",
          "Làm cho nước bốc cháy",
          "Cây mọc quá nhiều rễ đâm thủng thùng xốp"
      ],
      "answer": 0,
      "explain": "Rễ hấp thụ hết oxy trong nước đứng yên, thiếu oxy làm rễ nghẹt thở và thối đen."
  },
  {
      "id": "b25-q05",
      "q": "Hệ thống Thủy canh hồi lưu màng dinh dưỡng (NFT - Nutrient Film Technique) hoạt động ra sao?",
      "options": [
          "Dung dịch dinh dưỡng liên tục được bơm chảy thành một lớp màng rất mỏng (vài milimet) qua bộ rễ trong máng dốc rồi tuần hoàn về bể chứa",
          "Bơm nước ngập sâu 1 mét qua máng",
          "Chỉ tưới nước một lần duy nhất rồi bỏ máng",
          "Dung dịch đông đặc lại thành thạch"
      ],
      "answer": 0,
      "explain": "Lớp màng dinh dưỡng mỏng lướt qua đáy rễ, phần trên của rễ tiếp xúc không khí hấp thụ oxy tối ưu."
  },
  {
      "id": "b25-q06",
      "q": "Ưu điểm nổi bật nhất của kỹ thuật thủy canh màng dinh dưỡng NFT là:",
      "options": [
          "Bộ rễ vừa hấp thu đầy đủ nước dinh dưỡng ở lớp dưới, vừa tiếp xúc trực tiếp với không khí ở lớp trên nên hô hấp cực tốt",
          "Chi phí làm máng hoàn toàn miễn phí",
          "Không bao giờ cần sử dụng điện",
          "Không cần hạt giống cây"
      ],
      "answer": 0,
      "explain": "Giải quyết triệt để bài toán thiếu oxy rễ mà không cần máy sục khí cồng kềnh."
  },
  {
      "id": "b25-q07",
      "q": "Công nghệ Khí canh (Aeroponics) cung cấp nước và dinh dưỡng cho cây bằng cách nào?",
      "options": [
          "Bộ rễ cây treo lơ lửng hoàn toàn trong không khí trong buồng kín, được các đầu béc phun sương định kỳ dung dịch dinh dưỡng",
          "Ngâm rễ vào trong xô nước đục",
          "Bọc rễ bằng đất sét dẻo",
          "Đốt phân lấy khói hun vào rễ"
      ],
      "answer": 0,
      "explain": "Khí canh phun các hạt sương dinh dưỡng kích thước micro bao phủ rễ cây lơ lửng trong khoang tối."
  },
  {
      "id": "b25-q08",
      "q": "Ưu điểm vượt trội nhất của công nghệ Khí canh so với thủy canh là gì?",
      "options": [
          "Tiết kiệm nước tối đa (tiết kiệm đến 95% nước so với đất), rễ hô hấp oxy bão hòa 100% giúp cây lớn nhanh thần tốc",
          "Không cần dùng máy bơm áp lực",
          "Cây không bao giờ bị sâu bệnh",
          "Giá thành đầu tư rẻ nhất trong các phương pháp"
      ],
      "answer": 0,
      "explain": "Rễ cây trong không khí tiếp cận oxy không giới hạn, kích hoạt trao đổi chất ở tốc độ tối đa."
  },
  {
      "id": "b25-q09",
      "q": "Rủi ro lớn nhất của hệ thống khí canh là gì nếu xảy ra sự cố mất điện kéo dài vài giờ?",
      "options": [
          "Các vòi phun ngừng hoạt động làm bộ rễ treo trong không khí bị khô héo và cây có thể chết rất nhanh chóng",
          "Hệ thống sẽ tự phát nổ",
          "Cây sẽ biến thành loài cỏ dại",
          "Dung dịch sẽ đông cứng thành đá"
      ],
      "answer": 0,
      "explain": "Rễ lơ lửng không có giá thể giữ ẩm, nếu mất điện ngừng phun sương vài tiếng rễ sẽ khô kiệt."
  },
  {
      "id": "b25-q10",
      "q": "Phương pháp trồng cây trên giá thể tưới nhỏ giọt thích hợp nhất cho nhóm cây trồng nào?",
      "options": [
          "Các loại cây ăn quả dài ngày, thân leo lớn như dưa lưới, cà chua, dưa chuột, ớt chuông",
          "Các loại cây bèo hoa dâu",
          "Cây hoa súng dưới đầm",
          "Rau mầm gieo 3 ngày"
      ],
      "answer": 0,
      "explain": "Cây thân leo lớn cần giá thể (mụn dừa + perlite) nâng đỡ bộ rễ vững chắc và nuôi trái nặng ký."
  },
  {
      "id": "b25-q11",
      "q": "Dung dịch dinh dưỡng thủy canh đạt chuẩn bắt buộc phải cung cấp đầy đủ những thành phần nào?",
      "options": [
          "Đầy đủ các nguyên tố khoáng đa lượng (N, P, K), trung lượng (Ca, Mg, S) và vi lượng (Fe, Zn, Cu, Mn, B, Mo) hòa tan",
          "Chỉ cần đường glucozo nguyên chất",
          "Chỉ cần muối ăn NaCl và nước lã",
          "Dung dịch cồn sát trùng"
      ],
      "answer": 0,
      "explain": "Chứa đầy đủ 14 nguyên tố khoáng thiết yếu ở dạng ion rễ hấp thu trực tiếp."
  },
  {
      "id": "b25-q12",
      "q": "Đơn vị đo nồng độ các chất dinh dưỡng vi lượng hòa tan trong dung dịch thủy canh thường dùng là:",
      "options": [
          "ppm (parts per million - phần triệu hay mg/lít)",
          "Kilogram trên mét khối",
          "Độ Brix",
          "Tấn trên hecta"
      ],
      "answer": 0,
      "explain": "ppm là đơn vị đo nồng độ vi lượng siêu nhỏ (1 ppm = 1 miligam/lít dung dịch)."
  },
  {
      "id": "b25-q13",
      "q": "Tại sao trong pha chế dung dịch dinh dưỡng thủy canh mẹ (dạng đậm đặc), người ta phải chia thành 2 bình riêng biệt (Bình A và Bình B)?",
      "options": [
          "Để ngăn ngừa hiện tượng ion Canxi (Ca2+) phản ứng với ion Sunfat (SO4(2-)) và Photphat (PO4(3-)) tạo kết tủa trắng không tan",
          "Để phân biệt bình cho ban ngày và bình cho ban đêm",
          "Để tạo ra hai màu sắc xanh đỏ đẹp mắt",
          "Để tránh bị bay hơi"
      ],
      "answer": 0,
      "explain": "Ca2+ gặp SO4(2-) sẽ kết tủa thành thạch cao CaSO4 lắng cặn, làm tắc béc tưới và mất dinh dưỡng."
  },
  {
      "id": "b25-q14",
      "q": "Nhiệt độ tối ưu của dung dịch dinh dưỡng thủy canh trong bể chứa duy trì trong khoảng nào?",
      "options": [
          "Từ 20°C đến 25°C",
          "Trên 60°C làm luộc chín rễ",
          "Dưới âm 10°C làm đóng băng",
          "Nhiệt độ sôi 100°C"
      ],
      "answer": 0,
      "explain": "Nhiệt độ 20-25°C hàm lượng oxy hòa tan cao nhất và rễ hút khoáng thuận lợi."
  },
  {
      "id": "b25-q15",
      "q": "Khi nhiệt độ dung dịch thủy canh vượt quá 32°C vào mùa hè, hậu quả trực tiếp là gì?",
      "options": [
          "Hàm lượng oxy hòa tan tụt giảm nghiêm trọng, rễ bị nghẹt thở và nấm thủy sinh (Pythium) bùng phát gây thối rễ",
          "Cây sinh trưởng nhanh gấp đôi",
          "Nước trong bể biến thành nước khoáng có ga",
          "Cây ra hoa màu tím"
      ],
      "answer": 0,
      "explain": "Nước ấm giữ oxy rất kém, vi khuẩn nấm Pythium tấn công làm đen nhũn toàn bộ chùm rễ."
  },
  {
      "id": "b25-q16",
      "q": "Để đo nhanh và kiểm soát nồng độ dinh dưỡng của dung dịch thủy canh hàng ngày, kỹ thuật viên sử dụng thiết bị nào?",
      "options": [
          "Bút đo độ dẫn điện EC và bút đo độ chua pH điện tử",
          "Thước dây đo chiều dài",
          "Đồng hồ bấm giây",
          "Kính hiển vi điện tử quét"
      ],
      "answer": 0,
      "explain": "Bút đo EC/pH cầm tay kiểm tra nhanh chỉ trong 5 giây để châm thêm nước hoặc dung dịch cốt."
  },
  {
      "id": "b25-q17",
      "q": "Rau ăn lá trồng bằng phương pháp thủy canh hồi lưu có ưu điểm an toàn thực phẩm nào nổi trội?",
      "options": [
          "Hoàn toàn sạch đất cát, không bị nhiễm giun sán, kiểm soát dư lượng nitrat nghiêm ngặt đạt chuẩn rau sạch",
          "Rau có vị đắng như thuốc bắc",
          "Rau không có chất xơ",
          "Rau có thể lưu giữ 10 năm ngoài nắng"
      ],
      "answer": 0,
      "explain": "Cách ly hoàn toàn khỏi bùn đất bẩn, kiểm soát đạm trước thu hoạch triệt tiêu nitrat dư thừa."
  },
  {
      "id": "b25-q18",
      "q": "Thời gian cách ly (hạ nồng độ dinh dưỡng hoặc chỉ chạy nước sạch) trước khi thu hoạch rau thủy canh là:",
      "options": [
          "Từ 2 đến 3 ngày trước khi thu hoạch",
          "Phải mất 6 tháng",
          "Không cần giờ nào",
          "100 ngày"
      ],
      "answer": 0,
      "explain": "Chạy nước sạch 2-3 ngày cuối giúp cây chuyển hóa hoàn toàn nitrat tự do tích tụ trong lá."
  },
  {
      "id": "b25-q19",
      "q": "Ứng dụng công nghệ khí canh trong nhân giống cây trồng đem lại hiệu quả đột phá nhất ở đối tượng nào?",
      "options": [
          "Sản xuất củ giống khoai tây siêu sạch bệnh (khoai tây bi) với số lượng củ/cây gấp nhiều lần trồng đất",
          "Nhân giống cây lúa nước",
          "Nhân giống cây gỗ lim",
          "Nhân giống cây bèo tấm"
      ],
      "answer": 0,
      "explain": "Khí canh củ khoai tây treo lơ lửng cho phép thu hoạch nhiều đợt tỉa củ, đạt 30-50 củ/cây."
  },
  {
      "id": "b25-q20",
      "q": "Ống nhựa dùng trong hệ thống thủy canh hồi lưu NFT bắt buộc phải là loại ống chuyên dụng nào?",
      "options": [
          "Ống nhựa UPVC màu trắng có lớp cản quang chống rêu tảo và không chứa hóa chất độc hại",
          "Ống kim loại sắt rỉ sét",
          "Ống nhựa trong suốt nhìn thấu rễ",
          "Ống cao su màu đen mềm oặt"
      ],
      "answer": 0,
      "explain": "Nhựa UPVC trắng cản nhiệt, lớp trong cản sáng ngăn rêu tảo phát triển hút hết phân bón."
  },
  {
      "id": "b25-q21",
      "q": "Tại sao không nên để rêu tảo lục phát triển bên trong máng trồng thủy canh?",
      "options": [
          "Rêu tảo cạnh tranh dinh dưỡng và oxy với rễ cây, đồng thời khi chết đi gây thối làm ô nhiễm dung dịch",
          "Vì rêu tảo sẽ biến thành hoa lan",
          "Vì rêu tảo hút sạch ánh sáng mặt trời",
          "Vì rêu tảo làm vỡ máng nhựa"
      ],
      "answer": 0,
      "explain": "Rêu quang hợp tranh chấp khoáng và khi chết phân hủy yếm khí sinh độc tố gây hại rễ."
  },
  {
      "id": "b25-q22",
      "q": "Mô hình thủy canh Aquaponics là sự kết hợp độc đáo giữa công nghệ nào với công nghệ nào?",
      "options": [
          "Nuôi trồng thủy sản (nuôi cá) kết hợp với trồng rau thủy canh tuần hoàn khép kín sinh thái",
          "Nuôi gà trên giàn rau",
          "Trồng trọt kết hợp làm gạch xây dựng",
          "Trồng rau kết hợp với đào mỏ than"
      ],
      "answer": 0,
      "explain": "Chất thải của cá được vi sinh vật chuyển hóa thành phân bón nuôi rau, rau lọc sạch nước tuần hoàn lại cho cá."
  },
  {
      "id": "b25-q23",
      "q": "Ý nghĩa lớn nhất của công nghệ trồng cây không dùng đất đối với các đô thị hiện đại là:",
      "options": [
          "Cho phép canh tác rau sạch ngay trên sân thượng, ban công, không gian hẹp mà không cần đất đai màu mỡ",
          "Làm cho nhà cao tầng biến thành rừng rậm",
          "Thay thế hoàn toàn công viên cây xanh",
          "Làm cho đường phố không có ô tô"
      ],
      "answer": 0,
      "explain": "Nông nghiệp đô thị thẳng đứng sạch sẽ, tiện nghi, tự cung tự cấp rau an toàn tại chỗ."
  },
  {
      "id": "b25-q24",
      "q": "Chi phí đầu tư ban đầu của hệ thống thủy canh hồi lưu chuyên nghiệp thường thu hồi vốn sau bao lâu?",
      "options": [
          "Khoảng 2 đến 3 năm canh tác liên tục các loại rau quả giá trị cao",
          "Phải mất 100 năm",
          "Ngay sau 1 giờ",
          "Không bao giờ thu hồi được vốn"
      ],
      "answer": 0,
      "explain": "Nhờ năng suất cao gấp 3-4 lần và xoay vòng 10-12 vụ rau/năm giúp thu hồi vốn nhanh chóng."
  }
];

export default QUESTIONS_BAI_25;
