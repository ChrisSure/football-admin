import type { CreateProjectFormData } from "../../../forms/create-project-form/types/create-project-form.types.ts";
import type { Project } from "../../../../dashboard/types/dashboard.types.ts";

export interface ProjectModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  editingProject: Project | null;
  setEditingProject: (project: Project | null) => void;
  onSubmit: (formData: CreateProjectFormData) => void;
}
