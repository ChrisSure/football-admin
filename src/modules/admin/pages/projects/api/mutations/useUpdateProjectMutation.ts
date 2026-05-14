import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { CreateProjectFormData } from "../../forms/create-project-form/types/create-project-form.types.ts";
import type { CreateProjectResponse } from "../types/projects-api.types.ts";

export const useUpdateProjectMutation = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: CreateProjectFormData }) =>
      apiClient<CreateProjectResponse>(`/projects/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
  });
};
