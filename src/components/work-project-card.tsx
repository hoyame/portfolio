"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  CATEGORY_LABELS,
  STATUS_LABELS,
  flattenStack,
  formatPeriod,
  isSpotlight,
  type Project,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const STATUS_STYLES: Record<Project["status"], string> = {
  production:
    "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  livre: "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-400",
  "dev-actif":
    "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  prototype:
    "border-violet-500/40 bg-violet-500/10 text-violet-700 dark:text-violet-400",
  archive: "border-muted-foreground/30 bg-muted text-muted-foreground",
};

export function WorkProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const spotlight = isSpotlight(project);
  const stack = flattenStack(project.stack).slice(0, spotlight ? 12 : 8);

  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border p-4 transition-all duration-300 ease-out hover:shadow-lg",
        spotlight && "border-foreground/25 bg-muted/30 shadow-sm"
      )}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full flex-col gap-2 text-left"
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold leading-none">
                {project.name}
              </h3>
              <span
                className={cn(
                  "rounded-full border px-2 py-0.5 text-[10px] font-medium",
                  STATUS_STYLES[project.status]
                )}
              >
                {STATUS_LABELS[project.status]}
              </span>
              {spotlight ? (
                <span className="rounded-full bg-foreground px-2 py-0.5 text-[10px] font-medium text-background">
                  Projet phare
                </span>
              ) : (
                project.featured && (
                  <span className="rounded-full border border-foreground/20 px-2 py-0.5 text-[10px] font-medium">
                    Sélection
                  </span>
                )
              )}
            </div>
            <p className="text-xs text-muted-foreground">{project.tagline}</p>
          </div>
          <ChevronRightIcon
            className={cn(
              "size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-300",
              expanded && "rotate-90"
            )}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-muted-foreground">
          <time>{formatPeriod(project.period)}</time>
          <span>·</span>
          <span>{CATEGORY_LABELS[project.category]}</span>
          <span>·</span>
          <span>{project.domain}</span>
        </div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          expanded
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 text-xs text-muted-foreground">
            <p className="text-pretty">{project.summary}</p>

            {project.specifications && project.specifications.length > 0 && (
              <div className="space-y-1">
                <p className="font-medium text-foreground">
                  Caractéristiques techniques
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.specifications.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-md border border-dashed px-1.5 py-0.5 text-[10px]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-1">
                <p className="font-medium text-foreground">Points clés</p>
                <ul className="list-disc space-y-1 pl-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="space-y-1">
                <p className="font-medium text-foreground">Fonctionnalités</p>
                <ul className="list-disc space-y-1 pl-4">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <p>
              <span className="font-medium text-foreground">Rôle : </span>
              {project.role}
            </p>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-foreground underline underline-offset-2"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {stack.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {stack.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="px-1.5 py-0 text-[10px] font-normal"
            >
              {item}
            </Badge>
          ))}
        </div>
      )}
    </Card>
  );
}
