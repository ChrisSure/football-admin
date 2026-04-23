import type { Consumer } from "../types/consumers.types.ts";
import type React from "react";

export const handleEditClick = (
  e: React.MouseEvent,
  consumer: Consumer,
  setEditingConsumer: React.Dispatch<React.SetStateAction<Consumer | null>>,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  e.stopPropagation();
  setEditingConsumer(consumer);
  setIsModalOpen(true);
};
