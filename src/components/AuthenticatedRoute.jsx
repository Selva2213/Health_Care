import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import DashboardNavbar from "./DashboardNavbar";

const AuthenticatedRoute = () => {
  const { isAuthenticated, data } = useAuth();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAuthenticated && !data) return null;

  if (isLoggedIn && isAuthenticated) {
    return (
      <main className="grid grid-cols-12 space-y-4 overflow-y-auto">
        <nav className="col-span-12 md:col-span-3 border-r border-r-gray-300 py-2">
          <DashboardNavbar />
        </nav>
        <div className="col-span-11 md:col-span-9 py-2">
          <Outlet />
        </div>
      </main>
    );
  }
};
export default AuthenticatedRoute;
