import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: "María González",
      location: "Bogotá",
      text: "Una experiencia inolvidable. El servicio de GIU Tours superó todas nuestras expectativas. Conductor profesional y vehículos impecables.",
      rating: 5,
      initial: "MG",
    },
    {
      name: "Carlos Ramírez",
      location: "Medellín",
      text: "Excelente atención y puntualidad. Nos llevaron por todo el Eje Cafetero con mucha profesionalidad. 100% recomendado.",
      rating: 5,
      initial: "CR",
    },
    {
      name: "Ana Martínez",
      location: "Cartagena",
      text: "El mejor servicio de transporte turístico. Atención personalizada, vehículos de lujo y conductores que conocen cada rincón.",
      rating: 5,
      initial: "AM",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-tropical-turquoise/10 text-tropical-turquoise rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-tropical-yellow">clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Experiencias reales de viajeros satisfechos
          </p>
          
          <Button
            variant="outline"
            className="border-2 border-tropical-red text-tropical-red hover:bg-tropical-red hover:text-white font-semibold gap-2 px-6 py-5"
            onClick={() => window.open("https://api.whatsapp.com/send?phone=573222280104&text=Quiero compartir mi experiencia con GIU Tours", "_blank")}
          >
            <MessageSquarePlus size={20} />
            Comparte tu Experiencia
          </Button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[320px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 h-full">
                  <Quote className="text-tropical-turquoise/40 mb-6 w-12 h-12" />
                  <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic">
                    "{testimonials[activeIndex].text}"
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-tropical-red to-tropical-yellow flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonials[activeIndex].initial}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                        <p className="text-muted-foreground">{testimonials[activeIndex].location}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="fill-tropical-yellow text-tropical-yellow w-5 h-5" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-tropical-turquoise w-10"
                    : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
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