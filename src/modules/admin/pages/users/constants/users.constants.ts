import type { User } from "../../dashboard/types/dashboard.types.ts";

export const handleEditClick = (
  e: React.MouseEvent,
  user: User,
  setEditingUser: (user: User) => void,
  setIsModalOpen: (isOpen: boolean) => void,
) => {
  e.stopPropagation();
  setEditingUser(user);
  setIsModalOpen(true);
};
