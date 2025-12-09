import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Heart, Clock } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Seguridad Total",
      description: "Vehículos revisados y conductores certificados con años de experiencia.",
      color: "tropical-turquoise",
    },
    {
      icon: Award,
      title: "Servicio Premium",
      description: "Atención personalizada y vehículos de lujo para tu máximo confort.",
      color: "tropical-yellow",
    },
    {
      icon: Heart,
      title: "Pasión por Colombia",
      description: "Conocemos cada rincón y te llevamos a los lugares más inolvidables.",
      color: "tropical-red",
    },
    {
      icon: Clock,
      title: "Puntualidad Garantizada",
      description: "Respetamos tu tiempo con itinerarios precisos y flexibles.",
      color: "tropical-blue",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" ref={ref} className="py-24 bg-background" aria-label="Acerca de GIU Tours">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-tropical-blue/10 text-tropical-blue rounded-full text-sm font-medium mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            GIU Tours: Tu Viaje con{" "}
            <span className="text-tropical-yellow">Confianza</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos más que transporte. Somos tu compañero de aventuras en Colombia,
            ofreciendo experiencias únicas con el más alto estándar de calidad.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className={`bg-card rounded-2xl p-8 h-full border-2 border-transparent hover:border-${feature.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                <div className={`w-16 h-16 bg-${feature.color}/15 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className={`text-${feature.color}`} size={32} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;