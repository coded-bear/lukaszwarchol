import styled from "styled-components";

export const StyledFooter = styled.footer`
  text-align: center;

  nav {
    font-size: 22px;

    ul {
      display: flex;

      li {
        padding: 5px 10px;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const StyledSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* margin: 30px auto; */

  a {
    margin: 0 10px;
    padding: 0 5px;

    img {
      height: 30px;
    }
  }
`;
