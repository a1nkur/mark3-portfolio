import { useContext } from "react";
import styled from "styled-components";
import homeImageOne from "../Assets/img/homeImageOne.png";
import html5 from "../Assets/img/icons/icons8-html-5-96.png";
import css3 from "../Assets/img/icons/icons8-css3-96.png";
import bootstrap from "../Assets/img/icons/icons8-bootstrap-96.png";
import javascript from "../Assets/img/icons/icons8-javascript-96.png";
import typescript from "../Assets/img/icons/icons8-typescript-96.png";
import react from "../Assets/img/icons/icons8-react-96.png";
import redux from "../Assets/img/icons/icons8-redux-96.png";
import materialui from "../Assets/img/icons/icons8-material-ui-96.png";
import python from "../Assets/img/icons/icons8-python-96.png";

import { Link } from "react-router-dom";

import AnimateWhenVisible from "../Components/AnimateWhenVisible";
import AnimateWhenIconsAreVisible from "../Components/AnimateWhenIconsAreVisible";

import { motion } from "framer-motion";
import { genericAnimate, titleAnimate, imageAnimation } from "../animate";

import { ThemeContext } from "../Contexts/ThemeContext";

const HomePage = () => {
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
      <SectionOne>
        <TextDescription>
          <Hide>
            <motion.h2 variants={titleAnimate}>Hi, there!</motion.h2>
          </Hide>
          <Hide>
            <motion.h1 variants={titleAnimate}>
              I'm <span>Ankur</span>,
            </motion.h1>
          </Hide>
          <Hide>
            <motion.h3 variants={titleAnimate}>
              A <span className="frontend-key">Frontend</span> Web Developer.
            </motion.h3>
          </Hide>
        </TextDescription>
        <ImageContainer variants={imageAnimation}>
          <motion.img src={homeImageOne} alt="home-img" />
        </ImageContainer>
      </SectionOne>
      <SectionTwo>
        <TextDescriptionTwo>
          <Hide>
            <h1>
              <AnimateWhenVisible>
                <span className="tech">Technologies</span>
              </AnimateWhenVisible>
            </h1>
          </Hide>
          <Hide>
            <AnimateWhenVisible>
              <h3 className="h3">
                <span>
                  {" "}
                  <AnimateWhenVisible>I know.</AnimateWhenVisible>
                </span>
              </h3>
            </AnimateWhenVisible>
          </Hide>
        </TextDescriptionTwo>
        <Icons>
          <div className="collection">
            <AnimateWhenIconsAreVisible>
              <img src={html5} alt="tech-icon" />
            </AnimateWhenIconsAreVisible>
            <AnimateWhenIconsAreVisible>
              <img src={css3} alt="tech-icon" />
            </AnimateWhenIconsAreVisible>
            <AnimateWhenIconsAreVisible>
              <img src={bootstrap} alt="tech-icon" />
            </AnimateWhenIconsAreVisible>
            <AnimateWhenIconsAreVisible>
              <img src={javascript} alt="tech-icon" />
            </AnimateWhenIconsAreVisible>
            <AnimateWhenIconsAreVisible>
              <img src={typescript} alt="tech-icon" />
            </AnimateWhenIconsAreVisible>
            <AnimateWhenIconsAreVisible>
              <img src={react} alt="tech-icon" />
            </AnimateWhenIconsAreVisible>
            <AnimateWhenIconsAreVisible>
              <img src={redux} alt="tech-icon" />
            </AnimateWhenIconsAreVisible>
            <AnimateWhenIconsAreVisible>
              <img src={materialui} alt="tech-icon" />
            </AnimateWhenIconsAreVisible>
            <AnimateWhenIconsAreVisible>
              <img src={python} alt="tech-icon" />
            </AnimateWhenIconsAreVisible>
          </div>
        </Icons>
      </SectionTwo>
      <Section3>
        <Title>
          <h2>
            I like to showcase{""}
            <AnimateWhenVisible>
              <span>my work</span>
            </AnimateWhenVisible>
            {""}, you can see{""}
            <AnimateWhenVisible>
              <span>my projects</span>
            </AnimateWhenVisible>{" "}
            hosted online.
          </h2>
          <Link to="/projects">Show Projects</Link>
        </Title>
      </Section3>
      <Section4>
        <Title>
          <h2>
            I am also working on some technical & non-techincal{" "}
            <AnimateWhenVisible>
              <span>blogs</span>.
            </AnimateWhenVisible>
            I like to document{""}
            <AnimateWhenVisible>
              <span>my journey of learning</span>.
            </AnimateWhenVisible>
          </h2>
          <Link to="/blogs">Show Blogs</Link>
        </Title>
      </Section4>
    </Container>
  );
};

