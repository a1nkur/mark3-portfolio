import styled from "styled-components";
import { AiOutlineLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  return (
    <FooterContainer>
      <Links>
        <a href="https://github.com/ankur29mac">
          <GoMarkGithub style={{ color: "#000" }} size={30} />{" "}
        </a>
        <a href="https://twitter.com/ankur29mac">
          <AiFillTwitterCircle style={{ color: "#000" }} size={30} />
        </a>
        <a href="https://www.linkedin.com/in/ankur-kumar-ba3833202/">
          <AiOutlineLinkedin style={{ color: "#000" }} size={30} />
        </a>
      </Links>
      <FooterText>
        <p> © 2021 | ankur29mac@gmail.com</p>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

/* ---------------------------- STYLED COMPONENTS --------------------------- */
const FooterContainer = styled.footer`
  min-height: 20vh;
  background-color: #e1f3ff;

  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const FooterText = styled.footer`
  padding-bottom: 1rem;
  p {
    color: #000;
  }
`;
const Links = styled.div`
  padding: 3rem 0rem;
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
