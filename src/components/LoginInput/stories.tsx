import { Meta, Story } from "@storybook/react/types-6-0";
import { LoginInput, LoginInputProps } from ".";

import { theme } from "../../styles/theme";

export default {
  title: "LoginInput",
  component: LoginInput,
  args: {
    inputLabel: "E-mail",
    inputPlaceholder: "Digite seu e-mail",
    inputSvg: "/assets/images/mail.svg",
    focusSvg: "/assets/images/mail-focus.svg",
  },
} as Meta<LoginInputProps>;

export const Template: Story<LoginInputProps> = (args) => {
  return (
    <div
      style={{
        background: theme.colors.formBackground,
        width: "100vw",
        height: "100vh",
      }}
    >
      <LoginInput {...args} />
    </div>
  );
};
