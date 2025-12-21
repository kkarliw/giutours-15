import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Clock, Star, Waves } from "lucide-react";
import destCartagena from "@/assets/dest-cartagena.jpg";
import destTayrona from "@/assets/dest-tayrona.jpg";
import destBogota from "@/assets/dest-bogota.jpg";
import destMedellin from "@/assets/dest-medellin.jpg";
import destEjeCafetero from "@/assets/dest-eje-cafetero.jpg";

const Destinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const destinations = [
    { 
      name: "Islas del Rosario", 
      subtitle: "Archipiélago Paradisíaco",
      description: "Un paraíso de aguas cristalinas y arrecifes de coral a solo 45 minutos de Cartagena. Disfruta de snorkel, playa privada y la belleza del Caribe.", 
      image: destCartagena,
      duration: "Full Day",
      highlight: "27 islas de ensueño",
      features: ["Snorkel", "Almuerzo incluido", "Playa privada"]
    },
    { 
      name: "Playa Blanca", 
      subtitle: "Arena Blanca, Mar Turquesa",
      description: "La playa más famosa de Colombia, con arena blanca como la nieve y aguas turquesas. Un destino imperdible para los amantes del sol y el mar.", 
      image: destTayrona,
      duration: "Full Day",
      highlight: "Playa #1 de Colombia",
      features: ["Deportes acuáticos", "Restaurantes", "Relax total"]
    },
    { 
      name: "Cartagena Colonial", 
      subtitle: "Ciudad Amurallada",
      description: "Recorre las calles empedradas de la ciudad colonial mejor conservada de América. Historia, arquitectura y romance en cada esquina.", 
      image: destBogota,
      duration: "4-6 horas",
      highlight: "Patrimonio UNESCO",
      features: ["Historia viva", "Gastronomía", "Arquitectura"]
    },
    { 
      name: "Volcán del Totumo", 
      subtitle: "Experiencia Única",
      description: "Sumérgete en un volcán de lodo medicinal y vive una experiencia rejuvenecedora. Propiedades curativas y una aventura inolvidable.", 
      image: destMedellin,
      duration: "Medio día",
      highlight: "Baño de lodo volcánico",
      features: ["Propiedades medicinales", "Masaje incluido", "Aventura"]
    },
    { 
      name: "La Boquilla", 
      subtitle: "Manglar & Cultura",
      description: "Navega en canoa por los manglares, conoce la cultura afrodescendiente y disfruta de la gastronomía local en este pueblo de pescadores.", 
      image: destEjeCafetero,
      duration: "4 horas",
      highlight: "Ecoturismo auténtico",
      features: ["Canoa en manglar", "Cultura local", "Mariscos frescos"]
    },
  ];

  const next = () => { setDirection(1); setCurrentIndex((p) => (p + 1) % destinations.length); };
  const prev = () => { setDirection(-1); setCurrentIndex((p) => (p - 1 + destinations.length) % destinations.length); };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="destinations" ref={ref} className="relative py-24 md:py-32 bg-secondary-blue-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <Waves className="absolute bottom-10 left-10 w-32 h-32 text-white/5" />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6"
          >
            <MapPin size={14} className="text-primary" />
            <span className="text-sm font-medium text-white/80">Caribe Colombiano</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Destinos <span className="text-gradient-gold">Extraordinarios</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Descubre los lugares más impresionantes del Caribe colombiano. Playas vírgenes, 
            historia colonial y experiencias que recordarás para siempre.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0"
                >
                  <img
                    src={destinations[currentIndex].image}
                    alt={destinations[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Duration Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-xl">
                <Clock size={14} className="text-secondary-blue" />
                <span className="text-sm font-medium text-secondary-blue-dark">
                  {destinations[currentIndex].duration}
                </span>
              </div>

              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-xl">
                <Star size={14} />
                <span className="text-sm font-medium">
                  {destinations[currentIndex].highlight}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {destinations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-primary w-8" 
                        : "bg-white/30 w-2 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Content Side */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="text-white"
            >
              <p className="text-primary font-medium mb-2">{destinations[currentIndex].subtitle}</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {destinations[currentIndex].name}
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {destinations[currentIndex].description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-3 mb-8">
                {destinations[currentIndex].features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white/80"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Reservar Ahora
                <ChevronRight size={18} />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Destination Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-5 gap-4">
            {destinations.map((dest, index) => (
              <button
                key={index}
                onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
                className={`relative rounded-xl overflow-hidden aspect-[4/3] transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-secondary-blue-dark scale-105' 
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-xs font-medium text-white truncate">
                  {dest.name}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
