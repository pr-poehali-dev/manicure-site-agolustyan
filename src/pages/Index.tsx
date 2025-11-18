import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'reviews', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  const services = [
    { icon: "Sparkles", title: "Маникюр", description: "Классический и аппаратный маникюр с покрытием", price: "от 1500₽" },
    { icon: "Star", title: "Педикюр", description: "Профессиональный уход за ногами", price: "от 2000₽" },
    { icon: "Brush", title: "Nail-дизайн", description: "Уникальные дизайны и художественная роспись", price: "от 500₽" },
    { icon: "Crown", title: "Наращивание", description: "Гелевое и акриловое наращивание ногтей", price: "от 3000₽" },
  ];

  const portfolioImages = [
    "https://cdn.poehali.dev/projects/7e5966e5-b85a-4b8f-9071-343f957260d4/files/2b0a0d40-46f7-40b6-922e-3ac1d087cb08.jpg",
    "https://cdn.poehali.dev/projects/7e5966e5-b85a-4b8f-9071-343f957260d4/files/380acf65-5757-443e-be99-9563f30e380b.jpg",
    "https://cdn.poehali.dev/projects/7e5966e5-b85a-4b8f-9071-343f957260d4/files/908e12ea-a176-4635-8a13-ab423fe9917f.jpg",
  ];

  const reviews = [
    { name: "Анна М.", platform: "2ГИС", rating: 5, text: "Отличный мастер! Всегда довольна результатом, маникюр держится 3-4 недели. Рекомендую!" },
    { name: "Елена К.", platform: "Яндекс", rating: 5, text: "Профессионал своего дела. Аккуратно, быстро, качественно. Буду приходить ещё!" },
    { name: "Мария С.", platform: "2ГИС", rating: 5, text: "Лучший мастер в городе! Невероятные дизайны и внимание к деталям." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold gold-shimmer">
              AGolustyan
            </button>
            
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'services', label: 'Услуги' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contact', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button onClick={() => scrollToSection('contact')} size="sm" className="hidden md:flex">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Ваши ногти —<br />
                <span className="gold-shimmer">мое искусство</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональный маникюр и nail-дизайн с опытом более 5 лет
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('contact')} size="lg" className="group">
                  Записаться онлайн
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button onClick={() => scrollToSection('portfolio')} variant="outline" size="lg">
                  Посмотреть работы
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Send" size={24} />
                </a>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden animate-scale-in">
              <img 
                src={portfolioImages[0]} 
                alt="Маникюр AGolustyan" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold gold-shimmer">Обо мне</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Меня зовут AGolustyan, я профессиональный мастер маникюра с опытом работы более 5 лет. 
              За это время я помогла сотням клиенток обрести красивые и ухоженные ногти. 
              Каждая работа для меня — это возможность создать маленькое произведение искусства.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Я постоянно совершенствую свои навыки, слежу за последними трендами в nail-индустрии 
              и использую только качественные материалы известных брендов. Ваши ногти в надёжных руках!
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">довольных клиенток</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">качество</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gold-shimmer">Услуги</h2>
            <p className="text-muted-foreground text-lg">Профессиональный уход за вашими ногтями</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale group border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gold-shimmer">Портфолио</h2>
            <p className="text-muted-foreground text-lg">Мои работы говорят сами за себя</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div key={index} className="group relative h-80 rounded-lg overflow-hidden hover-scale">
                <img 
                  src={image} 
                  alt={`Работа ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="ZoomIn" size={40} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gold-shimmer">Отзывы</h2>
            <p className="text-muted-foreground text-lg">Что говорят мои клиентки</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {review.platform}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 space-x-4">
            <Button variant="outline" asChild>
              <a href="https://2gis.ru" target="_blank" rel="noopener noreferrer">
                Отзывы на 2ГИС
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://yandex.ru/maps" target="_blank" rel="noopener noreferrer">
                Отзывы на Яндекс
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gold-shimmer">Контакты и запись</h2>
            <p className="text-muted-foreground text-lg">Свяжитесь со мной удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Записаться онлайн</CardTitle>
                  <CardDescription>Заполните форму, и я свяжусь с вами для подтверждения</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBooking} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Услуга</Label>
                      <select id="service" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2" required>
                        <option value="">Выберите услугу</option>
                        <option value="manicure">Маникюр</option>
                        <option value="pedicure">Педикюр</option>
                        <option value="design">Nail-дизайн</option>
                        <option value="extension">Наращивание</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Комментарий</Label>
                      <Textarea id="message" placeholder="Ваши пожелания..." rows={3} />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <a href="tel:89510367784" className="hover:text-primary transition-colors">
                      8 951 036 77 84
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" size={20} className="text-primary" />
                    <span className="text-muted-foreground">Telegram, WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Instagram" size={20} className="text-primary" />
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                       className="hover:text-primary transition-colors">
                      @agolustyan
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span className="text-muted-foreground">По предварительной записи</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Часы работы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Пн - Пт</span>
                    <span className="font-medium">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Суббота</span>
                    <span className="font-medium">11:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Воскресенье</span>
                    <span className="font-medium">Выходной</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-2xl font-bold gold-shimmer">AGolustyan</div>
            <div className="text-sm text-muted-foreground">
              © 2024 AGolustyan. Все права защищены.
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
