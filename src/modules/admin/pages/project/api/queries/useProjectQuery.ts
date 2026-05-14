import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { ProjectResponse } from "../../types/project.types.ts";

export const useProjectQuery = (projectId: number) => {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: () => apiClient<ProjectResponse>(`/projects/${projectId}`),
    enabled: !!projectId,
  });
};
