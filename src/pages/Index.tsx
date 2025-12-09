import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Vehicles from "@/components/Vehicles";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveSeparator from "@/components/WaveSeparator";
import QuoteForm from "@/components/QuoteForm";

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <WaveSeparator variant="cyan" />
          <Services />
          <WaveSeparator variant="primary" flip />
          <Vehicles />
          <Destinations />
          <Testimonials />
          <section id="cotizacion" className="py-24 bg-gradient-to-b from-muted/30 to-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-tropical-red/10 text-tropical-red rounded-full text-sm font-medium mb-4">
                  Tu Ruta Personalizada
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Solicita tu <span className="text-tropical-turquoise">Cotización</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Cuéntanos sobre tu viaje ideal y recibe una cotización personalizada.
                </p>
              </div>
              <QuoteForm />
            </div>
          </section>
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;