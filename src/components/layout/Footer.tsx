import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, ShieldCheck } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const footerLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/الخدمات', label: 'خدماتنا' },
  { href: '/من-نحن', label: 'من نحن' },
  { href: '/تواصل', label: 'تواصل معنا' },
  { href: '/تتبع', label: 'تتبّع تذكرتك' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">

          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="p-1 bg-white rounded-2xl shadow-xl transform group-hover:rotate-6 transition-transform">
                <img
                  src={logo}
                  alt="متجر الكرادة"
                  className="h-14 w-14 rounded-xl object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tighter">متجر <span className="text-gradient-gold">الكرادة</span></h3>
                <div className="flex items-center gap-1 opacity-50">
                  <ShieldCheck className="w-3 h-3 text-gold" />
                  <span className="text-[10px] font-black uppercase tracking-widest">الصيانة الاحترافية</span>
                </div>
              </div>
            </Link>
            <p className="text-gold-light/60 text-lg font-medium leading-[1.8]">
              نحن لسنا مجرد متجر صيانة، نحن شركاؤك في الحفاظ على تواصلك مع العالم. نستخدم أدق التقنيات لنضمن لجهازك عمراً أطول.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-black text-white mb-8 border-r-4 border-gold pr-4">روابط سريعة</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gold-light/50 hover:text-gold transition-all duration-300 flex items-center gap-2 group font-bold"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-black text-white mb-8 border-r-4 border-gold pr-4">اتصل بنا</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold group-hover:text-navy-dark" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-black text-gold-light/40 uppercase tracking-widest mb-0.5">خدمة العملاء</p>
                  <a href="tel:07722229656" className="text-gold-light/80 font-black tracking-tight hover:text-gold transition-colors" dir="ltr">07722229656</a>
                  <a href="tel:07822229656" className="text-gold-light/80 font-black tracking-tight hover:text-gold transition-colors" dir="ltr">07822229656</a>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Mail className="w-5 h-5 text-gold group-hover:text-navy-dark" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gold-light/40 uppercase tracking-widest mb-1">البريد الالكتروني</p>
                  <span className="text-gold-light/80 font-bold">support@karada-repairs.com</span>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <MapPin className="w-5 h-5 text-gold group-hover:text-navy-dark" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gold-light/40 uppercase tracking-widest mb-1">الموقع الفروع</p>
                  <span className="text-gold-light/80 font-bold">بغداد، الكرادة، قرب ساحة كهرمانة</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-black text-white mb-8 border-r-4 border-gold pr-4">ساعات العمل</h3>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gold-light/40 font-bold">السبت - الخميس:</span>
                <span className="text-gold font-black">10AM - 10PM</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gold-light/40 font-bold">الجمعة:</span>
                <span className="text-gold font-black">2PM - 10PM</span>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-black text-emerald-500 tracking-tighter">نحن متاحون الآن لخدمتك</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-right">
              <p className="text-gold-light/30 text-xs font-bold">
                جميع الحقوق محفوظة © {new Date().getFullYear()} لـ متجر الكرادة - قسم التقنيات والصيانة
              </p>
            </div>
            <div className="flex gap-8">
              <Link to="/الخصوصية" className="text-xs font-black text-gold-light/30 hover:text-gold transition-colors tracking-widest uppercase">Privacy</Link>
              <Link to="/الشروط" className="text-xs font-black text-gold-light/30 hover:text-gold transition-colors tracking-widest uppercase">Terms</Link>
              <span className="text-xs font-black text-gold-light/20 tracking-tighter opacity-30 italic">Built for Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
