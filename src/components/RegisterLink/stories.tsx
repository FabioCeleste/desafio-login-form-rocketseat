import { Meta, Story } from "@storybook/react/types-6-0";
import { RegisterLink, RegisterLinkProps } from ".";

export default {
  title: "RegisterLink",
  component: RegisterLink,
} as Meta<RegisterLinkProps>;

export const Template: Story<RegisterLinkProps> = (args) => {
  return (
    <div>
      <RegisterLink {...args} />
    </div>
  );
};
