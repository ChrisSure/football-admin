import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout.tsx";
import ListCard from "@ui/list-card/ListCard.tsx";
import { useProjectsQuery } from "./api/queries/useProjectsQuery.ts";
import Button from "@ui/button/Button.tsx";
import Modal from "@ui/modal/Modal.tsx";
import CreateProjectForm from "./forms/create-project-form/CreateProjectForm.tsx";
import type { CreateProjectFormData } from "./forms/create-project-form/types/create-project-form.types.ts";

const Projects = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useProjectsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: { id: number }) => {
    navigate(`/admin/project/${project.id}`);
  };

  const handleCreateProject = (formData: CreateProjectFormData) => {
    // TODO: Implement project creation mutation
    console.log("Creating project:", formData);
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
          <Button onClick={() => setIsModalOpen(true)}>Create Project</Button>
        </div>

        {!isLoading && !isError && data && data.length === 0 && (
          <div className="flex items-center justify-center py-12">
            <p className="text-gray-600">No projects found.</p>
          </div>
        )}

        {!isLoading && !isError && data && data.length > 0 && (
          <div className="flex flex-col gap-4">
            {data.map((project) => (
              <ListCard
                key={project.id}
                title={project.title}
                description={project.description}
                status={project.status}
                created={project.created}
                updated={project.updated}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        )}
      </div>

      <Modal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title="Create Project"
        showFooter
        submitFormId="create-project-form"
      >
        <CreateProjectForm
          id="create-project-form"
          onSubmit={handleCreateProject}
        />
      </Modal>
    </AdminLayout>
  );
};

export default Projects;
