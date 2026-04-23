import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { CreateConsumerFormData } from "../../forms/create-consumer-form/types/create-consumer-form.types.ts";
import type { CreateConsumerResponse } from "../types/consumers-api.types.ts";

export const useUpdateConsumerMutation = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: CreateConsumerFormData }) =>
      apiClient<CreateConsumerResponse>(`/consumers/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
  });
};
