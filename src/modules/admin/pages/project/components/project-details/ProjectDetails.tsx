import Badge from "../../../../../../ui/badge/Badge.tsx";
import type { ProjectDetailsProps } from "./types/project-details.types.ts";

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-gray-700">Description</h2>
        <p className="text-gray-600">{project.description}</p>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          Project Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-500">Status</span>
            <Badge status={project.status} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-500">Created</span>
            <span className="text-gray-800">{formatDate(project.created)}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-500">Last Updated</span>
            <span className="text-gray-800">{formatDate(project.updated)}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-500">Project ID</span>
            <span className="text-gray-800">{project.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
export type { ProjectDetailsProps } from "./types/project-details.types.ts";
