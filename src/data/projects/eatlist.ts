import type { Project } from "./types";

export const eatList: Project = {
  id: "eatlist",
  title: "EatList",
  description:
    "PWA collaborative de gestion du foyer : courses en temps réel, menus de la semaine, recettes partagées et suivi du budget. Développée avec Next.js, TypeScript et Supabase.",
  fullDescription: `EatList est une application web et mobile (PWA), pensée en priorité pour iOS, qui centralise l'organisation des courses, des repas et des dépenses d'un foyer.

Les membres partagent une liste de courses synchronisée en temps réel grâce à Supabase Realtime. Ils peuvent organiser les repas du midi et du soir pour chaque jour de la semaine, conserver leurs idées et utiliser une roulette pour choisir un repas au hasard.

Un carnet de recettes partagé rassemble les ingrédients, les étapes, les portions et les temps de préparation et de cuisson. Les recettes peuvent être directement ajoutées au planning hebdomadaire.

Le suivi du budget permet de saisir les dépenses, de visualiser la participation de chaque membre et de consulter un bilan annuel avec graphique mensuel et statistiques par enseigne.

L'application repose sur Next.js 16, TypeScript, Tailwind CSS v4 et Supabase pour l'authentification, la base PostgreSQL et la synchronisation. Les règles Row Level Security limitent l'accès aux données aux membres du foyer.`,
  context:
    "Projet personnel d'application collaborative pour simplifier l'organisation quotidienne du foyer, avec une interface pensée pour les usages mobiles et iOS.",
  problem:
    "Rassembler les courses, les idées de repas, les recettes et les dépenses dans un outil partagé entre les membres du foyer.",
  solution:
    "Une PWA Next.js connectée à Supabase, avec synchronisation en temps réel et accès aux données contrôlé par des règles PostgreSQL RLS.",
  result:
    "Un outil réunissant liste de courses collaborative, planning hebdomadaire, carnet de recettes et suivi des dépenses mensuelles et annuelles.",
  type: "personal",
  tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL", "PWA"],
  learned: [
    "Développement d'une PWA avec Next.js App Router",
    "Synchronisation collaborative avec Supabase Realtime",
    "Authentification et gestion des accès avec Supabase et PostgreSQL RLS",
    "Conception d'une interface mobile inspirée d'iOS",
    "Visualisation des dépenses et statistiques annuelles",
  ],
  features: [
    "Liste de courses collaborative en temps réel avec suggestions et quantités",
    "Planning des repas du midi et du soir sur la semaine",
    "Boîte à idées et roulette de sélection des repas",
    "Carnet de recettes partagé avec planification en un clic",
    "Suivi du budget, répartition des dépenses et bilan annuel",
    "Création et adhésion à un foyer par code d'invitation",
    "Accès aux données du foyer contrôlé par PostgreSQL RLS",
  ],
  github: "https://github.com/NicoVnd/EatList",
  demo: null,
  image: null,
  logo: "/projects/logo-eatlist.png",
  showLogoInModal: false,
  gallery: [],
};
