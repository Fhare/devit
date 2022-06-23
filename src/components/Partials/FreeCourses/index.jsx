import { OutlinedButton } from "../../OutlinedButton";
import { FreeCourseCarouselCard } from "../FreeCourseCarouselCard";

import "./styles.scss";

export function FreeCourses() {
  return (
    // fc is FreeCourse short
    <div className="fc-bg">
      <section className="fc-container">
        <div className="fc-heading">
          <h1>
            <span>Cursos</span>
            <span>Gratuitos</span>
          </h1>

          <p>
            Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>

          <OutlinedButton>Crie sua conta</OutlinedButton>
        </div>

        <div className="fc-carousel">
          <FreeCourseCarouselCard />
          <FreeCourseCarouselCard />
          <FreeCourseCarouselCard />
        </div>
      </section>
    </div>
  );
}