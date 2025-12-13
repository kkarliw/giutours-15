import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, X, Lightbulb, Calendar, Users, MessageCircle, MapPin, Star, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { servicesData } from "@/data/services";
import QuoteForm from "@/components/QuoteForm";
import WaveSeparator from "@/components/WaveSeparator";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div 
          className="text-center p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Servicio no encontrado</h1>
          <p className="text-muted-foreground mb-6">El servicio que buscas no existe o fue movido.</p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const features = [
    { icon: Clock, text: "Disponible todos los días" },
    { icon: Users, text: "Grupos desde 1 persona" },
    { icon: Shield, text: "Seguro incluido" },
  ];

  return (
    <>
      <SEO 
        title={`${service.title} | GIU Tours Cartagena`}
        description={service.shortDescription}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section with Parallax */}
        <section className="relative h-[50vh] sm:h-[55vh] md:h-[65vh] min-h-[350px] md:min-h-[450px] flex items-end overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-blue-dark via-secondary-blue-dark/60 to-transparent" />
          
          {/* Floating particles decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent-yellow/40 rounded-full"
              animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent-cyan/50 rounded-full"
              animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary/30 rounded-full"
              animate={{ y: [0, -25, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 pb-8 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/#services" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-3 md:mb-4 transition-colors text-sm md:text-base group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Volver a servicios</span>
              </Link>
              
              <div className="flex flex-wrap items-center gap-3 mb-3 md:mb-4">
                {service.badge && (
                  <motion.span 
                    className="inline-block bg-primary text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {service.badge}
                  </motion.span>
                )}
                <motion.div 
                  className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-accent-yellow text-accent-yellow" />
                  ))}
                  <span className="text-white text-xs md:text-sm ml-1">5.0</span>
                </motion.div>
              </div>
              
              <h1 className="text-white mb-2 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{service.title}</h1>
              <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">{service.shortDescription}</p>
            </motion.div>
          </div>
        </section>

        <WaveSeparator variant="cyan" flip className="bg-background -mt-1" />

        {/* Content Section */}
        <section ref={ref} className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <motion.div 
                className="lg:col-span-2 space-y-6 md:space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {/* Description */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 border border-border shadow-card"
                >
                  <h2 className="text-secondary-blue mb-3 md:mb-4 text-xl md:text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary-blue/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-secondary-blue" />
                    </div>
                    Sobre este tour
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {service.fullDescription}
                  </p>
                </motion.div>

                {/* Includes */}
                <motion.div 
                  variants={itemVariants} 
                  className="bg-gradient-to-br from-accent-cyan/5 to-accent-cyan/10 rounded-2xl md:rounded-3xl p-5 md:p-8 border border-accent-cyan/20 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl" />
                  <h3 className="text-secondary-blue flex items-center gap-3 mb-4 md:mb-6 text-lg md:text-xl relative z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center">
                      <Check className="w-5 h-5 md:w-6 md:h-6 text-accent-cyan" />
                    </div>
                    ¿Qué incluye?
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3 md:gap-4 relative z-10">
                    {service.includes.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3 bg-white/50 p-3 md:p-4 rounded-xl"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1 * index }}
                      >
                        <div className="w-6 h-6 bg-accent-cyan/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-accent-cyan" />
                        </div>
                        <span className="text-foreground text-sm md:text-base">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Not Includes */}
                <motion.div 
                  variants={itemVariants} 
                  className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl md:rounded-3xl p-5 md:p-8 border border-primary/20 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                  <h3 className="text-secondary-blue flex items-center gap-3 mb-4 md:mb-6 text-lg md:text-xl relative z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <X className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    No incluye
                  </h3>
                  <ul className="space-y-2 md:space-y-3 relative z-10">
                    {service.notIncludes.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1 * index }}
                      >
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm md:text-base">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Recommendations */}
                <motion.div 
                  variants={itemVariants} 
                  className="bg-gradient-to-br from-accent-yellow/5 to-accent-yellow/10 rounded-2xl md:rounded-3xl p-5 md:p-8 border border-accent-yellow/20 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-yellow/10 rounded-full blur-3xl" />
                  <h3 className="text-secondary-blue flex items-center gap-3 mb-4 md:mb-6 text-lg md:text-xl relative z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-yellow/20 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-accent-yellow" />
                    </div>
                    Recomendaciones
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3 md:gap-4 relative z-10">
                    {service.recommendations.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3 bg-white/50 p-3 md:p-4 rounded-xl"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1 * index }}
                      >
                        <div className="w-2 h-2 bg-accent-yellow rounded-full flex-shrink-0 mt-2" />
                        <span className="text-foreground text-sm md:text-base">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Sidebar - Quick Actions */}
              <motion.div 
                className="space-y-4 md:space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 border border-border shadow-card lg:sticky lg:top-24">
                  <h3 className="text-lg md:text-xl font-bold text-secondary-blue mb-4 md:mb-6">Reservar ahora</h3>
                  
                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-9 h-9 md:w-10 md:h-10 bg-accent-cyan/10 rounded-xl flex items-center justify-center">
                          <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-accent-cyan" />
                        </div>
                        <span className="text-sm md:text-base">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-5 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all mb-3"
                    onClick={() => {
                      const mensaje = `Hola, me interesa el servicio: ${service.title}. ¿Podrían darme más información?`;
                      window.open(`https://wa.me/573222280104?text=${encodeURIComponent(mensaje)}`, "_blank");
                    }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Reservar por WhatsApp
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-2 border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-white font-semibold py-5 md:py-6 text-base md:text-lg rounded-full transition-all"
                    onClick={() => {
                      document.querySelector("#quote-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Solicitar cotización
                  </Button>
                </div>

                {/* Other Services */}
                <div className="bg-secondary/30 rounded-2xl md:rounded-3xl p-5 md:p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-sm md:text-base">Otros servicios</h4>
                  <div className="space-y-2">
                    {servicesData
                      .filter(s => s.slug !== slug)
                      .slice(0, 3)
                      .map((otherService) => (
                        <Link
                          key={otherService.id}
                          to={`/servicios/${otherService.slug}`}
                          className="block p-3 bg-card rounded-xl hover:bg-primary/5 transition-colors group"
                        >
                          <span className="text-foreground group-hover:text-primary transition-colors text-sm md:text-base font-medium">
                            {otherService.title}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <WaveSeparator variant="yellow" />
        <section id="quote-form" className="py-12 md:py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-secondary-blue mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">
                Solicita tu <span className="text-gradient-primary">Cotización</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Completa el formulario y recibe una propuesta personalizada para tu viaje
              </p>
            </motion.div>
            <QuoteForm preselectedService={service.title} />
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ServicePage;
