import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import TrackForm from '@/components/tracking/TrackForm';
import QRScannerModal from '@/components/tracking/QRScannerModal';
import { Smartphone, ScanLine, Clock, Bell, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';

export default function TrackingPage() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.track-hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power4.out'
      });
      gsap.from('.track-feature-card', {
        opacity: 0,
        scale: 0.9,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 0.4
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const handleScan = (ticketCode: string) => {
    navigate(`/تتبع/${encodeURIComponent(ticketCode)}`);
  };

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="pt-40 pb-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center track-hero-content">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-black uppercase tracking-widest mb-8">
              <ShieldCheck className="w-4 h-4" />
              نظام التتبع الموحد
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 leading-tight">
              أين <span className="text-gradient-gold drop-shadow-2xl">جهازك</span> الآن؟
            </h1>
            <p className="text-xl text-gold-light/60 leading-relaxed font-medium max-w-xl mx-auto">
              تابع رحلة صيانة جهازك في المركز لحظة بلحظة وبدقة عالية عبر رقم التذكرة الخاص بك.
            </p>
          </div>
        </div>
      </section>

      {/* Track Form Container */}
      <section className="py-20 bg-background relative z-20">
        <div className="section-container -mt-36">
          <div className="max-w-4xl mx-auto">
            <TrackForm onScanClick={() => setIsScannerOpen(true)} />
          </div>
        </div>
      </section>

      {/* Modern Features Grid */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: ScanLine, title: "مسح QR ذكي", desc: "استخدم كاميرا هاتفك لمسح الكود الموجود على الوصل للدخول الفوري." },
              { icon: Clock, title: "شفافية الوقت", desc: "نحن نضعك في الصورة دائماً بخصوص الوقت المتوقع لكل مرحلة." },
              { icon: Bell, title: "تنبيهات تلقائية", desc: "سوف يصلك إشعار فور جاهزية جهازك للاستلام من المركز." }
            ].map((f, i) => (
              <div key={i} className="track-feature-card glass-card p-10 rounded-[2.5rem] border-white/5 flex flex-col items-center text-center hover:bg-white group transition-all duration-500 hover:shadow-2xl">
                <div className="w-20 h-20 rounded-[1.5rem] bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-gold transition-all duration-500">
                  <f.icon className="w-10 h-10 text-gold group-hover:text-navy-dark" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 tracking-tighter">{f.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Scanner Modal */}
      <QRScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onScan={handleScan}
      />
    </Layout>
  );
}
