import type { ReactNode } from "react";
import Toast from "@ui/components/toast/Toast.tsx";

const ToastViewportList = () => {
  const { toasts } = Toast.useToastManager();

  return (
    <Toast.Portal>
      <Toast.Viewport>
        {toasts.map((toastItem) => (
          <Toast.Root key={toastItem.id} toast={toastItem}>
            <Toast.Title />
            <Toast.Description />
            <Toast.Close aria-label="Dismiss notification" />
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </Toast.Portal>
  );
};

export const ToastProvider = ({ children }: { children: ReactNode }) => (
  <Toast.Provider>
    {children}
    <ToastViewportList />
  </Toast.Provider>
);
