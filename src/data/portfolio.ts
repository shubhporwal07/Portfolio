export interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  date: string;
  isGroupProject?: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  metrics: { label: string; value: string }[];
  overview: string;
  theProblem: string;
  solution: string;
  architecture: {
    title: string;
    description: string;
    flow: string[];
    details: { title: string; desc: string }[];
  };
  features: { title: string; desc: string }[];
  development: { title: string; desc: string }[];
  deployment: {
    platforms: string[];
    strategy: string;
  };
  results: { metric: string; context: string }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Shubh Porwal",
    primaryTitle: "Full-Stack Web Developer",
    secondaryTitle: "Software Developer | AI & Full-Stack Builder",
    location: "India",
    email: "shubhporwal83@gmail.com",
    phone: "+91-8267890501",
    linkedin: "https://linkedin.com/in/shubh-porwal10",
    github: "https://github.com/shubhporwal07",
    resumePath: "/resume.pdf",
    status: "OPEN TO OPPORTUNITIES",
    educationBrief: "B.Tech CSE at Lovely Professional University (CGPA: 8.33)",
    heroStatement:
      "I build full-stack web applications and AI-powered products that turn real problems into usable digital experiences.",
    aboutStory:
      "I am a Computer Science undergraduate at Lovely Professional University driven by a simple philosophy: don't just list technologies — prove what you can ship with them. My focus spans modern full-stack systems with Next.js, React, and Node.js, resilient backend REST APIs, intuitive database design, and integrating modern AI models into real-world consumer workflows.",
  },

  whatIBuild: [
    {
      id: "full-stack-systems",
      label: "FULL-STACK SYSTEMS",
      summary: "Frontend • Backend • APIs • Auth • Databases • Deployment",
      points: [
        "React and Next.js interfaces",
        "Node.js and Express services",
        "REST API architecture",
        "Authentication and access flows",
        "Database design and deployment",
      ],
    },
    {
      id: "ai-powered-products",
      label: "AI-POWERED PRODUCTS",
      summary: "AI Model Integration • LLMs • Multimodal AI • Prompt Engineering",
      points: [
        "AI model orchestration",
        "Multimodal text and image workflows",
        "Prompt and response design",
        "Real user-facing AI experiences",
      ],
    },
    {
      id: "product-development",
      label: "PRODUCT DEVELOPMENT",
      summary: "Problem • Design • Build • Deploy • Improve",
      points: [
        "Translate problems into product decisions",
        "Design systems with clarity and usability",
        "Ship robust, production-minded builds",
        "Iterate through user feedback and performance",
      ],
    },
  ],

  signals: [
    { value: "8.33", label: "CGPA", context: "B.Tech Computer Science" },
    { value: "2", label: "Major Projects", context: "Shipped & Live Production" },
    { value: "100+", label: "Products Cataloged", context: "In Anil Jewellers Platform" },
    { value: "10+", label: "REST Endpoints", context: "Architected & Deployed" },
    { value: "15+", label: "React Components", context: "Modular & Reusable UI" },
    { value: "2", label: "AI Models", context: "Integrated in ZentiqAI" },
    { value: "2", label: "Interaction Modes", context: "Text & Vision in ZentiqAI" },
  ],

  projects: [
    {
      slug: "anil-jewellers",
      title: "Anil Jewellers",
      tagline: "Commercial Full-Stack E-Commerce Platform",
      category: "FULL-STACK E-COMMERCE",
      badge: "REVENUE GENERATION PROJECT",
      date: "May 2025",
      description:
        "A full-stack e-commerce platform designed for an authentic jewellery business, supporting 100+ jewellery products, seamless catalog discovery, and end-to-end customer purchasing workflows.",
      highlights: [
        "100+ products cataloged",
        "10+ REST API endpoints",
        "15+ reusable React components",
        "Firebase Authentication",
        "Vercel + Render dual deployment",
      ],
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Vite",
        "Node.js",
        "Express.js",
        "Firebase",
        "Git",
        "Vercel",
        "Render",
      ],
      liveUrl: "https://www.aniljewellers.shop/",
      githubUrl: "https://github.com/shubhporwal07/Anil-Jewelles.git",
      metrics: [
        { label: "Catalog Volume", value: "100+ Items" },
        { label: "Backend Endpoints", value: "10+ APIs" },
        { label: "Component System", value: "15+ Modules" },
        { label: "Infrastructure", value: "Vercel + Render" },
      ],
      overview:
        "Anil Jewellers is a bespoke full-stack retail and e-commerce application crafted for an Indian jewellery merchant. Built to bridge traditional physical boutique trust with modern digital ordering, the platform manages high-value jewelry catalogs, categories, client inquiries, and verified order sequences.",
      theProblem:
        "Traditional retail jewelry businesses heavily rely on in-person visits and static messaging apps. Catalog updates were manual, order tracking lacked structured authentication, and customers had no central hub to explore certified ornaments, view accurate specs, and place orders smoothly.",
      solution:
        "Engineered a dedicated web application with a responsive React frontend powered by Vite and Tailwind CSS, coupled with an Express/Node.js RESTful API hosted on Render and Firebase Authentication for secure customer sessions. Implemented optimized product indexing, responsive gallery views, and frictionless cart flows.",
      architecture: {
        title: "Client-Server Decoupled Architecture",
        description:
          "High-performance client hosted on Vercel edge CDN communicating with an Express.js backend on Render, with Firebase handling user credential validation and session tokens.",
        flow: [
          "Client Browser (Vercel CDN)",
          "Vite + React SPA (Tailwind UI)",
          "Firebase Auth Session Token",
          "Express.js REST API (Render)",
          "Data Storage & Catalog Services",
          "Client State & Order Dispatch",
        ],
        details: [
          {
            title: "Frontend Layer",
            desc: "Fast Vite bundling with modular React UI components, responsive grids, and instant client-side state handling.",
          },
          {
            title: "Security & Auth",
            desc: "Firebase Authentication protecting user profiles and sensitive purchasing actions via JWT verification.",
          },
          {
            title: "RESTful Service Layer",
            desc: "Node.js + Express backend exposing 10+ granular endpoints for catalog retrieval, filtering, and order lifecycle.",
          },
          {
            title: "Deployment Strategy",
            desc: "Static edge delivery via Vercel for the client app combined with continuous Render container runtime for Node APIs.",
          },
        ],
      },
      features: [
        {
          title: "Curated Product Discovery",
          desc: "Categorized browsing for 100+ rings, necklaces, bracelets, and traditional ornaments with high-resolution imagery and specifications.",
        },
        {
          title: "Interactive Cart & Order Flow",
          desc: "Persistent client cart state, real-time item calculation, and streamlined checkout pipelines.",
        },
        {
          title: "Firebase Authentication",
          desc: "Secure login, registration, and session persistence allowing customers to revisit their preferred selections.",
        },
        {
          title: "Responsive Mobile-First UI",
          desc: "Handcrafted responsive layouts ensuring fluid experience from compact mobile viewports up to large desktop monitors.",
        },
        {
          title: "RESTful Backend Architecture",
          desc: "Clean separation of concerns with structured route controllers, error handling middleware, and CORS configuration.",
        },
      ],
      development: [
        {
          title: "Component Reusability",
          desc: "Engineered 15+ reusable React primitives (Cards, Modals, Category Filters, Navbars, Buttons) enforcing consistency.",
        },
        {
          title: "State & API Integration",
          desc: "Normalized data parsing between the Express backend and client components with robust error boundaries.",
        },
        {
          title: "Styling System",
          desc: "Bespoke Tailwind palette reflecting warmth and elegance fitting fine jewelry while maintaining high contrast.",
        },
      ],
      deployment: {
        platforms: ["Vercel (Client)", "Render (Server)", "Firebase (Auth)", "Git (Version Control)"],
        strategy:
          "Continuous Git-based deployment triggers automatic builds on Vercel for frontend assets and rolling server container deployments on Render.",
      },
      results: [
        { metric: "100+ Products", context: "Live catalog items indexed and browsable" },
        { metric: "10+ Endpoints", context: "Robust REST services handling transactions and catalog queries" },
        { metric: "Production Live", context: "Hosted on custom domain at aniljewellers.shop" },
      ],
    },
    {
      slug: "zentiqai",
      title: "ZentiqAI",
      tagline: "Multimodal AI Conversational & Vision Platform",
      category: "MULTIMODAL AI CHATBOT",
      badge: "COLLABORATIVE AI PROJECT",
      date: "June 2025",
      isGroupProject: true,
      description:
        "A multimodal AI chatbot supporting concurrent text conversations and vision-based image reasoning, powered by open-source weights (LLaVA-13B and Qwen) with Next.js and Firebase.",
      highlights: [
        "2 interaction modes (Text + Vision)",
        "2 AI models (LLaVA-13B & Qwen)",
        "15+ responsive UI components",
        "2+ authentication options",
        "Collaborative engineering effort",
        "Production deployment on Vercel",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "Firebase",
        "LLaVA-13B",
        "Qwen",
        "Tailwind CSS",
        "TypeScript",
        "Vercel",
      ],
      liveUrl: "https://zentiqai.vercel.app/",
      githubUrl: "https://github.com/PRANAV-SINGH-CSE/ZentiqAI_Chat_Bot.git",
      metrics: [
        { label: "AI Models", value: "2 (LLaVA + Qwen)" },
        { label: "Interaction Modes", value: "Text & Vision" },
        { label: "UI System", value: "15+ Next.js Components" },
        { label: "Auth Providers", value: "2+ Mechanisms" },
      ],
      overview:
        "ZentiqAI is an intelligent multimodal conversational workspace engineered collaboratively by our team to explore next-generation open-source foundation models. The system allows users to chat via natural language as well as upload visual artifacts for deep scene comprehension and visual Q&A.",
      theProblem:
        "Many accessible AI chatbot interfaces are locked behind proprietary closed-ecosystems, restrict image inputs, or lack transparent multimodal integration. Users needed a unified web console that could seamlessly route visual inputs to visual-language models while routing text dialog to high-speed LLMs.",
      solution:
        "Constructed a Next.js App Router application integrated with Firebase for identity management. The architecture dynamically dispatches textual prompts to Qwen and visual media alongside prompt context to LLaVA-13B, rendering real-time conversational streams in an ergonomic chat workspace.",
      architecture: {
        title: "Multimodal Inference Pipeline",
        description:
          "End-to-end request orchestration routing text and multipart image payloads from the Next.js client to the appropriate model runtime.",
        flow: [
          "USER",
          "NEXT.JS FRONTEND",
          "AUTHENTICATION (Firebase)",
          "AI REQUEST DISPATCHER",
          "QWEN (Text) / LLAVA-13B (Vision)",
          "AI RESPONSE FORMATTER",
          "USER INTERFACE",
        ],
        details: [
          {
            title: "Next.js Frontend",
            desc: "Responsive layout with 15+ modular components for message history, media preview, code block rendering, and prompt controls.",
          },
          {
            title: "Authentication Gate",
            desc: "Firebase session verification providing 2+ login mechanisms and persisting user chat states safely.",
          },
          {
            title: "Inference Routing",
            desc: "Payload inspector routes pure text to Qwen for low-latency reasoning and visual uploads to LLaVA-13B for spatial analysis.",
          },
          {
            title: "Collaborative Credit",
            desc: "Built as a collaborative team project, dividing frontend architecture, API integration, and model evaluation among teammates.",
          },
        ],
      },
      features: [
        {
          title: "Dual Interaction Modality",
          desc: "Switch effortlessly between standard text chat dialogue and image upload inspection within the same conversation thread.",
        },
        {
          title: "LLaVA-13B Vision Integration",
          desc: "Large Language and Vision Assistant model weights analyzing visual contexts, deciphering diagrams, and explaining images.",
        },
        {
          title: "Qwen Language Modeling",
          desc: "High-capability multilingual model delivering concise reasoning, conversational nuance, and coding assistance.",
        },
        {
          title: "Modular Next.js Architecture",
          desc: "Over 15+ custom-designed components delivering responsive sidebar navigation, thread switching, and message bubbles.",
        },
        {
          title: "Multi-Provider Auth",
          desc: "Integrated Firebase Authentication with 2+ login methods ensuring easy sign-on and privacy.",
        },
      ],
      development: [
        {
          title: "Team Collaboration",
          desc: "Executed in a collaborative engineering group, contributing to UI component architecture, state management, and model interface wiring.",
        },
        {
          title: "Payload Handling",
          desc: "Built efficient file upload previews and base64/multiform payload streaming for vision model ingestion.",
        },
        {
          title: "Responsive Theme",
          desc: "High-contrast dark developer console interface optimized for readability during prolonged coding and research sessions.",
        },
      ],
      deployment: {
        platforms: ["Vercel (App Router)", "Firebase (Auth & State)", "GitHub (Team Repository)"],
        strategy:
          "Vercel automated CI/CD integrated with team branch reviews, enabling rapid preview deployments and fast production rollouts.",
      },
      results: [
        { metric: "2 Models Deployed", context: "Qwen for text generation, LLaVA-13B for multimodal vision" },
        { metric: "Dual Modality", context: "Seamless text and image reasoning in single interface" },
        { metric: "Vercel Live", context: "Live production web deployment at zentiqai.vercel.app" },
      ],
    },
  ],

  howIBuild: [
    {
      step: "01",
      title: "UNDERSTAND",
      desc: "Analyze the core problem, user expectations, real-world constraints, and measurable project goals before writing a single line of code.",
    },
    {
      step: "02",
      title: "DESIGN",
      desc: "Plan decoupled software architecture, database schemas, REST endpoints, and an accessible, high-contrast UI component hierarchy.",
    },
    {
      step: "03",
      title: "BUILD",
      desc: "Implement responsive frontend modules, resilient server logic, database integrations, and connect modern AI APIs with clean type safety.",
    },
    {
      step: "04",
      title: "SHIP",
      desc: "Deploy to production infrastructure (Vercel, Render), test across viewports, optimize load performance, and iterate based on real feedback.",
    },
  ],

  skills: {
    programming: ["Java", "C++", "JavaScript", "C"],
    frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
    backend: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Web Services",
      "API Integration",
      "Authentication",
    ],
    databases: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "MySQL",
      "NoSQL",
      "Data Modeling",
      "Database Design",
    ],
    ai: ["AI Model Integration", "Prompt Engineering"],
    fundamentals: [
      "Data Structures and Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
    tools: ["Git", "GitHub", "VS Code", "GitHub Workflows", "Vercel", "Render"],
  },

  experience: [
    {
      role: "CORE JAVA TRAINING",
      organization: "CipherSchools",
      period: "Jan 2026 – May 2026",
      type: "Technical Training & Practical Application",
      description:
        "Intensive technical coursework focused on object-oriented software engineering principles, algorithms, and practical application development in Java.",
      points: [
        "Java Fundamentals & Strong Object-Oriented Programming (OOP) paradigms",
        "Data Structures implementation and Algorithmic problem solving",
        "Application Development Concepts & modular architecture design",
      ],
    },
  ],

  hackathon: {
    title: "ISRO BHARATIYA ANTARIKSH HACKATHON 2026",
    date: "June 2026",
    organization: "Indian Space Research Organisation (ISRO)",
    description:
      "Collaborated in an engineering team to develop and present a technology-driven solution through problem-solving and rapid prototyping under intense competitive hackathon constraints.",
    tags: ["Rapid Prototyping", "Team Collaboration", "Problem Solving", "System Design"],
    url: "https://drive.google.com/file/d/1r_xnRsZirU7ttjGsHAhRJrhvKr8cyk3F/view?usp=sharing",
  },

  training: {
    title: "Core Java Training",
    issuer: "CipherSchools",
    date: "Jan 2026 – May 2026",
    url: "https://drive.google.com/file/d/1V5vONSI833wf38YDVNXYGpHff7uGRhAd/view?usp=drive_link",
  },

  achievements: [
    {
      title: "Top Performer – Tech Synergy",
      issuer: "CipherSchools",
      date: "March 2026",
      detail: "Recognized as top performer in technical synergy assessments and problem solving.",
    },
    {
      title: "ISRO Bharatiya Antariksh Hackathon 2026",
      issuer: "ISRO",
      date: "June 2026",
      detail:
        "Team competitor developing technology-driven prototyping solutions in space tech track.",
    },
    {
      title: "A Grade – UI/UX Design and Prototyping",
      issuer: "Academic Assessment for Web and Mobile Applications",
      date: "July 2026",
      detail:
        "Awarded Grade A for excellence in user interface engineering, interaction design, and responsive prototyping.",
    },
  ],

  achievementProofs: [
    {
      title: "TOP PERFORMER – TECH SYNERGY",
      issuer: "CipherSchools",
      date: "2026",
      url: "https://drive.google.com/file/d/1Gzd2ND-7-m-rxLQ8RTbI25u_dP0XB_zi/view?usp=sharing",
    },
    {
      title: "ISRO BHARATIYA ANTARIKSH HACKATHON 2026",
      issuer: "ISRO",
      date: "Jun 2026",
      url: "https://drive.google.com/file/d/1r_xnRsZirU7ttjGsHAhRJrhvKr8cyk3F/view?usp=sharing",
    },
    {
      title: "A GRADE – UI/UX DESIGN AND PROTOTYPING",
      issuer: "Web & Mobile Application Design",
      date: "2026",
      url: "https://drive.google.com/file/d/1ltq1K6qE15TNZWkCuzpiaxHlKbISAX9j/view?usp=sharing",
    },
  ],

  certificates: [
    {
      title: "Database Management System Part - 2",
      issuer: "Infosys Springboard",
      date: "Jul 2026",
      category: "CERTIFICATE",
      url: "https://drive.google.com/file/d/1QvcDG_8QxuCjydr5c7Pe9sBSPwEKj04l/view?usp=sharing",
    },
    {
      title: "Database Management System Part - 1",
      issuer: "Infosys Springboard",
      date: "Jul 2026",
      category: "CERTIFICATE",
      url: "https://drive.google.com/file/d/1-QVJIg2c4otaQ9Osdb6Zloo2XeNBwe0l/view?usp=sharing",
    },
    {
      title: "Programming Using C++",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      category: "CERTIFICATE",
      url: "https://drive.google.com/file/d/1PbG1m9YVxOSyovsyl5wP_2igNYplX12L/view?usp=sharing",
    },
    {
      title: "Data Structures and Algorithms 2026",
      issuer: "Certificate",
      date: "2026",
      category: "CERTIFICATE",
      url: "https://drive.google.com/file/d/1W3mKLyna-ZiwbUNVvUIqK7JNX4wdhKcx/view?usp=sharing",
    },
    {
      title: "CyberSmart Awareness",
      issuer: "WNS Cares Foundation",
      date: "Jul 2025 – Aug 2025",
      category: "CERTIFICATE",
      url: "https://drive.google.com/file/d/1xfcQm0C5US4CgWDSCHMTJ8XPxS2JMP6w/view?usp=sharing",
    },
    {
      title: "C Programming",
      issuer: "CSE Pathshala",
      date: "Jan 2025",
      category: "CERTIFICATE",
      url: "https://drive.google.com/file/d/1V-Yzhf6Y9qPJDE9H0V8VjL-0HXV8g24T/view?usp=sharing",
    },
    {
      title: "ISRO Bharatiya Antariksh Hackathon 2026",
      issuer: "ISRO Bharatiya Antariksh Hackathon",
      date: "Jun 2026",
      category: "HACKATHON CERTIFICATE",
      url: "https://drive.google.com/file/d/1r_xnRsZirU7ttjGsHAhRJrhvKr8cyk3F/view?usp=sharing",
    },
    {
      title: "Core Java Training",
      issuer: "CipherSchools",
      date: "Jan 2026 – May 2026",
      category: "TRAINING CERTIFICATE",
      url: "https://drive.google.com/file/d/1V5vONSI833wf38YDVNXYGpHff7uGRhAd/view?usp=drive_link",
    },
  ],

  education: [
    {
      degree: "B.Tech Computer Science and Engineering",
      institution: "Lovely Professional University",
      period: "2024 – Present",
      score: "CGPA: 8.33",
      highlight: "Focus on Full-Stack Web Development, Software Engineering & AI Systems",
    },
    {
      degree: "Class XII — PCM",
      institution: "Jayotri Academy",
      period: "2023 – 2024",
      score: "71%",
      highlight: "Physics, Chemistry, Mathematics",
    },
    {
      degree: "Class X",
      institution: "Jayotri Academy",
      period: "2021 – 2022",
      score: "80%",
      highlight: "Secondary School Education",
    },
  ],

  navigation: [
    { id: "position", num: "01", label: "POSITION" },
    { id: "projects", num: "02", label: "PROJECTS" },
    { id: "skills", num: "03", label: "SKILLS" },
    { id: "experience", num: "04", label: "EXPERIENCE" },
    { id: "achievements", num: "05", label: "ACHIEVEMENTS" },
    { id: "education", num: "06", label: "EDUCATION" },
    { id: "contact", num: "07", label: "CONTACT" },
  ],
};
