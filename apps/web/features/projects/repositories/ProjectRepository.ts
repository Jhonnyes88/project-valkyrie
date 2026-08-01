import { Project } from "../types/project";

export interface ProjectRepository {
  getAll(): Promise<Project[]>;

  create(project: Project): Promise<void>;

  update(project: Project): Promise<void>;

  delete(id: string): Promise<void>;
}