import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { DeleteConsumerResponse } from "../types/consumers-api.types.ts";

export const useDeleteConsumerMutation = () => {
  return useMutation({
    mutationFn: (id: number) =>
      apiClient<DeleteConsumerResponse>(`/consumers/${id}`, {
        method: "DELETE",
      }),
  });
};
