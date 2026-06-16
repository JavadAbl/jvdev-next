export const navItems = [
  { href: "#home", label: "Home", icon: "fa-home" },
  { href: "#about", label: "About", icon: "fa-user" },
  { href: "#resume", label: "Resume", icon: "fa-briefcase" },
  { href: "#skills", label: "Skills", icon: "fa-code" },
  { href: "#portfolio", label: "Portfolio", icon: "fa-layer-group" },
  { href: "#contact", label: "Contact", icon: "fa-envelope" },
];

export const socialLinks = [
  { href: "https://github.com/JavadAbl", icon: "fa-github", label: "GitHub" },
  /*   { href: "#", icon: "fa-linkedin", label: "LinkedIn" },
  { href: "#", icon: "fa-twitter", label: "Twitter" },
  { href: "#", icon: "fa-instagram", label: "Instagram" }, */
];

export const coreSkills = [
  {
    name: "Node.js",
    description: "An async JavaScript runtime",
    color: "#339933",
  },
  {
    name: "Nest.js",
    description: "Progressive Node.js framework",
    color: "#ff4d4d",
  },
  {
    name: "React.js",
    description: "Library for building UIs",
    color: "#61dafb",
  },
  {
    name: "Next.js",
    description: "React framework for ssr",
    color: "#ffffff",
  },
  {
    name: "SQL",
    description: "Relational database querying",
    color: "#6ca6ea",
  },
  {
    name: "HTML5 & CSS3",
    description: "Core web markup and styling",
    color: "#f16529",
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript",
    color: "#3178c6",
  },
  {
    name: "ASP .Net Core",
    description: "Cross-platform enterprise framework",
    color: "#8e7cea",
  },
  {
    name: "RabbitMQ",
    description: "Message broker for async tasks",
    color: "#ff6600",
  },
  {
    name: "Redis",
    description: "In-memory data structure store",
    color: "#ff4438",
  },
  {
    name: "Docker",
    description: "Containerization platform",
    color: "#2496ed",
  },
  { name: "Git", description: "Distributed version control", color: "#f05032" },
];

export const subSkills = [
  {
    name: "Express.js",
    icon: "fa-node-js",
    iconType: "fab" as const,
    tags: ["Battle Tested", "Middlewares"],
    colorClass: "express",
    glowColor: "#33ff33",
    textColor: "#00ff00",
  },
  {
    name: "Fastify.js",
    icon: "fa-bolt",
    iconType: "fas" as const,
    tags: ["Performance", "Low Overhead"],
    colorClass: "fastify",
    glowColor: "#ffff33",
    textColor: "#ffff00",
  },
  {
    name: "Tailwind",
    icon: "fa-wind",
    iconType: "fas" as const,
    tags: ["CSS Framework", "Utility-first"],
    colorClass: "tailwind",
    glowColor: "#00ffff",
    textColor: "#00f7ff",
  },
  {
    name: "Redux Toolkit",
    icon: "fa-code-branch",
    iconType: "fas" as const,
    tags: ["State Management", "Industry Standard"],
    colorClass: "redux",
    glowColor: "#bf57ff",
    textColor: "#9d00ff",
  },

  {
    name: "Prisma",
    icon: "fa-shapes",
    iconType: "fas" as const,
    tags: ["Type-safe ORM", "Schema-first"],
    colorClass: "prisma",
    glowColor: "#7928ca",
    textColor: "#afb5c0",
  },
  {
    name: "TypeORM",
    icon: "fa-database",
    iconType: "fas" as const,
    tags: ["Active Record", "Data Mapper"],
    colorClass: "typeorm",
    glowColor: "#ff6666",
    textColor: "#ff3333",
  },
  {
    name: "EF Core",
    icon: "fa-microsoft",
    iconType: "fab" as const,
    tags: [".NET ORM", "LINQ Support"],
    colorClass: "efcore",
    glowColor: "#8a5cfb",
    textColor: "#512bd4",
  },
  {
    name: "React Query",
    icon: "fa-sync-alt",
    iconType: "fas" as const,
    tags: ["Server State", "Caching"],
    colorClass: "react-query",
    glowColor: "#ff66a1",
    textColor: "#ff4081",
  },
  {
    name: "Bootstrap",
    icon: "fa-bootstrap",
    iconType: "fab" as const,
    tags: ["Responsive Design", "Component Library"],
    colorClass: "bootstrap",
    glowColor: "#9c75d6",
    textColor: "#563d7c",
  },
];

export const experience = [
  {
    date: "2023 - 2026",
    company: "Ugym Co.",
    role: "Fullstack JS Developer",
    details: [
      "Development and maintenance of client side of gym management system",
      "Development of a microservice with Nestjs for gym management system",
      "Development of an event-oriented service with Nodejs to transfer gym software data events to financial and CRM systems",
      "Development of an UDP service with Nodejs to interact with gym lockers control boards",
      "Full stack development of personnel pay slip viewing system with Nestjs and React",
      "Development of organizational forms with React and process-maker",
      "Development of contractor management app with React native",
      "Development of PWA app with React in a project called Indra, along with backend considerations and work on the KeyClock authentication system in a dedicated development team and workflow",
    ],
  },
  {
    date: "2019 - 2021",
    company: "Internship and Freelancing",
    role: "Freelancing",
    details: [
      "Studying, learning, and doing small xamarin and react projects.",
    ],
  },
];

export const education = [
  {
    date: "2017 - 2019",
    degree: "MSc in Software Engineering",
  },
  {
    date: "2012 - 2016",
    degree: "BSc in Software Engineering",
  },
];

export const portfolioProjects = [
  {
    title: "Online Car Repair Application",
    description:
      "Full-stack platform for providing online automobile repair and maintenance services.",
    tags: ["Microservice", "Node.js", "Nest.js", "RabbitMQ", "Redis"],
    github: "https://github.com/JavadAbl/node-online-car-repair",
  },
  {
    title: "Admin Dashboard",
    description: "A comprehensive admin panel for a sales system.",
    tags: ["React", "Tailwind", "Daisyui", "ReactQuery", "Redux Toolkit"],
    github: "https://github.com/JavadAbl/node-online-car-repair",
    deploy: "https://jvdev.ir/admin-dashboard",
  },
  {
    title: "Office Automation",
    description: "An office automation app with nest.js",
    tags: ["Nest.js", "Typeorm"],
    github: "https://github.com/JavadAbl/nest-office-automation",
  },
  {
    title: "Node Clean Architecture",
    description:
      "Designing and implementing asp .net core style of clean architecture with express.js.",
    tags: ["Express.js"],
    github: "https://github.com/JavadAbl/node-clean-architecture",
  },
  {
    title: "ASP .Net Core GraphQL API",
    description: "implementing an asp .net core graphql web api with ef core.",
    tags: ["ASP .Net Core", "Entity Framework"],
    github: "https://github.com/JavadAbl/dotnet-graphql-sales",
  },
];

export const contactInfo = [
  {
    icon: "fa-map-marker-alt",
    label: "Location",
    value: "Tehran - Iran",
  },
  {
    icon: "fa-envelope",
    label: "Email",
    value: "work.javadabl@gmail.com",
  },
  {
    icon: "fa-phone",
    label: "Phone",
    value: "+98 9128394413",
  },
];
