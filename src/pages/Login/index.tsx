import { Routes, Route } from "react-router-dom";

import { LoginContainer } from "./LoginContainer";
import { UserLogin } from "./User/UserLogin";
import { UserRegister } from "./User/UserRegister";
import { NotFound } from "../../components/Helper/NotFound";

export function Login() {
  return (
    <LoginContainer>
      <Routes>
        <Route path="" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LoginContainer>
  );
}
