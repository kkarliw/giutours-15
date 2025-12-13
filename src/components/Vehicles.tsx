import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
    },
    {
      name: "SUV de Lujo",
      capacity: "Hasta 7 pasajeros",
      image: vehicleSuv,
      features: ["Máximo Confort", "Tecnología Avanzada", "Lujo Total"],
    },
    {
      name: "Sedán Ejecutivo",
      capacity: "Hasta 4 pasajeros",
      image: vehicleSedan,
      features: ["Elegancia", "Eficiencia", "Conectividad Inteligente"],
    },
    {
      name: "Minivan Familiar",
      capacity: "Hasta 8 pasajeros",
      image: vehicleSuv,
      features: ["Espacio Amplio", "Ideal Familias", "Máxima Seguridad"],
    },
  ];

  return (
    <section id="vehicles" ref={ref} className="section-padding bg-background" aria-label="Flota de vehículos">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">
            Vehículos de <span className="text-gradient-gold">Lujo</span>,
            <br />
            Experiencia de Primera Clase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flota moderna y perfectamente mantenida para garantizar tu seguridad y confort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary transition-all duration-500 shadow-card hover:shadow-hover">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-muted">
                  <motion.img
                    src={vehicle.image}
                    alt={`${vehicle.name} - Vehículo de lujo para ${vehicle.capacity}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Name Overlay - Always Visible on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold text-white mb-2">{vehicle.name}</h3>
                    <p className="text-white/95 text-lg flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {vehicle.capacity}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6 bg-card">
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-secondary-blue/10 text-secondary-blue rounded-full text-sm font-medium hover:bg-secondary-blue/20 transition-colors"
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
