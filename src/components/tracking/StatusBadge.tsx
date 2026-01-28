import { TicketStatus, statusLabels } from '@/types/ticket';
import { 
  FileText, 
  Wrench, 
  CheckCircle, 
  Package, 
  Archive, 
  XCircle 
} from 'lucide-react';

interface StatusBadgeProps {
  status: TicketStatus;
  large?: boolean;
}

const statusConfig: Record<TicketStatus, { 
  icon: React.ComponentType<{ className?: string }>; 
  className: string 
}> = {
  new: { icon: FileText, className: 'status-new' },
  in_progress: { icon: Wrench, className: 'status-in-progress' },
  ready: { icon: CheckCircle, className: 'status-ready' },
  delivered: { icon: Package, className: 'status-delivered' },
  archived: { icon: Archive, className: 'status-delivered' },
  cancelled: { icon: XCircle, className: 'status-cancelled' },
};

export default function StatusBadge({ status, large = false }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span 
      className={`status-badge ${config.className} ${
        large ? 'text-base px-6 py-3' : ''
      }`}
    >
      <Icon className={large ? 'w-5 h-5' : 'w-4 h-4'} />
      {statusLabels[status]}
    </span>
  );
}
