import Carousel from "react-elastic-carousel";

import { StatisticsCarouselCard } from "../../StatisticsCarouselCard";

import LogoDefault from "../../../assets/logo-devit-default.svg";

import "./styles.scss";

export function Statistics() {
  return (
    // s is statistics
    <div className="s-bg">
      <section className="s-container">
        <div className="s-heading">
          <h1 className="s-percent">98.56%</h1>
          <img src={LogoDefault} alt="Devit" />
          <p className="s-description">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
            ullamco cillum dolor. Voluptate exercitation incididunt aliquip
            deserunt reprehenderit elit laborum. Nulla Lorem mollit
            cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
            Voluptate exercitation incididunt aliquip
            deserunt reprehenderit elit laborum.
          </p>
        </div>

        <Carousel
          className="f-carousel"
          itemsToShow={1}
          showArrows={false}
        >
          <StatisticsCarouselCard />
          <StatisticsCarouselCard />
          <StatisticsCarouselCard />
        </Carousel>
      </section>
    </div>
  );
}