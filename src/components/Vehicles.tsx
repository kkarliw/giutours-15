import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users } from "lucide-react";
import vehicleSprinter from "@/assets/vehicle-sprinter.jpg";
import vehicleSuv from "@/assets/vehicle-suv.jpg";
import vehicleSedan from "@/assets/vehicle-sedan.jpg";

const Vehicles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const vehicles = [
    {
      name: "Van Premium",
      capacity: "Hasta 15 pasajeros",
      image: vehicleSprinter,
      features: ["A/C", "Audio", "Reclinables"],
    },
    {
      name: "SUV Ejecutiva",
      capacity: "Hasta 7 pasajeros",
      image: vehicleSuv,
      features: ["Confort", "Tecnología", "Lujo"],
    },
    {
      name: "Sedán Ejecutivo",
      capacity: "Hasta 4 pasajeros",
      image: vehicleSedan,
      features: ["Elegante", "Eficiente", "Cómodo"],
    },
  ];

  return (
    <section id="vehicles" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="mb-4">
            Nuestra <span className="text-cyan">flota</span>
          </h2>
          <p className="text-lg">
            Vehículos modernos y confortables para tu viaje
          </p>
        </motion.div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-cyan/30 transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Capacity Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Users size={14} className="text-secondary-blue" />
                    <span className="text-sm font-medium text-secondary-blue-dark">{vehicle.capacity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-3">{vehicle.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
