import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Heart, Clock } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Seguridad",
      description: "Vehículos revisados y conductores certificados",
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Servicio de alta gama y atención personalizada",
    },
    {
      icon: Heart,
      title: "Pasión Local",
      description: "Conocemos cada rincón de Colombia",
    },
    {
      icon: Clock,
      title: "Puntualidad",
      description: "Respetamos tu tiempo en cada viaje",
    },
  ];

  return (
    <section id="about" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="mb-4">
            Tu viaje comienza con{" "}
            <span className="text-primary">confianza</span>
          </h2>
          <p className="text-lg">
            Más que transporte, somos tu compañero de aventuras en Colombia
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-secondary-blue/10 rounded-2xl flex items-center justify-center">
                <feature.icon className="text-secondary-blue" size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
