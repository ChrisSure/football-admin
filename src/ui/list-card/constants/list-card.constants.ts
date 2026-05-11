export const listCardClassName =
  "bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-4 cursor-pointer min-h-[72px] sm:h-[100px] w-full flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4";

export const listCardTitleClassName =
  "text-lg font-semibold text-gray-800 truncate";

export const listCardDescriptionClassName =
  "text-gray-600 text-xs line-clamp-1";

export const listCardMetaClassName =
  "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 sm:flex-nowrap";

export const listCardStatusClassName: Record<string, string> = {
  active: "text-green-600 font-medium",
  inactive: "text-gray-500 font-medium",
  archived: "text-red-600 font-medium",
  new: "text-blue-600 font-medium",
  stopped: "text-red-600 font-medium",
};
