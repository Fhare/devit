import { CourseCard } from "../CourseCard";

import LogoDefault from "../../../assets/logo-devit-default.svg";

import "./styles.scss";

export function Courses() {
  return (
    <section className="courses-container">
      <div className="courses-heading">
        <img src={LogoDefault} alt="devit" />
        <h1 className="course-title">Nossos cursos</h1>
      </div>

      <p className="course-description">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
        sunt nostrud amet.
      </p>

      <CourseCard />
    </section>
  );
}