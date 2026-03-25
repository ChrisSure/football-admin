import LoginLayout from "../../layouts/LoginLayout.tsx";
import LoginForm from "./forms/login-form/LoginForm.tsx";
import { useAuth } from "@core/auth/hooks/useAuth.ts";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./forms/login-form/hooks/useLoginMutation.ts";
import type { LoginFormData } from "./forms/login-form/types/login-form.types.ts";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useLoginMutation();

  const handleSubmit = (data: LoginFormData) => {
    mutate(data, {
      onSuccess: () => {
        login();
        navigate("/admin");
      },
      onError: (err) => {
        console.error("Login failed:", err);
      },
    });
  };

  return (
    <LoginLayout>
      <LoginForm onSubmit={handleSubmit} />
      {isPending && <p>Logging in...</p>}
      {isError && <p className="text-red-500">Error: {error.message}</p>}
    </LoginLayout>
  );
};

export default Login;
