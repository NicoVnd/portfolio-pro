"use client";

import { useEffect } from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    script.id = "json-ld-" + Math.random().toString(36).substr(2, 9);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(script.id);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
}

// Données structurées pour le portfolio
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nicolas Vandamme",
  url: "https://nicovnd-portfolio.vercel.app",
  image: "https://nicovnd-portfolio.vercel.app/profile.jpg",
  jobTitle: "Développeur Web PHP & Futur Fullstack",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Villeneuve d'Ascq",
    addressRegion: "Hauts-de-France",
    addressCountry: "FR",
  },
  email: "nclsvandamme@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/nicolas-vandamme-9444141b9/",
    "https://github.com/NicoVnd",
  ],
  knowsAbout: [
    "PHP",
    "Laravel",
    "Symfony",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Git",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Formation Expert Architecte Web (Bac+5)",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nicolas Vandamme | Développeur Web",
  url: "https://nicovnd-portfolio.vercel.app",
  description:
    "Portfolio de Nicolas Vandamme, Développeur Web PHP & Futur Fullstack basé à Lille. Expert en création de sites web, applications modernes et architectures complexes.",
  author: {
    "@type": "Person",
    name: "Nicolas Vandamme",
  },
  inLanguage: "fr-FR",
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://nicovnd-portfolio.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Compétences",
      item: "https://nicovnd-portfolio.vercel.app/#skills",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Projets",
      item: "https://nicovnd-portfolio.vercel.app/#projects",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Expériences",
      item: "https://nicovnd-portfolio.vercel.app/#experiences",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: "https://nicovnd-portfolio.vercel.app/#contact",
    },
  ],
};
