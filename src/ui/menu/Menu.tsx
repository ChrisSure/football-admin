import { Menu as BaseMenu } from "@base-ui/react/menu";
import {
  menuTriggerClassName,
  menuBackdropClassName,
  menuPositionerClassName,
  menuPopupClassName,
  menuItemClassName,
  menuSeparatorClassName,
} from "./constants/menu.constants.ts";
import type {
  MenuRootProps,
  MenuTriggerProps,
  MenuPortalProps,
  MenuPositionerProps,
  MenuPopupProps,
  MenuItemProps,
  MenuSeparatorProps,
} from "./types/menu.types.ts";

const MenuRoot = ({ children, open, onOpenChange }: MenuRootProps) => {
  return (
    <BaseMenu.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </BaseMenu.Root>
  );
};

const MenuTrigger = ({ children, className }: MenuTriggerProps) => {
  const combinedClassName = className
    ? `${menuTriggerClassName} ${className}`
    : menuTriggerClassName;

  return (
    <BaseMenu.Trigger className={combinedClassName}>
      {children}
    </BaseMenu.Trigger>
  );
};

const MenuPortal = ({ children }: MenuPortalProps) => {
  return <BaseMenu.Portal>{children}</BaseMenu.Portal>;
};

const MenuBackdrop = () => {
  return <BaseMenu.Backdrop className={menuBackdropClassName} />;
};

const MenuPositioner = ({ children, className }: MenuPositionerProps) => {
  const combinedClassName = className
    ? `${menuPositionerClassName} ${className}`
    : menuPositionerClassName;

  return (
    <BaseMenu.Positioner
      className={combinedClassName}
      side="bottom"
      align="end"
    >
      {children}
    </BaseMenu.Positioner>
  );
};

const MenuPopup = ({ children, className }: MenuPopupProps) => {
  const combinedClassName = className
    ? `${menuPopupClassName} ${className}`
    : menuPopupClassName;

  return (
    <BaseMenu.Popup className={combinedClassName}>{children}</BaseMenu.Popup>
  );
};

const MenuItem = ({
  children,
  onClick,
  className,
  disabled,
}: MenuItemProps) => {
  const combinedClassName = className
    ? `${menuItemClassName} ${className}`
    : menuItemClassName;

  return (
    <BaseMenu.Item
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </BaseMenu.Item>
  );
};

const MenuSeparator = ({ className }: MenuSeparatorProps) => {
  const combinedClassName = className
    ? `${menuSeparatorClassName} ${className}`
    : menuSeparatorClassName;

  return <BaseMenu.Separator className={combinedClassName} />;
};

const Menu = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Portal: MenuPortal,
  Backdrop: MenuBackdrop,
  Positioner: MenuPositioner,
  Popup: MenuPopup,
  Item: MenuItem,
  Separator: MenuSeparator,
};

export default Menu;
export type {
  MenuRootProps,
  MenuTriggerProps,
  MenuPortalProps,
  MenuPositionerProps,
  MenuPopupProps,
  MenuItemProps,
  MenuSeparatorProps,
};
