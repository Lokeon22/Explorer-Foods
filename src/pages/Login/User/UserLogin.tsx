import { useState } from "react";
import { useUser } from "../../../context/useUser";
import { Link } from "react-router-dom";

import { Title } from "../../../components/Title";
import { Label } from "../../../components/Label";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export function UserLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { handleLogin } = useUser();

  return (
    <main className="animate-changeOpDire">
      <Title text="Faça login" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(email, password);
        }}
      >
        <Label id="email" text="Email" />
        <Input
          id="email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          border="small"
        />
        <Label text="Senha" id="password" />
        <Input
          id="password"
          type="password"
          placeholder="No mínimo 6 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          border="small"
        />
        <Button text="Entrar" />
        <div className="text-center font-medium font-Poppins text-sm sm:text-base">
          <Link to={"/register"}>Criar uma conta</Link>
        </div>
      </form>
    </main>
  );
}
