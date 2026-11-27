import agrotechImage from "@/assets/projects/agrotech.jpg.asset.json";
import growtixImage from "@/assets/projects/growtix.jpg.asset.json";

export type ProjectKind = "security" | "health" | "ml" | "agriculture" | "education";

export interface Project {
  id: string;
  kind: ProjectKind;
  title: string;
  label: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  flow: string[];
  repo: string;
  live: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "drishti",
    image: "/projects/drishti.jpg",
    kind: "security",
    title: "Drishti Security System",
    label: "Enterprise commerce & operations",
    tagline: "Security infrastructure, managed end to end.",
    description: "A production-grade e-commerce and operations platform for CCTV and security solutions, built around granular access control and live business workflows.",
    features: [
      "Four-tier RBAC for User, Technician, Admin and SuperAdmin",
      "Encrypted Razorpay checkout and geo-verified ordering",
      "Real-time revenue, installation and inventory dashboards",
    ],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Razorpay", "Mappls"],
    flow: ["Customer", "RBAC", "Payments", "Operations"],
    repo: "https://github.com/sahilsingh682/drishti_security_system",
    live: "https://drishti-security-systems.vercel.app/",
  },
  {
    id: "seva-setu",
    image: "/projects/seva-setu.jpg",
    kind: "health",
    title: "Seva-Setu",
    label: "AI healthcare accessibility",
    tagline: "Healthcare guidance that speaks your language.",
    description: "An AI-powered, installable healthcare platform designed for rural India, combining multilingual guidance with tools that make medical information easier to act on.",
    features: [
      "Multilingual voice assistant for accessible health guidance",
      "Medical report analyzer and government scheme matcher",
      "Installable PWA designed for low-connectivity environments",
    ],
    stack: ["React", "TypeScript", "AI Voice", "Supabase", "PWA", "Tailwind"],
    flow: ["Voice", "AI engine", "Guidance", "Access"],
    repo: "https://github.com/sahilsingh682/Seva-Setu",
    live: "https://the-seva-setu.vercel.app",
  },
  {
    id: "revenue-prediction",
    image: "/projects/revenue-prediction.jpg",
    kind: "ml",
    title: "E-Commerce Revenue Prediction",
    label: "Machine learning & behavioral analytics",
    tagline: "Turning session behavior into buying intent.",
    description: "An end-to-end machine learning web app that predicts whether an online shopping session is likely to generate revenue using behavioral signals.",
    features: [
      "Analyzes bounce rate, session depth and engagement signals",
      "End-to-end Python pipeline from data preparation to prediction",
      "Interactive decision-support experience deployed with Streamlit",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Streamlit"],
    flow: ["Session", "Features", "ML model", "Prediction"],
    repo: "https://github.com/sahilsingh682/ecommerce-prediction-ml",
    live: "https://ecommerce-prediction.streamlit.app/#high-conversion-intent",
  },
  {
    id: "agrotech",
    image: agrotechImage.url,
    kind: "agriculture",
    title: "AgroTech Smart Farming",
    label: "AgriTech · Contributor",
    tagline: "Practical intelligence for everyday farming.",
    description: "Contributing to an organization-level smart farming platform that brings AI guidance, crop care and farm management together for Indian farmers.",
    features: [
      "Multilingual AI assistant and image-based crop disease detection",
      "Weather alerts, crop calendars and mandi price information",
      "Kisan Khata farm ledger and government scheme discovery",
    ],
    stack: ["React", "TypeScript", "Supabase", "Gemini AI", "Tailwind", "PWA"],
    flow: ["Farmer", "Crop care", "AI guidance", "Farm tools"],
    repo: "https://github.com/AgroTech-Smart-Farming-Solutions/AGROTECH-SMART-FARMING",
    live: "https://agro-tech-smart-farming.vercel.app/",
  },
  {
    id: "growtix",
    image: growtixImage.url,
    kind: "education",
    title: "Growtix",
    label: "AI EdTech · Documentation contributor",
    tagline: "Coding practice with an AI mentor.",
    description: "A gamified developer-learning platform combining coding challenges, real-time execution and AI feedback. My contribution focused on authoring the project documentation.",
    features: [
      "AI-generated coding challenges, progressive hints and code reviews",
      "Multi-language code execution with hidden test cases",
      "XP, daily streaks and rankings with secure progress tracking",
    ],
    stack: ["React", "TypeScript", "Supabase", "Groq AI", "Piston", "Monaco"],
    flow: ["Challenge", "Code", "AI review", "Progress"],
    repo: "https://github.com/pushpender1043/Growtix",
    live: "https://growtix.vercel.app/",
  },
];

export const archivedProjects = [
  {
    id: "genmix",
    title: "Genmix",
    category: "AI + Web App",
    description: "Emotion-driven music recommendations, AI-generated playlist names and saved playlist management.",
    stack: ["React", "Node.js", "OpenAI"],
    live: "https://genmix-seven.vercel.app/",
    repo: "https://github.com/sahilsingh682/genmix",
  },
  {
    id: "covid-analysis",
    title: "COVID-19 Case Analysis",
    category: "Data Analytics · Geeta University",
    description: "Exploratory analysis of infection, recovery and fatality trends, supported by Python data visualizations.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    live: undefined,
    repo: undefined,
  },
  {
    id: "ss-fabric",
    title: "S S Fabric",
    category: "E-Commerce",
    description: "A clothing storefront with product catalog, customer navigation and payment integration.",
    stack: ["WordPress", "E-Commerce"],
    live: "https://6821bfa0941c4ca247ef5046--sahilsingh2130.netlify.app/",
    repo: undefined,
  },
];

export const skillGroups = [
  {
    title: "Frontend engineering",
    description: "Fast, accessible product interfaces with strong component architecture.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "Backend & data",
    description: "Secure data models, role-based systems and dependable API workflows.",
    skills: ["Node.js", "Express", "Supabase", "PostgreSQL", "MongoDB", "REST APIs", "RBAC"],
  },
  {
    title: "AI & machine learning",
    description: "Applied intelligence that solves a user problem, not AI for decoration.",
    skills: ["Python", "scikit-learn", "Pandas", "NumPy", "Voice AI", "Report analysis", "Prediction systems"],
  },
  {
    title: "Shipping & integrations",
    description: "Production tooling, payments, maps and installable experiences.",
    skills: ["Git", "Vercel", "Razorpay", "Mappls", "Recharts", "PWA", "Postman"],
  },
];

export const socialProfiles = {
  github: "https://github.com/sahilsingh682",
  linkedin: "https://www.linkedin.com/in/sahilsingh0521/",
  leetcode: "https://leetcode.com/u/imsahilsingh/",
  orcid: "https://orcid.org/0009-0003-6549-6449",
  email: "sahilsingh19772@gmail.com",
  phone: "+91 9812019772",
};
