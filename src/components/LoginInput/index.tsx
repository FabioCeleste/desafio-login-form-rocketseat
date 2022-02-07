import { Wrapper, Label, Input } from "./styles";

export type LoginInputProps = {
  inputLabel: string;
  inputPlaceholder: string;
  inputSvg: string;
  focusSvg: string;
  as: string;
};

export const LoginInput = ({
  inputLabel,
  inputPlaceholder,
  inputSvg,
  focusSvg,
  as,
}: LoginInputProps) => {
  return (
    <Wrapper>
      <Label>{inputLabel}</Label>
      <div>
        <Input
          placeholder={inputPlaceholder}
          inputSvg={inputSvg}
          focusSvg={focusSvg}
          type={as}
        />
      </div>
    </Wrapper>
  );
};
