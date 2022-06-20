import ItBlur from "../../../assets/it-blur.png";
import MainPhoto from "../../../assets/main-photo.png";
import HeroLogo from "../../../assets/logo-devit-default.svg";

import "./styles.scss";

export function Hero() {
  return (
    <div className="hero-bg">
      <main>
        <section className="hero-text">
          <img src={HeroLogo} alt="Devit" />

          <h1>Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </h1>
          <p>
            Amet minim mollit non deserunt
            ullamco est sit aliqua dolor.
          </p>
        </section>

        <section className="hero-image">
          <img src={ItBlur} alt="Logo devit desfocado" />
          <img className="person-image" src={MainPhoto} alt="Pessoa" />
        </section>
      </main>
    </div>
  )
}