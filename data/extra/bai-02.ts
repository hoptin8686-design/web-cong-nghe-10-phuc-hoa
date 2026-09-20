import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 2
export const EXTRA_BAI_02: LessonExtra = {
  tf: [
    {
        "id": "b2-tf1",
        "context": "Xét về ảnh hưởng của các yếu tố ngoại cảnh đối với cây trồng:",
        "statements": [
            {
                "text": "Cường độ ánh sáng quá mạnh vượt quá điểm no ánh sáng có thể làm cháy lá và ức chế quang hợp.",
                "answer": true,
                "explain": "Đúng. Ánh sáng quá gắt làm tăng nhiệt độ lá, phân huỷ diệp lục."
            },
            {
                "text": "Cây trồng chỉ hấp thụ nước qua bộ rễ, không thể hấp thụ qua các bộ phận khác như lá.",
                "answer": false,
                "explain": "Sai. Cây còn có khả năng hấp thụ nước và dinh dưỡng qua khí khổng ở lá."
            },
            {
                "text": "Nhiệt độ thích hợp giúp các phản ứng enzym sinh hoá trong cây diễn ra thuận lợi nhất.",
                "answer": true,
                "explain": "Đúng. Hoạt tính enzym phụ thuộc chặt chẽ vào khoảng nhiệt độ tối ưu của loài cây."
            },
            {
                "text": "Vi lượng là các nguyên tố cây cần với lượng rất ít nên nếu thiếu hoàn toàn cây vẫn phát triển bình thường.",
                "answer": false,
                "explain": "Sai. Dù cần lượng rất nhỏ, thiếu vi lượng cây sẽ bị rối loạn trao đổi chất nghiêm trọng."
            }
        ]
    },
    {
        "id": "b2-tf2",
        "context": "Thực hành bón phân và chăm sóc dinh dưỡng cho cây rau ăn lá:",
        "statements": [
            {
                "text": "Đạm (N) là nguyên tố thiết yếu nhất kích thích sự phát triển thân lá rau xanh.",
                "answer": true,
                "explain": "Đúng. Đạm cấu tạo protein và diệp lục thúc đẩy tăng sinh khối thân lá."
            },
            {
                "text": "Bón phân đạm Urê nồng độ cực cao sát gốc rau vào trưa nắng gắt sẽ giúp rau lớn nhanh sau vài giờ.",
                "answer": false,
                "explain": "Sai. Bón nồng độ cao trưa nắng làm tăng áp suất thẩm thấu gây cháy rễ và thối gốc."
            },
            {
                "text": "Phun phân bón lá bổ sung vi lượng Bo và Kẽm giúp cây hấp thu nhanh hơn qua tầng cutin và khí khổng.",
                "answer": true,
                "explain": "Đúng. Phân bón qua lá phát huy tác dụng dinh dưỡng trực tiếp và nhanh chóng."
            },
            {
                "text": "Có thể thu hoạch rau ngay sau khi phun phân bón hoá học 1 tiếng mà không cần thời gian cách ly.",
                "answer": false,
                "explain": "Sai. Bắt buộc phải tuân thủ thời gian cách ly để tránh tồn dư nitrat gây độc cho người ăn."
            }
        ]
    },
    {
        "id": "b2-tf3",
        "context": "Tìm hiểu về nhu cầu nước và kỹ thuật tưới tiêu khoa học:",
        "statements": [
            {
                "text": "Các giai đoạn cây cần nhiều nước nhất thường là thời kỳ ra hoa và nuôi quả non.",
                "answer": true,
                "explain": "Đúng. Thiếu nước lúc thụ phấn và nuôi quả làm rụng hoa quả hàng loạt."
            },
            {
                "text": "Tưới ngập úng rễ liên tục nhiều ngày giúp cây hấp thụ được lượng oxy dồi dào từ nước.",
                "answer": false,
                "explain": "Sai. Ngập nước làm ngạt oxy trong đất, rễ phải hô hấp kị khí sinh độc tố làm thối rễ."
            },
            {
                "text": "Hệ thống tưới nhỏ giọt tự động giúp tiết kiệm nước và duy trì độ ẩm vùng rễ ổn định.",
                "answer": true,
                "explain": "Đúng. Nước nhỏ giọt chậm tại gốc, giảm tối đa bốc hơi và không xói mòn đất."
            },
            {
                "text": "Nước tưới nhiễm mặn nồng độ cao có thể gây hiện tượng hạn sinh lý khiến cây bị chết héo.",
                "answer": true,
                "explain": "Đúng. Nước mặn có áp suất thẩm thấu cao hơn rễ, hút ngược nước từ rễ ra ngoài."
            }
        ]
    },
    {
        "id": "b2-tf4",
        "context": "Về yếu tố nhiệt độ và ánh sáng trong canh tác nông nghiệp vùng núi Cao Bằng:",
        "statements": [
            {
                "text": "Vào mùa đông sương muối rét đậm, dùng rơm rạ phủ luống và hun khói đầu gió giúp giữ ấm cho cây con.",
                "answer": true,
                "explain": "Đúng. Đây là biện pháp dân gian hiệu quả giúp ngăn sương muối đọng trên mặt lá."
            },
            {
                "text": "Mọi loại cây trồng đều có điểm bù ánh sáng và điểm bão hòa ánh sáng giống hệt nhau.",
                "answer": false,
                "explain": "Sai. Cây ưa sáng và cây ưa bóng có các chỉ số quang hợp chênh lệch rất lớn."
            },
            {
                "text": "Nhiệt độ ngày đêm chênh lệch lớn ở vùng cao giúp tích lũy lượng đường cao trong củ quả đặc sản.",
                "answer": true,
                "explain": "Đúng. Ngày quang hợp mạnh tạo đường, đêm nhiệt độ thấp hô hấp yếu ít tiêu hao đường."
            },
            {
                "text": "Trồng xen cây ưa bóng (gừng, nghệ) dưới tán cây ăn quả giúp tận dụng tối đa diện tích và ánh sáng tán xạ.",
                "answer": true,
                "explain": "Đúng. Mô hình nông lâm kết hợp khai thác hiệu quả ánh sáng ở các tầng tán khác nhau."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b02-sa1",
        "q": "Ba nguyên tố dinh dưỡng khoáng đa lượng thiết yếu nhất mà cây trồng cần hấp thụ với số lượng lớn là những nguyên tố nào? (Viết ký hiệu hóa học cách nhau bằng dấu phẩy hoặc gạch nối)",
        "unit": "Ký hiệu hóa học",
        "correctAnswers": [
            "N, P, K",
            "N-P-K",
            "N,P,K",
            "NPK",
            "N P K"
        ],
        "explain": "Đạm (N), Lân (P), Kali (K) là 3 nguyên tố đa lượng quan trọng hàng đầu đối với sự sinh trưởng và năng suất cây trồng."
    },
    {
        "id": "b02-sa2",
        "q": "Nhờ vào bộ phận nào trên bề mặt lá mà cây có khả năng hấp thụ được hơi nước và các chất dinh dưỡng hòa tan khi bón phân qua lá?",
        "unit": "Bộ phận tế bào",
        "correctAnswers": [
            "Khí khổng",
            "khí khổng",
            "Lỗ khí",
            "lỗ khí"
        ],
        "explain": "Khí khổng ở biểu bì lá là cửa ngõ giúp cây trao đổi khí CO2, O2, thoát hơi nước và hấp thụ dinh dưỡng phun qua lá."
    },
    {
        "id": "b02-sa3",
        "q": "Hiện tượng nồng độ muối khoáng trong đất quá cao khiến rễ cây không hút được nước mà bị mất nước ngược ra ngoài gọi là hiện tượng gì?",
        "unit": "Hiện tượng sinh học",
        "correctAnswers": [
            "Hạn sinh lý",
            "hạn sinh lý",
            "Hạn sinh lí",
            "Hiện tượng hạn sinh lý"
        ],
        "explain": "Hạn sinh lý là trạng thái đất có nước nhưng cây bị héo do áp suất thẩm thấu của đất cao hơn áp suất thẩm thấu của rễ."
    },
    {
        "id": "b02-sa4",
        "q": "Điểm cường độ ánh sáng mà tại đó tốc độ quang hợp đúng bằng tốc độ hô hấp của cây trồng gọi là điểm gì?",
        "unit": "Thuật ngữ",
        "correctAnswers": [
            "Điểm bù ánh sáng",
            "điểm bù ánh sáng",
            "Điểm bù",
            "Điểm bù quang hợp"
        ],
        "explain": "Tại điểm bù ánh sáng, lượng chất hữu cơ tạo ra từ quang hợp vừa đủ bù đắp cho lượng chất hữu cơ tiêu hao do hô hấp."
    }
  ],
  essay: [
    {
        "id": "bai-02-essay1",
        "q": "Tại sao trong sản xuất nông nghiệp người ta thường trồng xen canh cây ưa sáng với cây ưa bóng?",
        "answer": "- Tận dụng tối đa không gian dinh dưỡng và diện tích đất canh tác.\n- Tối ưu hóa hiệu suất hấp thụ năng lượng ánh sáng mặt trời ở các tầng tán khác nhau.\n- Giúp giữ ẩm cho đất, hạn chế xói mòn và cỏ dại phát triển.\n- Đa dạng hoá sản phẩm thu hoạch, tăng hiệu quả kinh tế trên một đơn vị diện tích."
    },
    {
        "id": "bai-02-essay2",
        "q": "Nêu vai trò chính của 3 nguyên tố đa lượng N, P, K đối với cây trồng.",
        "answer": "1. Đạm (N): Thúc đẩy sinh trưởng thân, cành, lá; tham gia cấu tạo protein, axit nucleic, diệp lục.\n2. Lân (P): Kích thích ra rễ, phân hoá mầm hoa, tăng khả năng đậu quả và giúp cây chống rét, chống hạn.\n3. Kali (K): Tăng cường vận chuyển đường bột, cứng cây chống đổ ngã, tăng chất lượng nông sản (độ ngọt, màu sắc) và nâng cao sức đề kháng sâu bệnh."
    }
  ]
};

export default EXTRA_BAI_02;
