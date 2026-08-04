"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import ProjectForm from "../forms/ProjectForm";
import {
  Project,
  ProjectColor,
  ProjectStatus,
} from "../types/project";

interface ProjectModalProps {
  open: boolean;
  project: Project | null;
  onClose: () => void;

  onCreateProject: (data: {
    name: string;
    description: string;
    status: ProjectStatus;
    color: ProjectColor;
  }) => void;

  onUpdateProject: (
    project: Project,
    data: {
      name: string;
      description: string;
      status: ProjectStatus;
      color: ProjectColor;
    },
  ) => void;
}

/**
 * ProjectModal
 *
 * Reusable modal used to create and edit projects.
 */
export default function ProjectModal({
  open,
  project,
  onClose,
  onCreateProject,
  onUpdateProject,
}: ProjectModalProps) {
  const isEditing = project !== null;

  const handleSubmit = (data: {
    name: string;
    description: string;
    status: ProjectStatus;
    color: ProjectColor;
  }) => {
    if (project) {
      onUpdateProject(project, data);
      return;
    }

    onCreateProject(data);
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={onClose}
    >
      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isEditing
              ? "Editar proyecto"
              : "Nuevo proyecto"}
          </AlertDialogTitle>
        </AlertDialogHeader>

        <ProjectForm
          project={project}
          onCancel={onClose}
          onSubmit={handleSubmit}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
}