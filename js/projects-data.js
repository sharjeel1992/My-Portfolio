window.PROJECTS = [
  {
    title: "Nonprofit CRM",
    subtitle: "Full-Stack",
    oneLiner: "Donor & operations CRM built end-to-end to support contacts, donations, events, and reporting.",
    highlights: [
      "Normalized schema + exports for contacts, donations, and events.",
      "CRUD workflows with validation and error handling.",
      "CSV import/export utilities for ops teams.",
      "Quality via Docker + CI + tests."
    ],
    tags: ["Full-Stack", "Data Modeling", "Reliability", "Node.js", "React"],
    media: {
      type: "image",
      src: "../resources/crm_dashboard_names_blurred.png",
      alt: "Nonprofit CRM dashboard"
    }
  },
  {
    title: "SSSS-Library",
    subtitle: "C++ Library Management System",
    oneLiner: "Modular C++ system modeling clients, media, and transactions with custom data structures.",
    highlights: [
      "Custom BST + hash table (no STL) for core collections.",
      "Deep copy/destructors; Valgrind verified 0 leaks."
    ],
    tags: ["C++", "OOP/OOD", "BST/Hashing"],
    media: {
      type: "label",
      label: "C++",
      subLabel: "Library System",
      accent: "#f59e0b",
      accent2: "#f97316"
    }
  },
  {
    title: "Flight-Delay-ML",
    subtitle: "Prediction Pipeline",
    oneLiner: "End-to-end ML pipeline on ~900K records with model comparison + evaluation.",
    highlights: [
      "Compared LR/RF/GB via cross-validation.",
      "Documented metrics + interpretability."
    ],
    tags: ["Python", "scikit-learn", "ROC-AUC / PR-AUC"],
    media: {
      type: "label",
      label: "ML",
      subLabel: "Prediction",
      accent: "#22d3ee",
      accent2: "#3b82f6"
    }
  },
  {
    title: "Movie Web App",
    subtitle: "Full-Stack CRUD App",
    oneLiner: "Flask + SQL app to manage movies with validation, error handling, and interactive UI.",
    highlights: [
      "REST-style routes + SQL queries.",
      "Dynamic browsing/search/filtering UI."
    ],
    tags: ["Flask", "SQL", "Python","CSS","JS","HTML"],
    media: {
      type: "label",
      label: "Flask",
      subLabel: "CRUD",
      accent: "#10b981",
      accent2: "#14b8a6"
    }
  }
];
