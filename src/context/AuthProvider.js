import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthContextDispathcher = createContext();
const LOCAL_STORAGE_AUTH_KEY = "authState";
const AuthProvider = ({ children }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
    setState(userData);
  }, []);
  useEffect(() => {
    const data = localStorage.setItem(
      LOCAL_STORAGE_AUTH_KEY,
      JSON.stringify(state)
    );
  }, [state]);
  return (
    <AuthContext.Provider value={state}>
      <AuthContextDispathcher.Provider value={setState}>
        {children}
      </AuthContextDispathcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
export const useAuthAction = () => useContext(AuthContextDispathcher);
