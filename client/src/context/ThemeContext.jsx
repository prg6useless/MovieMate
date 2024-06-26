import { createContext, useState, useContext } from "react";

const initialContext = createContext(null);

const ThemeContext = ({ children }) => {
  // const [name, setName] = useState("saral");
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    const root = document.getElementsByTagName("body");
    if (root) {
      root[0].setAttribute("data-bs-theme", theme);
    }
  };
  return (
    <initialContext.Provider value={{ theme, toggleTheme }}>
      {/* <initialContext.Provider value={{ theme, setTheme }}> */}
      {children}
    </initialContext.Provider>
  );
};

export default ThemeContext;

// custom hook
export const useThemeContext = () => {
  const context = useContext(initialContext);
  if (!context) throw new Error("Context is not wrapped inside Provider");
  return context;
};
