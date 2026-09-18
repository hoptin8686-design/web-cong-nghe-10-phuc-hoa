import type { LessonTheory } from "@/lib/types";

// Tóm tắt lý thuyết trọng tâm: Bài 1. Giới thiệu về trồng trọt
export const THEORY_BAI_01: LessonTheory = {
  intro: "Tổng quan về vai trò của trồng trọt đối với đời sống, kinh tế, xã hội; triển vọng phát triển nông nghiệp hiện đại và các nhóm cây trồng phổ biến.",
  minutes: 15,
  sections: [
    {
        "id": "sec-1",
        "emoji": "🌱",
        "heading": "Vai trò của trồng trọt",
        "blocks": [
            {
                "kind": "cards",
                "tone": "leaf",
                "items": [
                    {
                        "emoji": "💡",
                        "title": "Điểm cốt lõi",
                        "text": "Cung cấp lương thực, thực phẩm cho con người, thức ăn cho chăn nuôi, nguyên liệu cho công nghiệp chế biến và nông sản xuất khẩu thu ngoại tệ."
                    },
                    {
                        "emoji": "🚜",
                        "title": "Vận dụng thực tế",
                        "text": "Ứng dụng trực tiếp vào sản xuất nông hộ và trang trại công nghệ cao tại địa phương."
                    }
                ]
            },
            {
                "kind": "note",
                "text": "Ghi nhớ quan trọng: Nắm vững nguyên lý và tuân thủ các quy chuẩn an toàn VietGAP/GlobalGAP."
            }
        ]
    },
    {
        "id": "sec-2",
        "emoji": "⚙️",
        "heading": "Triển vọng của ngành trồng trọt",
        "blocks": [
            {
                "kind": "cards",
                "tone": "sea",
                "items": [
                    {
                        "emoji": "💡",
                        "title": "Điểm cốt lõi",
                        "text": "Phát triển theo hướng ứng dụng công nghệ cao, nông nghiệp hữu cơ, an toàn sinh học, nông nghiệp số và thích ứng biến đổi khí hậu."
                    },
                    {
                        "emoji": "🚜",
                        "title": "Vận dụng thực tế",
                        "text": "Ứng dụng trực tiếp vào sản xuất nông hộ và trang trại công nghệ cao tại địa phương."
                    }
                ]
            },
            {
                "kind": "note",
                "text": "Ghi nhớ quan trọng: Nắm vững nguyên lý và tuân thủ các quy chuẩn an toàn VietGAP/GlobalGAP."
            }
        ]
    },
    {
        "id": "sec-3",
        "emoji": "🌟",
        "heading": "Phân loại các nhóm cây trồng",
        "blocks": [
            {
                "kind": "cards",
                "tone": "gold",
                "items": [
                    {
                        "emoji": "💡",
                        "title": "Điểm cốt lõi",
                        "text": "Cây lương thực (lúa, ngô, khoai), cây thực phẩm (rau, đậu), cây ăn quả (cam, xoài, bưởi), cây công nghiệp (chè, cà phê, cao su), cây lấy gỗ và cây cảnh."
                    },
                    {
                        "emoji": "🚜",
                        "title": "Vận dụng thực tế",
                        "text": "Ứng dụng trực tiếp vào sản xuất nông hộ và trang trại công nghệ cao tại địa phương."
                    }
                ]
            },
            {
                "kind": "note",
                "text": "Ghi nhớ quan trọng: Nắm vững nguyên lý và tuân thủ các quy chuẩn an toàn VietGAP/GlobalGAP."
            }
        ]
    }
],
  summary: [
    "Hiểu rõ bản chất khoa học và kỹ thuật chuyên môn của bài học.",
    "Nắm chắc các yếu tố ảnh hưởng trực tiếp đến sinh trưởng của cây trồng.",
    "Biết vận dụng vào thực tế canh tác cây trồng địa phương an toàn và hiệu quả."
  ]
};

export default THEORY_BAI_01;
