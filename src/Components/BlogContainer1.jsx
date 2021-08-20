import styled from "styled-components";

import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

const BlogContainer1 = () => {
  // Choose Theme
  const { isLightTheme, blogLight, blogDark } = useContext(ThemeContext);
  const theme = isLightTheme ? blogLight : blogDark;

  return (
    <Container theme={theme}>
      <h1>
        Three essential react hooks that will supercharge your next webapp.
      </h1>
      <p>
        Let's be honest, we all want to become better react developers. We all
        have been there where hacking together a todo app or a weather app made
        us feel like a bad-ass. It's time to move ahead and learn few advanced
        react hooks that will arm us to build more cool and complex webapps.
        Take a deep dive and understand the practical usage of these three
        advanced React Hooks.
      </p>
      <ul>
        <li>useEffect</li>
        <li>useReducer</li>
        <li>useContext</li>
      </ul>
      <h3>useEffect Hook</h3>
      <p>
        To better understand useEffect, we need to be aware of two important
        things-
      </p>
      <h3>What is React's main job?</h3>
      <p>
        React's main job is to render the UI, react to user's interaction with
        the UI and then again re-render the UI based on the type of interaction.
        This is only what react as a library cares about i.e to bring the UI on
        the screen.
      </p>
      <h3>What are side-effects ?</h3>
      <p>
        All such tasks/operations happening inside our react component that are
        not directly related to bringing UI on the screen but are absolutely
        necessary in certain cases(example - to populate the UI with data, we
        need to fetch data from an external API source) to produce a
        end-result(or, UI) can be regarded as side-effects.
      </p>
      <p>Operations like -</p>
      <ul>
        <li>
          Sending HTTP requests to the remote server and handling potential
          errors. All modern web apps do this, we do not need specifically need
          react's mechanism for that.
        </li>
        <li>Storing data in browser's native storage.</li>
        <li>Setting and managing timers, etc.</li>
      </ul>
      <p>
        All these tasks must happen outside of the normal component evaluation
        and render-cycle, especially since these tasks may delay/block rendering
        of the UI.
      </p>
      <p>
        We use useEffect hook to handle such side-effects related code, in
        simpler terms this hook creates a portal for such potentially
        performance-intensive code, so that this block of code will be executed
        outside the normal component evalutation and will not hinder the
        rendering of UI.
      </p>
      <p>useEffect hook takes 2 arguments -</p>
      <ul>
        <li>An anonymous function that holds the side-effect.</li>
        <li>
          A dependency array that allows us to gain control over the hook and
          let us determine when the hook should be called.
        </li>
      </ul>
      <h3>Things to keep in mind when using the useEffect hook -</h3>
      <ul>
        <li>
          This anonymous arrow function that holds the side-effect code is
          executed only after evaluation of the component has completed.
        </li>
        <li>
          If the dependency array is an empty array [ ], the useEffect will run
          only once after the initial mounting of the component.
        </li>
        <li>
          useEffect is triggered when one of the dependencies gets updated. The
          dependencies can be a state, props.The useEffect will run again after
          react has finished the component evalaution because one of the items
          in dependency array was updated in last component render/evaluation
          cycle.
        </li>
        <li>useEffect is triggered when the component unmounts the DOM.</li>
      </ul>
      <p>
        We should never leave the 2nd argument unmentioned, otherwise we won't
        be able to leverage the advantage of useEffect hook.
      </p>
      <h3>
        Some RULES that will help deciding what should we mention inside
        dependency array :
      </h3>
      <ul>
        <li>
          Do not to add "built-in" APIs or functions like fetch(), localStorage
          etc (functions and features built-into the browser and hence available
          globally). These browser APIs / global functions are not related to
          the react component render cycle and they also never change.
        </li>
        <li>
          Do not add variables or functions we might've defined outside of our
          component (e.g. helper function in a separate file) Such functions or
          variables are not created inside of a component function and hence
          changing them won't affect your components.
        </li>
        <li>
          Do not add state updating functions, react guarantees that those
          functions never change, hence we don't need to add them as
          dependencies(you could though).
        </li>
      </ul>
      <h4>useEffect Cleanup</h4>
      <p>
        There are two types of side-effects : one requires cleanup another does
        not. Also, The type of operation done in useEffect might be a problem.
        If it was performance intensive code then it might slow down the app, if
        we would be sending HTTP request to check if login details are correct,
        our current useEffect would send a lot of uncessary requests, that will
        lead to network traffic.
      </p>
      <h4>NOTE:</h4>
      <ol>
        <li>
          When the useEffect runs for the very first time i.e when component
          mounts the DOM, cleanup doesnot run.
        </li>
        <li>
          Now for every useEffect execution after the point (1), cleanup will
          run first and then only sideeffect code runs.
        </li>
        <li>Cleanup runs when the component unmounts the DOM.</li>
      </ol>
      <h3>When to use useEffect</h3>
      <ul>
        <li>Control a piece of code.</li>
        <li>
          Avoid potential infinite loop because we are triggering a state update
          inside our component.
        </li>
        <li>
          It also helps avoiding running the performance intensive code along
          with every component re evaluation.
        </li>
      </ul>
      <h3>useReducer() Hook</h3>
      <p>
        This is another built in React Hook. It Helps in state management. This
        hook is to be used to manage complex state in react components. It adds
        more structure to the state and also combine all methods that cause a
        state update at one place. It accepts a reducer of type (state, action)
        ={">"} newState, and returns the current state paired with a dispatch
        method. (If you’re familiar with Redux, you already know how this
        works.)
      </p>
      <p>
        We can import useReducer from react just like the other React hooks, as
        seen in the following snippet:
      </p>
      <p>
        This hook function returns an array with 2 values. The first one is the
        state value, and the second value is the dispatch function which is
        further used to trigger an action with the help of array destructuring.
      </p>
      <p>
        useReducer is usually preferable to useState when you have complex state
        logic that involves multiple sub-values or when the next state depends
        on the previous one. useReducer also lets you optimize performance for
        components that trigger deep updates because you can pass dispatch down
        instead of callbacks.
      </p>
      <h3>useContext</h3>
      <p>
        useContext hook allows you to easily share app wide or component wide
        state and state updating methods easily. But, we need to understand what
        was the need of useContext hook in the first place?
      </p>
      <h3>What is Prop Drilling?</h3>
      <p>
        When we need to pass down state or methods from a component sitting at
        the top of component tree hierarchy to the component sitting low at the
        hierarchy, and in this traversal we have to pass them props even to
        those component which dont necesarrily need it, they act merely as
        carrier components. As the component tree starts getting bigger, it
        becomes more complex to pass down props and methods to every component,
        this is where useContext hook comes for the rescue.
      </p>
      <h3>Conclusion</h3>
      These three advanced react hooks allows you to build more powerful and
      robust frontend web applications. The vast usage of react hooks have made
      modern way of building web apps easier. Happy Coding!
    </Container>
  );
};

export default BlogContainer1;

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

  ul,
  ol {
    padding: 0 2rem;

    li {
      padding-bottom: 1rem;
      width: 80%;
      color: ${props => props.theme.syntax};
    }
  }
`;
