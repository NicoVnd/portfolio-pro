import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuration SEO
const siteUrl = "https://nicovnd-portfolio.vercel.app";
const siteName = "Nicolas Vandamme | Développeur Web";
const siteDescription =
  "Portfolio de Nicolas Vandamme, Développeur Web PHP & Futur Fullstack basé à Lille. Expert en création de sites web, applications modernes et architectures complexes. Découvrez mes projets et compétences.";

export const metadata: Metadata = {
  // Métadonnées de base
  title: {
    default: siteName,
    template: "%s | Nicolas Vandamme",
  },
  description: siteDescription,
  keywords: [
    "Nicolas Vandamme",
    "Développeur Web",
    "Développeur PHP",
    "Développeur Fullstack",
    "Portfolio",
    "Lille",
    "Villeneuve d'Ascq",
    "React",
    "Next.js",
    "TypeScript",
    "Laravel",
    "Symfony",
    "Développeur Frontend",
    "Développeur Backend",
    "Création site web",
    "Architecte Web",
  ],
  authors: [{ name: "Nicolas Vandamme", url: siteUrl }],
  creator: "Nicolas Vandamme",
  publisher: "Nicolas Vandamme",

  // URL canonique
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Nicolas Vandamme - Développeur Web",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/profile.jpg"],
    creator: "@NicoVnd",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icônes
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // Autres métadonnées
  category: "technology",
  classification: "Portfolio",

  // Vérification Google Search Console
  verification: {
    google: "HydhH34Gu4kWUFX_P7TWDAdFIRpcPQzX19eC1MlrcNw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Données structurées JSON-LD
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nicolas Vandamme",
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "Développeur Web PHP & Futur Fullstack",
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
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    author: {
      "@type": "Person",
      name: "Nicolas Vandamme",
    },
    inLanguage: "fr-FR",
  };

  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Données structurées JSON-LD pour SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Theme initializer — runs before React hydration to avoid FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var saved = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = saved ? saved : (prefersDark ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
