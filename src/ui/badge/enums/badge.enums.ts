export const BadgeVariant = {
  New: "new",
  Active: "active",
  Stopped: "stopped",
} as const;

export type BadgeVariantType = (typeof BadgeVariant)[keyof typeof BadgeVariant];
