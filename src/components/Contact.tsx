import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
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
    setFormData(prev => ({
      ...prev,
      servicios: selectedServices.join(", ")
    }));
  }, [selectedServices]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mensajeTexto = formData.mensaje ? ` ${formData.mensaje}` : "";
    const mensaje = `Hola, soy ${formData.nombre} desde ${formData.origen}. Me gustaría más información sobre los servicios: ${formData.servicios}. Fecha: ${formData.fecha}.${mensajeTexto}`;
    const whatsappUrl = `https://wa.me/573222280104?text=${encodeURIComponent(mensaje)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Gracias por tu solicitud 🙌",
      description: "En breve uno de nuestros asesores se comunicará contigo por WhatsApp.",
      duration: 5000,
    });
    
    // Limpiar formulario
    setFormData({
      nombre: "",
      telefono: "",
      origen: "",
      servicios: selectedServices.join(", "),
      fecha: "",
      mensaje: "",
    });
  };


  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">
            Comencemos tu <span className="text-gradient-gold">Viaje</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Completa el formulario para recibir tu cotización personalizada por WhatsApp. Selecciona tus servicios arriba y cuéntanos los detalles de tu viaje.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nombre completo</label>
                  <Input 
                    placeholder="Tu nombre completo" 
                    className="h-12"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Teléfono / WhatsApp</label>
                  <Input 
                    placeholder="+57 322 228 0104" 
                    type="tel" 
                    className="h-12"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ciudad de origen</label>
                  <Input 
                    placeholder="Ciudad de origen" 
                    className="h-12"
                    value={formData.origen}
                    onChange={(e) => setFormData({...formData, origen: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Fecha deseada</label>
                  <Input 
                    type="date" 
                    className="h-12"
                    value={formData.fecha}
                    onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Servicios o tours seleccionados</label>
                <Input 
                  placeholder="Servicios que te interesan" 
                  className="h-12"
                  value={formData.servicios}
                  onChange={(e) => setFormData({...formData, servicios: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Mensaje adicional (opcional)</label>
                <Textarea
                  placeholder="Cuéntanos más detalles sobre tu viaje..."
                  className="min-h-24 resize-none"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-6 text-lg shadow-primary gap-3"
              >
                <MessageCircle size={24} />
                Enviar por WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
