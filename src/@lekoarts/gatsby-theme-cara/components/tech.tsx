/** @jsx jsx */
import { jsx } from "theme-ui";

const Tech = () => {
  return (
    <ul
      sx={{
        mt: 3,
        color: `text`,
        mx: 10,
        // ".fab": { fontFamily: `Font Awesome\ 5 Brands` }
        li: {
          display: `inline-block`,
          listStyle: `none`,
          textAlign: `center`,
          width: `18%`,
          fontSize: `3rem`,
          h3: { fontSize: 1, mt: 0, fontWeight: `light` }
        }
      }}
    >
      <li>
        <i className="devicon-react-original" aria-hidden="true"></i>
        <h3>React</h3>
      </li>
      <li>
        <i className="devicon-javascript-plain" aria-hidden="true"></i>
        <h3>JavaScript</h3>
      </li>
      <li>
        <i className="devicon-typescript-plain" aria-hidden="true"></i>
        <h3>TypeScript</h3>
      </li>
      <li>
        <i className="devicon-nodejs-plain" aria-hidden="true"></i>
        <h3>node</h3>
      </li>
      <li>
        <i className="devicon-html5-plain" aria-hidden="true"></i>
        <h3>HTML5</h3>
      </li>
      <li>
        <i className="devicon-css3-plain" aria-hidden="true"></i>
        <h3>CSS3</h3>
      </li>
      <li>
        <i className="devicon-sass-original" aria-hidden="true"></i>
        <h3>Sass</h3>
      </li>
      <li>
        <i className="devicon-mongodb-plain" aria-hidden="true"></i>
        <h3>mongoDB</h3>
      </li>
      <li>
        <i className="devicon-github-plain" aria-hidden="true"></i>
        <h3>GitHub</h3>
      </li>
      <li>
        <i className="devicon-docker-plain" aria-hidden="true"></i>
        <h3>docker</h3>
      </li>
    </ul>
  );
};

export default Tech;
