export const toastRootClassName =
  "group/toast relative flex w-full max-w-sm flex-col gap-2 rounded-md border border-neutral-200 bg-white p-4 pr-12 shadow-lg data-[swipe-direction]:transition-transform dark:border-neutral-700 dark:bg-neutral-900 data-[type=error]:border-red-200 data-[type=error]:bg-red-50 dark:data-[type=error]:border-red-900/50 dark:data-[type=error]:bg-red-950/40 data-[type=success]:border-emerald-200 data-[type=success]:bg-emerald-50 dark:data-[type=success]:border-emerald-900/50 dark:data-[type=success]:bg-emerald-950/40 data-[type=info]:border-sky-200 data-[type=info]:bg-sky-50 dark:data-[type=info]:border-sky-900/50 dark:data-[type=info]:bg-sky-950/40";

export const toastTitleClassName =
  "text-xs font-semibold leading-snug text-neutral-900 dark:text-neutral-100 group-data-[type=error]/toast:text-red-900 dark:group-data-[type=error]/toast:text-red-100 group-data-[type=success]/toast:text-emerald-900 dark:group-data-[type=success]/toast:text-emerald-100 group-data-[type=info]/toast:text-sky-900 dark:group-data-[type=info]/toast:text-sky-100";

export const toastDescriptionClassName =
  "text-xs text-neutral-600 dark:text-neutral-400";

export const toastCloseClassName =
  "absolute right-2 top-2 cursor-pointer rounded-md p-2 text-lg leading-none text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100";

export const toastActionClassName =
  "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200";

export const toastViewportClassName =
  "fixed top-0 right-0 z-50 flex max-h-screen w-full flex-col gap-2 p-4 pt-[max(1rem,env(safe-area-inset-top))] sm:top-4 sm:right-4 sm:max-w-md pointer-events-none [&>*]:pointer-events-auto";
