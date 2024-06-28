import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";

import Login from "./pages/Login";
import Register from "./pages/Register";

// admin pages
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";

// user pages
import UserLayout from "./layout/UserLayout";
import Home from "./pages/user/Home";
import Cart from "./pages/user/Cart";
import MovieDetail from "./pages/user/MovieDetail";
import Order from "./pages/user/Order";
import Settings from "./pages/Settings";

import ThemeContext from "./context/ThemeContext";
import VerifyEmail from "./pages/VerifyEmail";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <ThemeContext>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/movies/:slug" element={<MovieDetail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </ThemeContext>
  );
}

export default App;
