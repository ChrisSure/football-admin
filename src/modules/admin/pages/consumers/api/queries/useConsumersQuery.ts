import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { ConsumersResponse } from "../../types/consumers.types.ts";

export const useConsumersQuery = () => {
  return useQuery({
    queryKey: ["consumers"],
    queryFn: () => apiClient<ConsumersResponse>("/consumers"),
  });
};
