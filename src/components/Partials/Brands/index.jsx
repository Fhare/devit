import { BrandsContainer } from "../../BrandsContainer";
import { OutlinedButton } from "../../OutlinedButton";

import LogoDefault from "../../../assets/logo-devit-default.svg";

import "./styles.scss";

export function Brands() {
  return (
    <div className="brand-bg">
      <section className="brand-container">
        <div>
          <h1 className="brand-title">Empresas que confiam na metodologia</h1>

          <p className="brand-description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sint. Velit officia consequat duis enim velit
            mollit. Exercitation veniam consequat sunt
            nostrud amet.
          </p>
          <OutlinedButton>Quero ser um parceiro</OutlinedButton>
        </div>

        <BrandsContainer />
      </section>
    </div>
  );
}