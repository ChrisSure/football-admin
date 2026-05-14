import { Route } from "react-router-dom";
import AdminGuard from "@core/auth/guards/AdminGuard.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Project from "./pages/project/Project.tsx";
import Projects from "./pages/projects/Projects.tsx";
import Consumers from "./pages/consumers/Consumers.tsx";
import Users from "./pages/users/Users.tsx";

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
    key="admin-projects"
    path="/admin/projects"
    element={
      <AdminGuard>
        <Projects />
      </AdminGuard>
    }
  />,
  <Route
    key="admin-users"
    path="/admin/users"
    element={
      <AdminGuard>
        <Users />
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
  <Route
    key="admin-consumers"
    path="/admin/consumers"
    element={
      <AdminGuard>
        <Consumers />
      </AdminGuard>
    }
  />,
];
