import { useEffect, useRef } from 'react';
import { Award, Users, Clock, ThumbsUp, Shield, Wrench, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Award,
    title: 'خبرة واسعة',
    description: 'فريق من الفنيين المعتمدين بخبرة تتجاوز 10 سنوات',
  },
  {
    icon: Shield,
    title: 'ضمان شامل',
    description: 'ضمان على جميع خدمات الإصلاح يصل إلى 6 أشهر',
  },
  {
    icon: Clock,
    title: 'سرعة في الإنجاز',
    description: 'معظم الإصلاحات تتم خلال ساعات قليلة',
  },
  {
    icon: Wrench,
    title: 'قطع غيار أصلية',
    description: 'نستخدم فقط القطع الأصلية عالية الجودة',
  },
  {
    icon: ThumbsUp,
    title: 'أسعار منافسة',
    description: 'أفضل الأسعار في السوق مع جودة لا تُضاهى',
  },
  {
    icon: Users,
    title: 'خدمة عملاء متميزة',
    description: 'دعم فني على مدار الساعة للرد على استفساراتك',
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content Entrance
      gsap.from(contentRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        }
      });

      // Stats Counting Effect (Simplified for demo)
      const stats = document.querySelectorAll('.stat-value');
      stats.forEach(stat => {
        const val = parseInt(stat.getAttribute('data-value') || '0');
        gsap.fromTo(stat,
          { innerText: 0 },
          {
            innerText: val,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
            }
          }
        );
      });

      // Features Grid
      gsap.fromTo(
        '.feature-item',
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: itemsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content side */}
          <div ref={contentRef} className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-black uppercase tracking-widest mb-6">
                لماذا نحن؟
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
                الريادة في <span className="text-gradient-gold">صيانة الأجهزة</span> بالعراق
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                نحن لا نصلح الأجهزة فحسب، بل نعيد إليك راحة بالك. خبرتنا الطويلة في سوق الكرادة جعلتنا المحطة الأولى لكل من يبحث عن الموثوقية والدقة.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-4">
              {[
                "فحص مجاني دقيق لكل الأجهزة",
                "نظام تتبع ذكي يخطرك بكل مرحلة صيانة",
                "توصيل سريع لباب المنزل في بغداد"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                  </div>
                  <span className="font-bold text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-3 gap-8 p-8 rounded-[2.5rem] bg-card/50 border border-white/5 backdrop-blur-sm shadow-xl">
              <div className="text-center group">
                <div className="text-4xl font-black text-gradient-gold mb-2 flex justify-center">
                  <span className="stat-value" data-value="12000">0</span>
                  <span className="text-2xl">+</span>
                </div>
                <div className="text-xs font-black text-muted-foreground uppercase tracking-wider">جهاز تم إصلاحه</div>
              </div>
              <div className="text-center group border-x border-border/50">
                <div className="text-4xl font-black text-gradient-gold mb-2 flex justify-center">
                  <span className="stat-value" data-value="99">0</span>
                  <span className="text-2xl">%</span>
                </div>
                <div className="text-xs font-black text-muted-foreground uppercase tracking-wider">رضا العملاء</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black text-gradient-gold mb-2 flex justify-center">
                  <span className="stat-value" data-value="15">0</span>
                  <span className="text-2xl">+</span>
                </div>
                <div className="text-xs font-black text-muted-foreground uppercase tracking-wider">فني محترف</div>
              </div>
            </div>
          </div>

          {/* Features Grid side */}
          <div ref={itemsRef} className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item bg-card/60 backdrop-blur-sm p-8 rounded-[2rem] border border-border/50 hover:border-gold/30 hover:bg-card transition-all duration-500 group group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/15 to-transparent flex items-center justify-center mb-6 group-hover:rotate-[15deg] transition-transform duration-500 shadow-inner">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
