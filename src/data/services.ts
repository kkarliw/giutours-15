export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  experiencia: string;
  itinerario: string;
  includes: string[];
  notIncludes: string[];
  recommendations: string[];
  image: string;
  gallery: string[];
  icon: string;
  duration?: string;
  badge?: string;
  popular?: boolean;
  destination?: string;
}

export const servicesData: ServiceData[] = [
  {
    id: "traslados-ciudad",
    slug: "traslados-urbanos-cartagena",
    title: "Traslados Urbanos Privados",
    shortDescription: "Traslados privados y puntuales desde y hacia el aeropuerto, con acompañamiento desde el primer momento.",
    fullDescription: "Nuestro servicio de traslados en la ciudad está diseñado para que el cliente se mueva con tranquilidad desde su llegada a Cartagena hasta su salida. Cubrimos traslados aeropuerto–hotel, hotel–aeropuerto y recorridos urbanos adicionales, con atención personalizada y coordinación previa para evitar contratiempos.",
    experiencia: "El cliente se siente acompañado desde su llegada, seguro y bien orientado. Desde el primer contacto hay claridad, trato respetuoso y un ritmo cómodo, sin prisas ni desorden. El servicio se adapta al plan del viajero, manteniendo siempre una experiencia organizada y confiable.",
    itinerario: "En el traslado aeropuerto–hotel, el cliente tiene contacto previo con su conductor y, al llegar, una persona lo espera en el aeropuerto con un letrero con el nombre de quien realizó la reserva. En el traslado hotel–aeropuerto, el conductor recoge al cliente directamente en su hotel a la hora previamente acordada.",
    includes: [
      "Acompañamiento personalizado",
      "Transporte privado con aire acondicionado",
      "Coordinación previa del servicio",
      "Conductor asignado",
      "Monitoreo de vuelos"
    ],
    notIncludes: [
      "Gastos personales",
      "Entradas o consumos en lugares visitados",
      "Servicios no previamente acordados"
    ],
    recommendations: [
      "Confirmar horarios de vuelo con anticipación",
      "Enviar información del vuelo al reservar",
      "Avisar si desea traslados adicionales"
    ],
    image: "/src/assets/vehicle-sprinter.jpg",
    gallery: ["/src/assets/vehicle-sprinter.jpg", "/src/assets/vehicle-sedan.jpg", "/src/assets/vehicle-suv.jpg"],
    icon: "Plane",
    duration: "Variable según trayecto",
    destination: "Cartagena de Indias",
    popular: true,
    badge: "Esencial"
  },
  {
    id: "city-tour",
    slug: "city-tour-cartagena",
    title: "City Tour Histórico Cartagena",
    shortDescription: "Recorrido guiado por los lugares más emblemáticos de Cartagena para conocer su historia, cultura y esencia.",
    fullDescription: "Nuestro City Tour es un recorrido histórico por los principales atractivos de Cartagena, diseñado para que el visitante conozca la ciudad más allá de lo superficial. A través de paradas estratégicas y un acompañamiento guiado, el turista se conecta con la historia, la cultura y la identidad cartagenera de forma organizada y enriquecedora.",
    experiencia: "El cliente vive una experiencia cómoda y organizada, independientemente del tamaño del grupo. El ritmo del recorrido se adapta al tipo de viajero, permitiendo disfrutar el tour sin afanes, con trato cercano, seguridad constante y explicaciones claras que enriquecen la visita.",
    itinerario: "El servicio inicia con la recogida del cliente en el punto previamente acordado. Recorrido por el Castillo de San Felipe, el Cerro de la Popa, las Botas Viejas, el Museo del Chocolate, la Ciudad Amurallada, el Centro Histórico, el barrio Getsemaní, Castillogrande, entre otros. Al finalizar, retorno al punto de recogida.",
    includes: [
      "Transporte turístico privado",
      "Guía profesional capacitado",
      "Recorrido por puntos históricos",
      "Paradas explicativas",
      "Traslado ida/regreso al hotel"
    ],
    notIncludes: [
      "Entradas a monumentos o museos",
      "Alimentos y bebidas",
      "Gastos adicionales personales"
    ],
    recommendations: [
      "Usar ropa cómoda y ligera",
      "Llevar bloqueador solar y gorra",
      "Mantener hidratación",
      "Llevar cámara fotográfica"
    ],
    image: "/src/assets/dest-cartagena.jpg",
    gallery: ["/src/assets/dest-cartagena.jpg", "/src/assets/dest-bogota.jpg", "/src/assets/dest-medellin.jpg"],
    icon: "MapPin",
    duration: "4 horas",
    destination: "Cartagena de Indias",
    badge: "🔥 Popular",
    popular: true
  },
  {
    id: "baru",
    slug: "pasadia-isla-baru",
    title: "Pasadía y Traslado a Isla Barú",
    shortDescription: "Traslado privado ida y regreso a Isla Barú, con acompañamiento durante toda la jornada.",
    fullDescription: "Este servicio está pensado para quienes desean disfrutar Isla Barú con tranquilidad y control total de su tiempo. Giutours se encarga del traslado ida y regreso desde el punto acordado, acompañando al cliente durante toda la jornada para que su experiencia en la isla sea cómoda, organizada y sin preocupaciones.",
    experiencia: "El cliente disfruta la isla con la tranquilidad de saber que su transporte está asegurado durante todo el día. Se siente acompañado, seguro y bien orientado, sin presiones de tiempo. El trato es cercano y el ritmo lo marca el propio viajero, lo que permite disfrutar Barú sin estrés ni improvisaciones.",
    itinerario: "El servicio inicia con la recogida en el punto acordado. Traslado hacia Isla Barú. En la isla, el cliente dispone libremente de su tiempo para disfrutar de la playa, restaurantes o estadía. El conductor permanece en la zona y, cuando el cliente lo indique, se realiza el regreso.",
    includes: [
      "Transporte turístico privado ida y regreso",
      "Conductor asignado durante toda la jornada",
      "Acompañamiento en la zona",
      "Orientación sobre lugares confiables"
    ],
    notIncludes: [
      "Gastos de lancha",
      "Alimentos y bebidas",
      "Camas soleadoras",
      "Entradas o servicios en la isla"
    ],
    recommendations: [
      "Coordinar punto de recogida con anticipación",
      "Llevar efectivo para gastos en la isla",
      "Usar protección solar biodegradable",
      "Confirmar servicios deseados previamente"
    ],
    image: "/src/assets/dest-tayrona.jpg",
    gallery: ["/src/assets/dest-tayrona.jpg", "/src/assets/dest-cartagena.jpg", "/src/assets/dest-eje-cafetero.jpg"],
    icon: "Umbrella",
    duration: "Día completo",
    destination: "Isla Barú – Cartagena",
    popular: true,
    badge: "Recomendado"
  },
  {
    id: "totumo",
    slug: "tour-volcan-totumo",
    title: "Tour al Volcán del Totumo",
    shortDescription: "Traslado y visita al Volcán del Totumo para vivir una experiencia única y diferente cerca de Cartagena.",
    fullDescription: "El Tour al Volcán del Totumo es una experiencia diferente y tradicional de la región, ideal para quienes desean conocer uno de los atractivos naturales más conocidos del Caribe colombiano. Giutours se encarga del traslado desde Cartagena, acompañando al cliente durante toda la jornada y brindando orientación en el lugar.",
    experiencia: "El cliente vive una experiencia tranquila y organizada, con transporte cómodo y acompañamiento constante. Se siente seguro y bien orientado, disfrutando el destino sin prisas ni presión de tiempo. El ritmo del recorrido lo define el propio viajero.",
    itinerario: "El tour inicia con la recogida en el punto acordado en Cartagena. Traslado hacia el Volcán del Totumo. El cliente decide cuánto tiempo permanecer y si desea ingresar al volcán. Al finalizar la visita, se realiza el regreso a la ciudad.",
    includes: [
      "Transporte turístico privado ida y regreso",
      "Conductor acompañante",
      "Entrada al volcán (opcional)",
      "Conocimiento de la zona para recomendaciones"
    ],
    notIncludes: [
      "Alimentación e hidratación",
      "Propinas",
      "Servicios adicionales"
    ],
    recommendations: [
      "Llevar ropa cómoda y sandalias",
      "Traje de baño y toalla",
      "Ropa de cambio",
      "Llevar efectivo para gastos personales",
      "Protección solar"
    ],
    image: "/src/assets/dest-eje-cafetero.jpg",
    gallery: ["/src/assets/dest-eje-cafetero.jpg", "/src/assets/dest-tayrona.jpg", "/src/assets/dest-cartagena.jpg"],
    icon: "Mountain",
    duration: "Medio día",
    destination: "Volcán del Totumo – Bolívar"
  },
  {
    id: "barranquilla-traslado",
    slug: "traslado-barranquilla",
    title: "Traslado Privado a Barranquilla",
    shortDescription: "Traslado privado y directo desde Cartagena hacia la ciudad de Barranquilla.",
    fullDescription: "Este servicio está diseñado para clientes que necesitan desplazarse de forma cómoda y segura desde Cartagena hasta Barranquilla. Giutours se encarga de la recogida en el hotel y del traslado terrestre directo, adaptándose a la cantidad de pasajeros y al horario acordado.",
    experiencia: "El cliente disfruta de un traslado cómodo, seguro y sin complicaciones. El ritmo del viaje es tranquilo, con trato profesional y un enfoque práctico que permite llegar a destino sin estrés ni retrasos innecesarios.",
    itinerario: "El servicio inicia con la recogida directamente en el hotel o punto acordado en Cartagena. Se realiza el traslado terrestre hacia Barranquilla, finalizando en el lugar de destino indicado por el cliente.",
    includes: [
      "Transporte turístico privado",
      "Conductor asignado",
      "Vehículo adecuado según pasajeros"
    ],
    notIncludes: [
      "Alimentación y bebidas",
      "Paradas no acordadas",
      "Gastos adicionales al transporte"
    ],
    recommendations: [
      "Confirmar horario de salida",
      "Llevar hidratación personal",
      "Avisar punto de destino con anticipación"
    ],
    image: "/src/assets/dest-bogota.jpg",
    gallery: ["/src/assets/dest-bogota.jpg", "/src/assets/vehicle-sprinter.jpg", "/src/assets/vehicle-suv.jpg"],
    icon: "Car",
    duration: "2-2.5 horas",
    destination: "Barranquilla, Atlántico"
  },
  {
    id: "barranquilla-tour",
    slug: "tour-barranquilla",
    title: "City Tour por Barranquilla",
    shortDescription: "Recorrido guiado por los principales atractivos culturales y urbanos de Barranquilla, saliendo de Cartagena.",
    fullDescription: "Este tour permite conocer Barranquilla, una ciudad vibrante reconocida por su cultura, su historia y su conexión con el río Magdalena. Giutours ofrece una experiencia organizada que combina recorrido panorámico, paradas turísticas y relato cultural, ideal para quienes desean descubrir el carácter único de 'La Arenosa'.",
    experiencia: "El cliente vive una experiencia cómoda y bien organizada durante toda la jornada. El recorrido se realiza a un ritmo tranquilo, con trato cercano y acompañamiento constante. La experiencia combina disfrute visual, aprendizaje cultural y desplazamientos seguros.",
    itinerario: "Salida desde Cartagena por la Vía al Mar. Parada en Casa al Revés. Llegada a Barranquilla para recorrer el Malecón del Río, Aleta del Tiburón, monumentos de Shakira y Sofía Vergara, El Renacuajo Paseador, rueda de altura, Ventana al Mundo, y retorno a Cartagena.",
    includes: [
      "Transporte turístico privado ida y regreso",
      "Tour guiado por personal experto",
      "Acompañamiento del conductor",
      "Paradas en puntos emblemáticos"
    ],
    notIncludes: [
      "Almuerzo, bebidas y snacks",
      "Entradas a atracciones",
      "Gastos personales adicionales"
    ],
    recommendations: [
      "Llevar ropa y calzado cómodo",
      "Usar protección solar",
      "Llevar hidratación personal",
      "Efectivo para gastos opcionales"
    ],
    image: "/src/assets/dest-medellin.jpg",
    gallery: ["/src/assets/dest-medellin.jpg", "/src/assets/dest-bogota.jpg", "/src/assets/dest-cartagena.jpg"],
    icon: "Building",
    duration: "8-9 horas",
    destination: "Barranquilla, Atlántico"
  },
  {
    id: "santa-marta",
    slug: "traslado-santa-marta",
    title: "Traslado Privado a Santa Marta",
    shortDescription: "Traslado privado y directo desde Cartagena hacia la ciudad de Santa Marta.",
    fullDescription: "Este servicio está pensado para quienes necesitan desplazarse de forma cómoda y organizada desde Cartagena hasta Santa Marta. Giutours realiza la recogida en el hotel y el traslado terrestre, con paradas breves en el camino y adaptación al número de pasajeros.",
    experiencia: "El cliente disfruta de un viaje tranquilo y seguro, con un ritmo cómodo y sin presión. El trato es profesional y el servicio está diseñado para trayectos largos, permitiendo descansar y llegar al destino en buenas condiciones.",
    itinerario: "Recogida en el hotel o punto acordado en Cartagena. Durante el recorrido hacia Santa Marta se realizan paradas breves según necesidad. Al llegar, el cliente es dejado en el punto de destino indicado.",
    includes: [
      "Transporte turístico privado",
      "Conductor certificado",
      "Asistencia en ruta",
      "Paradas breves durante el trayecto"
    ],
    notIncludes: [
      "Alimentación y bebidas",
      "Gastos personales",
      "Entradas a parques naturales"
    ],
    recommendations: [
      "Llevar hidratación y snacks",
      "Confirmar lugar exacto de destino",
      "Planificar actividades en Santa Marta"
    ],
    image: "/src/assets/dest-tayrona.jpg",
    gallery: ["/src/assets/dest-tayrona.jpg", "/src/assets/dest-eje-cafetero.jpg", "/src/assets/dest-medellin.jpg"],
    icon: "Navigation",
    duration: "4-5 horas",
    destination: "Santa Marta, Magdalena"
  },
  {
    id: "mompox",
    slug: "traslado-mompox",
    title: "Traslado Privado a Mompox",
    shortDescription: "Traslado privado desde Cartagena hacia Mompox, destino histórico y patrimonial de Colombia.",
    fullDescription: "Este servicio está diseñado para quienes desean viajar desde Cartagena hasta Santa Cruz de Mompox, una ciudad reconocida por su riqueza histórica, arquitectura colonial y valor cultural. Giutours ofrece un traslado terrestre cómodo y organizado, ideal para quienes buscan llegar a este destino turístico con tranquilidad y buena planificación.",
    experiencia: "El cliente vive un viaje tranquilo y bien organizado, con un ritmo cómodo para un trayecto largo. El servicio ofrece seguridad, trato profesional y la confianza de viajar con un conductor en óptimas condiciones.",
    itinerario: "Recogida en el hotel o punto acordado en Cartagena. Durante el recorrido hacia Mompox se realizan paradas breves para necesidades personales o alimentación. Al llegar, el cliente es dejado en el punto de destino indicado.",
    includes: [
      "Transporte turístico privado",
      "Paradas breves durante el trayecto",
      "Conductor capacitado para viajes largos"
    ],
    notIncludes: [
      "Alimentación y bebidas",
      "Gastos personales",
      "Servicios adicionales"
    ],
    recommendations: [
      "Llevar hidratación y snacks",
      "Ropa cómoda para el viaje",
      "Confirmar punto de llegada"
    ],
    image: "/src/assets/dest-bogota.jpg",
    gallery: ["/src/assets/dest-bogota.jpg", "/src/assets/dest-cartagena.jpg", "/src/assets/dest-medellin.jpg"],
    icon: "Landmark",
    duration: "5-6 horas",
    destination: "Santa Cruz de Mompox, Bolívar",
    badge: "Patrimonio UNESCO"
  }
];

