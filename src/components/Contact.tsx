import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  selectedServices: string[];
}

const Contact = ({ selectedServices }: ContactProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    origen: "",
    servicios: "",
    fecha: "",
    mensaje: "",
  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, servicios: selectedServices.join(", ") }));
  }, [selectedServices]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${formData.nombre} desde ${formData.origen}. Me interesan: ${formData.servicios}. Fecha: ${formData.fecha}. ${formData.mensaje}`;
    window.open(`https://wa.me/573222280104?text=${encodeURIComponent(msg)}`, "_blank");
    toast({
      title: "¡Gracias por contactarnos!",
      description: "Te responderemos pronto por WhatsApp.",
      duration: 4000,
    });
    setFormData({ nombre: "", telefono: "", origen: "", servicios: selectedServices.join(", "), fecha: "", mensaje: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+57 322 228 0104",
      description: "Respuesta inmediata",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@giutours.com",
      description: "Para cotizaciones formales",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Cartagena de Indias",
      description: "Caribe Colombiano",
    },
    {
      icon: Clock,
      title: "Horario",
      value: "24/7 Disponibles",
      description: "Siempre para ti",
    },
  ];

  const benefits = [
    "Respuesta en menos de 1 hora",
    "Cotización personalizada",
    "Sin compromiso",
    "Asesoría experta gratuita",
  ];

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-cyan/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Contáctanos</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Planifica tu{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">aventura</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-primary/10 origin-left -z-0"
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Cuéntanos sobre tu viaje y recibe una cotización personalizada sin compromiso
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary-blue/10 to-cyan/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-secondary-blue" />
                  </div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    {item.title}
                  </h4>
                  <p className="font-semibold text-foreground text-sm">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary-blue/5 to-cyan/5 border border-secondary-blue/10">
              <h4 className="font-semibold text-foreground mb-4">Al contactarnos recibes:</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Trust Statement */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                "Nos importa hacer las cosas bien, cumplir lo que prometemos y ofrecer un servicio 
                honesto, organizado y humano, donde la confianza no se pide: se gana."
              </p>
              <p className="text-sm font-semibold text-foreground mt-3">— Equipo Giutours</p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-cyan/20 rounded-br-2xl" />
              
              <form 
                onSubmit={handleSubmit} 
                className="relative bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl shadow-black/5"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Solicita tu cotización
                  </h3>
                  <p className="text-muted-foreground">
                    Completa el formulario y te contactamos por WhatsApp en minutos
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">
                        Nombre completo
                      </label>
                      <Input 
                        placeholder="Tu nombre" 
                        className="h-12 bg-muted/50 border-border focus:border-primary/50 focus:ring-primary/20"
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">
                        WhatsApp
                      </label>
                      <Input 
                        placeholder="+57 300 000 0000" 
                        type="tel" 
                        className="h-12 bg-muted/50 border-border focus:border-primary/50 focus:ring-primary/20"
                        value={formData.telefono}
                        onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">
                        Ciudad de origen
                      </label>
                      <Input 
                        placeholder="¿De dónde nos visitas?" 
                        className="h-12 bg-muted/50 border-border focus:border-primary/50 focus:ring-primary/20"
                        value={formData.origen}
                        onChange={(e) => setFormData({...formData, origen: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">
                        Fecha del viaje
                      </label>
                      <Input 
                        type="date" 
                        className="h-12 bg-muted/50 border-border focus:border-primary/50 focus:ring-primary/20"
                        value={formData.fecha}
                        onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-foreground">
                      Servicios de interés
                    </label>
                    <Input 
                      placeholder="¿Qué servicios te interesan?" 
                      className="h-12 bg-muted/50 border-border focus:border-primary/50 focus:ring-primary/20"
                      value={formData.servicios}
                      onChange={(e) => setFormData({...formData, servicios: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-foreground">
                      Mensaje adicional <span className="text-muted-foreground font-normal">(opcional)</span>
                    </label>
                    <Textarea
                      placeholder="Cuéntanos más sobre tu viaje ideal..."
                      className="min-h-24 resize-none bg-muted/50 border-border focus:border-primary/50 focus:ring-primary/20"
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold text-base rounded-xl group transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Enviar por WhatsApp
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Al enviar, aceptas recibir mensajes de WhatsApp de Giutours
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Contact;
