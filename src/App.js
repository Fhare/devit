import { Header } from "./components/Header";
import { Hero } from "./components/Partials/Hero";
import { Courses } from "./components/Partials/Courses";
import { FreeCourses } from "./components/Partials/FreeCourses";
import { Method } from "./components/Partials/Method";
import { Statistics } from "./components/Partials/Statistics";

import "./styles/global.scss";

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Courses />
      <FreeCourses />
      <Method />
      <Statistics />
    </>
  );
}