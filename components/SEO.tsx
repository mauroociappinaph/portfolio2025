import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  locale?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Mauro José Ciappina | Full Stack Developer",
  description = "Full Stack Developer especializado en React, TypeScript, Node.js y tecnologías modernas. Portfolio interactivo con proyectos innovadores y experiencia en desarrollo web.",
  keywords = "Full Stack Developer, React Developer, TypeScript, JavaScript, Node.js, Frontend, Backend, Portfolio, Mauro Ciappina, Web Developer",
  image = "https://mauro-ciappina-portfolio-mib3n28y2-mauroociappinaphs-projects.vercel.app/og-image.jpg",
  url = "https://mauro-ciappina-portfolio-mib3n28y2-mauroociappinaphs-projects.vercel.app/",
  type = "website",
  locale = "es_ES"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:locale', locale, true);

    // Update Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', url, true);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, keywords, image, url, type, locale]);

  return null;
};

export default SEO;
