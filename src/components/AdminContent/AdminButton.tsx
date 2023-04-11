import { Link } from "react-router-dom";
import receipt from "../../assets/icons/receipt.svg";

interface ButtonProps {
  text: string;
  url: string;
  icon: "true" | "false";
}

export function AdminButton({ text, url, icon = "false" }: ButtonProps) {
  return (
    <>
      <Link to={`/${url}`}>
        <button className="relative w-52 h-12 text-center text-sm font-medium bg-[#750310] rounded">
          {text}
          <img
            src={receipt}
            className="w-7 h-7 absolute top-2.5 left-7"
            style={{ display: icon === "true" ? "block" : "none" }}
          />
        </button>
      </Link>
    </>
  );
}
