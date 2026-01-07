import type { Project } from "./types";

export const pokebio: Project = {
  id: "pokebio",
  title: "Pokebio",
  description:
    "Site web pour une dark kitchen spécialisée dans les poke bowls bio. Projet d'école pluridisciplinaire réalisé en équipe de 6 (graphistes, marketing, dev) en 5 jours.",
  fullDescription: `Pokebio est un projet d'école pluridisciplinaire réunissant des étudiants de différentes filières : graphistes, marketing et développeurs.

En équipe de 6 personnes, nous avons créé en seulement 5 jours le site web d'une dark kitchen spécialisée dans les poke bowls bio et healthy. 

En tant que développeur (nous étions 2), j'ai travaillé sur l'intégration du site sous WordPress avec ACF (Advanced Custom Fields) pour permettre une gestion de contenu flexible et intuitive pour le client.`,
  type: "school",
  tags: ["WordPress", "ACF", "PHP", "JavaScript", "SCSS", "WooCommerce"],
  learned: [
    "Travail pluridisciplinaire (graphistes, marketing, dev)",
    "WordPress avec ACF",
    "Gestion de projet en temps limité",
    "Intégration rapide",
    "Communication inter-équipes",
  ],
  features: [
    "Site vitrine responsive",
    "Menu des poke bowls personnalisables",
    "Système de commande",
    "Gestion de contenu via ACF",
    "Design moderne et appétissant",
  ],
  github: "https://github.com/gaetanker66/poke-bio",
  demo: null,
  image: null,
  gallery: [],
  teamSize: 6,
  duration: "5 jours",
  logo: "/projects/logo-pokebio.png",
};
