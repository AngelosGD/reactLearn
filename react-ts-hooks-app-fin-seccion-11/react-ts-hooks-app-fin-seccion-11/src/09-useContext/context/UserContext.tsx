import { createContext, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock-data";

// interface UserContextProps {
//     children: React.ReactNode
// }

type AuthStatus = "checking" | "authenticated" | "not authenticated";

interface UserContextProps {
  // ? estados / state
  authStatus: AuthStatus;
  user?: User | null;

  // * Methods / Metodos
  login: (userId: number) => boolean;
  logout: () => void;
}

// ? si lo declaramos con <> habra error ya que no esta inicializado, entonces creamos un objeto vacio y ponemos as UserContextProps
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps);

// ? ya que PROVEE estadp
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  // ? creamos los estados para el authStatus y user simplementes con el usestate y asignando sus tipos
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`User no encontrado: ${userId}`);
      setUser(null);
      setAuthStatus("not authenticated");
      return false;
    }

    setUser(user);
    setAuthStatus("authenticated");
    return true;
  };

  const handleLogout = () => {
    console.log("logout");
    setAuthStatus("not authenticated");
    setUser(null);
  };
  return (
    <UserContext
      value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
