import { FormHeader } from "../../components/FormHeader";
import { InputButton } from "../../components/InputButton";
import { InputOptions } from "../../components/InputOptions";
import { LoginInput } from "../../components/LoginInput";
import { RegisterLink } from "../../components/RegisterLink";
import { Wrapper, Main, Aside, Image, LogoIcon, FormDiv, Form } from "./styles";

export type LoginFormProps = {};

export const LoginForm = ({}: LoginFormProps) => {
  return (
    <Wrapper>
      <Main>
        <LogoIcon src="/assets/images/logo.svg" />
        <div>
          <FormDiv>
            <FormHeader
              title="Faça seu login"
              subTitle="Entre com suas informações de cadastro"
            />
            <Form>
              <LoginInput
                inputLabel="E-mail"
                inputPlaceholder="Digite seu e-mail"
                inputSvg="/assets/images/mail.svg"
                focusSvg="/assets/images/mail-focus.svg"
                as="email"
              />
              <LoginInput
                inputLabel="Senha"
                inputPlaceholder="Digite sua senha"
                inputSvg="/assets/images/lock.svg"
                focusSvg="/assets/images/lock-focus.svg"
                as="password"
              />
              <InputOptions />
              <InputButton />
              <RegisterLink />
            </Form>
          </FormDiv>
        </div>
      </Main>

      <Aside>
        <Image src="/assets/images/side-image-2x.jpg" />
      </Aside>
    </Wrapper>
  );
};
