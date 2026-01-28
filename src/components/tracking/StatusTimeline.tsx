import { TicketStatus, statusLabels, statusOrder } from '@/types/ticket';
import { Check } from 'lucide-react';

interface StatusTimelineProps {
  currentStatus: TicketStatus;
}

export default function StatusTimeline({ currentStatus }: StatusTimelineProps) {
  const currentIndex = statusOrder.indexOf(currentStatus);
  const isCancelled = currentStatus === 'cancelled';
  const isArchived = currentStatus === 'archived';

  if (isCancelled || isArchived) {
    return (
      <div className="text-center py-8">
        <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
          isCancelled ? 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' 
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800/40 dark:text-gray-300'
        }`}>
          {statusLabels[currentStatus]}
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="flex items-center justify-between relative">
        {/* Connecting Line */}
        <div className="absolute top-5 right-5 left-5 h-0.5 bg-border">
          <div 
            className="h-full bg-gradient-gold transition-all duration-500"
            style={{ 
              width: `${(currentIndex / (statusOrder.length - 1)) * 100}%` 
            }}
          />
        </div>

        {statusOrder.map((status, index) => {
          const isCompleted = index <= currentIndex;
          const isCurrent = index === currentIndex;

          return (
            <div 
              key={status} 
              className="relative flex flex-col items-center z-10"
            >
              {/* Circle */}
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-gradient-gold text-navy-dark' 
                    : 'bg-secondary text-muted-foreground'
                } ${isCurrent ? 'ring-4 ring-accent/30 scale-110' : ''}`}
              >
                {isCompleted && index < currentIndex ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-bold">{index + 1}</span>
                )}
              </div>

              {/* Label */}
              <span 
                className={`mt-3 text-xs sm:text-sm font-medium text-center max-w-[80px] ${
                  isCompleted ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {statusLabels[status]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
