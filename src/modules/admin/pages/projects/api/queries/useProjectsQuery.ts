import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { ProjectsResponse } from "../../types/projects.types.ts";

export const useProjectsQuery = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () => apiClient<ProjectsResponse>("/projects"),
  });
};
