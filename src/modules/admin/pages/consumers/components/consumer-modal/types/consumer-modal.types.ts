import type { CreateConsumerFormData } from "../../../forms/create-consumer-form/types/create-consumer-form.types.ts";
import type { Consumer } from "../../../types/consumers.types.ts";

export interface ConsumerModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  editingConsumer: Consumer | null;
  setEditingConsumer: (consumer: Consumer | null) => void;
  onSubmit: (formData: CreateConsumerFormData) => void;
}
