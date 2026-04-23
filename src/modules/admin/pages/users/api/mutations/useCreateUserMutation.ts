import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { CreateUserFormData } from "../../forms/create-user-form/types/create-user-form.types.ts";
import type { CreateUserResponse } from "../types/users-api.types.ts";

export const useCreateUserMutation = () => {
  return useMutation({
    mutationFn: (data: Omit<CreateUserFormData, "repeatPassword" | "projects"> & { projectIds?: number[] }) =>
      apiClient<CreateUserResponse>("/users", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  });
};
