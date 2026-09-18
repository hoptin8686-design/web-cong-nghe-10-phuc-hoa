import type { Question } from "@/lib/types";

export interface MockExam {
  id: string;
  title: string;
  subtitle: string;
  durationMinutes: number;
  questions: Question[];
}

export const MOCK_EXAMS: MockExam[] = [
  {
    id: "de-giua-ki-1",
    title: "Đề ôn tập Giữa Học kì I — Công nghệ 10",
    subtitle: "Kiểm tra kiến thức Chương I (Giới thiệu chung về trồng trọt) và Chương II (Đất trồng)",
    durationMinutes: 45,
    questions: [
      {
        id: "gk1-01",
        q: "Vai trò cơ bản hàng đầu của ngành trồng trọt đối với đời sống con người là:",
        options: [
          "Cung cấp lương thực, thực phẩm thiết yếu hàng ngày",
          "Khai thác khoáng sản kim loại màu",
          "Sản xuất vật liệu xây dựng bê tông cốt thép",
          "Lắp ráp thiết bị viễn thông điện tử"
        ],
        answer: 0,
        explain: "Trồng trọt sản xuất lúa, ngô, rau củ quả... cung cấp dinh dưỡng, calo nuôi sống con người."
      },
      {
        id: "gk1-02",
        q: "Nhóm cây trồng nào sau đây cung cấp tinh bột chủ lực ở nước ta?",
        options: [
          "Lúa nước, ngô, sắn, khoai lang",
          "Cà phê, chè, hồ tiêu, cao su",
          "Xoài, cam, quýt, bưởi",
          "Rau muống, su hào, súp lơ"
        ],
        answer: 0,
        explain: "Lúa, ngô, sắn, khoai là nhóm cây lương thực giàu tinh bột."
      },
      {
        id: "gk1-03",
        q: "Thành phần cơ giới của đất được quyết định bởi tỷ lệ của các hạt nào?",
        options: [
          "Hạt cát, hạt limon (bụi) và hạt sét",
          "Hạt sỏi, hạt sành và hạt mùn",
          "Hạt muối khoáng, hạt vôi và hạt đạm",
          "Hạt vi sinh vật, hạt nước và hạt không khí"
        ],
        answer: 0,
        explain: "Thành phần cơ giới của đất chia theo tỷ lệ hạt cát (2 - 0.05 mm), limon (0.05 - 0.002 mm) và sét (< 0.002 mm)."
      },
      {
        id: "gk1-04",
        q: "Để khử chua cho đất có độ pH < 5.0, biện pháp hoá học hiệu quả nhất là:",
        options: [
          "Bón vôi bột (CaO, CaCO3)",
          "Bón thật nhiều phân đạm hóa học chua sinh lý",
          "Bón axit sunfuric loãng",
          "Tưới thật nhiều nước mặn"
        ],
        answer: 0,
        explain: "Vôi có tính kiềm, cung cấp ion Ca2+ đẩy ion H+ và Al3+ ra khỏi keo đất, trung hòa độ chua."
      },
      {
        id: "gk1-05",
        q: "Giá thể nào sau đây là giá thể hữu cơ có nguồn gốc từ tự nhiên?",
        options: [
          "Mụn xơ dừa đã qua xử lý tannin, than bùn",
          "Đá trân châu Perlite nhân tạo",
          "Bông khoáng Rockwool",
          "Gốm xốp Keramsit nung nhiệt độ cao"
        ],
        answer: 0,
        explain: "Mụn dừa, than bùn, mùn cưa, vỏ trấu là các giá thể hữu cơ tự nhiên."
      },
      {
        id: "gk1-06",
        q: "Độ phì nhiêu của đất là gì?",
        options: [
          "Khả năng cung cấp đủ nước, oxy, chất dinh dưỡng cho cây sinh trưởng và đạt năng suất cao",
          "Độ cứng rắn và chứa nhiều sỏi đá của tầng mặt đất",
          "Hàm lượng nước tối đa có thể giữ lại làm ngập úng đất",
          "Màu sắc đen tuyền do chứa nhiều than đá"
        ],
        answer: 0,
        explain: "Độ phì nhiêu là khả năng tổng hợp của đất cung cấp đồng thời nước, dinh dưỡng, không khí cho cây."
      },
      {
        id: "gk1-07",
        q: "Biện pháp canh tác nào hiệu quả nhất để chống xói mòn trên đất dốc ở vùng đồi núi?",
        options: [
          "Làm ruộng bậc thang, trồng băng cây chắn xói mòn, nông lâm kết hợp",
          "Chặt phá rừng phòng hộ để lấy đất trồng cây hàng năm",
          "Cày xới sâu theo chiều dốc của sườn đồi",
          "Đốt nương làm rẫy liên tục qua nhiều vụ"
        ],
        answer: 0,
        explain: "Ruộng bậc thang và băng cây cốt khí giúp giảm tốc độ dòng chảy mặt, giữ lại đất màu."
      },
      {
        id: "gk1-08",
        q: "Chỉ số EC trong dung dịch đất phản ánh đặc tính nào của đất?",
        options: [
          "Độ dẫn điện, liên quan trực tiếp đến tổng nồng độ muối khoáng hòa tan (độ mặn)",
          "Độ chua hay kiềm của đất",
          "Tỷ lệ hạt mùn trong đất",
          "Khả năng giữ nước của đất cát"
        ],
        answer: 0,
        explain: "EC (Electrical Conductivity) đo độ dẫn điện của dung dịch đất, phản ánh nồng độ ion muối hòa tan."
      }
    ]
  },
  {
    id: "de-cuoi-ki-1",
    title: "Đề kiểm tra Học kì I — Công nghệ 10",
    subtitle: "Tổng hợp kiến thức từ Chương I đến Chương IV (Đất, Phân bón và Giống cây trồng)",
    durationMinutes: 45,
    questions: [
      {
        id: "ck1-01",
        q: "Phân bón NPK thuộc nhóm phân bón nào sau đây?",
        options: [
          "Phân hoá học (vô cơ) hỗn hợp đa lượng",
          "Phân hữu cơ truyền thống",
          "Phân vi sinh vật phân giải lân",
          "Phân vi lượng đơn chất"
        ],
        answer: 0,
        explain: "Phân NPK là phân hóa học hỗn hợp chứa 3 nguyên tố đa lượng Đạm (N), Lân (P), Kali (K)."
      },
      {
        id: "ck1-02",
        q: "Nguyên tắc '4 đúng' trong việc bón phân cho cây trồng bao gồm:",
        options: [
          "Đúng loại, đúng liều lượng, đúng thời điểm, đúng phương pháp",
          "Đúng giống, đúng đất, đúng giá, đúng cửa hàng",
          "Đúng vụ, đúng mùa, đúng ngày, đúng giờ",
          "Đúng màu, đúng mùi, đúng vị, đúng bao bì"
        ],
        answer: 0,
        explain: "Nguyên tắc bón phân khoa học: Đúng loại phân - Đúng liều lượng - Đúng thời điểm cây cần - Đúng phương pháp bón."
      },
      {
        id: "ck1-03",
        q: "Vi sinh vật nào sau đây có khả năng sống cộng sinh với rễ cây họ Đậu để cố định đạm tự do từ không khí?",
        options: [
          "Vi khuẩn Rhizobium (nốt sần rễ đậu)",
          "Nấm men rượu Saccharomyces",
          "Vi khuẩn gây bệnh than Bacillus anthracis",
          "Nấm mốc đen Aspergillus niger"
        ],
        answer: 0,
        explain: "Rhizobium cộng sinh nốt sần rễ cây họ Đậu chuyển hóa khí N2 trơ thành dạng đạm NH4+ cho cây sử dụng."
      },
      {
        id: "ck1-04",
        q: "Ưu điểm nổi bật nhất của phương pháp nhân giống vô tính bằng nuôi cấy mô tế bào (In vitro) là:",
        options: [
          "Tạo ra số lượng lớn cây con đồng đều, sạch bệnh trong thời gian ngắn",
          "Không đòi hỏi trang thiết bị phòng thí nghiệm phức tạp",
          "Chi phí đầu tư ban đầu cực kỳ thấp và dễ làm ở ngoài trời",
          "Làm biến đổi hoàn toàn đặc tính di truyền của giống gốc"
        ],
        answer: 0,
        explain: "Nuôi cấy mô nhân nhanh cây giống vô tính hàng loạt, giữ nguyên đặc tính cây mẹ và sạch virus gây bệnh."
      },
      {
        id: "ck1-05",
        q: "Khi bón lót trước khi gieo trồng, người ta thường ưu tiên sử dụng nhóm phân nào?",
        options: [
          "Phân hữu cơ ủ hoai mục và phân lân khó tan",
          "Phân đạm Ure dễ tan, dễ bốc hơi",
          "Phân bón lá nồng độ cao",
          "Phân vi lượng phun trên diện tích lớn"
        ],
        answer: 0,
        explain: "Phân hữu cơ và lân phân giải chậm, cần thời gian hòa tan trong đất nên dùng bón lót trước khi trồng."
      },
      {
        id: "ck1-06",
        q: "Phương pháp ghép cây nào thường được áp dụng phổ biến trên các cây ăn quả thân gỗ (xoài, nhãn, bưởi)?",
        options: [
          "Ghép nêm đoạn cành và ghép mắt (chữ T hoặc cửa sổ)",
          "Gieo hạt ngoài nắng gắt",
          "Ngâm cành vào nước sôi",
          "Cắt đứt toàn bộ hệ thống rễ cọc"
        ],
        answer: 0,
        explain: "Ghép nêm và ghép mắt chữ T cho tỷ lệ tiếp hợp tầng sinh mô cao, cây nhanh phát triển."
      },
      {
        id: "ck1-07",
        q: "Mục đích của việc kiểm định và khảo nghiệm giống cây trồng mới trước khi đưa vào sản xuất đại trà là:",
        options: [
          "Đánh giá tính ổn định, năng suất, chất lượng và tính chống chịu sâu bệnh trong các điều kiện sinh thái khác nhau",
          "Tăng giá bán giống lên mức tối đa",
          "Làm chậm tiến độ đưa giống ra thị trường",
          "Loại bỏ hoàn toàn các giống bản địa truyền thống"
        ],
        answer: 0,
        explain: "Khảo nghiệm VCU (giá trị canh tác và sử dụng) và DUS (tính khác biệt, đồng nhất, ổn định) là bắt buộc theo Luật Trồng trọt."
      },
      {
        id: "ck1-08",
        q: "Tại sao không nên bón phân đạm Ure trên mặt đất vào những ngày nắng to gắt?",
        options: [
          "Đạm dễ bị phân huỷ thành khí amoniac (NH3) bay hơi gây thất thoát dinh dưỡng",
          "Làm đất bị đóng băng lạnh giá",
          "Làm rễ cây bị nghẹt khí CO2",
          "Làm tăng đột ngột độ phì sét của đất"
        ],
        answer: 0,
        explain: "Nhiệt độ cao và ánh nắng làm men urease phân giải đạm thành NH3 bay hơi, gây lãng phí và ô nhiễm không khí."
      }
    ]
  }
];

export default MOCK_EXAMS;
