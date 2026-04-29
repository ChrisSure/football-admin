import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout.tsx";
import { useProjectQuery } from "./api/queries/useProjectQuery.ts";
import ProjectHeader from "./components/project-header/ProjectHeader.tsx";
import ProjectDetails from "./components/project-details/ProjectDetails.tsx";
import ProjectSources from "./components/project-sources/ProjectSources.tsx";
import ProjectConsumers from "./components/project-consumers/ProjectConsumers.tsx";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const projectId = id ? parseInt(id, 10) : 0;
  const { data, isLoading, isError } = useProjectQuery(projectId);

  const handleBackClick = () => {
    navigate("/admin");
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        {!isLoading && !isError && data && (
          <>
            <ProjectHeader title={data.title} onBackClick={handleBackClick} />
            <ProjectDetails project={data} />
            <ProjectSources
              projectId={projectId}
              sources={data.sources || []}
            />
            <ProjectConsumers project={data} />
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default Project;
