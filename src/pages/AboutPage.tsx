import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Users, Award, Target, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import WaveSeparator from "@/components/WaveSeparator";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const values = [
    {
      icon: Shield,
      title: "Seguridad",
      description: "Todos nuestros vehículos cumplen con los más altos estándares de seguridad y mantenimiento.",
      color: "text-cyan",
      bg: "bg-cyan/10"
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Amamos lo que hacemos y eso se refleja en cada detalle de nuestro servicio.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada cliente es único. Creamos experiencias adaptadas a tus necesidades.",
      color: "text-yellow",
      bg: "bg-yellow/10"
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Nos esforzamos por superar tus expectativas en cada viaje.",
      color: "text-secondary-blue",
      bg: "bg-secondary-blue/10"
    }
  ];

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

  return (
    <>
      <SEO 
        title="Sobre Nosotros | GIU Tours Cartagena"
        description="Conoce la historia de GIU Tours, tu compañero de aventuras en el Caribe colombiano. Transporte turístico seguro, cómodo y personalizado."
      />
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-secondary-blue to-secondary-blue-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6">
                Conoce <span className="text-gradient-gold">GIU Tours</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Más que transporte, somos tu puerta de entrada a experiencias inolvidables en el Caribe colombiano
              </p>
            </motion.div>
          </div>
          <WaveSeparator variant="cyan" className="mt-12" />
        </section>

        {/* Story Section */}
        <section ref={ref} className="section-padding bg-background tropical-pattern">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-secondary-blue mb-6">
                  Nuestra <span className="text-gradient-primary">Historia</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    GIU Tours nació de la pasión por compartir las maravillas de Cartagena y el Caribe colombiano con el mundo. Desde nuestros inicios, hemos tenido una visión clara: ofrecer un servicio de transporte turístico que combine seguridad, comodidad y una experiencia verdaderamente personalizada.
                  </p>
                  <p>
                    Hoy, somos reconocidos por nuestro compromiso con la excelencia. Cada miembro de nuestro equipo comparte la misma pasión por hacer de cada viaje una experiencia memorable. Conocemos cada rincón de nuestra tierra y queremos que tú también lo descubras.
                  </p>
                  <p>
                    Ya sea que busques un tour por la ciudad amurallada, un día de playa en Barú, o un traslado ejecutivo, en GIU Tours encontrarás el servicio perfecto para ti.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan/20 via-primary/10 to-yellow/20 rounded-3xl p-8 md:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "500+", label: "Tours realizados" },
                      { number: "100%", label: "Clientes satisfechos" },
                      { number: "5+", label: "Años de experiencia" },
                      { number: "24/7", label: "Disponibilidad" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-white/80 rounded-2xl shadow-card">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-secondary-blue mb-4">
                Nuestros <span className="text-gradient-gold">Valores</span>
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
                  className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-hover hover:-translate-y-2 transition-all duration-300"
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
        <section className="section-padding bg-background">
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

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default AboutPage;