import { OutlineButton } from "../OutlineButton";
import { DefaultButton } from "../DefaultButton";

import Macbook from "../../assets/macbook.svg";

import "../../styles/container.platform.scss";

export function PlatformContainer() {
  return (
    <section className="lp-container">
      <div className="lp-heading">
        <h1 className="lp-title">Plataforma de aprendizado</h1>
        <p className="lp-description">
          Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat
          sunt nostrud amet.
        </p>

        <OutlineButton>Alunos</OutlineButton>
        <DefaultButton>Empresas</DefaultButton>
      </div>

      <img src={Macbook} alt="macbook" className="macbook-img" />
    </section>
  );
}