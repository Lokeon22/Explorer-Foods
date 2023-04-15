import { useRef } from "react";
import { useFetchData } from "../../hooks/useFetchData";

import { Dishes } from "../Dishes";
import { DishProps } from "../../models/@types";
import { Loading } from "../Helper/Loading";
import { Error } from "../Helper/Error";

import { Carouselleft } from "../Carousel/CarouselLeft";
import { Carouselright } from "../Carousel/CarouselRight";

interface DishCategory {
  category: string;
}

export function DishesCategory({ category }: DishCategory) {
  const carousel = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, isError } = useFetchData<DishProps[]>({
    url: "dishes",
    parameter: category,
    key: "getDishes",
    keyRefresh: category,
  });

  if (isLoading) {
    return <Loading text="Carregando cardápio..." />;
  }

  if (isError) {
    return <Error text="Ocorreu algum error, tente novamente mais tarde" />;
  }

  return (
    <div className="w-full flex flex-row items-center gap-7 mt-0 mb-16">
      <Carouselleft carousel={carousel} />
      <div
        className="carousel flex flex-nowrap overflow-x-auto md:scrollbar-hide scrollbar-default scroll-smooth"
        ref={carousel}
      >
        {data &&
          data.map((dish) => (
            <div
              key={dish.id}
              className="sm:w-[300px] w-[250px] flex flex-none py-2 px-2 sm:py-14 sm:px-6 flex-col items-center"
            >
              <Dishes data={dish} />
            </div>
          ))}
      </div>
      <Carouselright carousel={carousel} />
    </div>
  );
}
