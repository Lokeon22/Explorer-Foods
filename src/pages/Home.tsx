import { CardSaboresIni } from "../components/CardSaboresIni";
import { SubTitle } from "../components/Title/SubTitle";
import { DishesCategory } from "../components/DishesCategory";

export function Home() {
  return (
    <>
      <main className="max-w-[1400px] h-full mx-auto my-0 text-white px-1">
        <CardSaboresIni />
        <SubTitle text="Refeições" />
        <DishesCategory category="Refeição" />
        <SubTitle text="Sobremesas" />
        <DishesCategory category="Sobremesa" />
        <SubTitle text="Bebidas" />
        <DishesCategory category="Bebida" />
      </main>
    </>
  );
}
