import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Advantages from '@/components/Advantages';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <Advantages />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
