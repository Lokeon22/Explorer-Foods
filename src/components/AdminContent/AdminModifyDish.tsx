import { useState } from "react";
import { Label } from "../Label";

export function AdminModifyDish() {
  const [category, setCategory] = useState<string>("Refeição");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <section className="w-full h-full flex items-center gap-8">
        <div className="relative flex flex-col justify-center">
          <Label id="image" text="Imagem do prato" />
          <button className="w-56 h-12 bg-blue-600">Selecionar imagem</button>
          <input type="file" className="absolute w-56 h-12 top-5 opacity-0" />
        </div>
        <div className="w-2/5 flex flex-col justify-center">
          <Label id="name" text="Nome" />
          <input type="text" className="text-black" />
        </div>
        <div className="w-2/5 flex flex-col justify-center">
          <Label id="category" text="Categoria" />
          <select
            id="category"
            className="text-black"
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
      <section className="w-full h-full flex items-center gap-8 my-8">
        <div className="w-3/4 flex flex-col justify-center">
          <Label id="ingredients" text="ingredientes" />
          <input />
        </div>
        <div className="w-1/4 flex flex-col justify-center">
          <Label id="price" text="Preço" />
          <input type="text" />
        </div>
      </section>
      <div className="w-full h-full flex flex-col">
        <Label id="description" text="Descrição" />
        <textarea
          className="w-full h-40 py-3 px-4 text-black outline-none"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        />
        <button
          type="submit"
          className="w-52 h-12 text-center text-sm font-medium bg-[#AB4D55] rounded self-end mt-8"
        >
          Salvar alterações
        </button>
      </div>
    </form>
  );
}
