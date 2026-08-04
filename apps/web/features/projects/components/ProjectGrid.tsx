import ProjectCard from "./ProjectCard";

import { Project } from "../types/project";

interface ProjectGridProps {
  projects: Project[];
  onSelectProject?: (project: Project) => void;
}

export default function ProjectGrid({
  projects,
  onSelectProject,
}: ProjectGridProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onSelectProject={onSelectProject}
        />
      ))}
    </section>
  );
}