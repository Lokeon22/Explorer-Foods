import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

import { Title } from "../Title";
import { Input } from "../Input";
import { Label } from "../Label";
import { Button } from "../Button";

export function UserRegister() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function createUser(name: string, email: string, password: string) {
    if (password.length < 6) return alert("Senha no mínimo 6 caracteres");
    await api.post("/create", { name, email, password });
    alert("Usuário cadastrado");
    return navigate("/");
  }

  const { mutate, isLoading, isError } = useMutation(["createUser"], () =>
    createUser(name, email, password)
  );

  if (isError) {
    return <h2>Algo deu errado... Tente mais tarde</h2>;
  }

  return (
    <>
      <Title text="Crie sua Conta" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutate();
        }}
      >
        <Label text="Seu nome" id="name" />
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Exemplo: Joaquim Barbosa"
          name="name"
          border="null"
        />
        <Label text="Email" id="email" />
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Exemplo: exemplo@exemplo.com.br"
          name="email"
          border="null"
        />
        <Label text="Senha" id="password" />
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="No mínimo 6 caracteres"
          name="password"
          border="null"
        />
        <Button text="Criar conta" isLoading={isLoading} />
        <div className="text-center font-medium font-Poppins text-sm sm:text-base">
          <Link to={"/"}>Já tenho uma conta</Link>
        </div>
      </form>
    </>
  );
}
