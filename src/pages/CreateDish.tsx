import { Back } from "../components/Back";
import { AdminModifyDish } from "../components/AdminContent/AdminModifyDish";

export function CreateDish() {
  return (
    <main className="max-w-[1280px] min-h-screen mx-auto my-0 text-white px-2">
      <Back />
      <section className="w-full mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
        <h2 className="text-3xl mb-8">Adicionar prato</h2>
        <AdminModifyDish />
      </section>
    </main>
  );
}
