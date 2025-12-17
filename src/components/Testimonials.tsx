import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "María González",
      location: "Bogotá",
      text: "Una experiencia inolvidable. El servicio superó todas nuestras expectativas. Conductor profesional y vehículos impecables.",
      initial: "MG",
    },
    {
      name: "Carlos Ramírez",
      location: "Medellín",
      text: "Excelente atención y puntualidad. Nos llevaron por todo el Eje Cafetero con mucha profesionalidad. 100% recomendado.",
      initial: "CR",
    },
    {
      name: "Ana Martínez",
      location: "Cartagena",
      text: "El mejor servicio de transporte turístico. Atención personalizada y conductores que conocen cada rincón de Colombia.",
      initial: "AM",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setActiveIndex((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="mb-4">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl p-8 md:p-10 border border-border"
              >
                <Quote className="text-cyan/40 mb-6" size={40} />
                
                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                  "{testimonials[activeIndex].text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-blue flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonials[activeIndex].initial}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[activeIndex].location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-primary text-primary w-5 h-5" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary w-8" : "bg-muted-foreground/30 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
