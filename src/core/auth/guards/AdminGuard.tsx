import { Navigate } from "react-router-dom";
import { isTokenValid } from "../utils/token.utils.ts";

const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const tokenValid = isTokenValid();

  if (!tokenValid) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AdminGuard;
