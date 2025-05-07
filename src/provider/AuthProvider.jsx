import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { authRoutes, publicRoutes } from "../routes";
import { useAxios } from "../hooks/use-axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let [searchParams] = useSearchParams();

  const { loading, fetchData, mutateData } = useAxios();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState(null);

  console.log(data, isAuthenticated, loading);

  const modifyData = (data) => setData(data);

  const registerUser = async (registerData) => {
    const { obj: res, error } = await mutateData(
      "/auth/register",
      registerData
    );
    if (error || !res.data) {
      toast.error(error);
    } else {
      setIsAuthenticated(true);
      setData(res?.data);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      toast.success(res?.message || "Registered Successfully");
      if (res?.data?.role === "DOCTOR") {
        navigate(`/workDetails/${res?.data?._id}`, { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }
  };

  const loginUser = async (loginData) => {
    const { obj: res, error } = await mutateData("/auth/login", loginData);
    if (error || !res?.data) {
      toast.error(error);
    } else {
      setIsAuthenticated(true);
      setData(res?.data);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      toast.success(res?.message || "Logged in Successfully");
      navigate("/", { replace: true });
    }
  };

  const logout = async () => {
    const { obj: res, error } = await fetchData("/auth/logout");
    if (error || !res?.message) console.log(error);
    setIsAuthenticated(false);
    setData(null);
    localStorage.removeItem("isLoggedIn");
    navigate("/login", { replace: true });
    toast.info(res?.message || "Logged out successfully");
  };

  useEffect(() => {
    if (!window.navigator.onLine) {
      toast.error("Check your internet connectivity!");
    }
  });

  useEffect(() => {
    if (isAuthenticated && data) {
      return;
    }
    if (window === undefined) return;
    window.onload = async () => {
      const { obj: res, error } = await fetchData("/auth/me");
      if (error || !res?.data) {
        setIsAuthenticated(false);
        setData(null);
        localStorage.removeItem("isLoggedIn");
        if (error?.toLocaleLowerCase()?.includes("expired")) {
          toast.error("Session expired!  Please login again.");
          navigate("/login", { replace: true });
        }
      } else {
        setData(res?.data);
        setIsAuthenticated(true);
      }
      if (searchParams.get("OAuth")) {
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        toast.success(`Successfully logged in with Google!`);
        return navigate("/", { replace: true });
      }
    };
  });

  useLayoutEffect(() => {
    const authRoute = authRoutes.includes(pathname.toLowerCase());
    const publicRoute = publicRoutes.includes(pathname.toLowerCase());
    if (isAuthenticated && authRoute) {
      return navigate("/", { replace: true });
    } else if (isAuthenticated && !publicRoute) {
      return navigate(pathname, { replace: true });
    }
  }, [pathname, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        data,
        loginUser,
        registerUser,
        logout,
        modifyData,
      }}
    >
      <Toaster
        position="bottom-center"
        closeButton
        richColors={true}
        className="capitalize"
      />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
