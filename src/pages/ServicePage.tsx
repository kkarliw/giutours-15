import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, X, Lightbulb, Calendar, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { servicesData } from "@/data/services";
import QuoteForm from "@/components/QuoteForm";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
          <Link to="/" className="text-primary hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <SEO 
        title={`${service.title} | GIU Tours Cartagena`}
        description={service.shortDescription}
      />
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-blue-dark via-secondary-blue-dark/50 to-transparent" />
          
          <div className="relative z-10 container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/#services" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver a servicios</span>
              </Link>
              
              {service.badge && (
                <span className="inline-block bg-primary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 ml-4">
                  {service.badge}
                </span>
              )}
              
              <h1 className="text-white mb-4">{service.title}</h1>
              <p className="text-white/90 text-xl max-w-2xl">{service.shortDescription}</p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section ref={ref} className="section-padding bg-background tropical-pattern">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <motion.div 
                className="lg:col-span-2 space-y-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {/* Description */}
                <motion.div variants={itemVariants}>
                  <h2 className="text-secondary-blue mb-4">Sobre este tour</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.fullDescription}
                  </p>
                </motion.div>

                {/* Includes */}
                <motion.div variants={itemVariants} className="bg-cyan/5 rounded-2xl p-6 border border-cyan/20">
                  <h3 className="text-secondary-blue flex items-center gap-2 mb-4">
                    <Check className="w-6 h-6 text-cyan" />
                    ¿Qué incluye?
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Not Includes */}
                <motion.div variants={itemVariants} className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                  <h3 className="text-secondary-blue flex items-center gap-2 mb-4">
                    <X className="w-6 h-6 text-primary" />
                    No incluye
                  </h3>
                  <ul className="space-y-2">
                    {service.notIncludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-primary/60 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Recommendations */}
                <motion.div variants={itemVariants} className="bg-yellow/5 rounded-2xl p-6 border border-yellow/20">
                  <h3 className="text-secondary-blue flex items-center gap-2 mb-4">
                    <Lightbulb className="w-6 h-6 text-yellow" />
                    Recomendaciones
                  </h3>
                  <ul className="space-y-2">
                    {service.recommendations.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-yellow rounded-full flex-shrink-0 mt-2" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Sidebar - Quick Actions */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-card rounded-2xl p-6 border border-border shadow-card sticky top-24">
                  <h3 className="text-xl font-bold text-secondary-blue mb-4">Reservar ahora</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-cyan" />
                      <span>Disponible todos los días</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="w-5 h-5 text-cyan" />
                      <span>Grupos desde 1 persona</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-6 text-lg rounded-full btn-glow-red mb-3"
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
                    className="w-full border-2 border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-white font-semibold py-6 text-lg rounded-full"
                    onClick={() => {
                      document.querySelector("#quote-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Solicitar cotización
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote-form" className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-secondary-blue mb-4">
                Solicita tu <span className="text-gradient-primary">Cotización</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Completa el formulario y recibe una propuesta personalizada para tu viaje
              </p>
            </div>
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