import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/services";

interface ServicesProps {
  selectedServices: string[];
  onToggleService: (serviceTitle: string) => void;
  onContinue: () => void;
}

const Services = ({ selectedServices, onToggleService, onContinue }: ServicesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const handleToggle = (title: string) => {
    const isSelected = selectedServices.includes(title);
    onToggleService(title);
    toast({
      title: isSelected ? "Servicio eliminado" : "Servicio añadido",
      description: isSelected ? "Eliminado de tu cotización" : "Añadido a tu cotización",
      duration: 2000,
    });
  };

  return (
    <section id="services" ref={ref} className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="mb-4">
            Diseña tu <span className="text-primary">ruta</span>
          </h2>
          <p className="text-lg">
            Selecciona los servicios que necesitas para tu viaje perfecto
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const isSelected = selectedServices.includes(service.title);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div 
                  className={`bg-card rounded-2xl overflow-hidden border-2 transition-all duration-300 h-full flex flex-col ${
                    isSelected 
                      ? 'border-primary shadow-lg' 
                      : 'border-transparent hover:border-border'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {service.badge && (
                      <span className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                    {isSelected && (
                      <div className="absolute top-3 left-3 w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                        <Check className="text-white" size={16} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                      {service.shortDescription}
                    </p>
                    
                    <div className="flex gap-2">
                      <Link to={`/servicios/${service.slug}`} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full text-sm border-border hover:border-secondary-blue hover:bg-secondary-blue hover:text-white transition-all"
                          size="sm"
                        >
                          Ver más
                          <ArrowRight size={14} className="ml-1" />
                        </Button>
                      </Link>
                      
                      <Button
                        onClick={() => handleToggle(service.title)}
                        variant={isSelected ? "destructive" : "default"}
                        className={`px-3 ${
                          isSelected 
                            ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                            : 'bg-secondary-blue hover:bg-secondary-blue-dark text-white'
                        }`}
                        size="sm"
                      >
                        {isSelected ? <X size={16} /> : <Check size={16} />}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Continue Button */}
        {selectedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <Button
              onClick={onContinue}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-6 text-base rounded-full transition-all hover:scale-[1.02]"
            >
              Continuar ({selectedServices.length})
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
