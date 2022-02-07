import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 20px;

  background: ${theme.colors.primaryColor};
  color: ${theme.colors.background};
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
`;
