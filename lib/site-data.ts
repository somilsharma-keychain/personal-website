export const profile = {
  name: "Somil Sharma",
  location: "Dehradun, India",
  phone: "+91-8171876285",
  email: "iamsomilsharma@gmail.com",
  linkedin: "https://in.linkedin.com/in/somil-sharma-bits-pilani",
  resumeHref: "/Somil_Sharma_Resume.pdf",
  role: "Frontend Engineer",
  summary:
    "Frontend engineer (React, Next.js, TypeScript) who builds 0→1 products at startup pace. I joined a US startup at ~30 engineers and shipped through its scale-up past 120, building its CRM from the ground up while working daily with US-based product, design, and GTM teams. Before that I built payment flows processing ~65% of revenue at a fintech. AI-native workflow, and I own web performance end to end.",
} as const;

export const navigation = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Writing", href: "#writing" },
  { label: "Build", href: "#build" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Python", "Java"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "Responsive design",
      "Core Web Vitals",
      "CrUX",
      "Lighthouse",
      "SEO",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "Git",
      "Docker",
      "AWS",
      "Mixpanel",
      "Claude Code",
      "Jira",
      "Linear",
    ],
  },
] as const;

export const experiences = [
  {
    eyebrow: "Aug 2025 - Present",
    company: "Keychain",
    title: "Frontend Engineer",
    href: "https://www.keychain.com",
    bullets: [
      "Core engineer on Keychain's CRM, built from scratch: shipped the Accounts and Contacts modules end to end, including list views with search, filter, and sort, detail pages, and activity timelines mapping user relationships against a 100K+ company graph.",
      "Built inline editing across the CRM's data tables (Accounts, Deals, Connections) with Excel-like cell editing, optimistic updates, rollback on failure, and full error handling.",
      "Built automated Core Web Vitals monitoring (LCP, INP, CLS) on CrUX data with scheduled Node.js reporting and regression alerting, and used it to catch a production CLS regression.",
      "Created a high-fidelity, resettable product demo environment for customer demos, with vertical-specific datasets, embedded routing, and feature-flag controls.",
      "Work AI-first: maintain the team's Claude Code skills and claude.md conventions, and ran AI-driven spec validation across PRD, Gherkin, and Figma docs that surfaced 31 discrepancies before build.",
      "Frequent first responder on P0 production incidents (broken table scrolling, missing activity timestamps, filter outages), resolving most within 24-48 hours, and ship across the stack in the NestJS backend when features need it.",
      "Developed the platform's image-cropping flow, now used in ~40% of all image uploads.",
      "Mentor two interns on SEO initiatives; rated an exceptional performer in the latest review cycle.",
    ],
  },
  {
    eyebrow: "May 2024 - Aug 2025",
    company: "smallcase",
    title: "Software Development Engineer 1 - Frontend",
    href: "https://www.smallcase.com",
    bullets: [
      "Prime contributor to the payments modal on a leading retail-investment platform, powering checkout for ~65% of company revenue by integrating multiple microservices into a seamless, robust payment flow.",
      "Refactored complex legacy codebases and added automations, improving performance, readability, and developer productivity while reducing technical debt.",
      "Recognized among the organization's leading performers of the year.",
    ],
  },
  {
    eyebrow: "Jan 2024 - Apr 2024",
    company: "smallcase",
    title: "Frontend Engineer Intern",
    href: "https://www.smallcase.com",
    bullets: [
      "Designed scalable Next.js architecture for the B2B business, and improved page-load times through code splitting, lazy loading, and caching.",
    ],
  },
  {
    eyebrow: "Oct 2023 - Jan 2024",
    company: "Euromonitor International",
    title: "Frontend Engineer Intern",
    href: "https://www.euromonitor.com",
    bullets: [
      "Built a ticket-management application in React.js; rated a top performer with a cumulative score of 34/35.",
    ],
  },
  {
    eyebrow: "May 2023 - Nov 2023",
    company: "Drone AI",
    title: "Founding Engineering Intern",
    href: "https://aidronesoftware.com",
    bullets: [
      "Developed responsive React.js web applications as one of the first engineers on the team.",
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
  "Meta Frontend & App Professional Certification (12 months)",
  "Scaler Frontend Certification - ranked 1st in a batch of 150 students",
  "TOEFL iBT: 118/120 (2026)",
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

export const education = [
  {
    eyebrow: "Master's",
    school: "Woolf University",
    details: ["MS, Computer Science"],
  },
  {
    eyebrow: "Integrated Bachelor's & Master's",
    school: "BITS Pilani",
    details: ["Physics (Theoretical & Computational)"],
  },
] as const;
