import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";

//user routes
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";

// admin routes
import Dashboard from "./pages/admin/Dashboard";

import ThemeContext from "./context/ThemeContext";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  return (
    <ThemeContext>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>
        <Route path="/admin">
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </ThemeContext>
  );
}

export default App;
