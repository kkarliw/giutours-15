import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Snowflake, Wifi, Volume2, Armchair, Star, Check } from "lucide-react";
import vehicleSprinter from "@/assets/vehicle-sprinter.jpg";
import vehicleSuv from "@/assets/vehicle-suv.jpg";
import vehicleSedan from "@/assets/vehicle-sedan.jpg";

const Vehicles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const vehicles = [
    {
      name: "Van Premium",
      subtitle: "Mercedes-Benz Sprinter",
      capacity: "Hasta 15 pasajeros",
      image: vehicleSprinter,
      description: "Ideal para grupos grandes y eventos corporativos. Máximo confort en trayectos largos.",
      features: [
        { icon: Snowflake, text: "Aire Acondicionado" },
        { icon: Volume2, text: "Sistema de Audio" },
        { icon: Armchair, text: "Asientos Reclinables" },
        { icon: Wifi, text: "WiFi Disponible" },
      ],
      specs: ["Motor Turbo Diesel", "Suspensión Neumática", "Amplio Equipaje"],
      popular: false,
    },
    {
      name: "SUV Ejecutiva",
      subtitle: "Toyota Fortuner / Similar",
      capacity: "Hasta 7 pasajeros",
      image: vehicleSuv,
      description: "Perfecta combinación de lujo y versatilidad. Ideal para familias y ejecutivos.",
      features: [
        { icon: Snowflake, text: "Clima Bizona" },
        { icon: Volume2, text: "Audio Premium" },
        { icon: Armchair, text: "Asientos en Cuero" },
        { icon: Wifi, text: "Cargadores USB" },
      ],
      specs: ["4x4 Disponible", "Tercera Fila", "Vidrios Polarizados"],
      popular: true,
    },
    {
      name: "Sedán Ejecutivo",
      subtitle: "Toyota Corolla / Similar",
      capacity: "Hasta 4 pasajeros",
      image: vehicleSedan,
      description: "Elegancia y eficiencia para traslados ejecutivos y parejas que buscan privacidad.",
      features: [
        { icon: Snowflake, text: "Aire Acondicionado" },
        { icon: Volume2, text: "Audio Bluetooth" },
        { icon: Armchair, text: "Interior Premium" },
        { icon: Wifi, text: "Cargadores" },
      ],
      specs: ["Bajo Consumo", "Maletero Amplio", "Transmisión Automática"],
      popular: false,
    },
  ];

  return (
    <section id="vehicles" ref={ref} className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <Star size={14} className="text-primary" />
            <span className="text-sm font-medium text-primary">Flota Premium</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vehículos de <span className="text-gradient-primary">Primera Clase</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Viaja con la máxima comodidad y seguridad. Nuestra flota cuenta con vehículos 
            modernos, impecables y equipados con todo lo necesario para tu confort.
          </p>
        </motion.div>

        {/* Vehicles Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Popular Badge */}
              {vehicle.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg shadow-primary/25">
                    Más Solicitado
                  </div>
                </div>
              )}

              <div className={`relative h-full bg-card rounded-3xl overflow-hidden border transition-all duration-500 ${
                vehicle.popular 
                  ? 'border-primary/30 shadow-xl shadow-primary/10' 
                  : 'border-border hover:border-primary/20 hover:shadow-xl'
              }`}>
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  
                  {/* Capacity Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
                    <Users size={16} className="text-secondary-blue" />
                    <span className="text-sm font-semibold text-secondary-blue-dark">{vehicle.capacity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">{vehicle.name}</h3>
                    <p className="text-sm text-muted-foreground">{vehicle.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {vehicle.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {vehicle.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg"
                      >
                        <feature.icon size={14} className="text-primary shrink-0" />
                        <span className="text-xs font-medium text-foreground truncate">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2 font-medium">Especificaciones:</p>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.specs.map((spec, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground"
                        >
                          <Check size={12} className="text-primary" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Todos nuestros vehículos cuentan con seguro, revisión técnica al día y conductores profesionales certificados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vehicles;
