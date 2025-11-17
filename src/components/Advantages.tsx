import Icon from '@/components/ui/icon';

const stats = [
  { number: '500+', label: 'Завершенных проектов', icon: 'CheckCircle2' },
  { number: '15', label: 'Лет на рынке', icon: 'Award' },
  { number: '200+', label: 'Специалистов', icon: 'Users' },
  { number: '98%', label: 'Довольных клиентов', icon: 'Star' }
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Почему выбирают нас
        </h2>
        <p className="text-center text-white/90 mb-16 text-lg">
          Цифры, которые говорят сами за себя
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Icon 
                  name={stat.icon as any} 
                  size={40} 
                  className="text-white"
                />
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
