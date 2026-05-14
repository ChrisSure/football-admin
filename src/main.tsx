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
import { ApiErrorHandler } from "@core/api/components/ApiErrorHandler.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
    mutations: {
      retry: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <ApiErrorHandler>
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
        </ApiErrorHandler>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
);
