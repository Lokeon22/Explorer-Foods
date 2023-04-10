import minus from "../../assets/icons/Minus.svg";
import plus from "../../assets/icons/Plus.svg";
import receipt from "../../assets/icons/receipt.svg";

interface ButtonDetailsProps {
  price: string;
}

export function ButtonDetails({ price }: ButtonDetailsProps) {
  return (
    <form className="w-full flex flex-row justify-center md:justify-start items-center gap-3 md:gap-8 lg:px-0">
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
        className="bg-[#750310] relative w-[160px] h-10 text-center text-xs lg:text-sm px-5 lg:px-5 py-2 rounded font-Poppins hover:bg-[#7c000d] hover:duration-300 sm:w-auto"
      >
        <img
          src={receipt}
          className="w-6 h-6 absolute sm:hidden top-2 left-1"
        />
        incluir R$ {price}
      </button>
    </form>
  );
}
