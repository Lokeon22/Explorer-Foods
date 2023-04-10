import { api } from "../../services/api";
import { DishProps } from "../../models/@types";

import { ButtonDishes } from "../ButtonDishes";

interface DishDetailProps {
  dish: DishProps;
}

export function DishDetail({ dish }: DishDetailProps) {
  console.log(dish.allIngre);

  return (
    <div>
      <img src={`${api.defaults.baseURL}/files/${dish.image}`} />
      <div>
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <ul>
          {dish.allIngre.map((ingre) => {
            return <li key={ingre.ingre_name}>{ingre.ingre_name}</li>;
          })}
        </ul>
        <ButtonDishes price={dish.price} />
      </div>
    </div>
  );
}
