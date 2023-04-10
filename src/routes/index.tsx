import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useUser } from "../context/useUser";

export function Routes() {
  const { user } = useUser();

  return user ? <AppRoutes /> : <AuthRoutes />;
}
