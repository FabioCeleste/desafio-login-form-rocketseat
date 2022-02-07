import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;

  margin-top: 14px;

  a {
    color: ${theme.colors.primaryColor};
    text-decoration: none;
  }

  .register-span {
    font-weight: bold;
  }
`;
