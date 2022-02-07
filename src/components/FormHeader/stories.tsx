import { Meta, Story } from "@storybook/react/types-6-0";
import { FormHeader, FormHeaderProps } from ".";

export default {
  title: "FormHeader",
  component: FormHeader,
  args: {
    title: "Faça seu login",
    subTitle: "Entre com suas informações de cadastro",
  },
} as Meta<FormHeaderProps>;

export const Template: Story<FormHeaderProps> = (args) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#24221f",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FormHeader {...args} />
    </div>
  );
};
