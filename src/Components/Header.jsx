import { Link } from "react-router-dom";
import styled from "styled-components";

import { BiMoon, BiSun } from "react-icons/bi";

import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

const Header = () => {
  // Choose Theme
  const { isLightTheme, headerLight, headerDark, toggleTheme } =
    useContext(ThemeContext);
  const theme = isLightTheme ? headerLight : headerDark;

  return (
    <Container theme={theme}>
      <h1>Portfolio</h1>
      <div className="nav-links">
        <div className="single-link">
          <Link to="/">Home</Link>
        </div>
        <div className="single-link">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="single-link">
          <Link to="/blogs">Blogs</Link>{" "}
        </div>
        <div className="switch-theme">
          <Link to="#">
            {isLightTheme ? (
              <BiMoon onClick={toggleTheme} />
            ) : (
              <BiSun onClick={toggleTheme} />
            )}
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.header`
  min-height: 10vh;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.bg};

  h1 {
    color: ${props => props.theme.logoSyntax};
  }

  a {
    color: ${props => props.theme.navLinkSyntax};
  }

  .nav-links div {
    display: inline;
  }

  .switch-theme {
    svg {
      font-size: 1.5rem;
      margin-top: 5px;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
  }

  .nav-links {
    a {
      padding: 0 2rem;
    }
  }

  /* ------------------------------- MEDIA QUERY ------------------------------ */

  @media (max-width: 520px) {
    padding: 1rem 1rem;

    .nav-links {
      a {
        padding: 0 0.5rem;
      }
    }
  }

  /* ------------------------------- MEDIA QUERY END ------------------------------ */
`;
