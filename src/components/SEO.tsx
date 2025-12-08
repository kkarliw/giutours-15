import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const SEO = ({
  title = "GIU Tours - Transporte Turístico Premium en Colombia",
  description = "Servicio exclusivo de transporte turístico en Colombia. Tours por Cartagena, Islas del Rosario, traslados aeropuerto y servicios corporativos. Vehículos de lujo, conductores profesionales.",
  keywords = "transporte turístico Colombia, tours Cartagena, traslados aeropuerto, tours Islas del Rosario, transporte corporativo, vehículos de lujo, guía turístico",
  ogImage = "/og-image.jpg"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href="https://giutours.com" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://giutours.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="es_CO" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://giutours.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="geo.region" content="CO-BOL" />
      <meta name="geo.placename" content="Cartagena" />
    </Helmet>
  );
};

export default SEO;
