import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout.tsx";
import ProjectCard from "@ui/project-card/ProjectCard.tsx";
import { useAuth } from "@core/auth/hooks/useAuth.ts";
import { useUserProjectsQuery } from "./api/queries/useUserProjectsQuery.ts";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useUserProjectsQuery(user?.id || 0);

  const handleProjectClick = (project: { id: number }) => {
    navigate(`/admin/project/${project.id}`);
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>

        {!isLoading &&
          !isError &&
          data?.projects &&
          data.projects.length === 0 && (
            <div className="flex items-center justify-center py-12">
              <p className="text-gray-600">No projects found.</p>
            </div>
          )}

        {!isLoading &&
          !isError &&
          data?.projects &&
          data.projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={handleProjectClick}
                />
              ))}
            </div>
          )}
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
