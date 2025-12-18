import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-colombia.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const stats = [
    { value: "500+", label: "Experiencias", icon: Star },
    { value: "100%", label: "Satisfacción", icon: Shield },
    { value: "24/7", label: "Disponibilidad", icon: Clock },
  ];

  return (
    <section 
      ref={ref}
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden bg-secondary-blue-dark"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }} 
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-[120vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-blue-dark/95 via-secondary-blue-dark/80 to-secondary-blue-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-blue-dark via-transparent to-secondary-blue-dark/30" />
      </motion.div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 pt-24"
      >
        <div className="max-w-3xl">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-white/70 font-light">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-cyan" />
              Cartagena de Indias, Colombia
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <h1 className="text-white font-light leading-[0.95] tracking-[-0.02em]">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Experiencias</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
                <span className="text-cyan font-normal">Exclusivas</span>
              </span>
            </h1>
          </motion.div>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-lg leading-relaxed font-light"
          >
            Tours privados y traslados de lujo con atención personalizada 
            para viajeros que buscan lo extraordinario.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Button
              size="lg"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-primary hover:bg-primary-dark text-white font-medium px-10 py-7 text-base rounded-full transition-all duration-500 hover:shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.5)]"
            >
              Diseña tu experiencia
              <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 px-10 py-7 text-base rounded-full transition-all duration-500"
              onClick={() => window.location.href = '/servicios'}
            >
              Explorar servicios
            </Button>
          </motion.div>

          {/* Stats - Premium Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap gap-8 md:gap-16"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-cyan/30 group-hover:bg-cyan/5">
                    <stat.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{stat.value}</div>
                    <div className="text-sm text-white/40 font-light tracking-wide">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side Decorative Element */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 z-10"
      >
        <div className="w-[1px] h-40 bg-gradient-to-b from-transparent via-cyan/50 to-transparent" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[11px] tracking-[0.2em] uppercase text-white/30 font-light">Descubre</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-cyan/60 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
