import Modal from "@ui/modal/Modal.tsx";
import CreateConsumerForm from "../../forms/create-consumer-form/CreateConsumerForm.tsx";
import type { ConsumerModalProps } from "./types/consumer-modal.types.ts";

const ConsumerModal = ({
  isOpen,
  onOpenChange,
  editingConsumer,
  setEditingConsumer,
  onSubmit,
}: ConsumerModalProps) => {
  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);
    if (!open) setEditingConsumer(null);
  };

  return (
    <Modal
      open={isOpen}
      onOpenChange={handleOpenChange}
      title={editingConsumer ? "Edit Consumer" : "Create Consumer"}
      showFooter
      submitFormId="create-consumer-form"
    >
      <CreateConsumerForm
        key={editingConsumer ? editingConsumer.id : "create"}
        id="create-consumer-form"
        initialValues={
          editingConsumer
            ? {
                title: editingConsumer.title,
                key: editingConsumer.key,
                status: editingConsumer.status as "new" | "active" | "stopped",
              }
            : undefined
        }
        onSubmit={onSubmit}
      />
    </Modal>
  );
};

export default ConsumerModal;
