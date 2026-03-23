import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AdminGuard;
