import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

interface FreteValorProps {
  valorTotal: string;
  simulateFrete: number;
}

type ViaCepProps = {
  bairro: string;
  localidade: string;
  logradouro: string;
  uf: string;
};

export function FreteValor({ valorTotal, simulateFrete }: FreteValorProps) {
  const [cep, setCep] = useState<string>("");

  const maskCep = (e: React.ChangeEvent<HTMLInputElement>) => {
    const modify = e.target.value.replace(/\D/g, "");
    setCep(modify);
  };

  const taxaEntrega = (simulateFrete / 4.25).toFixed(2).replace(".", ",");
  const valorTotalNumber: number = +valorTotal.replace(",", ".");
  const taxaEntregaNumber: number = +taxaEntrega.replace(",", ".");

  const compraValorFinal = (valorTotalNumber + taxaEntregaNumber)
    .toFixed(2)
    .replace(".", ",");

  async function getCepApi() {
    if (cep.length <= 0) {
      return;
    }
    const response = await axios.get<ViaCepProps>(
      `https://viacep.com.br/ws/${cep}/json/`
    );
    return response.data;
  }

  const { data, mutate, isError, isLoading } = useMutation(
    ["getCepApi"],
    getCepApi
  );

  if (isError) {
    return (
      <h2 className="my-3">
        Desculpe não encontrei seu cep, tente mais tarde...
      </h2>
    );
  }

  if (isLoading) {
    return <h2 className="my-3">Carregando...</h2>;
  }

  return (
    <div>
      <h2
        className="mt-2"
        style={{
          color: data ? "#b7b7bd" : "white",
          textDecoration: data ? "line-through" : "none",
        }}
      >
        Total: R$ {valorTotal}
      </h2>
      {data && (
        <div className="flex flex-col flex-wrap mt-1 text-sm text-[#C4C4CC]">
          <span>{data.logradouro}</span>
          <span>
            {data.localidade}-{data.uf}
          </span>
          <span>Taxa de entrega: R$ {taxaEntrega}</span>
          <p className="text-white text-base mt-2">
            Valor final: R$ {compraValorFinal}
          </p>
        </div>
      )}
      <section className="flex flex-col sm:flex-row items-auto sm:items-center gap-2 mt-2">
        <input
          placeholder="CEP: 00000-000"
          className="w-1/2 sm:w-40 px-2 py-1 outline-none rounded-md text-sm md:text-base bg-transparent border border-gray-500 text-slate-200"
          value={cep.replace(/^(\d{5})(\d)/, "$1-$2")}
          onChange={(e) => {
            maskCep(e);
          }}
          maxLength={9}
        />
        <button
          type="submit"
          className="w-1/2 sm:w-auto px-2 py-2 bg-[#750310] hover:bg-[#66030f] hover:duration-300 rounded text-xs md:text-sm font-normal"
          onClick={(e) => {
            e.preventDefault();
            mutate();
          }}
        >
          Calcular entrega
        </button>
      </section>
    </div>
  );
}
