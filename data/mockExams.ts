import type { Question, TFQuestion, EssayQuestion } from "@/lib/types";

export interface MockExam {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  durationMinutes: number;
  questions: Question[]; // Phần I: 24 câu trắc nghiệm nhiều lựa chọn
  tfQuestions: TFQuestion[]; // Phần II: 4 câu đúng / sai (mỗi câu 4 mệnh đề)
  essayQuestions: EssayQuestion[]; // Phần III: 4 câu vận dụng thực tiễn
}

export const MOCK_EXAMS: MockExam[] = [
  {
    id: "de-chuan-cau-truc-2025",
    title: "Đề Ôn tập & Kiểm tra Chuẩn Cấu trúc GDPT 2018 — Công nghệ 10 Trồng trọt",
    subtitle: "Ma trận toàn diện 8 chương: 24 câu Trắc nghiệm nhiều lựa chọn + 4 câu Đúng/Sai (16 mệnh đề) + 4 câu Vận dụng thực tiễn",
    badge: "Chuẩn Bộ GD&ĐT · 45 Phút",
    durationMinutes: 45,
    questions: [
      {
        id: "mcq-01",
        q: "Vai trò quan trọng hàng đầu của ngành trồng trọt đối với đời sống con người và xã hội là:",
        options: [
          "Cung cấp lương thực, thực phẩm thiết yếu nuôi sống con người và giữ vững an ninh lương thực",
          "Khai thác và chế biến các loại khoáng sản kim loại màu phục vụ công nghiệp nặng",
          "Sản xuất linh kiện bán dẫn và thiết bị viễn thông không dây tốc độ cao",
          "Sản xuất vật liệu xây dựng như xi măng, sắt thép và bê tông chịu lực"
        ],
        answer: 0,
        explain: "Trồng trọt sản xuất lúa, ngô, khoai, rau củ quả... cung cấp nguồn calo và dinh dưỡng thiết yếu duy trì sự sống của con người, đồng thời đảm bảo an ninh lương thực quốc gia."
      },
      {
        id: "mcq-02",
        q: "Xu hướng phát triển nổi bật của ngành trồng trọt Việt Nam trong thời kỳ hiện đại là:",
        options: [
          "Phát triển nông nghiệp công nghệ cao, nông nghiệp hữu cơ, tuần hoàn và thông minh",
          "Gia tăng tối đa diện tích bằng cách chặt phá toàn bộ rừng tự nhiên đầu nguồn",
          "Lạm dụng tối đa thuốc bảo vệ thực vật hoá học để tiêu diệt sạch mọi sinh vật",
          "Chỉ tập trung sản xuất độc canh một giống cây lúa trên toàn bộ lãnh thổ"
        ],
        answer: 0,
        explain: "Trồng trọt hiện đại hướng tới ứng dụng công nghệ cao (IoT, nhà màng), hữu cơ, tuần hoàn phế phụ phẩm và giảm phát thải khí nhà kính."
      },
      {
        id: "mcq-03",
        q: "Nhóm cây trồng nào sau đây được xếp vào nhóm cây lương thực chủ lực ở nước ta?",
        options: [
          "Lúa nước, ngô, sắn, khoai lang",
          "Cà phê, chè, cao su, hồ tiêu",
          "Xoài, nhãn, bưởi, sầu riêng",
          "Rau muống, bắp cải, su hào, cà chua"
        ],
        answer: 0,
        explain: "Lúa nước, ngô, sắn và khoai lang là các cây trồng giàu tinh bột, đóng vai trò cây lương thực chính cung cấp năng lượng cho con người."
      },
      {
        id: "mcq-04",
        q: "Về yếu tố ánh sáng, cây trồng nào sau đây thuộc nhóm cây ưa bóng (có khả năng quang hợp tốt dưới tán cây khác hoặc trong bóng râm)?",
        options: [
          "Cây gừng, nghệ, ngải cứu, lá lốt, phong lan",
          "Cây lúa nước, ngô, mía, bạch đàn",
          "Cây thanh long, dưa hấu, hướng dương, đậu tương",
          "Cây phi lao, cao su, cà phê ngoài sáng"
        ],
        answer: 0,
        explain: "Cây gừng, nghệ, lá lốt, ngải cứu, lan hài có điểm bù ánh sáng thấp, phát triển tốt dưới tán che hoặc bóng râm râm mát."
      },
      {
        id: "mcq-05",
        q: "Đất trồng bao gồm những thành phần cơ bản nào?",
        options: [
          "Phần rắn (chất khoáng và chất hữu cơ), phần lỏng (nước), phần khí và sinh vật đất",
          "Chỉ gồm các hạt cát thạch anh nguyên chất không chứa không khí hay nước",
          "Chỉ gồm dung dịch nước và muối khoáng hòa tan trong bể chứa nhân tạo",
          "Chỉ gồm lớp mùn hữu cơ màu đen không có các hạt khoáng vô cơ"
        ],
        answer: 0,
        explain: "Đất tự nhiên là một hệ sinh thái phức tạp gồm 4 thành phần: phần rắn (khoáng + hữu cơ mùn), phần lỏng (nước hòa tan dinh dưỡng), phần khí (O2, CO2, N2) và sinh vật đất."
      },
      {
        id: "mcq-06",
        q: "Thành phần cơ giới của đất được xác định dựa vào tỷ lệ phần trăm khối lượng của các cấp hạt nào?",
        options: [
          "Hạt cát, hạt limon (bụi) và hạt sét",
          "Hạt sỏi lớn, hạt cuội tròn và mảnh đá vôi",
          "Hạt mùn hữu cơ, xác giun đất và xác vi sinh vật",
          "Hạt đạm urê, hạt phân lân và phân kali đỏ"
        ],
        answer: 0,
        explain: "Thành phần cơ giới là tỷ lệ tương đối giữa 3 cấp hạt khoáng: cát (2 - 0.05 mm), limon/bụi (0.05 - 0.002 mm) và sét (< 0.002 mm)."
      },
      {
        id: "mcq-07",
        q: "Hầu hết các hạt keo đất trong đất canh tác ở nước ta mang điện tích gì ở lớp ngoài cùng?",
        options: [
          "Điện tích âm (-), do đó có khả năng hấp phụ và giữ lại các cation dinh dưỡng như Ca²⁺, Mg²⁺, K⁺, NH₄⁺",
          "Điện tích dương (+), chỉ đẩy các chất dinh dưỡng ra ngoài tầng nước ngầm",
          "Trung hòa hoàn toàn về điện và không có khả năng giữ lại bất kỳ ion nào",
          "Liên tục biến đổi thành kim loại rắn không tan trong nước mưa"
        ],
        answer: 0,
        explain: "Keo đất ở Việt Nam đại đa số là keo âm. Nhân keo mang điện tích âm sẽ hấp phụ các cation dinh dưỡng mang điện tích dương (K+, NH4+, Ca2+, Mg2+), giúp cây không bị rửa trôi dinh dưỡng."
      },
      {
        id: "mcq-08",
        q: "Một mẫu đất được đo có độ pH = 4.5. Kết luận nào sau đây là chính xác về loại đất này?",
        options: [
          "Đất bị chua (chua nhiều), cần bón vôi bột để khử chua và nâng độ pH lên mức thích hợp",
          "Đất có tính kiềm mạnh, cần bón bột lưu huỳnh để tăng thêm độ kiềm",
          "Đất trung tính lý tưởng, tuyệt đối không cần cải tạo hay bón phân",
          "Đất nhiễm mặn nghiêm trọng do có nồng độ muối NaCl vượt ngưỡng an toàn"
        ],
        answer: 0,
        explain: "Độ pH < 6.5 là đất chua; pH = 4.5 thuộc đất chua nhiều. Ion H+ và Al3+ tự do cao gây độc cho rễ, cần bón vôi bột (CaO, CaCO3) để nâng pH lên 5.5 - 6.5."
      },
      {
        id: "mcq-09",
        q: "Để chống xói mòn và rửa trôi chất dinh dưỡng trên đất dốc ở vùng đồi núi Cao Bằng, biện pháp công trình kết hợp sinh học hiệu quả nhất là:",
        options: [
          "Làm ruộng bậc thang, trồng băng cây cốt khí chắn xói mòn theo đường đồng mức",
          "Cày xới sâu xuôi theo chiều dốc của sườn đồi trước mùa mưa bão lớn",
          "Chặt phá sạch toàn bộ cây rừng trên đỉnh đồi để phơi đất khô ráo",
          "Đốt nương làm rẫy liên tục nhiều vụ liên tiếp không để đất nghỉ"
        ],
        answer: 0,
        explain: "Làm ruộng bậc thang và trồng băng cây cốt khí cắt ngang sườn đốc giúp hãm vận tốc dòng chảy bề mặt, giữ lại đất màu và tăng độ ẩm cho đất."
      },
      {
        id: "mcq-10",
        q: "Giá thể nào sau đây là giá thể trơ nhân tạo thường dùng trong công nghệ trồng cây không dùng đất?",
        options: [
          "Đá trân châu (Perlite), đá bọt nham thạch, gốm xốp nung Keramsit",
          "Mụn xơ dừa tự nhiên chưa qua xử lý tannin và chất chát",
          "Mùn cưa gỗ thông tươi chứa nhiều dầu nhựa cay nóng",
          "Xác thân cây dương xỉ khô lấy từ rừng ngập mặn"
        ],
        answer: 0,
        explain: "Đá perlite, sỏi nhẹ keramsit, bông khoáng rockwool là giá thể trơ nhân tạo nhẹ, thoáng khí, vô trùng và bền vững."
      },
      {
        id: "mcq-11",
        q: "Trong các loại phân bón sau, loại nào thuộc nhóm phân bón hoá học (vô cơ) đa lượng?",
        options: [
          "Phân đạm Urê, phân lân nung chảy, phân kali clorua và phân NPK",
          "Phân chuồng ủ hoai mục, phân xanh lá cây họ Đậu",
          "Phân trùn quế nguyên chất và phân rác hữu cơ compost",
          "Phân vi sinh vật cố định đạm sống tự do trong đất"
        ],
        answer: 0,
        explain: "Phân vô cơ đa lượng cung cấp 3 nguyên tố thiết yếu với số lượng lớn: Đạm (N), Lân (P), Kali (K)."
      },
      {
        id: "mcq-12",
        q: "Nguyên tắc '4 đúng' trong kỹ thuật sử dụng phân bón cho cây trồng bao gồm những yêu cầu nào?",
        options: [
          "Đúng loại phân, đúng liều lượng, đúng thời điểm, đúng phương pháp",
          "Đúng nhãn hiệu, đúng cửa hàng quen, đúng ngày âm lịch, đúng thời tiết nắng gắt",
          "Đúng kích thước hạt phân, đúng khối lượng bao bì, đúng giá thành, đúng màu sắc",
          "Đúng độ ẩm không khí, đúng độ tuổi người bón, đúng chiều gió, đúng vị trí lá non"
        ],
        answer: 0,
        explain: "Bón phân đúng khoa học phải tuân thủ nguyên tắc 4 đúng: Đúng loại - Đúng liều lượng - Đúng thời điểm cây cần - Đúng phương pháp bón."
      },
      {
        id: "mcq-13",
        q: "Vì sao người nông dân KHÔNG nên bón phân đạm Urê trên mặt đất vào những buổi trưa nắng gắt hoặc đất khô hạn?",
        options: [
          "Dưới tác động của nhiệt độ cao và enzym urease, đạm urê dễ bị phân hủy thành khí amoniac (NH₃) bay hơi thất thoát",
          "Phân urê sẽ ngay lập tức đông cứng lại thành khối đá granit gây vỡ rễ cây",
          "Làm cho rễ cây hấp thụ quá nhanh dẫn đến cây phát triển hoa khổng lồ bất thường",
          "Tạo ra chất phóng xạ làm tiêu diệt hoàn toàn các hạt mùn trong đất"
        ],
        answer: 0,
        explain: "Ở nhiệt độ cao và đất khô, CO(NH2)2 bị thủy phân nhanh thành NH3 bay hơi vào không khí, gây lãng phí từ 30-50% lượng phân bón."
      },
      {
        id: "mcq-14",
        q: "Vi sinh vật nào sau đây có khả năng sống cộng sinh trong nốt sần rễ cây họ Đậu để cố định nitơ từ không khí thành đạm cho cây?",
        options: [
          "Vi khuẩn Rhizobium",
          "Nấm mốc trắng Mucor mucedo",
          "Nấm men bia Saccharomyces cerevisiae",
          "Vi khuẩn gây bệnh than Bacillus anthracis"
        ],
        answer: 0,
        explain: "Vi khuẩn Rhizobium cộng sinh ở nốt sần rễ cây họ Đậu cố định khí N2 trơ thành dạng ion amoni (NH4+) mà cây trồng hấp thụ dễ dàng."
      },
      {
        id: "mcq-15",
        q: "Một giống cây trồng mới được công nhận là giống đạt chuẩn khi đáp ứng tốt các tiêu chí nào sau đây?",
        options: [
          "Cho năng suất cao, phẩm chất nông sản tốt, tính chống chịu sâu bệnh và điều kiện bất lợi cao, tính ổn định di truyền",
          "Chỉ cần có lá to và thân cây cao gấp đôi bình thường, không quan tâm đến năng suất củ quả",
          "Có giá bán giống cao nhất trên thị trường và bắt buộc phải nhập khẩu từ nước ngoài",
          "Tự động tiêu diệt toàn bộ thảm thực vật bản địa xung quanh khu vực trồng trọt"
        ],
        answer: 0,
        explain: "Tiêu chuẩn giống tốt: Năng suất vượt trội, chất lượng thương phẩm cao, chống chịu tốt với sâu bệnh/thời tiết và có tính đồng nhất, ổn định."
      },
      {
        id: "mcq-16",
        q: "Phương pháp nhân giống vô tính nào cho phép tạo ra hàng vạn cây con đồng đều về mặt di truyền, sạch virus và trong thời gian ngắn nhất?",
        options: [
          "Phương pháp nuôi cấy mô tế bào thực vật (In vitro)",
          "Phương pháp gieo hạt ngoài luống đất tự nhiên",
          "Phương pháp giâm cành bằng cát thô ngoài trời nắng",
          "Phương pháp chiết cành truyền thống dùng bầu đất bùn ao"
        ],
        answer: 0,
        explain: "Nuôi cấy mô in vitro ứng dụng tính toàn năng của tế bào thực vật, nhân nhanh giống sạch bệnh trong môi trường dinh dưỡng vô trùng với hệ số nhân giống cực cao."
      },
      {
        id: "mcq-17",
        q: "Khi thực hiện kỹ thuật ghép cành (ghép nêm) trên cây ăn quả thân gỗ, thao tác cốt lõi nào quyết định tỷ lệ sống của cành ghép?",
        options: [
          "Áp sát lớp tầng sinh mô (tượng tầng cambium) của cành ghép và gốc ghép thật khít nhau rồi quấn chặt bằng nilon tự hủy",
          "Gọt vỏ thật sâu chạm đến tận lõi gỗ đen bên trong thân cây",
          "Bôi thật nhiều dầu nhớt xe máy lên vết cắt để chống vi khuẩn",
          "Ngâm cành ghép vào nước sôi 100°C trước khi cắm vào vết chẻ của gốc ghép"
        ],
        answer: 0,
        explain: "Tầng sinh mô (tượng tầng) là lớp tế bào phân chia tích cực; khi tầng sinh mô của gốc và cành ghép áp sát nhau, các mạch dẫn mới liền sẹo và dẫn truyền nhựa sống nuôi cành."
      },
      {
        id: "mcq-18",
        q: "Sâu hại cây trồng gây ra tác hại chủ yếu nào sau đây?",
        options: [
          "Cắn phá các bộ phận rễ, thân, lá, hoa, quả làm suy giảm khả năng quang hợp và năng suất cây trồng",
          "Cung cấp thêm lượng đạm dồi dào trực tiếp vào lá giúp cây tăng trưởng nhanh",
          "Làm cho hoa nở sớm hơn và tăng tỷ lệ đậu quả ngọt trên cây ăn trái",
          "Hút hết toàn bộ chất độc hại ra khỏi đất trồng giúp đất màu mỡ hơn"
        ],
        answer: 0,
        explain: "Sâu cắn phá biểu bì lá, đục thân cành hoặc chích hút nhựa làm cây còi cọc, héo rũ, mở đường cho nấm và vi khuẩn xâm nhập gây thối hỏng."
      },
      {
        id: "mcq-19",
        q: "Biện pháp phòng trừ dịch hại tổng hợp (IPM) ưu tiên nguyên tắc cốt lõi nào?",
        options: [
          "Phối hợp hài hòa các biện pháp canh tác, sinh học, cơ học; chỉ dùng thuốc hóa học khi mật độ sâu hại vượt ngưỡng gây hại kinh tế",
          "Phun thuốc hóa học đậm đặc định kỳ 3 ngày/lần bất kể trên đồng ruộng có sâu hay không",
          "Tiêu diệt hoàn toàn mọi loài côn trùng bao gồm cả ong thụ phấn, bọ rùa và kiến ba khoang",
          "Cấm tuyệt đối mọi hoạt động làm cỏ và xới xáo đất để bảo tồn sâu hại"
        ],
        answer: 0,
        explain: "IPM (Integrated Pest Management) lấy phòng ngừa sinh học và canh tác làm gốc, giữ mật độ dịch hại dưới ngưỡng gây hại kinh tế mà không hủy hoại cân bằng sinh thái."
      },
      {
        id: "mcq-20",
        q: "Chế phẩm sinh học chứa vi khuẩn Bacillus thuringiensis (Bt) có cơ chế tiêu diệt sâu hại như thế nào?",
        options: [
          "Tạo tinh thể protein độc hòa tan trong ruột kiềm của sâu non, làm thủng màng ruột khiến sâu ngừng ăn và chết sau 2-3 ngày",
          "Phát ra sóng âm thanh tần số cao làm điếc tai toàn bộ các loài bướm trưởng thành",
          "Làm tăng nhiệt độ cơ thể của sâu lên 90°C làm sâu bị bỏng chết tức thì",
          "Biến sâu hại thành sâu có ích chuyên đi nhổ cỏ dại cho cây trồng"
        ],
        answer: 0,
        explain: "Tinh thể độc tố delta-endotoxin của vi khuẩn Bt chỉ tan trong môi trường ruột có tính kiềm của ấu trùng bộ Cánh vảy (sâu tơ, sâu đục thân), rất an toàn cho người và thiên địch."
      },
      {
        id: "mcq-21",
        q: "Phương pháp bảo quản nông sản tươi (rau quả) bằng công nghệ khí quyển điều chỉnh (CA/MAP) dựa trên nguyên lý nào?",
        options: [
          "Chủ động giảm nồng độ khí Oxy (O₂) và tăng nồng độ khí Carbonic (CO₂) ở nhiệt độ mát để ức chế hô hấp của quả",
          "Bơm đầy 100% khí oxy nguyên chất vào kho bảo quản để quả chín rộ",
          "Phơi nắng thật giòn nông sản dưới nhiệt độ 50°C liên tục 10 ngày",
          "Ngâm nông sản chìm hoàn toàn trong dung dịch xà phòng thơm công nghiệp"
        ],
        answer: 0,
        explain: "Giảm O2 (xuống 2-5%) và tăng CO2 (3-5%) kết hợp bảo quản lạnh làm chậm tối đa quá trình hô hấp của quả, giảm sản sinh khí ethylene gây chín, giữ nông sản tươi lâu gấp 2-3 lần."
      },
      {
        id: "mcq-22",
        q: "Hệ thống tưới nhỏ giọt tự động trong nhà màng công nghệ cao mang lại lợi ích nổi bật nào?",
        options: [
          "Tiết kiệm nước tưới và phân bón (đến 30-50%), đưa dinh dưỡng đến chính xác vùng rễ hoạt động, hạn chế cỏ dại và ẩm mốc",
          "Làm ngập úng toàn bộ bề mặt luống cây để tiêu diệt sạch mọi loại rễ cỏ",
          "Làm tiêu tốn lượng nước gấp 10 lần so với phương pháp xả tràn truyền thống",
          "Chỉ hoạt động được khi có bão lớn và trời mưa to sấm sét liên tục"
        ],
        answer: 0,
        explain: "Tưới nhỏ giọt cung cấp nước và dinh dưỡng nhỏ giọt chậm rãi trực tiếp vào gốc cây, tránh bốc hơi, không làm bắn đất bùn lên lá non, giảm bệnh thối lá."
      },
      {
        id: "mcq-23",
        q: "Trong kỹ thuật trồng rau thủy canh hồi lưu (NFT), hai chỉ số quan trọng hàng đầu cần kiểm tra hàng ngày là:",
        options: [
          "Độ pH (độ chua/kiềm) và chỉ số EC (độ dẫn điện/nồng độ ion dinh dưỡng hòa tan)",
          "Độ ồn của máy bơm và màu sắc của ống nhựa dẫn nước",
          "Độ cứng của đá sỏi lót đường đi xung quanh nhà màng",
          "Khối lượng của tấm biển chỉ dẫn đặt ngoài cổng vườn"
        ],
        answer: 0,
        explain: "pH tối ưu (5.5 - 6.5) đảm bảo rễ hút trọn vẹn các nguyên tố khoáng; EC phản ánh chính xác tổng nồng độ muối dinh dưỡng hòa tan cho từng giai đoạn sinh trưởng."
      },
      {
        id: "mcq-24",
        q: "Hành động nào sau đây thể hiện việc bảo vệ môi trường và phát triển nông nghiệp tuần hoàn trong trồng trọt?",
        options: [
          "Tận dụng rơm rạ sau vụ gặt lúa để trồng nấm rơm, bã nấm sau đó ủ làm phân compost bón lại cho cây trồng",
          "Đốt toàn bộ rơm rạ ngay trên đồng ruộng vào mùa hanh khô tạo khói mù mịt bao phủ quốc lộ",
          "Vứt bừa bãi bao bì, chai lọ thuốc trừ sâu bằng thủy tinh xuống lòng kênh mương tưới tiêu",
          "Xả trực tiếp nước rửa bình phun thuốc diệt cỏ hóa học ra ao hồ nuôi cá của khu dân cư"
        ],
        answer: 0,
        explain: "Dùng rơm rạ trồng nấm rồi lấy bã nấm làm phân compost là mô hình nông nghiệp tuần hoàn kiểu mẫu: tận dụng triệt để phế phẩm, tạo giá trị kinh tế gia tăng và bảo vệ bầu không khí."
      }
    ],
    tfQuestions: [
      {
        id: "tf-01",
        context: "Tại vùng gò đồi huyện Quảng Hòa - Trùng Khánh (tỉnh Cao Bằng), một nhóm học sinh Trường THPT Phục Hòa tiến hành khảo sát thực địa một khu đất dốc 15 độ bị bỏ hoang. Kết quả phân tích mẫu đất cho thấy: độ pH = 4.3; tầng đất mặt mỏng chỉ dày 12 cm, lẫn nhiều sỏi đá; hàm lượng mùn hữu cơ < 1.0%; vào mùa mưa thường xuất hiện các rãnh xói mòn sâu cuốn trôi lớp đất màu mỡ.",
        statements: [
          {
            text: "Mẫu đất này thuộc loại đất chua nhiều và nghèo dinh dưỡng, rễ cây trồng khó phát triển do sự tích tụ của ion H⁺ và Al³⁺ tự do.",
            answer: true,
            explain: "Đúng. Đất có pH = 4.3 là đất chua nhiều (pH < 4.5), nồng độ ion H+ cao và ion Al3+ di động dễ gây độc rễ, hạn chế hấp thu lân và canxi."
          },
          {
            text: "Để khử chua nhanh chóng và nâng độ pH lên mức 5.8 - 6.2, giải pháp hoá học hữu hiệu nhất là bón vôi bột (CaO hoặc CaCO₃) kết hợp cày bừa xới xáo kỹ.",
            answer: true,
            explain: "Đúng. Vôi bột cung cấp Ca2+ trao đổi đẩy ion H+ và Al3+ ra dung dịch đất rồi trung hòa độ chua, kích thích hệ vi sinh vật có ích phát triển."
          },
          {
            text: "Trên sườn dốc 15 độ này, biện pháp tốt nhất là cày sâu theo chiều dọc từ trên đỉnh đồi xuống chân đồi trước mùa mưa bão lớn để thoát nước nhanh nhất.",
            answer: false,
            explain: "Sai. Cày xới theo chiều dốc sẽ tạo thành các rãnh dẫn dòng chảy mặt cực mạnh, làm xói mòn và cuốn trôi toàn bộ lớp đất mặt chỉ sau vài trận mưa rào."
          },
          {
            text: "Việc thiết lập các băng cây họ Đậu (cây cốt khí, muồng đen) theo đường đồng mức và tăng cường bón phân chuồng hoai mục sẽ giúp giữ đất, giữ nước và tái tạo tầng mùn phì nhiêu.",
            answer: true,
            explain: "Đúng. Băng cây cốt khí chắn dòng chảy mặt, rễ họ Đậu cố định đạm khí trời, cành lá tỉa định kỳ làm phân xanh phủ đất gia tăng tầng mùn hữu cơ."
          }
        ]
      },
      {
        id: "tf-02",
        context: "Bác An canh tác 2 sào rau bắp cải và su hào vụ đông. Nhận thấy cây rau sinh trưởng chậm, bác dự định bón thúc phân đạm và phân lân để cây nhanh lớn.",
        statements: [
          {
            text: "Phân đạm (N) có tác dụng kích thích cành lá phát triển xanh tốt, tăng cường quang hợp sinh khối, rất phù hợp cho giai đoạn bón thúc phát triển thân lá rau.",
            answer: true,
            explain: "Đúng. Đạm là thành phần cấu tạo axit amin, protein và diệp lục, quyết định sự phát triển thân, cành và tán lá non của cây rau."
          },
          {
            text: "Bác An nên rải đều phân đạm Urê lên mặt luống vào đúng giữa trưa nắng to rồi không cần tưới nước để nhiệt độ ánh nắng mặt trời kích hoạt phân tan nhanh.",
            answer: false,
            explain: "Sai. Bón urê giữa trưa nắng gắt trên mặt đất khô sẽ làm enzym urease phân giải đạm thành khí NH3 bốc hơi vào khí quyển, làm mất 40-50% đạm và gây cháy lá non."
          },
          {
            text: "Việc lạm dụng bón quá nhiều phân đạm hoá học sát ngày thu hoạch sẽ dẫn đến tích lũy hàm lượng nitrat (NO₃⁻) vượt ngưỡng an toàn trong lá rau, gây nguy hại cho sức khỏe người tiêu dùng.",
            answer: true,
            explain: "Đúng. Bón thừa đạm sát ngày thu hoạch làm cây không kịp chuyển hóa NO3- thành axit amin, dư lượng nitrat trong rau vượt ngưỡng cho phép gây ngộ độc đường ruột và nguy cơ ung thư."
          },
          {
            text: "Để nâng cao hiệu quả hấp thụ lân khó tan và cải tạo độ tơi xốp của đất trồng rau, bác An nên kết hợp bón phân vi sinh vật phân giải lân và phân hữu cơ vi sinh ủ hoai.",
            answer: true,
            explain: "Đúng. Vi sinh vật phân giải lân (như chủng Bacillus megaterium) tiết axit hữu cơ hòa tan các hợp chất lân khó tan (photphat sắt, nhôm) thành ion H2PO4- cây dễ hấp thụ."
          }
        ]
      },
      {
        id: "tf-03",
        context: "Trong phòng thực nghiệm Công nghệ giống cây trồng, giáo viên hướng dẫn các học sinh thực hiện các phương pháp nhân giống vô tính đối với các loài cây ăn quả và cây dược liệu quý.",
        statements: [
          {
            text: "Nhân giống vô tính dựa trên nguyên lý phân bào nguyên nhiễm (nguyên phân), giúp cây con giữ nguyên vẹn các đặc tính di truyền quý giá của cây mẹ ban đầu.",
            answer: true,
            explain: "Đúng. Nhân giống vô tính không trải qua thụ tinh phân ly kiểu gen, cây con thừa hưởng 100% bộ gen của cây mẹ."
          },
          {
            text: "Khi ghép cành (ghép nêm hoặc ghép mắt), chỉ cần buộc thật lỏng lẻo bằng dây chun và không cần để lớp tầng sinh mô của gốc ghép tiếp xúc với cành ghép.",
            answer: false,
            explain: "Sai. Bắt buộc phải áp thật khít lớp tầng sinh mô (tượng tầng) giữa cành ghép và gốc ghép rồi quấn chặt nilon kín để chống mất nước và liền mạch dẫn sống."
          },
          {
            text: "Nuôi cấy mô tế bào thực vật (In vitro) có thể lấy mẫu từ bất kỳ cơ quan nào còn sống (chồi đỉnh, mắt ngủ non) và đòi hỏi điều kiện phòng thí nghiệm hoàn toàn vô trùng.",
            answer: true,
            explain: "Đúng. Nhờ tính toàn năng của tế bào thực vật, tế bào phân sinh chồi đỉnh có thể tái sinh thành cây hoàn chỉnh trong môi trường dinh dưỡng thạch vô trùng."
          },
          {
            text: "Cây con nhân giống bằng phương pháp nuôi cấy mô in vitro thường bị thoái hóa giống, năng suất giảm sút và mang nhiều mầm mống virus từ thế hệ trước.",
            answer: false,
            explain: "Sai. Nuôi cấy mô từ mô phân sinh đỉnh có ưu điểm vượt trội là sạch hoàn toàn virus (vì mô đỉnh sinh trưởng chưa có mạch dẫn chứa virus), đồng đều và giữ nguyên năng suất cao."
          }
        ]
      },
      {
        id: "tf-04",
        context: "Hợp tác xã Nông nghiệp công nghệ cao Phục Hòa đầu tư khu nhà màng thông minh diện tích 1.000 m² để trồng dưa lưới và cà chua bi trên hệ thống tưới nhỏ giọt và máng giá thể xơ dừa.",
        statements: [
          {
            text: "Nhà màng có tác dụng chủ động ngăn chặn các loại côn trùng xâm nhập (bọ phấn trắng, bọ trĩ, sâu bướm), che mưa bão lớn và điều tiết tiểu khí hậu bên trong.",
            answer: true,
            explain: "Đúng. Lưới chắn côn trùng và mái màng polymer ngăn mưa dập nát lá non, giảm 80-90% nguy cơ bùng phát dịch hại từ bên ngoài."
          },
          {
            text: "Hệ thống cảm biến IoT trong nhà màng tự động đo nhiệt độ, độ ẩm không khí, độ ẩm giá thể và bức xạ mặt trời để kích hoạt quạt thông gió, lưới cắt nắng và bơm tưới.",
            answer: true,
            explain: "Đúng. IoT thu thập dữ liệu môi trường theo thời gian thực và điều khiển tự động các thiết bị ngoại vi, duy trì điều kiện tối ưu cho cây quang hợp."
          },
          {
            text: "Trong hệ thống tưới nhỏ giọt trên giá thể, nồng độ dung dịch dinh dưỡng (chỉ số EC) càng pha đậm đặc gấp 5-10 lần bình thường thì dưa lưới càng lớn nhanh và ngọt đậm đà.",
            answer: false,
            explain: "Sai. Chỉ số EC quá cao sẽ làm tăng áp suất thẩm thấu của dung dịch giá thể cao hơn áp suất rễ, khiến rễ cây bị 'cháy rễ', mất nước ngược ra ngoài và chết héo sinh lý."
          },
          {
            text: "Mụn xơ dừa tự nhiên bắt buộc phải trải qua quy trình xử lý rửa mặn và ngâm xả chất chát (tannin và lignin) trước khi dùng làm giá thể trồng dưa lưới.",
            answer: true,
            explain: "Đúng. Mụn dừa thô chứa nhiều muối (EC cao) và tannin/lignin kết tủa gây ức chế hô hấp của rễ cây non, cần xử lý bằng vôi và xả nước sạch nhiều lần."
          }
        ]
      }
    ],
    essayQuestions: [
      {
        id: "essay-01",
        q: "Tình huống Vận dụng 1 (Cải tạo đất dốc & dinh dưỡng): Một gia đình ở huyện Quảng Hòa (Cao Bằng) nhận khoán 1 ha đất đồi dốc 12 độ. Đất có tầng mặt mỏng (khoảng 15 cm), nhiều sỏi đá, kết quả đo độ pH = 4.2 (rất chua), lượng mùn nghèo kiệt (< 1.2%). Gia đình muốn cải tạo đất để trồng cây ăn quả lâu năm (như bưởi, cam) kết hợp cây họ Đậu. Em hãy đề xuất một quy trình kỹ thuật cải tạo đất toàn diện và giải thích cơ sở khoa học của từng biện pháp.",
        answer: "HƯỚNG DẪN CHẤM & ĐÁP ÁN CHI TIẾT (2.5 điểm):\n1. Biện pháp cơ học - chống xói mòn:\n- Thiết kế bậc thang hoặc cày bừa ngang theo đường đồng mức (không cày xuôi dốc). Cơ sở: Giảm tốc độ dòng chảy mặt mùa mưa, ngăn chặn xói mòn và rửa trôi đất màu mỡ.\n2. Biện pháp hoá học - khử chua:\n- Bón vôi bột (CaCO3 hoặc CaO) với lượng thích hợp (khoảng 1.0 - 1.5 tấn/ha), rải đều và xới trộn vào tầng mặt. Cơ sở: Ion Ca2+ trao đổi đẩy ion H+ và Al3+ tự do ra ngoài, nâng độ pH từ 4.2 lên 5.5 - 6.2 thích hợp cho rễ cây hấp thụ lân và khoáng.\n3. Biện pháp sinh học & hữu cơ - nâng cao độ phì nhiêu:\n- Trồng các băng cây phân xanh họ Đậu (cây cốt khí, muồng gai) theo đường đồng mức; định kỳ cắt tỉa thân lá phủ luống.\n- Bón lót lượng lớn phân chuồng ủ hoai mục (15-20 tấn/ha) kết hợp phân hữu cơ vi sinh. Cơ sở: Vi khuẩn Rhizobium ở rễ nốt sần cây họ Đậu cố định đạm tự do; mùn hữu cơ tạo cấu trúc viên hạt xốp, giữ ẩm, giữ phân bón và tăng dung tích hấp phụ cation của keo đất."
      },
      {
        id: "essay-02",
        q: "Tình huống Vận dụng 2 (Phòng trừ sinh học IPM): Vườn rau chuyên canh bắp cải và cải xanh của trường thực nghiệm gặp tình trạng sâu tơ kháng thuốc và bệnh lở cổ rễ do nấm phát triển mạnh sau chuỗi ngày mưa ẩm kéo dài. Là học sinh phụ trách kỹ thuật nông nghiệp xanh, em hãy xây dựng một kế hoạch quản lý dịch hại tổng hợp (IPM) KHÔNG dùng hóa chất độc hại để xử lý dứt điểm tình trạng trên.",
        answer: "HƯỚNG DẪN CHẤM & ĐÁP ÁN CHI TIẾT (2.5 điểm):\n1. Biện pháp cơ giới - vật lý:\n- Dọn sạch tàn dư lá bệnh đem đi ủ phân sinh học tiêu diệt mầm bệnh; khơi thông rãnh thoát nước luống rau để giảm ẩm độ đất quanh vùng cổ rễ.\n- Đặt bẫy bả chua ngọt hoặc bẫy đèn vào ban đêm để dẫn dụ và tiêu diệt ngài (bướm) của sâu tơ.\n2. Biện pháp sinh học phòng trừ sâu tơ:\n- Phun chế phẩm sinh học vi khuẩn Bacillus thuringiensis (Bt) hoặc nấm ký sinh sâu (Metarhizium/nấm xanh, Beauveria/nấm trắng) vào chiều mát. Cơ sở: Độc tố vi khuẩn Bt phá hủy màng ruột sâu non mà an toàn tuyệt đối cho người và thiên địch bọ rùa.\n3. Biện pháp sinh học trừ bệnh lở cổ rễ:\n- Tưới gốc chế phẩm nấm đối kháng Trichoderma spp. kết hợp phân trùn quế/hữu cơ hoai. Cơ sở: Nấm Trichoderma tiết enzym cellulase phân hủy vách tế bào nấm hại (Rhizoctonia solani), cạnh tranh dinh dưỡng và kích kháng miễn dịch tự nhiên của rễ rau.\n4. Kế hoạch luân canh dài hạn:\n- Vụ sau bắt buộc luân canh với cây khác họ (như ngô ngọt, hành tỏi, đậu cô ve) để cắt đứt nguồn thức ăn và chu kỳ sinh sản của sâu tơ."
      },
      {
        id: "essay-03",
        q: "Tình huống Vận dụng 3 (Nhân giống cây ăn quả đặc sản): Để mở rộng diện tích trồng bưởi đặc sản thơm ngon của địa phương, chủ vườn đang phân vân giữa hai phương pháp nhân giống vô tính: Chiết cành và Ghép nêm cành trên gốc bưởi chua bản địa gieo từ hạt. Em hãy phân tích so sánh ưu - nhược điểm của hai phương pháp trên và đưa ra lời khuyên khoa học cho nhà vườn.",
        answer: "HƯỚNG DẪN CHẤM & ĐÁP ÁN CHI TIẾT (2.5 điểm):\n1. So sánh phương pháp Chiết cành:\n- Ưu điểm: Cây giữ nguyên phẩm chất cây mẹ, nhanh cho quả (sau 2-3 năm), kỹ thuật đơn giản dễ làm.\n- Nhược điểm: Chỉ có rễ chùm (không có rễ cọc đâm sâu), khả năng chống bão gió và chịu hạn trên đất đồi kém; tuổi thọ cây ngắn hơn (10-15 năm); hệ số nhân giống thấp, dễ làm tổn hại tán cây mẹ.\n2. So sánh phương pháp Ghép nêm trên gốc gieo hạt:\n- Ưu điểm: Vừa giữ được phẩm chất ngon của giống đầu dòng (cành ghép), vừa có bộ rễ cọc khỏe mạnh ăn sâu từ gốc bưởi chua bản địa gieo hạt -> Cực kỳ chịu hạn, chịu úng, bám đất vững chống đổ ngã mùa bão trên đất dốc; tuổi thọ cây kéo dài hàng chục năm; hệ số nhân giống rất cao (1 cây mẹ cung cấp hàng trăm mắt ghép).\n- Nhược điểm: Đòi hỏi tay nghề kỹ thuật gọt nêm áp khít tầng sinh mô và khử trùng dụng cụ cao hơn chiết cành.\n3. Lời khuyên cho nhà vườn:\n- Đối với địa hình gò đồi Cao Bằng và định hướng canh tác lâu năm quy mô lớn, nhà vườn NÊN CHỌN phương pháp GHÉP NÊM trên gốc bưởi hạt bản địa để đảm bảo vườn bưởi sinh trưởng bền vững, rễ đâm sâu hút khoáng chất và chống chịu sâu bệnh tốt nhất."
      },
      {
        id: "essay-04",
        q: "Tình huống Vận dụng 4 (Trồng trọt công nghệ cao Thủy canh): Một trường THPT dự kiến lắp đặt mô hình giàn thủy canh hồi lưu màng mỏng dinh dưỡng (NFT) dài 15m để trồng rau xà lách sạch phục vụ câu lạc bộ STEM nông nghiệp. Hãy chỉ rõ:\n1. Các bộ phận cấu thành chính của hệ thống NFT.\n2. Kỹ thuật quản lý và điều chỉnh chỉ số pH (5.8 - 6.5) và EC (1.2 - 1.6 mS/cm) trong bể chứa dinh dưỡng.\n3. Giải pháp kỹ thuật xử lý để rễ rau không bị chết khô khi gặp sự cố mất điện kéo dài hơn 6 tiếng vào mùa hè nắng nóng.",
        answer: "HƯỚNG DẪN CHẤM & ĐÁP ÁN CHI TIẾT (2.5 điểm):\n1. Các bộ phận chính của hệ thống NFT:\n- Bể chứa dung dịch dinh dưỡng (bồn kín tránh rêu tảo).\n- Máy bơm chìm hẹn giờ (timer) và hệ thống ống cấp dinh dưỡng lên đầu máng.\n- Các máng trồng bằng nhựa uPVC có độ dốc 1-2% để dòng màng mỏng dinh dưỡng chảy qua rễ rồi hồi lưu về bể.\n- Rọ nhựa chứa giá thể trơ (mút xốp hoặc xơ dừa) cố định cây giống.\n2. Kỹ thuật quản lý chỉ số pH và EC:\n- Đo hàng ngày bằng bút đo điện tử:\n  + Nếu pH < 5.8 (chua): Thêm từ từ dung dịch kiềm loãng KOH hoặc K2CO3 (vừa nâng pH vừa bổ sung Kali).\n  + Nếu pH > 6.5 (kiềm): Thêm từng giọt dung dịch axit nitric (HNO3) hoặc axit photphoric (H3PO4) loãng khuấy đều.\n  + Nếu EC < 1.2 mS/cm (nhạt): Bổ sung thêm dung dịch mẹ A và B theo tỷ lệ 1:1.\n  + Nếu EC > 1.6 mS/cm (đậm đặc do bốc hơi nước): Châm thêm nước sạch vào bể để hạ nồng độ về ngưỡng an toàn.\n3. Giải pháp khi cúp điện kéo dài > 6 tiếng:\n- Lắp đặt van xả chặn đáy có gờ cao 1-1.5 cm ở cuối mỗi máng trồng để giữ lại một lớp dung dịch mỏng duy trì độ ẩm cho chóp rễ ngay cả khi bơm ngừng chạy.\n- Che lưới đen giảm nhiệt 70% trên nóc giàn thủy canh để hạn chế bốc thoát hơi nước của lá.\n- Dùng bình ắc quy dự phòng 12V cho máy bơm mini luân phiên 15 phút tưới một lần, hoặc thủ công múc dung dịch từ bồn dội nhẹ đầu các máng tưới giữ ẩm."
      }
    ]
  }
];

export default MOCK_EXAMS;
