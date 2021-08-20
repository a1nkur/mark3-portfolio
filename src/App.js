import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import BlogsPage from "./Pages/BlogsPage";
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";
import BlogContainer2 from "./Components/BlogContainer2";
import BlogContainer1 from "./Components/BlogContainer1";
import styled from "styled-components";

import { ThemeContext } from "./Contexts/ThemeContext";
import { useContext } from "react";

function App() {
  // Choose Theme
  const { isLightTheme, contentBgLight, contentBgDark } =
    useContext(ThemeContext);
  const theme = isLightTheme ? contentBgLight : contentBgDark;

  return (
    <AppContainer theme={theme}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/blogs" exact>
          <BlogsPage />
        </Route>
        <Route path="/blogs/blog1">
          <BlogContainer1 />
        </Route>
        <Route path="/blogs/blog2">
          <BlogContainer2 />
        </Route>
      </Switch>
      <Footer />
    </AppContainer>
  );
}

export default App;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AppContainer = styled.div`
  background: ${props => props.theme.bg};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  /* p {
    color: ${props => props.theme.syntax};
  } */
`;
