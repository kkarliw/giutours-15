import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Snowflake, Wifi, Armchair, Star, Check, Car, Truck } from "lucide-react";

const Vehicles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const vehicleCategories = [
    {
      name: "Automóviles y Camionetas",
      capacity: "1-3 pasajeros",
      icon: Car,
      description: "Ideales para parejas, ejecutivos o viajes individuales. Máxima privacidad y confort en trayectos cortos o largos.",
      features: [
        { icon: Snowflake, text: "Aire Acondicionado" },
        { icon: Armchair, text: "Asientos Cómodos" },
        { icon: Wifi, text: "Cargadores USB" },
      ],
      specs: ["Transmisión Automática", "Maletero Amplio", "Vidrios Polarizados"],
      color: "from-secondary-blue to-secondary-blue-dark",
      bgColor: "bg-secondary-blue/10",
      textColor: "text-secondary-blue",
    },
    {
      name: "Minivans",
      capacity: "4-7 pasajeros",
      icon: Car,
      description: "Perfectas para familias o grupos pequeños. Amplio espacio interior con comodidad para todos.",
      features: [
        { icon: Snowflake, text: "Clima Bizona" },
        { icon: Armchair, text: "Asientos Reclinables" },
        { icon: Wifi, text: "WiFi Disponible" },
      ],
      specs: ["Espacio para Equipaje", "Tercera Fila", "Puertas Corredizas"],
      popular: true,
      color: "from-primary to-primary-dark",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      name: "Vans",
      capacity: "8-11 pasajeros",
      icon: Truck,
      description: "Ideal para grupos medianos, eventos corporativos o excursiones. Confort en cada kilómetro.",
      features: [
        { icon: Snowflake, text: "Aire Acondicionado" },
        { icon: Armchair, text: "Asientos Premium" },
        { icon: Wifi, text: "Sistema de Audio" },
      ],
      specs: ["Motor Turbo Diesel", "Amplio Espacio", "Suspensión Confort"],
      color: "from-cyan to-secondary-blue",
      bgColor: "bg-cyan/10",
      textColor: "text-cyan",
    },
    {
      name: "Buses",
      capacity: "12+ pasajeros",
      icon: Truck,
      description: "Para grupos grandes, convenciones o eventos especiales. Capacidad y comodidad sin límites.",
      features: [
        { icon: Snowflake, text: "Clima Central" },
        { icon: Armchair, text: "Asientos Ergonómicos" },
        { icon: Wifi, text: "Micrófono Guía" },
      ],
      specs: ["Baño a Bordo*", "Compartimento Equipaje", "TV/Entretenimiento*"],
      color: "from-yellow to-yellow-dark",
      bgColor: "bg-yellow/10",
      textColor: "text-yellow-600",
    },
  ];

  return (
    <section id="vehicles" ref={ref} className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-secondary-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-blue/10 border border-secondary-blue/20 rounded-full mb-6"
          >
            <Star size={14} className="text-secondary-blue" />
            <span className="text-sm font-medium text-secondary-blue">Nuestra Flota</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Vehículos para <span className="text-gradient-primary">Cada Necesidad</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Contamos con una flota diversa para adaptarnos a tu grupo. 
            Todos nuestros vehículos cumplen con los más altos estándares de seguridad y confort.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicleCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Popular Badge */}
              {category.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-full shadow-lg">
                    Más Solicitado
                  </div>
                </div>
              )}

              <div className={`relative h-full bg-card rounded-2xl overflow-hidden border transition-all duration-500 ${
                category.popular 
                  ? 'border-primary/30 shadow-xl shadow-primary/10' 
                  : 'border-border hover:border-secondary-blue/20 hover:shadow-xl'
              }`}>
                {/* Header with Gradient */}
                <div className={`p-6 bg-gradient-to-br ${category.color} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center`}>
                      <category.icon size={24} />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full">
                      <Users size={14} />
                      <span className="text-sm font-semibold">{category.capacity}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-5">
                    {category.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className={`flex items-center gap-3 px-3 py-2 ${category.bgColor} rounded-lg`}
                      >
                        <feature.icon size={14} className={category.textColor} />
                        <span className="text-xs font-medium text-foreground">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {category.specs.map((spec, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground"
                        >
                          <Check size={12} className={category.textColor} />
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
            * Disponible según modelo. Todos nuestros vehículos cuentan con seguro, revisión técnica al día y conductores profesionales certificados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vehicles;