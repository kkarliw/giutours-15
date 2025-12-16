import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-colombia.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      ref={ref}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      aria-label="Sección principal"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-[120vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Hermosa vista de Cartagena, Colombia"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-blue-dark/50 via-secondary-blue/40 to-secondary-blue-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-cyan/20" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 text-center text-white pt-20"
      >
        {/* Location Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20"
        >
          <MapPin className="w-4 h-4 text-yellow" />
          <span className="text-sm font-medium">Cartagena de Indias, Colombia</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="mb-6 font-display"
        >
          Vive la Magia del{" "}
          <span className="text-gradient-gold">Caribe Colombiano</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light leading-relaxed text-white/90"
        >
          Tours exclusivos, traslados seguros y experiencias únicas. 
          Tu aventura tropical comienza aquí.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={scrollToServices}
            className="group bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-primary transition-all duration-300 hover:scale-105 rounded-full btn-glow-red"
            aria-label="Diseñar tu ruta personalizada"
          >
            Tu Ruta Personalizada
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-tropical-yellow/80 bg-tropical-yellow/20 backdrop-blur-sm text-white hover:bg-tropical-yellow hover:text-secondary px-8 py-6 text-lg hover:scale-105 transition-all duration-300 rounded-full"
            onClick={() => window.location.href = '/servicios'}
            aria-label="Explorar todos los servicios"
          >
            Explorar Servicios
            <MapPin className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { number: "500+", label: "Tours realizados" },
            { number: "100%", label: "Clientes satisfechos" },
            { number: "24/7", label: "Disponibilidad" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow mb-1">{stat.number}</div>
              <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-3 bg-white rounded-full" />
        </motion.div>
      </motion.div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;