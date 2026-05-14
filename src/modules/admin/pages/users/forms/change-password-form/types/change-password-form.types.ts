export interface ChangePasswordFormData {
  password: string;
  repeatPassword: string;
}

export interface ChangePasswordFormProps {
  id: string;
  onSubmit: (data: ChangePasswordFormData) => void;
}
