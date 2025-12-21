import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "María González",
      location: "Bogotá, Colombia",
      text: "Una experiencia inolvidable. El servicio superó todas nuestras expectativas. Conductor profesional, puntual y vehículos impecables. La atención personalizada desde el primer momento nos hizo sentir como en casa.",
      initial: "MG",
      service: "City Tour Cartagena",
    },
    {
      name: "Carlos Ramírez",
      location: "Miami, USA",
      text: "Excelente atención y puntualidad impecable. Nos llevaron por todo el Eje Cafetero con mucha profesionalidad. El conocimiento del guía sobre la historia de cada lugar fue extraordinario. 100% recomendado.",
      initial: "CR",
      service: "Tour Personalizado",
    },
    {
      name: "Ana Martínez",
      location: "Madrid, España",
      text: "El mejor servicio de transporte turístico que hemos tenido en nuestros viajes. Atención personalizada y conductores que conocen cada rincón de Colombia. Volvería a elegirlos sin dudarlo.",
      initial: "AM",
      service: "Traslado Aeropuerto",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setActiveIndex((p) => (p + 1) % testimonials.length), 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setActiveIndex((p) => (p + 1) % testimonials.length);
  const prevTestimonial = () => setActiveIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/20" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Decorative Quote */}
      <div className="absolute top-20 left-10 opacity-[0.03]">
        <Quote className="w-64 h-64 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-[0.03] rotate-180">
        <Quote className="w-48 h-48 text-secondary-blue" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Testimonios</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experiencias que{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">inspiran</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-primary/10 origin-left -z-0"
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Lo que nuestros viajeros dicen sobre su experiencia con Giutours
          </p>
        </motion.div>

        {/* Testimonial Card - Premium Design */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-cyan/5 rounded-3xl opacity-50" />
            <div className="absolute -top-3 -left-3 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-cyan/20 rounded-br-2xl" />
            
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12 min-h-[380px] flex flex-col justify-between">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 md:top-10 md:right-12">
                <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary/10" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground font-light leading-relaxed mb-8 flex-1">
                    "{testimonials[activeIndex].text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary-blue to-secondary-blue/80 flex items-center justify-center shadow-lg shadow-secondary-blue/20">
                        <span className="text-white font-semibold text-lg">
                          {testimonials[activeIndex].initial}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">
                          {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[activeIndex].location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block">
                      <span className="px-4 py-2 text-sm font-medium bg-primary/5 text-primary rounded-full border border-primary/10">
                        {testimonials[activeIndex].service}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === activeIndex 
                          ? "bg-primary w-8" 
                          : "bg-muted-foreground/20 w-2 hover:bg-muted-foreground/40"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center transition-all duration-300 hover:border-primary/30"
                  >
                    <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center transition-all duration-300 hover:border-primary/30"
                  >
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-16 pt-12 border-t border-border/50"
        >
          {[
            { value: "500+", label: "Reseñas positivas" },
            { value: "4.9", label: "Calificación promedio" },
            { value: "98%", label: "Clientes satisfechos" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
