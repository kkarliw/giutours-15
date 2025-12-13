import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Plane, Mountain, Umbrella, Car, Building, Navigation, Check, X, ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/services";

interface ServicesProps {
  selectedServices: string[];
  onToggleService: (serviceTitle: string) => void;
  onContinue: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Plane,
  Mountain,
  Umbrella,
  Car,
  Building,
  Navigation,
};

const Services = ({ selectedServices, onToggleService, onContinue }: ServicesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => {
            const isSelected = selectedServices.includes(service.title);
            const IconComponent = iconMap[service.icon] || MapPin;
            const isPopular = service.popular;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group"
              >
                <div 
                  className={`relative bg-card rounded-2xl overflow-hidden border-2 transition-all duration-300 ease-out h-full flex flex-col ${
                    isSelected 
                      ? 'border-primary shadow-lg ring-2 ring-primary/20' 
                      : 'border-border/50 shadow-card hover:border-primary/30 hover:shadow-hover hover:-translate-y-1'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    {service.badge && (
                      <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        {service.badge}
                      </div>
                    )}
                    
                    {/* Selected indicator */}
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Check className="text-white" size={18} strokeWidth={3} />
                      </motion.div>
                    )}
                    
                    {/* Icon */}
                    <div className="absolute bottom-3 left-3 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="text-primary" size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4 line-clamp-2 flex-grow">
                      {service.shortDescription}
                    </p>
                    
                    <div className="flex gap-2 mt-auto">
                      <Link to={`/servicios/${service.slug}`} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full text-sm gap-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
                          size="sm"
                        >
                          Ver detalles
                          <ArrowRight size={16} />
                        </Button>
                      </Link>
                      
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggleService(service.title);
                        }}
                        variant={isSelected ? "default" : "secondary"}
                        className={`px-4 ${
                          isSelected 
                            ? 'bg-accent-red hover:bg-accent-red/90' 
                            : 'bg-secondary-blue hover:bg-secondary-blue-dark text-white'
                        }`}
                        size="sm"
                      >
                        {isSelected ? <X size={18} /> : <Check size={18} />}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

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
