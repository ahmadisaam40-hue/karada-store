import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, MessageCircle, ArrowLeft, Wrench, Shield, Zap } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo('.hero-blob',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 0.15, duration: 1.5, stagger: 0.2 }
      )
        .fromTo(titleRef.current,
          { opacity: 0, y: 100, rotateX: -45 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.2 },
          '-=1'
        )
        .fromTo(subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.8'
        )
        .fromTo(buttonsRef.current?.children || [],
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.2 },
          '-=0.6'
        )
        .fromTo('.feature-card',
          { opacity: 0, y: 50, rotateY: 15 },
          { opacity: 1, y: 0, rotateY: 0, duration: 0.8, stagger: 0.1 },
          '-=0.4'
        );

      // Mouse Parallax for Blobs
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        gsap.to('.hero-blob-1', { x: xPos, y: yPos, duration: 1 });
        gsap.to('.hero-blob-2', { x: -xPos, y: -yPos, duration: 1 });
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Feature Cards Hover Effect
      const cards = document.querySelectorAll('.feature-card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -10, scale: 1.02, duration: 0.3, boxShadow: '0 20px 40px rgba(212, 168, 67, 0.2)' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.3, boxShadow: 'none' });
        });
      });

      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20"
    >
      {/* Dynamic Background Blobs */}
      <div ref={blobsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-blob hero-blob-1 absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-gold rounded-full blur-[120px] opacity-0" />
        <div className="hero-blob hero-blob-2 absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-gold-dark rounded-full blur-[100px] opacity-0" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 168, 67, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 168, 67, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="section-container relative z-10 pt-20 pb-40 lg:pb-56">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gold/15 border border-gold/20 text-gold overflow-hidden group hover:bg-gold/25 transition-colors cursor-crosshair">
              <Wrench className="w-4 h-4 animate-spin-slow" />
              <span className="text-sm font-black tracking-wide uppercase">مركز الصيانة رقم #1 في الكرادة</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white overflow-hidden group hover:border-gold/50 transition-all duration-500">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-black tracking-widest uppercase">الوكيل المعتمد لشركة <span className="text-gold">GIGABYTE</span></span>
            </div>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 perspective-1000"
          >
            نُعيد الحياة لأجهزتك بلمسة{' '}
            <span className="text-gradient-gold drop-shadow-2xl">احترافية</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg sm:text-2xl text-gold-light/70 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            حلول صيانة متكاملة مدعومة بضمان حقيقي وتكنولوجيا تتبع التذاكر الأحدث في العراق.
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <Link
              to="/تتبع"
              className="btn-premium flex items-center gap-3 text-xl w-full sm:w-auto justify-center px-10 group"
            >
              <Smartphone className="w-6 h-6 transform group-hover:rotate-12 transition-transform" />
              تتبع جهازي الآن
              <ArrowLeft className="w-6 h-6 mr-2 animate-bounce-x" />
            </Link>
          </div>

          {/* Features Grid */}
          <div
            ref={featuresRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {[
              { icon: Shield, title: "ضمان حقيقي", desc: "نحن نضمن جودة العمل لشهور" },
              { icon: Zap, title: "إصلاح فوري", desc: "أجهزتك تعود إليك في وقت قياسي" },
              { icon: Wrench, title: "قطع أصلية", desc: "لا نساوم على جودة المكونات" }
            ].map((f, i) => (
              <div key={i} className="feature-card glass-card p-8 rounded-[2.5rem] border-gold/10 hover:border-gold/30 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors transform group-hover:rotate-6">
                  <f.icon className="w-8 h-8 text-gold drop-shadow-[0_0_8px_rgba(212,168,67,0.5)]" />
                </div>
                <h3 className="text-xl font-black text-white mb-3 tracking-tight">{f.title}</h3>
                <p className="text-sm text-gold-light/60 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none scale-y-110 origin-bottom">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto drop-shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
