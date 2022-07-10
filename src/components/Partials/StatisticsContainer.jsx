import { DefaultCarousel } from "../DefaultCarousel";

import data from "../../data/CarouselStatistics";

import LogoDefault from "../../assets/logo-devit-default.svg";

import "../../styles/container.statistics.scss";

export function StatisticsContainer() {
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

        <DefaultCarousel data={data} />
      </section>
    </div>
  );
}