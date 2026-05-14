import type { AdminMenuItem } from "../types/admin-menu.types.ts";

export const ADMIN_MENU_ITEMS: AdminMenuItem[] = [
  {
    label: "Users",
    path: "/admin/users",
  },
  {
    label: "Projects",
    path: "/admin/projects",
  },
  {
    label: "Consumers",
    path: "/admin/consumers",
  },
];
