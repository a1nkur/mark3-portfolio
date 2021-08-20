import styled from "styled-components";

import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

const BlogContainer2 = () => {
  // Choose Theme
  const { isLightTheme, blogLight, blogDark } = useContext(ThemeContext);
  const theme = isLightTheme ? blogLight : blogDark;

  return (
    <Container theme={theme}>
      <h1>Styled-Components : Efficiently write CSS in JS File.</h1>
      <p>
        Building web apps with React is not just about composing components
        together and making sure that the logic works correctly. That arguably
        is the most important part, where at least it's the biggest reason for
        using React. But building react apps is also about styling those apps.
      </p>
      <p>
        We want to make sure that our web applications look good and styling is
        also an important part of building components.
      </p>
      <p>
        Styled-components is a CSS-in-JS styling library that uses tagged
        template literals in JavaScript and CSS rules to provide pre-styled
        components where the styling is scoped to that react component only.
      </p>
      {/* ich */}
      {/* ipfch */}
      <h3>Styling React components</h3>
      <p>There are primarly two ways to style a React component.</p>

      <h4>Inline Styling</h4>
      {/* ich */}
      <p>
        Inline styling has one of the highest specificity value which will
        override any other CSS rule. This method is highly discouraged, as it is
        neither sustainable nor scalable.
      </p>

      <h4>External Styling</h4>
      <p>
        There’s this more traditional way of using CSS in external CSS files,
        which is then passed as a string to the className prop.
      </p>
      {/* ich */}
      <p>
        As the component tree grows, CSS files begin to get bulky, clumsy, and
        complex. One great alternative solution to this is the usage of SASS.
        Although SASS helps, you’ll eventually deal with the same issue due to
        the sheer number of SCSS files a project can have. Finally, CSS-in-JS is
        a technique where JavaScript is used to style components. When this
        JavaScript is parsed by the browser, CSS is generated as a style element
        and attached inside head tag of the HTML document.
      </p>

      <h3>Why should you use Styled-Components</h3>
      <ul>
        <li>
          You have freedom to build custom pre-styled components. You no longer
          need to keep switching between a JS file and a CSS file but you can
          build your styled react components in one go.
        </li>
        <li>
          No class name bugs. styled-components generates unique class names for
          your styles. You never have to worry about duplication, overlap or
          misspellings.
        </li>
        <li>
          Use Power of Sass. When using styled-components you can easily use
          SASS like features like nesting.
        </li>
        <li>
          Easier deletion of CSS. It can be hard to know whether a class name is
          used somewhere in your codebase. styled-components makes it obvious,
          as every bit of styling is tied to a specific component. If the
          component is unused (which tooling can detect) and gets deleted, all
          its styles get deleted with it.
        </li>
        <li>
          Simple dynamic styling. Adapting the styling of a component based on
          its props or a global theme is simple and intuitive without having to
          manually manage dozens of classes.
        </li>
        <li>
          Automatic vendor prefixing. Write your CSS to the current standard and
          let styled-components handle the rest. You get all of these benefits
          while still writing the CSS you know and love, just bound to
          individual components.
        </li>
        <li>
          Painless maintenance. You never have to hunt across different files to
          find the styling affecting your component, so maintenance is a piece
          of cake no matter how big your codebase is.
        </li>
        <li>
          Automatic critical CSS. Styled-Components keeps track of which
          components are rendered on a page and injects their styles and nothing
          else, fully automatically. Combined with code splitting, this means
          your users load the least amount of code necessary.
        </li>
      </ul>

      <h3>Will it cost you performance ?</h3>
      <p>
        If you are not using native CSS inline styles, there is always a
        possibility of having some performance overhead with any open source
        library you choose to use for styling. However, the little performance
        overhead you get is the price you pay for the power and flexibility you
        get from styled-components. The good thing is that styled-components is
        focused on improving the library’s performance on every new release. It
        keeps getting better.
      </p>

      <h3>Conclusion</h3>
      <p>
        Styled-components has a rapidly increasing community, with over 33,000
        members on GitHub, which is highly encouraging and testifies to the
        project's long-term viability. It just keep getting better. Happy
        coding!
      </p>
    </Container>
  );
};

export default BlogContainer2;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  padding: 5rem 1rem;
  width: 70rem;
  max-width: 96%;
  margin: auto;
  border: 1px solid #b19bee;
  border-radius: 3px;

  background: ${props => props.theme.bg};
  /* h1, */
  h2,
  /* h3, */
  /* h4, */
  h5,
  h6,
  p {
    color: ${props => props.theme.syntax};
  }

  h1 {
    padding-bottom: 2rem;
    font-size: 2.8rem;
    color: ${props => props.theme.title};
  }

  p {
    padding-bottom: 1rem;
    font-size: 1rem;
    color: ${props => props.theme.syntax};
  }

  h3 {
    font-size: 1.7rem;
    padding-bottom: 1rem;
    color: ${props => props.theme.title};
  }

  h4 {
    padding-bottom: 0.5rem;
    color: ${props => props.theme.title};
  }

  img {
    height: 30rem;
    width: 20rem;
  }

  ul {
    padding: 0 2rem;

    li {
      padding-bottom: 1rem;
      width: 80%;
      color: ${props => props.theme.syntax};
    }
  }
`;
