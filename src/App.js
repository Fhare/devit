import { Header } from "./components/Header";
import { HeroContainer } from "./components/Partials/HeroContainer";
import { CourseContainer } from "./components/Partials/CourseContainer";
import { FreeCourseContainer } from "./components/Partials/FreeCourseContainer";
import { MethodContainer } from "./components/Partials/MethodContainer";
import { StatisticsContainer } from "./components/Partials/StatisticsContainer";
import { LearningPlatform } from "./components/Partials/LearningPlatform";
import { Brands } from "./components/Partials/Brands";
import { Footer } from "./components/Partials/Footer";

import "./styles/global.scss";

export function App() {
  return (
    <>
      <Header />
      <HeroContainer />
      <CourseContainer />
      <FreeCourseContainer />
      <MethodContainer />
      <StatisticsContainer />
      {/* <LearningPlatform />
      <Brands />
      <Footer /> */}
    </>
  );
}