import type { Project } from "./types";

export const wysiwygArticles: Project = {
  id: "wysiwyg-articles",
  title: "Plateforme de Rédaction d'Articles",
  description:
    "Plateforme de rédaction d'articles avec éditeur WYSIWYG et variables dynamiques personnalisées. Réalisé dans le cadre d'un test technique.",
  fullDescription: `Plateforme de rédaction d'articles développée dans le cadre d'un test technique.

L'application permet aux rédacteurs de créer et modifier des articles via un éditeur WYSIWYG complet (Quill.js). Une fonctionnalité originale permet d'insérer des variables dynamiques comme {{nom_utilisateur}} ou {{date_lecture}}, qui sont automatiquement remplacées lors de la lecture par les informations du lecteur.

Le système gère deux rôles distincts : les rédacteurs qui peuvent créer et modifier des articles, et les utilisateurs classiques en lecture seule.

L'interface propose une page d'accueil listant tous les articles, une page de lecture avec remplacement automatique des variables, et un éditeur complet pour la rédaction.`,
  context: "Test technique professionnel (durée 1 semaine) pour valider des compétences Fullstack Laravel & Vue.js.",
  problem: "Offrir un éditeur riche WYSIWYG capable de traiter en temps réel l'injection de variables dynamiques contextuelles.",
  solution: "Développement d'un SPA Vue 3 couplée à une API Laravel, intégrant Quill.js et un parser custom de balises dynamiques.",
  result: "Test technique réussi avec les félicitations pour la qualité du code, de l'architecture et du respect du CDC.",
  type: "professional",
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
