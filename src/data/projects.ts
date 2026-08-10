import projectsData from "./projects.json";

export type ProjectCategory =
  | "saas"
  | "app-metier"
  | "site-web"
  | "outil-cli"
  | "mobile"
  | "gaming"
  | "infrastructure"
  | "creatif";

export type ProjectStatus =
  | "production"
  | "livre"
  | "dev-actif"
  | "prototype"
  | "archive";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  domain: string;
  summary: string;
  period: { start: string; end: string; durationMonths: number };
  status: ProjectStatus;
  originality: "original" | "derive-template" | "genere-lowcode";
  role: string;
  metrics?: Record<string, number>;
  stack?: Record<string, string | string[]>;
  specifications?: string[];
  features?: string[];
  learnings?: string[];
  client?: string;
  links?: { label: string; url: string }[];
  highlights?: string[];
  integrations?: string[];
  tags: string[];
  featured: boolean;
  license?: string;
  repository?: {
    host: string;
    owner?: string;
    name?: string;
    private: boolean;
  };
}

export const PROJECTS = projectsData.projects as unknown as Project[];

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  saas: "SaaS",
  "app-metier": "Application métier",
  "site-web": "Site web",
  "outil-cli": "Outil CLI",
  mobile: "Mobile",
  gaming: "Gaming",
  infrastructure: "Infrastructure",
  creatif: "Créatif",
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  production: "En production",
  livre: "Livré",
  "dev-actif": "En développement",
  prototype: "Prototype",
  archive: "Archivé",
};

const MONTHS = [
  "janv.",
  "févr.",
  "mars",
  "avr.",
  "mai",
  "juin",
  "juil.",
  "août",
  "sept.",
  "oct.",
  "nov.",
  "déc.",
];

function formatMonth(value: string) {
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

export function formatPeriod(period: Project["period"]) {
  const start = formatMonth(period.start);
  const end = formatMonth(period.end);
  return start === end ? start : `${start} – ${end}`;
}

export function flattenStack(stack: Project["stack"]) {
  if (!stack) return [];
  const values = Object.values(stack).flatMap((value) =>
    Array.isArray(value) ? value : [value]
  );
  return Array.from(new Set(values));
}

export const CATEGORIES = Array.from(
  new Set(PROJECTS.map((project) => project.category))
);

export const SPOTLIGHT_SLUGS = [
  "baraka-food",
  "tbd-chauffeurs",
  "manager",
  "hoxtio-commercials",
  "blvck-studio-app",
  "ncb-scrpt",
];

export function isSpotlight(project: Project) {
  return SPOTLIGHT_SLUGS.includes(project.slug);
}

export const SORTED_PROJECTS = [...PROJECTS].sort((a, b) => {
  const spotlightA = SPOTLIGHT_SLUGS.indexOf(a.slug);
  const spotlightB = SPOTLIGHT_SLUGS.indexOf(b.slug);
  if (spotlightA !== -1 || spotlightB !== -1) {
    if (spotlightA === -1) return 1;
    if (spotlightB === -1) return -1;
    return spotlightA - spotlightB;
  }
  if (a.featured !== b.featured) return a.featured ? -1 : 1;
  return b.period.end.localeCompare(a.period.end);
});
