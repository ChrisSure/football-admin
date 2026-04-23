import * as React from "react";
import { Select as BaseSelect } from "@base-ui/react/select";
import {
  baseClassName,
  positionerClassName,
  popupClassName,
  listClassName,
  itemClassName,
  itemIndicatorClassName,
} from "./constants/multi-select.constants.ts";
import type { MultiSelectProps } from "./types/multi-select.types.ts";

function ChevronUpDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M0.5 4.5L4 1.5L7.5 4.5" />
      <path d="M0.5 7.5L4 10.5L7.5 7.5" />
    </svg>
  );
}

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg fill="currentcolor" width="10" height="10" viewBox="0 0 10 10" {...props}>
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}

const MultiSelect = ({
  id,
  className,
  options = [],
  placeholder = "Select options...",
  ref,
  onChange,
  onBlur,
  name,
  "data-invalid": dataInvalid,
  defaultValue = [],
  value,
  ...props
}: MultiSelectProps) => {
  return (
    <BaseSelect.Root
      name={name}
      inputRef={ref}
      multiple={true}
      defaultValue={defaultValue}
      value={value}
      onValueChange={(val) => onChange?.({ target: { name, value: val as string[] } })}
      {...props}
    >
      <BaseSelect.Trigger
        id={id}
        className={className ? `${baseClassName} ${className}` : baseClassName}
        data-invalid={dataInvalid ? "" : undefined}
        onBlur={onBlur}
      >
        <BaseSelect.Value placeholder={placeholder}>
          {(value: string[] | null) => {
            if (!value || value.length === 0) return placeholder;
            return value
              .map((val: string) => {
                const option = options.find((o) => o.value === val);
                return option ? option.label : val;
              })
              .join(", ");
          }}
        </BaseSelect.Value>
        <BaseSelect.Icon>
          <ChevronUpDownIcon />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner className={positionerClassName} sideOffset={4}>
          <BaseSelect.Popup className={popupClassName}>
            <BaseSelect.List className={listClassName}>
              {options.map((opt) => (
                <BaseSelect.Item
                  key={opt.value}
                  value={opt.value}
                  className={itemClassName}
                >
                  <BaseSelect.ItemIndicator className={itemIndicatorClassName}>
                    <CheckIcon />
                  </BaseSelect.ItemIndicator>
                  <BaseSelect.ItemText>{opt.label}</BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
};

export default MultiSelect;
export type { MultiSelectProps } from "./types/multi-select.types.ts";
