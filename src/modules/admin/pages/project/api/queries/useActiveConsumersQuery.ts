import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@core/api/api-client.ts";
import type { ConsumersResponse } from "@admin/pages/consumers/types/consumers.types.ts";

export const useActiveConsumersQuery = () => {
  return useQuery({
    queryKey: ["consumers", "active"],
    queryFn: async () => {
      const consumers = await apiClient<ConsumersResponse>("/consumers/active");
      return consumers.filter((consumer) => consumer.status === "active");
    },
  });
};
