"use client";

import { useState } from "react";
import {
  AlertTriangle,
  FolderKanban,
  Trash2,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Project, ProjectColor } from "../types/project";

interface ProjectCardProps {
  project: Project;
  onSelectProject?: (project: Project) => void;
  onDeleteProject?: (project: Project) => void;
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
  onDeleteProject,
}: ProjectCardProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    onDeleteProject?.(project);
    setDeleteDialogOpen(false);
  };

  return (
    <>
      <article
        onClick={() => onSelectProject?.(project)}
        className="group cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all hover:border-slate-700 hover:shadow-lg"
      >
        <div
          className={`h-2 w-full ${colorClasses[project.color]}`}
        />

        <div className="p-5">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colorClasses[project.color]}`}
              >
                <FolderKanban className="h-5 w-5 text-white" />
              </div>

              <div>
                <h3 className="font-semibold">
                  {project.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {statusLabels[project.status]}
                </p>
              </div>
            </div>

            <button
              type="button"
              aria-label={`Eliminar proyecto ${project.name}`}
              onClick={handleDeleteClick}
              className="rounded-md p-2 text-slate-500 transition-colors hover:bg-red-500/10 hover:text-red-400"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <p className="line-clamp-3 text-sm text-slate-300">
            {project.description}
          </p>
        </div>
      </article>

      <AlertDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              ¿Eliminar proyecto?
            </AlertDialogTitle>

            <AlertDialogDescription>
              Estás a punto de eliminar{" "}
              <span className="font-medium text-slate-200">
                {project.name}
              </span>
              . Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Eliminar proyecto
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}