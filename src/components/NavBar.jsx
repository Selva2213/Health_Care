import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { BsX } from "react-icons/bs";
import useAuth from "../hooks/use-auth";
import Loader from "./Loader";
import Logo from "../assets/logo_2.png";
import UserLogo from "../assets/user.png";
// import "../styles.css";
const Navbar = () => {
  const { pathname } = useLocation();
  const { isAuthenticated, loading, data: user } = useAuth();

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const Icon = open ? BsX : FcMenu;
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(user?.avatar || UserLogo);
  }, [user]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const routes = [
    { label: "Home", href: "/", isActive: pathname === "/" },
    { label: "About", href: "/about", isActive: pathname === "/about" },
    // { label: "Symptoms", href: "/symptoms", isActive: pathname === "/symptoms" },
  ];

  return (
    <nav className="relative">
      <div
        className={`fixed inset-x-0 top-0 z-50 w-full px-5 py-3 transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md ${
          open ? "h-full" : "h-[65px]"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Icon
              size={"1.5rem"}
              onClick={toggle}
              className="md:hidden cursor-pointer bg-white text-black p-1 rounded-full"
            />
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="HealthCare" className="w-10 h-10" />
              <span className="text-xl font-bold">HealthCare</span>
            </Link>
          </div>
          <ul
            className={`md:flex gap-6 font-medium text-md items-center ${
              open ? "flex flex-col mt-10 md:mt-0" : "hidden"
            } md:flex-row`}
          >
            {routes.map((route, index) => (
              <li key={index}>
                <Link
                  to={route.href}
                  className={`hover:text-gray-100 transition-all duration-300 ${
                    route.isActive
                      ? "border-b-2 border-white pb-1"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            {loading ? (
              <Loader clip={true} />
            ) : !isAuthenticated ? (
              <Link
                to="/login"
                className="py-2 px-4 rounded-full bg-white text-blue-700 text-sm hover:bg-blue-800 hover:text-white transition-all"
              >
                Signup/Login
              </Link>
            ) : (
              <Link to="/dashboard/profile">
                <img
                  src={image || UserLogo}
                  alt={user?.fullname}
                  width={35}
                  height={35}
                  className="rounded-full object-cover border border-white"
                  onError={() => setImage(UserLogo)}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
