import styled, { css } from "styled-components";

import { theme } from "../../styles/theme";

export interface InputProps {
  inputSvg: string;
  focusSvg: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Label = styled.label`
  color: ${theme.colors.textBase};
  font-size: 16px;
`;

export const Input = styled.input<InputProps>`
  ${({ inputSvg, focusSvg }) => css`
    background: url(${inputSvg});
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 3px;

    color: ${theme.colors.textTitle};
    ::placeholder {
      color: ${theme.colors.textBase};
    }

    padding-left: 30px;
    border: 1px solid ${theme.colors.textTitle};
    border-radius: 5px;

    height: 36px;
    width: 335px;

    &:focus {
      border: 3px solid ${theme.colors.primaryColor};
      outline: none;

      background: url(${focusSvg});
      background-repeat: no-repeat;
      background-position-y: center;
      background-position-x: 3px;
    }
  `}
`;
