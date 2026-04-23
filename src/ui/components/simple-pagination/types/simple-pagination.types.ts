import type { ReactNode } from "react";

export interface SimplePaginationProps<T> {
  items: T[];
  defaultLimit?: number;
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  listClassName?: string;
}
