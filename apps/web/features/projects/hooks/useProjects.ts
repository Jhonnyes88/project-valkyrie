import { useCallback, useEffect, useState } from "react";
import { LocalStorageProjectRepository } from "@/features/projects/repositories/LocalStorageProjectRepository";

import { Project } from "../types/project";
import { ProjectRepository } from "../repositories/ProjectRepository";

export function useProjects(repository: ProjectRepository) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProjects = useCallback(async () => {
    setLoading(true);

    const data = await repository.getAll();

    setProjects(data);

    setLoading(false);
  }, [repository]);

  useEffect(() => {
    void loadProjects();
  }, [loadProjects]);

  const createProject = async (project: Project) => {
    await repository.create(project);
    await loadProjects();
  };

  const updateProject = async (project: Project) => {
    await repository.update(project);
    await loadProjects();
  };

  const deleteProject = async (id: string) => {
    await repository.delete(id);
    await loadProjects();
  };

  return {
    projects,
    loading,
    createProject,
    updateProject,
    deleteProject,
    reloadProjects: loadProjects,
  };
}