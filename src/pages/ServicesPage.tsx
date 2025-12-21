import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ChevronRight, Sparkles, Star, Users, MapPin, Compass } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { servicesData } from '@/data/services';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

type Category = 'todos' | 'tours' | 'traslados';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('todos');

  const categories = [
    { id: 'todos' as Category, label: 'Todos', count: servicesData.length, color: 'bg-secondary-blue' },
    { id: 'tours' as Category, label: 'Tours y Pasadías', count: servicesData.filter(s => s.slug.includes('tour') || s.slug.includes('volcan') || s.slug.includes('baru') || s.slug.includes('rosario')).length, color: 'bg-primary' },
    { id: 'traslados' as Category, label: 'Traslados', count: servicesData.filter(s => s.slug.includes('traslado') || s.slug.includes('aeropuerto') || s.slug.includes('urbano')).length, color: 'bg-cyan' },
  ];

  const filteredServices = servicesData.filter(service => {
    if (activeCategory === 'todos') return true;
    if (activeCategory === 'tours') {
      return service.slug.includes('tour') || service.slug.includes('volcan') || service.slug.includes('baru') || service.slug.includes('rosario');
    }
    if (activeCategory === 'traslados') {
      return service.slug.includes('traslado') || service.slug.includes('aeropuerto') || service.slug.includes('urbano');
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Servicios - Tours y Traslados en Cartagena | GIU Tours"
        description="Descubre nuestros servicios turísticos en Cartagena. Tours, pasadías a islas, traslados aeropuerto y más."
      />
      <Header />
      
      {/* Hero Section - Minimal White */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-blue/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-8"
          >
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            <span className="text-foreground font-medium">Servicios</span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-blue/10 rounded-full mb-6"
            >
              <Compass className="w-4 h-4 text-secondary-blue" />
              <span className="text-sm font-medium text-secondary-blue">Experiencias Únicas</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground"
            >
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-blue">Servicios</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Descubre Cartagena y el Caribe colombiano con experiencias diseñadas para crear recuerdos inolvidables.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-border"
            >
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground flex items-center gap-1">
                  4.9 <Star className="w-5 h-5 fill-yellow text-yellow" />
                </div>
                <div className="text-sm text-muted-foreground">Calificación</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">7+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-background border-y border-border sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? `${cat.color} text-white shadow-lg`
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === cat.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-background text-muted-foreground'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={`/servicios/${service.slug}`} className="block group h-full">
                  <div className="relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                            <Star className="w-3 h-3 fill-current" />
                            {service.badge}
                          </span>
                        </div>
                      )}

                      {/* Duration Badge */}
                      {service.duration && (
                        <div className="absolute bottom-4 left-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 text-foreground text-xs font-medium rounded-full">
                            <Clock className="w-3.5 h-3.5" />
                            {service.duration}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
                        {service.shortDescription}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>Grupos o privado</span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          Ver más <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-secondary-blue">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-blue-dark/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white/90">Experiencia Personalizada</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Buscas algo único?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Diseñamos experiencias a medida para momentos especiales. 
              Bodas, aniversarios, eventos corporativos o simplemente un día perfecto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-secondary-blue hover:bg-white/90 rounded-full px-8 py-6 text-base font-semibold shadow-2xl"
                onClick={() => window.open("https://wa.me/573222280104", "_blank")}
              >
                Contactar ahora <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold"
                asChild
              >
                <Link to="/#cotizar">
                  Solicitar cotización
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;