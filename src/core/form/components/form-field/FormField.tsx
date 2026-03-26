import type { FieldValues } from "react-hook-form";
import Input from "@ui/input/Input.tsx";
import Label from "@ui/label/Label.tsx";
import {
  containerClassName,
  errorMessageClassName,
} from "./constants/form-field.constants";
import type { FormFieldProps } from "./types/form-field.types";

const FormField = <TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  type = "text",
  placeholder,
  register,
  error,
}: FormFieldProps<TFieldValues>) => {
  return (
    <div className={containerClassName}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        {...(error && { "data-invalid": true })}
      />
      {error && <span className={errorMessageClassName}>{error.message}</span>}
    </div>
  );
};

export default FormField;
export type { FormFieldProps } from "./types/form-field.types";
