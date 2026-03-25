import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { LoginFormData } from "../types/login-form.types.ts";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginFormData) =>
      apiClient("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  });
};
