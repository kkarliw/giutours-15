import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      name: "Cartagena",
      description: "Ciudad amurallada, historia y playas caribeñas",
      image: destCartagena,
    },
    {
      name: "Tayrona",
      description: "Paraíso natural entre montañas y mar",
      image: destTayrona,
    },
    {
      name: "Bogotá",
      description: "Capital cultural y gastronómica de Colombia",
      image: destBogota,
    },
    {
      name: "Medellín",
      description: "Ciudad de la eterna primavera e innovación",
      image: destMedellin,
    },
    {
      name: "Eje Cafetero",
      description: "Paisajes verdes y el mejor café del mundo",
      image: destEjeCafetero,
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section id="destinations" ref={ref} className="section-padding bg-gradient-to-b from-white to-secondary/20 overflow-hidden" aria-label="Destinos turísticos">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">
            Destinos <span className="text-gradient-gold">GIU</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explora con elegancia los lugares más extraordinarios de Colombia
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[550px] md:h-[700px] flex items-center justify-center px-4">
          <div className="relative w-full max-w-6xl h-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full max-w-4xl h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl">
                  <motion.img
                    src={destinations[currentIndex].image}
                    alt={`${destinations[currentIndex].name} - ${destinations[currentIndex].description}`}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                  >
                    <motion.h3 
                      className="text-5xl md:text-6xl font-bold text-white mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {destinations[currentIndex].name}
                    </motion.h3>
                    <motion.p 
                      className="text-white/95 text-lg md:text-xl max-w-2xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {destinations[currentIndex].description}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-0 md:left-8 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm border-2 border-secondary-blue/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all shadow-lg group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Ver destino anterior"
            >
              <ChevronLeft className="text-secondary-blue group-hover:text-primary-foreground transition-colors" size={28} strokeWidth={2.5} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm border-2 border-secondary-blue/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all shadow-lg group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Ver siguiente destino"
            >
              <ChevronRight className="text-secondary-blue group-hover:text-primary-foreground transition-colors" size={28} strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12" role="group" aria-label="Indicadores de destinos">
          {destinations.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              className={`h-2 rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                index === currentIndex
                  ? "bg-primary w-12 shadow-lg shadow-primary/30"
                  : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir al destino ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
