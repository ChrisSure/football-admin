import {
  projectCardClassName,
  projectCardTitleClassName,
  projectCardDescriptionClassName,
  projectCardMetaClassName,
  projectCardStatusClassName,
} from "./constants/project-card.constants.ts";
import type { ProjectCardProps } from "./types/project-card.types.ts";

const ProjectCard = ({ project, onClick, className }: ProjectCardProps) => {
  const combinedClassName = className
    ? `${projectCardClassName} ${className}`
    : projectCardClassName;

  const handleClick = () => {
    if (onClick) {
      onClick(project);
    }
  };

  const statusClass =
    projectCardStatusClassName[
      project.status as keyof typeof projectCardStatusClassName
    ] || projectCardStatusClassName.active;

  return (
    <div className={combinedClassName} onClick={handleClick}>
      <h3 className={projectCardTitleClassName}>{project.title}</h3>
      <p className={projectCardDescriptionClassName}>{project.description}</p>
      <div className={projectCardMetaClassName}>
        <span>
          Status: <span className={statusClass}>{project.status}</span>
        </span>
      </div>
      <div className={projectCardMetaClassName}>
        <span>Created: {new Date(project.created).toLocaleDateString()}</span>
        <span>Updated: {new Date(project.updated).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
export type { ProjectCardProps };
