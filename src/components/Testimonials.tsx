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
      color: "from-primary to-primary-dark",
    },
    {
      name: "Carlos Ramírez",
      location: "Medellín",
      text: "Excelente atención y puntualidad. Nos llevaron por todo el Eje Cafetero con mucha profesionalidad y amabilidad. 100% recomendado.",
      rating: 5,
      initial: "CR",
      color: "from-secondary-blue to-secondary-blue/80",
    },
    {
      name: "Ana Martínez",
      location: "Cartagena",
      text: "El mejor servicio de transporte turístico. Atención personalizada, vehículos de lujo y conductores que conocen cada rincón de Colombia.",
      rating: 5,
      initial: "AM",
      color: "from-primary-light to-primary",
    },
  ];

  // Auto-play testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-gradient-to-b from-secondary/20 to-white" aria-label="Testimonios de clientes">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="mb-4 md:mb-6 text-2xl md:text-4xl">
            Tu Próxima <span className="text-gradient-gold">Aventura</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-10 px-2">
            Lo que dicen nuestros clientes sobre sus experiencias con GIU Tours
          </p>
          
          {/* Share Experience Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold gap-2 px-6 py-4 md:px-8 md:py-6 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=573222280104&text=Quiero compartir mi experiencia con GIU Tours", "_blank")}
              aria-label="Compartir experiencia por WhatsApp"
            >
              <MessageSquarePlus size={20} className="md:w-[22px] md:h-[22px]" />
              Comparte tu Experiencia
            </Button>
          </motion.div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative min-h-[380px] md:min-h-[420px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.35, ease: "easeInOut" },
                  scale: { duration: 0.35, ease: "easeOut" },
                }}
                className="absolute inset-0"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 shadow-2xl border border-border/50 relative overflow-hidden h-full"
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
                  
                  <div className="relative">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                    >
                      <Quote className="text-secondary-blue/60 mb-4 md:mb-8 w-10 h-10 md:w-14 md:h-14" />
                    </motion.div>
                    
                    {/* Testimonial Text */}
                    <motion.p 
                      className="text-lg md:text-xl lg:text-2xl text-foreground mb-6 md:mb-10 leading-relaxed font-light italic"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.3 }}
                    >
                      "{testimonials[activeIndex].text}"
                    </motion.p>

                    {/* Author Info */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-6">
                      <div className="flex items-center gap-3 md:gap-4">
                        {/* Avatar with Initial */}
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                          className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white font-bold text-lg md:text-xl">
                            {testimonials[activeIndex].initial}
                          </span>
                        </motion.div>
                        
                        <div>
                          <motion.h4 
                            className="font-bold text-lg md:text-xl text-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25, duration: 0.3 }}
                          >
                            {testimonials[activeIndex].name}
                          </motion.h4>
                          <motion.p 
                            className="text-muted-foreground text-sm md:text-base"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                          >
                            {testimonials[activeIndex].location}
                          </motion.p>
                        </div>
                      </div>
                      
                      {/* Stars */}
                      <motion.div 
                        className="flex gap-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35, duration: 0.3 }}
                      >
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <Star key={i} className="fill-primary text-primary w-5 h-5 md:w-[22px] md:h-[22px]" />
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 md:h-2.5 rounded-full transition-all duration-400 ${
                  index === activeIndex
                    ? "bg-primary w-8 md:w-12 shadow-lg shadow-primary/30"
                    : "bg-muted-foreground/30 w-2 md:w-2.5 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;