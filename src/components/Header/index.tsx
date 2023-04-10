import { useUser } from "../../context/useUser";
import { Link } from "react-router-dom";

import explorer from "../../assets/icons/explorer.svg";
import exploreradmin from "../../assets/icons/explorer_admin.svg";
import logout from "../../assets/icons/SignOut.svg";
import searchicon from "../../assets/icons/search.svg";
import receipt from "../../assets/icons/receipt.svg";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  const { handleLogout, user } = useUser();

  return (
    <header className="w-full h-full lg:h-28 bg-[#00111A] text-white">
      <section className="max-w-[1400px] h-12 hidden lg:grid grid-cols-4 mx-auto my-0 py-7 px-2 gap-2">
        <div className="flex items-center justify-center col-span-1">
          <Link to={"/"}>
            <img
              className="w-full md:w-52"
              src={!!user?.user.is_admin ? exploreradmin : explorer}
            />
          </Link>
        </div>
        <div className="relative flex items-center col-span-2">
          <img
            src={searchicon}
            className="absolute w-6 h-6 top-[18px] left-16"
          />
          <input
            className="w-full h-12 px-28 py-3 bg-[#0D1D25] outline-none rounded"
            placeholder="Busque por pratos ou ingredientes"
            type="text"
          />
        </div>
        <div className="flex items-center justify-center gap-8 col-span-1">
          <button className="relative w-52 h-14 px-8 py-3 rounded bg-[#750310] text-white">
            Pedidos (0)
            <img
              src={receipt}
              className="md:w-8 md:h-8 w-6 h-6 absolute md:top-3 md:left-5 top-1.5 left-1"
            />
          </button>
          <Link onClick={handleLogout} to={"/"}>
            <img className="w-8 h-8" src={logout} />
          </Link>
        </div>
      </section>
      <HeaderMobile is_admin={user?.user.is_admin} />
    </header>
  );
};
