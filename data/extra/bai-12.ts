import type { LessonExtra } from "@/lib/types";

// Ngân hàng câu hỏi Đúng/Sai (4 câu), Trả lời ngắn (4 câu) & Tự luận: Bài 12
export const EXTRA_BAI_12: LessonExtra = {
  tf: [
    {
        "id": "b12-tf1",
        "context": "Về phương pháp chọn lọc cá thể và chọn lọc hỗn hợp:",
        "statements": [
            {
                "text": "Chọn lọc cá thể cho phép theo dõi riêng rẽ hậu thế từng dòng nên đánh giá chính xác kiểu gen của cây mẹ.",
                "answer": true,
                "explain": "Đúng. Đánh giá con cháu từng cây giúp loại bỏ các biến dị do môi trường."
            },
            {
                "text": "Chọn lọc hỗn hợp gộp hạt của tất cả các cây ưu tú vào gieo chung nên kỹ thuật đơn giản, dễ thực hiện.",
                "answer": true,
                "explain": "Đúng. Phương pháp này không tốn nhiều công sức theo dõi riêng lẻ."
            },
            {
                "text": "Chọn lọc hỗn hợp luôn tạo ra giống có độ thuần chủng cao hơn chọn lọc cá thể.",
                "answer": false,
                "explain": "Sai. Chọn cá thể tạo dòng thuần chủng cao hơn nhiều so với chọn hỗn hợp."
            },
            {
                "text": "Phương pháp chọn lọc cá thể thường được ứng dụng để phục tráng các giống cây trồng đặc sản bản địa.",
                "answer": true,
                "explain": "Đúng. Quy trình 3 vụ phục tráng dòng cá thể giúp khôi phục độ thuần chủng giống quý."
            }
        ]
    },
    {
        "id": "b12-tf2",
        "context": "Kỹ thuật lai hữu tính ở cây trồng nông nghiệp:",
        "statements": [
            {
                "text": "Lai hữu tính nhằm kết hợp các tính trạng quý của các dạng bố mẹ khác nhau vào con lai.",
                "answer": true,
                "explain": "Đúng. Tạo biến dị tổ hợp phong phú cung cấp vật liệu chọn giống."
            },
            {
                "text": "Thao tác khử đực ở cây mẹ tự thụ phấn phải được thực hiện sau khi bao phấn đã vỡ tung phấn.",
                "answer": false,
                "explain": "Sai. Bắt buộc phải khử đực trước khi bao phấn chín tung để tránh tự thụ ngoài ý muốn."
            },
            {
                "text": "Bao cách ly hoa sau khi thụ phấn nhân tạo giúp ngăn ngừa hạt phấn tạp ngoài tự nhiên bay vào.",
                "answer": true,
                "explain": "Đúng. Bảo đảm độ chính xác của phép lai có chủ đích."
            },
            {
                "text": "Hiện tượng con lai xa bị bất thụ (không có hạt) là một trong những trở ngại lớn của lai khác loài.",
                "answer": true,
                "explain": "Đúng. Do bộ nhiễm sắc thể hai loài không tương đồng tiếp hợp giảm phân."
            }
        ]
    },
    {
        "id": "b12-tf3",
        "context": "Phương pháp gây đột biến và công nghệ chuyển gen:",
        "statements": [
            {
                "text": "Tác nhân gây đột biến gồm các tác nhân vật lý (tia X, gamma) và tác nhân hóa học (colchicine, EMS).",
                "answer": true,
                "explain": "Đúng. Các tác nhân này làm biến đổi cấu trúc DNA hoặc số lượng NST."
            },
            {
                "text": "Hóa chất colchicine làm tăng gấp đôi số lượng nhiễm sắc thể tạo thành thể đa bội.",
                "answer": true,
                "explain": "Đúng. Cản trở thoi phân bào hình thành tạo thể tứ bội (4n) hoặc tam bội (3n)."
            },
            {
                "text": "Mọi đột biến nhân tạo tạo ra đều là đột biến có lợi cho năng suất cây trồng.",
                "answer": false,
                "explain": "Sai. Đa số đột biến là có hại hoặc trung tính, tỷ lệ đột biến có lợi rất thấp."
            },
            {
                "text": "Cây trồng chuyển gen (GMO) cho phép đưa chính xác gen kháng sâu từ vi khuẩn vào tế bào thực vật.",
                "answer": true,
                "explain": "Đúng. Ví dụ gen Bt từ vi khuẩn Bacillus thuringiensis chuyển vào cây ngô, bông."
            }
        ]
    },
    {
        "id": "b12-tf4",
        "context": "Thực tiễn ứng dụng chọn tạo giống tại địa phương:",
        "statements": [
            {
                "text": "Dưa hấu tam bội (3n) là giống dưa hấu không hạt được tạo ra từ thành tựu đa bội hóa.",
                "answer": true,
                "explain": "Đúng. Lai giữa cây 4n với cây 2n tạo cây 3n không có khả năng sinh hạt hữu tính."
            },
            {
                "text": "Giống ngô biến đổi gen kháng sâu đục thân giúp nông dân giảm đáng kể số lần phun thuốc trừ sâu độc hại.",
                "answer": true,
                "explain": "Đúng. Cây tự tiết protein tinh thể Cry diệt sâu non khi sâu cắn phá thân lá."
            },
            {
                "text": "Công nghệ chỉnh sửa gen CRISPR/Cas9 cho phép can thiệp cắt sửa DNA chính xác đến từng nucleotide.",
                "answer": true,
                "explain": "Đúng. Đây là công cụ công nghệ sinh học đột phá hiện đại nhất hiện nay."
            },
            {
                "text": "Nông dân không cần tuân thủ bất kỳ quy định kiểm dịch nào khi nhập khẩu giống biến đổi gen từ nước ngoài.",
                "answer": false,
                "explain": "Sai. Phải tuân thủ nghiêm ngặt Luật Đa dạng sinh học và các quy chế khảo nghiệm an toàn sinh học."
            }
        ]
    }
  ],
  shortAnswer: [
    {
        "id": "b12-sa1",
        "q": "Phương pháp chọn lọc giống bằng cách chọn riêng từng cây ưu tú, thu hoạch hạt riêng từng cây rồi gieo thành từng dòng con cháu để so sánh được gọi là gì?",
        "unit": "Tên phương pháp",
        "correctAnswers": [
            "Chọn lọc cá thể",
            "chọn lọc cá thể"
        ],
        "explain": "Chọn lọc cá thể cho phép đánh giá chính xác tiềm năng di truyền của từng cá thể mẹ."
    },
    {
        "id": "b12-sa2",
        "q": "Hóa chất thường dùng để xử lý đỉnh sinh trưởng nhằm ức chế sự hình thành thoi vô sắc, tạo ra thể đa bội (như dưa hấu không hạt) có tên là gì?",
        "unit": "Tên hóa chất",
        "correctAnswers": [
            "Colchicine",
            "colchicine",
            "Kosemkin"
        ],
        "explain": "Colchicine là hóa chất kinh điển gây đa bội hóa nhiễm sắc thể trong chọn giống thực vật."
    },
    {
        "id": "b12-sa3",
        "q": "Tên viết tắt của công cụ chỉnh sửa gen hiện đại được ví như 'chiếc kéo sinh học phân tử' chính xác cao là gì?",
        "unit": "Tên viết tắt",
        "correctAnswers": [
            "CRISPR",
            "CRISPR/Cas9",
            "crispr",
            "crispr/cas9"
        ],
        "explain": "Hệ thống CRISPR/Cas9 là bước đột phá đoạt giải Nobel về chỉnh sửa hệ gen sinh vật."
    },
    {
        "id": "b12-sa4",
        "q": "Cây dưa hấu không hạt thương phẩm có bộ nhiễm sắc thể mang số lượng là thể đa bội mấy n?",
        "unit": "Thể đa bội",
        "correctAnswers": [
            "3n",
            "Tam bội",
            "tam bội",
            "Thể tam bội",
            "3 n"
        ],
        "explain": "Dưa hấu không hạt là thể tam bội (3n) được tạo ra từ phép lai giữa cây 4n và cây 2n."
    }
  ],
  essay: [
    {
        "id": "bai-12-essay1",
        "q": "So sánh ưu điểm và nhược điểm của phương pháp chọn lọc cá thể và phương pháp chọn lọc hỗn hợp.",
        "answer": "1. Chọn lọc hỗn hợp:\n- Ưu điểm: Kỹ thuật đơn giản, dễ thực hiện, ít tốn kém thời gian và công sức, không đòi hỏi diện tích ruộng lớn, nông dân có thể tự làm.\n- Nhược điểm: Chỉ dựa vào kiểu hình bên ngoài, không kiểm soát được kiểu gen do trộn lẫn hạt giống; độ thuần chủng không cao, hiệu quả chọn giống chậm.\n2. Chọn lọc cá thể:\n- Ưu điểm: Theo dõi riêng rẽ hậu thế từng dòng, loại bỏ được các biến dị ngoại cảnh, đánh giá chính xác kiểu gen; tạo ra giống mới hoặc dòng thuần chủng nhanh chóng và đồng đều cao.\n- Nhược điểm: Kỹ thuật phức tạp, đòi hỏi diện tích đất bố trí các ô thí nghiệm riêng biệt, tốn nhiều công sức theo dõi và chi phí cao hơn."
    },
    {
        "id": "bai-12-essay2",
        "q": "Trình bày các bước cơ bản trong quy trình lai hữu tính nhân tạo ở cây trồng tự thụ phấn (ví dụ cây lúa).",
        "answer": "1. Chọn cây bố mẹ: Chọn dòng bố và dòng mẹ mang các tính trạng quý cần tổ hợp (ví dụ mẹ kháng sâu x bố thơm ngon).\n2. Khử đực ở cây mẹ: Trước khi bao phấn của hoa mẹ chín (thường sáng sớm), dùng kéo cắt bớt đầu vỏ trấu, hút sạch hoặc gắp bỏ 6 bao phấn đực ra ngoài mà không làm tổn thương đầu nhụy cái.\n3. Bao cách ly hoa mẹ: Dùng túi giấy chuyên dụng chụp kín bông lúa mẹ đã khử đực để ngăn hạt phấn lạ xâm nhập.\n4. Thụ phấn nhân tạo: Khi nhụy cây mẹ chín, thu phấn từ cây bố rắc đều lên đầu nhụy hoa mẹ.\n5. Bao cách ly và gắn thẻ theo dõi: Bao bông lúa lại, treo nhãn ghi rõ tên công thức lai (mẹ x bố), ngày lai, người thực hiện; chăm sóc thu hoạch hạt lai F1."
    }
  ]
};

export default EXTRA_BAI_12;
