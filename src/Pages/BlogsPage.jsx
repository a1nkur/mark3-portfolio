import styled from "styled-components";

import { blogsArr } from "../Assets/data";

import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

import { motion } from "framer-motion";
import {
  genericAnimate,
  fade,
  titleAnimate,
} from "../animate";

const BlogsPage = () => {
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
          Read my <span>blogs</span>.
        </motion.h1>
      </Title>
      <div className="list__container">
        {blogsArr.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default BlogsPage;

const Item = ({ item }) => {
  return (
    <ItemContainer variants={fade}>
      <h2>{item.blogTitle}</h2>
      <h4>{item.month}</h4>
      <p>{item.description}</p>
      <a href={item.linkToLiveProject}>Read More</a>
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

  a {
    display: block;
    width: 15%;
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

  p {
    width: 90%;
    padding-bottom: 0.5rem;
  }

  h2 {
    padding-bottom: 0.5rem;
  }
`;
