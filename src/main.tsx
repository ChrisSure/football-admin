import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import "./main.css";
import { loginRoutes } from "@login/LoginRoutes.tsx";
import { adminRoutes } from "@admin/AdminRoutes.tsx";
import { AuthProvider } from "@auth/providers/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {loginRoutes}
          {adminRoutes}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
