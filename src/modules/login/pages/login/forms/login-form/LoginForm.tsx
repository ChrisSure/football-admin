import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@ui/button/Button.tsx";
import FormField from "@core/form/components/form-field/FormField.tsx";
import { loginFormSchema } from "@login/pages/login/forms/login-form/schemas/login-form.schema.ts";
import type {
  LoginFormData,
  LoginFormProps,
} from "./types/login-form.types.ts";

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    mode: "onSubmit",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold text-gray">Login</h1>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Enter your name"
        register={register}
        error={errors.name}
      />
      <FormField
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register}
        error={errors.password}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LoginForm;
