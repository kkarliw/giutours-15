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
    { name: "Cartagena", description: "Ciudad amurallada y playas caribeñas", image: destCartagena },
    { name: "Tayrona", description: "Paraíso entre montañas y mar", image: destTayrona },
    { name: "Bogotá", description: "Capital cultural de Colombia", image: destBogota },
    { name: "Medellín", description: "Ciudad de la eterna primavera", image: destMedellin },
    { name: "Eje Cafetero", description: "El mejor café del mundo", image: destEjeCafetero },
  ];

  const next = () => { setDirection(1); setCurrentIndex((p) => (p + 1) % destinations.length); };
  const prev = () => { setDirection(-1); setCurrentIndex((p) => (p - 1 + destinations.length) % destinations.length); };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="destinations" ref={ref} className="section-padding bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="mb-4">
            Destinos <span className="text-secondary-blue">increíbles</span>
          </h2>
          <p className="text-lg">
            Los lugares más extraordinarios de Colombia
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                  >
                    {destinations[currentIndex].name}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/80 text-lg"
                  >
                    {destinations[currentIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <ChevronLeft className="text-secondary-blue-dark" size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <ChevronRight className="text-secondary-blue-dark" size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
