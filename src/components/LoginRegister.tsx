import explorer from "../assets/icons/explorer.svg";

interface LoginRegisterProps {
  children: React.ReactNode;
}

export const LoginRegister = ({ children }: LoginRegisterProps) => {
  return (
    <main className="w-full h-screen flex justify-center items-center text-white">
      <section className="grid grid-cols-1 px-2 sm:grid-cols-2 gap-2 md:gap-5">
        <div className="flex justify-center items-center mb-2 md:mb-16">
          <img src={explorer} className="w-4/5 h-full sm:w-80 sm:h-12" />
        </div>
        <div className="w-full lg:w-[450px] bg-[#001119] px-4 py-5 lg:px-12 lg:py-12 flex flex-col justify-center rounded-lg">
          {children}
        </div>
      </section>
    </main>
  );
};
