import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import { UserProvider } from "./context/useUser";
import { FavoritesProvider } from "./context/useFavorites";

export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <FavoritesProvider>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </FavoritesProvider>
      </UserProvider>
    </BrowserRouter>
  );
}
