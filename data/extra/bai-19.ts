import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 19
export const EXTRA_BAI_19: LessonExtra = {
  tf: [
    {
        "id": "b19-tf1",
        "context": "Quy trình kỹ thuật trồng trọt cây nông nghiệp:",
        "statements": [
            {
                "text": "Làm đất giúp đất tơi xốp, thông thoáng, vùi lấp tàn dư cỏ dại và mầm bệnh vụ trước.",
                "answer": true,
                "explain": "Đúng. Tạo môi trường thuận lợi nhất cho hạt giống nảy mầm và rễ non phát triển."
            },
            {
                "text": "Lên luống cao trong mùa mưa giúp thoát nước nhanh chóng, chống ngập úng thối rễ rau màu.",
                "answer": true,
                "explain": "Đúng. Biện pháp sống còn trong canh tác rau màu mùa mưa."
            },
            {
                "text": "Càng gieo hạt giống thật dày đặc thì năng suất cây trồng thu hoạch được càng cao vô hạn.",
                "answer": false,
                "explain": "Sai. Gieo quá dày cây cạnh tranh ánh sáng, dinh dưỡng, còi cọc và dễ nhiễm sâu bệnh."
            },
            {
                "text": "Bón lót bằng phân hữu cơ hoai mục và phân lân được thực hiện trong quá trình làm đất trước khi gieo trồng.",
                "answer": true,
                "explain": "Đúng. Đặt sẵn nguồn dinh dưỡng nền tảng cho rễ cây con."
            }
        ]
    },
    {
        "id": "b19-tf2",
        "context": "Các khâu chăm sóc cây trồng ngoài đồng ruộng:",
        "statements": [
            {
                "text": "Tưới nhỏ giọt đưa nước và dinh dưỡng trực tiếp đến vùng rễ, tiết kiệm từ 30-50% lượng nước.",
                "answer": true,
                "explain": "Đúng. Tối ưu hóa hiệu quả sử dụng tài nguyên nước và phân bón."
            },
            {
                "text": "Tỉa bỏ cây còi cọc sâu bệnh và dặm cây con vào các vị trí mất khoảng giúp đồng ruộng đồng đều mật độ.",
                "answer": true,
                "explain": "Đúng. Tận dụng tối đa diện tích quang hợp của quần thể cây."
            },
            {
                "text": "Cần thu hoạch rau ăn lá vào giữa trưa nắng gắt 40 độ C để rau nhanh chín hơn.",
                "answer": false,
                "explain": "Sai. Nắng gắt làm bốc hơi nước mạnh, rau bị héo rũ giảm phẩm chất nghiêm trọng."
            },
            {
                "text": "Sử dụng màng phủ nông nghiệp giúp khống chế cỏ dại và giữ ẩm đất rất hiệu quả.",
                "answer": true,
                "explain": "Đúng. Màng đen ngăn cản ánh sáng diệt sạch cỏ dại dưới luống."
            }
        ]
    },
    {
        "id": "b19-tf3",
        "context": "Cơ giới hóa trong sản xuất nông nghiệp:",
        "statements": [
            {
                "text": "Máy gặt đập liên hợp thực hiện đồng thời các khâu: Cắt lúa, tuốt đập, làm sạch và đóng bao thóc.",
                "answer": true,
                "explain": "Đúng. Giảm mạnh tỷ lệ thất thoát rơi rụng hạt thóc ngoài đồng."
            },
            {
                "text": "Drone nông nghiệp (thiết bị bay không người lái) giúp phun thuốc bảo vệ thực vật chính xác và an toàn cho con người.",
                "answer": true,
                "explain": "Đúng. Cách ly người lao động hoàn toàn khỏi độc hại của thuốc BVTV."
            },
            {
                "text": "Máy móc nông nghiệp cỡ lớn rất thích hợp và dễ dàng vận hành trên các ruộng bậc thang cheo leo ở vùng cao.",
                "answer": false,
                "explain": "Sai. Ruộng bậc thang hẹp và dốc chỉ phù hợp với máy móc cỡ nhỏ mini cầm tay."
            },
            {
                "text": "Cơ giới hóa góp phần nâng cao năng suất lao động và giảm thiểu tổn thất nông sản sau thu hoạch.",
                "answer": true,
                "explain": "Đúng. Đẩy nhanh tiến độ mùa vụ, tránh thất thoát do thời tiết bất lợi."
            }
        ]
    },
    {
        "id": "b19-tf4",
        "context": "Ứng dụng cơ giới hóa và tiêu chuẩn VietGAP tại Cao Bằng:",
        "statements": [
            {
                "text": "Đưa máy xới mini vào làm đất đồi trồng ngô, dong riềng giúp giảm công sức nặng nhọc cho đồng bào vùng cao.",
                "answer": true,
                "explain": "Đúng. Máy mini linh hoạt thích ứng địa hình đồi dốc."
            },
            {
                "text": "Thu hoạch lúa chín vào thời điểm 85-90% số hạt trên bông chín vàng giúp giảm thiểu gãy hạt và rơi rụng.",
                "answer": true,
                "explain": "Đúng. Đây là độ chín kỹ thuật tối ưu của cây lúa."
            },
            {
                "text": "Tiêu chuẩn VietGAP không yêu cầu ghi chép nhật ký đồng ruộng trong quá trình chăm sóc.",
                "answer": false,
                "explain": "Sai. Nhật ký đồng ruộng là yêu cầu bắt buộc để kiểm soát chất lượng và truy xuất nguồn gốc."
            },
            {
                "text": "Hệ thống tưới phun sương tự động rất thích hợp cho các vườn ươm cây ăn quả đặc sản tại địa phương.",
                "answer": true,
                "explain": "Đúng. Cung cấp độ ẩm mịn màng bảo vệ cây giống non khỏi khô héo."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b19-sa1",
        "q": "Loại máy nông nghiệp hiện đại thực hiện đồng thời 3 chức năng cắt lúa, đập tuốt tách hạt và làm sạch thóc trên ruộng được gọi là máy gặt đập gì?",
        "unit": "Tên loại máy",
        "correctAnswers": [
            "Liên hợp",
            "liên hợp",
            "Máy gặt đập liên hợp",
            "máy gặt đập liên hợp"
        ],
        "explain": "Máy gặt đập liên hợp (Combine harvester) tích hợp nhiều công đoạn thu hoạch lúa cùng lúc."
    },
    {
        "id": "b19-sa2",
        "q": "Phương pháp tưới cấp nước và phân bón trực tiếp từng giọt chậm rãi vào sát vùng rễ cây trồng được gọi là phương pháp tưới gì?",
        "unit": "Phương pháp tưới",
        "correctAnswers": [
            "Tưới nhỏ giọt",
            "tưới nhỏ giọt",
            "Nhỏ giọt",
            "nhỏ giọt"
        ],
        "explain": "Tưới nhỏ giọt là công nghệ tưới tiết kiệm nước hàng đầu thế giới."
    },
    {
        "id": "b19-sa3",
        "q": "Thiết bị bay không người lái điều khiển từ xa được ứng dụng để phun thuốc BVTV và bón phân có tên tiếng Anh thông dụng là gì?",
        "unit": "Tên tiếng Anh",
        "correctAnswers": [
            "Drone",
            "drone",
            "Flycam",
            "UAV"
        ],
        "explain": "Drone nông nghiệp (UAV) là bước tiến đột phá của cơ giới hóa thông minh."
    },
    {
        "id": "b19-sa4",
        "q": "Tỷ lệ phần trăm số hạt trên bông lúa chín vàng đạt mức tối ưu (khoảng bao nhiêu phần trăm) thì người nông dân nên tiến hành thu hoạch để tránh rơi rụng?",
        "unit": "Phần trăm",
        "correctAnswers": [
            "85-90%",
            "85 - 90%",
            "85-90",
            "85%",
            "90%"
        ],
        "explain": "Khi 85-90% số hạt chín vàng là thời điểm thu hoạch lúa đạt năng suất và chất lượng tốt nhất."
    }
  ],
  essay: [
    {
        "id": "bai-19-essay1",
        "q": "Trình bày 4 bước cơ bản trong quy trình trồng trọt và nêu vai trò của khâu làm đất.",
        "answer": "1. 4 bước cơ bản trong quy trình trồng trọt:\n- Bước 1: Làm đất và bón lót (cày bừa, san phẳng, lên luống, bón phân hữu cơ và lân lót nền).\n- Bước 2: Gieo trồng (chuẩn bị hạt giống/cây giống đạt chuẩn, gieo hạt hoặc cấy đúng thời vụ, mật độ và độ sâu).\n- Bước 3: Chăm sóc (tưới tiêu nước hợp lý, bón phân thúc theo giai đoạn, tỉa dặm cây, làm cỏ xới xáo vun gốc và phòng trừ sâu bệnh theo IPM).\n- Bước 4: Thu hoạch (thu hoạch đúng độ chín kỹ thuật, đúng thời tiết khô ráo, thao tác nhẹ nhàng giảm tổn thất dập nát).\n2. Vai trò của khâu làm đất:\n- Làm cho đất tơi xốp, tăng dung tích kẽ hở giúp rễ cây dễ dàng đâm sâu và hô hấp lấy oxy.\n- Tăng cường khả năng giữ ẩm, thấm nước và điều hòa nhiệt độ tầng đất mặt.\n- Vùi lấp tàn dư thực vật, tiêu diệt cỏ dại, làm phơi ải tiêu diệt trứng sâu, bào tử nấm bệnh tiềm ẩn trong đất.\n- Trộn đều phân bón lót vào tầng rễ hoạt động, tạo điều kiện thuận lợi nhất cho hạt nảy mầm và cây con bén rễ."
    },
    {
        "id": "bai-19-essay2",
        "q": "Nêu những lợi ích to lớn của việc ứng dụng cơ giới hóa trong trồng trọt và phân tích những khó khăn khi áp dụng cơ giới hóa tại các tỉnh miền núi như Cao Bằng.",
        "answer": "1. Lợi ích của cơ giới hóa:\n- Tăng năng suất lao động gấp hàng chục lần so với làm thủ công, đẩy nhanh tiến độ mùa vụ, né tránh thiên tai kịp thời.\n- Giảm tổn thất nông sản sau thu hoạch (đặc biệt khâu thu hoạch lúa bằng máy gặt đập liên hợp).\n- Giảm chi phí sản xuất, hạ giá thành sản phẩm, nâng cao hiệu quả kinh tế và thu nhập cho nông dân.\n- Giải phóng người nông dân khỏi những công việc nặng nhọc, độc hại (như dùng Drone phun thuốc BVTV).\n2. Khó khăn tại các tỉnh miền núi (Cao Bằng):\n- Địa hình đồi núi dốc, chia cắt mạnh; đồng ruộng bậc thang manh mún, diện tích ô thửa nhỏ hẹp khó đưa máy lớn vào hoạt động.\n- Hệ thống giao thông nội đồng còn nhiều hạn chế, khó khăn trong việc vận chuyển máy móc thiết bị.\n- Vốn đầu tư mua sắm máy móc còn hạn chế đối với các hộ nông dân cá thể; thiếu đội ngũ thợ kỹ thuật sửa chữa bảo dưỡng tại chỗ.\n-> Giải pháp: Cần phát triển các loại máy cơ giới mini nhỏ gọn, dồn điền đổi thửa hợp lý và phát triển các hợp tác xã dịch vụ cơ giới hóa nông nghiệp."
    }
  ]
};

export default EXTRA_BAI_19;
