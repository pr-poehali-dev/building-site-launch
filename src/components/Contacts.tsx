import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Свяжитесь с нами
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Оставьте заявку и получите бесплатную консультацию
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Ваше имя
                    </label>
                    <Input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Телефон
                    </label>
                    <Input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Сообщение
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Расскажите о вашем проекте..."
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Email</h3>
                <p className="text-muted-foreground">info@construction.ru</p>
                <p className="text-muted-foreground">Ответим в течение часа</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Строительная, д. 15</p>
                <p className="text-muted-foreground">БЦ "Архитектор", офис 301</p>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Бесплатная консультация</h3>
                <p className="text-muted-foreground mb-4">
                  Оставьте заявку сейчас и получите скидку 10% на первый проект
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Icon name="Gift" size={20} />
                  <span>Акция действует до конца месяца</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
