import { useEffect, useRef } from 'react';
import { MapPin, Phone, Navigation, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactCards() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.contact-card',
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const openMap = () => {
        // This link opens directions directly to have the "drawing a path" effect as requested (يرسم طريق)
        window.open('https://www.google.com/maps/dir/?api=1&destination=33.303349,44.423416', '_blank');
    };

    return (
        <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-navy-dark/40 blur-[80px] rounded-full pointer-events-none" />

            <div className="section-container relative z-10">
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

                    {/* Location Card */}
                    <div
                        onClick={openMap}
                        className="contact-card cursor-pointer group relative overflow-hidden rounded-[3rem] bg-navy-dark p-12 border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-all duration-700 hover:border-gold/40 hover:scale-[1.02]"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] group-hover:bg-gold/20 transition-all duration-700" />

                        <div className="flex flex-col h-full relative z-10">
                            <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-gold transition-all duration-500 shadow-2xl">
                                <Navigation className="w-10 h-10 text-gold group-hover:text-navy-dark" />
                            </div>

                            <h3 className="text-4xl font-black text-white mb-6 leading-tight">موقعنا <span className="text-gradient-gold">على الخارطة</span></h3>
                            <p className="text-gold-light/40 text-xl font-medium leading-relaxed mb-10 flex-1">
                                تفضل بزيارتنا في صالة عرضنا بالكرادة. اضغط هنا لفتح نظام الملاحة ورسم أسرع طريق للوصول إلينا.
                            </p>

                            <div className="flex items-center gap-4 text-gold text-lg font-black group-hover:gap-6 transition-all duration-500">
                                <span className="tracking-tighter uppercase">اتجه إلينا الآن</span>
                                <div className="w-12 h-0.5 bg-gold/30 group-hover:w-20 transition-all" />
                                <MapPin className="w-6 h-6 animate-bounce" />
                            </div>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="contact-card relative overflow-hidden rounded-[3rem] bg-secondary/30 backdrop-blur-xl p-12 border border-border/50 shadow-2xl transition-all duration-500">
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-50" />

                        <div className="flex flex-col h-full relative z-10">
                            <div className="w-20 h-20 rounded-3xl bg-gold/20 flex items-center justify-center mb-10">
                                <Phone className="w-10 h-10 text-gold shadow-lg" />
                            </div>

                            <h3 className="text-4xl font-black text-foreground mb-8">خطوط <span className="text-gradient-gold">الاتصال</span></h3>

                            <div className="space-y-6 flex-1">
                                {[
                                    '07722229656',
                                    '07822229656'
                                ].map((phone, idx) => (
                                    <a
                                        key={phone}
                                        href={`tel:${phone}`}
                                        className="flex items-center justify-between p-7 rounded-[2rem] bg-card border border-border/50 hover:border-gold/50 hover:bg-white hover:shadow-xl transition-all duration-500 group/phone overflow-hidden relative"
                                    >
                                        <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover/phone:opacity-[0.03] transition-opacity" />
                                        <div className="flex items-center gap-6">
                                            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-gold font-black group-hover/phone:bg-gold group-hover/phone:text-navy-dark transition-all">
                                                {idx + 1}
                                            </div>
                                            <span className="text-3xl font-black text-foreground tracking-tighter" dir="ltr">{phone}</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover/phone:bg-gold group-hover/phone:scale-110 transition-all">
                                            <ArrowRight className="w-6 h-6 text-gold group-hover/phone:text-navy-dark -rotate-45 group-hover/phone:rotate-0 transition-transform" />
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <p className="mt-10 text-lg font-bold text-muted-foreground/60 italic leading-relaxed">بإمكانكم الاتصال بنا في أي وقت للاستفسار عن حالة الصيانة أو طلب الدعم الفني.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
