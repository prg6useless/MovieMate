import UserFooter from "./UserFooter";
import UserNavbar from "./UserNavbar";

const UserLayout = ({ children }) => {
  return (
    <>
      <UserNavbar />
      {children}
      <UserFooter />
    </>
  );
};

export default UserLayout;
