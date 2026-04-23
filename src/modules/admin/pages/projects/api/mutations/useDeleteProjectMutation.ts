import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { DeleteProjectResponse } from "../types/projects-api.types.ts";

export const useDeleteProjectMutation = () => {
  return useMutation({
    mutationFn: (id: number) =>
      apiClient<DeleteProjectResponse>(`/projects/${id}`, {
        method: "DELETE",
      }),
  });
};
