import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import ThemeContext from "./context/ThemeContext";

function App() {
  return (
    <ThemeContext>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/admin"></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </ThemeContext>
  );
}

export default App;
