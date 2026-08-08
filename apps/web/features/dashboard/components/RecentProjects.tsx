import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";

import { Project } from "@/features/projects/types/project";

interface RecentProjectsProps {
  projects: Project[];
  characterCounts: Record<string, number>;
}

export default function RecentProjects({
  projects,
  characterCounts,
}: RecentProjectsProps) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-fuchsia-500/10 p-2.5">
              <FolderKanban className="text-fuchsia-400" size={20} />
            </div>

            <h2 className="text-lg font-semibold text-white">
              Proyectos recientes
            </h2>
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Los últimos proyectos creados en Valkyrie Studio.
          </p>
        </div>

        <Link
          href="/projects"
          className="hidden items-center gap-2 text-sm font-semibold text-fuchsia-400 transition hover:text-fuchsia-300 sm:flex"
        >
          Ver todos
          <ArrowRight size={16} />
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-700 bg-slate-950/40 p-7 text-center">
          <p className="text-sm text-slate-400">
            Aún no has creado proyectos.
          </p>

          <Link
            href="/projects"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-400 hover:text-fuchsia-300"
          >
            Crear proyecto
            <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div className="mt-6 divide-y divide-slate-800/70">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0"
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
                style={{
                  backgroundColor: project.color,
                }}
              >
                <FolderKanban size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-white">
                  {project.name}
                </p>

                <p className="mt-1 truncate text-sm text-slate-400">
                  {project.description || "Sin descripción"}
                </p>
              </div>

              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-slate-300">
                  {characterCounts[project.id] ?? 0}{" "}
                  {characterCounts[project.id] === 1
                    ? "personaje"
                    : "personajes"}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {project.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link
        href="/projects"
        className="mt-5 flex items-center justify-center gap-2 border-t border-slate-800/70 pt-4 text-sm font-semibold text-fuchsia-400 transition hover:text-fuchsia-300 sm:hidden"
      >
        Ver todos los proyectos
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}