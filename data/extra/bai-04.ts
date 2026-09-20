import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 4
export const EXTRA_BAI_04: LessonExtra = {
  tf: [
    {
        "id": "b4-tf1",
        "context": "Về kỹ thuật cải tạo và sử dụng đất chua, đất phèn:",
        "statements": [
            {
                "text": "Bón vôi bột (CaCO₃, CaO) là biện pháp hữu hiệu nhất để nâng độ pH cho đất chua.",
                "answer": true,
                "explain": "Đúng. Vôi trung hòa ion H+ và đẩy ion Al3+ tự do ra khỏi keo đất."
            },
            {
                "text": "Đối với đất phèn, cần cày xới thật sâu để đưa tầng sinh phèn lên mặt đất phơi nắng.",
                "answer": false,
                "explain": "Sai. Lật tầng sinh phèn lên mặt sẽ bị oxy hóa sinh axit sulfuric làm đất chua dữ dội."
            },
            {
                "text": "Bón phân lân nung chảy trên đất phèn giúp hạ phèn và cố định độc tố sắt nhôm.",
                "answer": true,
                "explain": "Đúng. Lân nung chảy có tính kiềm giúp kết tủa sắt nhôm giảm độc rễ."
            },
            {
                "text": "Nên bón vôi bột cùng một ngày với phân đạm Urê để tăng gấp đôi hiệu quả hấp thu.",
                "answer": false,
                "explain": "Sai. Vôi có tính kiềm làm đạm Urê phân giải thành khí NH3 bay hơi thất thoát."
            }
        ]
    },
    {
        "id": "b4-tf2",
        "context": "Kỹ thuật canh tác chống xói mòn trên đất đồi dốc tại Cao Bằng:",
        "statements": [
            {
                "text": "Làm ruộng bậc thang giúp triệt tiêu tốc độ dòng chảy mặt mùa mưa bão.",
                "answer": true,
                "explain": "Đúng. Mặt phẳng bậc thang giữ nước và lắng đọng phù sa màu mỡ."
            },
            {
                "text": "Cày xới sâu theo chiều dọc từ đỉnh đồi xuống chân đồi giúp đất thoát nước an toàn nhất.",
                "answer": false,
                "explain": "Sai. Cày xuôi dốc tạo rãnh thoát nước xiết làm xói lở toàn bộ lớp đất mặt."
            },
            {
                "text": "Trồng các băng cây cốt khí chắn ngang sườn dốc giúp giữ đất và bổ sung đạm hữu cơ.",
                "answer": true,
                "explain": "Đúng. Rễ cây họ Đậu bám giữ đất và nốt sần cố định đạm khí trời."
            },
            {
                "text": "Mô hình nông - lâm kết hợp là giải pháp tối ưu cho phát triển kinh tế đồi rừng bền vững.",
                "answer": true,
                "explain": "Đúng. Kết hợp bảo vệ rừng phòng hộ và phát triển cây ăn quả, chăn nuôi dưới tán."
            }
        ]
    },
    {
        "id": "b4-tf3",
        "context": "Về đặc điểm và biện pháp cải tạo đất mặn ven biển:",
        "statements": [
            {
                "text": "Đất mặn chứa hàm lượng muối hòa tan (NaCl, Na₂SO₄) vượt ngưỡng an toàn cho cây trồng.",
                "answer": true,
                "explain": "Đúng. Muối tan cao gây áp suất thẩm thấu cao làm rễ cây bị hạn sinh lý."
            },
            {
                "text": "Biện pháp thau chua rửa mặn bằng nước ngọt chỉ có tác dụng làm tăng thêm độ mặn của đất.",
                "answer": false,
                "explain": "Sai. Dẫn nước ngọt hòa tan muối rồi tháo ra mương tiêu giúp hạ nồng độ mặn của đất."
            },
            {
                "text": "Bón thạch cao (CaSO₄) giúp ion Ca²⁺ thay thế ion Na⁺ trên keo đất để rửa mặn dễ dàng.",
                "answer": true,
                "explain": "Đúng. Đây là biện pháp hóa học cải tạo đất mặn kiềm hiệu quả."
            },
            {
                "text": "Các giống cây chịu mặn tốt như đước, mắm, cói có thể trồng để khai thác kinh tế và bảo vệ đê biển.",
                "answer": true,
                "explain": "Đúng. Cây chịu mặn cố định phù sa và chắn sóng gió bão bảo vệ đất liền."
            }
        ]
    },
    {
        "id": "b4-tf4",
        "context": "Biện pháp phục hồi và bảo vệ đất xám bạc màu:",
        "statements": [
            {
                "text": "Đất xám bạc màu thường có thành phần cơ giới nhẹ, nghèo kiệt chất mùn và bị chua.",
                "answer": true,
                "explain": "Đúng. Đây là hậu quả của quá trình canh tác bóc lột và rửa trôi kéo dài."
            },
            {
                "text": "Tăng cường bón phân hữu cơ hoai mục giúp phục hồi kết cấu viên hạt và tăng dung tích hấp phụ.",
                "answer": true,
                "explain": "Đúng. Mùn hữu cơ là thành phần cốt lõi tái tạo sự sống và độ phì đất."
            },
            {
                "text": "Luân canh cây trồng xen cây họ Đậu giúp cắt đứt mầm mống sâu bệnh và làm giàu đất.",
                "answer": true,
                "explain": "Đúng. Cây họ Đậu bổ sung lượng đạm sinh học dồi dào cho vụ sau."
            },
            {
                "text": "Đốt sạch rơm rạ sau mỗi vụ gặt là cách tốt nhất để tăng lượng mùn hữu cơ cho đất bạc màu.",
                "answer": false,
                "explain": "Sai. Đốt rơm rạ thiêu rụi chất hữu cơ, tiêu diệt vi sinh vật đất và làm đất chai cứng."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b04-sa1",
        "q": "Để khử chua cho đất đồi dốc và trung hòa các ion H⁺, Al³⁺ tự do, người nông dân thường sử dụng loại vật liệu hoá học thông dụng và rẻ tiền nào?",
        "unit": "Tên chất",
        "correctAnswers": [
            "Vôi bột",
            "vôi",
            "Vôi",
            "CaCO3",
            "CaO",
            "Vôi nông nghiệp"
        ],
        "explain": "Vôi bột cung cấp ion Ca2+ đẩy ion H+ và Al3+ ra khỏi keo đất để trung hòa độ chua."
    },
    {
        "id": "b04-sa2",
        "q": "Để ngăn chặn hiện tượng xói mòn và rửa trôi đất màu trên các sườn đồi dốc ở vùng núi phía Bắc, người ta thường làm ruộng có hình dạng gì?",
        "unit": "Dạng ruộng",
        "correctAnswers": [
            "Ruộng bậc thang",
            "ruộng bậc thang",
            "Bậc thang"
        ],
        "explain": "Ruộng bậc thang cắt ngang dòng chảy mặt, giữ nước và đất màu phì nhiêu không bị cuốn trôi xuôi dốc."
    },
    {
        "id": "b04-sa3",
        "q": "Biện pháp thủy lợi dẫn nước ngọt vào ruộng để hòa tan muối khoáng rồi tiêu tháo ra biển gọi là biện pháp gì?",
        "unit": "Thuật ngữ",
        "correctAnswers": [
            "Thau chua rửa mặn",
            "rửa mặn",
            "Thau rửa mặn",
            "Rửa mặn thau chua"
        ],
        "explain": "Thau chua rửa mặn là biện pháp cốt lõi dùng dòng nước ngọt cuốn trôi muối natri ra khỏi đất."
    },
    {
        "id": "b04-sa4",
        "q": "Hợp chất muối canxi sunfat (CaSO₄.2H₂O) thường được dùng để bón cải tạo đất mặn kiềm có tên gọi thông thường là gì?",
        "unit": "Tên khoáng chất",
        "correctAnswers": [
            "Thạch cao",
            "thạch cao",
            "Khoáng thạch cao"
        ],
        "explain": "Thạch cao cung cấp Ca2+ đẩy Na+ ra khỏi keo đất để rửa trôi, cải thiện tính thấm nước của đất kiềm."
    }
  ],
  essay: [
    {
        "id": "bai-04-essay1",
        "q": "Trình bày nguyên tắc và kỹ thuật bón vôi cải tạo đất chua đạt hiệu quả cao.",
        "answer": "- Nguyên tắc: Đúng liều lượng (tùy độ pH và thành phần cơ giới đất; đất sét cần lượng vôi nhiều hơn đất cát), bón đều khắp mặt ruộng.\n- Kỹ thuật: Bón lót trước khi gieo trồng 10-15 ngày, rải đều trên mặt đất rồi cày bừa xới xáo kỹ để vôi tiếp xúc tối đa với đất; không bón chung cùng ngày với phân đạm hóa học để tránh bay hơi mất đạm."
    },
    {
        "id": "bai-04-essay2",
        "q": "Tại sao biện pháp làm ruộng bậc thang và trồng băng cây họ Đậu theo đường đồng mức lại đặc biệt quan trọng đối với nông nghiệp Cao Bằng?",
        "answer": "- Cao Bằng có địa hình đồi núi dốc, lượng mưa mùa hè tập trung lớn dễ gây xói lở, lũ quét cuốn trôi tầng đất mặt mỏng.\n- Ruộng bậc thang giúp chuyển sườn dốc thành các dải mặt bằng giữ nước canh tác lúa ngô.\n- Băng cây họ Đậu chắn tốc độ dòng chảy xói mòn, rễ cây cố định đạm từ khí trời làm giàu chất mùn và đạm tự nhiên cho đất canh tác bền vững."
    }
  ]
};

export default EXTRA_BAI_04;
