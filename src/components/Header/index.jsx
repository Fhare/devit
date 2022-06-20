import { DefaultButton } from "../DefaultButton";
import { OutlinedButton } from "../OutlinedButton";

import HeaderLogo from "../../assets/logo-devit-white.svg";

import "./styles.scss";

export function Header() {
  return (
    <div className="header-bg">
      <header>
        <img src={HeaderLogo} alt="devit" />

        <div>
          <OutlinedButton>Entrar</OutlinedButton>
          <DefaultButton>Criar conta</DefaultButton>
        </div>
      </header>
    </div>
  );
}