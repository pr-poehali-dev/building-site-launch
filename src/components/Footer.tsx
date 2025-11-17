import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">СтройГрупп</h3>
            <p className="text-white/70 mb-4">
              Надежный партнер в строительстве с 2010 года
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#advantages" className="text-white/70 hover:text-white transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-white/70 hover:text-white transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-white/70 hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={18} />
                <span>info@construction.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={18} />
                <span>г. Москва, ул. Строительная, 15</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>&copy; 2024 СтройГрупп. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
