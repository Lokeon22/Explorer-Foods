import { useState } from "react";

import { MenuMobile } from "./MenuMobile";
import explorer from "../../assets/icons/explorer.svg";
import menuIcon from "../../assets/icons/menu.svg";
import receipt from "../../assets/icons/receipt.svg";

export function HeaderMobile() {
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
            <img src={explorer} className="w-52" />
            <img src={receipt} />
          </>
        )}
      </section>
    </>
  );
}
