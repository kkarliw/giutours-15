import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/logo-giu-tours-dark.png";

// TikTok Icon Component
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1RAZPrqPRp/?mibextid=wwXIfr", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/giutours_ctg?igsh=MTgzcTJia2YwNWcxaw==", label: "Instagram" },
    { icon: MessageCircle, href: "https://api.whatsapp.com/send?phone=573222280104", label: "WhatsApp" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@giutours_ctg?_r=1&_t=ZS-914T4a1uuKC", label: "TikTok" },
  ];

  return (
    <footer className="bg-secondary-blue-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="GIU Tours" className="h-16 mb-4" />
            <p className="text-white/70 leading-relaxed">
              Tu compañero de confianza para explorar Colombia con estilo y seguridad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Destinos", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="tel:+573222280104"
                className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
              >
                <MessageCircle size={18} />
                +57 322 228 0104
              </a>
              <a
                href="mailto:giutoursctg@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                giutoursctg@gmail.com
              </a>
              <p className="flex items-center gap-2 text-white/70">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Cartagena, Colombia
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>
            &copy; {currentYear} GIU Tours. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
