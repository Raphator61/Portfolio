export type ProjectCategory = "Perso" | "École" | "Entreprise";
export type ProjectIcon = "server" | "shield" | "network" | "camera" | "code" | "database";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  period: string;
  icon: ProjectIcon;
  summary: string;
  context: string;
  objectives: string[];
  details: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "homelab",
    title: "Labo domestique de virtualisation",
    category: "Perso",
    period: "2024 — en cours",
    icon: "server",
    summary: "Serveur personnel hébergeant plusieurs services isolés en conteneurs.",
    context:
      "Envie de pratiquer l'administration système et la virtualisation en dehors du cadre scolaire, sur du matériel réel plutôt qu'en TP.",
    objectives: [
      "Monter en compétences sur Proxmox et l'isolation par conteneurs LXC/Docker",
      "Héberger des services personnels (partage de fichiers, supervision)",
      "Sécuriser les accès distants via VPN et reverse proxy",
    ],
    details:
      "Un mini-serveur fait tourner Proxmox comme hyperviseur, avec plusieurs conteneurs LXC et services Docker séparés par usage (partage de fichiers, monitoring, outils de développement). L'accès distant passe par un VPN, et un reverse proxy gère les certificats et les sous-domaines internes. Ce projet tourne en continu et évolue au fil de mes découvertes.",
    stack: ["Proxmox", "Docker", "LXC", "Linux", "Nginx"],
  },
  {
    id: "active-directory",
    title: "Infrastructure Active Directory sécurisée",
    category: "École",
    period: "2025 — BTS CIEL",
    icon: "database",
    summary: "Déploiement d'un domaine Windows Server avec gestion fine des droits.",
    context:
      "Projet réalisé en BTS CIEL pour simuler l'infrastructure d'un parc d'entreprise, du serveur à la stratégie de groupe.",
    objectives: [
      "Déployer un contrôleur de domaine Active Directory",
      "Structurer les unités d'organisation et les droits utilisateurs",
      "Durcir la sécurité via des stratégies de groupe (GPO)",
    ],
    details:
      "Mise en place d'un domaine Windows Server complet : arborescence d'unités d'organisation par service, comptes et groupes utilisateurs, partages réseau avec droits NTFS, et stratégies de groupe pour restreindre les usages à risque (exécution de scripts, ports USB, mots de passe). Le DNS et le DHCP internes sont également configurés sur le contrôleur de domaine.",
    stack: ["Windows Server", "Active Directory", "GPO", "DNS", "DHCP"],
  },
  {
    id: "pentest-lab",
    title: "Maquette réseau et tests d'intrusion",
    category: "École",
    period: "2025 — BTS CIEL",
    icon: "shield",
    summary: "Segmentation réseau et simulation d'attaques sur une infrastructure de test.",
    context:
      "Module de cybersécurité du BTS CIEL : comprendre les vecteurs d'attaque courants pour mieux savoir s'en protéger.",
    objectives: [
      "Segmenter une maquette réseau en VLAN",
      "Réaliser des tests d'intrusion contrôlés",
      "Mettre en place des contre-mesures (pare-feu, filtrage)",
    ],
    details:
      "Sur une maquette isolée, j'ai segmenté le réseau en VLAN par usage (postes, serveurs, invités), configuré un pare-feu pfSense pour filtrer les flux entre segments, puis mené des tests d'intrusion depuis un terminal Kali Linux WSL (scan de ports, tentatives d'accès non autorisé) pour vérifier l'efficacité des règles mises en place et ajuster la configuration.",
    stack: ["pfSense", "VLAN", "Wireshark", "Kali Linux"],
  },
  {
    id: "video-surveillance",
    title: "Déploiement vidéosurveillance & contrôle d'accès",
    category: "Entreprise",
    period: "2024 — Bouygues Énergies et Services",
    icon: "camera",
    summary: "Installation d'un système NVR et formation des utilisateurs sur site client.",
    context:
      "Mission réalisée en apprentissage chez Bouygues Énergies et Services, pour un client ayant besoin de sécuriser ses locaux.",
    objectives: [
      "Installer et configurer un enregistreur NVR et les caméras associées",
      "Intégrer les équipements au réseau existant",
      "Former les utilisateurs finaux à l'usage de la solution",
    ],
    details:
      "Installation physique des caméras et de l'enregistreur NVR, configuration réseau (adressage IP, accès distant sécurisé), réglage des zones de détection, puis formation du personnel client à la consultation des enregistrements et à la gestion des alertes au quotidien.",
    stack: ["NVR", "Réseau IP", "Câblage", "Support utilisateur"],
  },
  {
    id: "backup-script",
    title: "Automatisation de sauvegardes",
    category: "Perso",
    period: "2024",
    icon: "code",
    summary: "Script Python/Bash pour sauvegarder et faire tourner les archives automatiquement.",
    context:
      "Besoin personnel de fiabiliser mes sauvegardes sans avoir à y penser manuellement, avec des alertes en cas d'échec.",
    objectives: [
      "Automatiser la sauvegarde de dossiers vers un NAS",
      "Mettre en place une rotation des archives (quotidienne, hebdomadaire)",
      "Recevoir une notification en cas d'échec de la tâche",
    ],
    details:
      "Un script Python orchestré par une tâche cron gère la copie incrémentale des dossiers importants vers un NAS, applique une politique de rotation pour limiter l'espace utilisé, compresse les archives anciennes, et envoie un email d'alerte via SMTP si une étape échoue.",
    stack: ["Python", "Bash", "NAS", "SMTP"],
  },
  {
    id: "gestion-web",
    title: "Application web de gestion",
    category: "École",
    period: "2024 — 2025",
    icon: "code",
    summary: "Application de gestion de réservations développée en HTML/PHP/SQL.",
    context:
      "Projet de développement en groupe, réalisé dans le cadre scolaire pour appliquer les bases de la programmation web.",
    objectives: [
      "Concevoir une base de données relationnelle pour les réservations",
      "Développer une interface web simple et fonctionnelle",
      "Gérer l'authentification et les droits par type d'utilisateur",
    ],
    details:
      "Développement d'une application web permettant de créer, consulter et annuler des réservations, avec une base de données MySQL normalisée et un back-end PHP gérant la logique métier. L'interface, en HTML/CSS, distingue les vues selon le rôle de l'utilisateur connecté.",
    stack: ["HTML", "CSS", "PHP", "SQL"],
  },
  {
    id: "cpp-game",
    title: "Mini-jeu console en Java",
    category: "Perso",
    period: "2025",
    icon: "code",
    summary: "Petit jeu en ligne de commande pour s'entraîner à la programmation orientée objet.",
    context:
      "Projet personnel pour consolider mes bases en Java et en programmation orientée objet en dehors des cours.",
    objectives: [
      "Manipuler les classes, l'héritage et les pointeurs en Java",
      "Structurer un projet de A à Z, de la conception au jeu final",
    ],
    details:
      "Un jeu d'aventure textuel jouable en ligne de commande, avec un système de personnages et d'objets modélisé en classes Java et une boucle de jeu gérant les combats et les choix du joueur. L'objectif était surtout la pratique du langage plutôt que la complexité du jeu.",
    stack: ["Java", "POO"],
  },
  {
    id: "reseau-wifi",
    title: "Refonte du réseau Wi-Fi d'un site client",
    category: "Entreprise",
    period: "2025 — Bouygues Énergies et Services",
    icon: "network",
    summary: "Étude et redéploiement de la couverture Wi-Fi d'un bâtiment professionnel.",
    context:
      "Un client se plaignait de zones blanches et de coupures fréquentes sur son réseau Wi-Fi existant.",
    objectives: [
      "Auditer la couverture et les interférences existantes",
      "Repositionner et reconfigurer les bornes d'accès",
      "Sécuriser l'accès invité, séparé du réseau interne",
    ],
    details:
      "Après un audit de la couverture Wi-Fi existante (relevé de puissance, canaux utilisés, interférences), j'ai proposé un nouveau plan de positionnement des bornes, reconfiguré les SSID avec séparation entre réseau interne et réseau invité, et vérifié la couverture finale sur l'ensemble des locaux.",
    stack: ["Wi-Fi", "Réseau", "Sécurisation", "Diagnostic"],
  },
];