export default HomePage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled(motion.main)`
  padding: 0 5rem;
  min-height: 90vh;
  background: ${props => props.theme.bg};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.syntax};
  }

  /* ------------------------------- MEDIA QUERY ------------------------------ */

  /* SMARTPHONE */
  @media (max-width: 520px) {
    padding: 0 3rem;
  }

  /* ------------------------------- MEDIA QUERY END ------------------------------ */
`;

const TextDescription = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 2.3rem;
  }

  span,
  span.tech {
    color: #5f98dd;
  }

  .frontend-key {
    color: #b19bee;
  }

  .h3 {
    padding-left: 1rem;
  }

  /* ------------------------------- MEDIA QUERY ------------------------------ */

  /* SMARTPHONE */
  @media (max-width: 520px) {
    min-height: 40vh;
  }

  /* ------------------------------- MEDIA QUERY END ------------------------------ */
`;

const TextDescriptionTwo = styled.div`
  text-align: center;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 2.3rem;
  }

  span.tech {
    color: #5f98dd;
  }

  .frontend-key {
    color: #b19bee;
  }

  .h3 {
    padding-left: 1rem;
  }

  /* ------------------------------- MEDIA QUERY ------------------------------ */

  /* SMARTPHONE */
  @media (max-width: 520px) {
    min-height: 30vh;
  }

  /* ------------------------------- MEDIA QUERY END ------------------------------ */
`;

const Icons = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    padding-left: 3rem;
    display: inline-block;
    /* flex-basis: 4rem; */
  }

  .collection {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }

  /* ------------------------------- MEDIA QUERY ------------------------------ */

  /* SMARTPHONE */
  @media (max-width: 520px) {
    /* display: flex;
    align-items: center;
    justify-content: center; */

    img {
      /* padding: rem; */
      display: inline;
      /* flex-basis: 4rem; */
      height: 10vh !important;
      width: 1rem;
      width: 100%;
      object-fit: cover;
      padding-left: 1.5rem;
    }

    .collection {
      width: 100%;
    }
  }

  /* ------------------------------- MEDIA QUERY END ------------------------------ */
`;

const ImageContainer = styled(motion.div)`
  flex: 2;
  overflow: hidden;

  img {
    height: 87vh;
    width: 100%;
    object-fit: cover;
  }

  /* ------------------------------- MEDIA QUERY ------------------------------ */

  /* SMARTPHONE */
  @media (max-width: 520px) {
    min-height: 40vh;
  }

  /* ------------------------------- MEDIA QUERY END ------------------------------ */
`;

const Hide = styled.div`
  overflow: hidden;
`;

const SectionOne = styled.section`
  display: flex;

  /* ------------------------------- MEDIA QUERY ------------------------------ */

  /* SMARTPHONE */
  @media (max-width: 520px) {
    display: block;
    display: 45vh;

    img {
      height: 50vh;
      width: 100%;
      object-fit: cover;
    }

    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.7rem;
    }
  }

  /* ------------------------------- MEDIA QUERY END ------------------------------ */
`;

const SectionTwo = styled.section`
  min-height: 100vh;
  display: flex;
  flex: 1;

  /* ------------------------------- MEDIA QUERY ------------------------------ */

  /* SMARTPHONE */
  @media (max-width: 520px) {
    display: block;
    display: 45vh;

    img {
      height: 50vh;
      width: 100%;
      object-fit: cover;
    }

    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.7rem;
    }
  }

  /* ------------------------------- MEDIA QUERY END ------------------------------ */
`;

const Section3 = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
    padding-bottom: 2rem;

    span {
      color: #b19bee;
    }
  }

  a {
    background-color: transparent;
    color: #5f98dd;
    padding: 1rem;
    border-radius: 3px;
    border: 1px solid #5f98dd;
    transition: all 0.3s ease;
    cursor: pointer;
    display: inline-block;
    width: 10rem;

    &:hover {
      background-color: #5f98dd;
      color: #000;
    }
  }

  /* ------------------------------- MEDIA QUERY ------------------------------ */

  /* SMARTPHONE */
  @media (max-width: 520px) {
    min-height: 80vh;
  }

  /* ------------------------------- MEDIA QUERY END ------------------------------ */
`;
const Section4 = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
    padding-bottom: 2rem;

    span {
      color: #b19bee;
    }
  }

  a {
    background-color: transparent;
    color: #5f98dd;
    padding: 1rem;
    border-radius: 3px;
    border: 1px solid #5f98dd;
    transition: all 0.3s ease;
    cursor: pointer;
    display: inline-block;
    width: 10rem;

    &:hover {
      background-color: #5f98dd;
      color: #000;
    }
  }

  /* ------------------------------- MEDIA QUERY ------------------------------ */

  /* SMARTPHONE */
  @media (max-width: 520px) {
    a {
      margin-bottom: 1rem;
    }
  }

  /* ------------------------------- MEDIA QUERY END ------------------------------ */
`;

const Title = styled.div``;
