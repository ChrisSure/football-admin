import { useEffect, type ReactNode } from "react";
import { useToast } from "../../toast/hooks/useToast.ts";

export const ApiErrorHandler = ({ children }: { children: ReactNode }) => {
  const { showToast } = useToast();

  useEffect(() => {
    const handleApiError = (event: Event) => {
      const customEvent = event as CustomEvent<{
        message: string;
        status: number;
      }>;
      showToast({ text: customEvent.detail.message, type: "error" });
    };

    window.addEventListener("api-error", handleApiError);

    return () => {
      window.removeEventListener("api-error", handleApiError);
    };
  }, [showToast]);

  return <>{children}</>;
};
