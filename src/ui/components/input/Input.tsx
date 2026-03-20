import { Input as BaseInput } from "@base-ui/react/input";
import { baseClassName } from "./constants/input.constants";
import type { InputProps } from "./types/input.types";

const Input = ({ className, ...props }: InputProps) => {
  return (
    <BaseInput
      className={className ? `${baseClassName} ${className}` : baseClassName}
      {...props}
    />
  );
};

export default Input;
export type { InputProps } from "./types/input.types";
