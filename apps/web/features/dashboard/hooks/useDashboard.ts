import { useMemo } from "react";

import { useCharacters } from "@/features/characters/hooks/useCharacters";
import { useProjects } from "@/features/projects/hooks/useProjects";
import { LocalStorageProjectRepository } from "@/features/projects/repositories/LocalStorageProjectRepository";

export function useDashboard() {
  const {
    characters,
  } = useCharacters();

  const repository = useMemo(
    () => new LocalStorageProjectRepository(),
    [],
  );

  const {
    projects,
  } = useProjects(repository);

  const projectNames = useMemo(
    () =>
      projects.reduce<Record<string, string>>(
        (accumulator, project) => {
          accumulator[project.id] = project.name;
          return accumulator;
        },
        {},
      ),
    [projects],
  );

  return {
    totalCharacters: characters.length,
    totalProjects: projects.length,

    recentCharacters: [...characters]
      .sort(
        (a, b) =>
          b.createdAt.getTime() -
          a.createdAt.getTime(),
      )
      .slice(0, 5),

    recentProjects: [...projects]
      .sort(
        (a, b) =>
          b.createdAt.getTime() -
          a.createdAt.getTime(),
      )
      .slice(0, 5),

    projectNames,

    characters,
    projects,
  };
}