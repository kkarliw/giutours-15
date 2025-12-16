import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ChevronRight, Filter } from 'lucide-react';
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
    { id: 'todos' as Category, label: 'Todos los servicios' },
    { id: 'tours' as Category, label: 'Tours y excursiones' },
    { id: 'traslados' as Category, label: 'Traslados' },
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
        title="Nuestros Servicios - Giutours"
        description="Explora todos nuestros servicios turísticos en Cartagena: City Tours, traslados, excursiones y más."
      />
      <Header />
      
      {/* Simple Header */}
      <section className="pt-28 pb-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Servicios</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-muted-foreground">
              Descubre todas las experiencias turísticas que tenemos para ti en Cartagena y sus alrededores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/servicios/${service.slug}`} className="block">
                  <div className="grid md:grid-cols-2 gap-6 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                    {/* Image */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {service.badge && (
                        <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {service.shortDescription}
                      </p>

                      {service.duration && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration}</span>
                        </div>
                      )}

                      <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                        Ver detalles
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contáctanos y diseñamos una experiencia personalizada para ti
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full"
              onClick={() => window.open("https://wa.me/573222280104", "_blank")}
            >
              Escríbenos por WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
