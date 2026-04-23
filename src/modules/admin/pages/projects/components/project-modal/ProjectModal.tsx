import Modal from "@ui/modal/Modal.tsx";
import CreateProjectForm from "../../forms/create-project-form/CreateProjectForm.tsx";
import type { ProjectModalProps } from "./types/project-modal.types.ts";

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
