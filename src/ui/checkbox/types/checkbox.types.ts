import type { CheckboxRootProps } from "@base-ui/react/checkbox";

export interface CheckboxProps extends Omit<CheckboxRootProps, "children"> {
  label?: string;
  className?: string;
}
