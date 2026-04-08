export type Project = {
  id: number;
  title: string;
  description: string;
  status: string;
  created: string;
  updated: string;
};

export type User = {
  id: number;
  name: string;
  status: string;
  created: string;
  updated: string;
  projects: Project[];
};

export type UserProjectsResponse = User;
