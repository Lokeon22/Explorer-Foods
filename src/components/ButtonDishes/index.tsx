import minus from "../../assets/icons/Minus.svg";
import plus from "../../assets/icons/Plus.svg";

interface ButtonDishesProps {
  price?: string;
}

export function ButtonDishes({ price }: ButtonDishesProps) {
  return (
    <form className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4">
      <div className="flex items-center gap-3">
        <button type="button">
          <img src={minus} className="w-6 h-6" />
        </button>
        <button
          className="font-Roboto font-semibold text-lg bg-transparent"
          onClick={(e) => e.preventDefault()}
        >
          1
        </button>
        <button type="button">
          <img src={plus} className="w-6 h-6" />
        </button>
      </div>
      <button
        type="submit"
        className="bg-[#750310] px-4 py-2 rounded font-Poppins hover:bg-[#7c000d] hover:duration-300 w-4/5 sm:w-auto"
      >
        incluir {price && `R$ ${price}`}
      </button>
    </form>
  );
}
