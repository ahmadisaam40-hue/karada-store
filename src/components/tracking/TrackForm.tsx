import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ScanLine, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TrackFormProps {
  onScanClick: () => void;
}

export default function TrackForm({ onScanClick }: TrackFormProps) {
  const [ticketCode, setTicketCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!ticketCode.trim()) return;

    setIsLoading(true);
    // Navigate to the tracking page with the ticket code
    navigate(`/تتبع/${encodeURIComponent(ticketCode.trim())}`);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="glass-card p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
          تتبّع حالة جهازك
        </h2>
        <p className="text-muted-foreground text-center mb-6">
          أدخل رقم التذكرة أو امسح رمز QR
        </p>

        {/* Input Field */}
        <div className="relative mb-4">
          <Input
            type="text"
            placeholder="أدخل رقم التذكرة"
            value={ticketCode}
            onChange={(e) => setTicketCode(e.target.value)}
            className="h-14 text-lg pr-12 input-gold"
            dir="ltr"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            type="submit"
            disabled={!ticketCode.trim() || isLoading}
            className="flex-1 h-12 btn-premium border-0"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Search className="w-5 h-5 ml-2" />
                تتبّع
              </>
            )}
          </Button>

          <Button
            type="button"
            onClick={onScanClick}
            variant="outline"
            className="flex-1 h-12 border-2 border-accent text-accent hover:bg-accent/10"
          >
            <ScanLine className="w-5 h-5 ml-2" />
            مسح QR
          </Button>
        </div>
      </div>
    </form>
  );
}
