import { useState } from "react";
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

const Index = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleToggleService = (serviceTitle: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceTitle)
        ? prev.filter(s => s !== serviceTitle)
        : [...prev, serviceTitle]
    );
  };

  const handleContinueToQuote = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <SEO />
      <div className="min-h-screen">
        <Header />
        <main>
        <Hero />
        <About />
        <Services 
          selectedServices={selectedServices}
          onToggleService={handleToggleService}
          onContinue={handleContinueToQuote}
        />
        <Vehicles />
        <Destinations />
        <Testimonials />
        <Contact selectedServices={selectedServices} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
