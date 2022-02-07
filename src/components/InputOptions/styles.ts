import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export type RememberMeProps = {
  shouldRemember: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;

  font-weight: bold;
  color: ${theme.colors.textBase};

  label {
    display: inline-block;
    padding-right: 10px;
    white-space: nowrap;
  }

  .spanRemember {
    vertical-align: middle;
    padding-left: 10px;
  }
`;

export const RememberMe = styled.input<RememberMeProps>`
  ${({ shouldRemember }) => css`
    width: 20px;
    height: 20px;
    border: 1px solid ${theme.colors.textBase};

    vertical-align: middle;

    border-radius: 3px;
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    cursor: pointer;
    ${shouldRemember ? `background: ${theme.colors.primaryColor};` : ""}
  `}
`;

// export const Checkmark = styled.span<RememberMeProps>`
//   ${({ shouldRemember }) => css`
//     color: ${theme.colors.background};
//     position: relative;
//     cursor: pointer;
//     right: 16px;
//     top: 1.5px;

//     ${shouldRemember ? "" : "display: none;"}
//   `}
// `;

export const PasswordRecovery = styled.div`
  a {
    color: ${theme.colors.primaryColor};
    text-decoration: none;
  }
  font-weight: 400;
`;
