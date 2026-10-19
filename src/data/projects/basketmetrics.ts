import type { Project } from "./types";

export const basketMetrics: Project = {
  id: "basketmetrics",
  title: "BasketMetrics",
  description:
    "Application de suivi du basket amateur : import de feuilles de match FFBB avec OCR, statistiques par joueur et bilans de saison. Développée avec Symfony et pensée initialement pour le Basket Club Lezennois.",
  fullDescription: `BasketMetrics est une application web de suivi et d'analyse de matchs de basket amateur, pensée initialement pour le Basket Club Lezennois. Le projet est en cours de développement.

Chaque compte dispose de ses propres équipes et joueurs. Les matchs et statistiques peuvent être saisis manuellement ou importés depuis des archives ZIP e-Marque / FFBB. L'import utilise une extraction PDF et un OCR local, avec prévisualisation, correction des données et association des joueurs avant enregistrement.

L'application rassemble l'historique des matchs, les scores par période issus des imports et les documents sources. Les bilans de saison présentent les victoires, défaites, points marqués et encaissés, moyennes et classements internes. Les fiches joueurs permettent de consulter le temps de jeu, les statistiques et les graphiques d'évolution.

Des analyses de matchs, de joueurs et de saisons via Gemini sont disponibles à la demande et restent facultatives. Les statistiques absentes sont conservées comme inconnues plutôt que remplacées par zéro.

Le projet repose sur PHP, Symfony 7.4 et Doctrine, avec une interface Twig, Tailwind CSS, Symfony UX, Stimulus et Chart.js. Les tests PHPUnit couvrent notamment les calculs statistiques, l'authentification, l'isolation des comptes et les imports.`,
  context:
    "Projet personnel en cours de développement, pensé initialement pour les besoins du Basket Club Lezennois.",
  problem:
    "Exploiter les feuilles de match du basket amateur pour suivre les performances des équipes et des joueurs au fil des saisons, tout en limitant la saisie manuelle.",
  solution:
    "Une application Symfony avec import ZIP e-Marque / FFBB, extraction PDF et OCR local, validation des données et tableaux de bord statistiques.",
  result:
    "Une application en développement réunissant gestion des équipes, import de matchs, bilans de saison et suivi individuel des joueurs.",
  type: "personal",
  tags: ["Symfony", "PHP", "Doctrine", "Twig", "Tailwind CSS", "Chart.js", "OCR", "Gemini"],
  learned: [
    "Modélisation métier avec Symfony et Doctrine",
    "Extraction PDF et OCR local avec Tesseract.js",
    "Calculs statistiques et visualisation avec Chart.js",
    "Intégration facultative de l'API Gemini",
    "Tests unitaires et fonctionnels avec PHPUnit",
    "Authentification et isolation des données par compte",
  ],
  features: [
    "Gestion des équipes et joueurs propres à chaque compte",
    "Saisie manuelle des matchs et statistiques",
    "Import ZIP e-Marque / FFBB avec OCR, prévisualisation et correction",
    "Historique des matchs et consultation des documents sources",
    "Bilans de saison et classements internes",
    "Fiches joueurs avec temps de jeu et graphiques d'évolution",
    "Analyses Gemini facultatives à la demande",
  ],
  github: "https://github.com/NicoVnd/BasketMetrics",
  demo: null,
  image: null,
  gallery: [],
  status: "En cours de développement",
};
