import {
  listCardClassName,
  listCardTitleClassName,
  listCardDescriptionClassName,
  listCardMetaClassName,
  listCardStatusClassName,
} from "./constants/list-card.constants.ts";
import type { ListCardProps } from "./types/list-card.types.ts";

const ListCard = ({
  title,
  description,
  status,
  role,
  created,
  updated,
  onClick,
  onEdit,
  onChangePassword,
  onDelete,
  className,
}: ListCardProps) => {
  const combinedClassName = className
    ? `${listCardClassName} ${className}`
    : listCardClassName;

  const statusClass = status
    ? listCardStatusClassName[status] || listCardStatusClassName.active
    : listCardStatusClassName.active;

  return (
    <div className={combinedClassName} onClick={onClick}>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className={listCardTitleClassName}>{title}</h3>
        {description && (
          <p className={listCardDescriptionClassName}>{description}</p>
        )}
      </div>
      <div className={listCardMetaClassName}>
        {status && (
          <span>
            Status: <span className={statusClass}>{status}</span>
          </span>
        )}
        {role && (
          <span>
            Role:{" "}
            <span className="font-medium text-gray-700 capitalize">{role}</span>
          </span>
        )}
        {created && (
          <span>Created: {new Date(created).toLocaleDateString()}</span>
        )}
        {updated && (
          <span>Updated: {new Date(updated).toLocaleDateString()}</span>
        )}
      </div>
      {(onEdit || onChangePassword || onDelete) && (
        <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-100">
          {onChangePassword && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onChangePassword(e);
              }}
              className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
              aria-label="Change Password"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </button>
          )}
          {onEdit && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(e);
              }}
              className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Edit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </svg>
            </button>
          )}
          {onDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(e);
              }}
              className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
              aria-label="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ListCard;
export type { ListCardProps } from "./types/list-card.types.ts";
