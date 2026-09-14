import type { Project } from "./types";

export const mangaShelf: Project = {
  id: "manga-shelf",
  title: "MangaShelf",
  description:
    "Application web de gestion de collection de mangas, inspirée de Mangacollec. Projet personnel développé avec Laravel 13, Vue 3 et Inertia.js pour approfondir cette stack tout en répondant à un besoin personnel.",
  fullDescription: `MangaShelf est une application web personnelle de gestion de collection de mangas, inspirée de Mangacollec.

L'objectif est double : continuer à progresser sur Laravel et sa stack moderne tout en créant un outil que j'utilise au quotidien pour gérer ma propre collection. L'application permet de cataloguer ses mangas, suivre les tomes possédés et manquants, et organiser sa bibliothèque.

Le projet s'appuie sur une stack complète et moderne : Laravel 13 avec Inertia.js v3 côté serveur, Vue 3 avec TypeScript côté client, Tailwind CSS v4 pour le styling, et Vite 8 pour le bundling. L'authentification est gérée via Laravel Fortify avec support des Passkeys.

La qualité de code est assurée par Pest pour les tests, Pint pour le code style PHP, et Larastan pour l'analyse statique.

⚠️ Ce projet est actuellement en cours de développement.`,
  context: "Projet personnel né d'un besoin concret de suivi de collection et d'une volonté de progresser sur la stack Laravel + Vue + Inertia.",
  problem: "Centraliser et organiser efficacement sa collection de mangas avec un outil moderne et personnalisé.",
  solution: "Application Laravel 13 avec Vue 3 via Inertia.js, TypeScript, Tailwind CSS v4 et authentification sécurisée via Passkeys.",
  result: "Montée en compétences sur l'écosystème Laravel moderne et création d'un outil utilisé au quotidien.",
  type: "personal",
  tags: ["Laravel", "Vue.js", "Inertia.js", "TypeScript", "Tailwind CSS", "PHP", "MySQL"],
  learned: [
    "Architecture Laravel 13 avancée",
    "Intégration Vue 3 avec Inertia.js v3",
    "TypeScript avec Vue et Inertia",
    "Authentification Passkeys",
    "Tests avec Pest & analyse statique Larastan",
  ],
  features: [
    "Catalogue de mangas avec suivi des tomes",
    "Gestion des tomes possédés et manquants",
    "Organisation de la collection par séries",
    "Authentification sécurisée avec Passkeys",
    "Interface moderne et responsive",
  ],
  github: "https://github.com/NicoVnd/MangaShelf",
  demo: null,
  image: null,
  gallery: [],
  status: "En cours de développement",
};

