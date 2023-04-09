import type { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  border: "small" | "null";
}

export function Input({ border = "null", ...rest }: InputProps) {
  return (
    <input
      className="w-full lg:w-[348px] px-3 py-3 h-12 bg-[#0D1D25] rounded outline-none placeholder:text-[#7C7C8A] mt-2 mb-8"
      required
      style={{
        border: border === "small" ? "1px solid #FFFFFF" : "0px",
      }}
      {...rest}
    />
  );
}
