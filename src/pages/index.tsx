import type { NextPage } from "next";

import styled from "styled-components";
import { GlobalStyles } from "../styles/global-styles";
import { LoginForm } from "../templates/LoginForm";

const Header = styled.h1`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <>
      <LoginForm />
      <GlobalStyles />
    </>
  );
};

export default Home;
