export type TicketStatus = 
  | 'new' 
  | 'in_progress' 
  | 'ready' 
  | 'delivered' 
  | 'archived' 
  | 'cancelled';

export interface Ticket {
  ticketCode: string;
  status: TicketStatus;
  customerName: string;
  customerPhone?: string;
  deviceType: string;
  deviceBrand: string;
  deviceModel: string;
  problemDescription: string;
  receivedAt: string;
  updatedAt: string;
  estimatedCompletion?: string;
  notes?: string;
  price?: number;
}

export const statusLabels: Record<TicketStatus, string> = {
  new: 'جديد',
  in_progress: 'قيد الصيانة',
  ready: 'جاهز للاستلام',
  delivered: 'تم التسليم',
  archived: 'مؤرشف',
  cancelled: 'ملغي',
};

export const statusOrder: TicketStatus[] = [
  'new',
  'in_progress',
  'ready',
  'delivered',
];

export function maskName(name: string): string {
  const parts = name.split(' ');
  if (parts.length === 1) {
    return name.charAt(0) + '***';
  }
  return `${parts[0]} ${parts[1]?.charAt(0) || ''}.`;
}

export function maskPhone(phone: string): string {
  if (!phone) return '';
  return `${phone.slice(0, 4)}****${phone.slice(-3)}`;
}
