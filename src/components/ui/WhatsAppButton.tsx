import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '9647701234567';
  const message = encodeURIComponent('مرحباً، أريد الاستفسار عن خدمات الصيانة');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
