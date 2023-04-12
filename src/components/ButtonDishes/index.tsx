import { useState } from "react";
import minus from "../../assets/icons/Minus.svg";
import plus from "../../assets/icons/Plus.svg";

export function ButtonDishes() {
  const [amount, setAmount] = useState<number>(1);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4"
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => {
            if (amount <= 1) {
              return;
            }
            setAmount(amount - 1);
          }}
        >
          <img src={minus} className="w-6 h-6" />
        </button>
        <button
          className="font-Roboto font-semibold text-lg bg-transparent"
          onClick={(e) => e.preventDefault()}
        >
          {amount}
        </button>
        <button
          type="button"
          onClick={() => {
            setAmount(amount + 1);
          }}
        >
          <img src={plus} className="w-6 h-6" />
        </button>
      </div>
      <button
        type="submit"
        className="bg-[#750310] px-4 py-2 rounded font-Poppins hover:bg-[#7c000d] hover:duration-300 w-4/5 sm:w-auto"
      >
        incluir
      </button>
    </form>
  );
}
