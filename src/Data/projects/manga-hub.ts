import type { Project } from "./types";

export const mangaHub: Project = {
  id: "manga-hub",
  title: "Manga Hub",
  description:
    "Plateforme de suivi d'animés permettant de gérer sa liste personnelle, noter et laisser des avis. Projet personnel en cours pour apprendre Symfony.",
  fullDescription: `Manga Hub est un projet personnel développé pour découvrir et apprendre le framework Symfony.

L'objectif est de créer une plateforme complète de suivi d'animés, similaire à MyAnimeList ou AniList. Les utilisateurs peuvent marquer des animés selon leur statut (à voir, en cours, terminé, abandonné), créer des listes personnalisées et mettre en favoris leurs séries préférées.

Le système permet également de laisser des avis et des notes sur chaque animé, offrant ainsi une dimension communautaire à la plateforme.

⚠️ Ce projet est actuellement en cours de développement.`,
  type: "personal",
  tags: ["Symfony", "PHP", "Twig", "JavaScript", "MySQL"],
  learned: [
    "Framework Symfony",
    "Architecture MVC avec PHP",
    "Templating Twig",
    "Gestion d'entités et relations",
    "Authentification utilisateur",
  ],
  features: [
    "Gestion de statut des animés (à voir, en cours, vu, abandonné)",
    "Système de notes et d'avis",
    "Création de listes personnalisées",
    "Favoris utilisateur",
    "Profil utilisateur",
  ],
  github: "https://github.com/NicoVnd/manga-hub",
  demo: null,
  image: null,
  gallery: [],
  status: "En cours de développement",
};
