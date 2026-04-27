import Modal from "@ui/modal/Modal.tsx";
import ChangePasswordForm from "../../forms/change-password-form/ChangePasswordForm.tsx";
import type { ChangePasswordModalProps } from "./types/change-password-modal.types.ts";

const ChangePasswordModal = ({
  isOpen,
  onOpenChange,
  user,
  setUser,
  onSubmit,
}: ChangePasswordModalProps) => {
  return (
    <Modal
      open={isOpen}
      onOpenChange={(open) => {
        onOpenChange(open);
        if (!open) setUser(null);
      }}
      title={`Change Password for ${user?.name || "User"}`}
      showFooter={true}
      submitText="Change Password"
      cancelText="Cancel"
      onCancel={() => {
        onOpenChange(false);
        setUser(null);
      }}
      submitFormId="change-password-form"
    >
      <div className="py-4">
        <ChangePasswordForm id="change-password-form" onSubmit={onSubmit} />
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
