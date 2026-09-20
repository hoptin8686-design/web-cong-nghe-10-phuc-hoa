import type { Question } from "@/lib/types";

// Ngân hàng câu hỏi Trắc nghiệm 4 lựa chọn: Bài 6 (Đủ 24 câu chuẩn GDPT 2018)
export const QUESTIONS_BAI_06: Question[] = [
  {
      "id": "b06-q01",
      "q": "Dụng cụ hoặc thiết bị nào sau đây thường dùng để đo nhanh độ pH của dung dịch đất ngoài đồng ruộng?",
      "options": [
          "Bút đo pH điện tử cầm tay hoặc giấy quỳ chỉ thị màu",
          "Thước dây cuộn đo độ sâu",
          "Kính thiên văn quang học",
          "Cân điện tử phân tích 4 số"
      ],
      "answer": 0,
      "explain": "Bút đo pH điện tử và giấy chỉ thị màu cho kết quả đo độ chua nhanh chóng và tiện lợi."
  },
  {
      "id": "b06-q02",
      "q": "Chỉ số EC trong dung dịch chiết đất phản ánh đặc tính nông học nào?",
      "options": [
          "Tổng nồng độ muối khoáng hòa tan (độ mặn)",
          "Độ ẩm không khí xung quanh",
          "Tỷ lệ hạt mùn trong đất",
          "Độ cứng rắn của tầng đất mặt"
      ],
      "answer": 0,
      "explain": "EC (độ dẫn điện) tỷ lệ thuận với nồng độ các ion muối khoáng hòa tan trong dung dịch đất."
  },
  {
      "id": "b06-q03",
      "q": "Tỷ lệ phối trộn giữa khối lượng mẫu đất khô và thể tích nước cất thường dùng để pha dung dịch chiết đất đo pH là:",
      "options": [
          "1 phần đất : 2.5 phần nước cất (1:2.5) hoặc 1:5",
          "1 phần đất : 100 phần nước cất",
          "10 phần đất : 1 phần nước cất",
          "Không dùng nước cất mà dùng cồn nguyên chất"
      ],
      "answer": 0,
      "explain": "Tỷ lệ 1:2.5 (ví dụ 10g đất pha 25ml nước cất) là tỷ lệ chuẩn phân tích độ chua hiện tại của đất."
  },
  {
      "id": "b06-q04",
      "q": "Khi đo pH đất bằng giấy quỳ, nếu giấy chuyển sang màu đỏ thì mẫu đất đó có tính chất gì?",
      "options": [
          "Đất có tính axit (đất chua)",
          "Đất trung tính",
          "Đất có tính kiềm mạnh",
          "Đất nhiễm mặn NaCl"
      ],
      "answer": 0,
      "explain": "Môi trường axit (pH < 7) làm giấy quỳ chuyển sang màu đỏ hoặc hồng."
  },
  {
      "id": "b06-q05",
      "q": "Nước dùng để pha mẫu đất trong bài thực hành bắt buộc phải là loại nước nào?",
      "options": [
          "Nước cất trung tính (pH = 7.0) không chứa ion lạ",
          "Nước ngọt có gas đóng chai",
          "Nước biển mặn ngoài khơi",
          "Nước mưa axit đầu mùa"
      ],
      "answer": 0,
      "explain": "Nước cất tinh khiết không chứa ion lạ giúp kết quả đo phản ánh trung thực ion của mẫu đất."
  },
  {
      "id": "b06-q06",
      "q": "Thời gian khuấy và để lắng dung dịch huyền phù đất trước khi nhúng đầu đo pH là:",
      "options": [
          "Khuấy đều trong 2 - 3 phút và để lắng khoảng 10 - 15 phút",
          "Khuấy liên tục 24 tiếng đồng hồ",
          "Đo ngay lập tức khi vừa đổ nước vào mà không cần khuấy",
          "Để lắng 1 tháng dưới ánh nắng"
      ],
      "answer": 0,
      "explain": "Khuấy 2-3 phút để ion hòa tan ra nước cất, để lắng 10-15 phút để hạt đất chìm xuống đáy."
  },
  {
      "id": "b06-q07",
      "q": "Đầu điện cực thủy tinh của bút đo pH sau mỗi lần đo xong mẫu đất cần được:",
      "options": [
          "Rửa sạch bằng nước cất và thấm khô nhẹ nhàng bằng giấy mềm",
          "Cọ rửa bằng bùi nhùi kim loại sắc nhọn",
          "Nhúng vào dung dịch axit đặc để tẩy trắng",
          "Hơ trên ngọn lửa đèn cồn cho khô"
      ],
      "answer": 0,
      "explain": "Màng thủy tinh cực kỳ mỏng manh, cần tráng nước cất và thấm nhẹ bằng giấy lau thấu kính."
  },
  {
      "id": "b06-q08",
      "q": "Một mẫu đất có độ pH đo được là 4.2. Khuyến cáo kỹ thuật cải tạo phù hợp nhất là:",
      "options": [
          "Bón vôi bột để khử chua nâng pH lên mức 5.5 - 6.5",
          "Bón thêm lưu huỳnh để tăng độ chua",
          "Tưới nước mặn để trung hòa",
          "Không cần can thiệp bất kỳ biện pháp nào"
      ],
      "answer": 0,
      "explain": "pH 4.2 là đất chua nhiều (nguy cơ độc nhôm Al3+), bắt buộc phải bón vôi cải tạo."
  },
  {
      "id": "b06-q09",
      "q": "Đơn vị đo tiêu chuẩn của độ dẫn điện EC trong phân tích dung dịch đất là:",
      "options": [
          "mS/cm hoặc dS/m (milliSiemens trên centimet)",
          "Kilogram trên mét khối (kg/m3)",
          "Độ C (°C)",
          "Milimet thủy ngân (mmHg)"
      ],
      "answer": 0,
      "explain": "mS/cm (milliSiemens/cm) hoặc dS/m là đơn vị đo độ dẫn điện của dung dịch."
  },
  {
      "id": "b06-q10",
      "q": "Khi chỉ số EC của đất canh tác vượt quá 4.0 mS/cm, kết luận mẫu đất này thuộc nhóm:",
      "options": [
          "Đất bị nhiễm mặn, có thể gây hại nghiêm trọng cho hầu hết các cây trồng thông thường",
          "Đất hoàn toàn không có dinh dưỡng khoáng",
          "Đất chua phèn nặng",
          "Đất cát pha nghèo dinh dưỡng"
      ],
      "answer": 0,
      "explain": "EC > 4.0 mS/cm là ngưỡng đất mặn, áp suất thẩm thấu cao cản trở rễ hút nước."
  },
  {
      "id": "b06-q11",
      "q": "Quy trình lấy mẫu đất đại diện ngoài đồng ruộng tuân theo nguyên tắc lấy mẫu nào?",
      "options": [
          "Lấy mẫu hỗn hợp theo đường chéo góc hoặc đường dích dắc ở 5 điểm trong ruộng",
          "Chỉ lấy duy nhất 1 nắm đất ở cổng vào",
          "Lấy đất ở đáy rãnh mương sâu ngập bùn",
          "Lấy đất bám trên bánh xe cơ giới"
      ],
      "answer": 0,
      "explain": "Lấy mẫu 5 điểm theo đường chéo góc (4 góc và tâm), trộn đều tạo mẫu hỗn hợp đại diện."
  },
  {
      "id": "b06-q12",
      "q": "Độ sâu lấy mẫu đất nông nghiệp đối với tầng canh tác cây hàng năm (lúa, rau) thường là:",
      "options": [
          "Từ 0 đến 20 cm (tầng đất mặt hoạt động rễ)",
          "Từ 1 mét đến 2 mét dưới lòng đất",
          "Chỉ gạt nhẹ lớp bụi bề mặt 1 milimet",
          "Sâu dưới mực nước ngầm 5 mét"
      ],
      "answer": 0,
      "explain": "Tầng 0 - 20 cm là tầng rễ cây hàng năm hấp thụ phần lớn nước và phân bón."
  },
  {
      "id": "b06-q13",
      "q": "Trước khi pha chế dịch chiết, mẫu đất ẩm lấy từ đồng ruộng về cần được xử lý sơ bộ ra sao?",
      "options": [
          "Nhặt sạch rễ cây sỏi đá, phơi khô trong bóng râm, nghiền nhỏ và rây qua rây 1 - 2 mm",
          "Nướng chín đất trong lò than hồng",
          "Đổ cồn vào đốt cháy sạch đất",
          "Ngâm đất vào thùng nước xà phòng"
      ],
      "answer": 0,
      "explain": "Phơi khô nơi thoáng mát (không phơi nắng gắt), nghiền nhỏ và rây mịn giúp mẫu đồng nhất."
  },
  {
      "id": "b06-q14",
      "q": "Hiệu chuẩn (calibrate) bút đo pH điện tử trước khi đo được thực hiện bằng cách nhúng vào dung dịch nào?",
      "options": [
          "Các dung dịch đệm chuẩn có độ pH cố định (pH = 4.01, 7.00, 10.01)",
          "Nước đường pha đặc",
          "Nước mắm cá cơm",
          "Dung dịch giấm ăn tự làm"
      ],
      "answer": 0,
      "explain": "Dung dịch đệm chuẩn (buffer solution) pH 4.0, 7.0 đảm bảo độ chính xác của cảm biến."
  },
  {
      "id": "b06-q15",
      "q": "Nếu kết quả đo pH của một mẫu đất nằm trong khoảng 6.0 - 7.0 thì nhận định nào đúng?",
      "options": [
          "Đất có phản ứng gần trung tính, rất thuận lợi cho đa số cây trồng hấp thu dinh dưỡng",
          "Đất bị chua cực nặng cần bón 10 tấn vôi",
          "Đất bị nhiễm mặn nghiêm trọng",
          "Đất không thể trồng được bất kỳ loài cây nào"
      ],
      "answer": 0,
      "explain": "pH 6.0 - 7.0 là khoảng tối hảo, khoáng chất hòa tan cân đối không bị cố định."
  },
  {
      "id": "b06-q16",
      "q": "Tại sao không nên nhúng trực tiếp đầu đo bút pH vào lớp bùn cát đặc quánh ở đáy cốc?",
      "options": [
          "Hạt cát có thể làm trầy xước hoặc làm vỡ màng bóng thủy tinh cảm biến tinh vi",
          "Vì đầu đo sẽ bị tan biến thành nước",
          "Vì dung dịch sẽ bốc cháy",
          "Vì pin của bút đo sẽ bị nổ"
      ],
      "answer": 0,
      "explain": "Đầu cảm biến thủy tinh rất dễ vỡ, chỉ nên nhúng lơ lửng trong phần nước chiết trong bên trên."
  },
  {
      "id": "b06-q17",
      "q": "Khi đo độ mặn của đất ven biển, chỉ số EC càng cao thì nồng độ muối khoáng trong đất:",
      "options": [
          "Càng nhiều (đất càng mặn)",
          "Càng ít (đất càng ngọt)",
          "Không có mối liên hệ nào",
          "Luôn cố định bằng 0"
      ],
      "answer": 0,
      "explain": "Độ dẫn điện tỷ lệ thuận với số lượng ion Na+, Cl-, SO4(2-) tự do trong dung dịch."
  },
  {
      "id": "b06-q18",
      "q": "Để đo độ chua tiềm tàng (độ chua trao đổi) của đất trong phòng thí nghiệm, người ta thay nước cất bằng dung dịch nào?",
      "options": [
          "Dung dịch muối trung tính KCl 1M",
          "Dung dịch đường glucozơ",
          "Dung dịch cồn 90 độ",
          "Dung dịch dầu ăn"
      ],
      "answer": 0,
      "explain": "Ion K+ trong KCl 1M sẽ đẩy toàn bộ H+ và Al3+ trao đổi bám trên keo đất ra dung dịch để đo."
  },
  {
      "id": "b06-q19",
      "q": "Nếu sau khi nhúng giấy quỳ vào nước chiết đất, giấy chuyển sang màu xanh lam đậm, đất đó có phản ứng gì?",
      "options": [
          "Đất có phản ứng kiềm (pH > 7.5)",
          "Đất chua (axit)",
          "Đất trung tính",
          "Đất bị đóng băng"
      ],
      "answer": 0,
      "explain": "Môi trường bazơ (kiềm) làm đổi màu chỉ thị quỳ tím sang màu xanh lam."
  },
  {
      "id": "b06-q20",
      "q": "Khi đo một mẫu đất thấy pH = 5.2 và EC = 0.3 mS/cm. Đánh giá tổng hợp mẫu đất này:",
      "options": [
          "Đất bị chua nhẹ và không bị nhiễm mặn (hàm lượng muối hòa tan thấp)",
          "Đất bị nhiễm mặn nặng và có tính kiềm mạnh",
          "Đất trung tính lý tưởng cho mọi loại cây",
          "Đất bị ngập úng chất thải hóa học"
      ],
      "answer": 0,
      "explain": "pH 5.2 là đất chua; EC 0.3 mS/cm < 1.0 mS/cm là đất ngọt an toàn không mặn."
  },
  {
      "id": "b06-q21",
      "q": "Kỹ năng an toàn phòng thực hành khi sử dụng dụng cụ thủy tinh (ống đong, cốc đong) là:",
      "options": [
          "Thao tác nhẹ nhàng, đặt trên mặt bàn phẳng, tránh va đập rơi vỡ gây thương tích",
          "Ném dụng cụ thủy tinh qua lại để thử độ bền",
          "Đun trực tiếp cốc thủy tinh mỏng trên ngọn lửa bếp than",
          "Uống thử nước chiết đất để kiểm tra vị giác"
      ],
      "answer": 0,
      "explain": "Cần thao tác cẩn thận, mang găng tay và tuân thủ quy tắc an toàn thực hành nông nghiệp."
  },
  {
      "id": "b06-q22",
      "q": "Ý nghĩa thực tiễn to lớn của việc xác định độ chua và độ mặn của đất trước vụ gieo trồng là:",
      "options": [
          "Giúp người nông dân chọn đúng giống cây trồng phù hợp và tính toán lượng vôi/biện pháp cải tạo đất hợp lý",
          "Làm chậm thời vụ gieo trồng của địa phương",
          "Tăng chi phí sản xuất mà không đem lại lợi ích gì",
          "Loại bỏ hoàn toàn vai trò của các nhà khoa học nông nghiệp"
      ],
      "answer": 0,
      "explain": "'Biết đất, biết cây': Đo đạc giúp quyết định chính xác lượng vôi bột cần bón khử chua và loại cây thích hợp."
  },
  {
      "id": "b06-q23",
      "q": "Mẫu đất ở một sườn đồi tại huyện Phục Hòa (Cao Bằng) đo được pH = 4.3. Loại phân bón vô cơ nào sau đây KHÔNG NÊN tiếp tục bón nhiều?",
      "options": [
          "Phân đạm Sunfat amoni (SA) vì có tính chua sinh lý làm đất càng thêm chua",
          "Phân lân nung chảy có tính kiềm nhẹ",
          "Vôi bột khử chua",
          "Phân chuồng hoai mục"
      ],
      "answer": 0,
      "explain": "Phân SA chứa gốc SO4(2-) có tính chua sinh lý sẽ làm đất chua thêm trầm trọng."
  },
  {
      "id": "b06-q24",
      "q": "Báo cáo kết quả thực hành đo độ chua và độ mặn của đất cần có những nội dung cơ bản nào?",
      "options": [
          "Mục đích thực hành, dụng cụ hóa chất, các bước tiến hành, số liệu đo pH/EC và kết luận nhận xét kiến nghị",
          "Chỉ cần viết tên người làm bài mà không cần số liệu",
          "Chép lại toàn bộ sách giáo khoa từ trang đầu đến trang cuối",
          "Vẽ tranh phong cảnh đồng ruộng không liên quan"
      ],
      "answer": 0,
      "explain": "Báo cáo khoa học cần đầy đủ mục tiêu, quy trình, kết quả đo cụ thể và đề xuất kỹ thuật canh tác."
  }
];

export default QUESTIONS_BAI_06;
