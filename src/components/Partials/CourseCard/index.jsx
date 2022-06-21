import { DefaultButton } from "../../DefaultButton";

import "./styles.scss";

export function CourseCard() {
  return (
    <div className="card-container">
      <div className="card">
        <span>Formação em</span>
        <h2>Frontend</h2>

        <p>
          Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>

        <DefaultButton>Acessar curso</DefaultButton>
      </div>
      <div className="card">
        <span>Formação em</span>
        <h2>Python</h2>

        <p>
          Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>

        <DefaultButton>Acessar curso</DefaultButton>
      </div>
      <div className="card">
        <span>Formação em</span>
        <h2>Backend</h2>

        <p>
          Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>

        <DefaultButton>Acessar curso</DefaultButton>
      </div>
    </div>
  );
}