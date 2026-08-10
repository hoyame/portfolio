"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { WorkProjectCard } from "@/components/work-project-card";
import {
  CATEGORIES,
  CATEGORY_LABELS,
  SORTED_PROJECTS,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const INITIAL_COUNT = 6;

export function ProjectsSection({ delay = 0 }: { delay?: number }) {
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () =>
      category === "all"
        ? SORTED_PROJECTS
        : SORTED_PROJECTS.filter((project) => project.category === category),
    [category]
  );

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={delay}>
        <h2 className="text-xl font-bold">Projets</h2>
      </BlurFade>

      <BlurFade delay={delay + 0.04}>
        <p className="text-sm text-muted-foreground">
          {SORTED_PROJECTS.length} projets réalisés entre 2024 et 2026 —
          plateformes SaaS, applications métier, outils en ligne de commande,
          mobile et interfaces de jeu. Cliquez sur un projet pour le détail.
        </p>
      </BlurFade>

      <BlurFade delay={delay + 0.08}>
        <div className="flex flex-wrap gap-1">
          <FilterChip
            active={category === "all"}
            onClick={() => setCategory("all")}
          >
            Tous
          </FilterChip>
          {CATEGORIES.map((item) => (
            <FilterChip
              key={item}
              active={category === item}
              onClick={() => {
                setCategory(item);
                setShowAll(false);
              }}
            >
              {CATEGORY_LABELS[item]}
            </FilterChip>
          ))}
        </div>
      </BlurFade>

      <div className="flex flex-col gap-y-3">
        {visible.map((project, id) => (
          <BlurFade key={project.slug} delay={delay + 0.12 + id * 0.03}>
            <WorkProjectCard project={project} />
          </BlurFade>
        ))}
      </div>

      {filtered.length > INITIAL_COUNT && (
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="mx-auto rounded-full border px-4 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
        >
          {showAll
            ? "Réduire"
            : `Voir les ${filtered.length - INITIAL_COUNT} autres projets`}
        </button>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-colors",
        active
          ? "border-foreground bg-foreground text-background"
          : "text-muted-foreground hover:bg-muted"
      )}
    >
      {children}
    </button>
  );
}
