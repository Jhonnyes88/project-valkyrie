import { useMemo } from "react";

import { useCharacters } from "@/features/characters/hooks/useCharacters";
import { useProjects } from "@/features/projects/hooks/useProjects";
import { LocalStorageProjectRepository } from "@/features/projects/repositories/LocalStorageProjectRepository";

import { DashboardActivity } from "../types/activity";

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

    const characterCounts = useMemo(
        () =>
            characters.reduce<Record<string, number>>(
                (accumulator, character) => {
                    if (character.projectId) {
                        accumulator[character.projectId] =
                            (accumulator[character.projectId] ?? 0) + 1;
                    }

                    return accumulator;
                },
                {},
            ),
        [characters],
    );

    const recentCharacters = useMemo(
        () =>
            [...characters]
                .sort(
                    (a, b) =>
                        b.createdAt.getTime() -
                        a.createdAt.getTime(),
                )
                .slice(0, 5),
        [characters],
    );

    const recentProjects = useMemo(
        () =>
            [...projects]
                .sort(
                    (a, b) =>
                        b.createdAt.getTime() -
                        a.createdAt.getTime(),
                )
                .slice(0, 5),
        [projects],
    );

    const activities = useMemo<DashboardActivity[]>(() => {
        const characterActivities: DashboardActivity[] =
            characters.map((character) => ({
                id: `character-created-${character.id}`,
                type: "character_created",
                title: `Creaste el personaje ${character.name}`,
                description: character.projectId
                    ? projectNames[character.projectId]
                    : "Sin proyecto",
                createdAt: character.createdAt,
            }));

        const projectActivities: DashboardActivity[] =
            projects.map((project) => ({
                id: `project-created-${project.id}`,
                type: "project_created",
                title: `Creaste el proyecto ${project.name}`,
                description: project.description || "Sin descripción",
                createdAt: project.createdAt,
            }));

        return [
            ...characterActivities,
            ...projectActivities,
        ]
            .sort(
                (a, b) =>
                    b.createdAt.getTime() -
                    a.createdAt.getTime(),
            )
            .slice(0, 5);
    }, [characters, projects, projectNames]);

    return {
        totalCharacters: characters.length,
        totalProjects: projects.length,

        recentCharacters,
        recentProjects,

        projectNames,
        characterCounts,
        activities,

        characters,
        projects,
    };
}