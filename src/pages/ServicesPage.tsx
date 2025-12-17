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
    { id: 'todos' as Category, label: 'Todos' },
    { id: 'tours' as Category, label: 'Tours' },
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
        title="Servicios - Giutours"
        description="Descubre todos nuestros servicios turísticos en Cartagena"
      />
      <Header />
      
      {/* Header */}
      <section className="pt-28 pb-10 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Servicios</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Nuestros Servicios</h1>
            <p className="text-muted-foreground">
              Experiencias turísticas en Cartagena y alrededores
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 bg-background border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-secondary-blue text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/servicios/${service.slug}`} className="block group">
                  <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary-blue/30 transition-all">
                    <div className="relative h-48 overflow-hidden">
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

                    <div className="p-5">
                      <h2 className="text-lg font-semibold mb-2 group-hover:text-secondary-blue transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {service.shortDescription}
                      </p>

                      {service.duration && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                          <Clock className="w-3.5 h-3.5" />
                          {service.duration}
                        </div>
                      )}

                      <span className="inline-flex items-center gap-1.5 text-secondary-blue font-medium text-sm">
                        Ver detalles <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Necesitas algo especial?</h2>
          <p className="text-muted-foreground mb-6">Diseñamos experiencias personalizadas</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white rounded-full"
            onClick={() => window.open("https://wa.me/573222280104", "_blank")}
          >
            Escríbenos <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
