import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { UserProps, PedidosProps, FavoritesProps } from "../models/@types";

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  user: UserProps | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserProps | undefined>>;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
  pedidos: PedidosProps[];
  setPedidos: React.Dispatch<React.SetStateAction<PedidosProps[]>>;
  favorites: FavoritesProps[];
  setFavorites: React.Dispatch<React.SetStateAction<FavoritesProps[]>>;
}

const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserProps | undefined>();
  const [pedidos, setPedidos] = useState<PedidosProps[]>([]);
  const [favorites, setFavorites] = useState<FavoritesProps[]>([]);

  async function handleLogin(email: string, password: string) {
    await api
      .post<UserProps>("/login", { email, password })
      .then((res) => setUser(res.data))
      .catch((error) => {
        if (error.response.status === 500) {
          alert("Email e/ou senha incorretos");
        }
      });
  }

  if (user) {
    localStorage.setItem("@foods:user", JSON.stringify(user.user));
    localStorage.setItem("@foods:token", user.token);
    api.defaults.headers.common["Authorization"] = `Bearer ${user?.token}`;
  }

  async function handleLogout() {
    localStorage.removeItem("@foods:user");
    localStorage.removeItem("@foods:token");
    setUser(undefined);
  }

  useEffect(() => {
    const user = localStorage.getItem("@foods:user");
    const token = localStorage.getItem("@foods:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser({
        user: JSON.parse(user),
        token,
      });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleLogin,
        handleLogout,
        pedidos,
        setPedidos,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
