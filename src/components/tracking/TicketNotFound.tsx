import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight, MessageCircle } from 'lucide-react';

interface TicketNotFoundProps {
  ticketCode: string;
}

export default function TicketNotFound({ ticketCode }: TicketNotFoundProps) {
  return (
    <div className="text-center py-12">
      {/* Icon */}
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
        <AlertCircle className="w-10 h-10 text-destructive" />
      </div>

      {/* Message */}
      <h2 className="text-2xl font-bold text-foreground mb-3">
        لم يتم العثور على التذكرة
      </h2>
      <p className="text-muted-foreground mb-2">
        لا توجد تذكرة بالرقم: <span className="font-mono font-bold" dir="ltr">{ticketCode}</span>
      </p>

      {/* Suggestions */}
      <div className="bg-secondary/50 rounded-xl p-6 max-w-md mx-auto mt-8 text-right">
        <h3 className="font-semibold text-foreground mb-3">اقتراحات:</h3>
        <ul className="space-y-2 text-muted-foreground text-sm">
          <li>• تأكد من كتابة رقم التذكرة بشكل صحيح</li>
          <li>• تحقق من الوصل المطبوع الذي استلمته</li>
          <li>• جرّب مسح رمز QR بدلاً من الإدخال اليدوي</li>
          <li>• تواصل معنا إذا استمرت المشكلة</li>
        </ul>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <Link
          to="/تتبع"
          className="inline-flex items-center gap-2 btn-premium"
        >
          <ArrowRight className="w-5 h-5" />
          المحاولة مرة أخرى
        </Link>

        <a
          href="https://wa.me/9647701234567"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn-outline-premium"
        >
          <MessageCircle className="w-5 h-5" />
          تواصل معنا
        </a>
      </div>
    </div>
  );
}
