import {
  spinnerBaseClassName,
  spinnerSizeClasses,
} from "./constants/spinner.constants.ts";
import type { SpinnerProps } from "./types/spinner.types.ts";

const Spinner = ({ className = "", size = "md" }: SpinnerProps) => {
  const sizeClass = spinnerSizeClasses[size];
  const combinedClassName =
    `${spinnerBaseClassName} ${sizeClass} ${className}`.trim();

  return (
    <div className={combinedClassName} role="status" aria-label="Loading">
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default Spinner;
