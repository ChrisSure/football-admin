export interface MultiSelectProps {
  id?: string;
  className?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  ref?: React.Ref<HTMLInputElement>;
  onChange?: (e: { target: { name: string; value: string[] } }) => void;
  onBlur?: (e: React.FocusEvent) => void;
  name: string;
  "data-invalid"?: boolean;
  defaultValue?: string[];
  value?: string[];
}
