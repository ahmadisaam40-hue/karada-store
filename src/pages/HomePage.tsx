import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import WhyUs from '@/components/home/WhyUs';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import ContactCards from '@/components/home/ContactCards';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Services />
      <WhyUs />
      <ProcessTimeline />
      <ContactCards />
      <FAQ />
      <CTA />
    </Layout>
  );
}
