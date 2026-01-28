import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, ChevronDown, Smartphone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'كم يستغرق إصلاح الهاتف؟',
    answer: 'يعتمد ذلك على نوع العطل. معظم الأعطال البسيطة كتغيير الشاشة أو البطارية تتم خلال ساعات قليلة. الأعطال المعقدة قد تستغرق من يوم إلى 3 أيام.',
  },
  {
    question: 'هل تقدمون ضمان على الإصلاح؟',
    answer: 'نعم، نقدم ضمان يتراوح من 3 إلى 6 أشهر على جميع خدمات الإصلاح حسب نوع الخدمة والقطع المستخدمة.',
  },
  {
    question: 'كيف أتتبع حالة جهازي؟',
    answer: 'عند استلام جهازك، ستحصل على تذكرة تحتوي رقم تتبع. يمكنك إدخال هذا الرقم في صفحة "تتبّع تذكرتك" أو مسح رمز QR الموجود على الوصل.',
  },
  {
    question: 'هل تستخدمون قطع غيار أصلية؟',
    answer: 'نعم، نستخدم قطع غيار أصلية عالية الجودة. كما نوفر خيارات بديلة بجودة ممتازة وبأسعار أقل للعملاء الذين يفضلون ذلك.',
  },
  {
    question: 'ماذا لو لم يتم إصلاح الجهاز؟',
    answer: 'في الحالات النادرة التي لا يمكن إصلاح الجهاز فيها، لن تُحتسب أي رسوم إصلاح. قد تُطبق رسوم فحص رمزية فقط.',
  },
  {
    question: 'هل توفرون خدمة التوصيل؟',
    answer: 'نعم، نوفر خدمة استلام وتوصيل الأجهزة داخل بغداد برسوم إضافية بسيطة. تواصل معنا لمزيد من التفاصيل.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-item',
        { opacity: 0, x: -30, filter: 'blur(10px)' },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Patterns */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-black uppercase tracking-widest mb-6">
            الأسئلة المتكررة
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
            لديك <span className="text-gradient-gold italic">استفسار؟</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
            جمعنا لك أكثر الأسئلة التي تراود عملائنا، إذا لم تجد إجابتك هنا فنحن بانتظار اتصالك
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
          {/* Left side: Accent Image/Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 p-10 rounded-[3rem] bg-navy-dark border border-white/5 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl group-hover:bg-gold/20 transition-colors" />
              <HelpCircle className="w-16 h-16 text-gold mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-black text-white mb-4">هل استلمت الوصل؟</h3>
              <p className="text-gold-light/50 font-medium leading-relaxed mb-8">
                بإمكانك معرفة حالة جهازك وتفاصيل الصيانة والوقت المتبقي مباشرة عبر نظامنا الرقمي.
              </p>
              <Link to="/تتبع" className="btn-premium flex items-center justify-center gap-2 py-4 rounded-2xl">
                <Smartphone className="w-5 h-5" />
                الدخول للنظام
              </Link>
            </div>
          </div>

          {/* Right side: Accordion */}
          <div className="lg:col-span-8 w-full">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="faq-item bg-card/50 backdrop-blur-sm border border-border/50 rounded-[2rem] px-8 overflow-hidden transition-all duration-300 data-[state=open]:border-gold/30 data-[state=open]:bg-card hover:border-gold/20 group"
                >
                  <AccordionTrigger className="text-foreground font-black text-xl text-right hover:no-underline py-8 flex-row-reverse gap-4 group-data-[state=open]:text-gold">
                    <span className="flex-1">{faq.question}</span>
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground/80 pb-8 text-lg font-medium leading-relaxed border-t border-border/20 pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Mobile Call CTA */}
        <div className="lg:hidden mt-16 text-center">
          <p className="text-muted-foreground font-bold mb-4">هل تود فحص حالة جهازك؟</p>
          <Link to="/تتبع" className="text-gold font-black text-xl flex items-center justify-center gap-2 underline underline-offset-8 decoration-gold/30">
            <Smartphone className="w-6 h-6" />
            انتقل لنظام التتبع
          </Link>
        </div>
      </div>
    </section>
  );
}
