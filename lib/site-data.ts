export const profile = {
  name: "Somil Sharma",
  location: "Gurgaon, India",
  phone: "+91-8171876285",
  email: "iamsomilsharma@gmail.com",
  linkedin: "https://in.linkedin.com/in/somil-sharma-bits-pilani",
  resumeHref: "/Somil_Sharma_Resume.pdf",
  role: "Frontend Engineer",
  summary:
    "I build fast, reliable product experiences with a strong focus on usability, performance, and business impact. Most of my work has been on user-facing flows that influence revenue, growth, or overall product quality.",
} as const;

export const navigation = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Build", href: "#build" },
  { label: "Contact", href: "#contact" },
] as const;

export const experiences = [
  {
    eyebrow: "Aug 2025 - Present",
    company: "Keychain",
    title: "Frontend Engineer",
    href: "https://www.keychain.com",
    bullets: [
      "Developed the image cropping workflow now driving 40% of image uploads on the platform.",
      "Collaborate with cross-functional teams to ship high-impact features and product enhancements.",
      "Manage two interns working on SEO-focused engineering projects.",
      "Received a 150% bonus for exceptional performance.",
    ],
  },
  {
    eyebrow: "May 2024 - Aug 2025",
    company: "smallcase",
    title: "Software Development Engineer 1 - Frontend",
    href: "https://www.smallcase.com",
    bullets: [
      "Built the payments modal experience behind 65% of company revenue through strong frontend architecture and microservices integration.",
      "Refactored complex codebases and added automations that improved maintainability and developer productivity.",
      "Delivered B2C UI improvements in Next.js and TypeScript that improved user experience and conversion outcomes.",
      "Recognized as a leading performer with a 50% compensation hike.",
    ],
  },
  {
    eyebrow: "Jan 2024 - Apr 2024",
    company: "smallcase",
    title: "Frontend Engineer Intern",
    href: "https://www.smallcase.com",
    bullets: [
      "Designed and implemented scalable frontend architecture for a B2B business using Next.js.",
      "Improved performance using code splitting, lazy loading, and caching for better load times and UX.",
    ],
  },
  {
    eyebrow: "Oct 2023 - Jan 2024",
    company: "Euromonitor International",
    title: "Frontend Engineer Intern",
    href: "https://www.euromonitor.com",
    bullets: [
      "Developed a ticket management application in React.js and improved its functionality and user experience.",
      "Finished as one of the top performers with a cumulative score of 34/35.",
    ],
  },
  {
    eyebrow: "May 2023 - Nov 2023",
    company: "Drone AI",
    title: "Founding Engineering Intern",
    href: "https://aidronesoftware.com",
    bullets: [
      "Built responsive web applications in React.js with a strong focus on user experience.",
      "Implemented UI improvements with Bootstrap to elevate the visual quality of product surfaces.",
      "Received a 75% stipend hike for strong performance.",
    ],
  },
] as const;

export const stackGroups = [
  {
    label: "Site Stack",
    items: ["Next.js 14", "React 18", "TypeScript", "App Router"],
  },
  {
    label: "Interface System",
    items: ["Custom CSS", "Responsive layout", "Semantic HTML"],
  },
  {
    label: "Engineering Tooling",
    items: ["ESLint", "Static generation", "Production build checks", "Lighthouse audit"],
  },
] as const;

export const achievements = [
  "Meta Frontend & App Professional Certification",
  "Scaler Frontend Certificate with 1st rank in a batch of 150 students",
] as const;

export const publications = [
  {
    eyebrow: "Preprint · 2026",
    title: "Accessibility and Semantic Quality Regressions in AI-Assisted React Development: An Empirical Study",
    venue: "Zenodo",
    doiHref: "https://doi.org/10.5281/zenodo.20482307",
    replicationHref: "https://github.com/SomilKSharma/ai-react-accessibility-study",
    // arXivHref: pending Kästner's endorsement — uncomment once live
    description:
      "Empirical study measuring how AI coding tools (Cursor, Copilot) affect accessibility violations and code complexity in React/TypeScript projects. Uses difference-in-differences with Tobit regression across axe-core audits and AST analysis. Key finding: axe violations show no statistically significant increase attributable to AI assistance; document structure violations are the predominant category.",
  },
] as const;

export const packages = [
  {
    eyebrow: "npm · Open Source",
    title: "qualm-a11y",
    npmHref: "https://www.npmjs.com/package/qualm-a11y",
    githubHref: "https://github.com/SomilKSharma/qualm",
    description:
      "Static AST-level analyzer for LLM-generated React/TypeScript code. Implements the empirical accessibility quality taxonomy from Sharma (2026). Supports SARIF and JSON output for CI/CD pipelines, with a --research-mode flag aligned to the study's violation categories.",
    stats: [
      { label: "Version", value: "1.0.2" },
      { label: "License", value: "MIT" },
      { label: "Engine", value: "Node ≥18" },
      { label: "CLI", value: "qualm-a11y" },
    ],
  },
] as const;

export const education = {
  school: "BITS Pilani",
  degree: "Integrated Bachelor's and Master's degree",
  subject: "Physics",
  eyebrow: "Education",
  description:
    "Integrated Bachelor's and Master's degree.",
} as const;
