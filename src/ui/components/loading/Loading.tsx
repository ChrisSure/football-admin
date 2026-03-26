import { baseClassName, barClassName } from "./constants/loading.constants";
import type { LoadingBarProps } from "./types/loading.types";

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
