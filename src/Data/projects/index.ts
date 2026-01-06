// Re-export type from types.ts
export type { Project } from "./types";

// Import all projects
import { atypikhouse } from "./atypikhouse";
import { pokebio } from "./pokebio";
import { commeUnGrand } from "./comme-un-grand";
import { andersontech } from "./andersontech";

// Import type for array typing
import type { Project } from "./types";

// Export combined array - add new projects here
export const PROJECTS: Project[] = [
  atypikhouse,
  pokebio,
  commeUnGrand,
  andersontech,
];

// Re-export individual projects for direct imports if needed
export { atypikhouse, pokebio, commeUnGrand, andersontech };
