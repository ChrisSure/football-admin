import type { ComponentProps } from "react";
import type { Button as BaseButton } from "@base-ui/react/button";
import type { ButtonVariantType } from "../enums/button.enums";

export interface ButtonProps extends ComponentProps<typeof BaseButton> {
  variant?: ButtonVariantType;
}
