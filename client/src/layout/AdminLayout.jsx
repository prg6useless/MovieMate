import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="d-flex">
      <AdminSidebar/>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
