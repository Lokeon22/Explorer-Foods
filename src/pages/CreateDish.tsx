import { useMutation } from "@tanstack/react-query";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

import { Back } from "../components/Back";
import { AdminModifyDish } from "../components/AdminContent/AdminModifyDish";

export interface CreateDishProps {
  name?: string;
  description?: string;
  price?: string;
  image: File | null;
  category: string;
  ingreName: string[];
}

export function CreateDish() {
  const navigate = useNavigate();

  async function adminCreateDish({
    name,
    description,
    price,
    image,
    category,
    ingreName,
  }: CreateDishProps) {
    if (image && name && description && price) {
      const dishForm = new FormData();
      dishForm.append("name", name);
      dishForm.append("description", description);
      dishForm.append("price", price);
      dishForm.append("image", image, image.name);
      dishForm.append("category", category);
      dishForm.append("ingre_name", JSON.stringify(ingreName));
      const response = await api.patch("/createdish", dishForm);
      return response.data;
    }
  }

  const { mutate, isError } = useMutation(
    ["adminCreateDish"],
    adminCreateDish,
    {
      onSuccess: () => {
        alert("Prato adicionado");
        navigate("/");
      },
    }
  );

  return (
    <main className="max-w-[1280px] min-h-screen mx-auto my-0 text-white px-2">
      <Back />
      <section className="w-full mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
        <h2 className="text-3xl mb-8">Adicionar prato</h2>
        <AdminModifyDish mutate={mutate} isError={isError} />
      </section>
    </main>
  );
}
