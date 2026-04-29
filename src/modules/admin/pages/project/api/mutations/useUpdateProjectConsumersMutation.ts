import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { ProjectResponse } from "../../types/project.types.ts";

export const useUpdateProjectConsumersMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      projectId,
      consumerIds,
    }: {
      projectId: number;
      consumerIds: number[];
    }) =>
      apiClient<ProjectResponse>(`/projects/${projectId}`, {
        method: "PATCH",
        body: JSON.stringify({ consumerIds }),
      }),
    onSuccess: (_, { projectId }) => {
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
    },
  });
};
