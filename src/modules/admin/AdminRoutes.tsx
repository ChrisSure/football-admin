import { Route } from "react-router-dom";
import AdminGuard from "@core/auth/guards/AdminGuard.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Project from "./pages/project/Project.tsx";

export const adminRoutes = [
  <Route
    key="admin-dashboard"
    path="/admin"
    element={
      <AdminGuard>
        <Dashboard />
      </AdminGuard>
    }
  />,
  <Route
    key="admin-project"
    path="/admin/project/:id"
    element={
      <AdminGuard>
        <Project />
      </AdminGuard>
    }
  />,
];
