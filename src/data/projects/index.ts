// Re-export type from types.ts
export type { Project } from "./types";

// Import all projects
import { thetiptop } from "./thetiptop";
import { atypikhouse } from "./atypikhouse";
import { pokebio } from "./pokebio";
import { commeUnGrand } from "./comme-un-grand";
import { andersontech } from "./andersontech";
import { wysiwygArticles } from "./wysiwyg-articles";
import { mangaShelf } from "./mangashelf";
import { shake } from "./shake";
import { eatList } from "./eatlist";
import { basketMetrics } from "./basketmetrics";

// Import type for array typing
import type { Project } from "./types";

// Priorité : richesse technique, usages concrets et expérience professionnelle.
// Les filtres conservent cet ordre au sein de chaque catégorie.
export const PROJECTS: Project[] = [
  thetiptop, // Master 2 (Projet de fin d'études complet, 7 mois, DevOps)
  basketMetrics, // Symfony, métier, imports OCR et statistiques (en développement)
  shake, // Expérience en agence avec plusieurs sites clients publiés
  eatList, // Application collaborative complète, temps réel et PostgreSQL RLS
  atypikhouse, // Master 1 (Projet complet 6 mois)
  commeUnGrand, // Pro - Alternance Agence Web
  andersontech, // Pro - Alternance Développeur Web & SEO
  wysiwygArticles, // Projet personnel Laravel + Vue
  pokebio, // Projet scolaire court et pluridisciplinaire
  mangaShelf, // Projet en développement, finalisation prévue plus tard
];

// Re-export individual projects for direct imports if needed
export {
  thetiptop,
  atypikhouse,
  shake,
  pokebio,
  commeUnGrand,
  andersontech,
  wysiwygArticles,
  mangaShelf,
  eatList,
  basketMetrics,
};
