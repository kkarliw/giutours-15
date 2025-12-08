import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-colombia.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Sección principal">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-[120vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Hermoso paisaje de Colombia"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 text-center text-white"
      >
        <motion.h1 variants={itemVariants} className="mb-6">
          Viaja con Estilo y{" "}
          <span className="text-gradient-gold">Confianza</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Descubre Colombia con el servicio de transporte turístico más exclusivo.
          Tu aventura comienza aquí.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-6 text-lg shadow-primary hover:shadow-xl hover:scale-105 transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            onClick={() => window.open("https://api.whatsapp.com/send?phone=573222280104", "_blank")}
            aria-label="Reservar viaje ahora por WhatsApp"
          >
            Reserva Ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-secondary-blue hover:border-secondary-blue hover:text-white px-8 py-6 text-lg hover:scale-105 transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            onClick={() => {
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Conocer más sobre GIU Tours"
          >
            Conoce Más
          </Button>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
