import styled, { css } from "styled-components";

import { theme } from "../../styles/theme";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textTitle};

    h2 {
      margin-top: 3px;
      font-size: 16px;
      font-weight: 400;
    }
  `}
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 400;

  img {
    display: inline-block;
    vertical-align: middle;
  }

  span {
    margin-left: 8px;
    display: inline-block;
  }
`;
