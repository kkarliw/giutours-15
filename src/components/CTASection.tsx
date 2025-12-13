import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveSeparator from "./WaveSeparator";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <WaveSeparator variant="primary" />
      <section 
        ref={ref} 
        className="relative py-20 md:py-28 bg-gradient-to-br from-secondary-blue via-secondary-blue-dark to-primary-dark overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-cyan/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              ¿Listo para vivir la{" "}
              <span className="text-accent-yellow">mejor experiencia</span>{" "}
              en Cartagena?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            >
              Contáctanos ahora y recibe tu cotización personalizada. 
              Estamos disponibles 24/7 para hacer de tu viaje algo inolvidable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=573222280104&text=Hola, quiero más información sobre los tours en Cartagena", "_blank")}
                className="bg-accent-yellow hover:bg-accent-yellow-light text-secondary-blue-dark font-bold px-8 py-6 text-lg shadow-xl hover:scale-105 transition-all duration-300 gap-3 w-full sm:w-auto"
              >
                <MessageCircle size={24} />
                Escríbenos por WhatsApp
                <ArrowRight size={20} />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("tel:+573222280104")}
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg gap-3 w-full sm:w-auto backdrop-blur-sm"
              >
                <Phone size={22} />
                +57 322 228 0104
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 text-white/60 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-accent-yellow">✓</span>
                Respuesta inmediata
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-yellow">✓</span>
                Precios sin sorpresas
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-yellow">✓</span>
                +500 viajeros felices
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
