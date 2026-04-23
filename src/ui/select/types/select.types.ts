import type { Ref } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | { target: { name?: string; value: string } }) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement> | { target: { name?: string } }) => void;
  ref?: Ref<HTMLInputElement>;
  "data-invalid"?: boolean;
  className?: string;
  placeholder?: string;
  options?: SelectOption[];
}
