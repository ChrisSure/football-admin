import type { Consumer } from "../../consumers/types/consumers.types.ts";

export type ProjectSource = {
  id: number;
  title: string;
  url: string;
  key: string;
  status: string;
  created: string;
  updated: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  status: string;
  created: string;
  updated: string;
  sources: ProjectSource[];
  consumers?: Consumer[];
};

export type ProjectResponse = Project;

export type ProjectSourcesProps = {
  projectId: number;
  sources: ProjectSource[];
};
