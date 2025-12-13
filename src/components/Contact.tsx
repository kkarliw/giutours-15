import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-24 bg-tropical-blue text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-tropical-yellow rounded-full text-sm font-medium mb-4">
              Contáctanos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para tu <span className="text-tropical-yellow">aventura</span>?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Estamos aquí para ayudarte a planificar el viaje perfecto.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <a href="tel:+573001234567" className="p-5 bg-white/10 rounded-2xl hover:bg-white/20 transition-all">
                <Phone className="w-8 h-8 text-tropical-red mb-3" />
                <p className="text-white/70 text-sm">Teléfono</p>
                <p className="font-semibold">+57 300 123 4567</p>
              </a>
              <a href="https://wa.me/573001234567" className="p-5 bg-white/10 rounded-2xl hover:bg-white/20 transition-all">
                <MessageCircle className="w-8 h-8 text-tropical-turquoise mb-3" />
                <p className="text-white/70 text-sm">WhatsApp</p>
                <p className="font-semibold">+57 300 123 4567</p>
              </a>
              <a href="mailto:info@giutours.com" className="p-5 bg-white/10 rounded-2xl hover:bg-white/20 transition-all">
                <Mail className="w-8 h-8 text-tropical-yellow mb-3" />
                <p className="text-white/70 text-sm">Email</p>
                <p className="font-semibold">info@giutours.com</p>
              </a>
              <div className="p-5 bg-white/10 rounded-2xl">
                <MapPin className="w-8 h-8 text-tropical-gold mb-3" />
                <p className="text-white/70 text-sm">Ubicación</p>
                <p className="font-semibold">Cartagena, Colombia</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-tropical-yellow rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-tropical-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Horario de Atención</h3>
                <p className="text-white/70">Estamos disponibles para ti</p>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between py-3 border-b border-white/10">
                <span className="text-white/80">Lunes - Viernes</span>
                <span className="font-semibold">7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between py-3 border-b border-white/10">
                <span className="text-white/80">Sábado</span>
                <span className="font-semibold">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-white/80">Domingo</span>
                <span className="font-semibold">9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <a href="https://wa.me/573001234567?text=Hola,%20quiero%20información%20sobre%20los%20tours" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full bg-tropical-turquoise hover:bg-tropical-turquoise/90 text-white py-6 text-lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Escríbenos por WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
