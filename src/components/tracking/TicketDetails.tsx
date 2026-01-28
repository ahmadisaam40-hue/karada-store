import { Ticket, maskName } from '@/types/ticket';
import StatusBadge from './StatusBadge';
import StatusTimeline from './StatusTimeline';
import { 
  Calendar, 
  Smartphone, 
  FileText, 
  User, 
  MessageCircle,
  Clock,
  DollarSign
} from 'lucide-react';

interface TicketDetailsProps {
  ticket: Ticket;
}

export default function TicketDetails({ ticket }: TicketDetailsProps) {
  const isReady = ticket.status === 'ready';

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-IQ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-6">
      {/* Status Badge - Large */}
      <div className="text-center">
        <StatusBadge status={ticket.status} large />
      </div>

      {/* Ready for Pickup CTA */}
      {isReady && (
        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            🎉 جهازك جاهز للاستلام!
          </h3>
          <p className="text-muted-foreground mb-4">
            يمكنك الحضور لاستلام جهازك أو التواصل معنا لترتيب التوصيل
          </p>
          <a
            href={`https://wa.me/9647701234567?text=${encodeURIComponent(`مرحباً، أريد استلام جهازي. رقم التذكرة: ${ticket.ticketCode}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-premium"
          >
            <MessageCircle className="w-5 h-5" />
            تواصل للاستلام
          </a>
        </div>
      )}

      {/* Timeline */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-bold text-foreground mb-4">مسار التذكرة</h3>
        <StatusTimeline currentStatus={ticket.status} />
      </div>

      {/* Ticket Info */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h3 className="font-bold text-foreground mb-6">تفاصيل التذكرة</h3>
        
        <div className="grid gap-4">
          {/* Ticket Code */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">رقم التذكرة</div>
              <div className="font-bold text-foreground font-mono" dir="ltr">
                {ticket.ticketCode}
              </div>
            </div>
          </div>

          {/* Customer Name (Masked) */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <User className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">اسم العميل</div>
              <div className="font-semibold text-foreground">
                {maskName(ticket.customerName)}
              </div>
            </div>
          </div>

          {/* Device Info */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">الجهاز</div>
              <div className="font-semibold text-foreground">
                {ticket.deviceBrand} {ticket.deviceModel}
              </div>
              <div className="text-sm text-muted-foreground">{ticket.deviceType}</div>
            </div>
          </div>

          {/* Problem Description */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground">وصف المشكلة</div>
              <div className="text-foreground">{ticket.problemDescription}</div>
            </div>
          </div>

          {/* Received Date */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">تاريخ الاستلام</div>
              <div className="font-semibold text-foreground">
                {formatDate(ticket.receivedAt)}
              </div>
            </div>
          </div>

          {/* Estimated Completion */}
          {ticket.estimatedCompletion && (
            <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">الموعد المتوقع</div>
                <div className="font-semibold text-foreground">
                  {formatDate(ticket.estimatedCompletion)}
                </div>
              </div>
            </div>
          )}

          {/* Price (if available and status is ready or delivered) */}
          {ticket.price && (ticket.status === 'ready' || ticket.status === 'delivered') && (
            <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">التكلفة</div>
                <div className="font-bold text-foreground text-lg">
                  {ticket.price.toLocaleString('ar-IQ')} د.ع
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
