import { baseClassName } from "./constants/label.constants";
import type { LabelProps } from "./types/label.types";

const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <label
      className={className ? `${baseClassName} ${className}` : baseClassName}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
export type { LabelProps } from "./types/label.types";
