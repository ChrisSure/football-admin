import type { ReactNode } from "react";
import type {
  FieldError,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

export interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  name: Path<TFieldValues>;
  label: string;
  type?: "text" | "password" | "email" | "number" | "textarea" | "select";
  placeholder?: string;
  register: UseFormRegister<TFieldValues>;
  error?: FieldError;
  children?: ReactNode; // For select options (legacy)
  options?: { value: string; label: string }[]; // For new select
  defaultValue?: any;
}
