import { Button as BaseButton } from "@base-ui/react/button";
import {
  baseClassName,
  variantClassNames,
} from "./constants/button.constants.ts";
import type { ButtonProps } from "./types/button.types.ts";
import { ButtonVariant } from "./enums/button.enums.ts";

const Button = ({
  className,
  variant = ButtonVariant.Primary,
  ...props
}: ButtonProps) => {
  const variantClass = variantClassNames[variant];
  const combinedClassName = className
    ? `${baseClassName} ${variantClass} ${className}`
    : `${baseClassName} ${variantClass}`;

  return <BaseButton className={combinedClassName} {...props} />;
};

export default Button;
export type { ButtonProps } from "./types/button.types.ts";
export { ButtonVariant } from "./enums/button.enums.ts";
