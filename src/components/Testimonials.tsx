import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    name: 'Алексей Петров',
    position: 'Владелец коттеджа',
    text: 'Профессиональная команда построила наш дом за 8 месяцев. Качество работ на высшем уровне, все сроки соблюдены!',
    rating: 5
  },
  {
    name: 'Мария Иванова',
    position: 'Директор ООО "Торговый Дом"',
    text: 'Реконструкция нашего офисного здания прошла без задержек. Отличное соотношение цены и качества.',
    rating: 5
  },
  {
    name: 'Дмитрий Соколов',
    position: 'Застройщик',
    text: 'Сотрудничаем уже 5 лет. Надежный партнер для крупных жилых комплексов. Рекомендую!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Отзывы клиентов
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Что говорят о нас наши партнеры
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
