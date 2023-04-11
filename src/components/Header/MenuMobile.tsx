import { useUser } from "../../context/useUser";
import { Link } from "react-router-dom";

import close from "../../assets/icons/close.svg";
import searchicon from "../../assets/icons/search.svg";

interface MenuMobileProps {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobile({ setMenu }: MenuMobileProps) {
  const { handleLogout, user } = useUser();

  function handleCloseModal() {
    setMenu(false);
  }

  return (
    <nav className="w-full h-full flex flex-col justify-center px-6">
      <div className="flex items-center justify-start gap-5 mb-6">
        <img src={close} className="w-5 h-5" onClick={handleCloseModal} />
        <h2 className="text-xl">Menu</h2>
      </div>
      <div className="relative flex items-center mb-6">
        <img src={searchicon} className="absolute w-6 h-6 left-2 top-3.5" />
        <input
          className="w-full h-12 px-10 py-3 bg-[#0D1D25] outline-none rounded"
          placeholder="Busque por pratos ou ingredientes"
          type="text"
        />
      </div>
      {!!user?.user.is_admin && (
        <Link to={"/new"}>
          <h2 className="text-2xl font-light font-Poppins text-[#E1E1E6] mb-2">
            Novo prato
          </h2>
        </Link>
      )}
      <Link to={"/"} onClick={handleLogout}>
        <h2 className="text-2xl font-light font-Poppins text-[#E1E1E6]">
          Sair
        </h2>
      </Link>
    </nav>
  );
}
