import type { NotFoundProps } from "./types/not-found.types.ts";

const NotFound = ({ message = "No items found." }: NotFoundProps) => {
  return (
    <div className="flex items-center justify-center py-12">
      <p className="text-gray-600">{message}</p>
    </div>
  );
};

export default NotFound;
