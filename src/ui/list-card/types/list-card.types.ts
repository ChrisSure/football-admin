export interface ListCardProps {
  title: string;
  description?: string;
  status?: string;
  created?: string | Date;
  updated?: string | Date;
  onClick?: () => void;
  onEdit?: (e: React.MouseEvent) => void;
  onDelete?: (e: React.MouseEvent) => void;
  className?: string;
}
