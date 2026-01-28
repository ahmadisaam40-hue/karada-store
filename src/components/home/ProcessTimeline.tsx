import { useEffect, useRef } from 'react';
import { FileText, Search, Wrench, CheckCircle, Package } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: FileText,
    title: 'استلام الجهاز',
    description: 'نستلم جهازك ونقوم بتسجيل بياناتك وتسليمك تذكرة تتبع',
  },
  {
    icon: Search,
    title: 'فحص وتشخيص',
    description: 'فحص شامل للجهاز وتحديد المشكلة بدقة مع تقدير التكلفة',
  },
  {
    icon: Wrench,
    title: 'الإصلاح',
    description: 'يبدأ الفريق بعملية الإصلاح باستخدام أحدث الأدوات والتقنيات',
  },
  {
    icon: CheckCircle,
    title: 'اختبار الجودة',
    description: 'اختبار شامل للتأكد من نجاح الإصلاح وجودة الأداء',
  },
  {
    icon: Package,
    title: 'التسليم',
    description: 'نبلغك بأن جهازك جاهز للاستلام مع ضمان شامل',
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line Animation
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1
          }
        }
      );

      // Steps Animation
      gsap.fromTo(
        '.timeline-step',
        { opacity: 0, scale: 0.5, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-navy-dark relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-black uppercase tracking-widest mb-6">
            دورة العمل
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            سِياق عمل <span className="text-gradient-gold">محتـرف</span>
          </h2>
          <p className="text-gold-light/60 max-w-2xl mx-auto text-lg font-medium">
            نحن نؤمن بالوضوح والشفافية، إليك كيف تتحول رحلة جهازك معنا من عطل لنجاح
          </p>
        </div>

        {/* Timeline container */}
        <div ref={stepsRef} className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] right-20 left-20 h-1 bg-white/5 rounded-full overflow-hidden">
            <div ref={lineRef} className="absolute inset-0 bg-gradient-to-l from-gold via-gold-dark to-transparent origin-right" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="timeline-step relative text-center group">
                {/* Icon Wrapper */}
                <div className="relative mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-24 h-24 mx-auto rounded-[2rem] bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/10 flex items-center justify-center relative z-10 overflow-hidden">
                    <step.icon className="w-10 h-10 text-gold drop-shadow-lg" />
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 bg-gold/10 scale-0 group-hover:scale-150 rounded-full transition-transform duration-700 opacity-0 group-hover:opacity-100" />
                  </div>

                  {/* Step Index Circle */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-gold text-navy-dark font-black flex items-center justify-center text-lg shadow-xl z-20 border-4 border-navy-dark">
                    {index + 1}
                  </div>
                </div>

                {/* Content Card */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-gold/20 transition-all duration-300">
                  <h3 className="text-xl font-black text-white mb-4 tracking-tight leading-tight">{step.title}</h3>
                  <p className="text-sm text-gold-light/50 font-medium leading-[1.6] transition-colors group-hover:text-gold-light/80">
                    {step.description}
                  </p>
                </div>

                {/* Vertical Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-1 h-12 bg-white/5 mx-auto mt-6 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA for trust */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-[2rem] bg-gold/5 border border-gold/10">
            <div className="flex -space-x-3 rtl:space-x-reverse">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-navy-dark bg-gold-dark overflow-hidden flex items-center justify-center text-[10px] font-black text-white italic">
                  PRO
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-gold-light/80">انضم لأكثر من <span className="text-gold text-lg">5,000+</span> عميل يثقون بنا شهرياً</p>
          </div>
        </div>
      </div>
    </section>
  );
}
