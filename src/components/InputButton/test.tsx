import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { InputButton, InputButtonProps } from ".";

const props: InputButtonProps = {};

describe("<InputButton />", () => {
  it("should render a input button", () => {
    const { container } = renderTheme(<InputButton {...props} />);

    expect(screen.getByRole("button", { name: "ENTRAR" })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
