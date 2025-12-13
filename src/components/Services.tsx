import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Plane, Mountain, Palmtree, Bus, Building, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'city-tour-cartagena': MapPin,
  'traslados-aeropuerto': Plane,
  'volcan-del-totumo': Mountain,
  'isla-baru': Palmtree,
  'traslado-barranquilla': Bus,
  'tour-barranquilla': Building,
  'traslado-santa-marta': Navigation,
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-background to-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-tropical-turquoise/10 text-tropical-turquoise rounded-full text-sm font-medium mb-4">
            Experiencias Únicas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros <span className="text-tropical-red">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre las mejores experiencias turísticas en la Costa Caribe colombiana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = serviceIcons[service.slug] || MapPin;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-tropical-yellow rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="w-6 h-6 text-tropical-blue" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-2">{service.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.includes.slice(0, 2).map((item, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-tropical-turquoise/10 text-tropical-turquoise rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link to={`/servicio/${service.slug}`}>
                    <Button className="w-full bg-tropical-red hover:bg-tropical-red/90 text-white">
                      Ver detalles
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
