import { Route } from "react-router-dom";
import ProtectedRoute from "@components/ProtectedRoute.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";

export const adminRoutes = (
  <Route
    key="admin"
    path="/admin"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />
);
