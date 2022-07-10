import { DefaultCarousel } from "../DefaultCarousel";
import { OutlinedButton } from "../OutlinedButton";

import data from "../../data/CarouselFreeCourse";

import "../../styles/container.freeCourse.scss";

export function FreeCourseContainer() {
  return (
    // fc is FreeCourse short
    <div className="fc-bg">
      <section className="fc-container">
        <div className="fc-heading">
          <h1 className="fc-title">
            <span>Cursos</span>
            <span>Gratuitos</span>
          </h1>

          <p className="fc-description">
            Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>

          <OutlinedButton>Crie sua conta</OutlinedButton>
        </div>

        <DefaultCarousel data={data} />
      </section>
    </div>
  );
}