import { useState, useEffect, useRef } from 'react';
import { X, Camera, AlertCircle } from 'lucide-react';
import { Html5Qrcode } from 'html5-qrcode';

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (code: string) => void;
}

export default function QRScannerModal({ isOpen, onClose, onScan }: QRScannerModalProps) {
  const [error, setError] = useState<string | null>(null);
  const [isStarting, setIsStarting] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      startScanner();
    }

    return () => {
      stopScanner();
    };
  }, [isOpen]);

  const startScanner = async () => {
    if (!containerRef.current) return;
    
    setIsStarting(true);
    setError(null);

    try {
      const html5QrCode = new Html5Qrcode('qr-reader');
      scannerRef.current = html5QrCode;

      await html5QrCode.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          // Extract ticket code from URL if it's a full URL
          let ticketCode = decodedText;
          
          // Check if it's a URL containing the ticket code
          const urlMatch = decodedText.match(/\/تتبع\/([^/?#]+)/);
          if (urlMatch) {
            ticketCode = decodeURIComponent(urlMatch[1]);
          }
          
          stopScanner();
          onScan(ticketCode);
          onClose();
        },
        () => {
          // QR code not found - this is normal, ignore
        }
      );
    } catch (err) {
      console.error('Scanner error:', err);
      setError('لا يمكن الوصول إلى الكاميرا. تأكد من منح الإذن للموقع.');
    } finally {
      setIsStarting(false);
    }
  };

  const stopScanner = async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
        scannerRef.current.clear();
      } catch (err) {
        console.error('Error stopping scanner:', err);
      }
      scannerRef.current = null;
    }
  };

  const handleClose = () => {
    stopScanner();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="bg-card rounded-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Camera className="w-5 h-5" />
            مسح رمز QR
          </h3>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scanner Area */}
        <div className="p-4">
          {error ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <AlertCircle className="w-12 h-12 text-destructive mb-4" />
              <p className="text-destructive mb-4">{error}</p>
              <button
                onClick={startScanner}
                className="btn-premium px-6 py-2"
              >
                إعادة المحاولة
              </button>
            </div>
          ) : (
            <>
              <div 
                ref={containerRef}
                id="qr-reader" 
                className="w-full aspect-square rounded-lg overflow-hidden bg-black"
              />
              {isStarting && (
                <div className="flex items-center justify-center py-4">
                  <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                  <span className="mr-2 text-muted-foreground">جاري تشغيل الكاميرا...</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Instructions */}
        <div className="p-4 bg-secondary/50 text-center">
          <p className="text-sm text-muted-foreground">
            وجّه الكاميرا نحو رمز QR الموجود على وصل الاستلام
          </p>
        </div>
      </div>
    </div>
  );
}
