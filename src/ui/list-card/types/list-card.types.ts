export interface ListCardProps {
  title: string;
  description?: string;
  status?: string;
  created?: string | Date;
  updated?: string | Date;
  onClick?: () => void;
  className?: string;
}
