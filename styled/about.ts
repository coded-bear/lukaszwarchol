import styled from "styled-components";

export const StyledAbout = styled.section`
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding-bottom: 80px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledAboutImage = styled.div`
  flex: 2;
  padding: 20px;
`;

export const StyledAboutContent = styled.div`
  flex: 3;
  padding: 20px;
`;
