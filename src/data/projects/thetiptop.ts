import type { Project } from "./types";

export const thetiptop: Project = {
  id: "thetiptop",
  title: "Thé Tip Top",
  description:
    "Plateforme de jeu concours dédiée à l'univers du thé. Projet de fin d'études Master 2, réalisé en équipe de 4 sur 7 mois avec une architecture DevOps complète.",
  fullDescription: `Thé Tip Top est une application web de jeu concours autour du thé, développée dans le cadre de notre Master 2.

Ce projet ambitieux s'est étalé sur 7 mois avec une équipe de 4 développeurs. L'objectif était de concevoir une application robuste et industrialisée, mettant en œuvre les meilleures pratiques DevOps.

L'architecture intègre un workflow CI/CD complet avec Docker, Jenkins et plusieurs environnements (développement, pré-production, production). La gestion de projet s'appuyait sur Jira, Figma pour les maquettes, et Filament pour l'administration.

Les utilisateurs peuvent participer en saisissant des codes tickets pour remporter des lots (thés, infuseurs, coffrets). Le système gère plusieurs rôles : utilisateurs standards, employés boutique pour valider les gains, et administrateurs avec accès complet au panel Filament.

Fonctionnalités clés : inscription OAuth (Google, Facebook), statistiques utilisateur, tirage au sort final avec log cryptographique sécurisé, et gestion complète des lots et stocks.`,
  context: "Projet de fin d'études en Master 2 (7 mois) réalisé en équipe de 4 développeurs pour la marque fictive de thé haut de gamme Thé Tip Top.",
  problem: "Concevoir une application de jeu concours haute disponibilité, capable d'absorber de gros volumes de tickets tout en garantissant l'infalsifiabilité des tirages au sort et une administration fluide.",
  solution: "Développement d'une plateforme Fullstack Laravel 12 / Livewire 3 avec panel Filament, conteneurisée sous Docker et intégrée dans un pipeline CI/CD automatisé via Jenkins.",
  result: "Une plateforme DevOps complète industrialisée, multi-rôles, sécurisée avec traçabilité cryptographique du tirage au sort et 100% opérationnelle.",
  type: "school",
  tags: [
    "Laravel 12",
    "Livewire",
    "Filament 3",
    "Tailwind CSS",
    "Docker",
    "Jenkins",
    "MariaDB",
  ],
  learned: [
    "Travail en équipe (4 personnes)",
    "Architecture DevOps (CI/CD)",
    "Docker & Docker Compose",
    "Jenkins pipelines",
    "Gestion multi-environnements",
    "Administration avec Filament",
    "OAuth (Google, Facebook)",
    "Gestion de rôles et permissions (Spatie)",
  ],
  features: [
    "Inscription et connexion via email ou OAuth (Google, Facebook)",
    "Système de tickets avec codes uniques pour gagner des lots",
    "Tirage au sort final du gros lot (360 €)",
    "Panel d'administration Filament complet",
    "Gestion des rôles : Utilisateur, Employé, Administrateur",
    "Validation des gains en boutique par les employés",
    "Système de badges, niveaux et statistiques utilisateur",
    "Mode clair / sombre personnalisable",
    "Newsletter intégrée",
    "Log JSON cryptographique sécurisé pour le tirage",
    "Génération massive de codes via commande Artisan",
    "SEO optimisé et sitemap automatique",
  ],
  github: "https://github.com/NicoVnd/thetiptop",
  demo: null,
  image: "/projects/thetiptop-couverture.png",
  gallery: [],
  teamSize: 4,
  duration: "7 mois",
  logo: "/projects/logo-thetiptop.png",
};