// Brand information from document
export const brandInfo = {
  name: "Giutours",
  tagline: "Tu compañero de aventuras en Colombia",
  description: "Somos una empresa de transporte turístico privado que acompaña a los viajeros desde que llegan a Cartagena. Hacemos que moverse sea fácil, cómodo y seguro, con un servicio pensado para personas, familias y grupos que quieren disfrutar sin complicaciones.",
  mission: "Nos dedicamos al transporte turístico privado y a la operación de tours guiados dentro y fuera de la ciudad de Cartagena. Realizamos traslados individuales y grupales, familiares y premium, y organizamos recorridos pensados para que el turista se mueva con tranquilidad, puntualidad y buena atención en cada etapa del viaje.",
  location: "Cartagena de Indias, Colombia",
  coverage: ["Cartagena", "Santa Marta", "Barranquilla", "Mompox", "Islas del Caribe"],
  values: [
    "Operaciones organizadas y responsables",
    "Respeto por las comunidades y espacios que visitamos",
    "Conductores y guías comprometidos con trato ético y profesional",
    "Servicio pensado para disfrutar sin afectar el lugar que nos recibe"
  ],
  heroMessage: "En Giutours ofrecemos una experiencia de transporte y tours donde el viaje fluye sin estrés. Desde el primer contacto, el cliente se siente acompañado, seguro y bien atendido, con la tranquilidad de saber que todo está organizado. Confiar en Giutours es elegir puntualidad, trato responsable y un equipo que conoce el destino y cumple lo que promete.",
  trustStatement: "Tratamos a cada cliente con respeto, claridad y atención real, entendiendo que cada viaje es distinto. Trabajamos con responsabilidad, puntualidad y compromiso, cuidando tanto la experiencia del viajero como los destinos que visitamos. Nos importa hacer las cosas bien, cumplir lo que prometemos y ofrecer un servicio honesto, organizado y humano, donde la confianza no se pide: se gana.",
  history: "Giutours nació a partir de la visión de dos socios que llegaron a Cartagena como turistas, en busca de nuevas oportunidades, y se encontraron con una ciudad llena de historia, paisajes únicos y una identidad cultural que conecta con personas de todo el mundo. Con el respaldo de más de 20 años de experiencia recorriendo no solo las calles de la ciudad, sino también distintas regiones del país, Giutours se construyó sobre el conocimiento real del destino y la convicción de hacer las cosas bien."
};
