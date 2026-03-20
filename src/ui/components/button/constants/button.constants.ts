import { ButtonVariant, type ButtonVariantType } from "../enums/button.enums";

export const baseClassName =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-lg font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:opacity-50";

export const variantClassNames: Record<ButtonVariantType, string> = {
  [ButtonVariant.Primary]:
    "bg-primary text-white hover:bg-secondary active:bg-neutral-950 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:active:bg-neutral-50",
  [ButtonVariant.Secondary]:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:active:bg-neutral-600",
  [ButtonVariant.Outline]:
    "border border-neutral-300 bg-transparent hover:bg-neutral-100 active:bg-neutral-200 dark:border-neutral-600 dark:hover:bg-neutral-800 dark:active:bg-neutral-700",
  [ButtonVariant.Ghost]:
    "bg-transparent hover:bg-neutral-100 active:bg-neutral-200 dark:hover:bg-neutral-800 dark:active:bg-neutral-700",
  [ButtonVariant.Destructive]:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 dark:bg-red-700 dark:hover:bg-red-600 dark:active:bg-red-500",
};
