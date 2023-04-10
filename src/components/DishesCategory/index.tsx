import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

import { Dishes } from "../Dishes";
import { DishProps } from "../../models/@types";

import { Carouselleft } from "../Carousel/CarouselLeft";
import { Carouselright } from "../Carousel/CarouselRight";

interface DishCategory {
  category: string;
}

export function DishesCategory({ category }: DishCategory) {
  const carousel = useRef<HTMLDivElement | null>(null);

  async function getDishes() {
    const response = await api.get<DishProps[]>(`/dishes/${category}`);
    return response.data;
  }

  const { data, isLoading } = useQuery(["getDishes", category], getDishes);

  if (isLoading) {
    return <h2>Carregando Cardápio...</h2>;
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
              <Dishes
                id={dish.id}
                name={dish.name}
                desc={dish.description}
                price={dish.price}
                image={dish.image}
              />
            </div>
          ))}
      </div>
      <Carouselright carousel={carousel} />
    </div>
  );
}
