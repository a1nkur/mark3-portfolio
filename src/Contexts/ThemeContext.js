import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [stateData, setStateData] = useState({
    isLightTheme: true,
    btnLight: { syntax: "#555", bg: "#ddd" },
    btnDark: { syntax: "#ddd", bg: "#171010" },
    headerLight: {
      bg: "#fff",
      logoSyntax: "#000",
      navLinkSyntax: "#000",
      hoverSyntax: "#ccc",
      toggleSyntax: "#000",
    },
    headerDark: {
      bg: "#080705",
      logoSyntax: "#fff",
      navLinkSyntax: "#fff",
      hoverSyntax: "#ccc",
      toggleSyntax: "#fff",
    },
    footerLight: {
      bg: "#649FE8",
      titleSyntax: "#000",
      navLinkSyntax: "#fff",
      nameSyntax: "#282828",
      hoverColor: "#000",
    },
    footerDark: {
      bg: "#282828",
      titleSyntax: "#fff",
      navLinkSyntax: "#fff",
      nameSyntax: "#649FE8",
      hoverColor: "#ccc",
    },
    contentBgLight: { bg: "#fff", syntax: "#000" },
    contentBgDark: { bg: "#080705", syntax: "#fff" },
    descLight: { titleSyntax: "#000", paragraphSyntax: "#000" },
    descDark: { titleSyntax: "#fff", paragraphSyntax: "#ddd" },
  });

  const toggleTheme = () =>
    setStateData(prevState => {
      return {
        ...prevState,
        isLightTheme: !prevState.isLightTheme,
      };
    });

  return (
    <ThemeContext.Provider value={{ ...stateData, toggleTheme: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
