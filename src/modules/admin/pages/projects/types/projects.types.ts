import type { Project } from "../../dashboard/types/dashboard.types.ts";

export type ProjectsResponse = Project[];

export interface CreateProjectResponse {
  message: string;
  project: Project;
}
