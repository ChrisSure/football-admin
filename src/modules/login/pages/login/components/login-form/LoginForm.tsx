import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@ui/components/input/Input.tsx";
import Button from "@ui/components/button/Button.tsx";
import Label from "@ui/components/label/Label.tsx";
import { loginFormSchema } from "@login/pages/login/components/login-form/schemas/login-form.schema.ts";
import type { LoginFormData } from "./types/login-form.types.ts";
import type { LoginFormProps } from "./types/login-form-component.types.ts";

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
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          {...register("name")}
          {...(errors.name && { "data-invalid": true })}
        />
        {errors.name && (
          <span className="text-sm text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          {...(errors.password && { "data-invalid": true })}
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LoginForm;
