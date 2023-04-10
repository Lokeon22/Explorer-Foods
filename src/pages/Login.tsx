import { Routes, Route } from "react-router-dom";

import { LoginRegister } from "../components/LoginRegister";
import { UserLogin } from "../components/LoginContainer/UserLogin";
import { UserRegister } from "../components/LoginContainer/UserRegister";
import { NotFound } from "../components/Helper/NotFound";

export function Login() {
  return (
    <LoginRegister>
      <Routes>
        <Route path="" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LoginRegister>
  );
}
