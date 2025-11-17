import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    image: 'https://cdn.poehali.dev/projects/3d1e2a0a-a912-4aef-8ead-7fd3dec64de8/files/da5616c9-a18e-43f0-8e64-4bc949cce05b.jpg',
    title: 'ЖК "Современный квартал"',
    description: 'Жилой комплекс на 300 квартир',
    category: 'Жилое строительство'
  },
  {
    image: 'https://cdn.poehali.dev/projects/3d1e2a0a-a912-4aef-8ead-7fd3dec64de8/files/ff6fa9bb-673c-4cbd-877e-31fd311c2de5.jpg',
    title: 'Элитные апартаменты',
    description: 'Премиальное жилье в центре города',
    category: 'Ремонт'
  },
  {
    image: 'https://cdn.poehali.dev/projects/3d1e2a0a-a912-4aef-8ead-7fd3dec64de8/files/7d15f9ba-4a0d-49cf-9bdb-477f9c62d398.jpg',
    title: 'Бизнес-центр "Горизонт"',
    description: 'Современный офисный комплекс',
    category: 'Коммерческая недвижимость'
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Наши проекты
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Примеры реализованных объектов
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
