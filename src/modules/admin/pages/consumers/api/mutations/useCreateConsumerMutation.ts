import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { CreateConsumerFormData } from "../../forms/create-consumer-form/types/create-consumer-form.types.ts";
import type { CreateConsumerResponse } from "../types/consumers-api.types.ts";

export const useCreateConsumerMutation = () => {
  return useMutation({
    mutationFn: (data: CreateConsumerFormData) =>
      apiClient<CreateConsumerResponse>("/consumers", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  });
};
