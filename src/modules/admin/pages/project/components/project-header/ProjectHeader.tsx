import type { ProjectHeaderProps } from "./types/project-header.types.ts";

const ProjectHeader = ({ title, onBackClick }: ProjectHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      <button
        onClick={onBackClick}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 cursor-pointer"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default ProjectHeader;
export type { ProjectHeaderProps } from "./types/project-header.types.ts";
