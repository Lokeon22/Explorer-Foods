import { Back } from "../components/Back";
import { PaymentPixCard } from "../components/PaymentPixCard";

export function Payment() {
  return (
    <>
      <main className="max-w-[1280px] min-h-screen mx-auto my-0 text-white px-2">
        <Back />
        <section className="w-full grid gap-4 md:gap-0 grid-cols-1 sm:grid-cols-6 mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium mt-5 md:mt-10">
          <div className="my-0 mx-0 sm:col-span-3">
            <h2 className="text-3xl mb-8">Meu pedido</h2>
            <section className="max-w-[1120px] mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins scrollbar-hide lg:scrollbar-default font-medium overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#660000] scrollbar-thumb-rounded-full scrollbar-track-rounded-full"></section>
          </div>

          <div className="mb-2 sm:mb-0 sm:col-span-3">
            <PaymentPixCard />
          </div>
        </section>
      </main>
    </>
  );
}
