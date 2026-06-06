export const about = {
  greetings: "Hello, I'm",
  full_name: "Alex Mwangi",
  brand: "Alex Mwangi",
  title: "Product-focused Full-Stack Engineer",
  intro_label: "Hi, I'm Alex",
  headline: "I build practical software for real world workflows.",
  hero_copy:
    "I'm a product-focused full-stack engineer based in Nairobi. I design and build web, backend, and mobile systems that solve everyday workflow problems, from transport and booking systems to document automation tools.",
  second_image_url: "/about_me/Emkay_non_bg.png",
  first_image_url: "/about_me/emkay_graduation.jpg",
  hero_showcase_image: "/about_me/nganya-transit-showcase-clean.png",
  resume: "/about_me/Alex_Mwangi_ Fullstack_developer.pdf",
  email: "mwangikariuki586@gmail.com",
  github: "https://github.com/MwangiKariuki586?tab=repositories",
  linkedin: "https://www.linkedin.com/in/alex-mwangi-47ab45229/",
  location: "Nairobi, Kenya",
  availability: "Open to full-stack roles, freelance projects, and collaborations.",
  years_of_experience: 3,
  course_studied: "BSciT",
  description:
    "I build practical systems across frontend, backend, APIs, databases, and product flows. My work focuses on turning messy real-world operations into clear, reliable digital experiences that teams and users can trust.",
};

export const navigation = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/work" },
  // { label: "About", href: "#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export const heroStats = [
  { value: "3+", label: "Years building" },
  { value: "Full-stack", label: "Web, APIs, data" },
  { value: "Nairobi", label: "Real workflow focus" },
];

export const heroConsole = {
  title: "Plan your build",
  helper: "Choose workflow, stack focus, and launch path.",
  primary: "Workflow systems",
  secondary: "Full-stack product",
  preferences: ["Practical", "Fast", "Scalable"],
  cta: "Find useful work",
};

export const frontendexperience = [
  { technology: "React", level_rank: 3 },
  { technology: "Next.js", level_rank: 2 },
  { technology: "Typescript", level_rank: 2 },
  { technology: "Javascript", level_rank: 2 },
  { technology: "Tailwind CSS", level_rank: 2 },
];

export const backendexperience = [
  { technology: "Node.js", level_rank: 2 },
  { technology: "Express.js", level_rank: 2 },
  { technology: "Django", level_rank: 2 },
  { technology: "Wordpress CMS", level_rank: 1 },
  { technology: "Python", level_rank: 2 },
];

export const databasesxperience = [
  { technology: "MongoDB", level_rank: 2 },
  { technology: "MySQL", level_rank: 2 },
  { technology: "PostgreSQL", level_rank: 2 },
];

export const skillGroups = [
  {
    title: "Frontend systems",
    description: "Responsive product interfaces with clear flows and reusable UI.",
    items: frontendexperience,
  },
  {
    title: "Backend platforms",
    description: "APIs, business logic, auth flows, integrations, and deployment.",
    items: backendexperience,
  },
  {
    title: "Data foundations",
    description: "Relational and document databases shaped around real workflows.",
    items: databasesxperience,
  },
];

