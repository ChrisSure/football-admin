import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import AdminLayout from "../../layouts/AdminLayout.tsx";
import ListCard from "@ui/list-card/ListCard.tsx";
import { useProjectsQuery } from "./api/queries/useProjectsQuery.ts";
import { useCreateProjectMutation } from "./api/mutations/useCreateProjectMutation.ts";
import { useUpdateProjectMutation } from "./api/mutations/useUpdateProjectMutation.ts";
import { useDeleteProjectMutation } from "./api/mutations/useDeleteProjectMutation.ts";
import {
  handleProjectClick,
  handleEditClick,
} from "./constants/projects.constants.ts";
import Button from "@ui/button/Button.tsx";
import SimplePagination from "@ui/components/simple-pagination/SimplePagination.tsx";
import NotFound from "@ui/not-found/NotFound.tsx";
import ProjectModal from "./components/project-modal/ProjectModal.tsx";
import type { CreateProjectFormData } from "./forms/create-project-form/types/create-project-form.types.ts";
import { useToast } from "@core/toast/hooks/useToast.ts";
import { ApiError } from "@core/api/api-error.ts";
import type { Project } from "../dashboard/types/dashboard.types.ts";

const Projects = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useProjectsQuery();
  const { mutate: createProject } = useCreateProjectMutation();
  const { mutate: updateProject } = useUpdateProjectMutation();
  const { mutate: deleteProject } = useDeleteProjectMutation();
  const { showToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleCreateProject = (formData: CreateProjectFormData) => {
    createProject(formData, {
      onSuccess: (response) => {
        showToast({
          text: response.message || "Project created successfully",
          type: "success",
        });
        setIsModalOpen(false);
        queryClient.invalidateQueries({ queryKey: ["projects"] });
      },
      onError: (error) => {
        if (error instanceof ApiError && error.status === 409) {
          showToast({ text: error.message, type: "error" });
        } else {
          showToast({
            text: error.message || "An error occurred",
            type: "error",
          });
        }
        setIsModalOpen(false);
      },
    });
  };

  const handleUpdateProject = (formData: CreateProjectFormData) => {
    if (!editingProject) return;

    updateProject(
      { id: editingProject.id, data: formData },
      {
        onSuccess: (response) => {
          showToast({
            text: response.message || "Project updated successfully",
            type: "success",
          });
          setIsModalOpen(false);
          setEditingProject(null);
          queryClient.invalidateQueries({ queryKey: ["projects"] });
        },
        onError: (error) => {
          if (error instanceof ApiError && error.status === 409) {
            showToast({ text: error.message, type: "error" });
          } else {
            showToast({
              text: error.message || "An error occurred",
              type: "error",
            });
          }
          setIsModalOpen(false);
          setEditingProject(null);
        },
      },
    );
  };

  const handleFormSubmit = (formData: CreateProjectFormData) => {
    if (editingProject) {
      handleUpdateProject(formData);
    } else {
      handleCreateProject(formData);
    }
  };

  const handleDeleteProject = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();

    deleteProject(project.id, {
      onSuccess: (response) => {
        showToast({
          text: response.message || "Project deleted successfully",
          type: "success",
        });
        queryClient.invalidateQueries({ queryKey: ["projects"] });
      },
      onError: (error) => {
        showToast({
          text: error.message || "An error occurred",
          type: "error",
        });
      },
    });
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
          <Button
            onClick={() => {
              setEditingProject(null);
              setIsModalOpen(true);
            }}
          >
            Create Project
          </Button>
        </div>

        {!isLoading && !isError && data && data.length === 0 && (
          <NotFound message="No projects found." />
        )}

        {!isLoading && !isError && data && data.length > 0 && (
          <SimplePagination
            items={data}
            defaultLimit={8}
            renderItem={(project) => (
              <ListCard
                key={project.id}
                title={project.title}
                description={project.description}
                status={project.status}
                created={project.created}
                updated={project.updated}
                onClick={() => handleProjectClick(project, navigate)}
                onEdit={(e) =>
                  handleEditClick(e, project, setEditingProject, setIsModalOpen)
                }
                onDelete={(e) => handleDeleteProject(e, project)}
              />
            )}
          />
        )}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        editingProject={editingProject}
        setEditingProject={setEditingProject}
        onSubmit={handleFormSubmit}
      />
    </AdminLayout>
  );
};

export default Projects;
