import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import TicketDetails from '@/components/tracking/TicketDetails';
import TicketNotFound from '@/components/tracking/TicketNotFound';
import Loader from '@/components/ui/Loader';
import { Ticket } from '@/types/ticket';
import { ArrowRight } from 'lucide-react';

// Mock data for demonstration
const mockTicket: Ticket = {
  ticketCode: 'KS-2024-001234',
  status: 'in_progress',
  customerName: 'أحمد محمد علي',
  deviceType: 'هاتف ذكي',
  deviceBrand: 'Samsung',
  deviceModel: 'Galaxy S23 Ultra',
  problemDescription: 'الشاشة مكسورة وتحتاج استبدال كامل، مع فحص البطارية',
  receivedAt: '2024-01-15T10:30:00Z',
  updatedAt: '2024-01-16T14:20:00Z',
  estimatedCompletion: '2024-01-17T18:00:00Z',
  price: 85000,
};

export default function TrackingResultPage() {
  const { ticketCode } = useParams<{ ticketCode: string }>();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (ticketCode) {
      fetchTicket(decodeURIComponent(ticketCode));
    }
  }, [ticketCode]);

  const fetchTicket = async (code: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      
      if (apiBaseUrl) {
        // Real API call
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        try {
          const response = await fetch(
            `${apiBaseUrl}/public/tickets/${encodeURIComponent(code)}`,
            { signal: controller.signal }
          );
          clearTimeout(timeoutId);

          if (response.ok) {
            const data = await response.json();
            setTicket(data);
          } else if (response.status === 404) {
            setTicket(null);
          } else {
            throw new Error('Server error');
          }
        } catch (fetchError) {
          // Retry once
          const retryResponse = await fetch(
            `${apiBaseUrl}/public/tickets/${encodeURIComponent(code)}`
          );
          
          if (retryResponse.ok) {
            const data = await retryResponse.json();
            setTicket(data);
          } else if (retryResponse.status === 404) {
            setTicket(null);
          } else {
            throw new Error('Server error after retry');
          }
        }
      } else {
        // Demo mode - use mock data
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulate finding or not finding the ticket
        if (code.toLowerCase().includes('demo') || code === 'KS-2024-001234') {
          setTicket({ ...mockTicket, ticketCode: code });
        } else {
          // For demo, show the mock ticket anyway
          setTicket({ ...mockTicket, ticketCode: code });
        }
      }
    } catch (err) {
      console.error('Error fetching ticket:', err);
      setError('حدث خطأ أثناء البحث. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-8 bg-gradient-navy">
        <div className="section-container">
          <Link 
            to="/تتبع" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-6"
          >
            <ArrowRight className="w-5 h-5" />
            العودة للبحث
          </Link>
          <h1 className="text-3xl font-bold text-white">
            نتيجة البحث
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            {isLoading ? (
              <Loader />
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-destructive mb-4">{error}</p>
                <button
                  onClick={() => ticketCode && fetchTicket(decodeURIComponent(ticketCode))}
                  className="btn-premium"
                >
                  إعادة المحاولة
                </button>
              </div>
            ) : ticket ? (
              <TicketDetails ticket={ticket} />
            ) : (
              <TicketNotFound ticketCode={ticketCode || ''} />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
