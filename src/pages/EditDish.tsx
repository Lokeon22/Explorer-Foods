import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { api } from "../services/api";

import { DishProps } from "../models/@types";
import { CreateDishProps } from "./CreateDish";
import { Back } from "../components/Back";
import { AdminModifyDish } from "../components/AdminContent/AdminModifyDish";

export function EditDish() {
  const { id } = useParams();
  const navigate = useNavigate();

  async function getDishEdit() {
    const response = await api.get<DishProps>(`/dish/${id}`);
    return response.data;
  }

  const { data, isLoading } = useQuery(["getDishEdit"], getDishEdit);

  async function updateDish({
    name,
    description,
    price,
    image,
    category,
    ingreName,
  }: CreateDishProps) {
    if (image) {
      const updateDishPhoto = new FormData();
      updateDishPhoto.append("image", image, image.name);

      await api.patch(`/dishphoto/${data?.id}`, updateDishPhoto);
    }

    const response = await api.put(`/editdish/${data?.id}`, {
      name,
      description,
      price,
      image: image ?? data?.image,
      category,
      ingre_name: ingreName ?? data?.allIngre,
    });
    return response.data;
  }

  const { mutate, isError } = useMutation(["updateDish"], updateDish, {
    onSuccess: () => {
      alert("Prato atualizazdo");
      navigate("/");
    },
  });

  async function deleteDish() {
    const res = await api.delete(`/remove/${id}`);
    return res.data;
  }

  const { mutate: delDish } = useMutation(["deleteDish"], deleteDish, {
    onSuccess: () => {
      alert("Prato deletado");
      navigate("/");
    },
  });

  if (isLoading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <main className="max-w-[1280px] min-h-screen mx-auto my-0 text-white px-2">
      <Back />
      <section className="w-full mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
        <h2 className="text-3xl mb-8">Editar prato</h2>
        <AdminModifyDish
          mutate={mutate}
          isError={isError}
          editar={true}
          delDish={delDish}
        />
      </section>
    </main>
  );
}
