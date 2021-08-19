import styled from "styled-components";
import { projectArr } from "../Assets/data";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

import { motion } from "framer-motion";
import {
  genericAnimate,
  fade,
  titleAnimate,
} from "../animate";

const ProjectsPage = () => {
  // Choose Theme
  const { isLightTheme, contentBgLight, contentBgDark } =
    useContext(ThemeContext);
  const theme = isLightTheme ? contentBgLight : contentBgDark;
  return (
    <Container
      theme={theme}
      variants={genericAnimate}
      initial="hidden"
      animate="show"
    >
      <Title>
        <motion.h1 variants={titleAnimate}>
          Peek into my <span>code</span>.
        </motion.h1>
      </Title>
      <div className="list__container">
        {projectArr.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default ProjectsPage;

const Item = ({ item }) => {
  return (
    <ItemContainer variants={fade}>
      <div className="description">
        <h2>{item.projectName}</h2>
        <h4>{item.month}</h4>
        <p>{item.description}</p>
      </div>
      <div className="links">
        <a href={item.linkToLiveProject}>Live Project</a>
        <a href={item.linkToSourceCode}>Source Code</a>
      </div>
    </ItemContainer>
  );
};

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 70vh;
  background: ${props => props.theme.bg};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: ${props => props.theme.syntax};
  }
`;

const Title = styled.div`
  overflow: hidden;
  padding-bottom: 1.5rem;
  span {
    color: #5f98dd;
  }
`;

const ItemContainer = styled(motion.div)`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 1rem;
  width: 80%;
  margin: 0.4rem 0;
  display: flex;
  justify-content: space-between;

  a {
    display: block;
    width: 70%;
    background-color: transparent;
    color: #5f98dd;
    padding: 0.5rem;
    border-radius: 3px;
    border: 1px solid #5f98dd;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-bottom: 5px;

    &:hover {
      background-color: #5f98dd;
      color: #000;
    }
  }

  .links {
    padding: 5px 0;
    flex: 0.3;
  }

  .description {
    flex: 0.7;
    p {
      width: 70%;
    }

    h2 {
      padding-bottom: 0.5rem;
    }
  }
`;
