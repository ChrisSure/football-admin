import Modal from "../modal/Modal.tsx";
import type { ConfirmModalProps } from "./types/confirm-modal.types.ts";

const ConfirmModal = ({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isDestructive = false,
}: ConfirmModalProps) => {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      showFooter
      onSubmit={onConfirm}
      submitText={confirmText}
      cancelText={cancelText}
      submitVariant={isDestructive ? "destructive" : "primary"}
      size="md"
    >
      <div className="text-gray-600">{description}</div>
    </Modal>
  );
};

export default ConfirmModal;
