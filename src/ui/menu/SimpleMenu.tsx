import Menu from "./Menu.tsx";
import type { SimpleMenuProps } from "./types/menu.types.ts";

const SimpleMenu = ({ trigger, items, className }: SimpleMenuProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger>{trigger}</Menu.Trigger>
      <Menu.Portal>
        <Menu.Backdrop />
        <Menu.Positioner className={className}>
          <Menu.Popup>
            {items.map((item, index) => {
              if (item.type === "separator") {
                return <Menu.Separator key={`separator-${index}`} />;
              }
              return (
                <Menu.Item
                  key={`item-${index}`}
                  onClick={item.onClick}
                  disabled={item.disabled}
                >
                  {item.label}
                </Menu.Item>
              );
            })}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
};

export default SimpleMenu;
export type { SimpleMenuProps };
