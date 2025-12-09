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
    { name: "Cartagena", description: "Ciudad amurallada, historia y playas caribeñas", image: destCartagena },
    { name: "Tayrona", description: "Paraíso natural entre montañas y mar", image: destTayrona },
    { name: "Bogotá", description: "Capital cultural y gastronómica de Colombia", image: destBogota },
    { name: "Medellín", description: "Ciudad de la eterna primavera e innovación", image: destMedellin },
    { name: "Eje Cafetero", description: "Paisajes verdes y el mejor café del mundo", image: destEjeCafetero },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section id="destinations" ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-tropical-red/10 text-tropical-red rounded-full text-sm font-medium mb-4">
            Explora Colombia
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Destinos <span className="text-tropical-turquoise">Increíbles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre los lugares más extraordinarios de Colombia con nosotros
          </p>
        </motion.div>

        <div className="relative h-[450px] md:h-[550px] flex items-center justify-center">
          <div className="relative w-full max-w-5xl h-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={destinations[currentIndex].image}
                    alt={destinations[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                      {destinations[currentIndex].name}
                    </h3>
                    <p className="text-white/90 text-lg md:text-xl">
                      {destinations[currentIndex].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-tropical-yellow transition-colors shadow-lg"
            >
              <ChevronLeft className="text-tropical-blue" size={24} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-tropical-yellow transition-colors shadow-lg"
            >
              <ChevronRight className="text-tropical-blue" size={24} />
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-tropical-red w-10"
                  : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;