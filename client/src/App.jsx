import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";

// user routes
import Login from "./pages/Login";
import Register from "./pages/Register";

// admin routes
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Orders from "./pages/admin/orders/Orders";
import Order from "./pages/admin/orders/Order";
import Movies from "./pages/admin/movies/Movies";
import Movie from "./pages/admin/movies/Movie";
import Users from "./pages/admin/users/Users";
import User from "./pages/admin/users/User";

// user pages
import UserLayout from "./layout/UserLayout";
import Home from "./pages/user/Home";
import Cart from "./pages/user/Cart";
import MovieDetail from "./pages/user/MovieDetail";
import Settings from "./pages/Settings";

import ThemeContext from "./context/ThemeContext";
import VerifyEmail from "./pages/VerifyEmail";
import ForgetPassword from "./pages/ForgetPassword";
import Checkout from "./pages/user/Checkout";

// routing check
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <ThemeContext>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forget-password" element={<ForgetPassword />} /> */}
        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/movies/:slug" element={<MovieDetail />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<PrivateRoute component={<Dashboard />} />} />
          <Route
            path="orders/"
            element={
              <PrivateRoute component={<Orders />} sysRoles={["admin"]} />
            }
          />
          <Route
            path="orders/:id"
            element={
              <PrivateRoute component={<Order />} sysRoles={["admin"]} />
            }
          />
          <Route
            path="movies"
            element={
              <PrivateRoute component={<Movies />} sysRoles={["admin"]} />
            }
          />
          <Route
            path="movies/:id"
            element={
              <PrivateRoute component={<Movie />} sysRoles={["admin"]} />
            }
          />
          <Route
            path="users"
            element={
              <PrivateRoute component={<Users />} sysRoles={["admin"]} />
            }
          />
          <Route
            path="users/:id"
            element={<PrivateRoute component={<User />} sysRoles={["admin"]} />}
          />
          <Route
            path="profile"
            element={<PrivateRoute component={<Dashboard />} />}
          />

          <Route
            path="settings"
            element={<PrivateRoute component={<Settings />} />}
          />
        </Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </ThemeContext>
  );
}

export default App;
