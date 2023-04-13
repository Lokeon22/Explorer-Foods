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

export interface UserProps {
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
    is_admin: number;
  };
  token: string;
}

export interface PedidosProps {
  id: number;
  name: string;
  price: string;
  image: string;
}
