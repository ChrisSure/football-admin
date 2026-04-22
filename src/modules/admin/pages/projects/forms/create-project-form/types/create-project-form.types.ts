import { z } from "zod";
import { createProjectFormSchema } from "../schemas/create-project-form.schema.ts";

export type CreateProjectFormData = z.infer<typeof createProjectFormSchema>;

export interface CreateProjectFormProps {
  id?: string;
  onSubmit: (data: CreateProjectFormData) => void;
}
