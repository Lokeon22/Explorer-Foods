import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

import { Error } from "../components/Helper/Error";

import { Back } from "../components/Back";
import { DishProps } from "../models/@types";
import { DishDetail } from "../components/Dishes/DishDetails";

export function Search() {
  const { name } = useParams();

  const { data, isLoading, isError } = useFetchData<DishProps[]>({
    url: "alldishes",
    key: "getSearchDish",
  });

  if (isError) {
    return <Error text="Desculpe, ocorreu algum error" />;
  }

  return (
    <main className="max-w-[1280px] min-h-screen mx-auto my-0 text-white px-2 animate-changeOpDire">
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
