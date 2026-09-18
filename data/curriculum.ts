import type { Topic } from "@/lib/types";

// Cấu trúc SGK Công nghệ 10 — Công nghệ Trồng trọt (Bộ Kết nối tri thức với cuộc sống).
// 28 bài học chia làm 8 chương chuẩn, bám sát Kế hoạch giáo dục Trường THPT Phục Hòa (Cao Bằng).

export const CURRICULUM: Topic[] = [
  {
    id: "chuong-1",
    name: "Chương I: Giới thiệu chung về trồng trọt",
    emoji: "🌱",
    lessons: [
      {
        id: "bai-01",
        title: "Bài 1. Giới thiệu về trồng trọt",
        bookPages: "Trang 6–10",
        available: true,
        highlight: "Vai trò, triển vọng và các nhóm cây trồng phổ biến",
      },
      {
        id: "bai-02",
        title: "Bài 2. Cây trồng và các yếu tố chính trong trồng trọt",
        bookPages: "Trang 11–16",
        available: true,
        highlight: "Ánh sáng, nhiệt độ, nước, đất và dinh dưỡng khoáng",
      },
    ],
  },
  {
    id: "chuong-2",
    name: "Chương II: Đất trồng",
    emoji: "🏞️",
    lessons: [
      {
        id: "bai-03",
        title: "Bài 3. Giới thiệu về đất trồng",
        bookPages: "Trang 17–22",
        available: true,
        highlight: "Thành phần, tính chất lý hoá và độ phì nhiêu của đất",
      },
      {
        id: "bai-04",
        title: "Bài 4. Sử dụng, cải tạo và bảo vệ đất trồng",
        bookPages: "Trang 23–27",
        available: true,
        highlight: "Biện pháp cải tạo đất chua, đất mặn, đất xói mòn trơ sỏi đá",
      },
      {
        id: "bai-05",
        title: "Bài 5. Giá thể trồng cây",
        bookPages: "Trang 28–33",
        available: true,
        highlight: "Giá thể hữu cơ, than bùn, mùn cưa, xơ dừa, perlite, vermiculite",
      },
      {
        id: "bai-06",
        title: "Bài 6. Thực hành: Xác định độ chua và độ mặn của đất",
        bookPages: "Trang 34–37",
        available: true,
        highlight: "Phương pháp đo pH và độ dẫn điện EC của dung dịch đất",
      },
    ],
  },
  {
    id: "chuong-3",
    name: "Chương III: Phân bón",
    emoji: "🧪",
    lessons: [
      {
        id: "bai-07",
        title: "Bài 7. Giới thiệu về phân bón",
        bookPages: "Trang 38–43",
        available: true,
        highlight: "Phân hoá học, phân hữu cơ, phân vi sinh và vai trò của N-P-K",
      },
      {
        id: "bai-08",
        title: "Bài 8. Sử dụng và bảo quản phân bón",
        bookPages: "Trang 44–48",
        available: true,
        highlight: "Nguyên tắc bón phân 4 đúng: Đúng loại, đúng liều, đúng lúc, đúng cách",
      },
      {
        id: "bai-09",
        title: "Bài 9. Sử dụng công nghệ vi sinh trong sản xuất phân bón",
        bookPages: "Trang 49–53",
        available: true,
        highlight: "Vi sinh vật cố định đạm, chuyển hoá lân và phân giải xenlulozo",
      },
      {
        id: "bai-10",
        title: "Bài 10. Thực hành: Nhận biết một số loại phân bón hoá học",
        bookPages: "Trang 54–57",
        available: true,
        highlight: "Quy trình nhận biết phân đạm, lân, kali bằng cảm quan và thử nhiệt",
      },
    ],
  },
  {
    id: "chuong-4",
    name: "Chương IV: Công nghệ giống cây trồng",
    emoji: "🌾",
    lessons: [
      {
        id: "bai-11",
        title: "Bài 11. Khái niệm và vai trò của giống cây trồng",
        bookPages: "Trang 58–62",
        available: true,
        highlight: "Tiêu chí của giống tốt: Năng suất, chất lượng, chống chịu sâu bệnh",
      },
      {
        id: "bai-12",
        title: "Bài 12. Một số phương pháp chọn, tạo giống cây trồng",
        bookPages: "Trang 63–68",
        available: true,
        highlight: "Chọn lọc cá thể, lai hữu tính, đột biến, công nghệ chuyển gen",
      },
      {
        id: "bai-13",
        title: "Bài 13. Nhân giống cây trồng",
        bookPages: "Trang 69–75",
        available: true,
        highlight: "Nhân giống vô tính: Giâm cành, chiết cành, ghép cành và nuôi cấy mô",
      },
      {
        id: "bai-14",
        title: "Bài 14. Thực hành: Nhân giống cây ăn quả bằng phương pháp ghép",
        bookPages: "Trang 76–80",
        available: true,
        highlight: "Kĩ thuật ghép nêm, ghép mắt chữ T và ghép áp cành",
      },
    ],
  },
  {
    id: "chuong-5",
    name: "Chương V: Phòng trừ sâu, bệnh hại cây trồng",
    emoji: "🐛",
    lessons: [
      {
        id: "bai-15",
        title: "Bài 15. Sâu, bệnh hại cây trồng và ý nghĩa của việc phòng trừ",
        bookPages: "Trang 81–86",
        available: true,
        highlight: "Vòng đời sâu hại, nguyên nhân bệnh do nấm, vi khuẩn, virus",
      },
      {
        id: "bai-16",
        title: "Bài 16. Một số sâu hại cây trồng thường gặp và biện pháp phòng trừ",
        bookPages: "Trang 87–93",
        available: true,
        highlight: "Sâu cuốn lá, rầy nâu, sâu đục thân, sâu tơ và bọ trĩ",
      },
      {
        id: "bai-17",
        title: "Bài 17. Một số bệnh hại cây trồng thường gặp và biện pháp phòng trừ",
        bookPages: "Trang 94–99",
        available: true,
        highlight: "Bệnh đạo ôn lúa, bệnh gỉ sắt, bệnh sương mai, bệnh xoăn lá",
      },
      {
        id: "bai-18",
        title: "Bài 18. Ứng dụng công nghệ vi sinh trong phòng trừ sâu, bệnh hại",
        bookPages: "Trang 100–105",
        available: true,
        highlight: "Chế phẩm nấm đối kháng Trichoderma, vi khuẩn Bt, nấm xanh, nấm trắng",
      },
    ],
  },
  {
    id: "chuong-6",
    name: "Chương VI: Kĩ thuật trồng trọt",
    emoji: "🚜",
    lessons: [
      {
        id: "bai-19",
        title: "Bài 19. Quy trình trồng trọt và cơ giới hoá trong trồng trọt",
        bookPages: "Trang 106–112",
        available: true,
        highlight: "Làm đất, gieo trồng, chăm sóc và máy móc nông nghiệp hiện đại",
      },
      {
        id: "bai-20",
        title: "Bài 20. Công nghệ cao trong thu hoạch và bảo quản sản phẩm trồng trọt",
        bookPages: "Trang 113–118",
        available: true,
        highlight: "Thu hoạch cơ giới, kho lạnh, công nghệ khí quyển điều chỉnh CA, chiếu xạ",
      },
      {
        id: "bai-21",
        title: "Bài 21. Chế biến sản phẩm trồng trọt",
        bookPages: "Trang 119–124",
        available: true,
        highlight: "Sấy thăng hoa, đóng hộp, lên men vi sinh, ép nước quả",
      },
      {
        id: "bai-22",
        title: "Bài 22. Dự án trồng hoa trong chậu",
        bookPages: "Trang 125–129",
        available: true,
        highlight: "Thiết kế kế hoạch, chuẩn bị chậu, đất dinh dưỡng và chăm sóc hoa kiểng",
      },
    ],
  },
  {
    id: "chuong-7",
    name: "Chương VII: Trồng trọt công nghệ cao",
    emoji: "🛰️",
    lessons: [
      {
        id: "bai-23",
        title: "Bài 23. Giới thiệu về trồng trọt công nghệ cao",
        bookPages: "Trang 130–135",
        available: true,
        highlight: "Nhà màng, nhà kính thông minh, cảm biến IoT, hệ thống tưới nhỏ giọt tự động",
      },
      {
        id: "bai-24",
        title: "Bài 24. Một số công nghệ cao trong trồng trọt",
        bookPages: "Trang 136–141",
        available: true,
        highlight: "Trí tuệ nhân tạo (AI), máy bay không người lái (Drone), GPS định vị đồng ruộng",
      },
      {
        id: "bai-25",
        title: "Bài 25. Công nghệ trồng cây không dùng đất",
        bookPages: "Trang 142–148",
        available: true,
        highlight: "Thuỷ canh tĩnh, thuỷ canh hồi lưu NFT, khí canh (Aeroponics) và tưới nhỏ giọt trên giá thể",
      },
    ],
  },
  {
    id: "chuong-8",
    name: "Chương VIII: Bảo vệ môi trường trong trồng trọt",
    emoji: "🌍",
    lessons: [
      {
        id: "bai-26",
        title: "Bài 26. Sự cần thiết phải bảo vệ môi trường trong trồng trọt",
        bookPages: "Trang 149–153",
        available: true,
        highlight: "Tác hại lạm dụng hoá chất bảo vệ thực vật, ô nhiễm đất và nguồn nước",
      },
      {
        id: "bai-27",
        title: "Bài 27. Ứng dụng công nghệ vi sinh trong bảo vệ môi trường và xử lí chất thải",
        bookPages: "Trang 154–159",
        available: true,
        highlight: "Ủ phân compost từ phế phụ phẩm nông nghiệp, chế phẩm EM xử lí mùi hôi",
      },
      {
        id: "bai-28",
        title: "Bài 28. Thực hành: Sử dụng rơm, rạ để trồng nấm rơm",
        bookPages: "Trang 160–164",
        available: true,
        highlight: "Tận dụng rơm rạ sau thu hoạch lúa, quy trình ủ mô và chăm sóc nấm rơm",
      },
    ],
  },
];

export function getLessonById(lessonId: string) {
  for (const topic of CURRICULUM) {
    const lesson = topic.lessons.find((l) => l.id === lessonId);
    if (lesson) return { lesson, topic };
  }
  return null;
}
