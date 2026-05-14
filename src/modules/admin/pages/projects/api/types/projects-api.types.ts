import type { Project } from "../../../dashboard/types/dashboard.types.ts";

export interface CreateProjectResponse {
  message: string;
  project: Project;
}

export interface DeleteProjectResponse {
  message: string;
}
