import { Meta, Story } from "@storybook/react/types-6-0";
import { InputOptions, InputOptionsProps } from ".";

export default {
  title: "InputOptions",
  component: InputOptions,
} as Meta<InputOptionsProps>;

export const Template: Story<InputOptionsProps> = (args) => {
  return (
    <div>
      <InputOptions {...args} />
    </div>
  );
};
