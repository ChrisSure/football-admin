import { useId } from "react";
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";
import type { CheckboxGroupProps } from "./types/checkbox-group.types.ts";

const CheckboxGroup = ({
  label,
  className = "",
  children,
  ...props
}: CheckboxGroupProps) => {
  const id = useId();

  return (
    <BaseCheckboxGroup
      aria-labelledby={label ? id : undefined}
      className={`flex flex-col gap-3 ${className}`}
      {...props}
    >
      {label && (
        <div id={id} className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </div>
      )}
      <div className="flex flex-col gap-2">{children}</div>
    </BaseCheckboxGroup>
  );
};

export default CheckboxGroup;
