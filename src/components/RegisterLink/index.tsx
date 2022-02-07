import Link from "next/link";
import { Wrapper } from "./styles";

export type RegisterLinkProps = {};

export const RegisterLink = ({}: RegisterLinkProps) => {
  return (
    <Wrapper>
      <Link href="/">
        <a>
          Não tem uma conta?
          <span className="register-span"> Registre-se</span>
        </a>
      </Link>
    </Wrapper>
  );
};
