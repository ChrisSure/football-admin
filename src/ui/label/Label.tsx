import { baseClassName } from "./constants/label.constants.ts";
import type { LabelProps } from "./types/label.types.ts";

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
export type { LabelProps } from "./types/label.types.ts";
