
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

// Cấu hình Bot Telegram chính thức
const TELEGRAM_BOT_TOKEN = '8539902190:AAG4M8q6C4wOve5G0HalriIt6ovi0Vn5vho'; 
const TELEGRAM_CHAT_ID = '2050706796'; 

export const sendToTelegram = async (data: RegistrationData) => {
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
  const message = `
💎 **HỢP TÁC CHIẾN LƯỢC OEM PARTNER** 💎
━━━━━━━━━━━━━━━━━━━━
🏢 **Thương hiệu:** ${data.brandName.toUpperCase()}
👤 **Đại diện:** ${data.contactName}
📞 **Số điện thoại:** ${data.phone}
📊 **Quy mô chuỗi:** ${data.scale}
━━━━━━━━━━━━━━━━━━━━
💬 **Lời nhắn đối tác:** 
_${data.message || 'Muốn xây dựng thương hiệu iCafe riêng với công nghệ CAG.'}_
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
