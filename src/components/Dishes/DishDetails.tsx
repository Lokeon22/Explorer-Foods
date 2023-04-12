import { useUser } from "../../context/useUser";
import { api } from "../../services/api";
import { DishProps } from "../../models/@types";

import { ButtonDetails } from "../ButtonDishes/ButtonDetails";
import { AdminButton } from "../AdminContent/AdminButton";

interface DishDetailProps {
  dish: DishProps;
}

export function DishDetail({ dish }: DishDetailProps) {
  const { user } = useUser();

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-5 lg:gap-12">
      <img
        className="w-96 h-full"
        src={`${api.defaults.baseURL}/files/${dish.image}`}
        alt={dish.name}
      />
      <div className="text-[#E1E1E6] font-Poppins flex text-center md:text-start flex-col gap-4 lg:gap-6">
        <h2 className="text-[27px] lg:text-4xl font-medium">{dish.name}</h2>
        <p className="text-normal lg:text-2xl">{dish.description}</p>
        <ul className="flex flex-wrap items-center justify-center md:justify-normal flex-row gap-6 lg:gap-3">
          {dish.allIngre.map((ingre) => {
            return (
              <li
                className="text-sm px-2 py-1 bg-[#192227] rounded font-medium"
                key={ingre.ingre_name}
              >
                {ingre.ingre_name}
              </li>
            );
          })}
        </ul>
        {!!user?.user.is_admin ? (
          <AdminButton
            icon="false"
            text="Editar prato"
            url={`editdish/${dish.id}`}
          />
        ) : (
          <ButtonDetails price={dish.price} />
        )}
      </div>
    </div>
  );
}
