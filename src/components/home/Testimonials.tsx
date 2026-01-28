import { useEffect, useRef } from 'react';
import { Star, Quote, UserCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'أحمد محمد',
    role: 'عميل دائم',
    rating: 5,
    text: 'خدمة ممتازة وسريعة! تم إصلاح شاشة هاتفي خلال ساعتين فقط. أنصح الجميع بالتعامل معهم.',
    avatar: null
  },
  {
    name: 'سارة علي',
    role: 'صاحبة متجر',
    rating: 5,
    text: 'أتعامل معهم منذ سنتين لصيانة أجهزة المحل. دائماً موثوقين وأسعارهم ممتازة.',
    avatar: null
  },
  {
    name: 'محمد حسين',
    role: 'مهندس برمجيات',
    rating: 5,
    text: 'أصلحوا لي اللابتوب الذي اعتقدت أنه لن يعمل مرة أخرى. شكراً لفريق متجر الكرادة!',
    avatar: null
  },
  {
    name: 'فاطمة عبدالله',
    role: 'طالبة جامعية',
    rating: 5,
    text: 'ميزة تتبع التذكرة رائعة جداً! عرفت متى جهازي جاهز بدون الحاجة للاتصال.',
    avatar: null
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'elastic.out(1, 0.8)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-black uppercase tracking-widest mb-6">
            آراء العملاء
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
            ثقتكم هي <span className="text-gradient-gold">سر تميزنا</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
            تجارب حقيقية لعملاء وثقوا بنا في الكرادة وشاركوا قصص نجاحهم
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card glass-card p-10 rounded-[2.5rem] border-white/5 relative group hover:border-gold/20 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Quote Mark */}
              <div className="absolute -top-6 -right-2 text-gold/10 group-hover:text-gold/20 transition-colors">
                <Quote className="w-20 h-20 rotate-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1.5 mb-8">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold drop-shadow-[0_0_5px_rgba(212,168,67,0.5)]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 text-lg font-bold italic leading-relaxed mb-10 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-border/50 pt-8 mt-auto">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-navy-dark shadow-lg relative z-10">
                    <UserCircle2 className="w-8 h-8 opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-gold blur-lg opacity-20 scale-125" />
                </div>
                <div>
                  <div className="font-black text-foreground text-sm tracking-tight">{testimonial.name}</div>
                  <div className="text-xs text-gold font-black opacity-60 tracking-wider uppercase mt-1">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-secondary/50 border border-border">
            <div className="flex -space-x-2 rtl:space-x-reverse">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gold-dark flex items-center justify-center text-[10px] font-black text-white italic">
                  +
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-muted-foreground mr-2">انضم لـ <span className="text-foreground">8,000+</span> عميل راضٍ عن خدماتنا</p>
          </div>
        </div>
      </div>
    </section>
  );
}
