import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { BsX } from "react-icons/bs";
import useAuth from "../hooks/use-auth";
import Loader from "./Loader";
import Logo from "../assets/logo_2.png";
import UserLogo from "../assets/user.png";

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
    //automatically close the opened navbar at medium devices
    const handleResize = () => {
      window.innerWidth > 750 && setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setOpen(false)
  } , [pathname])

  const routes = [
    {
      label: "Home",
      href: "/",
      isActive: pathname === "/",
    },
    {
      label: "About",
      href: "/about",
      isActive: pathname === "/about",
    },
    {
      label: "Find a doctor",
      href: "/search",
      isActive: pathname === "/search",
    },
  ];

  return (
    <nav className="relative">
      <div
        className={`fixed inset-0 z-50 w-screen p-5 text-white text-right flex justify-between bg-gradient ${
          open ? "h-full items-start" : "h-[60px] items-center"
        } transition-all duration-500 ease-in-out md:transition-none`}
      >
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-start">
          <div className="flex items-center gap-2">
            <Icon
              size={"1.3rem"}
              role="button"
              onClick={toggle}
              className="block md:hidden p-1 rounded-full text-black bg-white"
            />
            <Link to="/" className="flex items-center gap-1">
              <img
                src={Logo}
                alt="healthcare logo"
                width={50}
                className="object-cover"
              />
              <h1 className="text-xl font-bold">HealthCare</h1>
            </Link>
          </div>
          <ul
            className={`md:flex items-start md:items-center gap-4 mt-2 ${
              !open ? "hidden" : "flex flex-col ms-7 mt-2"
            }`}
          >
            {routes.map((route, i) => (
              <Link
                key={i}
                to={route.href}
                className={`${route.isActive && "border-b border-b-white"}`}
              >
                {route.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="pr-2 ps-3">
          {loading ? (
            <Loader clip={true} />
          ) : !isAuthenticated ? (
            <Link
              to="/login"
              className="py-2 px-3 rounded-lg bg-gray-200 text-blue-700 text-sm hover:text-white hover:bg-blue-800 transition-all ease-in-out duration-500"
            >
              Signup/Login
            </Link>
          ) : (
            <Link to={"/dashboard/profile"}>
              <img
                src={image || UserLogo}
                alt={user?.fullname}
                width={30}
                height={30}
                className="rounded-full object-cover"
                onError={() => setImage(UserLogo)}
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
