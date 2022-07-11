import ItBlur from "../../assets/it-blur.png";
import MainPhoto from "../../assets/main-photo.png";
import HeroLogo from "../../assets/logo-devit-default.svg";

import "../../styles/container.hero.scss";

export function HeroContainer() {
  return (
    <div className="hero-bg">
      <main>
        <section className="hero-desc">
          <img className="hero-img-logo" src={HeroLogo} alt="Devit" />

          <h1 className="hero-title">Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </h1>
          <p className="hero-description">
            Amet minim mollit non deserunt
            ullamco est sit aliqua dolor.
          </p>
        </section>

        <section className="hero-image">
          <img className="hero-img-bg" src={ItBlur} alt="Logo devit desfocado" />
          <img className="hero-img-person" src={MainPhoto} alt="Pessoa" />
        </section>
      </main>
    </div>
  )
}