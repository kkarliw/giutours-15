import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Heart, Clock, Users, MapPin, CheckCircle, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Shield,
      title: "Operación Responsable",
      description: "Cuidamos el entorno y valoramos la cultura local",
    },
    {
      icon: Users,
      title: "Trato Ético",
      description: "Conductores y guías comprometidos con profesionalismo",
    },
    {
      icon: Heart,
      title: "Turismo Consciente",
      description: "Disfrutar sin afectar el lugar que nos recibe",
    },
    {
      icon: Award,
      title: "Experiencia Real",
      description: "Más de 20 años recorriendo Colombia",
    },
  ];

  const stats = [
    { value: "20+", label: "Años de experiencia" },
    { value: "5K+", label: "Viajeros felices" },
    { value: "100%", label: "Compromiso" },
    { value: "24/7", label: "Disponibilidad" },
  ];

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-blue/5 border border-secondary-blue/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-secondary-blue" />
            <span className="text-sm font-medium text-secondary-blue">Nuestra Esencia</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Más que transporte,{" "}
            <span className="relative">
              <span className="relative z-10 text-primary">tu compañero</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-primary/10 origin-left -z-0"
              />
            </span>{" "}
            de aventuras
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Somos una empresa de transporte turístico privado que acompaña a los viajeros desde que llegan a Cartagena. 
            Hacemos que moverse sea fácil, cómodo y seguro, con un servicio pensado para personas, familias y grupos 
            que quieren disfrutar sin complicaciones.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-primary/20 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan/10 to-transparent rounded-2xl" />
              
              <div className="relative bg-card border border-border rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary-blue/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Nuestra Historia</h3>
                    <p className="text-sm text-muted-foreground">Desde Cartagena al mundo</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Giutours nació a partir de la visión de dos socios que llegaron a Cartagena como turistas, 
                  en busca de nuevas oportunidades, y se encontraron con una ciudad llena de historia, 
                  paisajes únicos y una identidad cultural que conecta con personas de todo el mundo.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Con el respaldo de más de 20 años de experiencia recorriendo no solo las calles de la ciudad, 
                  sino también distintas regiones del país, Giutours se construyó sobre el conocimiento real 
                  del destino y la convicción de hacer las cosas bien.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Cartagena", "Santa Marta", "Barranquilla", "Mompox"].map((city, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 text-sm font-medium bg-muted/80 text-foreground rounded-lg border border-border"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-12 h-12 mb-4 bg-gradient-to-br from-secondary-blue/10 to-cyan/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="text-secondary-blue" size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-blue/5 via-primary/5 to-cyan/5 rounded-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-12 rounded-3xl border border-border/50">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <CheckCircle className="w-5 h-5 text-cyan" />
            <span className="text-sm font-medium text-cyan">Por qué elegirnos</span>
          </div>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
            "Tratamos a cada cliente con respeto, claridad y atención real. Trabajamos con responsabilidad, 
            puntualidad y compromiso, cuidando tanto la experiencia del viajero como los destinos que visitamos. 
            <span className="text-primary font-medium"> La confianza no se pide: se gana.</span>"
          </p>
        </motion.div>
      </div>
      
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default About;
