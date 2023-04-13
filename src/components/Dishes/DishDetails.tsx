import { useUser } from "../../context/useUser";
import { api } from "../../services/api";
import { DishProps } from "../../models/@types";

import { ButtonDishes } from "../ButtonDishes";
import { AdminButton } from "../AdminContent/AdminButton";

interface DishDetailProps {
  dish: DishProps;
  margin?: boolean;
  imageSize: "small" | "large";
}

export function DishDetail({ dish, margin, imageSize }: DishDetailProps) {
  const { user } = useUser();

  return (
    <div
      className="flex flex-col md:flex-row items-center gap-6 md:gap-5 lg:gap-12"
      style={{ marginBottom: margin ? "50px" : "0px" }}
    >
      <img
        className="h-full"
        style={{ width: imageSize === "small" ? "300px" : "384px" }}
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
          <ButtonDishes data={dish} dishPrice={dish.price} />
        )}
      </div>
    </div>
  );
}
