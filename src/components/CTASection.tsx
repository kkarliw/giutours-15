import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-secondary-blue-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para tu <span className="text-cyan">aventura</span>?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Contáctanos ahora y comienza a planificar tu viaje inolvidable
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-6 rounded-full"
              onClick={() => window.open("https://wa.me/573222280104", "_blank")}
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-secondary-blue-dark px-8 py-6 rounded-full"
              onClick={() => window.open("tel:+573222280104")}
            >
              <Phone className="mr-2" size={20} />
              Llamar ahora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
