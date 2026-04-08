import { BadgeVariant, type BadgeVariantType } from "../enums/badge.enums.ts";

export const baseClassName = "font-semibold";

export const variantClassNames: Record<BadgeVariantType, string> = {
  [BadgeVariant.New]: "text-blue-600",
  [BadgeVariant.Active]: "text-green-600",
  [BadgeVariant.Stopped]: "text-red-600",
};
