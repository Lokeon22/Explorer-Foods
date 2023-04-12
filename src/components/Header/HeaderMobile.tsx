import { useState } from "react";
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
            <Link to={"/payment"}>
              <img src={receipt} />
            </Link>
          </>
        )}
      </section>
    </>
  );
}
