import type { User } from "../../../../dashboard/types/dashboard.types.ts";
import type { ChangePasswordFormData } from "../../../forms/change-password-form/types/change-password-form.types.ts";

export interface ChangePasswordModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  onSubmit: (data: ChangePasswordFormData) => void;
}
