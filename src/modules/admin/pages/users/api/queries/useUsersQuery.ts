import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { UsersResponse } from "../types/users-api.types.ts";

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => apiClient<UsersResponse>("/users"),
  });
};
