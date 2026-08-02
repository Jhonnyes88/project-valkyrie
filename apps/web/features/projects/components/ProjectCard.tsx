import { FolderKanban } from "lucide-react";

import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all hover:border-slate-700 hover:shadow-lg">
      <div
        className="h-2 w-full"
        style={{ backgroundColor: project.color }}
      />

      <div className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg"
            style={{ backgroundColor: project.color }}
          >
            <FolderKanban className="h-5 w-5 text-white" />
          </div>

          <div>
            <h3 className="font-semibold">{project.name}</h3>

            <p className="text-sm text-slate-400">
              {project.status}
            </p>
          </div>
        </div>

        <p className="line-clamp-3 text-sm text-slate-300">
          {project.description}
        </p>
      </div>
    </article>
  );
}