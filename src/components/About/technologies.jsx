import React from "react";
import PropTypes from "prop-types";
import { Intro, SubTitle } from "../elements";
import imgHTML from "../../images/about/html.svg";
import imgCSS from "../../images/about/css.svg";
import imgSASS from "../../images/about/sass.svg";
import imgBootstrap from "../../images/about/bootstrap.svg";
import imgPHP from "../../images/about/php.svg";
import imgSQL from "../../images/about/sql.svg";
import imgWordPress from "../../images/about/wordpress.svg";
import imgGit from "../../images/about/git.svg";
import imgJavaScript from "../../images/about/javascript.svg";
import imgTypeScript from "../../images/about/typescript.svg";
import imgJQuery from "../../images/about/jquery.svg";
import imgReact from "../../images/about/react.svg";
import imgRedux from "../../images/about/redux.svg";
import imgNext from "../../images/about/nextjs.svg";
import imgWebpack from "../../images/about/webpack.svg";
import imgNode from "../../images/about/nodejs.svg";
import imgExpress from "../../images/about/express.svg";
import imgNest from "../../images/about/nest.svg";

const Technology = ({ image, name }) => (
  <div className="Technologies__technology">
    <img src={image} alt={name} />
    <p>{name}</p>
  </div>
);

const Technologies = ({ t }) => (
  <section className="Technologies">
    <div className="container">
      <Intro text={t.title} />
      <SubTitle text={t.subtitle} />

      <div className="Technologies__container">
        <Technology image={imgHTML} name="HTML 5" />
        <Technology image={imgCSS} name="CSS 3" />
        <Technology image={imgSASS} name="SASS" />
        <Technology image={imgBootstrap} name="Bootstrap" />
        <Technology image={imgPHP} name="PHP" />
        <Technology image={imgSQL} name="SQL" />
        <Technology image={imgWordPress} name="WordPress" />
        <Technology image={imgGit} name="Git" />
        <Technology image={imgJavaScript} name="JavaScript" />
        <Technology image={imgTypeScript} name="TypeScript" />
        <Technology image={imgJQuery} name="jQuery" />
        <Technology image={imgReact} name="React" />
        <Technology image={imgRedux} name="Redux" />
        <Technology image={imgNext} name="Next.js" />
        <Technology image={imgWebpack} name="Webpack" />
        <Technology image={imgNode} name="Node.js" />
        <Technology image={imgExpress} name="Express.js" />
        <Technology image={imgNest} name="Nest.js" />
      </div>
    </div>
  </section>
);

Technology.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

Technologies.propTypes = {
  t: PropTypes.object.isRequired
};

export default Technologies;
