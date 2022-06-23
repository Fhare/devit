import { BulletPoint } from "./BulletPoint";

import EmployeeImg from "../../../assets/img-free-course.png";

export function FreeCourseCarouselCard() {
  return (
    <div className="fc-card">
      <img src={EmployeeImg} alt="Nome funcionário" />

      <h2>Gerenciamento de projetos</h2>
      <p>
        Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit
        mollit. Exercitation veniam consequat
        sunt nostrud amet.
      </p>

      <BulletPoint />
    </div>
  );
}