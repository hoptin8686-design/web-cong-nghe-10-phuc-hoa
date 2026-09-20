import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 6
export const EXTRA_BAI_06: LessonExtra = {
  tf: [
    {
        "id": "b6-tf1",
        "context": "Về quy trình lấy mẫu đất đại diện ngoài đồng ruộng để phân tích độ chua, độ mặn:",
        "statements": [
            {
                "text": "Mẫu đất đại diện cần được lấy ở 5 điểm theo đường chéo góc hoặc đường dích dắc trên ruộng.",
                "answer": true,
                "explain": "Đúng. Phương pháp 5 điểm chéo góc đảm bảo tính đại diện khách quan cho toàn ruộng."
            },
            {
                "text": "Chỉ cần lấy đất ở một góc ruộng duy nhất ngay cạnh mương dẫn nước thải là đủ.",
                "answer": false,
                "explain": "Sai. Lấy 1 điểm cục bộ dễ bị sai lệch do nước ô nhiễm hoặc phân bón dồn lại."
            },
            {
                "text": "Độ sâu lấy mẫu cho cây hàng năm (lúa, rau màu) là tầng đất mặt từ 0 đến 20 cm.",
                "answer": true,
                "explain": "Đúng. Đây là tầng rễ tập trung dày đặc nhất để hút dinh dưỡng."
            },
            {
                "text": "Mẫu đất sau khi lấy về cần được nhặt sạch rễ cỏ, sỏi đá và phơi khô trong bóng râm trước khi nghiền rây.",
                "answer": true,
                "explain": "Đúng. Phơi nơi thoáng mát giúp mẫu khô tự nhiên mà không làm biến tính các chất hữu cơ."
            }
        ]
    },
    {
        "id": "b6-tf2",
        "context": "Thao tác kỹ thuật pha dịch chiết đất và sử dụng bút đo pH điện tử:",
        "statements": [
            {
                "text": "Bắt buộc phải dùng nước cất trung tính (pH = 7.0) để pha dịch chiết đất theo tỷ lệ 1:2.5.",
                "answer": true,
                "explain": "Đúng. Nước cất không chứa ion lạ đảm bảo phản ánh chính xác ion H+ của đất."
            },
            {
                "text": "Cần khuấy đều hỗn hợp đất - nước trong 2-3 phút và để lắng 10-15 phút trước khi nhúng đầu đo.",
                "answer": true,
                "explain": "Đúng. Giúp ion hòa tan ra nước và hạt đất lắng xuống đáy tránh làm xước đầu đo."
            },
            {
                "text": "Cắm mạnh đầu thủy tinh của bút đo vào tận lớp sỏi đá dưới đáy cốc để đo chính xác nhất.",
                "answer": false,
                "explain": "Sai. Màng thủy tinh cảm biến rất mỏng manh, cắm đáy sẽ làm vỡ đầu đo ngay lập tức."
            },
            {
                "text": "Sau mỗi lần đo xong, phải rửa đầu đo bằng nước cất và thấm khô nhẹ nhàng bằng giấy mềm.",
                "answer": true,
                "explain": "Đúng. Tránh lây nhiễm ion sang mẫu đất tiếp theo."
            }
        ]
    },
    {
        "id": "b6-tf3",
        "context": "Đánh giá kết quả đo chỉ số pH và EC của các mẫu đất:",
        "statements": [
            {
                "text": "Một mẫu đất có độ pH = 4.5 được kết luận là đất chua nhiều, cần bón vôi cải tạo.",
                "answer": true,
                "explain": "Đúng. pH < 4.5 là đất chua mạnh, cần bón vôi bột nâng pH lên ngưỡng an toàn."
            },
            {
                "text": "Chỉ số EC phản ánh nồng độ muối khoáng hòa tan trong dung dịch đất.",
                "answer": true,
                "explain": "Đúng. EC là độ dẫn điện, tỷ lệ thuận với lượng muối khoáng tan."
            },
            {
                "text": "Đất có EC > 4.0 mS/cm là đất ngọt lý tưởng cho tất cả các loại cây rau màu.",
                "answer": false,
                "explain": "Sai. EC > 4.0 mS/cm là đất mặn, gây ngộ độc và hạn sinh lý cho đa số cây trồng."
            },
            {
                "text": "Đất có độ pH từ 6.0 đến 6.5 là đất có phản ứng tối hảo cho hầu hết các loại cây nông nghiệp.",
                "answer": true,
                "explain": "Đúng. Khoảng pH này giúp rễ cây hấp thụ trọn vẹn dinh dưỡng đa, trung, vi lượng."
            }
        ]
    },
    {
        "id": "b6-tf4",
        "context": "Vận dụng kết quả đo đất thực tế tại trường học và nông hộ Cao Bằng:",
        "statements": [
            {
                "text": "Biết chính xác độ chua của đất giúp tính toán liều lượng vôi bột cần bón khoa học, tránh lãng phí.",
                "answer": true,
                "explain": "Đúng. Bón đúng liều lượng vôi theo độ pH thực tế mang lại hiệu quả kinh tế cao nhất."
            },
            {
                "text": "Nếu đất đo được pH = 4.2 thì nên bón nhiều phân đạm SA (Sunfat amoni) để trung hòa.",
                "answer": false,
                "explain": "Sai. Phân đạm SA có tính chua sinh lý sẽ làm đất bị chua hóa nặng nề hơn."
            },
            {
                "text": "Giấy quỳ chỉ thị màu nhúng vào dịch chiết đất chuyển màu đỏ chứng tỏ đất có tính axit.",
                "answer": true,
                "explain": "Đúng. Giấy quỳ hóa đỏ trong môi trường pH < 7."
            },
            {
                "text": "Bút đo pH điện tử không cần hiệu chuẩn bằng dung dịch đệm vẫn luôn cho kết quả chính xác tuyệt đối sau nhiều năm.",
                "answer": false,
                "explain": "Sai. Điện cực bị lão hóa theo thời gian nên bắt buộc phải hiệu chuẩn định kỳ bằng buffer chuẩn."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b06-sa1",
        "q": "Chỉ số EC trong dung dịch chiết đất đo lường đại lượng vật lý nào để phản ánh nồng độ muối khoáng hòa tan?",
        "unit": "Đại lượng",
        "correctAnswers": [
            "Độ dẫn điện",
            "độ dẫn điện",
            "Độ dẫn điện của dung dịch",
            "Dẫn điện"
        ],
        "explain": "EC (Electrical Conductivity) là độ dẫn điện của dung dịch, tỷ lệ thuận với tổng lượng ion muối hòa tan trong đất."
    },
    {
        "id": "b06-sa2",
        "q": "Khoảng giá trị pH tối ưu của đất phù hợp cho đa số các loài cây trồng nông nghiệp sinh trưởng tốt là bao nhiêu?",
        "unit": "Khoảng pH",
        "correctAnswers": [
            "5.5 - 6.5",
            "5.5-6.5",
            "5,5 - 6,5",
            "5.5 đến 6.5",
            "6.0 - 7.0",
            "5.5 - 7.0"
        ],
        "explain": "Khoảng pH từ 5.5 đến 6.5 là khoảng trung tính lý tưởng giúp hầu hết các chất khoáng hòa tan ở dạng rễ dễ hấp thu nhất."
    },
    {
        "id": "b06-sa3",
        "q": "Tỷ lệ chuẩn giữa khối lượng đất (gam) và thể tích nước cất (ml) thường dùng để pha dịch chiết đo pH đất trong bài thực hành là bao nhiêu?",
        "unit": "Tỷ lệ",
        "correctAnswers": [
            "1:2.5",
            "1 : 2.5",
            "1:2,5",
            "1/2.5",
            "1:5"
        ],
        "explain": "Tỷ lệ 1 phần đất : 2.5 phần nước cất (ví dụ 10g đất hòa 25ml nước cất) là tỷ lệ chuẩn phân tích pH nước."
    },
    {
        "id": "b06-sa4",
        "q": "Khi đo độ pH bằng giấy quỳ chỉ thị màu, nếu dung dịch chiết đất làm giấy quỳ chuyển sang màu đỏ thì đất đó có tính chất gì?",
        "unit": "Tính chất",
        "correctAnswers": [
            "Tính axit",
            "axit",
            "Tính chua",
            "chua",
            "Chua"
        ],
        "explain": "Môi trường axit chứa nhiều ion H+ tự do làm giấy quỳ chuyển sang màu đỏ hoặc hồng."
    }
  ],
  essay: [
    {
        "id": "bai-06-essay1",
        "q": "Nêu các bước lấy mẫu đất đại diện ngoài đồng ruộng theo phương pháp 5 điểm chéo góc.",
        "answer": "1. Xác định 5 điểm lấy mẫu trên ruộng: 4 điểm ở 4 góc (cách bờ ít nhất 1-2m) và 1 điểm ở chính giữa ruộng.\n2. Dùng xẻng gạt bỏ lớp cỏ rác bề mặt, đào hố hình chữ V sâu 0 - 20 cm.\n3. Lấy một lát đất dày khoảng 1.5 - 2 cm dọc theo thành hố từ mặt xuống đáy.\n4. Đổ đất của cả 5 điểm vào một chậu sạch, nhặt bỏ rễ cây, sỏi đá, trộn thật đều.\n5. Lấy khoảng 0.5 - 1 kg đất hỗn hợp cho vào túi nilon ghi nhãn ngày lấy, địa điểm để làm mẫu phân tích đại diện."
    },
    {
        "id": "bai-06-essay2",
        "q": "Tại sao việc xác định độ chua pH và độ dẫn điện EC lại có ý nghĩa quyết định trước khi xuống giống vụ mùa?",
        "answer": "- Biết độ pH giúp người nông dân chủ động bón lượng vôi bột phù hợp khử chua, giải phóng các chất dinh dưỡng bị cố định, hạn chế ngộ độc nhôm sắt cho rễ cây con.\n- Biết chỉ số EC giúp phát hiện sớm đất bị nhiễm mặn hoặc tồn dư phân bón hóa học quá cao, từ đó có biện pháp thau chua rửa mặn kịp thời, tránh hiện tượng hạn sinh lý làm chết héo cây giống."
    }
  ]
};

export default EXTRA_BAI_06;
