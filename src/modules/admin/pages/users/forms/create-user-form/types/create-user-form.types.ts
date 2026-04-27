import { z } from "zod";
import {
  createUserFormSchema,
  updateUserFormSchema,
} from "../schemas/create-user-form.schema.ts";

export type CreateUserFormData = z.infer<typeof createUserFormSchema>;
export type UpdateUserFormData = z.infer<typeof updateUserFormSchema>;

export interface CreateUserFormProps {
  id: string;
  initialValues?: Partial<CreateUserFormData>;
  isEditing?: boolean;
  onSubmit: (data: CreateUserFormData | UpdateUserFormData) => void;
}
