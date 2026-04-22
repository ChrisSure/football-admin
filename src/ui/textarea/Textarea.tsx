import { baseClassName } from "./constants/textarea.constants.ts";
import type { TextareaProps } from "./types/textarea.types.ts";

const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      className={className ? `${baseClassName} ${className}` : baseClassName}
      {...props}
    />
  );
};

export default Textarea;
export type { TextareaProps } from "./types/textarea.types.ts";
