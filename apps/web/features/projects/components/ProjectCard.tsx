import { FolderKanban } from "lucide-react";

import { Project, ProjectColor } from "../types/project";

interface ProjectCardProps {
  project: Project;
  onSelectProject?: (project: Project) => void;
}

const colorClasses: Record<ProjectColor, string> = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
  pink: "bg-pink-500",
};

const statusLabels = {
  active: "Activo",
  paused: "Pausado",
  archived: "Archivado",
};

export default function ProjectCard({
  project,
  onSelectProject,
}: ProjectCardProps) {
  return (
    <article
      onClick={() => onSelectProject?.(project)}
      className="group cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all hover:border-slate-700 hover:shadow-lg"
    >
      <div
        className={`h-2 w-full ${colorClasses[project.color]}`}
      />

      <div className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses[project.color]}`}
          >
            <FolderKanban className="h-5 w-5 text-white" />
          </div>

          <div>
            <h3 className="font-semibold">{project.name}</h3>

            <p className="text-sm text-slate-400">
              {statusLabels[project.status]}
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