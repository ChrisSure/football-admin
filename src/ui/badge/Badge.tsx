import {
  baseClassName,
  variantClassNames,
} from "./constants/badge.constants.ts";
import type { BadgeProps } from "./types/badge.types.ts";
import { BadgeVariant } from "./enums/badge.enums.ts";

const Badge = ({ status, className }: BadgeProps) => {
  const normalizedStatus = status.toLowerCase();

  const getVariantClass = () => {
    switch (normalizedStatus) {
      case "new":
        return variantClassNames[BadgeVariant.New];
      case "active":
        return variantClassNames[BadgeVariant.Active];
      case "stopped":
        return variantClassNames[BadgeVariant.Stopped];
      default:
        return "text-gray-600";
    }
  };

  const variantClass = getVariantClass();
  const combinedClassName = className
    ? `${baseClassName} ${variantClass} ${className}`
    : `${baseClassName} ${variantClass}`;

  return <span className={combinedClassName}>{status}</span>;
};

export default Badge;
export type { BadgeProps } from "./types/badge.types.ts";
export { BadgeVariant } from "./enums/badge.enums.ts";
