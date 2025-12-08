import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Users, Car, Mail, User, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { servicesData } from "@/data/services";

interface QuoteFormProps {
  preselectedService?: string;
  selectedServices?: string[];
}

const QuoteForm = ({ preselectedService, selectedServices = [] }: QuoteFormProps) => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    fecha: "",
    pasajeros: "",
    vehiculo: "",
    servicios: [] as string[],
    mensaje: "",
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        servicios: [preselectedService]
      }));
    } else if (selectedServices.length > 0) {
      setFormData(prev => ({
        ...prev,
        servicios: selectedServices
      }));
    }
  }, [preselectedService, selectedServices]);

  const vehicleOptions = [
    { value: "sedan", label: "Sedán (1-4 pasajeros)" },
    { value: "suv", label: "SUV (1-6 pasajeros)" },
    { value: "van", label: "Van (1-12 pasajeros)" },
    { value: "buseta", label: "Buseta (13-20 pasajeros)" },
  ];

  const handleServiceToggle = (serviceTitle: string) => {
    setFormData(prev => ({
      ...prev,
      servicios: prev.servicios.includes(serviceTitle)
        ? prev.servicios.filter(s => s !== serviceTitle)
        : [...prev.servicios, serviceTitle]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviciosTexto = formData.servicios.length > 0 
      ? formData.servicios.join(", ") 
      : "No especificado";
    
    const mensaje = `*Solicitud de Cotización - GIU Tours*

👤 *Nombre:* ${formData.nombre}
📱 *WhatsApp:* ${formData.telefono}
📧 *Correo:* ${formData.email}
📅 *Fecha del servicio:* ${formData.fecha}
👥 *Número de pasajeros:* ${formData.pasajeros}
🚗 *Tipo de vehículo:* ${formData.vehiculo || "No especificado"}

🎯 *Servicios de interés:*
${serviciosTexto}

📝 *Detalles adicionales:*
${formData.mensaje || "Sin detalles adicionales"}`;

    const whatsappUrl = `https://wa.me/573222280104?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "¡Solicitud enviada! 🎉",
      description: "Te contactaremos pronto por WhatsApp con tu cotización personalizada.",
      duration: 5000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-6 md:p-10 border border-border shadow-xl">
        {/* Personal Info */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <User className="w-4 h-4 text-cyan" />
              Nombre completo
            </label>
            <Input 
              placeholder="Tu nombre completo"
              className="h-12 rounded-xl border-border focus:border-cyan"
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Phone className="w-4 h-4 text-cyan" />
              WhatsApp
            </label>
            <Input 
              placeholder="+57 300 123 4567"
              type="tel"
              className="h-12 rounded-xl border-border focus:border-cyan"
              value={formData.telefono}
              onChange={(e) => setFormData({...formData, telefono: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium mb-2">
            <Mail className="w-4 h-4 text-cyan" />
            Correo electrónico
          </label>
          <Input 
            placeholder="tu@correo.com"
            type="email"
            className="h-12 rounded-xl border-border focus:border-cyan"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        {/* Trip Details */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Calendar className="w-4 h-4 text-primary" />
              Fecha del servicio
            </label>
            <Input 
              type="date"
              className="h-12 rounded-xl border-border focus:border-primary"
              value={formData.fecha}
              onChange={(e) => setFormData({...formData, fecha: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Users className="w-4 h-4 text-primary" />
              Número de pasajeros
            </label>
            <Input 
              type="number"
              placeholder="Ej: 4"
              min="1"
              className="h-12 rounded-xl border-border focus:border-primary"
              value={formData.pasajeros}
              onChange={(e) => setFormData({...formData, pasajeros: e.target.value})}
              required
            />
          </div>
        </div>

        {/* Vehicle Type */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium mb-2">
            <Car className="w-4 h-4 text-yellow" />
            Tipo de vehículo preferido
          </label>
          <Select 
            value={formData.vehiculo} 
            onValueChange={(value) => setFormData({...formData, vehiculo: value})}
          >
            <SelectTrigger className="h-12 rounded-xl border-border">
              <SelectValue placeholder="Selecciona un tipo de vehículo" />
            </SelectTrigger>
            <SelectContent>
              {vehicleOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Services Selection */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium mb-3">
            <FileText className="w-4 h-4 text-secondary-blue" />
            Servicios de interés (selecciona uno o más)
          </label>
          <div className="grid sm:grid-cols-2 gap-3">
            {servicesData.map((service) => (
              <label 
                key={service.id}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.servicios.includes(service.title)
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <Checkbox
                  checked={formData.servicios.includes(service.title)}
                  onCheckedChange={() => handleServiceToggle(service.title)}
                  className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <span className="text-sm font-medium">{service.title}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Additional Details */}
        <div className="mb-8">
          <label className="flex items-center gap-2 text-sm font-medium mb-2">
            <MessageCircle className="w-4 h-4 text-muted-foreground" />
            Detalles adicionales (opcional)
          </label>
          <Textarea
            placeholder="Cuéntanos más sobre tu viaje: horarios, lugares específicos, necesidades especiales..."
            className="min-h-28 rounded-xl border-border resize-none"
            value={formData.mensaje}
            onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all btn-glow-red"
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          Solicitar Cotización Personalizada
        </Button>
      </form>
    </motion.div>
  );
};

export default QuoteForm;