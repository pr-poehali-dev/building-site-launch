import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Building2',
    title: 'Жилое строительство',
    description: 'Строительство частных домов, коттеджей и многоквартирных комплексов под ключ'
  },
  {
    icon: 'Landmark',
    title: 'Коммерческие объекты',
    description: 'Возведение офисных зданий, торговых центров и производственных помещений'
  },
  {
    icon: 'Hammer',
    title: 'Ремонт и реконструкция',
    description: 'Капитальный ремонт, реставрация и модернизация существующих зданий'
  },
  {
    icon: 'Ruler',
    title: 'Проектирование',
    description: 'Разработка архитектурных и инженерных решений любой сложности'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Наши услуги
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Полный спектр строительных работ от проекта до сдачи
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon 
                    name={service.icon as any} 
                    size={32} 
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
