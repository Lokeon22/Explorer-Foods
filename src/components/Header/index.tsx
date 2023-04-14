import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/useUser";
import { Link } from "react-router-dom";

import explorer from "../../assets/icons/explorer.svg";
import exploreradmin from "../../assets/icons/explorer_admin.svg";
import logout from "../../assets/icons/SignOut.svg";
import searchicon from "../../assets/icons/search.svg";

import { HeaderMobile } from "./HeaderMobile";
import { AdminButton } from "../AdminContent/AdminButton";

export const Header = () => {
  const { handleLogout, user, pedidos } = useUser();
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  function navigateOnSearch() {
    if (search.length <= 0) {
      return;
    }
    navigate(`/search/${search}`);
  }

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
            className="absolute w-6 h-6 top-[14px] left-16 cursor-pointer"
            onClick={navigateOnSearch}
          />
          <input
            className="w-full h-12 px-28 py-3 bg-[#0D1D25] outline-none rounded"
            placeholder="Busque por pratos ou ingredientes"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center gap-4 col-span-1">
          {!!user?.user.is_admin ? (
            <AdminButton icon="false" text="Novo prato" url="createdish" />
          ) : (
            <>
              <Link to={"/favorites"}>
                <h2 className="text-center text-xs xl:text-sm hover:text-[#E1E1E6] duration-200">
                  Meus favoritos
                </h2>
              </Link>
              <AdminButton
                icon="true"
                text={`Pedidos (${pedidos.length})`}
                url="payment"
              />
            </>
          )}
          <Link onClick={handleLogout} to={"/"}>
            <img className="w-8 h-8" src={logout} />
          </Link>
        </div>
      </section>
      <HeaderMobile is_admin={user?.user.is_admin} />
    </header>
  );
};
