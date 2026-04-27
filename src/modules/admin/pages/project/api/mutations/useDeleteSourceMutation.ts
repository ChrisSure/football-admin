import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { DeleteSourcePayload } from "../types/source.types.ts";

export const useDeleteSourceMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: DeleteSourcePayload) =>
      apiClient<void>(`/sources/${id}`, {
        method: "DELETE",
      }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["project", variables.projectId] });
    },
  });
};
