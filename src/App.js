import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import BlogsPage from "./Pages/BlogsPage";
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/blogs">
          <BlogsPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

/* ---------------------------- STYLED COMPONENTS --------------------------- */
