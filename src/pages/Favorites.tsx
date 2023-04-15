import { useFavorites } from "../context/useFavorites";
import { api } from "../services/api";

import { Back } from "../components/Back";

export function Favorites() {
  const { favorites } = useFavorites();

  return (
    <main className="max-w-[1280px] min-h-screen mx-auto my-0 text-white px-2">
      <Back />
      <h2 className="text-xl mb-8 text-[#E1E1E6]">Meus Favoritos</h2>
      <section className="flex flex-col md:flex-row flex-wrap gap-12 md:gap-6 lg:gap-12 w-full mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
        {favorites.length > 0 ? (
          favorites.map((fav) => {
            return (
              <div key={fav.id} className="flex items-center gap-3">
                <img
                  className="w-20 h-20"
                  src={`${api.defaults.baseURL}/files/${fav.image}`}
                  alt={fav.name}
                />
                <div>
                  <h2 className="text-xl font-medium text-[#E1E1E6]">
                    {fav.name}
                  </h2>
                  <span className="text-sm text-[#C4C4CC]">R$ {fav.price}</span>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="text-2xl">Nenhum prato favorito</h2>
        )}
      </section>
    </main>
  );
}
