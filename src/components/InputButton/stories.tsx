import { Meta, Story } from "@storybook/react/types-6-0";
import { InputButton, InputButtonProps } from ".";

export default {
  title: "InputButton",
  component: InputButton,
} as Meta<InputButtonProps>;

export const Template: Story<InputButtonProps> = (args) => {
  return (
    <div>
      <InputButton {...args} />
    </div>
  );
};
