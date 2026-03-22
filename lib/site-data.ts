export const profile = {
  name: "Somil Sharma",
  location: "Dehradun, India",
  phone: "+91-8171876285",
  email: "iamsomilsharma@gmail.com",
  linkedin: "https://in.linkedin.com/in/somil-sharma-bits-pilani",
  resumeHref: "/Somil_Sharma_Resume.pdf",
  role: "Frontend Engineer",
  summary:
    "I am a frontend engineer who likes building fast, reliable product experiences. Most of my work has been on user-facing flows that affect revenue, growth, or everyday product quality.",
} as const;

export const navigation = [
  { label: "Approach", href: "#principles" },
  { label: "Experience", href: "#experience" },
  { label: "Build", href: "#build" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroStats = [
  { label: "Image upload impact", value: "40%" },
  { label: "Revenue contribution", value: "65%" },
  { label: "Team leadership", value: "2 interns" },
  { label: "Top compensation jump", value: "150%" },
] as const;

export const principles = [
  {
    index: "01",
    title: "I like frontend work that moves the business",
    description:
      "A lot of my work has been on flows that actually matter to the company, from payments at smallcase to image tooling at Keychain.",
  },
  {
    index: "02",
    title: "Good frontend needs structure",
    description:
      "I enjoy refactoring messy code, building reusable patterns, and making frontend codebases easier to work in as products grow.",
  },
  {
    index: "03",
    title: "I care about the team side too",
    description:
      "Along with shipping code, I have worked closely with other teams, handled SEO work, and managed interns.",
  },
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
    items: ["Custom CSS", "Responsive layout", "Semantic HTML", "Resume download"],
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

export const education = {
  school: "BITS Pilani",
  degree: "Integrated Bachelor's and Master's degree",
} as const;

export const buildHighlights = [
  "Resume attached directly to the site",
  "App Router with a statically rendered homepage",
  "Content kept in typed data files so updates stay easy",
  "Light theme, responsive layout, and lighter visual effects",
] as const;
