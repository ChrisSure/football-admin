import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { ProjectSource } from "../../types/project.types.ts";
import type { CreateSourcePayload } from "../types/source.types.ts";

export const useCreateSourceMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateSourcePayload) =>
      apiClient<ProjectSource>("/sources", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["project", variables.projectId] });
    },
  });
};
