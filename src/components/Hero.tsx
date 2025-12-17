import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-colombia.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section 
      ref={ref}
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="w-full h-[115vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-secondary-blue-dark/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 pt-24"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20"
          >
            <span className="w-2 h-2 bg-cyan rounded-full" />
            <span className="text-sm text-white/90">Cartagena de Indias, Colombia</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white mb-6"
          >
            Vive el Caribe
            <br />
            <span className="text-cyan">Colombiano</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed"
          >
            Tours exclusivos y traslados seguros con el mejor servicio personalizado
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-6 text-base rounded-full transition-all hover:scale-[1.02]"
            >
              Diseña tu viaje
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-secondary-blue-dark px-8 py-6 text-base rounded-full transition-all"
              onClick={() => window.location.href = '/servicios'}
            >
              <Play className="mr-2 w-5 h-5" />
              Ver servicios
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg"
        >
          {[
            { value: "500+", label: "Tours" },
            { value: "100%", label: "Satisfacción" },
            { value: "24/7", label: "Servicio" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
