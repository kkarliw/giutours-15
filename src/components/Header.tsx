import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-giu-tours.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Quiénes Somos", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Vehículos", href: "#vehicles" },
    { label: "Destinos", href: "#destinations" },
    { label: "Clientes", href: "#testimonials" },
    { label: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="flex items-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GIU Tours - Ir al inicio"
            >
              <img src={logo} alt="GIU Tours - Transporte turístico exclusivo en Colombia" className="h-12 md:h-16" />
            </motion.a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Navegación principal">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm font-medium text-foreground hover:text-secondary-blue transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={`Ir a ${item.label}`}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block"
            >
            <Button
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=573222280104", "_blank")}
                aria-label="Cotizar viaje por WhatsApp"
              >
                Cotiza tu viaje
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-secondary-blue transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-40 bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-2xl font-medium text-foreground hover:text-secondary-blue transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-4 py-2"
                aria-label={`Ir a ${item.label}`}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-primary mt-4 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=573222280104", "_blank")}
              aria-label="Cotizar viaje por WhatsApp"
            >
              Cotiza tu viaje
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;
