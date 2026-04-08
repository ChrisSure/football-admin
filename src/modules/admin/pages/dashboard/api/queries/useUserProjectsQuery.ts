import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { UserProjectsResponse } from "../../types/dashboard.types.ts";

export const useUserProjectsQuery = (userId: number) => {
  return useQuery({
    queryKey: ["user-projects", userId],
    queryFn: () => apiClient<UserProjectsResponse>(`/users/${userId}`),
    enabled: !!userId,
  });
};
