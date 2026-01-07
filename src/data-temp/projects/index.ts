// Re-export type from types.ts
export type { Project } from "./types";

// Import all projects
import { thetiptop } from "./thetiptop";
import { atypikhouse } from "./atypikhouse";
import { pokebio } from "./pokebio";
import { commeUnGrand } from "./comme-un-grand";
import { andersontech } from "./andersontech";
import { wysiwygArticles } from "./wysiwyg-articles";
import { mangaHub } from "./manga-hub";

// Import type for array typing
import type { Project } from "./types";

// Export combined array - ordered by importance (most important first)
export const PROJECTS: Project[] = [
  thetiptop, // Master 2, 7 mois, DevOps complet
  atypikhouse, // Master 1, 6 mois, projet complet
  andersontech, // Pro - Alternance
  commeUnGrand, // Pro - Agence
  pokebio, // École - Projet pluridisciplinaire
  wysiwygArticles, // Test technique Laravel + Vue
  mangaHub, // Projet perso en cours
];

// Re-export individual projects for direct imports if needed
export {
  thetiptop,
  atypikhouse,
  pokebio,
  commeUnGrand,
  andersontech,
  wysiwygArticles,
  mangaHub,
};
