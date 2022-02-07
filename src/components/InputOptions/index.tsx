import Link from "next/link";
import { useState } from "react";
import { Wrapper, RememberMe, PasswordRecovery } from "./styles";

export type InputOptionsProps = {};

export const InputOptions = ({}: InputOptionsProps) => {
  const [shouldRemember, setShouldRemember] = useState(false);

  function onShouldRemember() {
    setShouldRemember(!shouldRemember);
  }

  return (
    <Wrapper>
      <label>
        <RememberMe
          type="checkbox"
          shouldRemember={shouldRemember}
          onClick={onShouldRemember}
          data-testid="remember-box"
        />

        <span className="spanRemember">Lembre-me</span>
      </label>

      <PasswordRecovery>
        <Link href="/">
          <a>Esqueci minha senha</a>
        </Link>
      </PasswordRecovery>
    </Wrapper>
  );
};
