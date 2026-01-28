import Layout from '@/components/layout/Layout';
import { Award, Users, Clock, Target, Wrench, Shield } from 'lucide-react';

const stats = [
  { value: '+5000', label: 'جهاز تم إصلاحه' },
  { value: '+10', label: 'سنوات خبرة' },
  { value: '98%', label: 'رضا العملاء' },
  { value: '24/7', label: 'دعم فني' },
];

const values = [
  {
    icon: Award,
    title: 'الجودة',
    description: 'نلتزم بأعلى معايير الجودة في كل خدمة نقدمها',
  },
  {
    icon: Shield,
    title: 'الأمانة',
    description: 'نتعامل مع أجهزتكم بأمانة تامة ونحافظ على خصوصيتكم',
  },
  {
    icon: Clock,
    title: 'السرعة',
    description: 'نحرص على إنجاز الإصلاحات في أسرع وقت ممكن',
  },
  {
    icon: Target,
    title: 'الدقة',
    description: 'تشخيص دقيق للمشكلة وحلول فعالة ومستدامة',
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-gold/50 rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              من <span className="text-gradient-gold">نحن</span>
            </h1>
            <p className="text-lg text-gold-light/80 leading-relaxed">
              متجر الكرادة - قسم الصيانة، وجهتك الموثوقة لإصلاح جميع الأجهزة الإلكترونية في بغداد.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-accent/10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
                قصتنا
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                رحلة تمتد لأكثر من <span className="text-gradient-gold">عشر سنوات</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  بدأ متجر الكرادة كمحل صغير لبيع الإلكترونيات في قلب منطقة الكرادة العريقة في بغداد. 
                  مع مرور السنين، وبفضل ثقة عملائنا الكرام، توسعنا لنصبح من أبرز مراكز الصيانة المتخصصة.
                </p>
                <p>
                  نفخر اليوم بفريق من الفنيين المحترفين المدربين على أحدث التقنيات، ومجهزين بأفضل 
                  المعدات لضمان إصلاح أجهزتكم بأعلى جودة وفي أسرع وقت.
                </p>
                <p>
                  رسالتنا بسيطة: نريد أن نكون الوجهة الأولى والأخيرة لكل من يحتاج صيانة موثوقة 
                  لأجهزته الإلكترونية في العراق.
                </p>
              </div>
            </div>

            {/* Placeholder for shop image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center">
                <div className="text-center p-8">
                  <Wrench className="w-16 h-16 text-gold mx-auto mb-4" />
                  <p className="text-gold-light/80">صورة المحل</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-gold rounded-xl -z-10 opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-gold rounded-xl -z-10 opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
              قيمنا
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ما يميزنا عن <span className="text-gradient-gold">الآخرين</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border text-center card-hover"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-navy-dark" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
              فريق العمل
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              خبراء في <span className="text-gradient-gold">خدمتك</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              فريق من الفنيين المحترفين بخبرة تتجاوز عشر سنوات في مجال صيانة الإلكترونيات
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'أحمد محمد', role: 'مدير قسم الصيانة', experience: '12 سنة خبرة' },
              { name: 'علي حسين', role: 'فني هواتف رئيسي', experience: '8 سنوات خبرة' },
              { name: 'محمد كريم', role: 'فني حواسيب وألعاب', experience: '10 سنوات خبرة' },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-gold flex items-center justify-center text-2xl font-bold text-navy-dark">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-accent text-sm mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
