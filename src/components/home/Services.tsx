import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Monitor, Gamepad2, Tablet, ArrowLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Smartphone,
    title: 'صيانة الهواتف',
    description: 'إصلاح جميع أنواع الهواتف الذكية - شاشات، بطاريات، سوفتوير',
    features: ['استبدال الشاشات', 'إصلاح البطاريات', 'مشاكل البرمجيات', 'استعادة البيانات'],
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Monitor,
    title: 'صيانة الحواسيب',
    description: 'إصلاح اللابتوب والكمبيوتر المكتبي بجميع أنواعه',
    features: ['تنظيف وصيانة', 'ترقية المكونات', 'إصلاح الشاشات', 'مشاكل النظام'],
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    icon: Gamepad2,
    title: 'صيانة أجهزة الألعاب',
    description: 'PlayStation، Xbox، Nintendo - جميع الموديلات',
    features: ['إصلاح HDMI', 'مشاكل الأقراص', 'أعطال الطاقة', 'تنظيف داخلي'],
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: Tablet,
    title: 'صيانة التابلت',
    description: 'iPad وأجهزة Android اللوحية بمختلف أنواعها',
    features: ['استبدال الشاشات', 'إصلاح منافذ الشحن', 'مشاكل البطارية', 'تحديث النظام'],
    color: "from-amber-500/20 to-amber-600/5",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        }
      });

      // Cards Grid Animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-background">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            خبراتنا التقنية
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
            حلول صيانة <span className="text-gradient-gold">ذكية</span> لكل أجهزتك
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium opacity-80">
            نجمع بين الخبرة اليدوية وأحدث التقنيات لضمان عودة أجهزتك لحالتها الأصلية
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-card/40 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col items-center text-center overflow-hidden`}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="relative w-20 h-20 mb-8 rounded-[1.5rem] bg-background-light shadow-2xl flex items-center justify-center transform group-hover:rotate-[10deg] transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-gold before:opacity-0 group-hover:before:opacity-10 before:rounded-[1.5rem]">
                <service.icon className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-500 relative z-10" />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-black text-foreground mb-4 tracking-tight drop-shadow-sm leading-tight">{service.title}</h3>

              {/* Description */}
              <p className="relative z-10 text-muted-foreground font-medium text-sm mb-8 leading-relaxed line-clamp-2">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="relative z-10 space-y-3 mb-8 w-full text-right flex-1">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-foreground/70 group-hover:text-foreground transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_hsl(var(--gold))]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Enhanced CTA */}
              <Link
                to="/الخدمات"
                className="relative z-10 w-full py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-gold font-black text-sm group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 group-hover:shadow-[0_10px_20px_rgba(212,168,67,0.3)]"
              >
                اكتشف المزيد
                <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Floating View All */}
        <div className="flex flex-col items-center mt-20">
          <Link
            to="/الخدمات"
            className="group btn-premium flex items-center gap-3 text-lg px-12 overflow-hidden"
          >
            <span className="relative z-10">استعراض كافة الاختصاصات</span>
            <ChevronRight className="w-6 h-6 relative z-10 transform group-hover:translate-x-1 transition-transform rotate-180" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <p className="mt-6 text-sm font-bold text-muted-foreground/60 animate-pulse">أكثر من 20 اختصاص صيانة احترافي</p>
        </div>
      </div>
    </section>
  );
}
