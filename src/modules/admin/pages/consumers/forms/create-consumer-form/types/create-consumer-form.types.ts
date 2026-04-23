import { z } from "zod";
import { createConsumerFormSchema } from "../schemas/create-consumer-form.schema.ts";

export type CreateConsumerFormData = z.infer<typeof createConsumerFormSchema>;

export interface CreateConsumerFormProps {
  id?: string;
  initialValues?: Partial<CreateConsumerFormData>;
  onSubmit: (data: CreateConsumerFormData) => void;
}
