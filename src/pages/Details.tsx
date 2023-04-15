import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

import { Loading } from "../components/Helper/Loading";
import { Error } from "../components/Helper/Error";

import { DishProps } from "../models/@types";
import { DishDetail } from "../components/Dishes/DishDetails";
import { Back } from "../components/Back";

export function Details() {
  const { id } = useParams();

  const { data, isLoading, isError } = useFetchData<DishProps>({
    url: "dish",
    parameter: id,
    key: "getDetail",
  });

  if (isLoading) {
    <Loading text="Carregando..." />;
  }

  if (isError) {
    <Error text="Ocorreu algum erro, tente novamente" />;
  }

  return (
    <>
      <main className="max-w-[1280px] min-h-screen mx-auto my-0 text-white px-2">
        <Back />
        <section className="w-full mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
          {data && <DishDetail key={data.id} dish={data} imageSize="large" />}
        </section>
      </main>
    </>
  );
}
