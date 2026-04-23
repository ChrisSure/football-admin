import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { CreateProjectFormData } from "../../forms/create-project-form/types/create-project-form.types.ts";
import type { CreateProjectResponse } from "../../types/projects.types.ts";

export const useCreateProjectMutation = () => {
  return useMutation({
    mutationFn: (data: CreateProjectFormData) =>
      apiClient<CreateProjectResponse>("/projects", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  });
};
