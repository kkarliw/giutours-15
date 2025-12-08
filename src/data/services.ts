export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  includes: string[];
  notIncludes: string[];
  recommendations: string[];
  image: string;
  icon: string;
  badge?: string;
  popular?: boolean;
}

export const servicesData: ServiceData[] = [
  {
    id: "city-tour",
    slug: "city-tour-cartagena",
    title: "City Tour Cartagena",
    shortDescription: "Explora los lugares más emblemáticos de Cartagena en un recorrido guiado lleno de historia, cultura y vistas únicas.",
    fullDescription: "Descubre la magia de Cartagena con nuestro tour completo por la ciudad amurallada. Un recorrido que te llevará a conocer los lugares más icónicos de esta joya del Caribe colombiano, llena de historia colonial, arquitectura impresionante y vistas que te dejarán sin aliento.",
    includes: [
      "Recorrido guiado profesional",
      "Castillo de San Felipe",
      "Botas Viejas (monumento)",
      "Cerro de La Popa",
      "Centro Histórico amurallado",
      "Bocagrande",
      "Traslado ida/regreso al hotel"
    ],
    notIncludes: [
      "Entradas especiales no mencionadas",
      "Propinas",
      "Gastos personales"
    ],
    recommendations: [
      "Ropa cómoda y ligera",
      "Mantenerse hidratado",
      "Usar protector solar y gorra",
      "Llevar cámara para fotos"
    ],
    image: "/src/assets/dest-cartagena.jpg",
    icon: "MapPin",
    badge: "🔥 Popular",
    popular: true
  },
  {
    id: "aeropuerto",
    slug: "traslados-aeropuerto",
    title: "Traslados Aeropuerto ↔ Hotel",
    shortDescription: "Servicio de transporte seguro, puntual y cómodo entre el aeropuerto y tu hotel.",
    fullDescription: "Olvídate del estrés al llegar o salir de Cartagena. Nuestro servicio de traslados te ofrece comodidad, puntualidad y seguridad desde el momento en que aterrizas hasta que llegas a tu destino.",
    includes: [
      "Recogida en aeropuerto u hotel",
      "Vehículo cómodo con aire acondicionado",
      "Conductor profesional bilingüe",
      "Asistencia personalizada",
      "Monitoreo de vuelos en tiempo real"
    ],
    notIncludes: [
      "Equipaje extra no informado previamente",
      "Paradas adicionales no programadas"
    ],
    recommendations: [
      "Proveer número de vuelo al reservar",
      "Confirmar horario 24h antes",
      "Informar cantidad exacta de equipaje"
    ],
    image: "/src/assets/vehicle-sprinter.jpg",
    icon: "Plane"
  },
  {
    id: "totumo",
    slug: "volcan-del-totumo",
    title: "Volcán del Totumo",
    shortDescription: "Vive una experiencia natural única en el Volcán del Totumo con guía y traslado incluido.",
    fullDescription: "Sumérgete en las aguas volcánicas del Totumo y disfruta de un baño de lodo con propiedades medicinales y rejuvenecedoras. Una experiencia única que combina naturaleza, relajación y aventura.",
    includes: [
      "Transporte ida y vuelta",
      "Guía turístico",
      "Entrada al volcán",
      "Baño de lodo volcánico",
      "Almuerzo típico (opcional)",
      "Recogida y regreso al hotel"
    ],
    notIncludes: [
      "Propinas",
      "Bebidas alcohólicas",
      "Souvenirs"
    ],
    recommendations: [
      "Llevar ropa de cambio",
      "Usar sandalias o zapatos de agua",
      "No llevar joyas ni objetos de valor",
      "Llevar toalla"
    ],
    image: "/src/assets/dest-eje-cafetero.jpg",
    icon: "Mountain"
  },
  {
    id: "baru",
    slug: "isla-baru",
    title: "Isla Barú",
    shortDescription: "Relájate en las playas cristalinas de Isla Barú con traslado ida y vuelta incluido.",
    fullDescription: "Escápate al paraíso caribeño de Isla Barú, famosa por sus playas de arena blanca y aguas turquesas. Un día perfecto para desconectar, nadar y disfrutar del sol tropical.",
    includes: [
      "Transporte terrestre ida y vuelta",
      "Estadía en playa",
      "Sillas y sombrilla (según disponibilidad)",
      "Guía acompañante"
    ],
    notIncludes: [
      "Comida y bebidas",
      "Actividades acuáticas adicionales",
      "Deportes náuticos"
    ],
    recommendations: [
      "Llevar bloqueador solar biodegradable",
      "Toalla y traje de baño",
      "Dinero en efectivo para extras",
      "Snorkel si deseas explorar"
    ],
    image: "/src/assets/dest-tayrona.jpg",
    icon: "Umbrella"
  },
  {
    id: "barranquilla-traslado",
    slug: "traslado-barranquilla",
    title: "Traslado a Barranquilla",
    shortDescription: "Transporte confiable y cómodo entre Cartagena y Barranquilla.",
    fullDescription: "Viaja cómodamente entre Cartagena y Barranquilla en nuestros vehículos modernos y climatizados. Servicio seguro y puntual para que disfrutes del trayecto.",
    includes: [
      "Traslado ida y vuelta",
      "Vehículo turístico climatizado",
      "Conductor profesional",
      "Asistencia durante el viaje"
    ],
    notIncludes: [
      "Paradas no programadas",
      "Alimentación durante el trayecto",
      "Alojamiento"
    ],
    recommendations: [
      "Reservar con anticipación",
      "Llevar snacks y agua",
      "Confirmar punto de encuentro"
    ],
    image: "/src/assets/dest-bogota.jpg",
    icon: "Car"
  },
  {
    id: "barranquilla-tour",
    slug: "tour-barranquilla",
    title: "Tour por Barranquilla",
    shortDescription: "Conoce lo mejor de Barranquilla en un tour guiado desde Cartagena.",
    fullDescription: "Descubre la Puerta de Oro de Colombia. Barranquilla te espera con su cultura vibrante, su famoso Carnaval y sus sitios emblemáticos. Un tour completo para conocer la esencia de esta ciudad costera.",
    includes: [
      "Transporte ida y vuelta desde Cartagena",
      "Guía turístico profesional",
      "Visita a El Malecón del Río",
      "Ventana al Mundo",
      "Museo del Carnaval",
      "Barrio El Prado histórico"
    ],
    notIncludes: [
      "Entradas a museos no mencionados",
      "Almuerzo",
      "Compras personales"
    ],
    recommendations: [
      "Llevar ropa fresca y cómoda",
      "Usar calzado adecuado para caminar",
      "Llevar cámara fotográfica"
    ],
    image: "/src/assets/dest-medellin.jpg",
    icon: "Building"
  },
  {
    id: "santa-marta",
    slug: "traslado-santa-marta",
    title: "Traslado a Santa Marta",
    shortDescription: "Viaje seguro y cómodo entre Cartagena y Santa Marta.",
    fullDescription: "Conecta con la magia de Santa Marta desde Cartagena. Nuestro servicio de traslado te lleva de manera segura y cómoda para que puedas explorar la Sierra Nevada, el Parque Tayrona y mucho más.",
    includes: [
      "Traslado ida y vuelta",
      "Vehículo turístico climatizado",
      "Conductor profesional certificado",
      "Asistencia en ruta"
    ],
    notIncludes: [
      "Alimentación",
      "Entradas a parques naturales",
      "Alojamiento"
    ],
    recommendations: [
      "Llevar hidratación suficiente",
      "Planificar actividades en Santa Marta",
      "Confirmar horarios de regreso"
    ],
    image: "/src/assets/dest-tayrona.jpg",
    icon: "Navigation"
  }
];