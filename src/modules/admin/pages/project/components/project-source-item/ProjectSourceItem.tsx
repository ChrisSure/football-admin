import Badge from "@ui/badge/Badge.tsx";
import { EditIcon } from "@admin/pages/project/assets/EditIcon.tsx";
import { DeleteIcon } from "@admin/pages/project/assets/DeleteIcon.tsx";
import type { ProjectSource } from "../../types/project.types.ts";

export type ProjectSourceItemProps = {
  source: ProjectSource;
  onEdit: (source: ProjectSource) => void;
  onDelete: (source: ProjectSource) => void;
};

export const ProjectSourceItem = ({
  source,
  onEdit,
  onDelete,
}: ProjectSourceItemProps) => {
  return (
    <li className="p-4 flex items-center justify-between hover:bg-gray-50">
      <div className="flex flex-col gap-1">
        <span className="font-medium text-gray-800">{source.title}</span>
        <span className="text-sm text-gray-500">{source.url}</span>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-0.5 rounded">
            {source.key}
          </span>
          <Badge status={source.status} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onEdit(source)}
          className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors cursor-pointer"
          title="Edit"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => onDelete(source)}
          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
          title="Delete"
        >
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};
