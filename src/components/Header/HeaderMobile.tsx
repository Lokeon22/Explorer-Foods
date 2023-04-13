import { useState } from "react";
import { useUser } from "../../context/useUser";
import { Link } from "react-router-dom";
import { MenuMobile } from "./MenuMobile";
import exploreradmin from "../../assets/icons/explorer_admin.svg";
import explorer from "../../assets/icons/explorer.svg";
import menuIcon from "../../assets/icons/menu.svg";
import receipt from "../../assets/icons/receipt.svg";

interface HeaderMobileProps {
  is_admin?: number;
}

export function HeaderMobile({ is_admin }: HeaderMobileProps) {
  const { pedidos } = useUser();
  const [menu, setMenu] = useState<boolean>(false);

  function handleOpenModal() {
    setMenu(true);
  }

  return (
    <>
      <section className="flex lg:hidden justify-around items-center pt-10 pb-6">
        {menu ? (
          <MenuMobile setMenu={setMenu} />
        ) : (
          <>
            <img src={menuIcon} onClick={handleOpenModal} />
            <Link to={"/"}>
              <img
                src={!!is_admin ? exploreradmin : explorer}
                className="w-52 h-full"
              />
            </Link>
            {!!is_admin ? null : (
              <div className="relative">
                <Link to={"/payment"}>
                  <img className="relative" src={receipt} />
                  <button className="text-white text-sm bg-[#750310] px-[1px] rounded-full w-5 h-5 absolute -top-1 left-4">
                    {pedidos.length}
                  </button>
                </Link>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
