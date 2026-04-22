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
  created,
  updated,
  onClick,
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
        {created && (
          <span>Created: {new Date(created).toLocaleDateString()}</span>
        )}
        {updated && (
          <span>Updated: {new Date(updated).toLocaleDateString()}</span>
        )}
      </div>
    </div>
  );
};

export default ListCard;
export type { ListCardProps } from "./types/list-card.types.ts";
