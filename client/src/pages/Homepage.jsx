import { useThemeContext } from "../context/ThemeContext";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { theme, toggleTheme } = useThemeContext();
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.setAttribute("data-bs-theme", theme);
    }
  }, [theme]);

  return (
    <div style={{ height: "100vh" }}>
      <Button onClick={toggleTheme}>Change Theme</Button>
      <Button onClick={() => navigate("/login")}>Login</Button>
    </div>
  );
};

export default Homepage;
