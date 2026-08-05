export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  context?: string;
  problem?: string;
  solution?: string;
  result?: string;
  type: "school" | "personal" | "professional";
  tags: string[];
  learned: string[];
  features: string[];
  github: string;
  demo: string | null;
  image: string | null;
  gallery: string[];
  teamSize?: number;
  duration?: string;
  logo?: string;
  status?: string;
  imagePosition?: "cover" | "contain" | "top" | "bottom";
  galleryLabels?: string[];
  siteLinks?: string[];
}
