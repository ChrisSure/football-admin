import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { LoginFormData } from "../../forms/login-form/types/login-form.types.ts";
import type { LoginResponse } from "@core/auth/types/auth.types.ts";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginFormData) =>
      apiClient<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  });
};
