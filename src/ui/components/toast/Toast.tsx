import { Toast as BaseToast } from "@base-ui/react/toast";
import {
  toastRootClassName,
  toastTitleClassName,
  toastDescriptionClassName,
  toastCloseClassName,
  toastActionClassName,
  toastViewportClassName,
} from "./constants/toast.constants";

const Toast = {
  Provider: BaseToast.Provider,
  Portal: BaseToast.Portal,
  Viewport: (props: React.ComponentProps<typeof BaseToast.Viewport>) => (
    <BaseToast.Viewport className={toastViewportClassName} {...props} />
  ),
  Root: (props: React.ComponentProps<typeof BaseToast.Root>) => (
    <BaseToast.Root className={toastRootClassName} {...props} />
  ),
  Content: BaseToast.Content,
  Title: (props: React.ComponentProps<typeof BaseToast.Title>) => (
    <BaseToast.Title className={toastTitleClassName} {...props} />
  ),
  Description: (props: React.ComponentProps<typeof BaseToast.Description>) => (
    <BaseToast.Description className={toastDescriptionClassName} {...props} />
  ),
  Close: (props: React.ComponentProps<typeof BaseToast.Close>) => (
    <BaseToast.Close className={toastCloseClassName} {...props}>
      {props.children || "×"}
    </BaseToast.Close>
  ),
  Action: (props: React.ComponentProps<typeof BaseToast.Action>) => (
    <BaseToast.Action className={toastActionClassName} {...props} />
  ),
  useToastManager: BaseToast.useToastManager,
  createToastManager: BaseToast.createToastManager,
};

export default Toast;
export type { ToastProviderProps } from "./types/toast.types";
