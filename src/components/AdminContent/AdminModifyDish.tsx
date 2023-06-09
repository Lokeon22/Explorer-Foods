import { useState } from "react";
import { UseMutateFunction } from "@tanstack/react-query";
import { CreateDishProps } from "../../pages/CreateDish";

import { Error } from "../Helper/Error";
import { Label } from "../Label";
import { IngredientsItem } from "../IngredientsItem";
import upload from "../../assets/icons/upload.svg";

interface ModifyDishProps {
  mutate: UseMutateFunction<any, unknown, CreateDishProps, unknown>;
  isError: boolean;
  delDish?: UseMutateFunction<any, unknown, void, unknown>;
  editar?: boolean;
}

export function AdminModifyDish({
  mutate,
  isError,
  editar,
  delDish,
}: ModifyDishProps) {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("Refeição");

  const [ingreName, setIngreName] = useState<string[]>([]);
  const [newIngre, setNewIngre] = useState<string>("");

  function handleIngredients() {
    if (newIngre.length === 0) {
      alert("Preencha para adicionar");
      return;
    }
    setIngreName((prev) => [...prev, newIngre]);
    setNewIngre("");
  }

  function removeIngre(ingre?: string) {
    const ingreNameFiltered = ingreName.filter((name) => name !== ingre);
    setIngreName(ingreNameFiltered);
  }

  if (isError) {
    return (
      <Error text="Não foi possível adicionar o prato, por favor tente mais tarde" />
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (mutate) {
          mutate({ name, description, price, image, category, ingreName });
        }
      }}
    >
      <section className="w-full h-full flex flex-col md:flex-row items-center gap-8">
        <div className="relative flex flex-col self-start md:justify-center gap-4">
          <Label id="image" text="Imagem do prato" />
          <img src={upload} className="absolute w-5 h-5 top-[53px] left-3" />
          <button className="w-56 h-12 bg-[#0D161B] rounded-lg text-sm font-medium font-Poppins">
            Selecione imagem
          </button>
          <input
            type="file"
            className="absolute w-56 h-12 top-10 cursor-pointer opacity-0"
            onChange={(e) => {
              e.target.files && setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="w-full md:w-2/5 flex flex-col justify-center gap-4">
          <Label id="name" text="Nome" />
          <input
            id="name"
            type="text"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Salada Ceasar"
            className="outline-none px-[14px] py-3 rounded-lg placeholder:text-[#7C7C8A] font-Roboto bg-[#0D161B]"
          />
        </div>
        <div className="w-full md:w-2/5 flex flex-col justify-center gap-4">
          <Label id="category" text="Categoria" />
          <select
            id="category"
            className="outline-none px-[14px] py-3 rounded-lg text-[#C4C4CC] font-Roboto bg-[#0D161B]"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Refeição">Refeição</option>
            <option value="Sobremesa">Sobremesa</option>
            <option value="Bebida">Bebida</option>
          </select>
        </div>
      </section>
      <section className="w-full h-full flex flex-col md:flex-row items-center gap-8 my-8">
        <div className="relative w-full md:w-3/4 flex flex-col flex-wrap justify-center">
          <Label id="ingredients" text="ingredientes" />
          <div
            id="ingredients"
            className="flex flex-wrap gap-2 w-full relative px-4 py-3 h-full rounded-lg placeholder:text-[#7C7C8A] font-Roboto bg-[#0D161B] cursor-auto mt-4"
          >
            {ingreName.length > 0 &&
              ingreName.map((ingre) => {
                return (
                  <IngredientsItem
                    key={ingre}
                    value={ingre}
                    handleIngredients={removeIngre}
                  />
                );
              })}
            <IngredientsItem
              isNew
              handleIngredients={handleIngredients}
              value={newIngre}
              placeholder="Adicionar"
              onChange={(e) => setNewIngre(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col justify-center">
          <Label id="price" text="Preço" />
          <input
            id="price"
            type="text"
            placeholder="R$ 00,00"
            value={price || ""}
            onChange={(e) => e.target && setPrice(e.target.value)}
            className="outline-none px-[14px] py-3 rounded-lg placeholder:text-[#7C7C8A] font-Roboto bg-[#0D161B]"
          />
        </div>
      </section>
      <div className="w-full h-full flex flex-col">
        <Label id="description" text="Descrição" />
        <textarea
          id="description"
          className="w-full h-40 py-3 px-4 outline-none resize-none mt-4 rounded-lg bg-[#0D161B] placeholder:text-[#7C7C8A]"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex sm:gap-8 gap-4 self-auto md:self-end">
          <button
            style={{ display: editar ? "block" : "none" }}
            type="submit"
            className="w-full md:w-32 h-12 text-center text-sm font-medium bg-[#0D161B] rounded mt-8"
            onClick={(e) => {
              e.preventDefault();
              if (delDish) delDish();
            }}
          >
            Excluir prato
          </button>
          <button
            type="submit"
            className="w-full md:w-52 h-12 text-center text-sm font-medium bg-[#AB4D55] hover:bg-[#863b40] duration-500 rounded mt-8"
          >
            Salvar alterações
          </button>
        </div>
      </div>
    </form>
  );
}
