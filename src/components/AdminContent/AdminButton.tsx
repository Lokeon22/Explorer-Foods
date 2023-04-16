import { Link } from "react-router-dom";
import receipt from "../../assets/icons/receipt.svg";

interface ButtonProps {
  text: string;
  url: string;
  icon: "true" | "false";
}

export function AdminButton({ text, url, icon = "false" }: ButtonProps) {
  return (
    <div>
      <Link to={`/${url}`}>
        <button className="relative w-44 lg:w-36 xl:w-44 h-12 text-center text-sm font-medium bg-[#750310] rounded duration-200 hover:bg-[#83010e]">
          {text}
          <img
            src={receipt}
            className="w-7 h-7 absolute top-2.5 left-4 lg:left-2 xl:left-4"
            style={{ display: icon === "true" ? "block" : "none" }}
          />
        </button>
      </Link>
    </div>
  );
}
