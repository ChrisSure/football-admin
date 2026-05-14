export type Article = {
  id: number;
  title: string;
  image: string;
  status: string;
  created: string;
};

export interface ProjectArticlesProps {
  projectId: number;
}
