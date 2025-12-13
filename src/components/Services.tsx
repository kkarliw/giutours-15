import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Compass, Building2, Users, Sparkles, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ServicesProps {
  selectedServices: string[];
  onToggleService: (serviceTitle: string) => void;
  onContinue: () => void;
}

const Services = ({ selectedServices, onToggleService, onContinue }: ServicesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const services = [
    {
      icon: Compass,
      title: "City Tour Cartagena",
      description: "Recorre la ciudad amurallada y sus joyas coloniales.",
      fullDescription: "Descubre la magia de Cartagena con nuestro tour completo por la ciudad amurallada. Visitarás el Castillo San Felipe, las murallas históricas, el barrio Getsemaní y los lugares más emblemáticos. Incluye guía experto, transporte climatizado y atención personalizada.",
      gradient: "from-primary/10 via-primary/5 to-white",
      iconColor: "text-primary-dark",
      iconBg: "bg-primary/20",
      image: "/src/assets/dest-cartagena.jpg",
      badge: "🔥 Popular",
      badgeColor: "bg-accent-red"
    },
    {
      icon: Compass,
      title: "Islas del Rosario",
      description: "Paraíso caribeño con playas de ensueño y aguas cristalinas.",
      fullDescription: "Escápate a las hermosas Islas del Rosario. Disfruta de playas paradisíacas, snorkel en arrecifes de coral, almuerzo típico frente al mar y tiempo libre en las mejores playas. Transporte marítimo incluido, guía turístico y toda la comodidad para un día perfecto.",
      gradient: "from-secondary-blue/10 via-secondary-blue/5 to-white",
      iconColor: "text-secondary-blue",
      iconBg: "bg-secondary-blue/15",
      image: "/src/assets/dest-tayrona.jpg",
      badge: "⭐ Destacado",
      badgeColor: "bg-accent-red"
    },
    {
      icon: Building2,
      title: "Traslados Aeropuerto",
      description: "Servicio puerta a puerta con puntualidad garantizada.",
      fullDescription: "Servicio de transporte ejecutivo desde y hacia el aeropuerto con total puntualidad. Monitoreamos tu vuelo en tiempo real, te recibimos en sala de llegadas y te llevamos directamente a tu destino. Vehículos de lujo, conductores profesionales y servicio 24/7.",
      gradient: "from-primary/10 via-primary/5 to-white",
      iconColor: "text-primary-dark",
      iconBg: "bg-primary/20",
      image: "/src/assets/vehicle-sprinter.jpg",
      badge: null,
      badgeColor: null
    },
    {
      icon: Compass,
      title: "Tour Barranquilla",
      description: "Conoce la Puerta de Oro de Colombia y su cultura vibrante.",
      fullDescription: "Explora Barranquilla, ciudad del Carnaval y patrimonio cultural. Visita el Malecón del Río, el Museo del Caribe, la Ventana al Mundo y los sitios más representativos de la ciudad. Tour guiado con transporte incluido, perfecto para conocer la esencia caribeña.",
      gradient: "from-secondary-blue/10 via-secondary-blue/5 to-white",
      iconColor: "text-secondary-blue",
      iconBg: "bg-secondary-blue/15",
      image: "/src/assets/dest-bogota.jpg",
      badge: null,
      badgeColor: null
    },
    {
      icon: Users,
      title: "Empresarial",
      description: "Transporte corporativo para eventos, reuniones y convenciones.",
      fullDescription: "Soluciones de transporte corporativo para empresas. Ideal para eventos, reuniones ejecutivas, convenciones y traslado de equipos. Flota moderna, conductores bilingües, puntualidad garantizada y servicio de alta calidad para representar tu empresa.",
      gradient: "from-primary/10 via-primary/5 to-white",
      iconColor: "text-primary-dark",
      iconBg: "bg-primary/20",
      image: "/src/assets/vehicle-suv.jpg",
      badge: null,
      badgeColor: null
    },
    {
      icon: Compass,
      title: "Tour Volcán del Totumo",
      description: "Baño de lodo volcánico único en el mundo, experiencia relajante.",
      fullDescription: "Visita el famoso Volcán del Totumo y disfruta de un baño de lodo volcánico con propiedades medicinales. Incluye transporte, entrada al volcán, masaje de lodo y tiempo libre. Una experiencia única y rejuvenecedora que no olvidarás.",
      gradient: "from-secondary-blue/10 via-secondary-blue/5 to-white",
      iconColor: "text-secondary-blue",
      iconBg: "bg-secondary-blue/15",
      image: "/src/assets/dest-eje-cafetero.jpg",
      badge: null,
      badgeColor: null
    },
    {
      icon: Sparkles,
      title: "Servicio VIP Personalizado",
      description: "Diseñamos el viaje de tus sueños adaptado a ti.",
      fullDescription: "Crea tu experiencia ideal con nuestro servicio totalmente personalizado. Ya sea un tour romántico, una aventura familiar o un viaje de negocios con estilo, diseñamos cada detalle según tus preferencias. Flexibilidad total, atención VIP y experiencias inolvidables.",
      gradient: "from-accent-red/8 via-accent-red/4 to-white",
      iconColor: "text-accent-red",
      iconBg: "bg-accent-red/15",
      image: "/src/assets/hero-colombia.jpg",
      badge: "💎 Premium",
      badgeColor: "bg-accent-red"
    },
  ];

  const handleToggleService = (serviceTitle: string) => {
    const isSelected = selectedServices.includes(serviceTitle);
    onToggleService(serviceTitle);
    
    toast({
      title: isSelected ? "Servicio eliminado" : "Servicio añadido",
      description: isSelected 
        ? "Servicio eliminado de tu cotización" 
        : "Servicio añadido a tu cotización",
      duration: 2500,
    });
  };

  return (
    <section id="services" ref={ref} className="section-padding bg-secondary/30" aria-label="Servicios turísticos">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">
            Tu Ruta <span className="text-gradient-gold">Personalizada</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Selecciona los servicios que necesitas y recibe tu cotización personalizada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const isSelected = selectedServices.includes(service.title);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group"
              >
                <div 
                  onClick={() => setSelectedService(service)}
                  className={`relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-2xl p-4 flex flex-col border-2 transition-all duration-300 ease-out cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                    isSelected 
                      ? 'border-primary shadow-card bg-primary/5' 
                      : 'border-border/50 shadow-card hover:border-primary/30 hover:shadow-hover hover:scale-[1.02]'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedService(service);
                    }
                  }}
                  aria-label={`Ver detalles de ${service.title}`}
                >
                  {/* Badge de promoción */}
                  {service.badge && (
                    <div className={`absolute -top-2 -right-2 ${service.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10`}>
                      {service.badge}
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm flex-shrink-0`}>
                      <service.icon className={service.iconColor} size={24} strokeWidth={1.5} />
                    </div>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-7 h-7 bg-primary rounded-full flex items-center justify-center"
                        aria-label="Servicio seleccionado"
                      >
                        <Check className="text-primary-foreground" size={16} strokeWidth={3} />
                      </motion.div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      variant="outline"
                      className="flex-1 text-xs focus-visible:ring-2 focus-visible:ring-primary"
                      size="sm"
                      aria-label={`Ver más información de ${service.title}`}
                    >
                      Ver más
                    </Button>
                    {isSelected && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleService(service.title);
                        }}
                        variant="secondary"
                        className="flex-1 text-xs bg-accent-red hover:bg-accent-red-light text-white focus-visible:ring-2 focus-visible:ring-accent-red"
                        size="sm"
                        aria-label={`Quitar ${service.title} de la cotización`}
                      >
                        <X size={14} className="mr-1" />
                        Quitar
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Detail Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedService && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                    <div className={`w-12 h-12 ${selectedService.iconBg} rounded-xl flex items-center justify-center`}>
                      <selectedService.icon className={selectedService.iconColor} size={24} strokeWidth={1.5} />
                    </div>
                    {selectedService.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="mt-6 space-y-6">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img 
                      src={selectedService.image} 
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                  
                  <Button
                    onClick={() => {
                      handleToggleService(selectedService.title);
                      setSelectedService(null);
                    }}
                    className={`w-full ${
                      selectedServices.includes(selectedService.title)
                        ? 'bg-accent-red hover:bg-accent-red/90 text-white'
                        : 'bg-primary hover:bg-primary-dark text-primary-foreground'
                    } font-semibold gap-2`}
                    size="lg"
                  >
                    {selectedServices.includes(selectedService.title) ? (
                      <>
                        <X size={20} />
                        Eliminar de cotización
                      </>
                    ) : (
                      <>
                        <Check size={20} />
                        Agregar a cotización
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </DialogContent>
        </Dialog>

        {selectedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <Button
              onClick={onContinue}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-12 py-6 text-lg shadow-primary hover:scale-105 transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={`Continuar con cotización de ${selectedServices.length} servicio${selectedServices.length > 1 ? 's' : ''}`}
            >
              Continuar con mi cotización ({selectedServices.length})
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
