import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useUser } from "../../context/useUser";
import { useFavorites } from "../../context/useFavorites";

import { ButtonDishes } from "../ButtonDishes";
import heart from "../../assets/icons/HeartStraight.svg";
import redheart from "../../assets/icons/redheart.svg";
import pencil from "../../assets/icons/Pencil.svg";

interface DishesProps {
  data: {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
  };
}

export function Dishes({ data }: DishesProps) {
  const { user } = useUser();
  const { favorites, addFavorites, removeFavorites } = useFavorites();

  const isFavorites = favorites.some((fav) => fav.id === data.id);

  return (
    <>
      {!!user?.user.is_admin ? (
        <Link className="self-end" to={`/editdish/${data.id}`}>
          <img
            src={pencil}
            className="w-6 h-6 cursor-pointer"
            alt="icon editar"
          />
        </Link>
      ) : (
        <img
          onClick={() =>
            isFavorites ? removeFavorites(data.id) : addFavorites(data)
          }
          src={isFavorites ? redheart : heart}
          alt="icon coração"
          className="w-7 h-7 cursor-pointer self-end"
        />
      )}
      <Link to={`/details/${data.id}`}>
        <img
          src={`${api.defaults.baseURL}/files/${data.image}`}
          className="w-32 h-32 sm:w-44 sm:h-44 object-cover hover:opacity-75 hover:duration-300"
          alt={data.name}
        />
      </Link>
      <h2 className="text-lg sm:text-2xl text-center font-Poppins font-medium sm:mt-4 mt-3 mb-1 sm:mb-2 text-[#E1E1E6]">
        {data.name}
      </h2>
      <p className="hidden sm:block text-sm font-Roboto font-normal text-center text-[#C4C4CC]">
        {data.description}
      </p>
      <span className="text-[#82F3FF] text-xl sm:text-3xl font-Roboto mt-1 mb-3 sm:mt-4 sm:mb-4">
        R$ {data.price}
      </span>
      {user?.user.is_admin === 0 && <ButtonDishes data={data} />}
    </>
  );
}
