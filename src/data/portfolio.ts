// ─── Single source of truth for all portfolio content ───────────────────────

export const PERSONAL = {
    name: "Dhruv Patel",
    phone: "346-446-8118",
    email: "dhruvp0159@gmail.com",
    linkedin: "https://linkedin.com/in/dhruvpatel0159",
    github: "https://github.com/Dhruv1242004",
} as const;

// ─── Hero ──────────────────────────────────────────────────────────────────────

export const HERO = {
    label: "Software Developer & CS Grad Student",
    heading: "Hi, I\u2019m Dhruv Patel.",
    subheading: "I build reliable software that solves real problems.",
    intro:
        "M.S. Computer Science student at the University of Houston with hands-on experience shipping full-stack apps, AI agents, and distributed systems. I care about clean architecture, thoughtful APIs, and writing code that scales.",
} as const;

// ─── Featured Work ─────────────────────────────────────────────────────────────

export interface Project {
    title: string;
    description: string;
    tags: string[];
    href: string;
}

export const PROJECTS: Project[] = [
    {
        title: "Autonomous AI Agent Platform",
        description:
            "AI agent capable of multi-step reasoning, tool calling, and contextual memory. Integrates web search, document analysis, and structured output via a modular FastAPI backend with containerized services.",
        tags: ["Python", "LLM APIs", "Vector DB", "FastAPI", "Docker"],
        href: "https://github.com/Dhruv1242004",
    },
    {
        title: "Distributed Task Processing System",
        description:
            "Scalable task queue handling async background jobs and batch workflows. Features worker orchestration, retry logic, a monitoring dashboard, and REST-based job submission powered by Redis queues.",
        tags: ["Python", "Redis", "FastAPI", "Docker"],
        href: "https://github.com/Dhruv1242004",
    },
    {
        title: "AI Document Intelligence System",
        description:
            "Domain-aware document analyzer generating summaries and detecting categories. Achieves sub-2s response latency through optimized LLM prompt pipelines for summarization, insight extraction, and classification.",
        tags: ["Python", "OpenAI API", "FastAPI", "Docker"],
        href: "https://github.com/Dhruv1242004",
    },
    {
        title: "Swad Seeker — Android Platform",
        description:
            "Production Android app with authentication, Google Maps integration, and real-time cloud sync. Modular architecture with Firebase backend and REST APIs, designed for future AI-based recommendations.",
        tags: ["Kotlin", "Firebase", "REST APIs", "Google Maps"],
        href: "https://github.com/Dhruv1242004",
    },
];

// ─── Experience ────────────────────────────────────────────────────────────────

export interface ExperienceEntry {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    highlights: string[];
    impactMetrics: string[];
    techStack: string[];
    links?: { label: string; href: string }[];
}

export const EXPERIENCES: ExperienceEntry[] = [
    {
        company: "Narola Infotech",
        role: "Software Developer Intern",
        period: "Jan 2025 – Jun 2025",
        location: "Remote",
        description:
            "Engineered full-stack Android platform using Kotlin, Firebase, and REST APIs serving real-time users.",
        highlights: [
            "Designed scalable MVVM architecture and modular state management, improving feature velocity",
            "Built secure authentication and cloud-backed data pipelines for dynamic content delivery",
            "Reduced location errors by 25% after migrating to Google Maps infrastructure",
        ],
        impactMetrics: ["-25% location errors", "MVVM + modular state", "Secure auth pipelines"],
        techStack: ["Kotlin", "Firebase", "REST APIs", "Google Maps", "MVVM"],
        links: [{ label: "GitHub", href: "https://github.com/Dhruv1242004" }],
    },
];

// ─── Education ─────────────────────────────────────────────────────────────────

export interface EducationEntry {
    school: string;
    degree: string;
    gpa: string;
    period: string;
    location: string;
    coursework: string[];
}

export const EDUCATION: EducationEntry[] = [
    {
        school: "University of Houston",
        degree: "M.S. Computer Science",
        gpa: "3.56 / 4.0",
        period: "2025 – 2027",
        location: "Houston, TX",
        coursework: [
            "Visualization",
            "Data Mining",
            "Advanced Numerical Analysis",
            "Cloud Computing",
        ],
    },
    {
        school: "Gujarat Technological University",
        degree: "B.E. Computer Engineering",
        gpa: "8.76 / 10",
        period: "2021 – 2025",
        location: "India",
        coursework: [
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
            "Operating Systems",
            "Computer Networks",
        ],
    },
];

// ─── Skills ────────────────────────────────────────────────────────────────────

export interface SkillGroup {
    category: string;
    items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
    {
        category: "Programming",
        items: ["Python", "Kotlin", "Java", "C/C++", "SQL"],
    },
    {
        category: "Backend & APIs",
        items: ["FastAPI", "REST APIs", "Microservices", "Redis"],
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "SQLite", "Firestore"],
    },
    {
        category: "AI / LLM",
        items: ["LLM APIs", "RAG Pipelines", "Vector DBs", "Embeddings"],
    },
    {
        category: "Cloud & DevOps",
        items: ["Docker", "Linux", "CI/CD", "Cloud Deploy"],
    },
    {
        category: "Core CS",
        items: ["DSA", "OOP", "System Design", "Distributed Systems"],
    },
];

// ─── Social / Contact ──────────────────────────────────────────────────────────

export interface SocialLink {
    label: string;
    href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
    { label: "GitHub", href: "https://github.com/Dhruv1242004" },
    { label: "LinkedIn", href: "https://linkedin.com/in/dhruvpatel0159" },
    { label: "Email", href: "mailto:dhruvp0159@gmail.com" },
];
