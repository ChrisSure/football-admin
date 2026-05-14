import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { DeleteUserResponse } from "../types/users-api.types.ts";

export const useDeleteUserMutation = () => {
  return useMutation({
    mutationFn: (id: number) =>
      apiClient<DeleteUserResponse>(`/users/${id}`, {
        method: "DELETE",
      }),
  });
};
