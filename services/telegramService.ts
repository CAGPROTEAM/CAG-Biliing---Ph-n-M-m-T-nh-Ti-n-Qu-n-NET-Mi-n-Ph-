
export interface RegistrationData {
  fullName: string;
  phone: string;
  pcCount: string;
  area: string;
  currentSoftware: string;
  issues: string;
}

export interface OEMRegistrationData {
  brandName: string;
  contactName: string;
  phone: string;
  scale: string;
  message: string;
}

// Cấu hình Bot Telegram - Sử dụng biến môi trường để bảo mật
// LƯU Ý: Không điền trực tiếp Token vào đây khi đưa lên GitHub
const TELEGRAM_BOT_TOKEN = typeof process !== 'undefined' ? process.env.TELEGRAM_BOT_TOKEN : ''; 
const TELEGRAM_CHAT_ID = typeof process !== 'undefined' ? process.env.TELEGRAM_CHAT_ID : ''; 

export const sendToTelegram = async (data: RegistrationData) => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("LỖI CẤU HÌNH: Thiếu TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID trong biến môi trường.");
    return false;
  }

  const message = `
🚀 **THÔNG BÁO: KHÁCH ĐĂNG KÝ CAG PRO** 🚀
━━━━━━━━━━━━━━━━━━━━
👤 **Chủ sở hữu:** ${data.fullName.toUpperCase()}
📞 **Liên hệ:** ${data.phone}
🖥️ **Quy mô:** ${data.pcCount} máy
📍 **Khu vực:** ${data.area}
━━━━━━━━━━━━━━━━━━━━
💾 **Phần mềm cũ:** ${data.currentSoftware || 'Cài đặt mới'}
📝 **Yêu cầu hỗ trợ:** 
_${data.issues || 'Cần tư vấn giải pháp tối ưu chi phí.'}_
━━━━━━━━━━━━━━━━━━━━
🌐 *Hệ sinh thái iCafe 4.0*
⏰ *Thời gian:* ${new Date().toLocaleString('vi-VN')}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
    return response.ok;
  } catch (error) {
    console.error('Telegram Signal Error:', error);
    return false;
  }
};

export const sendOEMToTelegram = async (data: OEMRegistrationData) => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("LỖI CẤU HÌNH: Thiếu TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID.");
    return false;
  }

  const message = `
💎 **HỢP TÁC CHIẾN LƯỢC OEM PARTNER** 💎
━━━━━━━━━━━━━━━━━━━━
👤 **Họ tên đối tác:** ${data.contactName.toUpperCase()}
📞 **Số điện thoại:** ${data.phone}
🏢 **Thương hiệu cần OEM:** ${data.brandName.toUpperCase()}
📊 **SL phòng máy đang có:** ${data.scale}
━━━━━━━━━━━━━━━━━━━━
💬 **Các yêu cầu khác:** 
_${data.message || 'Không có ghi chú thêm.'}_
━━━━━━━━━━━━━━━━━━━━
🚀 *Yêu cầu VIP - Xử lý ngay*
⏰ *Thời gian:* ${new Date().toLocaleString('vi-VN')}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
    return response.ok;
  } catch (error) {
    console.error('Telegram OEM Error:', error);
    return false;
  }
};
