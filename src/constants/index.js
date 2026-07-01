import { agoragom, gendarmerie, meta, shopify, starbucks, tesla } from "../assets/images";
import {
  archlinux,
  angular,
  bash,
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  java,
  javascript,
  linkedin,
  message,
  mongodb,
  motion,
  mui,
  mysql,
  nextjs,
  nodejs,
  php,
  portfolio,
  postgresql,
  pricewise,
  python,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  squid,
  tailwindcss,
  threejs,
  threads,
  typescript,
  windows11,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: mysql,
    name: "MYSQL",
    type: "Database",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: bash,
    name: "Bash",
    type: "Automation",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: windows11,
    name: "Windows 11",
    type: "Operating System",
  },
  {
    imageUrl: archlinux,
    name: "Arch Linux",
    type: "Operating System",
  },
];

export const experiences = [
  {
    title: "PHP/Js Developer",
    company_name: "Gendarmerie (Montpellier)",
    icon: gendarmerie,
    iconBg: "#bfccf5",
    date: "October 2024 - December 2024",
    points: [
      "Creating a time tracking manager.",
      "Creation of a reporting system.",
      "Optimization of a site.",
      "Creating a Text Chat.",
    ],
  },
  {
    title: "Next.js Developper",
    company_name: "Agoragom (Montpellier)",
    icon: agoragom,
    iconBg: "#EF5F22",
    date: "December 2025 - Mars 2026",
    points: [
      "Restarting the CRM project from scratch",
      "Creating project specifications",
      "Redesigning Figma mockups",
      "Start of the development phase (authentication + admin section)",
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  }
];

export const projects = [
  // {
  //   iconUrl: portfolio,
  //   theme: 'btn-back-black',
  //   name: 'First Portfolio',
  //   description: 'Developed my first HTML/CSS/JS porfolio',
  //   link: 'https://github.com/D4dis/portfolio',
  // },
  // {
  //   iconUrl: ak47white,
  //   theme: 'btn-back-black',
  //   name: 'Better CS2 Inventory | Tracker (in progress)',
  //   description: 'Developed a React.js/Tailwind web app to track CS2 inventory',
  //   link: 'https://github.com/D4dis/portfolio',
  // },
  {
    iconUrl: squid,
    theme: 'btn-back-green',
    name: 'SplatMapRotation',
    description: 'Developed a Discord bot in JavaScript for Splatoon 1 map rotations',
    link: 'https://github.com/D4dis/splatoon-bot',
  },
  {
    iconUrl: message,
    theme: 'btn-back-black',
    name: 'TameTheFox (anonyme chat)',
    description: 'Developed a Angular chat app in group for a school project',
    link: 'https://github.com/D4dis/tamethefox',
  },
];