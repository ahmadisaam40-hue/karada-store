import { useState, FormEvent } from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              تواصل <span className="text-gradient-gold">معنا</span>
            </h1>
            <p className="text-lg text-gold-light/80 leading-relaxed">
              نحن هنا لمساعدتك. تواصل معنا عبر أي من الطرق أدناه وسنرد عليك في أقرب وقت.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">معلومات التواصل</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                    <Phone className="w-6 h-6 text-navy-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">الهاتف</h3>
                    <a 
                      href="tel:+9647701234567" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                      dir="ltr"
                    >
                      +964 770 123 4567
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-navy-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">واتساب</h3>
                    <a 
                      href="https://wa.me/9647701234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      dir="ltr"
                    >
                      +964 770 123 4567
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                    <Mail className="w-6 h-6 text-navy-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">البريد الإلكتروني</h3>
                    <a 
                      href="mailto:info@karadastore.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      info@karadastore.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-navy-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">العنوان</h3>
                    <p className="text-muted-foreground">
                      بغداد، شارع الكرادة الرئيسي
                      <br />
                      قرب ساحة الأندلس
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                    <Clock className="w-6 h-6 text-navy-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">ساعات العمل</h3>
                    <p className="text-muted-foreground text-sm">
                      السبت - الخميس: 10:00 ص - 10:00 م
                      <br />
                      الجمعة: 2:00 م - 10:00 م
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">أرسل رسالة</h2>
              
              <div className="bg-card rounded-2xl border border-border p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      تم إرسال رسالتك بنجاح!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      سنتواصل معك في أقرب وقت ممكن
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent/10"
                    >
                      إرسال رسالة أخرى
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        الاسم الكامل
                      </label>
                      <Input
                        type="text"
                        required
                        placeholder="أدخل اسمك"
                        className="h-12 input-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        رقم الهاتف
                      </label>
                      <Input
                        type="tel"
                        required
                        placeholder="07xxxxxxxxx"
                        className="h-12 input-gold"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        البريد الإلكتروني (اختياري)
                      </label>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        className="h-12 input-gold"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        الرسالة
                      </label>
                      <Textarea
                        required
                        placeholder="اكتب رسالتك هنا..."
                        className="min-h-[150px] input-gold"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 btn-premium border-0"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-navy-dark/30 border-t-navy-dark rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5 ml-2" />
                          إرسال الرسالة
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-secondary/50 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
            <p className="text-muted-foreground">
              خريطة الموقع
              <br />
              <span className="text-sm">(سيتم إضافتها لاحقاً)</span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
