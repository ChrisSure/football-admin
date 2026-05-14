import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import type { CheckboxProps } from "./types/checkbox.types.ts";

const CheckIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    fill="currentColor"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    {...props}
  >
    <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
  </svg>
);

const Checkbox = ({ label, className = "", ...props }: CheckboxProps) => {
  return (
    <label
      className={`flex items-center gap-2 cursor-pointer text-sm text-gray-700 ${className}`}
    >
      <BaseCheckbox.Root
        className="flex items-center justify-center w-5 h-5 rounded border border-gray-300 bg-white data-[checked]:bg-primary data-[checked]:border-primary data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed transition-colors"
        {...props}
      >
        <BaseCheckbox.Indicator className="text-white">
          <CheckIcon />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      {label && <span>{label}</span>}
    </label>
  );
};

export default Checkbox;
