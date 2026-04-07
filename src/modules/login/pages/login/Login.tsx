import LoginLayout from "../../layouts/LoginLayout.tsx";
import LoginForm from "./forms/login-form/LoginForm.tsx";
import { useAuth } from "@core/auth/hooks/useAuth.ts";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@login/pages/login/api/mutations/useLoginMutation.ts";
import { useToast } from "@core/toast/hooks/useToast.ts";
import type { LoginFormData } from "./forms/login-form/types/login-form.types.ts";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { mutate, isPending } = useLoginMutation();

  const handleSubmit = (data: LoginFormData) => {
    if (isPending) return;

    mutate(data, {
      onSuccess: (response) => {
        const token =
          response.accessToken ?? response.access_token ?? response.token;
        if (token) {
          login(token);
          navigate("/admin", { replace: true });
        }
      },
      onError: (err) => {
        const message =
          err instanceof Error ? err.message : "Something went wrong";
        showToast({ text: message, type: "error" });
      },
    });
  };

  return (
    <LoginLayout>
      <LoginForm onSubmit={handleSubmit} />
    </LoginLayout>
  );
};

export default Login;
