import { PrintButton } from "@/components/print-button";
import { DATA } from "@/data/resume";
import {
  CATEGORY_LABELS,
  SORTED_PROJECTS,
  STATUS_LABELS,
  flattenStack,
  formatPeriod,
  isSpotlight,
  type Project,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: `CV de ${DATA.name}`,
  robots: { index: false, follow: false },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 break-after-avoid border-b pb-1 text-[13px] font-bold uppercase tracking-wide">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  const spotlight = isSpotlight(project);
  const stack = flattenStack(project.stack).slice(0, spotlight ? 14 : 10);
  return (
    <div className={cn("mb-3", spotlight && "border-l-2 pl-3")}>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[12px] font-semibold">
          {project.name}
          <span className="font-normal text-muted-foreground">
            {" "}
            — {project.tagline}
          </span>
        </p>
        <span className="shrink-0 text-[10px] tabular-nums text-muted-foreground">
          {formatPeriod(project.period)}
        </span>
      </div>
      <p className="text-[10px] text-muted-foreground">
        {CATEGORY_LABELS[project.category]} · {project.domain} ·{" "}
        {STATUS_LABELS[project.status]}
      </p>
      <p className="mt-0.5 text-pretty text-[11px] leading-snug text-muted-foreground">
        {project.summary}
      </p>
      {project.specifications && project.specifications.length > 0 && (
        <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
          <span className="font-medium text-foreground">Technique : </span>
          {project.specifications.join(" · ")}
        </p>
      )}
      {spotlight ? (
        <>
          {project.features && project.features.length > 0 && (
            <div className="mt-1">
              <p className="text-[10px] font-medium">Fonctionnalités</p>
              <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-[11px] leading-snug text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-1">
              <p className="text-[10px] font-medium">Points clés</p>
              <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-[11px] leading-snug text-muted-foreground">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        project.featured &&
        project.highlights && (
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[11px] leading-snug text-muted-foreground">
            {project.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )
      )}
      {stack.length > 0 && (
        <p className="mt-1 text-[10px] text-muted-foreground">
          <span className="font-medium text-foreground">Stack : </span>
          {stack.join(" · ")}
        </p>
      )}
      {project.links && project.links.length > 0 && (
        <p className="mt-0.5 text-[10px] text-muted-foreground">
          {project.links
            .map((link) => `${link.label} — ${link.url}`)
            .join(" · ")}
        </p>
      )}
    </div>
  );
}

export default function CvPage() {
  const spotlightProjects = SORTED_PROJECTS.filter(isSpotlight);
  const otherProjects = SORTED_PROJECTS.filter(
    (project) => !isSpotlight(project),
  );
  const socials = Object.values(DATA.contact.social).filter(
    (social) => social.url && !social.url.startsWith("mailto"),
  );

  return (
    <main className="cv-page mx-auto w-full max-w-3xl text-foreground">
      <PrintButton />

      <header className="break-inside-avoid">
        <h1 className="text-2xl font-bold tracking-tight">{DATA.name}</h1>
        <p className="mt-1 text-[12px] text-muted-foreground">
          {DATA.description}
        </p>
        <p className="mt-1.5 text-[11px] text-muted-foreground">
          {DATA.location} · {DATA.contact.email}
        </p>
        <p className="text-[11px] text-muted-foreground">
          {socials.map((social) => social.url.replace("https://", "")).join(" · ")}
        </p>
      </header>

      <Section title="Profil">
        <p className="text-pretty text-[11px] leading-snug text-muted-foreground">
          {DATA.summary}
        </p>
      </Section>

      <Section title="Compétences techniques">
        <p className="text-[11px] leading-snug text-muted-foreground">
          {DATA.skills.join(" · ")}
        </p>
      </Section>

      <Section title="Stack technique">
        <div className="space-y-1">
          {DATA.techStack.map((group) => (
            <p
              key={group.label}
              className="text-[11px] leading-snug text-muted-foreground"
            >
              <span className="font-medium text-foreground">
                {group.label} :{" "}
              </span>
              {group.items.join(" · ")}
            </p>
          ))}
        </div>
      </Section>

      <Section title="Compétences transverses">
        <p className="text-[11px] leading-snug text-muted-foreground">
          {DATA.softSkills.join(" · ")}
        </p>
      </Section>

      <Section title="Langues">
        <p className="text-[11px] leading-snug text-muted-foreground">
          {DATA.langages.join(" · ")}
        </p>
      </Section>

      <Section title={`Projets principaux (${spotlightProjects.length})`}>
        {spotlightProjects.map((project) => (
          <ProjectEntry key={project.slug} project={project} />
        ))}
      </Section>

      <Section title={`Autres projets (${otherProjects.length})`}>
        {otherProjects.map((project) => (
          <ProjectEntry key={project.slug} project={project} />
        ))}
      </Section>

    </main>
  );
}
