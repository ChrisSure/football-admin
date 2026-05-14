import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { Project } from "../../../dashboard/types/dashboard.types.ts";

export const useActiveProjectsQuery = () => {
  return useQuery({
    queryKey: ["projects", "active"],
    queryFn: () => apiClient<Project[]>("/projects/active"),
  });
};
