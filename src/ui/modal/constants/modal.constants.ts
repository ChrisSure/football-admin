export const backdropClassName =
  "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-200 data-ending:opacity-0 data-starting:opacity-0";

export const popupClassName =
  "fixed left-1/2 top-1/2 z-50 w-full max-w-2xl min-h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-6 shadow-xl outline-none transition-all duration-200 data-ending:scale-95 data-ending:opacity-0 data-starting:scale-95 data-starting:opacity-0 dark:border-neutral-800 dark:bg-neutral-900 flex flex-col";

export const titleClassName =
  "mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100";

export const closeButtonClassName =
  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-800 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400";
