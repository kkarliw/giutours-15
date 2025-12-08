import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import WaveSeparator from "@/components/WaveSeparator";

const FAQPage = () => {
  const faqs = [
    {
      question: "¿Cómo hago una reserva?",
      answer: "Reservar es muy fácil. Puedes hacerlo directamente por WhatsApp al +57 322 228 0104, completar el formulario de cotización en nuestra página, o llamarnos. Te responderemos en menos de 1 hora con toda la información y disponibilidad."
    },
    {
      question: "¿Con cuánto tiempo de anticipación debo reservar?",
      answer: "Recomendamos reservar con al menos 24-48 horas de anticipación para garantizar disponibilidad, especialmente en temporada alta (diciembre-enero, Semana Santa y festivos). Para grupos grandes o servicios especiales, sugerimos reservar con una semana de anticipación."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos pagos en efectivo (pesos colombianos y dólares), transferencias bancarias, Nequi, Daviplata y tarjetas de crédito/débito. Para reservas, solicitamos un anticipo del 30-50% dependiendo del servicio."
    },
    {
      question: "¿Los tours incluyen guía turístico?",
      answer: "Sí, todos nuestros tours incluyen un guía profesional bilingüe (español/inglés) que te acompañará durante todo el recorrido, brindándote información histórica, cultural y recomendaciones locales."
    },
    {
      question: "¿Puedo cancelar o modificar mi reserva?",
      answer: "Sí, puedes cancelar o modificar tu reserva hasta 24 horas antes sin penalidad. Cancelaciones con menos de 24 horas tienen un cargo del 50% del valor del servicio. En caso de emergencias, evaluamos cada situación de manera individual."
    },
    {
      question: "¿Pueden personalizar un tour según mis preferencias?",
      answer: "¡Por supuesto! Nos especializamos en crear experiencias personalizadas. Cuéntanos tus intereses, tiempo disponible y presupuesto, y diseñaremos un itinerario único para ti. Contáctanos por WhatsApp para planificar tu tour a medida."
    },
    {
      question: "¿Los vehículos tienen aire acondicionado?",
      answer: "Sí, todos nuestros vehículos cuentan con aire acondicionado funcionando perfectamente. Además, son vehículos modernos, cómodos y cumplen con todos los requisitos de seguridad."
    },
    {
      question: "¿Ofrecen servicio de recogida en el hotel?",
      answer: "Sí, todos nuestros servicios incluyen recogida y regreso a tu hotel dentro de la zona turística de Cartagena sin costo adicional. Para ubicaciones fuera de esta zona, consultamos disponibilidad."
    },
    {
      question: "¿Qué debo llevar a los tours?",
      answer: "Depende del tour, pero generalmente recomendamos: ropa cómoda, protector solar, gorra o sombrero, agua, dinero en efectivo para gastos personales y una cámara. Para tours de playa, añade traje de baño, toalla y sandalias."
    },
    {
      question: "¿Los tours son aptos para niños y adultos mayores?",
      answer: "Sí, la mayoría de nuestros tours son aptos para todas las edades. Si viajas con niños pequeños o adultos mayores, infórmanos para adaptar el ritmo y las actividades. Contamos con sillas para bebés bajo solicitud previa."
    }
  ];

  return (
    <>
      <SEO 
        title="Preguntas Frecuentes | GIU Tours Cartagena"
        description="Resuelve tus dudas sobre nuestros servicios de tours y traslados en Cartagena. Información sobre reservas, pagos, cancelaciones y más."
      />
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-cyan to-secondary-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-10 h-10" />
              </div>
              <h1 className="mb-6">
                Preguntas <span className="text-gradient-gold">Frecuentes</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Encuentra respuestas a las dudas más comunes sobre nuestros servicios
              </p>
            </motion.div>
          </div>
          <WaveSeparator variant="yellow" className="mt-12" />
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-background tropical-pattern">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <AccordionItem 
                      value={`item-${index}`}
                      className="bg-card rounded-2xl border border-border shadow-card overflow-hidden data-[state=open]:shadow-hover transition-shadow"
                    >
                      <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-secondary/30 transition-colors">
                        <span className="text-lg font-semibold text-foreground pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-secondary-blue to-secondary-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-white mb-4">
                ¿No encontraste tu respuesta?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Estamos aquí para ayudarte. Contáctanos directamente y resolveremos todas tus dudas.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all btn-glow-red"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=573222280104&text=Hola, tengo una pregunta sobre los servicios de GIU Tours", "_blank")}
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Pregunta por WhatsApp
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default FAQPage;