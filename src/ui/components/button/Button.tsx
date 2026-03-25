import { Button as BaseButton } from "@base-ui/react/button";
import { baseClassName, variantClassNames } from "./constants/button.constants";
import type { ButtonProps } from "./types/button.types";
import { ButtonVariant } from "./enums/button.enums";

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
export type { ButtonProps } from "./types/button.types";
export { ButtonVariant } from "./enums/button.enums";
