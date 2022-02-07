import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { InputOptions, InputOptionsProps } from ".";
import { theme } from "../../styles/theme";

const props: InputOptionsProps = {
  title: "any",
};

describe("<InputOptions />", () => {
  it("should render a input options", () => {
    const { container } = renderTheme(<InputOptions {...props} />);

    expect(
      screen.getByRole("link", { name: "Esqueci minha senha" })
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
