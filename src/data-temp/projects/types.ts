export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
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
}
