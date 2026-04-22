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
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  ref?: Ref<HTMLInputElement>;
  "data-invalid"?: boolean;
  className?: string;
  placeholder?: string;
  options?: SelectOption[];
}
