import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 9
export const EXTRA_BAI_09: LessonExtra = {
  tf: [
    {
        "id": "b9-tf1",
        "context": "Về đặc điểm và phân loại phân bón vi sinh vật:",
        "statements": [
            {
                "text": "Phân bón vi sinh vật chứa các vi sinh vật sống hữu ích đã được tuyển chọn.",
                "answer": true,
                "explain": "Đúng. Hiệu quả phân bón phụ thuộc vào hoạt tính của các tế bào sống."
            },
            {
                "text": "Vi khuẩn Rhizobium có khả năng cộng sinh với rễ cây họ Đậu để cố định đạm từ khí quyển.",
                "answer": true,
                "explain": "Đúng. Tạo nên các nốt sần cung cấp đạm trực tiếp cho cây chủ."
            },
            {
                "text": "Mọi loại vi khuẩn trong phân vi sinh vật đều có thể chịu được nhiệt độ sôi 100°C.",
                "answer": false,
                "explain": "Sai. Nhiệt độ cao làm đông tụ protein tiêu diệt tế bào vi sinh vật."
            },
            {
                "text": "Phân vi sinh phân giải lân giúp hòa tan các hợp chất photphat khó tan trong đất thành dạng rễ hấp thụ được.",
                "answer": true,
                "explain": "Đúng. Nhờ tiết ra các axit hữu cơ hòa tan khoáng photphat."
            }
        ]
    },
    {
        "id": "b9-tf2",
        "context": "Quy trình công nghệ sản xuất phân vi sinh vật:",
        "statements": [
            {
                "text": "Bước đầu tiên trong sản xuất phân vi sinh là tuyển chọn và nhân thuần các chủng vi sinh vật có hoạt lực cao.",
                "answer": true,
                "explain": "Đúng. Chủng giống thuần khiết có hoạt tính chuyển hóa mạnh là điều kiện tiên quyết."
            },
            {
                "text": "Chất mang (như than bùn vô trùng) được dùng làm môi trường bảo vệ và nuôi sống vi sinh vật sau khi đóng gói.",
                "answer": true,
                "explain": "Đúng. Chất mang duy trì ẩm độ và dinh dưỡng cho vi sinh vật sống."
            },
            {
                "text": "Phân vi sinh vật có hạn sử dụng vĩnh viễn, không bao giờ bị giảm mật độ tế bào sống.",
                "answer": false,
                "explain": "Sai. Mật độ tế bào vi sinh vật sống suy giảm dần theo thời gian (hạn dùng thường 6 tháng)."
            },
            {
                "text": "Mật độ vi sinh vật hữu hiệu đạt chuẩn chất lượng thường phải đạt từ 10^8 CFU/g trở lên.",
                "answer": true,
                "explain": "Đúng. Đảm bảo đủ số lượng vi khuẩn hoạt động khi đưa vào đất."
            }
        ]
    },
    {
        "id": "b9-tf3",
        "context": "Kỹ thuật sử dụng phân vi sinh vật hiệu quả và an toàn:",
        "statements": [
            {
                "text": "Có thể trộn chung phân vi sinh vật với thuốc trừ nấm hóa học nồng độ cao để tiện một công bón.",
                "answer": false,
                "explain": "Sai. Thuốc trừ nấm hóa học sẽ tiêu diệt sạch các chủng vi sinh vật có ích."
            },
            {
                "text": "Bón phân vi sinh vật lúc chiều mát và lấp đất phủ kín giúp bảo vệ vi sinh vật khỏi ánh nắng mặt trời.",
                "answer": true,
                "explain": "Đúng. Tránh tia tử ngoại gây tổn thương DNA của tế bào vi sinh vật."
            },
            {
                "text": "Tẩm ướt hạt giống cây họ Đậu với chế phẩm vi khuẩn nốt sần trước khi gieo giúp tăng tỷ lệ nảy mầm và nốt sần.",
                "answer": true,
                "explain": "Đúng. Vi khuẩn tiếp xúc ngay lập tức khi lông hút non vừa nhú ra."
            },
            {
                "text": "Đất quá khô hạn hoặc úng ngập hoàn toàn không ảnh hưởng gì tới hoạt tính của phân vi sinh vật.",
                "answer": false,
                "explain": "Sai. Vi sinh vật cần môi trường đất ẩm độ vừa phải và thoáng khí để hô hấp và nhân đôi."
            }
        ]
    },
    {
        "id": "b9-tf4",
        "context": "Vai trò của phân vi sinh trong phát triển nông nghiệp tuần hoàn ở Cao Bằng:",
        "statements": [
            {
                "text": "Sử dụng nấm đối kháng Trichoderma giúp ủ hoai mục nhanh chóng phế phụ phẩm rơm rạ, ngô sau thu hoạch.",
                "answer": true,
                "explain": "Đúng. Rút ngắn thời gian ủ và khử sạch các mầm nấm bệnh tồn dư trên thân cây."
            },
            {
                "text": "Phân vi sinh vật thay thế hoàn toàn 100% phân hóa học ngay trong vụ đầu tiên mà không làm giảm năng suất cây.",
                "answer": false,
                "explain": "Sai. Cần chuyển đổi cân đối từng bước kết hợp hữu cơ vi sinh và vô cơ hợp lý."
            },
            {
                "text": "Sử dụng chế phẩm vi sinh giúp ngăn ngừa bệnh ngộ độc hữu cơ cho rễ cây lúa nước vụ hè thu.",
                "answer": true,
                "explain": "Đúng. Rơm rạ được phân giải triệt để trước khi cấy lúa con."
            },
            {
                "text": "Phân bón vi sinh vật an toàn cho con người, vật nuôi và không gây ô nhiễm nguồn nước ngầm vùng núi cao.",
                "answer": true,
                "explain": "Đúng. Sản phẩm sinh học thân thiện với hệ sinh thái môi trường bản địa."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b09-sa1",
        "q": "Tên chi vi khuẩn cộng sinh đặc hiệu với rễ của các loài cây họ Đậu tạo thành các nốt sần có khả năng cố định nitơ khí quyển là gì?",
        "unit": "Tên chi vi khuẩn",
        "correctAnswers": [
            "Rhizobium",
            "rhizobium",
            "Vi khuẩn nốt sần",
            "vi khuẩn nốt sần"
        ],
        "explain": "Vi khuẩn Rhizobium cộng sinh nốt sần cung cấp đạm sinh học dồi dào cho cây họ Đậu."
    },
    {
        "id": "b09-sa2",
        "q": "Tên loại nấm vi sinh đối kháng vừa có khả năng phân giải nhanh chất xơ cellulose vừa tiêu diệt các loại nấm gây thối rễ trong đất là nấm gì?",
        "unit": "Tên loài nấm",
        "correctAnswers": [
            "Trichoderma",
            "trichoderma",
            "Nấm Trichoderma",
            "nấm trichoderma"
        ],
        "explain": "Nấm đối kháng Trichoderma được ứng dụng cực kỳ rộng rãi trong ủ phân compost và bảo vệ rễ cây."
    },
    {
        "id": "b09-sa3",
        "q": "Vật liệu tơi xốp, giàu chất hữu cơ, giữ ẩm tốt thường được tiệt trùng để làm chất mang (chất độn) trong sản xuất phân vi sinh là chất gì?",
        "unit": "Tên vật liệu",
        "correctAnswers": [
            "Than bùn",
            "than bùn",
            "Mụn dừa",
            "mụn dừa"
        ],
        "explain": "Than bùn vô trùng là chất mang phổ biến và tối ưu nhất để bảo quản tế bào vi sinh vật sống."
    },
    {
        "id": "b09-sa4",
        "q": "Đơn vị đo tiêu chuẩn quốc tế dùng để đếm số lượng đơn vị hình thành khuẩn lạc (tế bào vi sinh vật sống) trên mỗi gam phân vi sinh là đơn vị gì?",
        "unit": "Đơn vị",
        "correctAnswers": [
            "CFU/g",
            "cfu/g",
            "CFU",
            "cfu"
        ],
        "explain": "CFU/g (Colony Forming Units per gram) là đơn vị chuẩn đo mật độ vi sinh vật sống."
    }
  ],
  essay: [
    {
        "id": "bai-09-essay1",
        "q": "Trình bày các bước trong quy trình công nghệ sản xuất phân bón vi sinh vật cố định đạm.",
        "answer": "1. Tuyển chọn và nhân thuần chủng vi sinh vật: Chọn chủng vi khuẩn nốt sần (Rhizobium) có hoạt lực cố định đạm cao, ổn định di truyền.\n2. Nhân sinh khối: Nuôi cấy vi khuẩn trong nồi lên men công nghiệp với môi trường dinh dưỡng tối ưu để nhân sinh khối đạt mật độ cao (>= 10^9 tế bào/ml).\n3. Chuẩn bị chất mang: Nghiền nhỏ than bùn hoặc mụn xơ dừa, trung hòa pH và khử trùng sạch tạp khuẩn bằng nhiệt độ cao.\n4. Phối trộn và đóng gói: Trộn đều dịch lên men vi khuẩn với chất mang theo tỷ lệ thích hợp, đóng gói kín trong bao bì thoáng khí chuyên dụng, dán nhãn bảo quản mát."
    },
    {
        "id": "bai-09-essay2",
        "q": "Giải thích vì sao không được trộn lẫn phân vi sinh vật với vôi bột hoặc thuốc bảo vệ thực vật hóa học khi sử dụng?",
        "answer": "- Vôi bột có tính kiềm rất mạnh (pH > 10) làm kiềm hóa môi trường đột ngột, phá vỡ màng tế bào và tiêu diệt các vi sinh vật có ích.\n- Thuốc trừ sâu, đặc biệt là thuốc trừ bệnh (thuốc diệt nấm, diệt khuẩn hóa học) có hoạt tính diệt sinh học mạnh, sẽ tiêu diệt hoàn toàn các chủng vi khuẩn, nấm có ích (như Trichoderma, Bacillus, Rhizobium) có trong phân vi sinh.\n-> Khiến phân vi sinh mất hoàn toàn tác dụng sinh học, gây lãng phí kinh tế."
    }
  ]
};

export default EXTRA_BAI_09;
