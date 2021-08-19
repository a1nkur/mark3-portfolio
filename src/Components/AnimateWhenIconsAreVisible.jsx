import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const AnimateWhenIconsAreVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </Container>
  );
};

export default AnimateWhenIconsAreVisible;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled(motion.div)``;
