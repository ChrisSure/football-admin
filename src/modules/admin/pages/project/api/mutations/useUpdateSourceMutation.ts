import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { ProjectSource } from "../../types/project.types.ts";
import type { UpdateSourcePayload } from "../types/source.types.ts";

export const useUpdateSourceMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...data }: UpdateSourcePayload) => {
      return apiClient<ProjectSource>(`/sources/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["project", variables.projectId] });
    },
  });
};
