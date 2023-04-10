import { Link } from "react-router-dom";
import { api } from "../../services/api";

import { ButtonDishes } from "../ButtonDishes";
import heart from "../../assets/icons/HeartStraight.svg";

interface DishesProps {
  id: number;
  name: string;
  desc: string;
  price: string;
  image: string;
}

export function Dishes({ id, name, desc, price, image }: DishesProps) {
  return (
    <>
      <img src={heart} className="w-8 h-8 cursor-pointer self-end" />
      <Link to={`/details/${id}`}>
        <img
          src={`${api.defaults.baseURL}/files/${image}`}
          className="w-32 h-32 sm:w-44 sm:h-44 object-cover hover:opacity-75 hover:duration-300"
        />
      </Link>
      <h2 className="text-lg sm:text-2xl text-center font-Poppins font-medium sm:mt-4 mt-3 mb-1 sm:mb-2 text-[#E1E1E6]">
        {name}
      </h2>
      <p className="hidden sm:block text-sm font-Roboto font-normal text-center text-[#C4C4CC]">
        {desc}
      </p>
      <span className="text-[#82F3FF] text-xl sm:text-3xl font-Roboto mt-1 mb-3 sm:mt-4 sm:mb-4">
        R$ {price}
      </span>
      <ButtonDishes />
    </>
  );
}
