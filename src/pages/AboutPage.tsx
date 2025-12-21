import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Users, Award, Target, Eye, CheckCircle, MapPin, Clock, Star, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const values = [
    {
      icon: Shield,
      title: "Seguridad",
      description: "Vehículos modernos con seguro, revisión técnica al día y conductores profesionales certificados.",
      color: "text-secondary-blue",
      bg: "bg-secondary-blue/10"
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Amamos Cartagena y el Caribe colombiano. Eso se refleja en cada detalle de nuestro servicio.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada cliente es único. Creamos experiencias adaptadas a tus necesidades específicas.",
      color: "text-cyan",
      bg: "bg-cyan/10"
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Nos esforzamos por superar expectativas en cada viaje, cada tour, cada traslado.",
      color: "text-yellow-600",
      bg: "bg-yellow/10"
    }
  ];

  const stats = [
    { number: "500+", label: "Tours realizados" },
    { number: "100%", label: "Clientes satisfechos" },
    { number: "7+", label: "Años de experiencia" },
    { number: "24/7", label: "Disponibilidad" }
  ];

  const services = [
    "Tours por la ciudad amurallada",
    "Traslados aeropuerto",
    "Pasadías a islas y playas",
    "Volcán del Totumo",
    "Tours corporativos",
    "Servicios personalizados"
  ];

  return (
    <>
      <SEO 
        title="Sobre Nosotros | GIU Tours Cartagena"
        description="Conoce la historia de GIU Tours, tu compañero de aventuras en el Caribe colombiano. Transporte turístico seguro, cómodo y personalizado."
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section - Minimal White */}
        <section className="pt-32 pb-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-blue/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-blue/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-secondary-blue" />
                <span className="text-sm font-medium text-secondary-blue">Desde Cartagena para el mundo</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                Conoce <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-blue">GIU Tours</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Más que transporte, somos tu puerta de entrada a experiencias inolvidables en el Caribe colombiano
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section ref={ref} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-muted-foreground mb-4">
                  <span className="w-8 h-[1px] bg-primary/30" />
                  Nuestra Historia
                </span>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Una pasión por compartir la <span className="text-primary">magia del Caribe</span>
                </h2>
                
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    GIU Tours nació de la pasión por compartir las maravillas de Cartagena y el Caribe colombiano con el mundo. Desde nuestros inicios, hemos tenido una visión clara: ofrecer un servicio de transporte turístico que combine seguridad, comodidad y una experiencia verdaderamente personalizada.
                  </p>
                  <p>
                    Con más de 7 años de experiencia, somos reconocidos por nuestro compromiso con la excelencia. Cada miembro de nuestro equipo comparte la misma pasión por hacer de cada viaje una experiencia memorable.
                  </p>
                  <p>
                    Conocemos cada rincón de nuestra tierra y queremos que tú también lo descubras con la comodidad y seguridad que mereces.
                  </p>
                </div>

                {/* Services List */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-all duration-300"
                    >
                      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Location Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-6 bg-gradient-to-br from-secondary-blue to-secondary-blue-dark p-6 rounded-2xl text-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Cartagena de Indias, Colombia</h4>
                      <p className="text-white/70 text-sm">
                        Operamos desde el corazón del Caribe colombiano, cubriendo toda la región.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-muted-foreground mb-4">
                <span className="w-8 h-[1px] bg-primary/30" />
                Lo que nos define
                <span className="w-8 h-[1px] bg-primary/30" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestros <span className="text-primary">Valores</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Los principios que guían cada uno de nuestros servicios
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-14 h-14 ${value.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <value.icon className={`w-7 h-7 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-secondary-blue to-secondary-blue-dark rounded-3xl p-8 md:p-10 text-white"
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                <p className="text-white/80 leading-relaxed">
                  Brindar servicios de transporte turístico de alta calidad que permitan a nuestros clientes descubrir la magia del Caribe colombiano con seguridad, comodidad y un servicio personalizado que supere sus expectativas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-10 text-white"
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                <p className="text-white/80 leading-relaxed">
                  Ser la agencia de transporte turístico líder en la región Caribe, reconocida por nuestra excelencia en el servicio, innovación constante y compromiso con crear experiencias de viaje memorables.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Listo para vivir la experiencia <span className="text-primary">GIU Tours</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Descubre por qué más de 500 clientes confían en nosotros para sus aventuras en el Caribe colombiano.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white rounded-full px-8"
                  onClick={() => window.open("https://wa.me/573222280104", "_blank")}
                >
                  Contactar por WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary-blue text-secondary-blue hover:bg-secondary-blue/10 rounded-full px-8"
                  asChild
                >
                  <Link to="/servicios">Ver Servicios</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default AboutPage;