import type { Question } from "@/lib/types";

// Ngân hàng câu hỏi Trắc nghiệm 4 lựa chọn: Bài 20 (Đủ 24 câu chuẩn GDPT 2018)
export const QUESTIONS_BAI_20: Question[] = [
  {
      "id": "b20-q01",
      "q": "Mục đích chính của việc bảo quản sản phẩm trồng trọt sau thu hoạch là gì?",
      "options": [
          "Làm chậm quá trình hô hấp, giảm thiểu hao hụt khối lượng và duy trì phẩm chất dinh dưỡng của nông sản trong thời gian dài",
          "Làm cho nông sản mọc thêm rễ mới",
          "Biến nông sản thành các đồ dùng kim loại",
          "Tăng hàm lượng nước trong nông sản lên tối đa"
      ],
      "answer": 0,
      "explain": "Bảo quản nhằm kìm hãm sự phân giải sinh hóa và sự tấn công của vi sinh vật gây thối hỏng."
  },
  {
      "id": "b20-q02",
      "q": "Quá trình sinh lý nào xảy ra liên tục ở nông sản sau thu hoạch làm tiêu hao chất dinh dưỡng dự trữ và sinh nhiệt?",
      "options": [
          "Quá trình hô hấp tế bào",
          "Quá trình quang hợp tổng hợp đường",
          "Quá trình thụ phấn thụ tinh",
          "Quá trình hút nước từ rễ"
      ],
      "answer": 0,
      "explain": "Nông sản sau thu hoạch vẫn là vật thể sống, hô hấp tiêu hao đường, tinh bột và tỏa nhiệt ẩm."
  },
  {
      "id": "b20-q03",
      "q": "Công nghệ bảo quản lạnh (Cold Storage) dựa trên nguyên lý hoạt động nào?",
      "options": [
          "Dùng nhiệt độ thấp để ức chế cường độ hô hấp của nông sản và kìm hãm hoạt động của vi sinh vật gây thối rữa",
          "Đun sôi nông sản ở 100 độ C",
          "Chiếu đèn sưởi ấm cho nông sản",
          "Ngâm nông sản vào nước đường nóng"
      ],
      "answer": 0,
      "explain": "Hạ nhiệt độ làm giảm hoạt tính enzyme hô hấp và làm tê liệt sự phát triển của nấm mốc vi khuẩn."
  },
  {
      "id": "b20-q04",
      "q": "Công nghệ bảo quản trong khí quyển điều chỉnh (CA - Controlled Atmosphere) can thiệp vào yếu tố nào?",
      "options": [
          "Chủ động điều chỉnh chính xác nồng độ các chất khí (hạ O2, tăng CO2 và kiểm soát N2) kết hợp với nhiệt độ lạnh",
          "Bơm thêm khí oxy nguyên chất vào kho",
          "Hút sạch toàn bộ không khí thành chân không tuyệt đối",
          "Đốt rơm rạ tạo khói ngạt trong kho"
      ],
      "answer": 0,
      "explain": "Giảm O2 (xuống 1-3%) và tăng CO2 (1-5%) giúp đưa nông sản vào trạng thái 'ngủ đông' sinh học sâu."
  },
  {
      "id": "b20-q05",
      "q": "Bảo quản bằng công nghệ chiếu xạ thực phẩm sử dụng nguồn tia nào sau đây?",
      "options": [
          "Tia bức xạ ion hóa (tia Gamma từ Cobalt-60 hoặc máy gia tốc chùm tia điện tử)",
          "Tia laser màu đỏ đồ chơi",
          "Ánh sáng đèn huỳnh quang",
          "Ánh sáng mặt trời tự nhiên"
      ],
      "answer": 0,
      "explain": "Tia gamma hoặc tia điện tử phá vỡ DNA của vi khuẩn, nấm mốc và ức chế sự nảy mầm (ở củ khoai tây, hành tỏi)."
  },
  {
      "id": "b20-q06",
      "q": "Tác dụng nổi bật của chiếu xạ nông sản sau thu hoạch là gì?",
      "options": [
          "Ức chế sự nảy mầm của củ (khoai tây, hành tỏi), tiêu diệt côn trùng mọt và vi sinh vật gây hại, kéo dài hạn sử dụng",
          "Làm cho củ khoai tây phát sáng",
          "Làm cho nông sản biến thành kim loại",
          "Làm chín nục quả chỉ sau 1 phút"
      ],
      "answer": 0,
      "explain": "Chiếu xạ liều thấp diệt trừ mọt trứng sâu và chống nảy mầm củ an toàn đạt chuẩn kiểm dịch xuất khẩu."
  },
  {
      "id": "b20-q07",
      "q": "Công nghệ màng bọc sinh học (như màng Chitosan, sáp vi sinh) bảo quản quả tươi có tác dụng gì?",
      "options": [
          "Tạo lớp màng bán thấm mỏng bao quanh vỏ quả, hạn chế thoát hơi nước và trao đổi khí nhưng không gây ngạt yếm khí",
          "Làm cho quả biến thành kẹo dẻo",
          "Ngăn chặn quả chín mãi mãi thành đá",
          "Làm cho vỏ quả chuyển màu tím đen"
      ],
      "answer": 0,
      "explain": "Màng sinh học tự nhiên kiểm soát bốc hơi nước và O2/CO2 làm chậm quá trình chín mềm vỏ quả."
  },
  {
      "id": "b20-q08",
      "q": "Chất Chitosan dùng sản xuất màng bọc bảo quản quả có nguồn gốc tự nhiên từ đâu?",
      "options": [
          "Chiết xuất từ vỏ các loài giáp xác (vỏ tôm, cua) an toàn sinh học và phân hủy hoàn toàn",
          "Từ dầu mỏ hóa dầu",
          "Từ chất thải nhựa công nghiệp",
          "Từ quặng than đá"
      ],
      "answer": 0,
      "explain": "Chitosan là dẫn xuất chitin từ vỏ tôm cua, có hoạt tính kháng nấm và an toàn thực phẩm."
  },
  {
      "id": "b20-q09",
      "q": "Khí Ethylene (C2H4) có vai trò sinh lý nào đối với hoa quả sau thu hoạch?",
      "options": [
          "Là hormone khí tự nhiên thúc đẩy quá trình chín của quả và làm rụng hoa, úa vàng lá",
          "Chất làm đông cứng quả thành đá",
          "Chất ngăn quả không bao giờ chín",
          "Chất diệt trừ nấm bệnh hoàn toàn"
      ],
      "answer": 0,
      "explain": "Ethylene là hormone kích hoạt các phản ứng chín (chuyển hóa tinh bột thành đường, mềm thịt quả)."
  },
  {
      "id": "b20-q10",
      "q": "Hợp chất 1-MCP (1-Methylcyclopropene) được ứng dụng rộng rãi trong bảo quản hoa quả tươi vì có khả năng gì?",
      "options": [
          "Gắn chặt vào thụ thể ethylene, ngăn cản tác động của khí ethylene làm chậm quá trình chín và kéo dài độ tươi giòn",
          "Làm tăng tốc độ thối rữa quả",
          "Làm cho quả nở hoa",
          "Làm cho quả biến thành hạt giống"
      ],
      "answer": 0,
      "explain": "1-MCP là chất 'khóa thụ thể ethylene', giữ cho táo, lê, chuối, hoa tươi lâu gấp nhiều lần."
  },
  {
      "id": "b20-q11",
      "q": "Yêu cầu kỹ thuật khi thu hoạch quả tươi xuất khẩu bằng công nghệ cao là:",
      "options": [
          "Thao tác nhẹ nhàng, dùng kéo chuyên dụng cắt cuống, không làm trầy xước vỏ, khử trùng và làm lạnh sơ bộ (Pre-cooling)",
          "Ném quả thật mạnh từ trên ngọn cây xuống đất",
          "Ngâm quả vào nước bùn bẩn",
          "Phơi quả ngoài nắng chang chang 3 ngày"
      ],
      "answer": 0,
      "explain": "Làm lạnh sơ bộ hạ nhiệt đồng ruộng nhanh chóng và tránh dập nát hạn chế nấm xâm nhập."
  },
  {
      "id": "b20-q12",
      "q": "Khâu 'làm lạnh sơ bộ' (Pre-cooling) ngay sau khi thu hái hoa quả có mục đích gì?",
      "options": [
          "Nhanh chóng giải phóng 'nhiệt đồng ruộng' tích tụ trong quả, làm chậm hô hấp và kéo dài thời gian bảo quản tiếp theo",
          "Làm đông đá quả thành kem",
          "Làm vỏ quả đông cứng như sắt",
          "Để rửa sạch bụi bẩn"
      ],
      "answer": 0,
      "explain": "Pre-cooling giải nhiệt đồng ruộng trong vài giờ đầu, bước then chốt của chuỗi cung ứng lạnh."
  },
  {
      "id": "b20-q13",
      "q": "Bảo quản hạt giống trong kho lạnh chuyên dụng đòi hỏi các thông số tiêu chuẩn nào?",
      "options": [
          "Nhiệt độ thấp (dưới 10 độ C hoặc âm sâu) và độ ẩm không khí thấp (dưới 50%), độ ẩm hạt đạt chuẩn sấy khô",
          "Nhiệt độ 50 độ C và độ ẩm 100%",
          "Để lộ thiên ngoài trời mưa gió",
          "Nhiệt độ phòng nóng ẩm"
      ],
      "answer": 0,
      "explain": "Lạnh khô kìm hãm hô hấp hạt giống, duy trì tỷ lệ nảy mầm nguyên vẹn trong nhiều năm."
  },
  {
      "id": "b20-q14",
      "q": "Bảo quản thoáng tự nhiên (bảo quản truyền thống) thường áp dụng cho loại nông sản nào?",
      "options": [
          "Hạt thóc, hạt ngô đã phơi khô kiệt, hạt đậu đỗ bảo quản trong chum vại khô ráo",
          "Rau xà lách tươi ăn sống",
          "Quả dâu tây chín mọng",
          "Nấm ăn tươi"
      ],
      "answer": 0,
      "explain": "Hạt khô thủy phần < 13% có thể bảo quản thoáng trong bồ, bao bì nơi khô ráo."
  },
  {
      "id": "b20-q15",
      "q": "Hạn chế lớn nhất của phương pháp bảo quản hạt nông sản truyền thống trong gia đình là:",
      "options": [
          "Dễ bị sâu mọt tấn công, chuột cắn phá và hạt dễ bị ẩm mốc khi gặp thời tiết nồm ẩm",
          "Chi phí ban đầu đắt hàng tỷ đồng",
          "Cần nhiều kỹ sư vận hành máy",
          "Làm cho hạt biến thành cát"
      ],
      "answer": 0,
      "explain": "Bảo quản thủ công dễ bị chuột bọ phá hoại và nấm mốc Aspergillus sinh độc tố aflatoxin."
  },
  {
      "id": "b20-q16",
      "q": "Chuỗi cung ứng lạnh (Cold Chain) trong nông nghiệp bao gồm những mắt xích nào?",
      "options": [
          "Thu hoạch làm mát sơ bộ -> Vận chuyển xe lạnh -> Kho lưu trữ lạnh -> Quầy kệ trưng bày siêu thị lạnh",
          "Chỉ có chiếc tủ lạnh ở nhà bếp",
          "Chở hoa quả bằng xe máy ngoài nắng",
          "Đóng bao tải gửi xe khách thông thường"
      ],
      "answer": 0,
      "explain": "Cold Chain duy trì dải nhiệt độ lạnh kiểm soát liên tục từ vườn thu hái đến bàn ăn người dùng."
  },
  {
      "id": "b20-q17",
      "q": "Bảo quản củ khoai tây ăn bằng công nghệ ức chế nảy mầm có ý nghĩa sức khỏe gì?",
      "options": [
          "Ngăn cản sự hình thành hợp chất độc Solanine tích tụ ở mầm và vỏ xanh củ khoai tây",
          "Làm cho củ khoai tây có nhiều vitamin B12",
          "Làm cho khoai tây ngọt như mía",
          "Làm cho củ nở hoa thơm phức"
      ],
      "answer": 0,
      "explain": "Khoai tây mọc mầm tích lũy độc tố glycoalkaloid Solanine gây ngộ độc thần kinh tiêu hóa nguy hiểm."
  },
  {
      "id": "b20-q18",
      "q": "Cảm biến IoT (Internet of Things) gắn trong kho bảo quản nông sản thông minh dùng để:",
      "options": [
          "Tự động theo dõi liên tục nhiệt độ, độ ẩm, nồng độ khí O2, CO2 và cảnh báo qua điện thoại di động",
          "Dùng để phát nhạc ru ngủ hạt thóc",
          "Tự động nấu chín nông sản",
          "Đo chiều cao của người quản lý kho"
      ],
      "answer": 0,
      "explain": "Cảm biến IoT giám sát môi trường kho 24/7, tự động bật máy hút ẩm hoặc máy lạnh điều tiết."
  },
  {
      "id": "b20-q19",
      "q": "Xử lý nhiệt nước nóng (Hot water treatment - HWT) đối với quả xoài trước khi đóng gói nhằm mục đích:",
      "options": [
          "Tiêu diệt ấu trùng ruồi đục quả và nấm bệnh thán thư tiềm ẩn trên bề mặt vỏ quả",
          "Nấu chín quả xoài ăn liền",
          "Làm cho quả xoài có mùi hương chuối",
          "Làm cho vỏ xoài chuyển sang màu xanh biếc"
      ],
      "answer": 0,
      "explain": "Ngâm nước nóng 48-52°C trong vài phút diệt sạch trứng ruồi đục quả và bào tử nấm thán thư."
  },
  {
      "id": "b20-q20",
      "q": "Gói hút ẩm (Silica gel) hoặc gói hút oxy/ethylene đặt trong túi bao bì quả có tác dụng gì?",
      "options": [
          "Hấp phụ hơi nước thừa, làm chậm quá trình chín và ngăn chặn nấm mốc phát triển bên trong bao gói kín",
          "Làm cho quả phình to gấp đôi",
          "Tỏa nhiệt nấu chín quả",
          "Thay thế hoàn toàn phân bón cho cây"
      ],
      "answer": 0,
      "explain": "Hút khí ethylene và ẩm độ dư thừa kéo dài thời gian lưu thông phân phối nông sản tươi."
  },
  {
      "id": "b20-q21",
      "q": "Ứng dụng công nghệ bảo quản lạnh đối với quả mận máu, quả lê vàng đặc sản tại Cao Bằng giúp:",
      "options": [
          "Kéo dài thời vụ tiêu thụ từ 1-2 tuần lên 1-2 tháng, giảm áp lực dư thừa lúc rộ mùa và nâng cao giá trị bán",
          "Làm cho quả lê biến thành quả táo",
          "Làm quả mận rụng hết hạt",
          "Làm quả mận không còn vị chua"
      ],
      "answer": 0,
      "explain": "Kho lạnh giúp rải vụ phân phối, giữ nguyên độ giòn ngọt và tránh điệp khúc 'được mùa mất giá'."
  },
  {
      "id": "b20-q22",
      "q": "Bảo quản nông sản bằng phương pháp MAP (Modified Atmosphere Packaging) là gì?",
      "options": [
          "Đóng gói bao bì màng polymer có độ thẩm thấu khí chọn lọc tạo khí quyển tối ưu bên trong bao gói kín",
          "Đổ nông sản vào thùng phuy dầu",
          "Gói nông sản bằng giấy báo cũ",
          "Bọc nông sản bằng lá chuối khô"
      ],
      "answer": 0,
      "explain": "Bao gói MAP tự động cân bằng nồng độ O2/CO2 nhờ màng thở chuyên dụng cho từng loại rau quả."
  },
  {
      "id": "b20-q23",
      "q": "Tiêu chuẩn độ ẩm an toàn của hạt thóc (lúa) đưa vào kho bảo quản dài hạn là khoảng bao nhiêu?",
      "options": [
          "Dưới 13 - 13.5%",
          "Khoảng 30 - 35%",
          "Độ ẩm 80%",
          "Độ ẩm 100% ngậm nước"
      ],
      "answer": 0,
      "explain": "Thóc khô dưới 13.5% kìm hãm tối đa hô hấp và ngăn cản hoàn toàn nấm mốc phát triển."
  },
  {
      "id": "b20-q24",
      "q": "Tổn thất sau thu hoạch đối với rau quả tươi ở các nước đang phát triển nếu không áp dụng công nghệ cao có thể lên tới:",
      "options": [
          "Từ 20% đến 35% tổng sản lượng",
          "Hoàn toàn 0%",
          "Chỉ khoảng 0.1%",
          "Trên 99.9%"
      ],
      "answer": 0,
      "explain": "Hao hụt sau thu hoạch rau quả do giập nát, thối rữa ở mức rất cao nếu thiếu chuỗi bảo quản lạnh."
  }
];

export default QUESTIONS_BAI_20;
