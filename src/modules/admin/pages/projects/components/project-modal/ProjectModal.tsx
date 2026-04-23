import Modal from "@ui/modal/Modal.tsx";
import CreateProjectForm from "../../forms/create-project-form/CreateProjectForm.tsx";
import type { CreateProjectFormData } from "../../forms/create-project-form/types/create-project-form.types.ts";
import type { Project } from "../../../dashboard/types/dashboard.types.ts";

export interface ProjectModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  editingProject: Project | null;
  setEditingProject: (project: Project | null) => void;
  onSubmit: (formData: CreateProjectFormData) => void;
}

const ProjectModal = ({
  isOpen,
  onOpenChange,
  editingProject,
  setEditingProject,
  onSubmit,
}: ProjectModalProps) => {
  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);
    if (!open) setEditingProject(null);
  };

  return (
    <Modal
      open={isOpen}
      onOpenChange={handleOpenChange}
      title={editingProject ? "Edit Project" : "Create Project"}
      showFooter
      submitFormId="create-project-form"
    >
      <CreateProjectForm
        key={editingProject ? editingProject.id : "create"}
        id="create-project-form"
        initialValues={
          editingProject
            ? {
                title: editingProject.title,
                description: editingProject.description,
                status: editingProject.status as "new" | "active" | "stopped",
              }
            : undefined
        }
        onSubmit={onSubmit}
      />
    </Modal>
  );
};

export default ProjectModal;
