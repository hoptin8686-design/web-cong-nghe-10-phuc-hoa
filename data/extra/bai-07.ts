import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 7
export const EXTRA_BAI_07: LessonExtra = {
  tf: [
    {
        "id": "b7-tf1",
        "context": "Về vai trò của các nguyên tố khoáng đa lượng N, P, K đối với cây trồng:",
        "statements": [
            {
                "text": "Đạm (N) kích thích sự phát triển của cành lá và tham gia cấu tạo protein, diệp lục.",
                "answer": true,
                "explain": "Đúng. Đạm là yếu tố then chốt tăng sinh khối xanh."
            },
            {
                "text": "Lân (P) có vai trò chủ yếu trong việc kích thích ra rễ và phân hóa mầm hoa.",
                "answer": true,
                "explain": "Đúng. Lân thúc đẩy phân chia tế bào rễ và hình thành cơ quan sinh sản."
            },
            {
                "text": "Kali (K) kích thích cây vươn cao vống, làm mềm thành tế bào cây trồng.",
                "answer": false,
                "explain": "Sai. Kali làm cứng cây, chống đổ ngã và tăng tích lũy tinh bột."
            },
            {
                "text": "Bón thừa đạm sẽ làm tăng nguy cơ bùng phát sâu bệnh hại và gây tích lũy nitrat độc hại trong rau.",
                "answer": true,
                "explain": "Đúng. Mô bào cây mềm tạo điều kiện cho nấm và côn trùng chích hút."
            }
        ]
    },
    {
        "id": "b7-tf2",
        "context": "Khi phân loại các nhóm phân bón nông nghiệp chính:",
        "statements": [
            {
                "text": "Phân đạm Urê và phân kali clorua là các loại phân bón hóa học đơn.",
                "answer": true,
                "explain": "Đúng. Mỗi loại chỉ chứa 1 yếu tố dinh dưỡng khoáng đa lượng chính."
            },
            {
                "text": "Phân hữu cơ chứa hàm lượng dinh dưỡng khoáng cao hơn nhiều so với phân hóa học.",
                "answer": false,
                "explain": "Sai. Phân hữu cơ có hàm lượng khoáng thấp hơn nhiều nhưng giàu mùn và đa dạng vi lượng."
            },
            {
                "text": "Phân lân nung chảy có tính kiềm nhẹ, thích hợp bón cho đất dốc bị chua phèn.",
                "answer": true,
                "explain": "Đúng. Nhờ chứa Ca và Mg kiềm tính giúp trung hòa độ chua của đất."
            },
            {
                "text": "Phân vi sinh vật chứa các chủng vi khuẩn hoặc nấm có ích còn sống.",
                "answer": true,
                "explain": "Đúng. Hiệu lực phân vi sinh dựa vào hoạt động sống của các chủng vi sinh vật."
            }
        ]
    },
    {
        "id": "b7-tf3",
        "context": "Triệu chứng thiếu hụt dinh dưỡng ở cây trồng:",
        "statements": [
            {
                "text": "Thiếu đạm (N) làm các lá già phía dưới chuyển sang màu vàng úa trước.",
                "answer": true,
                "explain": "Đúng. Cây chuyển đạm linh động từ lá già lên nuôi các lá non trên ngọn."
            },
            {
                "text": "Thiếu lân (P) làm phiến lá hoặc gân lá xuất hiện màu tím tía do tích tụ anthocyanin.",
                "answer": true,
                "explain": "Đúng. Sự ức chế tổng hợp protein làm tích lũy sắc tố tím đặc trưng."
            },
            {
                "text": "Thiếu kali (K) làm xuất hiện triệu chứng cháy khô ở viền và chóp lá già.",
                "answer": true,
                "explain": "Đúng. Hiện tượng 'cháy mép lá' là dấu hiệu nhận biết điển hình của thiếu K."
            },
            {
                "text": "Cây trồng chỉ cần các nguyên tố đa lượng (N, P, K), không cần bất kỳ nguyên tố vi lượng nào.",
                "answer": false,
                "explain": "Sai. Thiếu vi lượng (Fe, Zn, B, Mo) cây sẽ bị rối loạn sinh lý và không thể ra hoa kết quả."
            }
        ]
    },
    {
        "id": "b7-tf4",
        "context": "Vận dụng hiểu biết về phân bón trong thực tiễn sản xuất:",
        "statements": [
            {
                "text": "Phân chuồng tươi chưa ủ hoai mục có thể bón lót trực tiếp với lượng lớn cho cây giống non.",
                "answer": false,
                "explain": "Sai. Phân tươi lên men sinh nhiệt làm xót rễ và mang mầm bệnh, cỏ dại vào đất."
            },
            {
                "text": "Phân NPK 16-16-8 cung cấp cả 3 yếu tố đạm, lân và kali cho cây.",
                "answer": true,
                "explain": "Đúng. Công thức phối trộn cân đối cả 3 nguyên tố đa lượng."
            },
            {
                "text": "Bón phân hữu cơ định kỳ giúp cải tạo kết cấu đất, tăng khả năng giữ nước và độ phì nhiêu bền vững.",
                "answer": true,
                "explain": "Đúng. Chất mùn hữu cơ tạo cấu trúc viên đất bền vững."
            },
            {
                "text": "Phân bón lá giúp cây hấp thu dinh dưỡng nhanh gấp nhiều lần so với bón qua rễ trong điều kiện rễ bị ngập úng.",
                "answer": true,
                "explain": "Đúng. Khí khổng trên lá hấp thu trực tiếp ion dinh dưỡng khi rễ bị nghẹt thở."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b07-sa1",
        "q": "Nguyên tố dinh dưỡng khoáng đa lượng nào đóng vai trò chính trong việc cấu tạo chất diệp lục và thúc đẩy sinh trưởng thân lá xanh tốt?",
        "unit": "Tên nguyên tố",
        "correctAnswers": [
            "Đạm",
            "đạm",
            "Nitơ",
            "nitơ",
            "N"
        ],
        "explain": "Đạm (Nitơ) là thành phần cơ bản cấu tạo nên protein, axit nucleic và diệp lục tố."
    },
    {
        "id": "b07-sa2",
        "q": "Tên gọi của loại phân đạm hóa học phổ biến nhất hiện nay có công thức hóa học là (NH2)2CO với hàm lượng đạm cao khoảng 46% là phân gì?",
        "unit": "Tên phân",
        "correctAnswers": [
            "Urê",
            "urê",
            "Ure",
            "ure",
            "Phân urê"
        ],
        "explain": "Phân urê là loại phân đạm cô đặc và được sử dụng rộng rãi nhất trong nông nghiệp."
    },
    {
        "id": "b07-sa3",
        "q": "Triệu chứng đặc trưng xuất hiện ở mép và chóp các lá già (bị vàng và khô cháy như bị lửa xém) là dấu hiệu cây đang bị thiếu hụt nguyên tố khoáng nào?",
        "unit": "Tên nguyên tố",
        "correctAnswers": [
            "Kali",
            "kali",
            "K"
        ],
        "explain": "Thiếu kali làm mất cân bằng nước mô mép lá, dẫn đến hoại tử khô cháy rìa lá."
    },
    {
        "id": "b07-sa4",
        "q": "Trên bao bì phân bón NPK ghi tỷ lệ 20 - 20 - 15 thì con số 20 đầu tiên biểu thị phần trăm khối lượng của chất dinh dưỡng nào?",
        "unit": "Tên chất",
        "correctAnswers": [
            "Đạm",
            "đạm",
            "Nitơ",
            "nitơ",
            "N"
        ],
        "explain": "Quy ước quốc tế: Số đầu tiên là % N, số thứ hai là % P2O5, số thứ ba là % K2O."
    }
  ],
  essay: [
    {
        "id": "bai-07-essay1",
        "q": "Nêu vai trò của 3 nguyên tố đa lượng N, P, K đối với sinh trưởng và phát triển của cây trồng.",
        "answer": "- Đạm (N): Cấu tạo protein, diệp lục; kích thích phát triển cành, lá, tăng sinh khối xanh.\n- Lân (P): Cung cấp năng lượng trao đổi chất (ATP); kích thích ra rễ non, phân hóa mầm hoa và tăng sức chống rét.\n- Kali (K): Điều hòa nước, thúc đẩy vận chuyển đường bột về hạt, củ, quả; làm cứng cây chống đổ ngã và sâu bệnh."
    },
    {
        "id": "bai-07-essay2",
        "q": "Tại sao phân hữu cơ cần phải ủ hoai mục trước khi sử dụng trong sản xuất nông nghiệp?",
        "answer": "1. Tiêu diệt triệt để các mầm mống nấm bệnh, vi khuẩn có hại, trứng giun sán và hạt cỏ dại nhờ nhiệt độ tự ủ lên tới 60-70°C.\n2. Phân giải các hợp chất hữu cơ cao phân tử khó tiêu (cellulose, lignin) thành dạng mùn và khoáng chất dễ tiêu giúp rễ cây hấp thụ ngay.\n3. Tránh hiện tượng phân tươi lên men yếm khí trong đất sinh khí độc (H2S, CH4) và nhiệt lượng cao gây thối rễ non của cây trồng."
    }
  ]
};

export default EXTRA_BAI_07;
