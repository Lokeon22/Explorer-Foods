export interface DishProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  created_at: string;
  ingredients: DishIngredientsProps[];
}

interface DishIngredientsProps {
  dish_id: number;
  ingre_name: string;
}
