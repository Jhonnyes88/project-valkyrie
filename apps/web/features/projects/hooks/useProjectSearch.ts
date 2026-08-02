"use client";

import { useMemo, useState } from "react";

import { Project } from "../types/project";

export function useProjectSearch(projects: Project[]) {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return projects;
    }

    return projects.filter((project) => {
      return (
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
      );
    });
  }, [projects, search]);

  return {
    search,
    setSearch,
    filteredProjects,
  };
}