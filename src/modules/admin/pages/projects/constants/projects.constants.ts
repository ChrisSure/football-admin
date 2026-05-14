import type { NavigateFunction } from "react-router-dom";
import type { Project } from "../../dashboard/types/dashboard.types.ts";
import type React from "react";

export const handleProjectClick = (
  project: { id: number },
  navigate: NavigateFunction,
) => {
  navigate(`/admin/project/${project.id}`);
};

export const handleEditClick = (
  e: React.MouseEvent,
  project: Project,
  setEditingProject: React.Dispatch<React.SetStateAction<Project | null>>,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  e.stopPropagation();
  setEditingProject(project);
  setIsModalOpen(true);
};
