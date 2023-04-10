import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { useQuery } from "@tanstack/react-query";

import { DishProps } from "../models/@types";
import { DishDetail } from "../components/Dishes/DishDetails";

export function Details() {
  const { id } = useParams();

  async function getDishDetails() {
    const response = await api.get<DishProps[]>(`/dish/${id}`);
    return response.data;
  }

  const { data, isLoading } = useQuery(["getDishDetails"], getDishDetails);

  if (isLoading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <>
      <main className="max-w-[1280px] min-h-screen mx-auto my-0 text-white px-2">
        <Link className="font-bold font-Poppins px-2" to="/">
          <p className="inline-block text-2xl mt-7 mb-10 text-[#E1E1E6]">
            Voltar
          </p>
        </Link>
        <section className="w-full mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
          {data &&
            data.map((dish) => {
              return <DishDetail key={dish.id} dish={dish} />;
            })}
        </section>
      </main>
    </>
  );
}
