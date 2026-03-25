import type { LoginFormData } from "./login-form.types.ts";

export type LoginFormProps = {
  onSubmit: (data: LoginFormData) => void;
};
