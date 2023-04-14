import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="max-w-[1280px] mx-auto my-0 font-Poppins">
      <h2 className="font-medium text-xl text-white">
        ERRO 404 | Pagina não encontrada
      </h2>
      <Link
        className="text-gray-200 text-lg border-b-2 hover:text-gray-400 hover:border-gray-500 duration-300 ease-in"
        to={"/"}
      >
        Voltar
      </Link>
    </div>
  );
}
