import { Link } from "react-router-dom";

import { Title } from "../Title";
import { Input } from "../Input";
import { Label } from "../Label";
import { Button } from "../Button";

export function UserRegister() {
  return (
    <>
      <Title text="Crie sua Conta" />
      <form>
        <Label text="Seu nome" id="name" />
        <Input
          id="name"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          name="name"
          border="null"
        />
        <Label text="Email" id="email" />
        <Input
          id="email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          name="email"
          border="null"
        />
        <Label text="Senha" id="password" />
        <Input
          id="password"
          type="password"
          placeholder="No mínimo 6 caracteres"
          name="password"
          border="null"
        />
        <Button text="Criar conta" />
        <div className="text-center font-medium font-Poppins text-sm sm:text-base">
          <Link to={"/"}>Já tenho uma conta</Link>
        </div>
      </form>
    </>
  );
}
