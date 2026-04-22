import { Dialog } from "@base-ui/react/dialog";
import Button from "../button/Button.tsx";
import {
  backdropClassName,
  popupClassName,
  titleClassName,
  closeButtonClassName,
} from "./constants/modal.constants.ts";
import type { ModalProps } from "./types/modal.types.ts";

const Modal = ({
  open,
  onOpenChange,
  title,
  children,
  className,
  showFooter,
  onCancel,
  onSubmit,
  submitText = "Submit",
  cancelText = "Cancel",
  submitFormId,
  isSubmitDisabled,
}: ModalProps) => {
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onOpenChange(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className={backdropClassName} />
        <Dialog.Popup className={className ? `${popupClassName} ${className}` : popupClassName}>
          <div className="flex items-center justify-between">
            <Dialog.Title className={titleClassName}>{title}</Dialog.Title>
            <Dialog.Close className={closeButtonClassName}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </div>
          <div className="mt-2 flex flex-1 flex-col">{children}</div>
          {showFooter && (
            <div className="mt-auto flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline" onClick={handleCancel}>
                {cancelText}
              </Button>
              <Button
                type={submitFormId ? "submit" : "button"}
                form={submitFormId}
                onClick={!submitFormId ? onSubmit : undefined}
                disabled={isSubmitDisabled}
              >
                {submitText}
              </Button>
            </div>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
export type { ModalProps } from "./types/modal.types.ts";
