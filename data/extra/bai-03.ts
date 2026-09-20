import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 3
export const EXTRA_BAI_03: LessonExtra = {
  tf: [
    {
        "id": "b3-tf1",
        "context": "Khi nghiên cứu về thành phần và tính chất lý học của đất trồng:",
        "statements": [
            {
                "text": "Thành phần cơ giới của đất được quyết định bởi tỷ lệ giữa các hạt cát, limon và sét.",
                "answer": true,
                "explain": "Đúng. Tỷ lệ phần trăm 3 cấp hạt này quyết định đất cát, đất thịt hay đất sét."
            },
            {
                "text": "Đất cát có khả năng giữ nước và phân bón tốt hơn rất nhiều so với đất sét.",
                "answer": false,
                "explain": "Sai. Đất cát hạt to, kẽ hở lớn nên giữ nước và phân bón rất kém, dễ bị rửa trôi."
            },
            {
                "text": "Đất thịt là loại đất có thành phần cơ giới trung gian, thích hợp cho đa số các loại cây trồng.",
                "answer": true,
                "explain": "Đúng. Đất thịt cân đối giữa độ thoáng khí và khả năng giữ nước, dinh dưỡng."
            },
            {
                "text": "Cày xới đất liên tục khi đất đang ướt sũng nước sẽ giúp đất sét tơi xốp hơn.",
                "answer": false,
                "explain": "Sai. Cày đất sét khi quá ướt làm đất bị nén chặt, dẻo quánh và đóng tảng cứng khi khô."
            }
        ]
    },
    {
        "id": "b3-tf2",
        "context": "Tìm hiểu về cấu tạo và tính chất hấp phụ của keo đất:",
        "statements": [
            {
                "text": "Hạt keo đất có kích thước siêu hiển vi, nhỏ hơn 0.002 mm (1 μm).",
                "answer": true,
                "explain": "Đúng. Kích thước siêu nhỏ tạo nên diện tích bề mặt tiếp xúc riêng vô cùng lớn."
            },
            {
                "text": "Hầu hết keo đất ở Việt Nam là keo âm nên có khả năng hấp phụ các cation dinh dưỡng như K⁺, Ca²⁺, NH₄⁺.",
                "answer": true,
                "explain": "Đúng. Lực hút tĩnh điện giữa keo âm và cation giúp giữ lại chất dinh dưỡng cho cây."
            },
            {
                "text": "Lớp ion khuếch tán bên ngoài hạt keo đất không bao giờ trao đổi được với dung dịch đất.",
                "answer": false,
                "explain": "Sai. Lớp ion khuếch tán linh động, dễ dàng trao đổi ion với dung dịch đất để rễ cây hút."
            },
            {
                "text": "Bón nhiều phân hữu cơ hoai mục làm gia tăng lượng keo mùn, nâng cao dung tích hấp thu của đất.",
                "answer": true,
                "explain": "Đúng. Mùn hữu cơ chứa lượng keo đất dồi dào gấp nhiều lần keo khoáng sét."
            }
        ]
    },
    {
        "id": "b3-tf3",
        "context": "Xét về phản ứng dung dịch đất và độ chua của đất canh tác:",
        "statements": [
            {
                "text": "Độ pH của đất nhỏ hơn 6.5 biểu thị đất có phản ứng chua.",
                "answer": true,
                "explain": "Đúng. pH < 6.5 là khoảng đất chua theo phân loại nông nghiệp."
            },
            {
                "text": "Độ chua hiện tại do các ion H⁺ tự do trong dung dịch đất gây nên.",
                "answer": true,
                "explain": "Đúng. Đo pH nước trực tiếp phản ánh nồng độ H+ tự do trong dung dịch đất."
            },
            {
                "text": "Độ chua tiềm tàng không gây ảnh hưởng gì đến cây trồng nên không cần quan tâm khi cải tạo đất.",
                "answer": false,
                "explain": "Sai. Khi bón phân, H+ và Al3+ trên keo đất sẽ nhả ra dung dịch làm đất chua trở lại."
            },
            {
                "text": "Bón vôi bột (CaCO₃) giúp cung cấp ion Ca²⁺ đẩy ion H⁺ và Al³⁺ ra ngoài để trung hòa độ chua.",
                "answer": true,
                "explain": "Đúng. Đây là cơ chế hóa học cơ bản để khử chua đất trồng."
            }
        ]
    },
    {
        "id": "b3-tf4",
        "context": "Về độ phì nhiêu và các biện pháp bảo vệ đất vùng đồi núi Cao Bằng:",
        "statements": [
            {
                "text": "Độ phì nhiêu của đất là khả năng cung cấp đồng thời nước, oxy và dinh dưỡng khoáng cho cây.",
                "answer": true,
                "explain": "Đúng. Đây là định nghĩa toàn diện về độ phì nhiêu của đất trồng."
            },
            {
                "text": "Độ phì nhiêu nhân tạo chỉ phụ thuộc vào đá mẹ, không liên quan đến kỹ thuật canh tác của con người.",
                "answer": false,
                "explain": "Sai. Độ phì nhân tạo hoàn toàn do con người bồi đắp qua bón phân, tưới tiêu và cải tạo đất."
            },
            {
                "text": "Trên sườn đất dốc, việc trồng các băng cây phân xanh họ Đậu giúp giữ đất và tăng lượng đạm sinh học.",
                "answer": true,
                "explain": "Đúng. Băng cây chắn dòng chảy xói mòn và rễ nốt sần cố định đạm làm giàu đất."
            },
            {
                "text": "Giun đất và các vi sinh vật đất là các sinh vật gây hại cần tiêu diệt triệt để bằng hóa chất.",
                "answer": false,
                "explain": "Sai. Giun và vi sinh vật đất là sinh vật có ích đào xới đất tơi xốp và phân giải mùn."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b03-sa1",
        "q": "Thành phần cơ giới của đất được phân loại dựa trên tỷ lệ phần trăm khối lượng của 3 cấp hạt khoáng nào? (Kể tên 3 cấp hạt)",
        "unit": "3 cấp hạt",
        "correctAnswers": [
            "Cát, limon, sét",
            "cát, limon, sét",
            "Cát, bụi, sét",
            "cát, bụi, sét",
            "Cát, limon và sét"
        ],
        "explain": "Thành phần cơ giới chia theo tỷ lệ hạt cát (2 - 0.05 mm), limon/bụi (0.05 - 0.002 mm) và sét (< 0.002 mm)."
    },
    {
        "id": "b03-sa2",
        "q": "Một mẫu đất canh tác có độ pH đo được là 5.0. Mẫu đất này thuộc loại đất chua, đất trung tính hay đất kiềm?",
        "unit": "Tính chất đất",
        "correctAnswers": [
            "Đất chua",
            "chua",
            "Chua"
        ],
        "explain": "Độ pH < 6.5 là đất chua; pH = 5.0 là đất chua nhiều do chứa nhiều ion H+ và Al3+ tự do."
    },
    {
        "id": "b03-sa3",
        "q": "Hạt keo đất trong đất canh tác ở Việt Nam đa số mang điện tích gì ở lớp ion quyết định điện?",
        "unit": "Điện tích",
        "correctAnswers": [
            "Điện tích âm",
            "âm",
            "Điện âm",
            "Mang điện tích âm",
            "-"
        ],
        "explain": "Keo đất ở nước ta đại đa số là keo âm nên hấp phụ tĩnh điện các cation dinh dưỡng như Ca2+, Mg2+, K+, NH4+."
    },
    {
        "id": "b03-sa4",
        "q": "Chất hữu cơ hoai mục màu đen sẫm có vai trò quyết định tạo kết cấu viên hạt xốp và độ phì nhiêu cho đất gọi là gì?",
        "unit": "Chất hữu cơ",
        "correctAnswers": [
            "Chất mùn",
            "mùn",
            "Mùn",
            "Mùn hữu cơ"
        ],
        "explain": "Mùn là dạng biến đổi sâu sắc của xác hữu cơ trong đất, có dung tích hấp thu dưỡng chất cực lớn."
    }
  ],
  essay: [
    {
        "id": "bai-03-essay1",
        "q": "Nêu 4 thành phần cơ bản của đất trồng và chỉ rõ vai trò của từng thành phần đối với cây.",
        "answer": "1. Phần rắn (khoáng chất và mùn hữu cơ): Cố định bộ rễ, cung cấp chất khoáng và mùn giữ phân bón.\n2. Phần lỏng (nước/dung dịch đất): Hòa tan muối khoáng, vận chuyển chất dinh dưỡng vào rễ.\n3. Phần khí: Cung cấp oxy cho rễ và vi sinh vật hô hấp, cung cấp nitơ cho vi khuẩn cố định đạm.\n4. Sinh vật đất: Đào xới làm tơi xốp đất, phân hủy xác hữu cơ thành chất khoáng nuôi cây."
    },
    {
        "id": "bai-03-essay2",
        "q": "Giải thích vì sao đất có tỷ lệ hạt sét quá cao lại khó canh tác trong cả mùa mưa lẫn mùa khô?",
        "answer": "- Vào mùa mưa: Đất sét giữ nước nhiều, thoát nước rất chậm gây ngập úng, rễ cây bị nghẹt oxy thối hỏng; đất dẻo quánh dính bết vào nông cụ khiến việc làm đất cực kỳ nặng nhọc.\n- Vào mùa khô: Hạt sét co rút mạnh làm mặt đất nứt nẻ thành tảng lớn, đứt rễ cây con, thoát ẩm nhanh và đất trở nên rắn đanh như đá, rất khó cày bừa xới xáo."
    }
  ]
};

export default EXTRA_BAI_03;
