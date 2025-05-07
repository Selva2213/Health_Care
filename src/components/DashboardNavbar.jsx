import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import { FaUser } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  const { data, logout } = useAuth();
  const routes = [
    {
      label: "Profile",
      href: "/dashboard/profile",
      isActive: pathname === "/dashboard/profile",
      icon: FaUser,
    },
    {
      label: "Appointments",
      href: "/dashboard/appointments",
      isActive: pathname === "/dashboard/appointments",
      icon: FaHandHoldingMedical,
    },
  ];
  return (
    <>
      <h3 className="text-blue-700 font-semibold capitalize text-2xl text-center">
        Hi, {data?.role === "ADMIN" ? "Admin" : data?.fullname}
      </h3>
      <ul className="p-2">
        {routes.map((route) => (
          <Link key={route.label} to={route.href}>
            <li
              className={`w-full py-2 px-4 rounded-md my-2 flex items-center gap-2 transition-all duration-500 ease-in-out  ${
                route.isActive
                  ? "bg-gradient text-white"
                  : "hover:bg-blue-200 text-cyan-700"
              }`}
            >
              <route.icon />
              <span>{route.label}</span>
            </li>
          </Link>
        ))}
        <button
          onClick={() => confirm("Are you sure want to logout?") && logout()}
          className={`w-full py-2 px-4 rounded-md my-2 flex items-center gap-2 transition-all duration-500 ease-in-out hover:bg-blue-200 text-cyan-700`}
        >
          <CiLogout />
          <span>Logout</span>
        </button>
      </ul>
    </>
  );
};

export default DashboardLayout;
