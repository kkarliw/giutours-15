import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone, ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveSeparator from "./WaveSeparator";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { icon: Clock, text: "Respuesta inmediata" },
    { icon: Shield, text: "Precios sin sorpresas" },
    { icon: Sparkles, text: "+500 viajeros felices" },
  ];

  return (
    <>
      <WaveSeparator variant="yellow" />
      <section 
        ref={ref} 
        className="relative py-16 md:py-24 bg-background overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-tl from-accent-cyan/15 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent-yellow/10 rounded-full blur-2xl" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles size={16} />
              Disponibles 24/7
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight"
            >
              ¿Listo para vivir la{" "}
              <span className="text-primary">mejor experiencia</span>{" "}
              en Cartagena?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto px-4"
            >
              Contáctanos ahora y recibe tu cotización personalizada. 
              Tu aventura caribeña comienza con un mensaje.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
            >
              <Button
                size="lg"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=573222280104&text=Hola, quiero más información sobre los tours en Cartagena", "_blank")}
                className="bg-primary hover:bg-primary-dark text-white font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 gap-2 md:gap-3 w-full sm:w-auto rounded-full"
              >
                <MessageCircle size={22} />
                <span className="hidden xs:inline">Escríbenos por</span> WhatsApp
                <ArrowRight size={18} className="hidden sm:block" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("tel:+573222280104")}
                className="border-2 border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-white font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg gap-2 md:gap-3 w-full sm:w-auto rounded-full"
              >
                <Phone size={20} />
                +57 322 228 0104
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 md:mt-14 flex flex-wrap justify-center gap-4 md:gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm md:text-base text-muted-foreground"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center">
                    <benefit.icon size={18} className="text-accent-cyan" />
                  </div>
                  <span>{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
