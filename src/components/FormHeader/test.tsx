import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { FormHeader, FormHeaderProps } from ".";

const props: FormHeaderProps = {
  title: "Faça seu login",
  subTitle: "Entre com suas informações de cadastro",
};

describe("<FormHeader />", () => {
  it("should render a header login", () => {
    renderTheme(<FormHeader {...props} />);

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: props.subTitle })
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/assets/images/log-in.svg"
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<FormHeader {...props} />);

    expect(container).toMatchSnapshot();
  });
});
