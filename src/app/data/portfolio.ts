// ============================================================
// AbdulDesigns — portfolio content (single source of truth)
// ============================================================

export const brand = {
  name: "AbdulDesigns",
  person: "Abdul Salam",
  role: "Product Designer",
  tagline: "I turn complex product problems into simple, measurable outcomes.",
  email: "salam743347@gmail.com",
  phone: "+92 330 5188178",
  location: "Islamabad, Pakistan — Remote worldwide",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Behance", href: "https://www.behance.net/" },
  ],
};

export const stats = [
  { value: 4, suffix: "+", label: "Years of experience" },
  { value: 30, suffix: "+", label: "Completed projects" },
  { value: 40, suffix: "%", label: "Impact ratio" },
];

export type Discipline =
  | "UX Research"
  | "Product Design"
  | "UI Design"
  | "Design Systems"
  | "Interaction Design";

export interface CaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  tags: string[];
  disciplines: Discipline[];
  status: "Shipped" | "In Review";
  year: string;
  industry: string;
  accent: string; // gradient css
  cover: string;
  summary: string;
  role: string;
  timeline: string;
  team: string;
  cardOutcome: string; // one-line headline result for cards
  problem: string; // STAR: Situation
  task: string; // STAR: Task — responsibilities & constraints
  metrics: { value: string; label: string }[];
  process: {
    key: string;
    title: string;
    body: string;
  }[];
  beforeAfter: { before: string; after: string };
  outcome: string;
  gallery: string[];
}

const img = (url: string) => url;

