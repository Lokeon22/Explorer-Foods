import { useState } from "react";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

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
    await api
      .post("/create", { name, email, password })
      .then((res) => {
        alert("Usuario cadastrado");
        navigate("/");
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 500) {
          alert("Esse email já está em uso");
        }
      });
  }

  return (
    <>
      <Title text="Crie sua Conta" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createUser(name, email, password);
        }}
      >
        <Label text="Seu nome" id="name" />
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Exemplo: Maria da Silva"
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
        <Button text="Criar conta" />
        <div className="text-center font-medium font-Poppins text-sm sm:text-base">
          <Link to={"/"}>Já tenho uma conta</Link>
        </div>
      </form>
    </>
  );
}
