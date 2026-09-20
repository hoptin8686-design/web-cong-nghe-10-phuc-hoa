import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 11
export const EXTRA_BAI_11: LessonExtra = {
  tf: [
    {
        "id": "b11-tf1",
        "context": "Khái niệm và các tiêu chí công nhận một giống cây trồng mới:",
        "statements": [
            {
                "text": "Giống cây trồng là một quần thể cây trồng cùng loài, có các đặc điểm hình thái tương đối đồng nhất.",
                "answer": true,
                "explain": "Đúng. Đây là định nghĩa cốt lõi về giống cây trồng nông nghiệp."
            },
            {
                "text": "Khảo nghiệm DUS nhằm đánh giá tính khác biệt, tính đồng nhất và tính ổn định của giống.",
                "answer": true,
                "explain": "Đúng. DUS là chữ viết tắt của Distinctness, Uniformity, Stability."
            },
            {
                "text": "Mọi giống cây mới phát hiện ngoài tự nhiên đều được phép bán thương mại ngay không cần khảo nghiệm.",
                "answer": false,
                "explain": "Sai. Luật Trồng trọt bắt buộc phải qua khảo nghiệm DUS và VCU mới được lưu hành."
            },
            {
                "text": "Khảo nghiệm VCU nhằm kiểm tra giá trị canh tác và giá trị sử dụng của giống mới.",
                "answer": true,
                "explain": "Đúng. VCU xác định năng suất, chất lượng nông sản thực tế."
            }
        ]
    },
    {
        "id": "b11-tf2",
        "context": "Về giống lúa thuần và giống lai F1:",
        "statements": [
            {
                "text": "Giống thuần có cấu tạo đồng hợp tử, tự thụ phấn qua nhiều thế hệ tính trạng vẫn tương đối ổn định.",
                "answer": true,
                "explain": "Đúng. Nông dân có thể tự để giống lúa thuần gieo cấy cho vụ sau."
            },
            {
                "text": "Giống lai F1 có ưu thế lai vượt trội về năng suất và sức sống so với các dòng bố mẹ.",
                "answer": true,
                "explain": "Đúng. Ưu thế lai tạo sức bật sinh trưởng mạnh mẽ ở đời F1."
            },
            {
                "text": "Nông dân có thể lấy hạt ngô lai F1 thu hoạch ngoài đồng để làm giống gieo cấy tiếp vụ sau mà không giảm năng suất.",
                "answer": false,
                "explain": "Sai. Đời F2 bị phân ly tính trạng làm cây không đều, bắp nhỏ và năng suất sụt giảm nghiêm trọng."
            },
            {
                "text": "Hạt giống xác nhận là cấp hạt giống đạt chuẩn cung ứng cho nông dân sản xuất đại trà.",
                "answer": true,
                "explain": "Đúng. Được nhân ra từ hạt giống nguyên chủng theo tiêu chuẩn quốc gia."
            }
        ]
    },
    {
        "id": "b11-tf3",
        "context": "Vai trò của giống cây trồng trong sản xuất nông nghiệp hiện đại:",
        "statements": [
            {
                "text": "Sử dụng giống mới năng suất cao là giải pháp then chốt nâng cao sản lượng nông sản quốc gia.",
                "answer": true,
                "explain": "Đúng. Giống quyết định trần năng suất sinh học của cây trồng."
            },
            {
                "text": "Giống ngắn ngày giúp né tránh các hình thái thời tiết cực đoan như bão lũ, sương muối rét hại.",
                "answer": true,
                "explain": "Đúng. Rút ngắn chu kỳ sinh trưởng giúp bố trí mùa vụ linh hoạt."
            },
            {
                "text": "Các giống kháng sâu bệnh làm tăng lượng thuốc bảo vệ thực vật cần phun trên đồng ruộng.",
                "answer": false,
                "explain": "Sai. Giúp giảm thiểu đáng kể số lần phun thuốc hóa học."
            },
            {
                "text": "Giống cây trồng biến đổi gen (GMO) được tạo ra nhờ kỹ thuật chuyển gen mục tiêu từ loài khác.",
                "answer": true,
                "explain": "Đúng. Sử dụng công nghệ ADN tái tổ hợp hiện đại."
            }
        ]
    },
    {
        "id": "b11-tf4",
        "context": "Liên hệ phát triển giống cây trồng đặc sản tại Cao Bằng:",
        "statements": [
            {
                "text": "Nếp hương Bảo Lạc và gạo hạt tròn Trùng Khánh là những giống lúa đặc sản bản địa giá trị cao.",
                "answer": true,
                "explain": "Đúng. Đây là những nông sản đặc sản mang chỉ dẫn địa lý tự hào của Cao Bằng."
            },
            {
                "text": "Không cần thiết phải bảo tồn nguồn gen giống bản địa vì chúng luôn có năng suất thấp hơn giống ngoại nhập.",
                "answer": false,
                "explain": "Sai. Giống bản địa chứa nguồn gen quý về chất lượng thơm ngon và khả năng chống chịu sâu bệnh địa phương."
            },
            {
                "text": "Bao bì hạt giống lưu thông bắt buộc phải ghi rõ tỷ lệ nảy mầm và hạn sử dụng.",
                "answer": true,
                "explain": "Đúng. Đảm bảo quyền lợi và hiệu quả canh tác cho người nông dân."
            },
            {
                "text": "Chọn tạo giống chịu hạn và chịu rét giúp mở rộng diện tích trồng trọt trên các vùng núi đá cao.",
                "answer": true,
                "explain": "Đúng. Khắc phục bất lợi tự nhiên khắc nghiệt vùng cao."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b11-sa1",
        "q": "Tên viết tắt của khảo nghiệm bắt buộc đối với giống cây trồng mới nhằm đánh giá tính khác biệt, tính đồng nhất và tính ổn định là gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "DUS",
            "dus",
            "Khảo nghiệm DUS",
            "khảo nghiệm DUS"
        ],
        "explain": "DUS là chữ viết tắt tiếng Anh của Distinctness (Khác biệt), Uniformity (Đồng nhất), Stability (Ổn định)."
    },
    {
        "id": "b11-sa2",
        "q": "Cấp hạt giống có phẩm cấp cao nhất, độ thuần di truyền siêu sạch được duy trì và sản xuất từ hạt giống tác giả được gọi là hạt giống gì?",
        "unit": "Cấp giống",
        "correctAnswers": [
            "Siêu nguyên chủng",
            "siêu nguyên chủng",
            "Hạt siêu nguyên chủng",
            "hạt siêu nguyên chủng"
        ],
        "explain": "Hạt siêu nguyên chủng là nguồn giống khởi đầu để nhân ra hạt giống nguyên chủng."
    },
    {
        "id": "b11-sa3",
        "q": "Hiện tượng con lai ở thế hệ F1 có sức sống, tốc độ sinh trưởng và năng suất vượt trội hơn hẳn các dòng bố mẹ thuần được gọi là hiện tượng gì?",
        "unit": "Thuật ngữ di truyền",
        "correctAnswers": [
            "Ưu thế lai",
            "ưu thế lai",
            "Hiện tượng ưu thế lai"
        ],
        "explain": "Ưu thế lai (Heterosis) phát huy cao nhất ở thế hệ con lai F1 dị hợp tử tử."
    },
    {
        "id": "b11-sa4",
        "q": "Tên viết tắt của khảo nghiệm bắt buộc nhằm đánh giá giá trị canh tác và giá trị sử dụng của một giống cây trồng mới ngoài đồng ruộng là gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "VCU",
            "vcu",
            "Khảo nghiệm VCU",
            "khảo nghiệm VCU"
        ],
        "explain": "VCU là viết tắt của Value of Cultivation and Use (Giá trị canh tác và sử dụng)."
    }
  ],
  essay: [
    {
        "id": "bai-11-essay1",
        "q": "Phân tích 4 vai trò to lớn của giống cây trồng tốt đối với sản xuất nông nghiệp hiện đại.",
        "answer": "1. Tăng năng suất và nâng cao sản lượng nông sản: Giống tốt có tiềm năng di truyền cao, hấp thu dinh dưỡng tối ưu để cho năng suất vượt trội.\n2. Nâng cao chất lượng nông sản: Giống quyết định hàm lượng đường, protein, hương thơm, màu sắc, đáp ứng nhu cầu thị trường tiêu dùng và chế biến xuất khẩu.\n3. Tăng vụ và chuyển đổi cơ cấu cây trồng: Các giống ngắn ngày giúp bố trí thêm vụ gieo trồng trong năm, luân canh hợp lý và né tránh thiên tai (hạn hán, bão lũ, sương muối).\n4. Giảm chi phí sản xuất và bảo vệ môi trường: Các giống kháng sâu bệnh và chống chịu bất lợi (chịu phèn, mặn, hạn) giúp giảm bớt việc phun thuốc BVTV hóa học và mở rộng diện tích canh tác ra những vùng đất khó khăn."
    },
    {
        "id": "bai-11-essay2",
        "q": "Tại sao người nông dân không nên dùng hạt lúa hoặc ngô lai F1 thương phẩm để làm giống gieo cấy cho các vụ sau?",
        "answer": "- Cây lai F1 có kiểu gen dị hợp tử về hầu hết các cặp gen (ví dụ AaBbCc...). Ở thế hệ F1, các alen trội lấn át alen lặn nên biểu hiện ưu thế lai cao nhất (cây khỏe, bắp to, hạt đều, năng suất tối đa).\n- Nếu dùng hạt F1 này để gieo trồng thế hệ tiếp theo (F2), theo định luật di truyền Men-đen, quá trình thụ phấn sẽ làm phân ly tính trạng mạnh mẽ thành nhiều kiểu gen đồng hợp tử lặn có hại.\n- Hậu quả: Quần thể cây F2 sinh trưởng không đồng đều, cây cao cây thấp, tỷ lệ bắp lép cao, khả năng chống chịu sâu bệnh suy giảm nghiêm trọng và năng suất giảm từ 20-40% so với vụ trước.\n-> Do đó, mỗi vụ sản xuất nông dân bắt buộc phải mua hạt giống lai F1 mới do các công ty giống uy tín cung cấp."
    }
  ]
};

export default EXTRA_BAI_11;
