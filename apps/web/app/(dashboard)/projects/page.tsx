"use client";

import { useMemo, useState } from "react";
import { FolderKanban } from "lucide-react";
import { toast } from "sonner";

import EmptyState from "@/components/common/EmptyState";

import ProjectGrid from "@/features/projects/components/ProjectGrid";
import ProjectToolbar from "@/features/projects/components/ProjectToolbar";
import ProjectModal from "@/features/projects/modals/ProjectModal";

import { useProjects } from "@/features/projects/hooks/useProjects";
import { useProjectSearch } from "@/features/projects/hooks/useProjectSearch";

import {
  Project,
  ProjectColor,
  ProjectStatus,
} from "@/features/projects/types/project";

import { LocalStorageProjectRepository } from "@/features/projects/repositories/LocalStorageProjectRepository";

export default function ProjectsPage() {
  const repository = useMemo(
    () => new LocalStorageProjectRepository(),
    [],
  );

  const {
    projects,
    createProject,
  } = useProjects(repository);

  const [modalOpen, setModalOpen] = useState(false);

  const {
    search,
    setSearch,
    filteredProjects,
  } = useProjectSearch(projects);

  const handleCreateProject = async (data: {
    name: string;
    description: string;
    status: ProjectStatus;
    color: ProjectColor;
  }) => {
    const project: Project = {
      id: crypto.randomUUID(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await createProject(project);

    setModalOpen(false);

    toast.success("Proyecto creado correctamente.");
  };

  return (
    <>
      <ProjectToolbar
        search={search}
        onSearchChange={setSearch}
        onCreateProject={() => setModalOpen(true)}
      />

      {filteredProjects.length === 0 ? (
        <EmptyState
          icon={<FolderKanban className="h-10 w-10" />}
          title="Aún no has creado proyectos"
          description="Crea tu primer proyecto para organizar personajes, recursos y contenido."
          actionLabel="Crear proyecto"
          onAction={() => setModalOpen(true)}
        />
      ) : (
        <ProjectGrid projects={filteredProjects} />
      )}

      <ProjectModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreateProject={handleCreateProject}
      />
    </>
  );
}