import {Outlet} from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { useAuth } from "../hooks/useAuth";

export default function adminlayout() {

  useAuth({middleware: 'admin'});

  return (
    <div className="md:flex">
        <AdminSidebar/>

        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-5">
          <Outlet/>
        </main>

    </div>
  )
}
