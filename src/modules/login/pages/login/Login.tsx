import LoginLayout from "../../layouts/LoginLayout.tsx";
import LoginForm from "./forms/login-form/LoginForm.tsx";
import { useAuth } from "@auth/hooks/useAuth.ts";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    login();
    navigate("/admin");
  };

  return (
    <LoginLayout>
      <LoginForm onSubmit={handleSubmit} />
    </LoginLayout>
  );
};

export default Login;
