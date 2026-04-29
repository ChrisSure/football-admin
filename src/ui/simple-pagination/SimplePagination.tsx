import { useState } from "react";
import Button from "@ui/button/Button.tsx";
import type { SimplePaginationProps } from "./types/simple-pagination.types.ts";

const SimplePagination = <T,>({
  items,
  defaultLimit = 10,
  renderItem,
  className = "flex flex-col gap-4",
  listClassName = "flex flex-col gap-4",
}: SimplePaginationProps<T>) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, defaultLimit);
  const hasMore = items.length > defaultLimit;

  return (
    <div className={className}>
      <div className={listClassName}>
        {visibleItems.map((item, index) => renderItem(item, index))}
      </div>

      {hasMore && !showAll && (
        <div className="flex justify-center mt-2">
          <Button variant="outline" onClick={() => setShowAll(true)}>
            Show All
          </Button>
        </div>
      )}
    </div>
  );
};

export default SimplePagination;
