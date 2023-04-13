import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { Back } from "../components/Back";
import { DishProps } from "../models/@types";
import { DishDetail } from "../components/Dishes/DishDetails";

export function Search() {
  const { name } = useParams();

  async function getSearchItem() {
    const response = await api.get<DishProps[]>(`/alldishes`);
    return response.data;
  }

  const { data, isLoading, isError } = useQuery(
    ["getSearchItem"],
    getSearchItem
  );

  if (isError) {
    return <h2>Desculpe, ocorreu um erro</h2>;
  }

  return (
    <main className="max-w-[1280px] min-h-screen mx-auto my-0 text-white px-2">
      <Back />
      <section className="w-full mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
        <h2 className="text-base sm:text-xl mb-5">Pratos encontrados</h2>
        {isLoading && <h2 className="text-2xl mt-5">Carregando pratos...</h2>}
        {data
          ?.filter((val) => {
            if (name && val.name.toLowerCase().includes(name.toLowerCase()))
              return val;
          })
          .map((dish) => {
            return (
              <DishDetail
                key={dish.id}
                dish={dish}
                margin={true}
                imageSize="small"
              />
            );
          })}
      </section>
    </main>
  );
}
