import styled from "styled-components";

import { theme } from "../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 50%;
  background: ${theme.colors.background};

  @media (max-width: 800px) {
    width: 100vw;
    background: ${theme.colors.formBackground};
    overflow: hidden;
  }
`;

export const LogoIcon = styled.img`
  width: 115px;
  height: 28px;
  align-self: flex-start;

  margin-left: 40px;
  margin-top: 40px;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 55px 120px;

  background: ${theme.colors.formBackground};
  margin-top: 126px;
`;

export const Form = styled.form``;

export const Aside = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: 100vh;
  width: 50vw;
`;
