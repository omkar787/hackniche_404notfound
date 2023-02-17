import instance from "../../utils/axiosInstance";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    const checkLogin = async () => {
      setLoading(true);

      const res = await instance.get("/users/verifyLoggedIn");
      console.log(res.data);
      if (res.data.ok) {
        setUser(res.data.user);
        navigate("/");
      }
      setLoading(false);
      console.log("Login check done");
    };
    checkLogin();
  }, [location.pathname]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loadingUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
