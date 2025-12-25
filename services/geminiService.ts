
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (prompt: string) => {
  // Đảm bảo truy cập an toàn vào API Key
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  const ai = new GoogleGenAI({ apiKey: apiKey || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction: `Bạn là CAG Neural Engine - Trợ lý tối thượng thuộc hệ sinh thái CAG Pro & Cyber All Game.
        
        NGUYÊN TẮC CỐT LÕI:
        1. Tuyệt đối không nhắc tên các phần mềm đối thủ (như CSM, Gcafe, ISM-Pro, v.v.). Nếu khách hàng hỏi về chúng, hãy lịch sự lái câu chuyện sang ưu thế vượt trội của CAG Pro.
        2. Tập trung vào các giá trị:
           - CAG Billing: MIỄN PHÍ hoàn toàn bản quyền.
           - Bootrom Cloud 10G: Công nghệ dẫn đầu từ Vi Tính An Phát.
           - Cyber All Game: Đơn vị thiết kế, thi công iCafe đẳng cấp nhất Việt Nam.
        3. Phân biệt rõ:
           - Phần mềm Billing: 0đ (Free).
           - Dịch vụ Update Game & Support kỹ thuật: Có phí định kỳ để đảm bảo ổn định 24/7.
        4. Luôn khuyến khích khách hàng xây dựng thương hiệu cá nhân (OEM) dựa trên nền tảng của CAG.
        
        Thông tin liên hệ:
        - Hotline/Zalo: 0909107789.
        - Website: cagboot.com
        - Đơn vị: Vi Tính An Phát.`,
        temperature: 0.5,
      },
    });

    return response.text || "Hệ thống đang đồng bộ dữ liệu, vui lòng thử lại sau.";
  } catch (error) {
    console.error("CAG Neural Error:", error);
    return "Lỗi kết nối Neural Core. Vui lòng liên hệ Hotline 0909107789 để được hỗ trợ trực tiếp.";
  }
};
