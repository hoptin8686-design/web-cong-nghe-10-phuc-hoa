export default function Diagram({ name }: { name: string }) {
  if (name === "crop-cycle" || name === "data-process") {
    return (
      <div className="my-4 flex flex-col items-center justify-center rounded-2xl border border-leaf/30 bg-[#07131b] p-6 shadow-card">
        <h4 className="mb-4 font-display text-sm font-bold text-leaf-deep">
          🌱 Quy trình Chu kỳ Sinh trưởng và Phát triển của Cây trồng
        </h4>
        <svg viewBox="0 0 760 200" className="w-full max-w-2xl text-star">
          <defs>
            <linearGradient id="grad-leaf1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E9F6E" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="grad-sea1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D7C86" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
            <linearGradient id="grad-gold1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EFA31D" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>

          {/* Khối 1: Hạt nảy mầm */}
          <rect x="20" y="45" width="160" height="110" rx="16" fill="#102631" stroke="#0E9F6E" strokeWidth="2" />
          <circle cx="100" cy="80" r="20" fill="url(#grad-leaf1)" />
          <text x="100" y="87" textAnchor="middle" fill="#fff" fontSize="18">🌰</text>
          <text x="100" y="118" textAnchor="middle" fill="#EAF3F5" fontWeight="bold" fontSize="14">1. Hạt nảy mầm</text>
          <text x="100" y="138" textAnchor="middle" fill="#94B3BC" fontSize="11">Đủ ẩm, nhiệt, oxy</text>

          {/* Mũi tên 1 -> 2 */}
          <path d="M 185 100 L 230 100" stroke="#6EE7B7" strokeWidth="3" strokeDasharray="5 3" />
          <polygon points="235,100 225,95 225,105" fill="#6EE7B7" />

          {/* Khối 2: Sinh trưởng sinh dưỡng */}
          <rect x="240" y="35" width="180" height="130" rx="16" fill="#102631" stroke="#0D7C86" strokeWidth="2" />
          <circle cx="330" cy="75" r="22" fill="url(#grad-sea1)" />
          <text x="330" y="83" textAnchor="middle" fill="#fff" fontSize="20">🌿</text>
          <text x="330" y="115" textAnchor="middle" fill="#EAF3F5" fontWeight="bold" fontSize="15">2. Thân lá & Rễ</text>
          <text x="330" y="135" textAnchor="middle" fill="#5EEAD4" fontSize="11">Quang hợp mạnh</text>
          <text x="330" y="150" textAnchor="middle" fill="#94B3BC" fontSize="10">Cần nhiều Đạm (N)</text>

          {/* Mũi tên 2 -> 3 */}
          <path d="M 425 100 L 470 100" stroke="#FDBA74" strokeWidth="3" strokeDasharray="5 3" />
          <polygon points="475,100 465,95 465,105" fill="#FDBA74" />

          {/* Khối 3: Ra hoa kết quả */}
          <rect x="475" y="45" width="160" height="110" rx="16" fill="#102631" stroke="#EFA31D" strokeWidth="2" />
          <circle cx="555" cy="80" r="20" fill="url(#grad-gold1)" />
          <text x="555" y="87" textAnchor="middle" fill="#fff" fontSize="18">🌸</text>
          <text x="555" y="118" textAnchor="middle" fill="#EAF3F5" fontWeight="bold" fontSize="14">3. Ra hoa kết quả</text>
          <text x="555" y="138" textAnchor="middle" fill="#FCD34D" fontSize="11">Cần Lân (P) & Kali (K)</text>

          {/* Mũi tên 3 -> 4 */}
          <path d="M 640 100 L 675 100" stroke="#EFA31D" strokeWidth="3" strokeDasharray="5 3" />
          <polygon points="680,100 670,95 670,105" fill="#EFA31D" />

          <text x="715" y="95" textAnchor="middle" fontSize="22">🌾</text>
          <text x="715" y="125" textAnchor="middle" fill="#EAF3F5" fontWeight="bold" fontSize="11">Thu hoạch</text>
        </svg>
      </div>
    );
  }

  if (name === "npk-chart" || name === "data-vs-info") {
    return (
      <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-leaf/40 bg-void-card p-4 text-center shadow-card">
          <span className="text-3xl">🍃</span>
          <h4 className="mt-2 font-display font-bold text-leaf-deep">Đạm (Nitơ - N)</h4>
          <p className="mt-1 font-mono text-xs text-star-soft">"Thân mập - Lá xanh"</p>
          <p className="mt-2 text-xs leading-relaxed text-star">
            Thúc đẩy phát triển cành, chồi, lá và diệp lục tố. Thiếu đạm lá vàng còi cọc; thừa đạm cây vống dễ đổ ngã.
          </p>
        </div>
        <div className="rounded-xl border border-coral/40 bg-void-card p-4 text-center shadow-card">
          <span className="text-3xl">🌱</span>
          <h4 className="mt-2 font-display font-bold text-coral">Lân (Photpho - P)</h4>
          <p className="mt-1 font-mono text-xs text-star-soft">"Rễ khỏe - Đậu hoa"</p>
          <p className="mt-2 text-xs leading-relaxed text-star">
            Kích thích bộ rễ ăn sâu lan rộng, phân hoá mầm hoa, tăng tỷ lệ đậu quả và giúp cây chống rét, chống hạn.
          </p>
        </div>
        <div className="rounded-xl border border-gold/40 bg-void-card p-4 text-center shadow-card">
          <span className="text-3xl">🍎</span>
          <h4 className="mt-2 font-display font-bold text-gold-deep">Kali (Potassium - K)</h4>
          <p className="mt-1 font-mono text-xs text-star-soft">"Cứng cây - Ngọt quả"</p>
          <p className="mt-2 text-xs leading-relaxed text-star">
            Tăng vận chuyển tinh bột, tăng độ đường cho quả, làm dày vách tế bào giúp cứng cây chống đổ và sâu bệnh.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
