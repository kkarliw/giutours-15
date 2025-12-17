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
    setFormData(prev => ({ ...prev, servicios: selectedServices.join(", ") }));
  }, [selectedServices]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${formData.nombre} desde ${formData.origen}. Me interesan: ${formData.servicios}. Fecha: ${formData.fecha}. ${formData.mensaje}`;
    window.open(`https://wa.me/573222280104?text=${encodeURIComponent(msg)}`, "_blank");
    toast({
      title: "¡Gracias!",
      description: "Te contactaremos pronto por WhatsApp.",
      duration: 4000,
    });
    setFormData({ nombre: "", telefono: "", origen: "", servicios: selectedServices.join(", "), fecha: "", mensaje: "" });
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="mb-4">
            Solicita tu <span className="text-primary">cotización</span>
          </h2>
          <p className="text-lg">
            Completa el formulario y te contactamos por WhatsApp
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Nombre</label>
                <Input 
                  placeholder="Tu nombre" 
                  className="h-11"
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">WhatsApp</label>
                <Input 
                  placeholder="+57..." 
                  type="tel" 
                  className="h-11"
                  value={formData.telefono}
                  onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Ciudad de origen</label>
                <Input 
                  placeholder="Ciudad" 
                  className="h-11"
                  value={formData.origen}
                  onChange={(e) => setFormData({...formData, origen: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Fecha del viaje</label>
                <Input 
                  type="date" 
                  className="h-11"
                  value={formData.fecha}
                  onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Servicios</label>
              <Input 
                placeholder="Servicios seleccionados" 
                className="h-11"
                value={formData.servicios}
                onChange={(e) => setFormData({...formData, servicios: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Mensaje (opcional)</label>
              <Textarea
                placeholder="Detalles adicionales..."
                className="min-h-20 resize-none"
                value={formData.mensaje}
                onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-5 text-base rounded-xl"
            >
              <MessageCircle size={20} className="mr-2" />
              Enviar por WhatsApp
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
