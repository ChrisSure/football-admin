import { z } from "zod";
import { loginFormSchema } from "@login/pages/login/forms/login-form/schemas/login-form.schema.ts";

export type LoginFormData = z.infer<typeof loginFormSchema>;

export type LoginFormProps = {
  onSubmit: (data: LoginFormData) => void;
};
