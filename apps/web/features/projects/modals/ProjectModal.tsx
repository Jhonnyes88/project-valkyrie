"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import ProjectForm from "../forms/ProjectForm";
import {
  ProjectColor,
  ProjectStatus,
} from "../types/project";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  onCreateProject: (data: {
    name: string;
    description: string;
    status: ProjectStatus;
    color: ProjectColor;
  }) => void;
}

/**
 * ProjectModal
 *
 * Reusable modal used to create and edit projects.
 *
 * Responsibilities:
 * - Display the project form.
 * - Handle open/close state.
 * - Delegate form submission to the parent.
 */
export default function ProjectModal({
  open,
  onClose,
  onCreateProject,
}: ProjectModalProps) {
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Nuevo proyecto
          </AlertDialogTitle>
        </AlertDialogHeader>

        <ProjectForm
          onCancel={onClose}
          onSubmit={onCreateProject}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
}