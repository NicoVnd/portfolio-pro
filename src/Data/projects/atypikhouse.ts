import type { Project } from "./types";

export const atypikhouse: Project = {
  id: "atypikhouse",
  title: "AtypikHouse",
  description:
    "Plateforme de location d'hébergements atypiques (cabanes, yourtes, maisons flottantes...) inspirée d'Airbnb. Projet de fin d'année Master 1, réalisé en équipe de 4.",
  fullDescription: `AtypikHouse est une plateforme web complète de réservation d'hébergements atypiques en France et en Europe. 
    
Ce projet de fin d'année de Master 1 a été réalisé en équipe de 4 personnes sur plusieurs mois. L'objectif était de créer un site style Airbnb mais spécialisé dans les logements insolites : cabanes dans les arbres, yourtes, maisons flottantes, igloos, etc.

Le site propose une expérience utilisateur complète avec un système de recherche avancé, des fiches détaillées pour chaque hébergement, un système de réservation avec paiement sécurisé, et un espace propriétaire pour gérer ses biens.`,
  type: "school",
  tags: ["Laravel", "Livewire", "PWA", "Tailwind CSS", "SQLite"],
  learned: [
    "Travail en équipe (4 personnes)",
    "Architecture MVC Laravel",
    "Livewire pour l'interactivité",
    "Progressive Web App",
    "Paiement sécurisé (Stripe/PayPal)",
  ],
  features: [
    "Recherche et filtrage avancé des hébergements",
    "Système de réservation en ligne complet",
    "Paiement sécurisé via Stripe et PayPal (sandbox)",
    "Espace client avec historique des réservations",
    "Espace propriétaire pour gérer ses habitats",
    "Système d'avis et commentaires modérés",
    "PWA pour une expérience mobile native",
    "Design responsive et moderne",
  ],
  github: "https://github.com/0xbwill/atypik-house",
  demo: null,
  image: "/projects/atypikhouse.png",
  gallery: [],
  teamSize: 4,
  duration: "6 mois",
};
