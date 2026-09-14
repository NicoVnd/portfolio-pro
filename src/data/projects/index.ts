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

// Import type for array typing
import type { Project } from "./types";

// Export combined array - ordered by importance (most important first)
export const PROJECTS: Project[] = [
  shake, // CDD Agence SHAKE (Dernière expérience pro avec 5 sites réels)
  thetiptop, // Master 2 (Projet de fin d'études complet, 7 mois, DevOps)
  atypikhouse, // Master 1 (Projet complet 6 mois)
  andersontech, // Pro - Alternance Développeur Web & SEO
  commeUnGrand, // Pro - Alternance Agence Web
  pokebio, // École - Projet pluridisciplinaire
  wysiwygArticles, // Projet personnel Laravel + Vue
  mangaShelf, // Projet personnel - Collection de mangas
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
};
