import { Facebook, Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-giu-tours-dark.png";

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/share/1RAZPrqPRp/?mibextid=wwXIfr" },
    { icon: Instagram, href: "https://www.instagram.com/giutours_ctg?igsh=MTgzcTJia2YwNWcxaw==" },
    { icon: MessageCircle, href: "https://api.whatsapp.com/send?phone=573222280104" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@giutours_ctg?_r=1&_t=ZS-914T4a1uuKC" },
  ];

  return (
    <footer className="bg-secondary-blue-dark text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo */}
          <div>
            <img src={logo} alt="GIU Tours" className="h-12 mb-4" />
            <p className="text-white/60 text-sm leading-relaxed">
              Tu compañero de confianza para explorar Colombia con estilo y seguridad.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {["Inicio", "Servicios", "Destinos", "Contacto"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-white/60 text-sm">
              <a href="tel:+573222280104" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} /> +57 322 228 0104
              </a>
              <a href="mailto:giutoursctg@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} /> giutoursctg@gmail.com
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={16} /> Cartagena, Colombia
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          © {year} GIU Tours. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
