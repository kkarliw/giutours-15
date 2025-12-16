import { motion } from "framer-motion";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, X, Lightbulb, MessageCircle, MapPin, Clock, Users, Shield, ChevronRight, Grid3X3 } from "lucide-react";
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
  const otherServices = servicesData.filter(s => s.slug !== slug).slice(0, 4);

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
          <h1 className="text-3xl font-bold mb-4 text-foreground">Servicio no encontrado</h1>
          <p className="text-muted-foreground mb-6">El servicio que buscas no existe.</p>
          <Link to="/servicios">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
              Ver todos los servicios
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const features = [
    { icon: Clock, label: "Duración", value: service.duration || "Flexible" },
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
        
        {/* Top Navigation Bar */}
        <div className="bg-card border-b border-border pt-20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground font-medium">{service.title}</span>
              </div>
              <Link 
                to="/servicios"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <Grid3X3 className="w-4 h-4" />
                Explorar más servicios
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Left Column - Gallery */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Main Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <motion.img
                    key={selectedImage}
                    src={service.gallery[selectedImage]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {service.badge && (
                    <span className="absolute top-4 left-4 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-3">
                  {service.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative flex-1 aspect-[4/3] rounded-xl overflow-hidden transition-all ${
                        selectedImage === index 
                          ? 'ring-2 ring-primary ring-offset-2' 
                          : 'opacity-70 hover:opacity-100'
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
              </motion.div>

              {/* Right Column - Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                    {service.title}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center p-4 bg-muted/50 rounded-xl">
                      <feature.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">{feature.label}</p>
                      <p className="text-sm font-semibold text-foreground">{feature.value}</p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full"
                    onClick={() => {
                      const mensaje = `Hola, me interesa el servicio: ${service.title}. ¿Podrían darme más información?`;
                      window.open(`https://wa.me/573222280104?text=${encodeURIComponent(mensaje)}`, "_blank");
                    }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Reservar por WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full"
                    onClick={() => document.querySelector("#quote-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Solicitar cotización
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Includes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-tropical-turquoise/20 rounded-xl flex items-center justify-center">
                    <Check className="w-5 h-5 text-tropical-turquoise" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Incluye</h3>
                </div>
                <ul className="space-y-3">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-tropical-turquoise mt-0.5 flex-shrink-0" />
                      {item}
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
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <X className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">No incluye</h3>
                </div>
                <ul className="space-y-3">
                  {service.notIncludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
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
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-tropical-yellow/20 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-tropical-yellow" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Recomendaciones</h3>
                </div>
                <ul className="space-y-3">
                  {service.recommendations.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Lightbulb className="w-4 h-4 text-tropical-yellow mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">Otros servicios</h2>
              <Link 
                to="/servicios"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Ver todos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                      <img
                        src={otherService.image}
                        alt={otherService.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {otherService.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {otherService.shortDescription}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote-form" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Tu Ruta Personalizada
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Cuéntanos qué necesitas y diseñamos la experiencia perfecta para ti
              </p>
              <Link 
                to="/servicios"
                className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
              >
                <Grid3X3 className="w-4 h-4" />
                Explorar más servicios antes de cotizar
              </Link>
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
