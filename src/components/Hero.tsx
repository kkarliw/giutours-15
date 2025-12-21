import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Clock, Play, Pause } from "lucide-react";
import heroImage from "@/assets/hero-colombia.jpg";
import destCartagena from "@/assets/dest-cartagena.jpg";
import destTayrona from "@/assets/dest-tayrona.jpg";
import destBogota from "@/assets/dest-bogota.jpg";
import destMedellin from "@/assets/dest-medellin.jpg";

const Hero = () => {
  const [currentMedia, setCurrentMedia] = useState<'video' | number>('video');
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const images = [heroImage, destCartagena, destTayrona, destBogota, destMedellin];
  
  const stats = [
    { value: "500+", label: "Experiencias", icon: Star },
    { value: "100%", label: "Satisfacción", icon: Shield },
    { value: "24/7", label: "Disponibilidad", icon: Clock },
  ];

  // Video de Cartagena - usando un video de stock gratuito de Pexels
  const videoUrl = "https://videos.pexels.com/video-files/6587093/6587093-uhd_2560_1440_25fps.mp4";

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (currentMedia === 'video') {
      // Después de 10 segundos, cambiar a la primera imagen
      timer = setTimeout(() => {
        setCurrentMedia(0);
      }, 10000);
    } else if (typeof currentMedia === 'number') {
      // Cada 4 segundos, cambiar a la siguiente imagen
      timer = setTimeout(() => {
        const nextIndex = currentMedia + 1;
        if (nextIndex >= images.length) {
          setCurrentMedia('video');
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        } else {
          setCurrentMedia(nextIndex);
        }
      }, 4000);
    }
    
    return () => clearTimeout(timer);
  }, [currentMedia, images.length]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {/* Video */}
        <AnimatePresence>
          {currentMedia === 'video' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                loop={false}
                className="w-full h-full object-cover"
                onEnded={() => setCurrentMedia(0)}
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Images */}
        <AnimatePresence>
          {typeof currentMedia === 'number' && (
            <motion.div
              key={currentMedia}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={images[currentMedia]}
                alt="Cartagena"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Gradient Overlay - Softer for white theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="max-w-3xl">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-background/70 font-light">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
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
            <h1 className="text-background font-light leading-[0.95] tracking-[-0.02em]">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Experiencias</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
                <span className="text-primary font-normal">Exclusivas</span>
              </span>
            </h1>
          </motion.div>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-background/60 mb-12 max-w-lg leading-relaxed font-light"
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
              className="group bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-10 py-7 text-base rounded-full transition-all duration-500 hover:shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.5)]"
            >
              Diseña tu experiencia
              <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-background/20 bg-background/10 backdrop-blur-sm text-background hover:bg-background/20 hover:border-background/30 px-10 py-7 text-base rounded-full transition-all duration-500"
              onClick={() => window.location.href = '/servicios'}
            >
              Explorar servicios
            </Button>
          </motion.div>

          {/* Stats */}
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
                  <div className="w-12 h-12 rounded-xl bg-background/10 border border-background/20 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-semibold text-background tracking-tight">{stat.value}</div>
                    <div className="text-sm text-background/50 font-light tracking-wide">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video/Image Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 z-10 flex items-center gap-4"
      >
        {/* Play/Pause Button */}
        {currentMedia === 'video' && (
          <button
            onClick={togglePlayPause}
            className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm border border-background/30 flex items-center justify-center hover:bg-background/30 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-background" />
            ) : (
              <Play className="w-4 h-4 text-background ml-0.5" />
            )}
          </button>
        )}
        
        {/* Media Dots */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              setCurrentMedia('video');
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentMedia === 'video' ? 'bg-primary w-6' : 'bg-background/40 w-2 hover:bg-background/60'
            }`}
          />
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMedia(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentMedia === index ? 'bg-primary w-6' : 'bg-background/40 w-2 hover:bg-background/60'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[11px] tracking-[0.2em] uppercase text-background/40 font-light">Descubre</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-primary/60 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;