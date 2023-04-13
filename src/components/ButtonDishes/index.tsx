import { useState, useRef } from "react";
import { useUser } from "../../context/useUser";

import { PedidosProps } from "../../models/@types";
import { Toastify, notify } from "../Toastify";

import minus from "../../assets/icons/Minus.svg";
import plus from "../../assets/icons/Plus.svg";

interface ButtonDishesProps {
  data: {
    id: number;
    name: string;
    price: string;
    image: string;
  };

  dishPrice?: string;
}

export function ButtonDishes({ data, dishPrice }: ButtonDishesProps) {
  const { pedidos, setPedidos } = useUser();
  const botao = useRef<HTMLButtonElement>(null);

  const [amount, setAmount] = useState<number>(1);
  const [cart, setCart] = useState<PedidosProps[]>([]);

  function addAmountCart() {
    setAmount(amount + 1);
    setCart([...cart, data]);
  }

  function removeFromCart(id: number | PedidosProps) {
    if (amount <= 1) {
      return;
    }
    let filteredCar = cart.filter((x, index, arr) => {
      arr[index] !== id;

      return index !== id;
    });
    setCart(filteredCar);
    setAmount(amount - 1);
  }

  function adicionarCarrinho(botao: React.RefObject<HTMLButtonElement>) {
    if (botao.current) botao.current.classList.toggle("animate-modifyScale");
    setPedidos([...pedidos, ...cart, data]);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        adicionarCarrinho(botao);
        notify();
      }}
      className="w-full flex flex-col sm:flex-row sm:flex-wrap items-center gap-4"
      style={{ justifyContent: dishPrice ? "start" : "center" }}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            cart.map((car, index) => {
              removeFromCart(index);
            });
          }}
        >
          <img src={minus} className="w-6 h-6" />
        </button>
        <button className="font-Roboto font-semibold text-lg bg-transparent">
          {amount}
        </button>
        <button type="button" onClick={addAmountCart}>
          <img src={plus} className="w-6 h-6" />
        </button>
      </div>
      <button
        ref={botao}
        type="submit"
        className="bg-[#750310] px-4 py-2 rounded font-Poppins hover:bg-[#7c000d] hover:duration-300 w-4/5 sm:w-auto"
      >
        incluir {dishPrice && `R$ ${dishPrice}`}
      </button>
      <Toastify />
    </form>
  );
}
