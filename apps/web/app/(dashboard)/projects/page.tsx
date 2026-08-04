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
    updateProject,
  } = useProjects(repository);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

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
    setSelectedProject(null);

    toast.success("Proyecto creado correctamente.");
  };

  const handleUpdateProject = async (
    project: Project,
    data: {
      name: string;
      description: string;
      status: ProjectStatus;
      color: ProjectColor;
    },
  ) => {
    await updateProject({
      ...project,
      ...data,
      updatedAt: new Date(),
    });

    setModalOpen(false);
    setSelectedProject(null);

    toast.success("Proyecto actualizado correctamente.");
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleOpenCreateModal = () => {
    setSelectedProject(null);
    setModalOpen(true);
  };

  return (
    <>
      <ProjectToolbar
        search={search}
        onSearchChange={setSearch}
        onCreateProject={handleOpenCreateModal}
      />

      {filteredProjects.length === 0 ? (
        <EmptyState
          icon={<FolderKanban className="h-10 w-10" />}
          title="Aún no has creado proyectos"
          description="Crea tu primer proyecto para organizar personajes, recursos y contenido."
          actionLabel="Crear proyecto"
          onAction={handleOpenCreateModal}
        />
      ) : (
        <ProjectGrid
          projects={filteredProjects}
          onSelectProject={handleSelectProject}
        />
      )}

      <ProjectModal
        open={modalOpen}
        project={selectedProject}
        onClose={() => {
          setModalOpen(false);
          setSelectedProject(null);
        }}
        onCreateProject={handleCreateProject}
        onUpdateProject={handleUpdateProject}
      />
    </>
  );
}