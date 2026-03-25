import { Route } from "react-router-dom";
import AdminGuard from "@core/auth/guards/AdminGuard.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";

export const adminRoutes = (
  <Route
    key="admin"
    path="/admin"
    element={
      <AdminGuard>
        <Dashboard />
      </AdminGuard>
    }
  />
);
