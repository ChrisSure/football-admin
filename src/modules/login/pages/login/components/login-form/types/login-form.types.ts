import { z } from "zod";
import { loginFormSchema } from "@login/pages/login/components/login-form/schemas/login-form.schema.ts";

export type LoginFormData = z.infer<typeof loginFormSchema>;
