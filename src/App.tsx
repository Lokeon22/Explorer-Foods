import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import { UserProvider } from "./context/useUser";

export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </UserProvider>
    </BrowserRouter>
  );
}
