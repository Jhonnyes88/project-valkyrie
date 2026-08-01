export type ProjectStatus = "draft" | "active" | "archived";

export interface Project {
  id: string;

  name: string;

  description: string;

  coverImage: string;

  status: ProjectStatus;

  createdAt: Date;

  updatedAt: Date;
}