export type ProjectStatus =
  | "active"
  | "paused"
  | "archived";

export type ProjectColor =
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "red"
  | "pink";

export interface Project {
  id: string;

  name: string;

  description: string;

  status: ProjectStatus;

  color: ProjectColor;

  createdAt: Date;

  updatedAt: Date;
}