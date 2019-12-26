import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 30px auto;
  padding: 20px;
`;

export const StyledLogo = styled.h1`
  margin: 0;

  img {
    height: 70px;
  }
`;

export const StyledHeaderRightBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`;

export const StyledLangBtns = styled.div`
  a {
    margin: 0 5px;
    font-size: 18px;
  }
`;

export const StyledMenuBtn = styled.button`
  margin-left: 25px;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  img {
    height: 28px;
  }
`;
