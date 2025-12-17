import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ChevronRight, Sparkles, Star, Users } from 'lucide-react';
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
    { id: 'todos' as Category, label: 'Todos los servicios', count: servicesData.length },
    { id: 'tours' as Category, label: 'Tours', count: servicesData.filter(s => s.slug.includes('tour') || s.slug.includes('volcan') || s.slug.includes('baru')).length },
    { id: 'traslados' as Category, label: 'Traslados', count: servicesData.filter(s => s.slug.includes('traslado') || s.slug.includes('aeropuerto')).length },
  ];

  const filteredServices = servicesData.filter(service => {
    if (activeCategory === 'todos') return true;
    if (activeCategory === 'tours') {
      return service.slug.includes('tour') || service.slug.includes('volcan') || service.slug.includes('baru');
    }
    if (activeCategory === 'traslados') {
      return service.slug.includes('traslado') || service.slug.includes('aeropuerto');
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Servicios Premium - Giutours"
        description="Descubre nuestros servicios turísticos de lujo en Cartagena. Experiencias exclusivas con la más alta calidad."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-secondary-blue/5 via-background to-background overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Experiencias Exclusivas</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Servicios <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-blue">Premium</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Descubre Cartagena con experiencias diseñadas para quienes buscan lo extraordinario. 
              Cada detalle pensado para crear recuerdos inolvidables.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-border/50"
            >
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> Calificación
                </div>
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
      <section className="py-6 bg-background/80 backdrop-blur-sm border-y border-border/50 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-secondary-blue text-white shadow-lg shadow-secondary-blue/25'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
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
      <section className="py-16 md:py-24">
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
                  <div className="relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-secondary-blue/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary-blue/10 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
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
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                            <Clock className="w-3.5 h-3.5" />
                            {service.duration}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold mb-3 group-hover:text-secondary-blue transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
                        {service.shortDescription}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>Grupos o privado</span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-secondary-blue font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          Reservar <ArrowRight className="w-4 h-4" />
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

      {/* Premium CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-blue via-secondary-blue/95 to-primary" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
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
                className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold backdrop-blur-sm"
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
