import Modal from "@ui/modal/Modal.tsx";
import CreateUserForm from "../../forms/create-user-form/CreateUserForm.tsx";
import type { UserModalProps } from "./types/user-modal.types.ts";
import type { CreateUserFormData } from "../../forms/create-user-form/types/create-user-form.types.ts";

const UserModal = ({
  isOpen,
  onOpenChange,
  editingUser,
  setEditingUser,
  onSubmit,
}: UserModalProps) => {
  return (
    <Modal
      open={isOpen}
      onOpenChange={(open) => {
        onOpenChange(open);
        if (!open) setEditingUser(null);
      }}
      title={editingUser ? "Edit User" : "Create User"}
      showFooter={true}
      submitText={editingUser ? "Save Changes" : "Create"}
      cancelText="Cancel"
      onCancel={() => {
        onOpenChange(false);
        setEditingUser(null);
      }}
      submitFormId="user-form"
    >
      <div className="py-4">
        <CreateUserForm
          id="user-form"
          isEditing={!!editingUser}
          initialValues={
            editingUser
              ? {
                  name: editingUser.name,
                  status: editingUser.status as CreateUserFormData["status"],
                  role: editingUser.role as CreateUserFormData["role"],
                  projects:
                    editingUser.projects?.map((p) => p.id.toString()) || [],
                }
              : undefined
          }
          onSubmit={onSubmit}
        />
      </div>
    </Modal>
  );
};

export default UserModal;
