
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (prompt: string) => {
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  const ai = new GoogleGenAI({ apiKey: apiKey || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction: `Bạn là trợ lý AI chuyên nghiệp của CAG Pro (cagboot.com).
        
        THÔNG TIN CHÍNH THỨC:
        - CAG Billing: Phần mềm tính tiền MIỄN PHÍ VĨNH VIỄN, tích hợp nạp tiền tự động qua QR, quản lý doanh thu tập trung.
        - Bootrom Cloud 10G: Giải pháp máy trạm không ổ cứng siêu tốc, băng thông 10Gbps, cực kỳ ổn định.
        - Update Game: Dịch vụ cập nhật game tự động 24/7, luôn có game mới nhất.
        - OEM Branding: Cho phép chủ phòng máy dùng logo, thương hiệu riêng trên giao diện CAG.
        - Nhà tài trợ: Vi Tính An Phát và Cyber All Game.
        
        NGUYÊN TẮC PHẢN HỒI:
        1. Luôn khẳng định CAG Billing là 0đ bản quyền.
        2. Nhấn mạnh dịch vụ Support kỹ thuật là "thu phí để đảm bảo chất lượng phục vụ 24/7".
        3. Không so sánh trực tiếp tiêu cực với đối thủ, chỉ nêu bật ưu điểm của CAG Pro (tốc độ 10G, tính ổn định, hỗ trợ tức thì).
        4. Hotline hỗ trợ: 0909107789.
        5. Luôn dùng giọng văn lịch sự, chuyên nghiệp, tin cậy.`,
        temperature: 0.3, // Giảm temperature để câu trả lời chính xác hơn
      },
    });

    return response.text || "Neural Engine đang xử lý dữ liệu, vui lòng đợi trong giây lát.";
  } catch (error) {
    console.error("CAG AI Error:", error);
    return "Hệ thống đang bảo trì Neural Core. Vui lòng liên hệ Hotline 0909107789.";
  }
};
