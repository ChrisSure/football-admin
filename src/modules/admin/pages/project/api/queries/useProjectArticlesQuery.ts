import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { Article } from "../../components/project-articles/types/project-articles.types.ts";

export const useProjectArticlesQuery = (projectId: number) => {
  return useQuery({
    queryKey: ["articles", "project", projectId],
    queryFn: () => apiClient<Article[]>(`/articles/project/${projectId}`),
    enabled: !!projectId,
  });
};
