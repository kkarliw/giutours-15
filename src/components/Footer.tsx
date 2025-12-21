import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Instagram, MessageCircle, Mail, MapPin, Phone, Clock, Shield, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-giu-tours-dark.png";

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const year = new Date().getFullYear();

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/share/1RAZPrqPRp/?mibextid=wwXIfr", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/giutours_ctg?igsh=MTgzcTJia2YwNWcxaw==", label: "Instagram" },
    { icon: MessageCircle, href: "https://api.whatsapp.com/send?phone=573222280104", label: "WhatsApp" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@giutours_ctg?_r=1&_t=ZS-914T4a1uuKC", label: "TikTok" },
  ];

  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
  ];

  const services = [
    { name: "Tours Islas del Rosario", href: "/servicios/tours-islas-del-rosario" },
    { name: "City Tours Cartagena", href: "/servicios/city-tours-cartagena" },
    { name: "Traslados Aeropuerto", href: "/servicios/traslados-aeropuerto" },
    { name: "Tours Playa Blanca", href: "/servicios/tours-playa-blanca" },
  ];

  const guarantees = [
    { icon: Shield, text: "Servicio Seguro" },
    { icon: Award, text: "Calidad Premium" },
    { icon: Clock, text: "Puntualidad" },
  ];

  return (
    <footer ref={ref} className="relative bg-secondary-blue-dark text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section - CTA */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  ¿Listo para una experiencia <span className="text-primary">inolvidable</span>?
                </h3>
                <p className="text-white/60">
                  Contáctanos y diseñemos juntos tu próximo viaje
                </p>
              </div>
              <Link
                to="/#contacto"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Solicitar Cotización
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Middle Section - Links & Info */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <img src={logo} alt="GIU Tours" className="h-14 mb-6" />
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Tu compañero de confianza para explorar el Caribe colombiano con estilo, seguridad y la excelencia que mereces.
              </p>
              
              {/* Guarantees */}
              <div className="space-y-3">
                {guarantees.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon size={14} className="text-primary" />
                    </div>
                    <span className="text-white/70">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                Enlaces Rápidos
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full" />
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                Nuestros Servicios
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full" />
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.href}
                      className="text-white/60 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                Contacto
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full" />
              </h4>
              <div className="space-y-4">
                <a 
                  href="tel:+573222280104" 
                  className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors shrink-0">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Teléfono / WhatsApp</p>
                    <p className="text-sm font-medium text-white/80">+57 322 228 0104</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:giutoursctg@gmail.com" 
                  className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors shrink-0">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Correo Electrónico</p>
                    <p className="text-sm font-medium text-white/80">giutoursctg@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Ubicación</p>
                    <p className="text-sm font-medium text-white/80">Cartagena de Indias, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Horario de Atención</p>
                    <p className="text-sm font-medium text-white/80">Lun - Dom: 6:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-xs text-white/40 mb-3">Síguenos en redes sociales</p>
                <div className="flex gap-3">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-xl flex items-center justify-center transition-all duration-300 group"
                    >
                      <social.icon size={18} className="text-white/60 group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/40 text-sm text-center md:text-left">
                © {year} GIU Tours. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-6 text-sm text-white/40">
                <Link to="/preguntas-frecuentes" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>Cartagena, Colombia 🇨🇴</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
