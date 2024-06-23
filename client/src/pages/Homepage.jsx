import { useThemeContext } from "../context/ThemeContext";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  // changing theme will be in users settings
  const { toggleTheme } = useThemeContext();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const root = document.getElementsByTagName("body");
  //   if (root) {
  //     root[0].setAttribute("data-bs-theme", theme);
  //   }
  // }, [theme]);

  return (
    <div
      // style={{ height: "100vh" }}
      className="d-flex justify-content-center items-center"
    >
      <div className="mt-5">
        <h1>Welcome to Movie Mate</h1>
        <div className="d-flex justify-content-evenly items-center">
          <Button onClick={toggleTheme}>Change Theme</Button>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
