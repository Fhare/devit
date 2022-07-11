import { Brands } from "../Brands";
import { OutlineButton } from "../OutlineButton";

import "../../styles/container.brand.scss";

export function BrandContainer() {
  return (
    <div className="brand-bg">
      <section className="brand-container">
        <div className="brand-content">
          <h1 className="brand-title">Empresas que confiam na metodologia</h1>

          <p className="brand-description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sint. Velit officia consequat duis enim velit
            mollit. Exercitation veniam consequat sunt
            nostrud amet.
          </p>
          <OutlineButton>Quero ser um parceiro</OutlineButton>
        </div>

        <Brands />
      </section>
    </div>
  );
}