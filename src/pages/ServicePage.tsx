import { motion } from "framer-motion";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Check, X, Lightbulb, MessageCircle, MapPin, Clock, Users, Shield, ChevronRight, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { servicesData } from "@/data/services";
import QuoteForm from "@/components/QuoteForm";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const service = servicesData.find(s => s.slug === slug);
  const otherServices = servicesData.filter(s => s.slug !== slug).slice(0, 3);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div 
          className="text-center p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-semibold mb-3 text-foreground">Servicio no encontrado</h1>
          <p className="text-muted-foreground mb-8">El servicio que buscas no está disponible.</p>
          <Link to="/servicios">
            <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8">
              Ver servicios
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const features = [
    { icon: Clock, label: "Duración", value: service.duration || "Personalizada" },
    { icon: Users, label: "Capacidad", value: "1-15 personas" },
    { icon: Shield, label: "Seguro", value: "Incluido" },
  ];

  return (
    <>
      <SEO 
        title={`${service.title} | GIU Tours Cartagena`}
        description={service.shortDescription}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section - Clean White */}
        <section className="relative pt-24 pb-16 bg-background overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-blue/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
            >
              <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">{service.title}</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {service.badge && (
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                    <Star className="w-3.5 h-3.5" />
                    {service.badge}
                  </span>
                )}
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  {service.title}
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-6 mb-10">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary-blue/10 border border-secondary-blue/20 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-secondary-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{feature.label}</p>
                        <p className="text-sm font-medium text-foreground">{feature.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-white font-medium rounded-full px-8"
                    onClick={() => {
                      const mensaje = `Hola, me interesa el servicio: ${service.title}. ¿Podrían darme más información?`;
                      window.open(`https://wa.me/573222280104?text=${encodeURIComponent(mensaje)}`, "_blank");
                    }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Reservar ahora
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-secondary-blue text-secondary-blue hover:bg-secondary-blue/10 rounded-full px-8"
                    onClick={() => document.querySelector("#quote-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Solicitar cotización
                  </Button>
                </div>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-lg">
                  <motion.img
                    key={selectedImage}
                    src={service.gallery[selectedImage]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                {/* Thumbnails */}
                {service.gallery.length > 1 && (
                  <div className="flex gap-3 mt-4">
                    {service.gallery.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative flex-1 aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                          selectedImage === index 
                            ? 'border-primary shadow-lg' 
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${service.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-muted-foreground mb-4">
                  <span className="w-8 h-[1px] bg-primary/30" />
                  Detalles del servicio
                  <span className="w-8 h-[1px] bg-primary/30" />
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Todo lo que necesitas saber
                </h2>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                  {service.fullDescription}
                </p>
              </motion.div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Includes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center">
                      <Check className="w-5 h-5 text-cyan" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Incluye</h3>
                  </div>
                  <ul className="space-y-4">
                    {service.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <Check className="w-4 h-4 text-cyan mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Not Includes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <X className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">No incluye</h3>
                  </div>
                  <ul className="space-y-4">
                    {service.notIncludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <X className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Recommendations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Recomendaciones</h3>
                  </div>
                  <ul className="space-y-4">
                    {service.recommendations.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <Lightbulb className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-12"
            >
              <div>
                <span className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                  Explora más
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Otros servicios
                </h2>
              </div>
              <Link 
                to="/servicios"
                className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
              >
                Ver todos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {otherServices.map((otherService, index) => (
                <motion.div
                  key={otherService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/servicios/${otherService.slug}`}
                    className="block group"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-border">
                      <img
                        src={otherService.image}
                        alt={otherService.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {otherService.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {otherService.shortDescription}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="md:hidden mt-8 text-center">
              <Link 
                to="/servicios"
                className="inline-flex items-center gap-2 text-primary font-medium"
              >
                Ver todos los servicios
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote-form" className="py-20 bg-secondary-blue relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-blue-dark/30 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Solicita tu cotización
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Cuéntanos sobre tu viaje y te enviaremos una propuesta personalizada
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <QuoteForm preselectedService={service.title} />
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ServicePage;
