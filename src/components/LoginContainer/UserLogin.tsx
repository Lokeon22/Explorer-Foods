import { Link } from "react-router-dom";
import { Title } from "../Title";
import { Label } from "../Label";
import { Input } from "../Input";
import { Button } from "../Button";

export function UserLogin() {
  return (
    <>
      <Title text="Faça login" />
      <form>
        <Label id="email" text="Email" />
        <Input
          id="email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          name="email"
          border="small"
        />
        <Label text="Senha" id="password" />
        <Input
          id="password"
          type="password"
          placeholder="No mínimo 6 caracteres"
          name="password"
          border="small"
        />
        <Button text="Entrar" />
        <div className="text-center font-medium font-Poppins text-sm sm:text-base">
          <Link to={"/register"}>Criar uma conta</Link>
        </div>
      </form>
    </>
  );
}
