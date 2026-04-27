import type { User } from "../../../../dashboard/types/dashboard.types.ts";
import type {
  CreateUserFormData,
  UpdateUserFormData,
} from "../../../forms/create-user-form/types/create-user-form.types.ts";

export interface UserModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  editingUser: User | null;
  setEditingUser: (user: User | null) => void;
  onSubmit: (data: CreateUserFormData | UpdateUserFormData) => void;
}
