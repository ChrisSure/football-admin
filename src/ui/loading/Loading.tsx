import { baseClassName, barClassName } from "./constants/loading.constants.ts";
import type { LoadingBarProps } from "./types/loading.types.ts";

const LoadingBar = ({ className }: LoadingBarProps = {}) => {
  const combinedClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  return (
    <div className={combinedClassName}>
      <div className={barClassName} />
    </div>
  );
};

export default LoadingBar;
