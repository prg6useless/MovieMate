import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../utils/storage";

import { FaUserCircle } from "react-icons/fa";

const AdminSidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = getToken("currentUser")
    ? JSON.parse(getToken("currentUser"))
    : "";
    
  const isAdmin = user?.roles?.includes("admin") || false;

  const handleSignOut = () => {
    removeToken();
    removeToken("currentUser");
    navigate("/login", { replace: true });
  };
  return (
    <>
      <div
        style={{ height: "100vh", width: "280px" }}
        className="bg-dark text-white d-flex flex-column p-3"
      >
        <Navbar.Brand href="/admin" className="text-white mb-3">
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#moviemate" />
          </svg>
          <span className="fs-4">MovieMate</span>
        </Navbar.Brand>
        <hr />
        <Nav className="nav nav-pills flex-column mb-auto">
          <Nav.Item>
            <Link
              to="/"
              className={
                pathname === "/admin"
                  ? "nav-link active"
                  : "nav-link text-white"
              }
              aria-current="page"
            >
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#home" />
              </svg>
              Home
            </Link>
          </Nav.Item>
          {isAdmin && (
            <>
              <Nav.Item>
                <Link
                  to="/admin/users"
                  className={
                    pathname === "/admin/users"
                      ? "nav-link active"
                      : "nav-link text-white"
                  }
                >
                  <svg className="bi me-2" width="16" height="16">
                    <use xlinkHref="#users" />
                  </svg>
                  Users
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/admin/movies"
                  className={
                    pathname === "/admin/movies"
                      ? "nav-link active"
                      : "nav-link text-white"
                  }
                >
                  <svg className="bi me-2" width="16" height="16">
                    <use xlinkHref="#movies" />
                  </svg>
                  Movies
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/admin/orders"
                  className={
                    pathname === "/admin/orders"
                      ? "nav-link active"
                      : "nav-link text-white"
                  }
                >
                  <svg className="bi me-2" width="16" height="16">
                    <use xlinkHref="#orders" />
                  </svg>
                  Orders
                </Link>
              </Nav.Item>
            </>
          )}

          <Nav.Item>
            <Link
              to="/admin/settings"
              className={
                pathname === "/admin/settings"
                  ? "nav-link active"
                  : "nav-link text-white"
              }
            >
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#settings" />
              </svg>
              Settings
            </Link>
          </Nav.Item>
        </Nav>
        <hr />
        <Dropdown>
          <Dropdown.Toggle
            variant="dark"
            id="dropdown-user"
            className="d-flex align-items-center text-white"
          >
            {/* <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            /> */}
            <FaUserCircle
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>{user.name}</strong>
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark" className="shadow">
            <Link className="dropdown-item" to="/settings">
              Settings
            </Link>
            <Link className="dropdown-item" to="/admin/profile">
              Profile
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default AdminSidebar;
