import { useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Smartphone, 
  Monitor, 
  Gamepad2, 
  Tablet, 
  HardDrive,
  Headphones,
  Check,
  ArrowLeft
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Smartphone,
    title: 'صيانة الهواتف الذكية',
    description: 'خدمات إصلاح شاملة لجميع أنواع الهواتف الذكية',
    items: [
      'استبدال الشاشات المكسورة',
      'إصلاح وتبديل البطاريات',
      'إصلاح منافذ الشحن',
      'حل مشاكل البرمجيات',
      'استعادة البيانات',
      'إصلاح الكاميرات',
      'فتح قفل الهاتف',
      'تحديث الأنظمة',
    ],
    brands: ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'OnePlus', 'OPPO', 'Vivo'],
  },
  {
    icon: Monitor,
    title: 'صيانة الحواسيب',
    description: 'إصلاح اللابتوب والكمبيوتر المكتبي بجميع أنواعه',
    items: [
      'تنظيف داخلي شامل',
      'ترقية الذاكرة والمعالج',
      'استبدال الشاشات',
      'إصلاح لوحة المفاتيح',
      'حل مشاكل النظام',
      'إزالة الفيروسات',
      'تركيب SSD',
      'صيانة التبريد',
    ],
    brands: ['HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'Apple MacBook'],
  },
  {
    icon: Gamepad2,
    title: 'صيانة أجهزة الألعاب',
    description: 'PlayStation، Xbox، Nintendo - جميع الموديلات',
    items: [
      'إصلاح منفذ HDMI',
      'إصلاح قارئ الأقراص',
      'حل أعطال الطاقة',
      'تنظيف داخلي',
      'تغيير المعجون الحراري',
      'إصلاح أذرع التحكم',
      'تحديث النظام',
      'إصلاح مشاكل الصوت',
    ],
    brands: ['PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Nintendo Switch'],
  },
  {
    icon: Tablet,
    title: 'صيانة التابلت',
    description: 'iPad وأجهزة Android اللوحية بمختلف أنواعها',
    items: [
      'استبدال الشاشات',
      'إصلاح منافذ الشحن',
      'تبديل البطاريات',
      'تحديث النظام',
      'حل مشاكل البرمجيات',
      'إصلاح الأزرار',
      'استعادة البيانات',
    ],
    brands: ['Apple iPad', 'Samsung Tab', 'Huawei MatePad', 'Lenovo Tab'],
  },
  {
    icon: HardDrive,
    title: 'استعادة البيانات',
    description: 'استرجاع الملفات من الأقراص الصلبة وذاكرات التخزين',
    items: [
      'استعادة من الهاتف',
      'استعادة من الكمبيوتر',
      'إصلاح الفلاشات',
      'استعادة من SD Card',
      'إصلاح الأقراص الصلبة',
    ],
    brands: ['جميع أنواع وسائط التخزين'],
  },
  {
    icon: Headphones,
    title: 'إصلاح الملحقات',
    description: 'سماعات وساعات ذكية وملحقات أخرى',
    items: [
      'إصلاح سماعات AirPods',
      'صيانة الساعات الذكية',
      'إصلاح أجهزة البلوتوث',
      'إصلاح الشواحن',
    ],
    brands: ['Apple', 'Samsung', 'Huawei', 'Sony'],
  },
];

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <div ref={pageRef}>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                خدمات <span className="text-gradient-gold">الصيانة</span>
              </h1>
              <p className="text-lg text-gold-light/80 leading-relaxed">
                نقدم خدمات إصلاح شاملة لجميع الأجهزة الإلكترونية. فريقنا المتخصص 
                مجهز بأحدث الأدوات والتقنيات لضمان أفضل النتائج.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-background">
          <div className="section-container">
            <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card bg-card rounded-2xl border border-border p-8 card-hover"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-gold flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-navy-dark" />
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6">
                    {service.description}
                  </p>

                  {/* Services List */}
                  <ul className="space-y-2 mb-6">
                    {service.items.slice(0, 6).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Brands */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">العلامات التجارية:</p>
                    <p className="text-xs text-foreground/70">
                      {service.brands.join(' • ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary/50">
          <div className="section-container text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              لم تجد الخدمة المطلوبة؟
            </h2>
            <p className="text-muted-foreground mb-6">
              تواصل معنا وسنساعدك في إيجاد الحل المناسب
            </p>
            <a
              href="https://wa.me/9647701234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-2"
            >
              تواصل معنا
              <ArrowLeft className="w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
