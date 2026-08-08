export type ActivityType =
  | "character_created"
  | "project_created";

export interface DashboardActivity {
  id: string;
  type: ActivityType;
  title: string;
  description?: string;
  createdAt: Date;
}