import { api } from "../../services/api";

interface DishPedidosProps {
  pedido: {
    name: string;
    price: string;
    image: string;
  };
  indexItem: number;
  removeDish: (indexItem: any) => void;
}

export function DishPedidos({
  pedido,
  indexItem,
  removeDish,
}: DishPedidosProps) {
  return (
    <div className="flex flex-row items-start md:items-center gap-3 mb-5">
      <div>
        <img
          src={`${api.defaults.baseURL}/files/${pedido.image}`}
          className="max-w-[72px] md:w-[72px]"
          alt={pedido.image}
        />
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2">
          <h2 className="text-base sm:text-xl font-Poppins font-medium">
            {pedido.name}
          </h2>
          <span className="text-[#C4C4CC] text-xs sm:text-sm">
            R$ {pedido.price}
          </span>
        </div>

        <button
          className="text-[#750310] cursor-pointer hover:text-red-800 text-sm"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            removeDish(indexItem);
          }}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
