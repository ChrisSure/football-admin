import type { ReactNode } from "react";

export type MenuRootProps = {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export type MenuTriggerProps = {
  children: ReactNode;
  className?: string;
};

export type MenuPortalProps = {
  children: ReactNode;
};

export type MenuPositionerProps = {
  children: ReactNode;
  className?: string;
};

export type MenuPopupProps = {
  children: ReactNode;
  className?: string;
};

export type MenuItemProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export type MenuSeparatorProps = {
  className?: string;
};

export type MenuItem = {
  type?: "item" | "separator";
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export type SimpleMenuProps = {
  trigger: ReactNode;
  items: MenuItem[];
  className?: string;
};
