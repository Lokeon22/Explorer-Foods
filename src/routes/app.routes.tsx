import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../components/Helper/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