export const caseStudies: CaseStudy[] = [
  {
    slug: "odda-self-service",
    title: "ODDA — From email coordination to self-service shipping",
    shortTitle: "ODDA",
    tags: ["Logistics", "B2B Platform"],
    disciplines: ["UX Research", "Product Design", "Design Systems"],
    status: "Shipped",
    year: "2025",
    industry: "Logistics",
    accent: "linear-gradient(135deg, #5E67E6, #CFFF72)",
    cover: img(
      "https://images.unsplash.com/photo-1620207284057-e6c6b3d1b4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
    ),
    summary:
      "ODDA relied on manual email coordination for shipment requests. I led an end-to-end self-service experience that made booking, quote requests, and payments easier to complete.",
    role: "UI/UX Designer",
    timeline: "2024–Present",
    team: "Product · Operations · Engineering",
    cardOutcome: "~25% less manual coordination",
    problem:
      "Intercargo's shipment process depended on emails and manual coordination between customers, sales, and operations. That friction slowed quote handling and made it difficult for customers to complete common tasks independently.",
    task:
      "I led the end-to-end UX direction for ODDA: research, journey mapping, flows, prototypes, and usability testing. I worked with product, operations, and engineering to convert business goals into a self-service platform without losing the operational detail the team relied on.",
    metrics: [
      { value: "~25%", label: "Less manual coordination" },
      { value: "20–30%", label: "Estimated activation lift" },
      { value: "15%", label: "Less sales follow-up" },
      { value: "5–8h", label: "Weekly time saved" },
    ],
    process: [
      {
        key: "research",
        title: "Research",
        body: "I reviewed the email-based shipment journey with product and operations, identifying the handoffs and unclear tasks that created manual coordination.",
      },
      {
        key: "ideation",
        title: "Ideation",
        body: "I translated operational needs into clearer self-service tasks, aligning the proposed direction with product, operations, and engineering.",
      },
      {
        key: "wireframes",
        title: "Wireframes",
        body: "I mapped booking, quote, and payment flows into a cohesive journey, using wireframes and prototypes to make the steps easier to understand.",
      },
      {
        key: "ui",
        title: "UI Design",
        body: "The delivered experience gave customers a clearer, self-service route through core shipment tasks and established reusable patterns for future ODDA features.",
      },
    ],
    beforeAfter: {
      before: "An email-driven journey with unclear ownership and manual back-and-forth.",
      after: "A self-service journey for booking, quote requests, and payments.",
    },
    outcome:
      "The self-service direction reduced manual coordination by approximately 25%. Digitised quote and payment flows reduced sales follow-ups by an estimated 15%, while the new onboarding approach was estimated to lift activation by 20–30%.",
    gallery: [
      "https://images.unsplash.com/photo-1644143153646-f36282dfb953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1720135885007-454165745e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    ],
  },
  {
    slug: "odda-booking",
    title: "ODDA — Simplifying the booking workflow",
    shortTitle: "ODDA Booking",
    tags: ["Logistics", "Workflow"],
    disciplines: ["Product Design", "UX Research"],
    status: "Shipped",
    year: "2024",
    industry: "Logistics",
    accent: "linear-gradient(135deg, #CFFF72, #CFFF72)",
    cover: img(
      "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
    ),
    summary:
      "The original booking journey made quote submission unnecessarily hard to understand and complete. I redesigned it into four structured stages with clearer tasks and progress.",
    role: "UI/UX Designer",
    timeline: "2024–Present",
    team: "Product · Operations · Engineering",
    cardOutcome: "7+ steps reduced to 4 stages",
    problem:
      "The ODDA booking flow had more than seven steps and mixed unrelated decisions together. Customers lacked a clear sense of progress, making it easy to hesitate or leave before submitting a quote request.",
    task:
      "I mapped the customer journey and prioritised a task-based flow that operations and engineering could deliver. The goal was to create structure without adding complexity, then validate that structure through research and usability testing.",
    metrics: [
      { value: "7+ → 4", label: "Booking stages" },
      { value: "10–15%", label: "Estimated drop-off reduction" },
      { value: "20–30%", label: "Estimated activation lift" },
      { value: "UX", label: "Research validated" },
    ],
    process: [
      {
        key: "research",
        title: "Research",
        body: "I used UX research and usability testing to identify where the booking sequence was unclear and which choices should be grouped together.",
      },
      {
        key: "ideation",
        title: "Ideation",
        body: "I worked closely with product and operations to shape a task-based sequence around the decisions customers need to make.",
      },
      {
        key: "wireframes",
        title: "Wireframes",
        body: "I prototyped four structured stages, giving each stage a focused purpose and a visible sense of progress.",
      },
      {
        key: "ui",
        title: "UI Design",
        body: "I designed the final web flow around clarity, readable hierarchy, and components that could be consistently implemented by engineering.",
      },
    ],
    beforeAfter: {
      before: "A 7+ step booking workflow that made quote submission harder than it needed to be.",
      after: "A four-stage booking journey with clear tasks and progress.",
    },
    outcome:
      "The redesigned booking journey uses four structured stages instead of 7+ steps. It was estimated to reduce quote-submission drop-off by 10–15% and helped make activation easier for new users.",
    gallery: [
      "https://images.unsplash.com/photo-1584291527908-033f4d6542c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    ],
  },
  {
    slug: "intercargo-design-system",
    title: "Intercargo — A scalable Figma design system",
    shortTitle: "Intercargo System",
    tags: ["Design System", "UI Design"],
    disciplines: ["Design Systems", "UI Design"],
    status: "In Review",
    year: "2025",
    industry: "Logistics / Design System",
    accent: "linear-gradient(135deg, #5E67E6, #5E67E6)",
    cover: img(
      "https://images.unsplash.com/photo-1714548529197-537c1f0b6aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
    ),
    summary:
      "To keep the ODDA product coherent as it grew, I created a reusable Figma design system with 200+ components and shared patterns for the team.",
    role: "UI/UX Designer",
    timeline: "2024–Present",
    team: "Product · Engineering",
    cardOutcome: "200+ reusable components",
    problem:
      "As ODDA expanded, repeated UI decisions and inconsistent patterns made it harder to maintain a coherent product experience and slowed new feature design.",
    task:
      "I created a reusable Figma-based system with foundations, components, and reusable patterns. The system needed to support both product quality and faster collaboration with engineering as features evolved.",
    metrics: [
      { value: "200+", label: "Reusable components" },
      { value: "15–20%", label: "Faster feature design" },
      { value: "1", label: "Shared Figma library" },
      { value: "UX", label: "Consistent patterns" },
    ],
    process: [
      {
        key: "research",
        title: "Research",
        body: "I audited the growing product library to identify patterns that could be standardised and reused across core ODDA workflows.",
      },
      {
        key: "ideation",
        title: "Ideation",
        body: "I defined reusable foundations and component patterns in Figma so design decisions could be made once and applied consistently.",
      },
      {
        key: "wireframes",
        title: "Foundations",
        body: "I built the library from core foundations into documented components, designing for repeatable use across web and mobile surfaces.",
      },
      {
        key: "ui",
        title: "UI Design",
        body: "The reusable Figma library gave product and engineering a shared reference for designing and delivering new ODDA features.",
      },
    ],
    beforeAfter: {
      before: "Repeated patterns and inconsistent interface decisions across evolving product work.",
      after: "A reusable Figma system with 200+ components and shared patterns.",
    },
    outcome:
      "The resulting Figma library contains 200+ reusable components. It reduced UI inconsistency and accelerated new feature design delivery by an estimated 15–20%.",
    gallery: [
      "https://images.unsplash.com/photo-1676354201012-0ca201c52490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      "https://images.unsplash.com/photo-1729258882260-1c33b6c5b183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    ],
  },
];

export const expertise = [
  {
    title: "Product Strategy",
    body: "Partnering with founders and PMs to frame the problem, connect design to business goals, and prioritise what actually moves the numbers.",
  },
  {
    title: "Product Discovery",
    body: "Turning ambiguous problems into validated opportunities through research, hypotheses, and rapid, testable bets.",
  },
  {
    title: "UX Research",
    body: "Interviews, usability testing, and data analysis that replace opinion with evidence before a pixel is drawn.",
  },
  {
    title: "Design Systems",
    body: "Token-driven component libraries and governance that let quality compound and teams ship faster.",
  },
  {
    title: "Cross-functional Collaboration",
    body: "Working shoulder-to-shoulder with engineering, product, and stakeholders to ship the right thing, together.",
  },
  {
    title: "Problem Solving",
    body: "Structured design thinking that untangles complex, multi-stakeholder problems into clear, decisive solutions.",
  },
];

// Grouped, authentic skill set for the Skills & Expertise section
export type SkillGroup = "Strategy" | "Craft" | "Collaboration" | "AI";
export const skills: { name: string; group: SkillGroup }[] = [
  { name: "Product Strategy", group: "Strategy" },
  { name: "Product Discovery", group: "Strategy" },
  { name: "Data-informed Design", group: "Strategy" },
  { name: "Design Thinking", group: "Strategy" },
  { name: "UX Research", group: "Craft" },
  { name: "Rapid Prototyping", group: "Craft" },
  { name: "Design Systems", group: "Craft" },
  { name: "Design QA", group: "Craft" },
  { name: "Cross-functional Collaboration", group: "Collaboration" },
  { name: "Workshop Facilitation", group: "Collaboration" },
  { name: "AI-assisted Design", group: "AI" },
  { name: "AI Workflow Integration", group: "AI" },
];
export const skillGroups: SkillGroup[] = ["Strategy", "Craft", "Collaboration", "AI"];

export const tools = [
  "Figma",
  "FigJam",
  "Adobe XD",
  "Illustrator",
  "Photoshop",
];

// Brand logo slugs (simpleicons CDN) for each tool
export const toolLogos: Record<string, string> = {
  Figma: "figma",
  FigJam: "figma",
  "Adobe XD": "adobexd",
  Illustrator: "adobeillustrator",
  Photoshop: "adobephotoshop",
};

export const focusAreas = [
  "SaaS Platforms",
  "Logistics",
  "Logistics",
  "Mobile Apps",
  "Design Systems",
  "B2B Tools",
];

export const toolkit = [
  "Figma",
  "FigJam",
  "Adobe XD",
  "Protopie",
  "Framer",
  "Notion",
  "Jira",
  "Maze",
];

export const processOverview = [
  { label: "Discover → Research → Define", color: "#5E67E6" },
  { label: "Ideate → Wireframe → Prototype", color: "#CFFF72" },
  { label: "Test → Refine → Ship", color: "#5E67E6" },
];

export const testimonials = [] as { quote: string; name: string; title: string; initial: string; color: string }[];

export const experience = [
  {
    period: "Nov 2024 — Present",
    role: "Product Designer",
    company: "Intercargo — Logistics Simplified",
    body: "Leading end-to-end product design for ODDA, turning a manual email-based shipment process into a self-service platform — cutting manual coordination ~25%, lifting new-user activation 20–30%, and building a 200+ component Figma design system.",
  },
  {
    period: "Jan 2022 — Nov 2024",
    role: "Product Designer",
    company: "RZ Technologies",
    body: "Owned discovery-to-delivery across products like Gamersplay, Autocraft Japan, TastyGo, and Loggy — translating business goals into user flows, prototypes, and shipped interfaces that measurably improved client outcomes.",
  },
  {
    period: "Aug 2021",
    role: "BSc Computer Science",
    company: "Kohat University of Science & Technology",
    body: "Graduated with a foundation in computer science, then channelled it into product and interface design across mobile and web.",
  },
];

export const philosophy = [
  {
    title: "Clarity over cleverness",
    body: "The best interface is the one users never have to think about. I optimise for the obvious.",
  },
  {
    title: "Evidence over opinion",
    body: "Every meaningful decision is backed by research, data, or a testable hypothesis — never just taste.",
  },
  {
    title: "Systems, not screens",
    body: "I design reusable foundations so quality compounds and teams move faster over time.",
  },
];

export const disciplineFilters: ("All" | Discipline | "UI Design")[] = [
  "All",
  "UX Research",
  "Product Design",
  "UI Design",
  "Design Systems",
  "Interaction Design",
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
