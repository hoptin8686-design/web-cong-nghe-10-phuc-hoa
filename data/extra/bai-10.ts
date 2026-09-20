import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 10
export const EXTRA_BAI_10: LessonExtra = {
  tf: [
    {
        "id": "b10-tf1",
        "context": "Nhận biết phân bón bằng phương pháp cảm quan bên ngoài:",
        "statements": [
            {
                "text": "Phân đạm urê thường có dạng hạt tròn nhỏ mịn màu trắng trong hoặc trắng ngà.",
                "answer": true,
                "explain": "Đúng. Đây là hình thái cảm quan phổ biến nhất của urê thương phẩm."
            },
            {
                "text": "Phân kali clorua thường có màu đỏ hồng hoặc màu muối ớt dạng tinh thể.",
                "answer": true,
                "explain": "Đúng. Màu đỏ gạch do chứa lẫn một lượng nhỏ khoáng oxit sắt."
            },
            {
                "text": "Phân lân nung chảy và supephotphat đều có màu trắng tinh khiết như hạt đường.",
                "answer": false,
                "explain": "Sai. Phân lân có màu xám tro hoặc xám xi măng dạng bột hoặc hạt thô."
            },
            {
                "text": "Phân hữu cơ hoai mục thường có màu nâu sẫm hoặc đen, tơi xốp và không có mùi thối khó chịu.",
                "answer": true,
                "explain": "Đúng. Quá trình ủ hoai chuyển hóa mùn đen giàu dinh dưỡng và khử sạch mùi hôi."
            }
        ]
    },
    {
        "id": "b10-tf2",
        "context": "Thử nghiệm độ tan trong nước cất để phân biệt các loại phân:",
        "statements": [
            {
                "text": "Phân đạm urê tan rất nhanh và hoàn toàn trong nước, làm nhiệt độ nước giảm mát lạnh.",
                "answer": true,
                "explain": "Đúng. Quá trình hòa tan urê là phản ứng thu nhiệt mạnh."
            },
            {
                "text": "Phân lân nung chảy tan hoàn toàn 100% trong nước tạo dung dịch trong suốt.",
                "answer": false,
                "explain": "Sai. Lân nung chảy không tan trong nước cất thông thường, chỉ tan trong axit yếu của rễ cây."
            },
            {
                "text": "Supephotphat đơn khi khuấy vào nước sẽ tan một phần và để lại cặn không tan.",
                "answer": true,
                "explain": "Đúng. Cặn không tan chính là thạch cao CaSO4 có lẫn trong supe lân đơn."
            },
            {
                "text": "Phân kali clorua tan nhanh trong nước và không làm đổi màu giấy quỳ tím.",
                "answer": true,
                "explain": "Đúng. KCl là muối trung tính của axit mạnh và bazơ mạnh (pH xấp xỉ 7)."
            }
        ]
    },
    {
        "id": "b10-tf3",
        "context": "Phản ứng hóa học và thử nhiệt nhận biết phân đạm, phân lân:",
        "statements": [
            {
                "text": "Cho dung dịch kiềm vào phân đạm amoni sẽ sinh ra khí amoniac (NH3) có mùi khai đặc trưng.",
                "answer": true,
                "explain": "Đúng. Phản ứng: NH4+ + OH- -> NH3 (mùi khai) + H2O."
            },
            {
                "text": "Khí amoniac bay ra làm giấy quỳ tím ẩm chuyển sang màu xanh lam.",
                "answer": true,
                "explain": "Đúng. Amoniac tan trong nước tạo môi trường kiềm bazơ yếu."
            },
            {
                "text": "Đun nóng phân urê trên thìa sắt, phân sẽ chảy lỏng, bay hơi hết và không để lại cặn.",
                "answer": true,
                "explain": "Đúng. Urê bị nhiệt phân hủy thành các chất khí bay đi hoàn toàn."
            },
            {
                "text": "Dùng lửa thử phân lân nung chảy sẽ làm viên phân tan chảy thành nước đường.",
                "answer": false,
                "explain": "Sai. Phân lân vô cơ chịu nhiệt độ cực cao, không bị tan chảy trên ngọn lửa đèn cồn."
            }
        ]
    },
    {
        "id": "b10-tf4",
        "context": "Kỹ năng an toàn và thu dọn hiện trường sau giờ thực hành:",
        "statements": [
            {
                "text": "Tắt đèn cồn an toàn bằng cách đậy nắp chụp từ cạnh bên vào tim đèn cồn.",
                "answer": true,
                "explain": "Đúng. Ngắt nguồn cấp dưỡng khí oxy để dập lửa ngay tức thì."
            },
            {
                "text": "Được phép dùng miệng thổi thật mạnh vào bấc đèn cồn để tắt ngọn lửa.",
                "answer": false,
                "explain": "Sai. Tuyệt đối không thổi bằng miệng vì ngọn lửa có thể bùng ngược gây bỏng mặt."
            },
            {
                "text": "Hóa chất thừa và cặn thí nghiệm sau khi làm xong phải được gom vào xô thu gom chất thải quy định.",
                "answer": true,
                "explain": "Đúng. Đảm bảo an toàn hóa chất trường học và chống ô nhiễm nguồn nước."
            },
            {
                "text": "Cần rửa sạch các dụng cụ thủy tinh (ống nghiệm, đũa thủy tinh) bằng nước sạch và úp lên giá cho ráo.",
                "answer": true,
                "explain": "Đúng. Bảo quản dụng cụ sẵn sàng cho các nhóm thực hành tiếp theo."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b10-sa1",
        "q": "Chất khí không màu có mùi khai nồng đặc trưng bay ra khi nhỏ dung dịch nước vôi tôi vào phân đạm amoni là khí gì?",
        "unit": "Tên chất khí",
        "correctAnswers": [
            "Amoniac",
            "amoniac",
            "Khí amoniac",
            "NH3",
            "nh3"
        ],
        "explain": "Ion amoni NH4+ tác dụng với kiềm tạo ra khí amoniac NH3 có mùi khai nồng nặc."
    },
    {
        "id": "b10-sa2",
        "q": "Màu sắc cảm quan đặc trưng của các hạt tinh thể phân Kali clorua thương phẩm thường thấy trên thị trường nông nghiệp là màu gì?",
        "unit": "Màu sắc",
        "correctAnswers": [
            "Đỏ",
            "đỏ",
            "Màu đỏ",
            "Đỏ hồng",
            "đỏ hồng",
            "Muối ớt",
            "màu muối ớt"
        ],
        "explain": "Phân kali clorua thường có màu đỏ gạch hoặc màu muối ớt do chứa lẫn một lượng nhỏ khoáng oxit sắt."
    },
    {
        "id": "b10-sa3",
        "q": "Khi hòa tan phân đạm Urê vào cốc nước cất, sờ tay vào thành cốc thấy có hiện tượng nhiệt độ thay đổi như thế nào?",
        "unit": "Hiện tượng nhiệt",
        "correctAnswers": [
            "Mát lạnh",
            "mát lạnh",
            "Lạnh",
            "lạnh",
            "Lạnh đi",
            "giảm nhiệt độ"
        ],
        "explain": "Quá trình hòa tan urê trong nước là phản ứng thu nhiệt mạnh mẽ, làm nước hạ nhiệt độ rõ rệt."
    },
    {
        "id": "b10-sa4",
        "q": "Thao tác an toàn chuẩn xác để dập tắt ngọn lửa của đèn cồn trong phòng thực hành là dùng vật gì đậy lại?",
        "unit": "Tên vật dụng",
        "correctAnswers": [
            "Nắp chụp",
            "nắp chụp",
            "Nắp đèn cồn",
            "nắp đèn cồn",
            "Nắp đậy",
            "nắp"
        ],
        "explain": "Dùng nắp chụp đậy kín tim đèn cồn để cách ly oxy, ngọn lửa sẽ tắt an toàn ngay lập tức."
    }
  ],
  essay: [
    {
        "id": "bai-10-essay1",
        "q": "Trình bày các bước thực hiện để phân biệt 3 mẫu phân bón hóa học không nhãn: Phân đạm Urê, phân Kali clorua và phân Supephotphat.",
        "answer": "1. Bước 1: Quan sát cảm quan bên ngoài:\n- Mẫu có màu xám tro, dạng bột hoặc hạt mịn -> Đó là Supephotphat.\n- Hai mẫu còn lại: Urê có màu trắng trong/trắng đục, Kali clorua có màu đỏ hồng (hoặc dạng tinh thể màu muối ớt).\n2. Bước 2: Thử độ tan trong nước cất:\n- Cho từng mẫu vào cốc nước: Urê và Kali clorua tan hoàn toàn; cốc đựng Urê khi sờ vào thành cốc thấy mát lạnh rõ rệt.\n- Supephotphat chỉ tan một phần và để lại cặn lắng ở đáy cốc.\n3. Bước 3: Thử nhiệt trên ngọn lửa đèn cồn:\n- Đun nóng mẫu Urê: Chảy lỏng rồi bay hơi hết sinh mùi khai amoniac, không để lại cặn.\n- Mẫu Kali clorua: Không bị bay hơi, ngọn lửa nhuốm màu tím nhạt đặc trưng của ion K+."
    },
    {
        "id": "bai-10-essay2",
        "q": "Nêu các quy tắc an toàn quan trọng khi thực hành thử nhiệt phân bón bằng ngọn lửa đèn cồn trong phòng học bộ môn.",
        "answer": "1. Dùng que diêm hoặc bật lửa để mồi đèn cồn; tuyệt đối không nghiêng đèn cồn này để lấy lửa từ đèn cồn khác vì dễ tràn cồn gây cháy.\n2. Kẹp ống nghiệm ở vị trí 1/3 từ miệng ống xuống bằng kẹp gỗ chắc chắn.\n3. Hướng miệng ống nghiệm về phía không có người để tránh hóa chất khi sôi trào bắn vào mặt.\n4. Làm nóng đều toàn bộ đáy ống nghiệm trước khi hơ tập trung vào vị trí có hóa chất để tránh nứt vỡ thủy tinh đột ngột.\n5. Khi tắt đèn cồn, dùng nắp chụp đậy từ cạnh bên vào; tuyệt đối không dùng miệng thổi ngọn lửa."
    }
  ]
};

export default EXTRA_BAI_10;
