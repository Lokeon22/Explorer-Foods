import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import type { ComponentPropsWithoutRef } from "react";

interface IngreProps extends ComponentPropsWithoutRef<"input"> {
  value: string;
  isNew?: boolean;
  handleIngredients: (ingre?: string) => void;
}

export function IngredientsItem({
  value,
  handleIngredients,
  isNew,
  ...rest
}: IngreProps) {
  return (
    <div className="flex items-center relative">
      <input
        className="relative w-32 h-8 pl-3 pr-10 py-2 outline-none rounded-lg"
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
        style={{
          background: isNew ? "transparent" : "#76797B",
          border: isNew ? "1px dashed #7C7C8A" : "none",
          color: isNew ? "#7C7C8A" : "white",
        }}
      />

      <button
        className="absolute right-2"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleIngredients(value);
        }}
      >
        {isNew ? (
          <AiOutlinePlus className="w-4 h-4 text-[#7C7C8A]" />
        ) : (
          <AiOutlineClose className="w-4 h-4 text-white" />
        )}
      </button>
    </div>
  );
}
