export type ProjectKind = "security" | "health" | "ml";

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
}

export const projects: Project[] = [
  {
    id: "drishti",
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
