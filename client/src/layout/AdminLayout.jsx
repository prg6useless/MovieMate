import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminSidebar />
      {children}
    </>
  );
};

export default AdminLayout;
