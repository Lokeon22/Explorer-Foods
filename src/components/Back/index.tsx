import { Link } from "react-router-dom";

export function Back() {
  return (
    <Link className="font-bold font-Poppins px-2" to="/">
      <p className="inline-block text-2xl mt-7 mb-10 text-[#E1E1E6]">Voltar</p>
    </Link>
  );
}
