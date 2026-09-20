import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 20
export const EXTRA_BAI_20: LessonExtra = {
  tf: [
    {
        "id": "b20-tf1",
        "context": "Các quá trình sinh lý của nông sản sau thu hoạch:",
        "statements": [
            {
                "text": "Nông sản sau thu hoạch vẫn tiếp tục hô hấp tế bào, tiêu hao chất dinh dưỡng dự trữ và sinh nhiệt ẩm.",
                "answer": true,
                "explain": "Đúng. Đây là đặc tính sinh học sống của rau hoa quả hạt sau khi tách rời cây."
            },
            {
                "text": "Cường độ hô hấp càng cao thì nông sản càng bảo quản được lâu năm mà không bị hư hỏng.",
                "answer": false,
                "explain": "Sai. Hô hấp mạnh tiêu hao dinh dưỡng nhanh và sinh nhiệt ẩm làm thối rữa nông sản cực nhanh."
            },
            {
                "text": "Hạ nhiệt độ môi trường bảo quản giúp ức chế cường độ hô hấp và kìm hãm hoạt động của nấm mốc vi khuẩn.",
                "answer": true,
                "explain": "Đúng. Nguyên lý cơ bản của công nghệ bảo quản lạnh."
            },
            {
                "text": "Khí Ethylene là hormone thúc đẩy quá trình chín mềm và kích thích quá trình lão hóa của quả tươi.",
                "answer": true,
                "explain": "Đúng. Kích hoạt quá trình chuyển hóa đường và thủy phân pectin làm mềm quả."
            }
        ]
    },
    {
        "id": "b20-tf2",
        "context": "Các công nghệ bảo quản tiên tiến hiện đại:",
        "statements": [
            {
                "text": "Công nghệ khí quyển điều chỉnh (CA) chủ động hạ nồng độ O2 xuống thấp và nâng CO2 kết hợp với nhiệt độ lạnh.",
                "answer": true,
                "explain": "Đúng. Tạo trạng thái ngủ đông sinh học sâu cho rau quả tươi."
            },
            {
                "text": "Chiếu xạ thực phẩm bằng tia gamma liều cao làm quả phát nổ và nhiễm phóng xạ độc hại cho người ăn.",
                "answer": false,
                "explain": "Sai. Chiếu xạ liều thấp đạt chuẩn quốc tế chỉ diệt khuẩn, ức chế nảy mầm và hoàn toàn không để lại phóng xạ tồn dư."
            },
            {
                "text": "Màng bọc sinh học Chitosan chiết xuất từ vỏ tôm cua giúp tạo lớp màng mỏng an toàn bảo vệ quả tươi lâu.",
                "answer": true,
                "explain": "Đúng. Màng sinh học tự nhiên kháng khuẩn và kiểm soát bay hơi nước."
            },
            {
                "text": "Chất 1-MCP có tác dụng khóa thụ thể tiếp nhận ethylene, giúp giữ hoa quả tươi giòn lâu gấp nhiều lần.",
                "answer": true,
                "explain": "Đúng. Ứng dụng phổ biến trong bảo quản táo, lê, chuối, hoa cắt cành."
            }
        ]
    },
    {
        "id": "b20-tf3",
        "context": "Kỹ thuật bảo quản hạt giống và nông sản truyền thống:",
        "statements": [
            {
                "text": "Hạt giống bảo quản dài hạn cần được sấy khô đạt độ ẩm an toàn (dưới 13%) và lưu trữ trong kho lạnh khô.",
                "answer": true,
                "explain": "Đúng. Đảm bảo duy trì sức nảy mầm ổn định trong nhiều năm."
            },
            {
                "text": "Phương pháp bảo quản hạt truyền thống trong bồ chum dễ bị chuột bọ cắn phá và ẩm mốc khi trời nồm ẩm.",
                "answer": true,
                "explain": "Đúng. Không kiểm soát được độ ẩm không khí môi trường xung quanh."
            },
            {
                "text": "Nông sản trước khi đưa vào kho bảo quản không cần phân loại hay loại bỏ các củ quả bị dập nát sâu thối.",
                "answer": false,
                "explain": "Sai. Bắt buộc phải chọn lọc kỹ, quả dập nát sẽ là ổ nấm lây lan làm thối rữa toàn bộ lô hàng."
            },
            {
                "text": "Khâu làm mát sơ bộ (Pre-cooling) ngay sau thu hái giúp giải phóng nhiệt đồng ruộng, kéo dài tuổi thọ quả.",
                "answer": true,
                "explain": "Đúng. Bước đầu tiên mang tính quyết định của chuỗi cung ứng lạnh."
            }
        ]
    },
    {
        "id": "b20-tf4",
        "context": "Ý nghĩa kinh tế của công nghệ bảo quản tại Cao Bằng:",
        "statements": [
            {
                "text": "Lắp đặt kho lạnh bảo quản quả mận, quả lê, hạt dẻ Trùng Khánh giúp kéo dài thời vụ tiêu thụ, tránh bị ép giá.",
                "answer": true,
                "explain": "Đúng. Nâng cao giá trị gia tăng cho các nông sản đặc sản địa phương."
            },
            {
                "text": "Khoai tây để nảy mầm tự nhiên trong bếp ăn rất an toàn và bổ dưỡng cho sức khỏe con người.",
                "answer": false,
                "explain": "Sai. Mầm khoai tây chứa chất độc Solanine cực kỳ nguy hiểm, có thể gây ngộ độc chết người."
            },
            {
                "text": "Hệ thống cảm biến thông minh IoT giúp quản lý kho theo dõi nhiệt độ, độ ẩm tự động từ xa qua smartphone.",
                "answer": true,
                "explain": "Đúng. Công nghệ 4.0 kiểm soát điều kiện kho 24/24 giờ chính xác."
            },
            {
                "text": "Xử lý nước nóng (HWT) giúp quả xoài, thanh long diệt trừ triệt để ấu trùng ruồi đục quả đạt tiêu chuẩn xuất khẩu.",
                "answer": true,
                "explain": "Đúng. Quy trình kiểm dịch thực vật bắt buộc khi xuất khẩu quả tươi."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b20-sa1",
        "q": "Tên viết tắt tiếng Anh của công nghệ bảo quản hoa quả hiện đại bằng cách điều chỉnh chủ động tỷ lệ các chất khí (hạ O2, tăng CO2) kết hợp với nhiệt độ lạnh là gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "CA",
            "ca",
            "Công nghệ CA",
            "công nghệ CA"
        ],
        "explain": "CA là chữ viết tắt của Controlled Atmosphere (Khí quyển điều chỉnh)."
    },
    {
        "id": "b20-sa2",
        "q": "Tên loại hormone thực vật thể khí tự nhiên sinh ra từ quả chín kích thích hoa mau tàn, lá úa vàng và làm quả nhanh mềm thối là khí gì?",
        "unit": "Tên chất khí",
        "correctAnswers": [
            "Ethylene",
            "ethylene",
            "Etilen",
            "etilen",
            "C2H4"
        ],
        "explain": "Khí ethylene là hormone chín sinh học tự nhiên ở thực vật."
    },
    {
        "id": "b20-sa3",
        "q": "Hợp chất polymer sinh học chiết xuất từ vỏ các loài giáp xác (như tôm, cua) được dùng để làm màng mỏng bao bọc quả tươi kéo dài thời gian bảo quản có tên là gì?",
        "unit": "Tên hợp chất",
        "correctAnswers": [
            "Chitosan",
            "chitosan"
        ],
        "explain": "Màng bao Chitosan kháng khuẩn, an toàn và phân hủy sinh học hoàn toàn."
    },
    {
        "id": "b20-sa4",
        "q": "Khâu kỹ thuật làm mát thật nhanh để giải phóng lượng 'nhiệt đồng ruộng' tích tụ trong hoa quả ngay sau khi vừa thu hái có tên tiếng Anh là gì?",
        "unit": "Thuật ngữ tiếng Anh",
        "correctAnswers": [
            "Pre-cooling",
            "pre-cooling",
            "precooling",
            "Precooling",
            "Làm lạnh sơ bộ"
        ],
        "explain": "Pre-cooling (Làm mát sơ bộ) là bước hạ nhiệt tức thì bảo vệ chất lượng nông sản tươi."
    }
  ],
  essay: [
    {
        "id": "bai-20-essay1",
        "q": "Trình bày nguyên lý và ưu điểm của công nghệ bảo quản nông sản trong khí quyển điều chỉnh (CA - Controlled Atmosphere).",
        "answer": "1. Nguyên lý hoạt động:\n- Công nghệ CA là sự kết hợp giữa nhiệt độ lạnh thích hợp với việc chủ động kiểm soát và duy trì chính xác tỷ lệ các thành phần chất khí trong kho kín:\n+ Hạ nồng độ Oxy (O2) từ 21% trong không khí xuống mức rất thấp (khoảng 1% - 3%).\n+ Nâng nồng độ khí Cacbonic (CO2) lên mức tối ưu (khoảng 1% - 5%).\n+ Phần còn lại chủ yếu là khí Nitơ (N2) trơ.\n- Sự kết hợp này làm giảm cường độ hô hấp của nông sản xuống mức thấp nhất (đưa tế bào quả vào trạng thái 'ngủ đông' sinh học sâu), kìm hãm hoàn toàn quá trình sinh khí ethylene nội sinh và ức chế triệt để hoạt động phân giải của các loại nấm mốc, vi khuẩn.\n2. Ưu điểm nổi bật:\n- Kéo dài thời gian bảo quản rau quả tươi gấp 2 đến 4 lần so với kho lạnh thông thường.\n- Duy trì nguyên vẹn độ tươi giòn, màu sắc, hương vị tự nhiên và hàm lượng vitamin, dinh dưỡng.\n- Giảm thiểu hao hụt khối lượng do bốc hơi nước và hạn chế tối đa tỷ lệ thối rữa sau thu hoạch.\n- Hoàn toàn không sử dụng hóa chất bảo quản độc hại, đáp ứng tiêu chuẩn an toàn thực phẩm xuất khẩu khắt khe."
    },
    {
        "id": "bai-20-essay2",
        "q": "Phân tích vai trò của chuỗi cung ứng lạnh (Cold Chain) trong việc giảm tổn thất sau thu hoạch đối với hoa quả tươi.",
        "answer": "1. Khái niệm: Chuỗi cung ứng lạnh (Cold Chain) là hệ thống kiểm soát nhiệt độ lạnh liên tục, không bị đứt đoạn, từ khâu sau thu hoạch ngoài đồng cho đến tay người tiêu dùng cuối cùng (gồm: Làm mát sơ bộ tại vườn -> Đóng gói lạnh -> Vận chuyển bằng xe lạnh/container lạnh -> Lưu trữ tại kho lạnh phân phối -> Quầy kệ lạnh tại siêu thị, cửa hàng).\n2. Vai trò trong giảm tổn thất sau thu hoạch:\n- Kiểm soát cường độ hô hấp: Duy trì nhiệt độ mát liên tục giúp nông sản hạn chế tiêu hao chất dinh dưỡng dự trữ (đường, acid hữu cơ), ngăn chặn sự phân hủy pectin làm mềm nát quả.\n- Hạn chế mất nước: Độ ẩm trong chuỗi lạnh được kiểm soát thích hợp giúp quả không bị teo tóp, nhăn nheo vỏ, giữ nguyên trọng lượng thương phẩm.\n- Ngăn ngừa vi sinh vật gây thối rữa: Nhiệt độ thấp ức chế bào tử nấm và vi khuẩn xâm nhiễm qua các vết trầy xước trong quá trình bốc xếp vận chuyển.\n- Mở rộng thị trường tiêu thụ: Cho phép vận chuyển nông sản đi xa hàng ngàn kilomet hoặc xuất khẩu sang các thị trường quốc tế cao cấp bằng đường biển trong nhiều tuần mà vẫn giữ được độ tươi ngon.\n- Giảm tỷ lệ hao hụt từ 30-40% (nếu để tự nhiên) xuống chỉ còn dưới 5-8%, đem lại giá trị kinh tế khổng lồ cho ngành trồng trọt."
    }
  ]
};

export default EXTRA_BAI_20;
