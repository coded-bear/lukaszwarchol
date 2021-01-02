import React from "react";
import PropTypes from "prop-types";
import Intro from "../common/Intro";

import imgHTML from "../../images/technologies/html.svg";
import imgCSS from "../../images/technologies/css.svg";
import imgSASS from "../../images/technologies/sass.svg";
import imgBootstrap from "../../images/technologies/bootstrap.svg";
import imgJavaScript from "../../images/technologies/javascript.svg";
import imgTypeScript from "../../images/technologies/typescript.svg";
import imgJQuery from "../../images/technologies/jquery.svg";
import imgReact from "../../images/technologies/react.svg";
import imgRedux from "../../images/technologies/redux.svg";
import imgNext from "../../images/technologies/nextjs.svg";
import imgGatsby from "../../images/technologies/gatsbyjs.svg";
import imgWebpack from "../../images/technologies/webpack.svg";

import imgNode from "../../images/technologies/nodejs.svg";
import imgExpress from "../../images/technologies/express.svg";
import imgNest from "../../images/technologies/nest.svg";
import imgSQL from "../../images/technologies/sql.svg";

import imgWordPress from "../../images/technologies/wordpress.svg";
import imgStrapi from "../../images/technologies/strapi.svg";
import imgGit from "../../images/technologies/git.svg";

const Technology = ({ image, name }) => (
  <div className="Technologies__technology">
    <img src={image} alt={name} />
    <p>{name}</p>
  </div>
);

Technology.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const Technologies = ({ t }) => (
  <section className="Technologies">
    <div className="container">
      <Intro title={t.title} description={t.subtitle} />

      <div className="title active">
        <p>Frontend</p>
      </div>
      <div className="Technologies__container">
        <Technology image={imgHTML} name="HTML 5" />
        <Technology image={imgCSS} name="CSS 3" />
        <Technology image={imgSASS} name="SASS" />
        <Technology image={imgBootstrap} name="Bootstrap" />
        <Technology image={imgJavaScript} name="JavaScript" />
        <Technology image={imgTypeScript} name="TypeScript" />
        <Technology image={imgJQuery} name="jQuery" />
        <Technology image={imgReact} name="React" />
        <Technology image={imgRedux} name="Redux" />
        <Technology image={imgNext} name="Next.js" />
        <Technology image={imgGatsby} name="Gatsby" />
        <Technology image={imgWebpack} name="Webpack" />
      </div>

      <div className="title active">
        <p>Backend</p>
      </div>
      <div className="Technologies__container">
        <Technology image={imgNode} name="Node.js" />
        <Technology image={imgExpress} name="Express.js" />
        <Technology image={imgNest} name="Nest.js" />
        <Technology image={imgSQL} name="SQL" />
      </div>

      <div className="title active">
        <p>{t.other}</p>
      </div>
      <div className="Technologies__container">
        <Technology image={imgWordPress} name="WordPress" />
        <Technology image={imgStrapi} name="Strapi" />
        <Technology image={imgGit} name="Git" />
      </div>
    </div>
  </section>
);

Technologies.propTypes = {
  t: PropTypes.object.isRequired
};

export default Technologies;
