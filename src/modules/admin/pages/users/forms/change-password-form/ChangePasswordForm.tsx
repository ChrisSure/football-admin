import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@core/form/components/form-field/FormField.tsx";
import { changePasswordFormSchema } from "./schemas/change-password-form.schema.ts";
import type {
  ChangePasswordFormData,
  ChangePasswordFormProps,
} from "./types/change-password-form.types.ts";

const ChangePasswordForm = ({ id, onSubmit }: ChangePasswordFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordFormSchema),
    mode: "onSubmit",
  });

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full flex-col gap-5"
    >
      <FormField
        name="password"
        label="New Password"
        type="password"
        placeholder="Enter new password"
        register={register}
        error={errors.password}
      />
      <FormField
        name="repeatPassword"
        label="Repeat New Password"
        type="password"
        placeholder="Repeat new password"
        register={register}
        error={errors.repeatPassword}
      />
    </form>
  );
};

export default ChangePasswordForm;
