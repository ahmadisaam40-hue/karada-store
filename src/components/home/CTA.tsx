import { Link } from 'react-router-dom';
import { Smartphone, MessageCircle, ArrowLeft, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gold mb-10">
            <Zap className="w-5 h-5 fill-gold animate-pulse" />
            <span className="text-sm font-black uppercase tracking-widest">مستعدون لخدمتكم فوراً</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-[1.1]">
            هل جهازك معطل؟
            <br />
            دع الخبراء يهتمون <span className="text-gradient-gold drop-shadow-2xl">بالباقي</span>
          </h2>

          <p className="text-xl text-gold-light/60 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            لا تتردد، تواصل معنا الآن للحصول على استشارة فنية مجانية وتجربة صيانة لا تُنسى في قلب الكرادة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/تتبع"
              className="btn-premium flex items-center gap-3 text-xl w-full sm:w-auto justify-center px-10 rounded-2xl group shadow-[0_20px_40px_rgba(212,168,67,0.3)]"
            >
              <Smartphone className="w-6 h-6 transform group-hover:rotate-12 transition-transform" />
              ابدأ التتبع
              <ArrowLeft className="w-6 h-6 animate-bounce-x" />
            </Link>

            <a
              href="https://wa.me/9647701234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-premium border-white/20 text-white hover:bg-white/10 flex items-center gap-3 text-xl w-full sm:w-auto justify-center px-10 rounded-2xl transition-all"
            >
              <MessageCircle className="w-6 h-6 text-emerald-500" />
              واتساب مباشر
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
            <p className="text-xs font-black text-white uppercase tracking-widest">تغطية شاملة لبغداد</p>
            <p className="text-xs font-black text-white uppercase tracking-widest">ضمان 100%</p>
            <p className="text-xs font-black text-white uppercase tracking-widest">أدوات متطورة</p>
            <p className="text-xs font-black text-white uppercase tracking-widest">أسعار حقيقية</p>
          </div>
        </div>
      </div>
    </section>
  );
}
