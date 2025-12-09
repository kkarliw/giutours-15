import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-giu-tours-dark.png";

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1RAZPrqPRp/?mibextid=wwXIfr", label: "Facebook", color: "hover:bg-tropical-blue" },
    { icon: Instagram, href: "https://www.instagram.com/giutours_ctg?igsh=MTgzcTJia2YwNWcxaw==", label: "Instagram", color: "hover:bg-tropical-red" },
    { icon: MessageCircle, href: "https://api.whatsapp.com/send?phone=573222280104", label: "WhatsApp", color: "hover:bg-green-500" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@giutours_ctg?_r=1&_t=ZS-914T4a1uuKC", label: "TikTok", color: "hover:bg-tropical-turquoise" },
  ];

  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "FAQ", href: "/faq" },
  ];

  const services = [
    { name: "City Tour Cartagena", href: "/servicio/city-tour-cartagena" },
    { name: "Traslados Aeropuerto", href: "/servicio/traslados-aeropuerto" },
    { name: "Volcán del Totumo", href: "/servicio/volcan-del-totumo" },
    { name: "Isla Barú", href: "/servicio/isla-baru" },
  ];

  return (
    <footer className="bg-tropical-blue text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="GIU Tours" className="h-14 mb-5" />
            <p className="text-white/70 leading-relaxed mb-6">
              Tu compañero de confianza para explorar la Costa Caribe colombiana con estilo y seguridad.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-tropical-yellow">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/70 hover:text-tropical-turquoise transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-tropical-yellow">Servicios</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/70 hover:text-tropical-turquoise transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-tropical-yellow">Contacto</h4>
            <div className="space-y-4">
              <a
                href="tel:+573222280104"
                className="flex items-center gap-3 text-white/70 hover:text-tropical-turquoise transition-colors"
              >
                <div className="w-9 h-9 bg-tropical-turquoise/20 rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-tropical-turquoise" />
                </div>
                +57 322 228 0104
              </a>
              <a
                href="mailto:giutoursctg@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-tropical-turquoise transition-colors"
              >
                <div className="w-9 h-9 bg-tropical-turquoise/20 rounded-full flex items-center justify-center">
                  <Mail size={16} className="text-tropical-turquoise" />
                </div>
                giutoursctg@gmail.com
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-9 h-9 bg-tropical-turquoise/20 rounded-full flex items-center justify-center">
                  <MapPin size={16} className="text-tropical-turquoise" />
                </div>
                Cartagena, Colombia
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>&copy; {currentYear} GIU Tours. Todos los derechos reservados.</p>
            <p>Hecho con ❤️ en Cartagena</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;