import { ProjectRepository } from "./ProjectRepository";
import { Project } from "../types/project";

const STORAGE_KEY = "valkyrie_projects";

export class LocalStorageProjectRepository
  implements ProjectRepository
{
  async getAll(): Promise<Project[]> {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    const projects = JSON.parse(data) as Array<
      Omit<Project, "createdAt" | "updatedAt"> & {
        createdAt: string;
        updatedAt: string;
      }
    >;

    return projects.map((project) => ({
      ...project,
      createdAt: new Date(project.createdAt),
      updatedAt: new Date(project.updatedAt),
    }));
  }

  async create(project: Project): Promise<void> {
    const projects = await this.getAll();

    projects.push(project);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }

  async update(project: Project): Promise<void> {
    const projects = await this.getAll();

    const updatedProjects = projects.map((currentProject) =>
      currentProject.id === project.id ? project : currentProject
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProjects));
  }

  async delete(id: string): Promise<void> {
    const projects = await this.getAll();

    const filteredProjects = projects.filter(
      (project) => project.id !== id
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredProjects));
  }
}