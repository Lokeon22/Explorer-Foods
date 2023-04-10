import explorerfooter from "../../assets/icons/explorer-footer.svg";

export const Footer = () => {
  return (
    <footer className="text-white w-full bg-[#00111A]">
      <div className="max-w-[1400px] px-1 sm:px-4 py-6 flex items-center mx-auto my-0 justify-around sm:justify-between">
        <img src={explorerfooter} className="w-24 sm:w-32 md:w-48" />
        <span className="font-sans text-xs sm:text-sm">
          © 2022 - Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};
