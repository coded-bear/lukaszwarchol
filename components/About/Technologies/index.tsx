import React from "react";
import { Heading, SubTitle } from "../../elements";
import { TechnologyProps } from "../interface";
import { Container } from "../../../styled/layout";
import { StyledTechnologies, StyledTechnologiesBox, StyledTechnology } from "../../../styled/about";

import imgHTML from "../../../static/images/about/html.svg";
import imgCSS from "../../../static/images/about/css.svg";
import imgSASS from "../../../static/images/about/sass.svg";
import imgBootstrap from "../../../static/images/about/bootstrap.svg";
import imgPHP from "../../../static/images/about/php.svg";
import imgSQL from "../../../static/images/about/sql.svg";
import imgWordPress from "../../../static/images/about/wordpress.svg";
import imgGit from "../../../static/images/about/git.svg";
import imgJavaScript from "../../../static/images/about/javascript.svg";
import imgTypeScript from "../../../static/images/about/typescript.svg";
import imgJQuery from "../../../static/images/about/jquery.svg";
import imgReact from "../../../static/images/about/react.svg";
import imgRedux from "../../../static/images/about/redux.svg";
import imgNext from "../../../static/images/about/nextjs.svg";
import imgWebpack from "../../../static/images/about/webpack.svg";
import imgNode from "../../../static/images/about/nodejs.svg";
import imgExpress from "../../../static/images/about/express.svg";
import imgNest from "../../../static/images/about/nest.svg";

const Technology: React.FC<TechnologyProps> = props => (
  <StyledTechnology>
    <img src={props.image} alt={props.name} />
    <p>{props.name}</p>
  </StyledTechnology>
);

const Technologies: React.FC = () => (
  <StyledTechnologies>
    <Container>
      <Heading text="Known technologies" />
      <SubTitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" />

      <StyledTechnologiesBox>
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
      </StyledTechnologiesBox>
    </Container>
  </StyledTechnologies>
);

export default Technologies;
