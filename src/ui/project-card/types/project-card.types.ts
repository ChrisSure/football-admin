export type Project = {
  id: number;
  title: string;
  description: string;
  status: string;
  created: string;
  updated: string;
};

export type ProjectCardProps = {
  project: Project;
  onClick?: (project: Project) => void;
  className?: string;
};
