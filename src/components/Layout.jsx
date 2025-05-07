import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./NavBar";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className="relative flex flex-col justify-between h-full">
      <Navbar /> {/* Navbar */}
      <main
        className={`pt-[60px] ${
          pathname.includes("dashboard") ? "px-0" : "px-5"
        }`}
      >
        <Outlet /> {/* Content */}
      </main>
    </div>
  );
};

export default Layout;
