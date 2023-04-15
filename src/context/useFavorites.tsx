import { createContext, useContext, useState, useEffect } from "react";
import { FavoritesProps } from "../models/@types";

interface FavoritesProviderProps {
  children: React.ReactNode;
}

interface FavoritesContextProps {
  favorites: FavoritesProps[];
  setFavorites: React.Dispatch<React.SetStateAction<FavoritesProps[]>>;
  addFavorites: (data: FavoritesProps) => void;
  removeFavorites: (id: number) => void;
}

export const FavoritesContext = createContext({} as FavoritesContextProps);

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<FavoritesProps[]>(
    JSON.parse(`${localStorage.getItem("@foods:fav")}`) || []
  );

  function addFavorites(data: FavoritesProps) {
    setFavorites([...favorites, data]);
  }

  function removeFavorites(id: number) {
    const filtered = favorites.filter((fav) => fav.id !== id);
    setFavorites(filtered);
  }

  useEffect(() => {
    localStorage.setItem("@foods:fav", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, addFavorites, removeFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites() {
  const context = useContext(FavoritesContext);
  return context;
}
