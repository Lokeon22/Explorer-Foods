export interface DishProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  created_at: string;
  allIngre: DishIngredientsProps[];
}

interface DishIngredientsProps {
  dish_id: number;
  ingre_name: string;
}
