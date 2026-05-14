import type { Consumer } from "../../types/consumers.types.ts";

export interface CreateConsumerResponse {
  message: string;
  consumer: Consumer;
}

export interface DeleteConsumerResponse {
  message: string;
}
