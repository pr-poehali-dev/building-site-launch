import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/3d1e2a0a-a912-4aef-8ead-7fd3dec64de8/files/da5616c9-a18e-43f0-8e64-4bc949cce05b.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Строим будущее <span className="text-primary">вместе</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Профессиональное строительство жилых и коммерческих объектов с 2010 года
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => scrollToSection('contacts')}
          >
            Получить консультацию
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6"
            onClick={() => scrollToSection('services')}
          >
            Наши услуги
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;
