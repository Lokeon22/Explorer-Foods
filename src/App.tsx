import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/app.routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
