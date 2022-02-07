import { Wrapper, Title } from "./styles";

export type FormHeaderProps = {
  title: string;
  subTitle: string;
};

export const FormHeader = ({ title, subTitle }: FormHeaderProps) => {
  return (
    <Wrapper>
      <Title>
        <img src="/assets/images/log-in.svg" />
        <span>{title}</span>
      </Title>
      <h2>{subTitle}</h2>
    </Wrapper>
  );
};
