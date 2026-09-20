import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 14
export const EXTRA_BAI_14: LessonExtra = {
  tf: [
    {
        "id": "b14-tf1",
        "context": "Kỹ thuật thao tác trong phương pháp ghép nêm (ghép đoạn cành):",
        "statements": [
            {
                "text": "Cành ghép được vát hình chiếc nêm mỏng dần về phía gốc cành, mặt cắt phải phẳng nhẵn.",
                "answer": true,
                "explain": "Đúng. Mặt phẳng đều giúp diện tích tiếp xúc với gốc ghép đạt tối đa."
            },
            {
                "text": "Gốc ghép được chẻ dọc chính giữa một đường sâu bằng chiều dài vết vát của cành ghép.",
                "answer": true,
                "explain": "Đúng. Kích thước ăn khớp giúp cành ghép cắm sâu vững chắc."
            },
            {
                "text": "Nếu cành ghép nhỏ hơn gốc ghép, bắt buộc phải đặt cành ghép lơ lửng ở chính giữa khe chẻ.",
                "answer": false,
                "explain": "Sai. Phải kê cành lệch sang một bên để lớp vỏ cành ghép khớp với vỏ gốc ghép ít nhất một bên mép."
            },
            {
                "text": "Chụp túi nilon kín cành ghép sau khi buộc dây giúp chống mất nước và giữ ẩm cho chồi non.",
                "answer": true,
                "explain": "Đúng. Tạo buồng ẩm ngăn cành ghép khô kiệt trước khi liền sẹo."
            }
        ]
    },
    {
        "id": "b14-tf2",
        "context": "Kỹ thuật thao tác trong phương pháp ghép mắt chữ T:",
        "statements": [
            {
                "text": "Trên gốc ghép, dùng dao rạch một đường ngang và một đường dọc tạo thành hình chữ T.",
                "answer": true,
                "explain": "Đúng. Đây là thao tác mở vỏ đón mắt ghép."
            },
            {
                "text": "Mắt ghép lấy từ cành bánh tẻ mang mầm ngủ nách lá khỏe mạnh và một cuống lá ngắn.",
                "answer": true,
                "explain": "Đúng. Mẩu cuống lá làm tay cầm thao tác cài mắt vào khe rạch."
            },
            {
                "text": "Khi cài mắt ghép vào khe chữ T, cần cắm đầu mầm ngủ chúc ngược xuống đất.",
                "answer": false,
                "explain": "Sai. Bắt buộc phải hướng đầu mầm ngủ lên phía trên ngọn theo chiều sinh trưởng tự nhiên."
            },
            {
                "text": "Sau 10-15 ngày, khẽ chạm tay thấy cuống lá rụng và mắt mầm xanh tươi chứng tỏ mắt ghép đã sống.",
                "answer": true,
                "explain": "Đúng. Mối ghép đã hình thành tầng rời cuống lá và mô sẹo liền mạch."
            }
        ]
    },
    {
        "id": "b14-tf3",
        "context": "Kỹ năng an toàn và chăm sóc cây sau khi ghép:",
        "statements": [
            {
                "text": "Dao ghép rất sắc bén, khi gọt cành luôn đưa lưỡi dao hướng ra ngoài xa cơ thể.",
                "answer": true,
                "explain": "Đúng. Quy tắc an toàn tối quan trọng phòng tránh đứt tay."
            },
            {
                "text": "Quấn dây nilon theo chiều từ trên xuống dưới để nước mưa dễ dàng chảy vào làm ẩm mối ghép.",
                "answer": false,
                "explain": "Sai. Bắt buộc quấn từ dưới lên trên như ngói lợp để nước mưa trôi ra ngoài, chống thối rữa."
            },
            {
                "text": "Cần vặt tỉa thường xuyên các mầm dại mọc ra từ gốc ghép để tập trung dinh dưỡng cho chồi ghép.",
                "answer": true,
                "explain": "Đúng. Tránh để mầm dại lấn át và làm chết chồi ghép giống quý."
            },
            {
                "text": "Vườn ươm cây mới ghép cần che bớt 50% ánh nắng trực tiếp và tưới ẩm vừa phải.",
                "answer": true,
                "explain": "Đúng. Chống sốc nhiệt và tạo ẩm độ thích hợp cho mô sẹo phân chia."
            }
        ]
    },
    {
        "id": "b14-tf4",
        "context": "Ý nghĩa thực tiễn của kỹ thuật ghép cây tại huyện Quảng Hòa, Trùng Khánh (Cao Bằng):",
        "statements": [
            {
                "text": "Ghép cải tạo vườn tạp giúp thay thế các giống bưởi, mận chua kém chất lượng bằng giống đầu dòng đặc sản.",
                "answer": true,
                "explain": "Đúng. Ghép mắt bưởi ngọt hoặc mận ngon lên gốc cây sẵn có giúp thu hoạch nhanh chỉ sau 1-2 năm."
            },
            {
                "text": "Ghép cây ăn quả có thể thực hiện thành công vào những ngày rét đậm dưới 5 độ C có sương muối buốt giá.",
                "answer": false,
                "explain": "Sai. Trời quá lạnh tế bào ngừng phân chia, vết ghép không thể liền sẹo và cành ghép sẽ chết rét."
            },
            {
                "text": "Sử dụng gốc ghép địa phương khỏe mạnh giúp cây thích ứng tốt với chất đất đồi dốc và chống chịu khô hạn.",
                "answer": true,
                "explain": "Đúng. Tận dụng tối đa bộ rễ bản địa thích nghi thổ nhưỡng vùng cao."
            },
            {
                "text": "Thao tác ghép đòi hỏi khéo léo, nhanh gọn và giữ sạch vết cắt để nâng cao tỷ lệ sống trên 90%.",
                "answer": true,
                "explain": "Đúng. Nhanh gọn tránh làm thâm đen mặt cắt do oxy hóa nhựa cây."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b14-sa1",
        "q": "Kỹ thuật ghép cây mà ở đó người ta cắt vát gốc cành ghép thành hình chiếc nêm rồi cài vào vết chẻ của gốc ghép được gọi là phương pháp ghép gì?",
        "unit": "Tên phương pháp",
        "correctAnswers": [
            "Ghép nêm",
            "ghép nêm",
            "Ghép đoạn cành",
            "ghép đoạn cành"
        ],
        "explain": "Ghép nêm (ghép đoạn cành) là phương pháp ghép cành phổ biến bậc nhất trong sản xuất cây ăn quả."
    },
    {
        "id": "b14-sa2",
        "q": "Phương pháp ghép cây bằng cách rạch vỏ gốc ghép thành hình hai nét vuông góc giống một chữ cái trong bảng chữ cái Latinh được gọi là ghép mắt chữ gì?",
        "unit": "Chữ cái",
        "correctAnswers": [
            "T",
            "t",
            "Chữ T",
            "chữ T",
            "Ghép mắt chữ T"
        ],
        "explain": "Ghép mắt chữ T (T-budding) rạch đường ngang và đường dọc tạo khe chữ T đón mắt ghép hình khiên."
    },
    {
        "id": "b14-sa3",
        "q": "Hiện tượng tự nhiên xảy ra ở cuống lá của mắt ghép sau 10-15 ngày (khi khẽ chạm ngón tay vào) chứng tỏ mắt ghép đã tiếp hợp sống sót thành công là hiện tượng gì?",
        "unit": "Hiện tượng",
        "correctAnswers": [
            "Rụng",
            "rụng",
            "Rụng cuống lá",
            "rụng cuống",
            "rụng lá"
        ],
        "explain": "Cuống lá rụng khi chạm nhẹ là dấu hiệu tầng rời đã hình thành và mắt mầm đang sống xanh tươi."
    },
    {
        "id": "b14-sa4",
        "q": "Để nước mưa không ngấm vào kẽ mối ghép gây thối rữa, thao tác quấn dây ghép nilon bắt buộc phải quấn theo chiều từ hướng nào lên hướng nào?",
        "unit": "Chiều quấn",
        "correctAnswers": [
            "Từ dưới lên trên",
            "từ dưới lên",
            "Dưới lên trên",
            "dưới lên"
        ],
        "explain": "Quấn kiểu vảy cá lợp ngói từ dưới lên trên làm nước mưa trôi tuột ra ngoài, không thấm vào vết ghép."
    }
  ],
  essay: [
    {
        "id": "bai-14-essay1",
        "q": "Trình bày các bước thực hiện thao tác ghép nêm đoạn cành trên cây ăn quả trong giờ thực hành.",
        "answer": "1. Chuẩn bị gốc ghép: Dùng kéo/dao sắc cắt bằng thân gốc ghép cách mặt bầu 15-20 cm ở vị trí thân thẳng, vỏ nhẵn; dùng dao ghép chẻ một đường dọc chính giữa sâu khoảng 1.5 - 2 cm.\n2. Cắt cành ghép: Chọn đoạn cành bánh tẻ có 2-3 mầm ngủ. Dùng dao gọt vát hai bên gốc cành ghép thành hình chiếc nêm dài 1.5 - 2 cm, mặt vát phải phẳng nhẵn một nhát dứt khoát.\n3. Cài cành ghép vào gốc ghép: Cắm phần nêm của cành ghép vào khe chẻ của gốc ghép sao cho lớp tượng tầng (vỏ) của hai bên khớp khít vào nhau ở ít nhất một mép.\n4. Quấn dây cố định: Dùng dải màng nilon tự hủy quấn chặt từ dưới lên trên bao trùm toàn bộ mối ghép; chụp túi nilon nhỏ trùm kín cành ghép và buộc túm miệng túi để giữ ẩm, đặt cây vào vườn ươm râm mát."
    },
    {
        "id": "bai-14-essay2",
        "q": "Nêu 4 nguyên nhân chính dẫn đến việc ghép cây bị thất bại (cành ghép, mắt ghép bị chết khô hoặc thối nhũn).",
        "answer": "1. Mặt cắt không phẳng hoặc thao tác quá chậm làm mặt cắt bị oxy hóa thâm đen, dập nát tế bào mô sẹo.\n2. Tượng tầng (tầng sinh mô) của cành ghép và gốc ghép không áp khít vào nhau, khiến mạch dẫn không tiếp hợp truyền nhựa được.\n3. Buộc dây lỏng lẻo hoặc quấn sai chiều làm nước mưa ngấm vào kẽ ghép gây nhiễm khuẩn thối rữa mối ghép.\n4. Dao ghép hoặc dụng cụ không được khử trùng sạch sẽ mang theo nấm khuẩn, hoặc ghép vào thời điểm thời tiết quá khắc nghiệt (nắng gắt hoặc rét buốt)."
    }
  ]
};

export default EXTRA_BAI_14;
