import type { Question } from "@/lib/types";

// Ngân hàng câu hỏi Trắc nghiệm 4 lựa chọn: Bài 9 (Đủ 24 câu chuẩn GDPT 2018)
export const QUESTIONS_BAI_09: Question[] = [
  {
      "id": "b09-q01",
      "q": "Phân bón vi sinh vật là loại phân bón như thế nào?",
      "options": [
          "Sản phẩm chứa các vi sinh vật sống đã được tuyển chọn có mật độ đạt chuẩn theo quy định",
          "Phân hóa học nghiền mịn",
          "Đá khoáng tự nhiên nghiền nhỏ",
          "Nước đường lên men giấm"
      ],
      "answer": 0,
      "explain": "Phân vi sinh chứa các tế bào vi sinh vật sống hữu ích với mật độ cao (thường >= 10^8 CFU/g)."
  },
  {
      "id": "b09-q02",
      "q": "Nhóm vi sinh vật nào có khả năng chuyển hóa nitơ tự do (N2) trong không khí thành đạm hữu cơ rễ cây hút được?",
      "options": [
          "Vi sinh vật cố định đạm (cố định nitơ)",
          "Vi sinh vật phân giải photphat",
          "Vi sinh vật phân giải chất béo",
          "Nấm men rượu"
      ],
      "answer": 0,
      "explain": "VSV cố định đạm chứa enzyme nitrogenase khử N2 trong khí quyển thành NH3."
  },
  {
      "id": "b09-q03",
      "q": "Vi khuẩn nốt sần Rhizobium cộng sinh với rễ của nhóm cây trồng nào sau đây?",
      "options": [
          "Cây họ Đậu (đậu tương, đậu lạc, đậu xanh)",
          "Cây lúa nước",
          "Cây ngô (bắp)",
          "Cây mía đường"
      ],
      "answer": 0,
      "explain": "Rhizobium xâm nhập vào lông hút rễ cây họ Đậu hình thành nốt sần cộng sinh cố định nitơ."
  },
  {
      "id": "b09-q04",
      "q": "Loại vi khuẩn cố định đạm sống tự do trong đất không cần cộng sinh là:",
      "options": [
          "Azotobacter",
          "Rhizobium",
          "Trichoderma",
          "Nấm men bánh mì"
      ],
      "answer": 0,
      "explain": "Azotobacter là vi khuẩn hiếu khí sống tự do trong đất có khả năng tự cố định đạm khí quyển."
  },
  {
      "id": "b09-q05",
      "q": "Cơ chế hoạt động của phân vi sinh vật chuyển hóa lân là gì?",
      "options": [
          "Tiết ra các axit hữu cơ hòa tan các hợp chất photphat khó tan thành ion photphat dễ tan (H2PO4-, HPO4(2-))",
          "Tự sinh ra phân đạm nguyên chất",
          "Hút sạch nước trong rễ cây",
          "Đốt cháy lân trong đất"
      ],
      "answer": 0,
      "explain": "Axit hữu cơ do vi khuẩn (như Bacillus megaterium) tiết ra hòa tan quặng photphat khó tan."
  },
  {
      "id": "b09-q06",
      "q": "Chủng vi khuẩn nào sau đây thường được ứng dụng phổ biến trong sản xuất phân vi sinh phân giải lân?",
      "options": [
          "Bacillus megaterium hoặc Pseudomonas",
          "Vi khuẩn lao",
          "Phẩy khuẩn tả",
          "Vi khuẩn E.coli gây tiêu chảy"
      ],
      "answer": 0,
      "explain": "Bacillus megaterium và Pseudomonas là các chủng vi khuẩn hữu ích phân giải lân mạnh mẽ."
  },
  {
      "id": "b09-q07",
      "q": "Vai trò sinh học của phân vi sinh vật phân giải chất hữu cơ (xenlulozo) là gì?",
      "options": [
          "Phân hủy rơm rạ, mùn rác, cellulose thành chất mùn và dinh dưỡng khoáng dễ tiêu",
          "Làm cho rơm rạ tươi cứng mãi mãi",
          "Ngăn chặn sự phát triển của giun đất",
          "Tạo ra các hợp chất nhựa tổng hợp"
      ],
      "answer": 0,
      "explain": "Tiết enzyme cellulase phân giải nhanh cellulose, lignin từ phế phụ phẩm thành mùn dinh dưỡng."
  },
  {
      "id": "b09-q08",
      "q": "Nấm đối kháng Trichoderma thường được bổ sung vào phân vi sinh phân giải hữu cơ vì có tác dụng gì?",
      "options": [
          "Vừa phân giải nhanh cellulose, vừa đối kháng tiêu diệt các loại nấm bệnh gây hại trong đất",
          "Kích thích sâu ăn lá phát triển",
          "Làm đất bị chua nặng nề",
          "Làm chết rễ cây con"
      ],
      "answer": 0,
      "explain": "Trichoderma là 'vệ sĩ của rễ', tiết cellulase phân giải rơm rạ và ức chế nấm Fusarium, Pythium."
  },
  {
      "id": "b09-q09",
      "q": "Quy trình công nghệ sản xuất phân bón vi sinh vật gồm các bước cơ bản nào?",
      "options": [
          "Tuyển chọn chủng VSV thuần khiết -> Nhân sinh khối trong môi trường lên men -> Phối trộn với chất mang -> Đóng gói bảo quản",
          "Trộn đất cát với nước vôi rồi phơi nắng",
          "Đốt rơm rạ lấy tro đóng bao",
          "Nghiền nát đá vôi hòa phân urê"
      ],
      "answer": 0,
      "explain": "Quy trình chuẩn: Chọn giống -> Lên men sinh khối lớn -> Trộn chất mang (than bùn vô trùng) -> Đóng gói."
  },
  {
      "id": "b09-q10",
      "q": "Chất mang (giá đỡ) trong sản xuất phân bón vi sinh vật thường sử dụng vật liệu nào?",
      "options": [
          "Than bùn đã xử lý, bột xơ dừa, cám gạo vô trùng",
          "Cát thạch anh nung chảy",
          "Xi măng xây dựng",
          "Nhựa đường công nghiệp"
      ],
      "answer": 0,
      "explain": "Than bùn tơi xốp, giữ ẩm tốt và là môi trường dinh dưỡng nuôi sống vi sinh vật trong bao bì."
  },
  {
      "id": "b09-q11",
      "q": "Mật độ vi sinh vật sống có ích trong phân vi sinh đạt tiêu chuẩn chất lượng Việt Nam thường phải đạt tối thiểu:",
      "options": [
          "1 x 10^8 CFU/g hoặc CFU/ml",
          "10 con vi khuẩn trên 1 tấn phân",
          "5 con vi khuẩn trong 1 chai",
          "Không cần vi khuẩn nào sống"
      ],
      "answer": 0,
      "explain": "Tiêu chuẩn quốc gia quy định mật độ vi sinh vật hữu hiệu sống >= 10^8 CFU/g."
  },
  {
      "id": "b09-q12",
      "q": "Ưu điểm nổi bật nhất của việc sử dụng phân bón vi sinh vật trong nông nghiệp sạch là:",
      "options": [
          "Bảo vệ môi trường, không độc hại, tăng độ phì sinh học của đất và tạo nông sản an toàn",
          "Làm tăng năng suất gấp 100 lần sau 1 ngày",
          "Thay thế hoàn toàn 100% nước tưới",
          "Tiêu diệt mọi sinh vật trong khu vườn"
      ],
      "answer": 0,
      "explain": "Phân vi sinh bền vững, không gây tồn dư hóa chất, phục hồi hệ sinh thái đất."
  },
  {
      "id": "b09-q13",
      "q": "Hạn chế của phân bón vi sinh vật so với phân bón hóa học là:",
      "options": [
          "Tác dụng chậm hơn, hiệu lực phụ thuộc vào điều kiện ẩm độ, nhiệt độ đất và có hạn sử dụng ngắn",
          "Gây ô nhiễm nguồn nước ngầm",
          "Làm đất bị chua phèn cực nặng",
          "Luôn chứa nhiều kim loại nặng"
      ],
      "answer": 0,
      "explain": "Vì chứa tế bào sống nên phân vi sinh cần đất đủ ẩm, mát mẻ và có hạn sử dụng (khoảng 6 tháng)."
  },
  {
      "id": "b09-q14",
      "q": "Tại sao không nên trộn chung phân vi sinh vật với thuốc trừ nấm hóa học khi sử dụng?",
      "options": [
          "Thuốc trừ nấm sẽ tiêu diệt luôn các chủng vi sinh vật có ích trong phân bón",
          "Làm dung dịch phát nổ dữ dội",
          "Làm cây mọc thêm rễ trên lá",
          "Làm cho đất biến thành thủy tinh"
      ],
      "answer": 0,
      "explain": "Hóa chất diệt khuẩn, diệt nấm sẽ giết chết các tế bào vi sinh vật hữu hiệu trong phân."
  },
  {
      "id": "b09-q15",
      "q": "Vi sinh vật cộng sinh cố định đạm với bèo hoa dâu trên ruộng lúa nước là loài nào?",
      "options": [
          "Vi khuẩn lam Anabaena azollae",
          "Nấm mốc đen",
          "Trực khuẩn mủ xanh",
          "Tảo đỏ biển"
      ],
      "answer": 0,
      "explain": "Vi khuẩn lam Anabaena sống cộng sinh trong xoang lá bèo hoa dâu cố định đạm cung cấp cho lúa."
  },
  {
      "id": "b09-q16",
      "q": "Phân vi sinh vật phân giải lân có ý nghĩa đặc biệt quan trọng với vùng đất nào ở nước ta?",
      "options": [
          "Đất đỏ bazan và đất phèn, nơi chứa nhiều lân bị cố định dưới dạng nhôm sắt photphat khó tan",
          "Bãi cát trắng ven biển không có đất",
          "Mặt đường nhựa bê tông",
          "Khu vực núi tuyết đóng băng"
      ],
      "answer": 0,
      "explain": "Đất phèn, đất đỏ có hàm lượng lân tổng số cao nhưng bị cố định, vi sinh vật giúp giải phóng lân này."
  },
  {
      "id": "b09-q17",
      "q": "Khi bón phân vi sinh vật cho cây, thời điểm thích hợp nhất là:",
      "options": [
          "Trời râm mát hoặc chiều tối, sau đó lấp một lớp đất mỏng phủ lên giữ ẩm",
          "Giữa trưa nắng gắt 40°C trên mặt đất khô nứt",
          "Lúc trời đang có giông bão ngập lụt",
          "Trước khi đốt nương làm rẫy"
      ],
      "answer": 0,
      "explain": "Lấp đất nhẹ và tưới ẩm giúp vi sinh vật tránh tia tử ngoại mặt trời và dễ thích nghi đất mới."
  },
  {
      "id": "b09-q18",
      "q": "Chế phẩm vi sinh EM (Effective Microorganisms) chứa tập hợp của những nhóm vi sinh vật nào?",
      "options": [
          "Vi khuẩn quang dưỡng, vi khuẩn lactic, nấm men, xạ khuẩn và nấm sợi có ích",
          "Virus bại liệt và vi khuẩn tả",
          "Nấm độc gây chết người",
          "Vi khuẩn sâu rệp"
      ],
      "answer": 0,
      "explain": "EM gồm khoảng 80 loài vi sinh vật có ích sống cộng sinh hỗ trợ lẫn nhau."
  },
  {
      "id": "b09-q19",
      "q": "Ứng dụng công nghệ vi sinh xử lý rơm rạ trực tiếp trên ruộng lúa sau thu hoạch giúp ngăn ngừa hiện tượng nào?",
      "options": [
          "Hiện tượng nghẹt rễ, ngộ độc hữu cơ cho lúa vụ sau",
          "Hiện tượng lũ lụt mùa mưa",
          "Hiện tượng lúa bị trổ sớm",
          "Hiện tượng lúa bị biến thành cỏ dại"
      ],
      "answer": 0,
      "explain": "Rơm rạ tươi vùi ruộng phân hủy yếm khí sinh khí H2S, CH4 gây ngộ độc hữu cơ rễ lúa."
  },
  {
      "id": "b09-q20",
      "q": "Bảo quản phân vi sinh vật cần chú ý yếu tố nhiệt độ môi trường ở mức:",
      "options": [
          "Từ 20°C đến 30°C ở nơi râm mát",
          "Trên 100°C trong lò hấp",
          "Dưới âm 50°C",
          "Ngoài trời nắng nóng trên mái tôn"
      ],
      "answer": 0,
      "explain": "Nhiệt độ phòng thoáng mát 20-30°C duy trì sự sống bền bỉ của tế bào vi sinh vật."
  },
  {
      "id": "b09-q21",
      "q": "Phân vi sinh vật cố định đạm có thể sử dụng bằng phương pháp nào sau đây?",
      "options": [
          "Trộn tẩm hạt giống trước khi gieo, bón lót vào đất hoặc hòa nước tưới gốc",
          "Tiêm trực tiếp vào thân gỗ",
          "Hòa vào nước sôi 100°C để phun",
          "Đốt cháy xông khói vào ruộng"
      ],
      "answer": 0,
      "explain": "Tẩm hạt giống hoặc bón gốc giúp vi sinh vật dễ dàng tiếp xúc rễ cây con khi nảy mầm."
  },
  {
      "id": "b09-q22",
      "q": "Cây lạc (đậu phộng) trồng ở đất đồi Cao Bằng nếu được xử lý phân vi sinh nốt sần Rhizobium sẽ có tác dụng:",
      "options": [
          "Nốt sần phát triển nhiều, cây tự tổng hợp đủ đạm, giảm 50-70% lượng đạm vô cơ cần bón",
          "Làm cho quả lạc không có hạt bên trong",
          "Làm cho lá cây chuyển sang màu tím",
          "Làm rễ cây bị thối đen"
      ],
      "answer": 0,
      "explain": "Nốt sần Rhizobium cung cấp lượng đạm sinh học dồi dào, tiết kiệm chi phí bón urê."
  },
  {
      "id": "b09-q23",
      "q": "Chất lượng của một loại phân bón vi sinh vật được quyết định bởi yếu tố then chốt nào?",
      "options": [
          "Chủng vi sinh vật có hoạt lực mạnh và mật độ tế bào sống còn duy trì cao trong hạn dùng",
          "Mùi hương nước hoa nhân tạo",
          "Màu sắc vỏ bao bì rực rỡ",
          "Khối lượng bao phân nặng hàng chục tấn"
      ],
      "answer": 0,
      "explain": "Hoạt lực sinh học và số lượng tế bào sống (CFU) là linh hồn của phân vi sinh."
  },
  {
      "id": "b09-q24",
      "q": "Xu hướng phát triển của ngành phân bón hiện đại gắn liền với công nghệ vi sinh là:",
      "options": [
          "Phát triển phân bón hữu cơ vi sinh đa chức năng, thân thiện môi trường và xây dựng nền nông nghiệp tuần hoàn",
          "Tăng cường sử dụng hóa chất độc hại cực mạnh",
          "Ngừng hoàn toàn việc chăm sóc cây trồng",
          "Chỉ nhập khẩu phân bón phế thải từ nước ngoài"
      ],
      "answer": 0,
      "explain": "Nông nghiệp tuần hoàn và sinh học là xu thế tất yếu của thế giới và Việt Nam."
  }
];

export default QUESTIONS_BAI_09;
