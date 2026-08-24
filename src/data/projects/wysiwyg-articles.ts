import type { Project } from "./types";

export const wysiwygArticles: Project = {
  id: "wysiwyg-articles",
  title: "Plateforme de Rédaction d'Articles",
  description:
    "Application web de rédaction d'articles avec éditeur WYSIWYG interactif et variables dynamiques personnalisées (Laravel & Vue.js).",
  fullDescription: `Plateforme de rédaction d'articles développée en projet personnel pour explorer l'intégration avancée d'éditeurs riches avec Laravel et Vue.js.

L'application permet aux rédacteurs de créer et modifier des articles via un éditeur WYSIWYG complet (Quill.js). Une fonctionnalité originale permet d'insérer des variables dynamiques comme {{nom_utilisateur}} ou {{date_lecture}}, qui sont automatiquement remplacées lors de la lecture par les informations du lecteur.

Le système gère deux rôles distincts : les rédacteurs qui peuvent créer et modifier des articles, et les utilisateurs classiques en lecture seule.

L'interface propose une page d'accueil listant tous les articles, une page de lecture avec remplacement automatique des variables, et un éditeur complet pour la rédaction.`,
  context: "Projet personnel d'exploration technique Fullstack combinant Laravel et Vue 3 avec intégration d'éditeur riche.",
  problem: "Offrir un éditeur riche WYSIWYG capable de traiter en temps réel l'injection et le rendu de variables dynamiques contextuelles.",
  solution: "Développement d'une SPA Vue 3 couplée à une API REST Laravel, intégrant Quill.js et un parser custom de balises dynamiques.",
  result: "Application fonctionnelle et modulable offrant une expérience de rédaction fluide et une personnalisation du contenu en temps réel.",
  type: "personal",
  tags: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL", "Quill.js"],
  learned: [
    "Intégration Laravel + Vue.js",
    "Éditeur WYSIWYG avec Quill.js",
    "Gestion de variables dynamiques",
    "Système de rôles (rédacteur/lecteur)",
  ],
  features: [
    "Éditeur WYSIWYG complet (gras, italique, souligné, liens)",
    "Variables dynamiques {{nom_utilisateur}} et {{date_lecture}}",
    "Remplacement automatique des variables à la lecture",
    "Gestion des rôles : rédacteurs et lecteurs",
    "Liste des articles avec design moderne",
    "Page de lecture avec contenu personnalisé",
  ],
  github: "https://github.com/NicoVnd/laravel-vue-app",
  demo: null,
  image: null,
  gallery: [],
  duration: "1 semaine",
};
