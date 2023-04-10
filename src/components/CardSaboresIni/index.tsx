import frutas from "../../assets/icons/frutas.svg";

export const CardSaboresIni = () => {
  return (
    <section className="relative w-full h-32 md:h-[257px] bg-card-gradient mt-11 md:mt-40 mx-auto flex gap-2 sm:gap-4 justify-around items-center rounded-lg">
      <div>
        <img
          src={frutas}
          className="relative -top-4 md:-top-16 w-full h-40 md:h-96 object-cover"
        />
      </div>
      <div className="flex flex-col gap-0 md:gap-3 font-Poppins text-[#E1E1E6]">
        <h2 className="text-lg sm:text-3xl md:text-[40px] font-medium">
          Sabores inigualáveis
        </h2>
        <p className="text-xs md:font-normal">
          Sinta o cuidado do preparo com ingredientes selecionados
        </p>
      </div>
    </section>
  );
};
