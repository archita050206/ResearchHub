import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout = () => {
  const location=useLocation();
  const noPaddingRoutes=[
    '/dashboard/notes',
  ]
  const removePadding= noPaddingRoutes.includes(location.pathname);
  return (
    <div className="flex h-screen bg-slate-100">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex flex-1 flex-col overflow-hidden">

        <Navbar />

        <main className={`flex-1 overflow-y-auto ${removePadding?"":'p-6'}`}>

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;