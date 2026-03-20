import type { ComponentProps } from "react";
import type { Button as BaseButton } from "@base-ui/react/button";
import type { ButtonVariant } from "../constants/button.constants";

export interface ButtonProps extends ComponentProps<typeof BaseButton> {
  variant?: ButtonVariant;
}
