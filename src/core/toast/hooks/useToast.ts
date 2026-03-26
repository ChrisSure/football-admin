import { useCallback } from "react";
import Toast from "@ui/components/toast/Toast.tsx";
import type { ShowToastOptions } from "../types/use-toast.types.ts";

export const useToast = () => {
  const { add, close, update, promise, toasts } = Toast.useToastManager();

  const showToast = useCallback(
    ({ text, type }: ShowToastOptions) =>
      add({
        title: text,
        type,
      }),
    [add],
  );

  return { showToast, close, update, promise, toasts };
};
