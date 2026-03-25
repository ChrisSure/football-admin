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
  type?: string;
  placeholder?: string;
  register: UseFormRegister<TFieldValues>;
  error?: FieldError;
}
