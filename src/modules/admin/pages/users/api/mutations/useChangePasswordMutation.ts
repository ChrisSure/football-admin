import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";

export const useChangePasswordMutation = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: { newPassword: string } }) =>
      apiClient<{ message: string }>(`/users/${id}/password`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
  });
};
