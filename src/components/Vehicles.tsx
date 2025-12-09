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
      name: "Van Ejecutiva Premium",
      capacity: "Hasta 15 pasajeros",
      image: vehicleSprinter,
      features: ["Aire Acondicionado", "Asientos Reclinables", "Audio Premium"],
      color: "tropical-turquoise",
    },
    {
      name: "SUV de Lujo",
      capacity: "Hasta 7 pasajeros",
      image: vehicleSuv,
      features: ["Máximo Confort", "Tecnología Avanzada", "Lujo Total"],
      color: "tropical-yellow",
    },
    {
      name: "Sedán Ejecutivo",
      capacity: "Hasta 4 pasajeros",
      image: vehicleSedan,
      features: ["Elegancia", "Eficiencia", "Conectividad"],
      color: "tropical-red",
    },
    {
      name: "Minivan Familiar",
      capacity: "Hasta 8 pasajeros",
      image: vehicleSuv,
      features: ["Espacio Amplio", "Ideal Familias", "Seguridad"],
      color: "tropical-blue",
    },
  ];

  return (
    <section id="vehicles" ref={ref} className="py-24 bg-muted/30" aria-label="Flota de vehículos">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-tropical-yellow/10 text-tropical-gold rounded-full text-sm font-medium mb-4">
            Flota Premium
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vehículos de <span className="text-tropical-turquoise">Lujo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flota moderna para garantizar tu seguridad y confort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white mb-1">{vehicle.name}</h3>
                    <p className="text-white/90 text-sm flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {vehicle.capacity}
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-card">
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 bg-${vehicle.color}/10 text-${vehicle.color} rounded-full text-xs font-medium`}
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