import { z } from "zod";
import { sourceFormSchema } from "../schemas/source-form.schema.ts";

export type SourceFormData = z.infer<typeof sourceFormSchema>;

export type SourceFormProps = {
  id?: string;
  initialValues?: Partial<SourceFormData>;
  onSubmit: (data: SourceFormData) => void;
};
