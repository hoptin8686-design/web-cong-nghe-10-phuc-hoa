import type { Question } from "@/lib/types";

// Ngân hàng câu hỏi Trắc nghiệm 4 lựa chọn: Bài 12 (Đủ 24 câu chuẩn GDPT 2018)
export const QUESTIONS_BAI_12: Question[] = [
  {
      "id": "b12-q01",
      "q": "Phương pháp chọn lọc giống cây trồng đơn giản và có lịch sử lâu đời nhất là:",
      "options": [
          "Chọn lọc hỗn hợp và chọn lọc cá thể",
          "Công nghệ chỉnh sửa gen CRISPR/Cas9",
          "Lai soma truyền nhân tế bào",
          "Bắn gen bằng súng áp lực hạt vàng"
      ],
      "answer": 0,
      "explain": "Chọn lọc hỗn hợp và cá thể từ quần thể ban đầu là phương pháp chọn giống truyền thống lâu đời."
  },
  {
      "id": "b12-q02",
      "q": "Đặc điểm cơ bản của phương pháp chọn lọc cá thể là:",
      "options": [
          "Chọn riêng từng cá thể ưu tú, nhân hạt riêng rẽ theo từng dòng để so sánh, đánh giá chính xác kiểu gen",
          "Gom hạt của tất cả các cây tốt trộn chung vào một bao",
          "Đem cả ruộng đi gặt đại trà",
          "Chọn ngẫu nhiên không cần quan sát"
      ],
      "answer": 0,
      "explain": "Chọn cá thể theo dõi riêng từng dòng con cháu, cho độ chính xác cao và tạo giống thuần chủng nhanh."
  },
  {
      "id": "b12-q03",
      "q": "Lai hữu tính trong chọn tạo giống cây trồng là phương pháp:",
      "options": [
          "Giao phấn giữa hai hoặc nhiều dạng bố mẹ có kiểu gen khác nhau nhằm tập hợp các gen quý vào con lai",
          "Ghép cành của cây này lên thân cây kia",
          "Ngâm hạt giống vào hóa chất gây đột biến",
          "Nuôi cấy đỉnh sinh trưởng trong ống nghiệm"
      ],
      "answer": 0,
      "explain": "Lai hữu tính kết hợp các bộ gen khác nhau qua quá trình thụ tinh tạo biến dị tổ hợp phong phú."
  },
  {
      "id": "b12-q04",
      "q": "Phương pháp lai khác loài hoặc lai xa thường gặp phải trở ngại lớn nhất nào?",
      "options": [
          "Hiện tượng bất thụ (con lai không có khả năng sinh sản, không tạo hạt)",
          "Cây con lớn quá nhanh làm vỡ chậu",
          "Hạt lai bay lên trời không rơi xuống đất",
          "Cây biến thành loài động vật"
      ],
      "answer": 0,
      "explain": "Bất tương hợp di truyền giữa các loài khác nhau thường khiến con lai xa bị bất thụ."
  },
  {
      "id": "b12-q05",
      "q": "Tạo giống cây trồng bằng phương pháp gây đột biến thực nghiệm là sử dụng tác nhân nào?",
      "options": [
          "Các tác nhân vật lý (tia phóng xạ gamma, tia X, tia tử ngoại) hoặc tác nhân hóa học (EMS, colchicine)",
          "Dùng nước đá lạnh làm đông cứng hạt giống",
          "Tưới nước đường mỗi ngày",
          "Phát nhạc giao hưởng cho hạt giống nghe"
      ],
      "answer": 0,
      "explain": "Tác nhân lý hóa làm biến đổi cấu trúc DNA hoặc số lượng nhiễm sắc thể tạo đột biến mới."
  },
  {
      "id": "b12-q06",
      "q": "Hóa chất Colchicine thường được dùng trong chọn giống nhằm mục đích gì?",
      "options": [
          "Gây cản trở sự hình thành thoi vô sắc dẫn đến đa bội hóa nhiễm sắc thể (tạo thể tam bội, tứ bội)",
          "Làm đông tụ protein diệt trừ sâu bệnh",
          "Làm cho lá cây có màu vàng tươi",
          "Khử trùng đất trồng"
      ],
      "answer": 0,
      "explain": "Colchicine ngăn thoi phân bào, nhân đôi bộ NST tạo thể đa bội (3n, 4n) có cơ quan sinh dưỡng to lớn."
  },
  {
      "id": "b12-q07",
      "q": "Giống dưa hấu không hạt (tam bội 3n) được tạo ra từ phép lai nào?",
      "options": [
          "Lai giữa dạng dưa hấu tứ bội (4n) với dạng dưa hấu lưỡng bội (2n)",
          "Lai giữa dưa hấu với quả chuối",
          "Gieo hạt dưa hấu trong bóng tối",
          "Tưới nước muối cho cây dưa hấu"
      ],
      "answer": 0,
      "explain": "Hạt lai tam bội 3n phát triển thành cây có quả nhưng không hình thành hạt hữu tính (không hạt)."
  },
  {
      "id": "b12-q08",
      "q": "Công nghệ chuyển gen (GMO) ở thực vật có ưu điểm vượt trội nào so với lai hữu tính truyền thống?",
      "options": [
          "Có thể chuyển các gen đích mong muốn từ bất kỳ loài sinh vật nào (kể cả vi khuẩn, động vật) vào cây trồng mà không bị rào cản loài",
          "Hoàn toàn không cần dụng cụ phòng thí nghiệm",
          "Chỉ mất 5 phút là tạo ra giống mới thương mại",
          "Chi phí sản xuất bằng 0 đồng"
      ],
      "answer": 0,
      "explain": "Chuyển gen vượt qua rào cản sinh sản liên loài, đưa chính xác gen kháng sâu, chịu hạn vào cây."
  },
  {
      "id": "b12-q09",
      "q": "Giống ngô chuyển gen kháng sâu đục thân (ngô Bt) được chuyển gen từ sinh vật nào?",
      "options": [
          "Vi khuẩn đất Bacillus thuringiensis",
          "Nấm men rượu",
          "Con cá hồi đại dương",
          "Cây xương rồng sa mạc"
      ],
      "answer": 0,
      "explain": "Gen mã hóa protein độc tố Cry từ vi khuẩn Bt tiêu diệt sâu đục thân khi chúng cắn phá mô cây ngô."
  },
  {
      "id": "b12-q10",
      "q": "Quy trình tạo giống mới bằng phương pháp chọn lọc cá thể thường mất bao nhiêu vụ thử nghiệm?",
      "options": [
          "Từ 3 đến 5 vụ so sánh dòng và khảo nghiệm",
          "Chỉ cần 1 ngày duy nhất",
          "Phải mất 200 năm liên tục",
          "Không cần vụ thử nghiệm nào"
      ],
      "answer": 0,
      "explain": "Cần nhiều thế hệ thanh lọc dòng thuần và đánh giá năng suất so sánh với giống đối chứng."
  },
  {
      "id": "b12-q11",
      "q": "Ưu điểm của phương pháp chọn lọc hỗn hợp là gì?",
      "options": [
          "Kỹ thuật đơn giản, dễ làm, ít tốn kém, nông dân có thể tự thực hiện tại ruộng",
          "Tạo ra giống có độ thuần khiết tuyệt đối 100%",
          "Biết chính xác kiểu gen của từng cá thể cây",
          "Tự động nhân đôi nhiễm sắc thể"
      ],
      "answer": 0,
      "explain": "Chọn hỗn hợp dựa vào kiểu hình, gom hạt đại trà, dễ ứng dụng để phục tráng giống địa phương."
  },
  {
      "id": "b12-q12",
      "q": "Hạn chế lớn nhất của phương pháp gây đột biến nhân tạo trong chọn giống là:",
      "options": [
          "Đột biến xảy ra vô hướng, đa số đột biến là có hại, tỷ lệ đột biến có lợi rất thấp và tốn công sàng lọc",
          "Chỉ áp dụng được cho động vật nuôi",
          "Không thể dùng tia phóng xạ",
          "Làm mất hoàn toàn màu xanh của lá"
      ],
      "answer": 0,
      "explain": "Tác nhân đột biến phá vỡ DNA ngẫu nhiên, cần quần thể sàng lọc hàng vạn cá thể để tìm 1 đột biến tốt."
  },
  {
      "id": "b12-q13",
      "q": "Trong lai hữu tính, thao tác 'khử đực' ở hoa mẹ cây tự thụ phấn (như hoa lúa) được thực hiện như thế nào?",
      "options": [
          "Cắt bỏ hoặc hút sạch bao phấn của hoa trước khi bao phấn chín và tung phấn",
          "Cắt bỏ toàn bộ nhụy hoa cái",
          "Bứt bỏ toàn bộ lá cây lúa",
          "Ngâm cành hoa vào cồn 90 độ"
      ],
      "answer": 0,
      "explain": "Khử đực trước khi tung phấn ngăn chặn tự thụ phấn ngoài ý muốn ở dòng mẹ."
  },
  {
      "id": "b12-q14",
      "q": "Bao cách ly hoa sau khi thụ phấn nhân tạo có tác dụng quan trọng gì?",
      "options": [
          "Ngăn không cho hạt phấn lạ ngoài không khí rơi vào đầu nhụy gây tạp giao",
          "Giữ ấm cho hoa khỏi bị cảm lạnh",
          "Làm cho hoa đổi sang màu vàng",
          "Ngăn chặn ánh sáng mặt trời chiếu vào"
      ],
      "answer": 0,
      "explain": "Túi bao cách ly đảm bảo phấn hoa của bố được thụ phấn chọn lọc chính xác."
  },
  {
      "id": "b12-q15",
      "q": "Công nghệ chỉnh sửa gen CRISPR/Cas9 hiện đại được ví như công cụ gì trong sinh học phân tử?",
      "options": [
          "Chiếc kéo sinh học phân tử chính xác giúp cắt, sửa hoặc thay thế đoạn DNA mục tiêu",
          "Chiếc kính lúp khổng lồ",
          "Cái máy cày mini",
          "Chiếc bơm nước điện tử"
      ],
      "answer": 0,
      "explain": "CRISPR/Cas9 định vị vị trí DNA chính xác và cắt sửa gen theo ý muốn của nhà khoa học."
  },
  {
      "id": "b12-q16",
      "q": "Giống bưởi da xanh hoặc cam không hạt có thể được tạo ra bằng phương pháp nào?",
      "options": [
          "Chiếu xạ tia gamma xử lý mắt ghép hoặc tạo thể đa bội",
          "Tưới giấm chua vào gốc cây",
          "Vặt hết gai nhọn trên cành",
          "Trồng cây trên giàn sắt"
      ],
      "answer": 0,
      "explain": "Chiếu xạ gây bất dục hạt phấn hoặc tạo tam bội giúp cam bưởi không hạt thương phẩm."
  },
  {
      "id": "b12-q17",
      "q": "Phương pháp lai tạo giống lúa kết hợp giữa bố mẹ khác nguồn gốc địa lý (lai xa) nhằm mục đích gì?",
      "options": [
          "Tạo ra nguồn biến dị phong phú và khai thác hiệu ứng ưu thế lai mạnh mẽ",
          "Để cây lúa không trổ bông",
          "Để giảm năng suất hạt lúa",
          "Để cây lúa mọc thành củ"
      ],
      "answer": 0,
      "explain": "Khoảng cách di truyền xa giữa bố mẹ tạo con lai có ưu thế lai dị hợp tử cao."
  },
  {
      "id": "b12-q18",
      "q": "Đặc điểm của cây tứ bội (4n) so với cây lưỡng bội (2n) ban đầu thường là:",
      "options": [
          "Cơ quan sinh dưỡng (thân, lá, củ, hoa, quả) có kích thước to hơn, chống chịu tốt hơn",
          "Cây thấp bé tý hon",
          "Lá mỏng manh dễ rụng",
          "Hoàn toàn không thể quang hợp"
      ],
      "answer": 0,
      "explain": "Tế bào đa bội chứa lượng DNA gấp đôi, thể tích tế bào tăng làm hoa quả, lá thân to lớn vượt bậc."
  },
  {
      "id": "b12-q19",
      "q": "Tại sao việc đưa cây trồng chuyển gen (GMO) ra trồng đại trà cần được kiểm soát và đánh giá nghiêm ngặt?",
      "options": [
          "Đảm bảo an toàn sinh học, tránh phát tán gen kháng kháng sinh hoặc ảnh hưởng tiêu cực đến sức khỏe con người và hệ sinh thái",
          "Vì cây chuyển gen sẽ biến thành động vật hoang dã",
          "Vì cây chuyển gen không thể tưới bằng nước",
          "Vì hạt giống sẽ tự phát nổ"
      ],
      "answer": 0,
      "explain": "Cần thẩm định nguy cơ sinh thái (chảy gen sang cỏ hoang) và an toàn dinh dưỡng cho con người."
  },
  {
      "id": "b12-q20",
      "q": "Viện Lúa Đồng bằng sông Cửu Long hoặc Học viện Nông nghiệp VN thường dùng phương pháp nào phổ biến nhất để tạo ra các giống lúa quốc gia?",
      "options": [
          "Lai hữu tính kết hợp chọn lọc cá thể phả hệ qua nhiều thế hệ",
          "Chỉ dùng phương pháp cầu may",
          "Thu gom cỏ dại gieo hạt",
          "Chỉ dùng phương pháp ngâm nước sôi"
      ],
      "answer": 0,
      "explain": "Lai hữu tính chọn lọc phả hệ là phương pháp kinh điển, tạo ra phần lớn giống lúa nổi tiếng của Việt Nam."
  },
  {
      "id": "b12-q21",
      "q": "Để chọn tạo giống cây có khả năng chịu lạnh rét cho vùng núi Cao Bằng, phương pháp sàng lọc nào hiệu quả?",
      "options": [
          "Nuôi cấy và sàng lọc các dòng cá thể trong điều kiện áp lực lạnh tự nhiên hoặc buồng khí hậu nhân tạo",
          "Đốt nóng cây giống trong lò than",
          "Phun nước ấm 50 độ C vào mùa đông",
          "Trồng cây dưới lòng đất sâu"
      ],
      "answer": 0,
      "explain": "Tạo áp lực chọn lọc rét lạnh để loại bỏ cá thể mẫn cảm, giữ lại các kiểu gen chống chịu tốt."
  },
  {
      "id": "b12-q22",
      "q": "Phương pháp phục tráng giống lúa đặc sản bản địa bị thoái hóa thường áp dụng quy trình chọn lọc nào?",
      "options": [
          "Chọn lọc cá thể so sánh dòng qua 3 vụ liên tục (vụ 1: chọn cây ưu tú -> vụ 2: so sánh dòng -> vụ 3: nhân siêu nguyên chủng)",
          "Gặt tất cả đem xay xát rồi lấy tấm gieo mạ",
          "Mua hạt giống lai nước ngoài về gán mác đặc sản",
          "Đem hạt giống phơi trên chảo rang"
      ],
      "answer": 0,
      "explain": "Quy trình phục tráng dòng cá thể giúp gạn lọc tạp giao, đưa giống đặc sản về lại độ thuần chủng ban đầu."
  },
  {
      "id": "b12-q23",
      "q": "Kỹ thuật đánh dấu phân tử (MAS - Marker Assisted Selection) trong chọn giống giúp:",
      "options": [
          "Phát hiện sớm các cá thể mang gen quý ngay từ giai đoạn cây mầm thông qua phân tích DNA, rút ngắn thời gian chọn giống",
          "Sơn màu đỏ lên thân cây để nhận dạng ngoài ruộng",
          "Cắm biển quảng cáo bên cạnh cây",
          "Dùng bút dạ vẽ lên lá cây"
      ],
      "answer": 0,
      "explain": "MAS cho phép chọn lọc chính xác gen mong muốn ở giai đoạn cây con trong phòng thí nghiệm."
  },
  {
      "id": "b12-q24",
      "q": "Mục tiêu quan trọng hàng đầu trong công tác chọn tạo giống lúa của Việt Nam hiện nay là:",
      "options": [
          "Nâng cao chất lượng hạt gạo (thơm, mềm cơm), thích ứng biến đổi khí hậu (chịu mặn, hạn) và giảm phát thải khí nhà kính",
          "Chỉ cần hạt gạo thật to nhưng ăn đắng ngắt",
          "Tăng chiều cao cây lúa lên 5 mét",
          "Tạo ra cây lúa không cần ánh sáng"
      ],
      "answer": 0,
      "explain": "Xu thế giống lúa chất lượng cao (như ST25), thơm ngon và chống chịu biến đổi khí hậu toàn cầu."
  }
];

export default QUESTIONS_BAI_12;