export const projects = [
  {
    id: "nganya-transit",
    title: "Nganya Transit",
    project_name: "Nganya Transit",
    category: "Transport",
    type: "featured-build",
    featured: true,
    homepage: true,
    priority: 1,
    image: "/projects/nganya-featured-build.png",
    project_image: "/projects/nganya-featured-build.png",
    hero_showcase_image: "/about_me/nganya-transit-showcase-clean.png",
    featured_build_image: "/projects/nganya-featured-build.png",
    description:
      "Nganya Transit is a commuter-first transit platform that helps users find routes, track rides, and connect with operators across Nairobi.",
    highlights: [
      "Route planning and discovery",
      "Live ride tracking",
      "Operator and vehicle management",
      "Clean, minimal booking flow",
    ],
    tech: ["React", "Node.js", "Maps", "Realtime UX"],
    caseStudyUrl: "#work",
    liveDemoUrl: "https://matwana.vercel.app/",
    demo_link: "https://matwana.vercel.app/",
    githubUrl: "",
    github_link: "",
  },
  {
    id: "ai-document-assistant",
    title: "AI Document Assistant",
    project_name: "AI Document Assistant",
    category: "Automation",
    type: "selected-system",
    featured: false,
    homepage: true,
    priority: 2,
    description:
      "A workflow tool for turning document-heavy tasks into structured, searchable, and faster review experiences.",
    image: "/projects/learn_hub.png",
    project_image: "/projects/learn_hub.png",
    githubUrl: "https://github.com/MwangiKariuki586/learn-hub",
    github_link: "https://github.com/MwangiKariuki586/learn-hub",
    liveDemoUrl: "https://learn-hub-mbul.onrender.com/",
    demo_link: "https://learn-hub-mbul.onrender.com/",
    tech: ["React", "Node.js", "Automation"],
  },
  {
    id: "restaurant-order-system",
    title: "Restaurant Order System",
    project_name: "Restaurant Order System",
    category: "Operations",
    type: "selected-system",
    featured: false,
    homepage: true,
    priority: 3,
    description:
      "A practical ordering flow for menus, customer requests, payment readiness, and kitchen coordination.",
    image: "/projects/veterans_bay.png",
    project_image: "/projects/veterans_bay.png",
    githubUrl: "https://github.com/MwangiKariuki586/veterans-bay",
    github_link: "https://github.com/MwangiKariuki586/veterans-bay",
    liveDemoUrl: "https://veterans-bay-main.vercel.app/",
    demo_link: "https://veterans-bay-main.vercel.app/",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    id: "booking-allocation-system",
    title: "Booking & Allocation System",
    project_name: "Booking & Allocation System",
    category: "Scheduling",
    type: "selected-system",
    featured: false,
    homepage: true,
    priority: 4,
    description:
      "A scheduling and allocation experience designed around availability, booking rules, and operational clarity.",
    image: "/projects/verified_nyumba.png",
    project_image: "/projects/verified_nyumba.png",
    githubUrl: "https://github.com/MwangiKariuki586/house-hunting-app",
    github_link: "https://github.com/MwangiKariuki586/house-hunting-app",
    liveDemoUrl: "https://house-hunting-app.vercel.app/",
    demo_link: "https://house-hunting-app.vercel.app/",
    tech: ["React", "APIs", "Dashboards"],
  },
  {
    id: "chat-app",
    title: "Chat app",
    project_name: "Chat app",
    category: "Realtime",
    type: "archive",
    featured: false,
    homepage: false,
    priority: 5,
    description:
      "A realtime messaging interface focused on clean conversations, simple rooms, and responsive interaction.",
    image: "/projects/chat.png",
    project_image: "/projects/chat.png",
    githubUrl: "https://github.com/MwangiKariuki586/chat-app",
    github_link: "https://github.com/MwangiKariuki586/chat-app",
    liveDemoUrl: "https://chat-app-two-teal.vercel.app/",
    demo_link: "https://chat-app-two-teal.vercel.app/",
    tech: ["React", "Realtime", "UX"],
  },
];

export const featuredProject = projects.find(
  (project) => project.featured && project.type === "featured-build"
);

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I learn the workflow, user needs, business rules, and edge cases before building.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I map the system, define interfaces, structure data models, and plan the product flow.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I write clean, scalable code with reusable components, reliable APIs, and performance in mind.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "I test, gather feedback, fix issues, and refine the product for continuous improvement.",
  },
];

export const contactLinks = [
  { label: "Email", href: "mailto:mwangikariuki586@gmail.com" },
  { label: "Resume", href: "/about_me/Alex_Mwangi_ Fullstack_developer.pdf" },
  { label: "GitHub", href: "https://github.com/MwangiKariuki586?tab=repositories" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alex-mwangi-47ab45229/" },
];
