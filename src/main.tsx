import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./main.css";
import { loginRoutes } from "@login/LoginRoutes.tsx";
import { adminRoutes } from "@admin/AdminRoutes.tsx";
import { AuthProvider } from "@core/auth/providers/AuthProvider.tsx";
import { ToastProvider } from "@core/toast/ToastProvider.tsx";
import { LoadingProvider } from "@core/loading/LoadingProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <LoadingProvider>
            <AuthProvider>
              <Routes>
                {loginRoutes}
                {adminRoutes}
              </Routes>
            </AuthProvider>
          </LoadingProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
);
